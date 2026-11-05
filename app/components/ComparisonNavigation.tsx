"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

export const comparisonColumns = [
  [
    { title: "Tokenized-asset lifecycle", href: "/tokenized-asset-lifecycle" },
    { title: "Capital velocity guide", href: "/capital-velocity-pillar" },
    { title: "Brickken vs Bitbond", href: "/brickken-bitbond" },
    { title: "Securitize vs Tokeny", href: "/securitize-tokeny" },
  ],
  [
    { title: "SettleMint vs Bitbond", href: "/settlemint-bitbond" },
    { title: "Taurus vs Fireblocks", href: "/taurus-fireblocks" },
    { title: "Three-model comparison", href: "/three-model-comparison" },
    { title: "Nomyx vs Securitize", href: "/nomyx-vs-securitize" },
  ],
  [
    {
      title: "Centrifuge vs Nomyx vs Clearpool",
      href: "/centrifuge-clearpool",
    },
    { title: "DigiShares vs Nomyx vs InvestaX", href: "/digishares-investax" },
    {
      title: "DigiShares Launch vs Nomyx vs Bitbond",
      href: "/digishares-launch-entry",
    },
  ],
] as const;

export const isComparisonRoute = (pathname: string) =>
  comparisonColumns.some((column) =>
    column.some((link) => link.href === pathname),
  );

export default function ComparisonNavigation({
  mobile = false,
  light = true,
  pathname,
  onNavigate,
}: {
  mobile?: boolean;
  light?: boolean;
  pathname: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(600);
  const [maxHeight, setMaxHeight] = useState(400);
  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const current = isComparisonRoute(pathname);
  const id = mobile ? "mobile-comparison-links" : "desktop-comparison-links";

  useLayoutEffect(() => {
    if (!open || mobile) return;
    const fit = () => {
      const edge = container.current?.getBoundingClientRect().right ?? 0;
      setWidth(Math.min(660, Math.max(0, window.innerWidth - edge - 16)));
      setMaxHeight(
        Math.max(
          160,
          (container.current?.getBoundingClientRect().bottom ?? 520) - 120,
        ),
      );
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [open, mobile]);

  return (
    <div
      ref={container}
      className="relative"
      onMouseEnter={mobile ? undefined : () => setOpen(true)}
      onMouseLeave={mobile ? undefined : () => setOpen(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null))
          setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.stopPropagation();
          setOpen(false);
          trigger.current?.focus();
        }
      }}
    >
      <button
        ref={trigger}
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onFocus={mobile ? undefined : () => setOpen(true)}
        onClick={() => setOpen((value) => (mobile ? !value : true))}
        className={`flex w-full items-start justify-between gap-4 rounded-lg text-left transition-colors ${mobile ? "px-3 py-2" : "border-l-2 px-4 py-4 xl:px-5"} ${light ? "text-ink hover:bg-slate-50" : "text-white hover:bg-white/5"} ${current || open ? (light ? "border-accent bg-accent/5" : "border-white/40 bg-white/5") : "border-transparent"}`}
      >
        <span>
          <span
            className={`block font-bold ${mobile ? "text-sm" : "text-[15px]"} ${current && light ? "text-accent" : ""}`}
          >
            Comparison
          </span>
          <span
            className={`mt-1 block text-sm leading-relaxed ${light ? "text-ink-muted" : "text-white/50"}`}
          >
            Compare platforms, costs, and operating models.
          </span>
        </span>
        {mobile ? (
          <ChevronDown
            size={16}
            className={`mt-1 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          />
        ) : (
          <ChevronRight size={16} className="mt-1 shrink-0" />
        )}
      </button>
      {open && (
        <div
          id={id}
          className={mobile ? "pt-2" : "absolute bottom-0 left-full pl-2"}
          style={mobile ? undefined : { width }}
        >
          <div
            aria-label="Comparison pages"
            style={mobile ? undefined : { maxHeight }}
            className={`grid gap-2 ${mobile ? "grid-cols-1 sm:grid-cols-3" : "max-h-[calc(100dvh-128px)] grid-cols-3 gap-1 overflow-y-auto rounded-xl border p-3 shadow-[0_22px_48px_rgba(0,0,0,0.2)] backdrop-blur-xl"} ${mobile ? "" : light ? "border-border bg-white" : "border-white/10 bg-[#1B243C]/95"}`}
          >
            {comparisonColumns.map((column, index) => (
              <div
                className="flex min-w-0 flex-col gap-1"
                key={index}
                data-comparison-column={index + 1}
              >
                {column.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`rounded-lg px-3 py-3 text-sm font-medium leading-relaxed [overflow-wrap:anywhere] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${light ? "text-ink hover:bg-accent/5 hover:text-accent" : "text-white hover:bg-white/10"} ${pathname === link.href ? (light ? "bg-accent/5 text-accent" : "bg-white/10") : ""}`}
                    onClick={() => {
                      setOpen(false);
                      onNavigate();
                    }}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
