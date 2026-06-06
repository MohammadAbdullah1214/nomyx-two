"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Menu, X } from "lucide-react";

import { legalDocuments } from "./legalDocuments";

export function LegalSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="lg:sticky lg:top-28">
      {/* Mobile view */}
      <div className="block lg:hidden border-b border-border pb-6 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-[6px] bg-accent/10 text-accent">
              <FileText size={18} strokeWidth={2.3} />
            </span>
            <p className="text-[17px] font-bold text-ink">Legal Documents</p>
          </div>
          
          <button 
            className="flex h-9 w-9 items-center justify-center rounded-md text-ink"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle legal documents menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <nav aria-label="Legal documents" className="mt-6 flex flex-col space-y-1">
            {legalDocuments.map((document) => {
              const isActive =
                pathname === document.href ||
                (pathname === "/legal-documents" && document.slug === "msa");

              return (
                <Link
                  key={document.href}
                  href={document.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center rounded-[6px] px-4 py-3 text-[14px] font-semibold leading-snug transition-colors ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-ink-muted hover:bg-accent/5 hover:text-accent"
                  }`}
                >
                  {document.title}
                </Link>
              );
            })}
          </nav>
        )}
      </div>

      {/* Desktop view */}
      <div className="hidden lg:block app-panel rounded-[8px] bg-white p-5">
        <div className="mb-4 flex items-center gap-3 border-b border-border pb-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-[6px] bg-accent/10 text-accent">
            <FileText size={18} strokeWidth={2.3} />
          </span>
          <div>
            <p className="text-base font-bold text-ink">Legal Documents</p>
            <p className="text-xs font-medium text-ink-muted">Nomyx policies and terms</p>
          </div>
        </div>

        <nav aria-label="Legal documents" className="space-y-1">
          {legalDocuments.map((document) => {
            const isActive =
              pathname === document.href ||
              (pathname === "/legal-documents" && document.slug === "msa");

            return (
              <Link
                key={document.href}
                href={document.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center rounded-[6px] px-3 py-3 text-sm font-semibold leading-snug transition-colors ${
                  isActive
                    ? "bg-accent text-white shadow-sm"
                    : "text-ink-muted hover:bg-accent/5 hover:text-accent"
                }`}
              >
                {document.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
