"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

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
  const reduceMotion = useReducedMotion();
  const [width, setWidth] = useState(600);
  const [maxHeight, setMaxHeight] = useState(400);
  const [position, setPosition] = useState({ left: 0, top: 16, side: true });
  const panel = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const current = isComparisonRoute(pathname);
  const id = mobile ? "mobile-comparison-links" : "desktop-comparison-links";

  function keepOpen() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }

  function close() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(false);
  }

  function closeAfterPointerLeaves() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 180);
  }

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  useLayoutEffect(() => {
    if (!open || mobile) return;
    const fit = () => {
      const anchor = container.current?.getBoundingClientRect();
      // The enclosing card contains the complete Resources dropdown.
      const dropdown = container.current?.parentElement?.parentElement?.getBoundingClientRect();
      if (!anchor || !dropdown) return;
      const gap = 12;
      const edge = 16;
      const availableRight = window.innerWidth - dropdown.right - gap - edge;
      const side = availableRight >= 320;
      const panelWidth = Math.min(660, side ? availableRight : window.innerWidth - edge * 2);
      const left = side
        ? dropdown.right + gap
        : Math.max(edge, Math.min(dropdown.left + 16, window.innerWidth - panelWidth - edge));
      const naturalHeight = panel.current?.scrollHeight ?? 300;
      const top = side
        ? Math.max(120, Math.min(anchor.top + 16, window.innerHeight - Math.min(naturalHeight, window.innerHeight - 136) - edge))
        : dropdown.bottom + gap;
      setWidth(panelWidth);
      setMaxHeight(Math.max(0, window.innerHeight - top - edge));
      setPosition({ left: left - anchor.left, top: top - anchor.top, side });
    };
    fit();
    // Measure again after the parent dropdown's entrance animation finishes.
    const settledFit = window.setTimeout(fit, 250);
    let frame = 0;
    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(fit);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.clearTimeout(settledFit);
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, [open, mobile, width]);

  return (
    <div
      ref={container}
      className="relative"
      onMouseEnter={mobile ? undefined : keepOpen}
      onMouseLeave={mobile ? undefined : closeAfterPointerLeaves}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null))
          close();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.stopPropagation();
          close();
          trigger.current?.focus();
        }
      }}
    >
      <button
        ref={trigger}
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onFocus={mobile ? undefined : keepOpen}
        onClick={() => setOpen((value) => (mobile ? !value : true))}
        aria-current={current ? "page" : undefined}
        className={`group flex w-full items-start justify-between gap-4 text-left ${mobile ? "rounded-[6px] px-3 py-2 transition-colors hover:bg-slate-50" : `rounded-[8px] border-l-2 border-transparent px-4 py-4 xl:px-5 transition-all duration-300 hover:-translate-y-0.5 ${light ? "hover:bg-slate-50 hover:shadow-[0_12px_28px_rgba(10,17,40,0.08)]" : "hover:bg-white/5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)]"}`} ${light ? "text-ink" : "text-white"}`}
      >
        <span>
          <span
            className={`block transition-colors ${mobile ? "text-sm font-black" : "text-[15px] font-bold"} ${light ? "text-ink group-hover:text-accent" : "text-white group-hover:text-white"}`}
          >
            Comparison
          </span>
          <span
            className={`block text-sm leading-relaxed ${mobile ? "mt-0.5" : "mt-1"} ${light ? "text-ink-muted" : "text-white/50"}`}
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
          <ArrowRight
            size={16}
            className={`mt-1 shrink-0 transition-transform duration-200 group-hover:translate-x-1 ${light ? "text-black" : "text-white"}`}
          />
        )}
      </button>
      <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key={id}
          id={id}
          initial={reduceMotion ? false : { opacity: 0, clipPath: mobile ? "inset(-48px -48px -48px -48px)" : "inset(-48px 100% -48px -48px)" }}
          animate={{ opacity: 1, clipPath: "inset(-48px -48px -48px -48px)" }}
          exit={{ opacity: 0, clipPath: reduceMotion || mobile ? "inset(-48px -48px -48px -48px)" : "inset(-48px 100% -48px -48px)" }}
          transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1], opacity: { duration: reduceMotion ? 0 : 0.18 } }}
          className={mobile ? "pt-2" : `absolute z-10 before:absolute before:content-[''] ${position.side ? "before:-left-8 before:inset-y-0 before:w-8" : "before:-top-4 before:inset-x-0 before:h-4"}`}
          style={mobile ? undefined : { width, left: position.left, top: position.top }}
          onMouseEnter={mobile ? undefined : keepOpen}
        >
          <div
            ref={panel}
            aria-label="Comparison pages"
            style={mobile ? undefined : { maxHeight, gridTemplateColumns: `repeat(${width >= 600 ? 3 : width >= 420 ? 2 : 1}, minmax(0, 1fr))` }}
            className={`grid gap-2 ${mobile ? "grid-cols-1 sm:grid-cols-3" : "relative gap-3 overflow-y-auto overscroll-contain rounded-[14px] border p-4 shadow-[0_18px_48px_rgba(10,17,40,0.16)] backdrop-blur-xl"} ${mobile ? "" : light ? "border-border bg-white" : "border-white/10 bg-[#1B243C]/95"}`}
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
                      close();
                      onNavigate();
                    }}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}
