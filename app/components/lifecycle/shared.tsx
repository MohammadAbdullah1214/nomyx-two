"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { HoverTextSwap } from "@/app/components/evergreen/shared";
import { bookingUrl } from "./content";

type ActionProps = {
  text: string;
  href?: string;
  onClick?: () => void;
  tone?: "amber" | "accent" | "outline";
  type?: "button" | "submit";
  disabled?: boolean;
  download?: string;
  expanded?: boolean;
  controls?: string;
};

export function Action({
  text,
  href,
  onClick,
  tone = "accent",
  type = "button",
  disabled,
  download,
  expanded,
  controls,
}: ActionProps) {
  const className = `lc-action lc-action-${tone}`;
  let characterOffset = 0;
  const words = text.split(" ").map((word) => {
    const startIndex = characterOffset;
    characterOffset += word.length + 1;
    return { word, startIndex };
  });
  const content = (
    <>
      <span className="flex flex-wrap justify-center gap-x-[0.3em] gap-y-1">
        {words.map(({ word, startIndex }) => (
          <HoverTextSwap key={startIndex} text={word} startIndex={startIndex} />
        ))}
      </span>
      <ArrowRight
        size={16}
        className="shrink-0 transition-transform group-hover/btn:translate-x-1"
        aria-hidden="true"
      />
    </>
  );
  const animation = {
    initial: "rest",
    animate: "rest",
    whileHover: "hover",
    className: `group/btn ${className}`,
  };
  return href ? (
    <motion.a
      {...animation}
      href={href}
      aria-label={text}
      download={download}
      onClick={onClick}
      target={href === bookingUrl ? "_blank" : undefined}
      rel={href === bookingUrl ? "noopener noreferrer" : undefined}
    >
      {content}
    </motion.a>
  ) : (
    <motion.button
      {...animation}
      type={type}
      aria-label={text}
      aria-expanded={expanded}
      aria-controls={controls}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </motion.button>
  );
}

export function AssessmentAction() {
  return (
    <Action
      text="Book a Capital Velocity Assessment"
      href={bookingUrl}
      tone="amber"
    />
  );
}

export function Section({
  children,
  id,
  tone = "white",
}: {
  children: ReactNode;
  id?: string;
  tone?: "white" | "soft" | "neutral" | "dark";
}) {
  return (
    <section id={id} className={`lc-section lc-section-${tone}`}>
      <div className="custom-container">{children}</div>
    </section>
  );
}

export function Intro({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="lc-intro">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-heading">{title}</h2>
      {children && <div className="lc-lead">{children}</div>}
    </div>
  );
}

export function Cards({
  items,
  columns = 3,
  numbered = false,
  icons,
}: {
  items: readonly (readonly [string, string])[];
  columns?: 2 | 3 | 4 | 5;
  numbered?: boolean;
  icons?: readonly LucideIcon[];
}) {
  return (
    <div className={`lc-cards lc-cards-${columns}`}>
      {items.map(([title, description], index) => {
        const Icon = icons?.[index];
        return (
          <article className="lc-card" key={title}>
            {numbered && (
              <span className="lc-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
            {Icon && (
              <Icon size={36} className="lc-card-icon" aria-hidden="true" />
            )}
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        );
      })}
    </div>
  );
}
