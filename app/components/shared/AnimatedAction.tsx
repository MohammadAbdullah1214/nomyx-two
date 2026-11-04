"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { HoverTextSwap } from "@/app/components/evergreen/shared";

type AnimatedActionProps = {
  text: string;
  href?: string;
  onClick?: () => void;
  tone?: "amber" | "outline" | "white" | "accent" | "outline-white";
  target?: "_blank";
};

export default function AnimatedAction({
  text,
  href,
  onClick,
  tone = "amber",
  target,
}: AnimatedActionProps) {
  const reducedMotion = useReducedMotion();
  const tones = {
    accent: "border-transparent bg-accent text-white hover:bg-accent/90",
    "outline-white":
      "border-white/60 bg-transparent text-white hover:bg-white/10",
    amber: "border-transparent bg-amber text-ink hover:bg-amber/90",
    outline: "border-border bg-transparent text-ink hover:bg-accent/5",
    white: "border-transparent bg-white text-ink hover:bg-white/90",
  };
  const animation = {
    initial: "rest",
    animate: "rest",
    whileHover: reducedMotion ? "rest" : "hover",
    className: `group/action inline-flex min-h-[52px] max-w-full items-center justify-center gap-3 rounded-xl border px-6 py-3 text-[15px] font-medium leading-normal transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${tones[tone]}`,
    "aria-label": text,
  };
  let offset = 0;
  const label = (
    <>
      <span className="flex flex-wrap justify-center gap-x-[0.3em] gap-y-1">
        {text.split(" ").map((word) => {
          const startIndex = offset;
          offset += word.length + 1;
          return (
            <HoverTextSwap
              key={startIndex}
              text={word}
              startIndex={startIndex}
            />
          );
        })}
      </span>
      <ArrowRight
        size={16}
        aria-hidden="true"
        className="shrink-0 transition-transform group-hover/action:translate-x-1 motion-reduce:transition-none"
      />
    </>
  );

  return href ? (
    <motion.a
      {...animation}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {label}
    </motion.a>
  ) : (
    <motion.button {...animation} type="button" onClick={onClick}>
      {label}
    </motion.button>
  );
}
