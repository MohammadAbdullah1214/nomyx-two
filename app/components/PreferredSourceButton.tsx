"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    PREFERRED_SOURCE?: any[];
  }
}

export default function PreferredSourceButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    window.PREFERRED_SOURCE = window.PREFERRED_SOURCE || [];
    window.PREFERRED_SOURCE.push(function (preferredSource: any) {
      preferredSource.init({ theme: "light", lang: "en" });

      const handleClick = (e: Event) => {
        e.preventDefault();
        preferredSource.addPreferredSource();
      };

      const btn = buttonRef.current;
      btn?.addEventListener("click", handleClick);

      return () => btn?.removeEventListener("click", handleClick);
    });
  }, []);

  return (
    <button
      ref={buttonRef}
      type="button"
      className="group mt-6 inline-flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-left text-[13px] md:text-sm font-medium text-[#19233D] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 hover:border-slate-400 hover:bg-slate-50/80 hover:shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/20"
    >
      <img
        src="/google-icon-logo-.svg"
        alt="Google"
        className="h-5 w-5 shrink-0 object-contain transition-transform group-hover:scale-105"
      />
      <span className="leading-snug">
        Add <strong className="font-bold text-ink">Nomyx</strong> as a preferred source on Google
      </span>
    </button>
  );
}
