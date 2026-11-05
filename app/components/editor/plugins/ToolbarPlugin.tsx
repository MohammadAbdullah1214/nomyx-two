import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useCallback, useState, useRef, useEffect, ChangeEvent } from 'react';
import { createPortal } from 'react-dom';
import {
  SELECTION_CHANGE_COMMAND,
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND,
  $getSelection,
  $isRangeSelection,
  $createParagraphNode,
  COMMAND_PRIORITY_CRITICAL,
  $isTextNode,
  TextFormatType,
  ElementFormatType,
  $getRoot,
  $setSelection,
  type RangeSelection,
} from 'lexical';
import { TOGGLE_LINK_COMMAND, $isLinkNode } from '@lexical/link';
import { isSafeEditorLink } from '@/lib/faq-links';
import { $wrapNodes } from '@lexical/selection';
import { $patchStyleText } from '@lexical/selection';
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  ListNode,
} from '@lexical/list';
import { $createHeadingNode, $createQuoteNode, HeadingNode } from '@lexical/rich-text';
import { mergeRegister, $getNearestNodeOfType } from '@lexical/utils';
import { INSERT_TABLE_COMMAND } from '@lexical/table';
import { toast } from 'sonner';
import {
  Bold, Heading1, Heading2, Heading3, ImagePlus, Italic, Link2, List, ListOrdered, Quote, 
  RemoveFormatting, Underline, ListChecks, Undo, Redo, Strikethrough, Code, AlignLeft, 
  AlignCenter, AlignRight, AlignJustify, Type, Palette, Baseline, ChevronDown, Check, TypeOutline,
  Table as TableIcon, Unlink
} from 'lucide-react';
import { $createCalloutNode, $isCalloutNode } from '../nodes/CalloutNode';
import { $createImageNode } from '../nodes/ImageNode';
import { $createCodeNode } from '@lexical/code';

const FONT_FAMILY_OPTIONS = [
  ['Arial', 'Arial'],
  ['Courier New', 'Courier New'],
  ['Georgia', 'Georgia'],
  ['Times New Roman', 'Times New Roman'],
  ['Trebuchet MS', 'Trebuchet MS'],
  ['Verdana', 'Verdana'],
];

const FONT_SIZE_OPTIONS = [
  ['10px', '10px'],
  ['12px', '12px'],
  ['14px', '14px'],
  ['15px', '15px'],
  ['16px', '16px'],
  ['17px', '17px'],
  ['18px', '18px'],
  ['20px', '20px'],
  ['24px', '24px'],
  ['30px', '30px'],
];

function Dropdown({ title, icon: Icon, children, disabled = false, showArrow = true }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        type="button"
        onMouseDown={e => e.preventDefault()}
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2 py-1.5 rounded hover:bg-slate-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors text-sm font-medium text-slate-700 h-8 whitespace-nowrap"
        title={title}
      >
        {Icon && <Icon size={16} />}
        {title && <span>{title}</span>}
        {showArrow && <ChevronDown size={14} className="text-slate-400" />}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 min-w-[160px] bg-white border border-slate-200 shadow-lg rounded-md py-1 z-50 flex flex-col gap-0.5" onClick={() => setIsOpen(false)}>
          {children}
        </div>
      )}
    </div>
  );
}

function DropdownItem({ onClick, icon: Icon, label, active = false }: any) {
  return (
    <button
      type="button"
      onMouseDown={e => e.preventDefault()}
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-1.5 text-sm text-left w-full hover:bg-slate-50 transition-colors ${active ? 'bg-slate-50 text-accent font-semibold' : 'text-slate-700'}`}
    >
      {Icon && <Icon size={16} className={active ? 'text-accent' : 'text-slate-500'} />}
      <span className="flex-1">{label}</span>
      {active && <Check size={14} className="text-accent" />}
    </button>
  );
}

export function ToolbarPlugin({ imageUploadTitle = "blog-content" }: { imageUploadTitle?: string }) {
  const [editor] = useLexicalComposerContext();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [pendingImage, setPendingImage] = useState<File | null>(null);
  const [imageAltText, setImageAltText] = useState('');
  const [imageAltTextMode, setImageAltTextMode] = useState<'descriptive' | 'decorative'>('descriptive');

  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const linkSelection = useRef<RangeSelection | null>(null);
  const [isLink, setIsLink] = useState(false);

  // Formats
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [isCode, setIsCode] = useState(false);

  // Block type & styles
  const [blockType, setBlockType] = useState('paragraph');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [fontSize, setFontSize] = useState('Select text');
  const [alignment, setAlignment] = useState<ElementFormatType>('left');

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      // Inline styles
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
      setIsCode(selection.hasFormat('code'));

      // Node selection for block type
      const anchorNode = selection.anchor.getNode();
      setIsLink($isLinkNode(anchorNode) || $isLinkNode(anchorNode.getParent()));
      const element =
        anchorNode.getKey() === 'root'
          ? anchorNode
          : anchorNode.getTopLevelElementOrThrow();
      const elementKey = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);
      if (elementDOM !== null) {
        if (element.getType() === 'list') {
          const listElement = element as ListNode;
          const parentList = $getNearestNodeOfType(anchorNode, ListNode);
          const type = parentList ? parentList.getListType() : listElement.getListType();
          setBlockType(type);
        } else {
          const type = element.getType() === 'heading' ? (element as HeadingNode).getTag() : element.getType();
          setBlockType(type);
        }
      }

      const textNodes = selection.getNodes().filter($isTextNode);
      const readStyle = (style: string, property: string) => {
        const declaration = document.createElement('span').style;
        declaration.cssText = style;
        return declaration.getPropertyValue(property);
      };
      const sizes = new Set(textNodes.map(node => {
        const element = editor.getElementByKey(node.getKey());
        return (selection.isCollapsed() ? readStyle(selection.style, 'font-size') : '') || readStyle(node.getStyle(), 'font-size') || (element ? getComputedStyle(element).fontSize : '');
      }).filter(Boolean));
      if (!sizes.size) {
        const dom = editor.getElementByKey(anchorNode.getKey()) ?? editor.getRootElement();
        setFontSize(dom ? getComputedStyle(dom).fontSize : 'Select text');
      } else setFontSize(sizes.size === 1 ? [...sizes][0] : 'Mixed');
      const node = textNodes[0];
      if (node) {
        const dom = editor.getElementByKey(node.getKey());
        setFontFamily((readStyle(node.getStyle(), 'font-family') || (dom ? getComputedStyle(dom).fontFamily : 'Arial')).split(',')[0].replace(/['"]/g, '').trim());
      }
    } else {
      setFontSize('Select text');
      setIsLink(false);
    }
  }, [editor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, _newEditor) => {
          updateToolbar();
          return false;
        },
        COMMAND_PRIORITY_CRITICAL
      )
    );
  }, [editor, updateToolbar]);

  // Actions
  const applyStyleText = useCallback(
    (styles: Record<string, string>) => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $patchStyleText(selection, styles);
        }
      });
    },
    [editor]
  );

  const onFontFamilySelect = useCallback(
    (value: string) => {
      applyStyleText({ 'font-family': value });
    },
    [applyStyleText]
  );

  const onFontSizeSelect = useCallback(
    (value: string) => {
      applyStyleText({ 'font-size': value });
    },
    [applyStyleText]
  );

  const onFontColorSelect = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      applyStyleText({ color: e.target.value });
    },
    [applyStyleText]
  );

  const onBgColorSelect = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      applyStyleText({ 'background-color': e.target.value });
    },
    [applyStyleText]
  );

  const formatBlock = (type: string) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        if (type === 'paragraph') {
          $wrapNodes(selection, () => $createParagraphNode());
        } else if (type === 'h1') {
          $wrapNodes(selection, () => $createHeadingNode('h1'));
        } else if (type === 'h2') {
          $wrapNodes(selection, () => $createHeadingNode('h2'));
        } else if (type === 'h3') {
          $wrapNodes(selection, () => $createHeadingNode('h3'));
        } else if (type === 'quote') {
          $wrapNodes(selection, () => $createQuoteNode());
        } else if (type === 'bullet') {
          editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
        } else if (type === 'number') {
          editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
        } else if (type === 'code') {
          $wrapNodes(selection, () => $createCodeNode());
        } else if (type === 'callout') {
          const list = $getNearestNodeOfType(selection.anchor.getNode(), ListNode);
          if (list && !$isCalloutNode(list.getParent())) {
            const callout = $createCalloutNode();
            list.insertBefore(callout);
            callout.append(list);
          } else if (!list) {
            $wrapNodes(selection, () => $createCalloutNode());
          }
        }
      }
    });
  };

  const formatKeyTakeaways = () => {
    editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);

    editor.update(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) return;

      const list = $getNearestNodeOfType(selection.anchor.getNode(), ListNode);
      if (!list || $isCalloutNode(list.getParent())) return;

      const callout = $createCalloutNode();
      list.insertBefore(callout);
      callout.append(list);
    });
  };

  const clearFormatting = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        selection.getNodes().forEach((node) => {
          if ($isTextNode(node)) {
            node.setFormat(0);
            node.setStyle('');
          }
        });
      }
    });
  };

  const selectImage = (event: ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files?.[0];
    event.target.value = "";
    if (!imageFile) return;

    setPendingImage(imageFile);
    setImageAltText('');
    setImageAltTextMode('descriptive');
  };

  const handleImageUpload = async () => {
    if (!pendingImage || (imageAltTextMode === 'descriptive' && !imageAltText.trim())) return;

    setUploadingImage(true);
    const formData = new FormData();
    formData.append("image", pendingImage);
    formData.append("title", imageUploadTitle);

    try {
      const uploadRes = await fetch("/api/admin/blogs/images", {
        method: "POST",
        body: formData,
      });

      if (!uploadRes.ok) throw new Error("Upload failed");
      const { image } = await uploadRes.json();
      
      editor.update(() => {
        const imageNode = $createImageNode({ src: image.url, altText: imageAltTextMode === 'descriptive' ? imageAltText.trim() : '' });
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          selection.insertNodes([imageNode]);
        } else {
          $getRoot().append(imageNode);
        }
      });
      setPendingImage(null);
      setImageAltText('');
      setImageAltTextMode('descriptive');
      toast.success("Image uploaded");
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload image");
    } finally {
      setUploadingImage(false);
    }
  };

  const insertLink = () => {
    if (!isLinkModalOpen) {
      editor.getEditorState().read(() => {
        const selection = $getSelection();
        linkSelection.current = $isRangeSelection(selection) ? selection.clone() : null;
      });
      if (!linkSelection.current) return;
      setIsLinkModalOpen(true);
      return;
    }
    if (linkUrl) {
      if (!isSafeEditorLink(linkUrl.trim())) { toast.error('Enter a valid https://, http://, mailto:, tel:, relative, or # URL.'); return; }
      editor.update(() => {
        if (linkSelection.current) $setSelection(linkSelection.current.clone());
        editor.dispatchCommand(TOGGLE_LINK_COMMAND, linkUrl.trim());
      });
      setLinkUrl('');
      setIsLinkModalOpen(false);
    }
  };

  const ToolbarButton = ({ onClick, icon: Icon, active, title, disabled }: any) => (
    <button
      type="button"
      onMouseDown={e => e.preventDefault()}
      onClick={onClick}
      disabled={disabled}
      className={`p-1.5 rounded transition-colors ${active ? 'bg-slate-200 text-accent' : 'text-slate-600 hover:bg-slate-100'} disabled:opacity-50`}
      title={title}
    >
      <Icon size={16} />
    </button>
  );

  const Divider = () => <div className="w-[1px] bg-slate-200 h-6 mx-1 shrink-0" />;

  const blockTypeToName: Record<string, string> = {
    paragraph: 'Normal',
    h1: 'Heading 1',
    h2: 'Heading 2',
    h3: 'Heading 3',
    quote: 'Quote',
    bullet: 'Bulleted List',
    number: 'Numbered List',
    code: 'Code Block',
    callout: 'Highlighter Box'
  };

  return (
    <>
      <div className="sticky top-[var(--cms-editor-header-height,0px)] z-30 flex flex-wrap items-center gap-1 rounded-t-[8px] border-b border-border bg-white p-2 shadow-[0_8px_18px_rgba(10,17,40,0.08)]">
        
        {/* History */}
        <ToolbarButton onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)} icon={Undo} title="Undo" />
        <ToolbarButton onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)} icon={Redo} title="Redo" />
        
        <Divider />

        {/* Block Type */}
        <Dropdown title={blockTypeToName[blockType] || 'Normal'} icon={TypeOutline}>
          <DropdownItem label="Normal" onClick={() => formatBlock('paragraph')} active={blockType === 'paragraph'} />
          <DropdownItem label="Heading 1" icon={Heading1} onClick={() => formatBlock('h1')} active={blockType === 'h1'} />
          <DropdownItem label="Heading 2" icon={Heading2} onClick={() => formatBlock('h2')} active={blockType === 'h2'} />
          <DropdownItem label="Heading 3" icon={Heading3} onClick={() => formatBlock('h3')} active={blockType === 'h3'} />
          <DropdownItem label="Bulleted List" icon={List} onClick={() => formatBlock('bullet')} active={blockType === 'bullet'} />
          <DropdownItem label="Numbered List" icon={ListOrdered} onClick={() => formatBlock('number')} active={blockType === 'number'} />
          <DropdownItem label="Quote" icon={Quote} onClick={() => formatBlock('quote')} active={blockType === 'quote'} />
          <DropdownItem label="Code Block" icon={Code} onClick={() => formatBlock('code')} active={blockType === 'code'} />
          <DropdownItem label="Highlighter Box" icon={Baseline} onClick={() => formatBlock('callout')} active={blockType === 'callout'} />
           <DropdownItem label="Key Takeaways" icon={ListChecks} onClick={formatKeyTakeaways} />
        </Dropdown>

        <Divider />

        {/* Font Family */}
        <Dropdown title={fontFamily}>
          {FONT_FAMILY_OPTIONS.map(([option, text]) => (
            <DropdownItem key={option} label={text} onClick={() => onFontFamilySelect(option)} active={fontFamily === option} />
          ))}
        </Dropdown>

        <Divider />

        {/* Font Size */}
        <Dropdown title={fontSize}>
          {FONT_SIZE_OPTIONS.map(([option, text]) => (
            <DropdownItem key={option} label={text} onClick={() => onFontSizeSelect(option)} active={fontSize === option} />
          ))}
        </Dropdown>

        <Divider />

        {/* Inline Formatting */}
        <ToolbarButton onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')} icon={Bold} active={isBold} title="Bold" />
        <ToolbarButton onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')} icon={Italic} active={isItalic} title="Italic" />
        <ToolbarButton onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')} icon={Underline} active={isUnderline} title="Underline" />
        <ToolbarButton onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')} icon={Strikethrough} active={isStrikethrough} title="Strikethrough" />
        
        <Divider />

        <ToolbarButton onClick={() => {
          const rows = prompt('How many rows?', '3');
          const columns = prompt('How many columns?', '3');
          if (rows && columns && !isNaN(Number(rows)) && !isNaN(Number(columns))) {
            editor.dispatchCommand(INSERT_TABLE_COMMAND, {
              columns,
              rows,
              includeHeaders: { rows: true, columns: false },
            });
          }
        }} icon={TableIcon} title="Insert Table" />
        <ToolbarButton onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code')} icon={Code} active={isCode} title="Inline Code" />
        <ToolbarButton onClick={() => insertLink()} icon={Link2} title="Link" />
        <ToolbarButton onClick={() => editor.dispatchCommand(TOGGLE_LINK_COMMAND, null)} icon={Unlink} title="Remove link" disabled={!isLink} />
        
        <Divider />

        {/* Colors */}
        <div className="flex items-center gap-1" title="Text Color">
          <Palette size={16} className="text-slate-500 ml-1" />
          <input 
            type="color" 
            onChange={onFontColorSelect} 
            className="w-5 h-5 p-0 border-0 cursor-pointer bg-transparent"
          />
        </div>
        <div className="flex items-center gap-1" title="Background Color">
          <Type size={16} className="text-slate-500 ml-1" />
          <input 
            type="color" 
            onChange={onBgColorSelect} 
            className="w-5 h-5 p-0 border-0 cursor-pointer bg-transparent"
            defaultValue="#ffffff"
          />
        </div>

        <Divider />

        {/* Clear Formatting */}
        <ToolbarButton onClick={clearFormatting} icon={RemoveFormatting} title="Clear Formatting" />

        <Divider />

        {/* Insert Image */}
        <Dropdown title="Insert" icon={ImagePlus}>
          <DropdownItem label="Image" icon={ImagePlus} onClick={() => fileInputRef.current?.click()} />
        </Dropdown>
        <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={selectImage} />

        <Divider />

        {/* Alignment */}
        <Dropdown title="Align" icon={AlignLeft}>
          <DropdownItem label="Left Align" icon={AlignLeft} onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left')} />
          <DropdownItem label="Center Align" icon={AlignCenter} onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center')} />
          <DropdownItem label="Right Align" icon={AlignRight} onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right')} />
          <DropdownItem label="Justify Align" icon={AlignJustify} onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify')} />
        </Dropdown>
      </div>

      {isLinkModalOpen && createPortal(
        <div role="dialog" aria-label="Add link" className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white border border-border shadow-lg rounded-md p-3 z-50 flex flex-wrap items-center gap-2 max-w-[calc(100vw-2rem)]">
          <input
            autoFocus
            type="url"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            placeholder="https://..."
            className="border border-border rounded px-2 py-1 text-sm outline-none focus:border-accent w-64"
            onKeyDown={(e) => {
              if (e.key === 'Enter') { e.preventDefault(); insertLink(); }
              if (e.key === 'Escape') setIsLinkModalOpen(false);
            }}
          />
          <button type="button" onClick={insertLink} className="bg-accent text-white px-3 py-1 rounded text-sm hover:bg-blue-700">Add</button>
          <button type="button" onClick={() => setIsLinkModalOpen(false)} className="text-slate-500 hover:bg-slate-100 px-2 py-1 rounded text-sm">Cancel</button>
        </div>, document.body
      )}

      {pendingImage && (
        <div className="absolute top-14 left-1/2 z-50 w-[min(28rem,calc(100vw-2rem))] -translate-x-1/2 rounded-md border border-border bg-white p-4 shadow-lg">
          <p className="text-sm font-semibold text-ink">Set image alt text</p>
          <p className="mt-1 text-xs text-ink-muted">Choose how assistive technology should treat this image.</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <label className="flex cursor-pointer gap-2 rounded border border-border p-3 text-sm text-ink"><input type="radio" name="upload-alt-text-mode" checked={imageAltTextMode === 'descriptive'} onChange={() => setImageAltTextMode('descriptive')} /><span><strong className="block">Descriptive</strong><span className="text-xs text-ink-muted">Explain meaningful content.</span></span></label>
            <label className="flex cursor-pointer gap-2 rounded border border-border p-3 text-sm text-ink"><input type="radio" name="upload-alt-text-mode" checked={imageAltTextMode === 'decorative'} onChange={() => setImageAltTextMode('decorative')} /><span><strong className="block">Decorative</strong><span className="text-xs text-ink-muted">Save an empty alt value.</span></span></label>
          </div>
          {imageAltTextMode === 'descriptive' && <input autoFocus type="text" value={imageAltText} onChange={(event) => setImageAltText(event.target.value)} placeholder="Describe the image for screen readers" className="mt-3 h-10 w-full rounded border border-border px-3 text-sm outline-none focus:border-accent" onKeyDown={(event) => { if (event.key === 'Enter') handleImageUpload(); if (event.key === 'Escape') setPendingImage(null); }} />}
          <div className="mt-3 flex justify-end gap-2">
            <button onClick={() => setPendingImage(null)} className="rounded px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100">Cancel</button>
            <button onClick={handleImageUpload} disabled={(imageAltTextMode === 'descriptive' && !imageAltText.trim()) || uploadingImage} className="rounded bg-accent px-3 py-1.5 text-sm text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">
              {uploadingImage ? 'Uploading...' : 'Upload image'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
