import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export type AccordionItem = {
  question: string;
  answer: ReactNode;
};

type AccordionProps = {
  items: readonly AccordionItem[];
  className?: string;
};

export default function Accordion({ items, className = "" }: AccordionProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <details
          key={`${item.question}-${index}`}
          className="group rounded-2xl border border-border bg-[#F8FBFF] px-5 py-4 transition-colors open:bg-white md:px-7 md:py-5"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[17px] font-bold leading-snug text-ink marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:text-[18px] [&::-webkit-details-marker]:hidden">
            {item.question}
            <ChevronDown
              size={20}
              aria-hidden="true"
              className="shrink-0 text-accent transition-transform group-open:rotate-180 motion-reduce:transition-none"
            />
          </summary>
          <div className="mt-4 max-w-4xl text-[16px] font-normal leading-8 text-ink-muted md:text-[17px]">
            {typeof item.answer === "string" ? (
              <p>{item.answer}</p>
            ) : (
              item.answer
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
