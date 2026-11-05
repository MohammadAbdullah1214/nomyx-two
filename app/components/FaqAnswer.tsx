import { parseFaqAnswer } from "@/lib/faq-links";

export default function FaqAnswer({ answer }: { answer: string }) {
  return (
    <p className="whitespace-pre-wrap">
      {parseFaqAnswer(answer).map((part, index) =>
        part.href ? (
          <a
            key={index}
            href={part.href}
            className="font-semibold text-accent underline underline-offset-2"
            rel="noopener noreferrer"
          >
            {part.text}
          </a>
        ) : (
          part.text
        ),
      )}
    </p>
  );
}
