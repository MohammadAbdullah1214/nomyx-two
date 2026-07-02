import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html';
import { useEffect, useRef } from 'react';
import { $getRoot, $createParagraphNode, $isElementNode, $isDecoratorNode, LexicalNode } from 'lexical';

function isEmptyParagraphNode(node: LexicalNode) {
  return (
    node.getType() === 'paragraph' &&
    $isElementNode(node) &&
    node.getTextContent().trim() === ''
  );
}

function isImageNode(node: LexicalNode | undefined) {
  return node?.getType() === 'image';
}

function removeEmptyParagraphsAroundImages(nodes: LexicalNode[]) {
  return nodes.filter((node, index) => {
    if (!isEmptyParagraphNode(node)) {
      return true;
    }

    return !isImageNode(nodes[index - 1]) && !isImageNode(nodes[index + 1]);
  });
}

function normalizeEditorHtml(html: string) {
  const emptyParagraph = String.raw`<p(?:\s[^>]*)?>\s*(?:<br\s*\/?>|&nbsp;|\s)*<\/p>`;
  const imageFigure = String.raw`<figure\b(?=[^>]*\bblog-content-image\b)[^>]*>[\s\S]*?<\/figure>`;

  return html
    .replace(
      new RegExp(`(${imageFigure})\\s*(?:${emptyParagraph}\\s*)+`, 'gi'),
      '$1'
    )
    .replace(
      new RegExp(`(?:${emptyParagraph}\\s*)+(${imageFigure})`, 'gi'),
      '$1'
    );
}

export function HTMLSyncPlugin({ value, onChange }: { value: string; onChange: (html: string) => void }) {
  const [editor] = useLexicalComposerContext();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current && value) {
      isFirstRender.current = false;
      editor.update(() => {
        const parser = new DOMParser();
        const dom = parser.parseFromString(value, 'text/html');
        const nodes = $generateNodesFromDOM(editor, dom);
        const root = $getRoot();
        root.clear();
        
        const topLevelNodes = [];
        let currentParagraph = null;
        
        for (const node of nodes) {
          if (node.getType() !== 'text' && ($isElementNode(node) || $isDecoratorNode(node))) {
            topLevelNodes.push(node);
            currentParagraph = null;
          } else {
            if (!currentParagraph) {
              currentParagraph = $createParagraphNode();
              topLevelNodes.push(currentParagraph);
            }
            currentParagraph.append(node);
          }
        }
        
        const normalizedNodes = removeEmptyParagraphsAroundImages(topLevelNodes);

        if (normalizedNodes.length === 0) {
          topLevelNodes.push($createParagraphNode());
        } else {
          topLevelNodes.splice(0, topLevelNodes.length, ...normalizedNodes);
        }
        
        root.append(...topLevelNodes);
      });
    }
  }, [editor, value]);

  useEffect(() => {
    return editor.registerUpdateListener(({ dirtyElements, dirtyLeaves }) => {
      if (dirtyElements.size === 0 && dirtyLeaves.size === 0) return;

      editor.read(() => {
        const html = normalizeEditorHtml($generateHtmlFromNodes(editor, null));
        setTimeout(() => onChange(html), 0);
      });
    });
  }, [editor, onChange]);

  return null;
}
