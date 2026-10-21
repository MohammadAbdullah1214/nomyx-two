import { DecoratorNode, DOMConversionMap, DOMConversionOutput, DOMExportOutput, $getNodeByKey, LexicalNode, NodeKey, SerializedLexicalNode, Spread } from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { Accessibility, Trash2, Upload } from 'lucide-react';
import React, { ChangeEvent, ReactNode, useRef, useState } from 'react';

export interface ImagePayload {
  altText: string;
  src: string;
  width?: number;
  height?: number;
  key?: NodeKey;
}

export type SerializedImageNode = Spread<
  {
    altText: string;
    src: string;
    width?: number;
    height?: number;
  },
  SerializedLexicalNode
>;

type AltTextMode = 'descriptive' | 'decorative';

function ArticleImage({
  altText,
  height,
  nodeKey,
  src,
  width,
}: {
  altText: string;
  height?: number;
  nodeKey: NodeKey;
  src: string;
  width?: number;
}) {
  const [editor] = useLexicalComposerContext();
  const replacementInputRef = useRef<HTMLInputElement>(null);
  const [altTextMode, setAltTextMode] = useState<AltTextMode>(altText ? 'descriptive' : 'decorative');
  const [draftAltText, setDraftAltText] = useState(altText);
  const [isAltTextOpen, setIsAltTextOpen] = useState(false);
  const [replacementImage, setReplacementImage] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  const openAltTextEditor = () => {
    setAltTextMode(altText ? 'descriptive' : 'decorative');
    setDraftAltText(altText);
    setReplacementImage(null);
    setIsAltTextOpen(true);
  };

  const removeImage = () => {
    editor.update(() => {
      const node = $getNodeByKey(nodeKey);
      if ($isImageNode(node)) {
        node.remove();
      }
    });
  };

  const selectReplacement = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    setAltTextMode(altText ? 'descriptive' : 'decorative');
    setDraftAltText(altText);
    setReplacementImage(file);
    setIsAltTextOpen(true);
  };

  const saveImageDetails = async () => {
    if (altTextMode === 'descriptive' && !draftAltText.trim()) return;

    setSaving(true);
    try {
      let nextSrc = src;

      if (replacementImage) {
        const formData = new FormData();
        formData.append('image', replacementImage);
        formData.append('title', 'blog-content');

        const response = await fetch('/api/admin/blogs/images', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Image upload failed');
        }

        const { image } = await response.json();
        nextSrc = image.url;
      }

      editor.update(() => {
        const node = $getNodeByKey(nodeKey);
        if ($isImageNode(node)) {
          node.setSrc(nextSrc);
          node.setAltText(altTextMode === 'descriptive' ? draftAltText.trim() : '');
        }
      });

      setIsAltTextOpen(false);
      setReplacementImage(null);
    } finally {
      setSaving(false);
    }
  };

  return (
    <figure className="blog-content-image group relative my-8" contentEditable={false}>
      <img src={src} alt={altText} width={width} height={height} className="block h-auto max-w-full rounded-[8px] border border-border" />
      <div className="absolute inset-0 flex items-center justify-center gap-3 rounded-[8px] bg-ink/60 opacity-0 transition-opacity group-hover:opacity-100">
        <button type="button" onMouseDown={(event) => event.preventDefault()} onClick={() => replacementInputRef.current?.click()} className="inline-flex h-8 items-center justify-center gap-1.5 rounded-[6px] bg-white px-3 text-[10px] font-bold uppercase tracking-[0.14em] text-ink shadow-xl transition-transform hover:-translate-y-0.5 hover:bg-slate-50">
          <Upload size={12} /> Change
        </button>
        <button type="button" onMouseDown={(event) => event.preventDefault()} onClick={removeImage} className="inline-flex h-8 items-center justify-center gap-1.5 rounded-[6px] bg-red-600 px-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-xl transition-transform hover:-translate-y-0.5 hover:bg-red-700">
          <Trash2 size={12} /> Remove
        </button>
        <button type="button" onMouseDown={(event) => event.preventDefault()} onClick={openAltTextEditor} className="inline-flex h-8 items-center justify-center gap-1.5 rounded-[6px] bg-white px-3 text-[10px] font-bold uppercase tracking-[0.14em] text-ink shadow-xl transition-transform hover:-translate-y-0.5 hover:bg-slate-50">
          <Accessibility size={13} /> Alt text
        </button>
      </div>
      <input ref={replacementInputRef} type="file" accept="image/*" className="hidden" onChange={selectReplacement} />

      {isAltTextOpen && (
        <div className="absolute left-1/2 top-1/2 z-20 w-[min(30rem,calc(100vw-3rem))] -translate-x-1/2 -translate-y-1/2 rounded-[8px] border border-border bg-white p-5 text-left shadow-2xl">
          <p className="text-sm font-bold text-ink">{replacementImage ? 'Replace image and set alt text' : 'Edit image alt text'}</p>
          <p className="mt-1 text-xs leading-5 text-ink-muted">Choose how assistive technology should treat this image.</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <label className="flex cursor-pointer gap-2 rounded border border-border p-3 text-sm text-ink">
              <input type="radio" name={`alt-text-mode-${nodeKey}`} checked={altTextMode === 'descriptive'} onChange={() => setAltTextMode('descriptive')} />
              <span><strong className="block">Descriptive</strong><span className="text-xs text-ink-muted">Explain meaningful content.</span></span>
            </label>
            <label className="flex cursor-pointer gap-2 rounded border border-border p-3 text-sm text-ink">
              <input type="radio" name={`alt-text-mode-${nodeKey}`} checked={altTextMode === 'decorative'} onChange={() => setAltTextMode('decorative')} />
              <span><strong className="block">Decorative</strong><span className="text-xs text-ink-muted">Save an empty alt value.</span></span>
            </label>
          </div>
          {altTextMode === 'descriptive' && (
            <input autoFocus value={draftAltText} onChange={(event) => setDraftAltText(event.target.value)} placeholder="Describe the image for screen readers" className="mt-3 h-10 w-full rounded border border-border px-3 text-sm outline-none focus:border-accent" />
          )}
          <div className="mt-4 flex justify-end gap-2">
            <button type="button" onClick={() => setIsAltTextOpen(false)} className="rounded px-3 py-2 text-sm text-ink-muted hover:bg-slate-100">Cancel</button>
            <button type="button" onClick={saveImageDetails} disabled={saving || (altTextMode === 'descriptive' && !draftAltText.trim())} className="rounded bg-accent px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">{saving ? 'Saving...' : 'Save'}</button>
          </div>
        </div>
      )}
    </figure>
  );
}

function convertImageElement(domNode: Node): null | DOMConversionOutput {
  let imageElement: HTMLImageElement | null = null;

  if (domNode instanceof HTMLImageElement) {
    imageElement = domNode;
  } else if (domNode instanceof HTMLElement) {
    imageElement = domNode.querySelector('img');
  }

  if (imageElement) {
    const altText = imageElement.getAttribute('alt') || '';
    const src = imageElement.getAttribute('src') || '';
    const widthAttr = imageElement.getAttribute('width');
    const heightAttr = imageElement.getAttribute('height');
    const width = widthAttr ? parseInt(widthAttr, 10) : undefined;
    const height = heightAttr ? parseInt(heightAttr, 10) : undefined;
    const node = $createImageNode({ altText, src, width, height });
    return { node };
  }

  return null;
}

export class ImageNode extends DecoratorNode<ReactNode> {
  __src: string;
  __altText: string;
  __width?: number;
  __height?: number;

  static getType(): string {
    return 'image';
  }

  static clone(node: ImageNode): ImageNode {
    return new ImageNode(
      node.__src,
      node.__altText,
      node.__width,
      node.__height,
      node.__key,
    );
  }

  static importJSON(serializedNode: SerializedImageNode): ImageNode {
    const { altText, src, width, height } = serializedNode;
    const node = $createImageNode({
      altText,
      src,
      width,
      height,
    });
    return node;
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('figure');
    element.className = 'blog-content-image';
    
    const img = document.createElement('img');
    img.setAttribute('src', this.__src);
    img.setAttribute('alt', this.__altText);
    if (this.__width) {
      img.setAttribute('width', this.__width.toString());
    }
    if (this.__height) {
      img.setAttribute('height', this.__height.toString());
    }
    
    element.appendChild(img);
    return { element };
  }

  static importDOM(): DOMConversionMap | null {
    return {
      figure: (node: Node) => {
        if (
          node instanceof HTMLElement &&
          node.classList.contains('blog-content-image') &&
          node.querySelector('img')
        ) {
          return {
            conversion: convertImageElement,
            priority: 2,
          };
        }

        return null;
      },
      img: (node: Node) => ({
        conversion: convertImageElement,
        priority: 0,
      }),
    };
  }

  constructor(
    src: string,
    altText: string,
    width?: number,
    height?: number,
    key?: NodeKey,
  ) {
    super(key);
    this.__src = src;
    this.__altText = altText;
    this.__width = width;
    this.__height = height;
  }

  exportJSON(): SerializedImageNode {
    return {
      altText: this.getAltText(),
      src: this.getSrc(),
      width: this.__width,
      height: this.__height,
      type: 'image',
      version: 1,
    };
  }

  getSrc(): string {
    return this.__src;
  }

  getAltText(): string {
    return this.__altText;
  }

  setAltText(altText: string) {
    const writable = this.getWritable();
    writable.__altText = altText;
  }

  setSrc(src: string) {
    const writable = this.getWritable();
    writable.__src = src;
  }

  createDOM(config: any): HTMLElement {
    const element = document.createElement('div');
    const theme = config.theme;
    const className = theme.image;
    if (className !== undefined) {
      element.className = className;
    }

    return element;
  }

  updateDOM(): false {
    return false;
  }

  decorate(): ReactNode {
    return <ArticleImage altText={this.__altText} height={this.__height} nodeKey={this.getKey()} src={this.__src} width={this.__width} />;
  }
}

export function $createImageNode({
  altText,
  src,
  width,
  height,
  key,
}: ImagePayload): ImageNode {
  return new ImageNode(src, altText, width, height, key);
}

export function $isImageNode(
  node: LexicalNode | null | undefined,
): node is ImageNode {
  return node instanceof ImageNode;
}
