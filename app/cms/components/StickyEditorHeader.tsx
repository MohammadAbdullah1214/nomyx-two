"use client";
import { useLayoutEffect, useRef, type ReactNode } from "react";

export default function StickyEditorHeader({
  children,
}: {
  children: ReactNode;
}) {
  const header = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const element = header.current;
    const section = element?.parentElement;
    if (!element || !section) return;
    const measure = () =>
      section.style.setProperty(
        "--cms-editor-header-height",
        `${element.getBoundingClientRect().height}px`,
      );
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    measure();
    return () => {
      observer.disconnect();
      section.style.removeProperty("--cms-editor-header-height");
    };
  }, []);
  return (
    <div
      ref={header}
      data-cms-editor-header
      className="sticky top-0 z-40 rounded-t-xl border-b border-border bg-[#F8FBFF] px-6 py-5"
    >
      {children}
    </div>
  );
}
