"use client";

import { Fragment, useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { faqs, researchPrompt } from "./content";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { HoverTextSwap } from "@/app/components/evergreen/shared";

export function ReviewButton({ href, target, rel }: { href: string; target?: string; rel?: string }) {
  const text = "Book An Infrastructure Fit Review";
  let characterOffset = 0;
  const words = text.split(" ").map((word) => {
    const startIndex = characterOffset;
    characterOffset += word.length + 1;
    return { word, startIndex };
  });

  return (
    <motion.a
      className="btn btn-amber comparison-review-button group/btn"
      href={href}
      target={target}
      rel={rel}
      aria-label={text}
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <span className="flex flex-wrap justify-center gap-x-[0.3em] gap-y-1">
        {words.map(({ word, startIndex }) => (
          <HoverTextSwap key={startIndex} text={word} startIndex={startIndex} />
        ))}
      </span>
      <ArrowRight size={16} className="review-arrow shrink-0 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
    </motion.a>
  );
}

export function ComparisonContent({ children }: { children: ReactNode }) {
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

  return <main className="brickken-bitbond-content" onClick={scrollToSection}>{children}</main>;
}

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? (window.scrollY / available) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <div className="scrollbar" style={{ width: `${progress}%` }} aria-hidden="true" />;
}

export function ComparisonFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section faqsec" id="faq">
      <div className="wrap">
        <div className="section-head">
          <h2 className="h2">Questions about agent-assisted tokenization</h2>
        </div>
        <div className="faq">
          {faqs.map(({ question, answer }, index) => (
            <div className={`faq-item${openIndex === index ? " open" : ""}`} key={question}>
              <h3>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={openIndex === index}
                  aria-controls={`comparison-answer-${index}`}
                  id={`comparison-question-${index}`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {question}<span className="pm" aria-hidden="true">+</span>
                </button>
              </h3>
              <div
                className="faq-a"
                id={`comparison-answer-${index}`}
                role="region"
                aria-labelledby={`comparison-question-${index}`}
                hidden={openIndex !== index}
              >
                <p>{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const providers = [
  { name: "ChatGPT", image: "chatgpt", url: "https://chatgpt.com/?q=" },
  { name: "Claude", image: "claude", url: "https://claude.ai/new?q=" },
  { name: "Gemini", image: "gemini", url: "https://gemini.google.com/app" },
  { name: "Grok", image: "grok", url: "https://grok.com/?q=" },
  { name: "Perplexity", image: "perplexity", url: "https://www.perplexity.ai/search?q=" },
];

export function ResearchPrompt() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    if (copyStatus === "idle") return;
    const timeout = window.setTimeout(() => setCopyStatus("idle"), 2200);
    return () => window.clearTimeout(timeout);
  }, [copyStatus]);

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(researchPrompt);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  }

  return (
    <section className="section">
      <div className="wrap">
        <div className="promptcard narrow">
          <h2>Test this comparison with your own AI</h2>
          <p className="psub">Run the prompt below in your preferred deep-research copilot and judge the shortlist for yourself.</p>
          <div className="promptbox"><pre>{researchPrompt}</pre></div>
          <div className="copybar">
            <button type="button" className="btn-mini" onClick={copyPrompt}>
              {copyStatus === "copied" ? "Copied ✓" : "Copy the prompt"}
            </button>
            <span className="hint" role="status" aria-live="polite">
              {copyStatus === "error" ? "Copy unavailable. Select the prompt above to copy it." : copyStatus === "copied" ? "Prompt copied to clipboard." : "Runs in any deep-research copilot."}
            </span>
          </div>
          <div className="ai-row">
            <span className="lbl">Run it in</span>
            {providers.map(({ name, image, url }, index) => (
              <Fragment key={name}>
                {index > 0 && <span className="sep" aria-hidden="true" />}
                <a
                  className="provider-link"
                  href={url.includes("?q=") ? `${url}${encodeURIComponent(researchPrompt)}` : url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Run in ${name}`}
                >
                  <img src={`/lifecycle/ai/${image}.png`} alt={name} loading="lazy" />
                </a>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
