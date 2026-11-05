"use client";

import { useRef, useState } from "react";
import { Link2, Unlink } from "lucide-react";
import { isSafeEditorLink, parseFaqAnswer } from "@/lib/faq-links";
import FaqAnswer from "./FaqAnswer";

export default function FaqAnswerEditor({
  value,
  onChange,
  index,
}: {
  value: string;
  onChange: (answer: string) => void;
  index: number;
}) {
  const input = useRef<HTMLTextAreaElement>(null);
  const range = useRef({ start: 0, end: 0 });
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [selectedLink, setSelectedLink] = useState<
    ReturnType<typeof parseFaqAnswer>[number] | undefined
  >();
  const select = () => {
    const start = input.current?.selectionStart ?? 0;
    const end = input.current?.selectionEnd ?? start;
    range.current = { start, end };
    setSelectedLink(
      parseFaqAnswer(value).find(
        (part) => part.href && start >= part.start && end <= part.end,
      ),
    );
  };
  const replace = (replacement: string) => {
    const { start, end } = range.current;
    onChange(value.slice(0, start) + replacement + value.slice(end));
    setEditing(false);
    setSelectedLink(undefined);
    requestAnimationFrame(() => {
      input.current?.focus();
      input.current?.setSelectionRange(start, start + replacement.length);
    });
  };
  return (
    <div className="rounded-lg border border-border bg-white">
      <div className="flex flex-wrap gap-2 border-b border-border p-2">
        <button
          type="button"
          onMouseDown={(event) => event.preventDefault()}
          className="inline-flex items-center gap-2 rounded px-3 py-2 text-sm text-ink hover:bg-slate-100"
          onClick={() => {
            const start = input.current?.selectionStart ?? 0;
            const end = input.current?.selectionEnd ?? start;
            const link = parseFaqAnswer(value).find(
              (part) => part.href && start >= part.start && end <= part.end,
            );
            range.current = link
              ? { start: link.start, end: link.end }
              : { start, end };
            setText(
              link?.text ?? value.slice(range.current.start, range.current.end),
            );
            setUrl(link?.href ?? "");
            setError("");
            setEditing(true);
          }}
        >
          <Link2 size={16} />
          {selectedLink ? "Edit link" : "Add link"}
        </button>
        <button
          type="button"
          disabled={!selectedLink}
          className="inline-flex items-center gap-2 rounded px-3 py-2 text-sm text-ink hover:bg-slate-100 disabled:opacity-40"
          onClick={() => {
            if (!selectedLink) return;
            range.current = {
              start: selectedLink.start,
              end: selectedLink.end,
            };
            replace(selectedLink.text);
          }}
        >
          <Unlink size={16} />
          Remove link
        </button>
      </div>
      {editing && (
        <div className="space-y-3 border-b border-border bg-slate-50 p-3">
          <label className="block text-sm text-ink">
            Link text
            <input
              autoFocus
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="mt-1 w-full rounded border border-border bg-white p-2"
            />
          </label>
          <label className="block text-sm text-ink">
            Link URL
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="mt-1 w-full rounded border border-border bg-white p-2"
            />
          </label>
          {error && (
            <p role="alert" className="text-sm text-red-600">
              {error}
            </p>
          )}
          <div className="flex gap-2">
            <button
              type="button"
              className="rounded bg-accent px-3 py-2 text-sm text-white"
              onClick={() => {
                if (
                  !text.trim() ||
                  /[\[\]\n]/.test(text) ||
                  !isSafeEditorLink(url.trim())
                ) {
                  setError(
                    "Enter link text and a valid https://, http://, mailto:, tel:, relative, or # URL.",
                  );
                  return;
                }
                replace(
                  `[${text}](${url.trim().replaceAll("(", "%28").replaceAll(")", "%29")})`,
                );
              }}
            >
              Save link
            </button>
            <button
              type="button"
              className="rounded px-3 py-2 text-sm"
              onClick={() => {
                setEditing(false);
                input.current?.focus();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <textarea
        ref={input}
        aria-label={`FAQ ${index + 1} answer`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onSelect={select}
        onMouseUp={select}
        onKeyUp={select}
        placeholder="Provide a concise answer..."
        rows={3}
        className="w-full resize-y rounded-b-lg px-4 py-3 text-sm leading-relaxed text-ink outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
      />
      {value && (
        <div className="border-t border-border p-3 text-sm text-ink-muted">
          <span className="mb-2 block text-xs font-bold uppercase">
            Answer preview
          </span>
          <FaqAnswer answer={value} />
        </div>
      )}
    </div>
  );
}
