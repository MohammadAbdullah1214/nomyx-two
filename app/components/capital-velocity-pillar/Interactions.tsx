"use client";

import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, FileText } from "lucide-react";
import { HoverTextSwap } from "@/app/components/evergreen/shared";
import { faqs, sections } from "./content";

export function PillarContent({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? (window.scrollY / available) * 100 : 0);
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  function scrollToSection(event: MouseEvent<HTMLElement>) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
    const hash = link?.getAttribute("href");
    if (!hash || hash === "#" || link?.target || link?.hasAttribute("download")) return;
    const section = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!section || !event.currentTarget.contains(section)) return;
    event.preventDefault();
    window.history.pushState(window.history.state, "", hash);
    section.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      block: "start",
    });
  }

  return (
    <main className="capital-velocity-content" onClick={scrollToSection}>
      <div className="scrollbar" style={{ width: `${progress}%` }} aria-hidden="true" />
      {children}
    </main>
  );
}

export function PillarAction({ text, href, className = "btn btn-amber", target, rel, showArrow = true }: {
  text: string;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  showArrow?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  let characterOffset = 0;
  const words = text.split(" ").map((word) => {
    const startIndex = characterOffset;
    characterOffset += word.length + 1;
    return { word, startIndex };
  });

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      className={`${className} pillar-action group/btn`}
      aria-label={text}
      initial="rest"
      animate="rest"
      whileHover={reduceMotion ? undefined : "hover"}
    >
      <span className="flex flex-wrap justify-center gap-x-[0.3em] gap-y-1">
        {words.map(({ word, startIndex }) => (
          <HoverTextSwap key={startIndex} text={word} startIndex={startIndex} />
        ))}
      </span>
      {showArrow && <ArrowRight size={16} className="pillar-arrow shrink-0" aria-hidden="true" />}
    </motion.a>
  );
}

export function ContentsSidebar() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;
    const targets = sections.map(({ id }) => document.getElementById(id));
    const update = () => {
      let current: string | null = null;
      for (const section of targets) {
        if (section && section.getBoundingClientRect().top <= 145) current = section.id;
      }
      setActiveId(current);
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <aside className="toc" aria-label="On this page">
      <div className="thead">
        <span className="ticon"><FileText size={18} aria-hidden="true" /></span>
        <div>
          <div className="tl">On this page</div>
          <div className="tsub">Capital Velocity Infrastructure guide</div>
        </div>
      </div>
      <nav aria-label="Guide sections">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeId === id ? "active" : undefined}
            aria-current={activeId === id ? "location" : undefined}
          >
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export function PillarFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq">
      <h2>Frequently asked questions</h2>
      <div className="faq">
        {faqs.map(({ question, answer }, index) => (
          <div key={question} className={`faq-item${openIndex === index ? " open" : ""}`}>
            <button
              type="button"
              className="faq-q"
              id={`pillar-question-${index}`}
              aria-controls={`pillar-answer-${index}`}
              aria-expanded={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {question}<span className="pm" aria-hidden="true">+</span>
            </button>
            <div
              className="faq-a"
              id={`pillar-answer-${index}`}
              role="region"
              aria-labelledby={`pillar-question-${index}`}
              hidden={openIndex !== index}
            >
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
