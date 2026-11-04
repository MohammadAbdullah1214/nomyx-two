"use client";

import { useState } from "react";
import AIProviders from "./AIProviders";

type ResearchQuestion = { label: string; text: string; prompt: string };

export default function ResearchQuestions({
  eyebrow,
  title,
  description,
  questions,
  note,
  dark = true,
}: {
  eyebrow: string;
  title: string;
  description: string;
  questions: ResearchQuestion[];
  note: string;
  dark?: boolean;
}) {
  const [copied, setCopied] = useState<number | null>(null);
  const [status, setStatus] = useState("");

  async function copyQuestion(index: number) {
    try {
      await navigator.clipboard.writeText(questions[index].prompt);
      setCopied(index);
      setStatus(`${questions[index].label} question copied.`);
    } catch {
      setCopied(null);
      setStatus(
        "Copy is unavailable. Select the question text to copy it manually.",
      );
    }
  }

  return (
    <div
      className={`research-questions${dark ? " research-questions-dark" : ""}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-heading">{title}</h2>
      <p className="research-description">{description}</p>
      <div className="research-probes">
        {questions.map((question, index) => (
          <button
            type="button"
            className="research-probe"
            onClick={() => copyQuestion(index)}
            key={question.label}
            aria-label={`Copy ${question.label} research question`}
          >
            <span className="research-label">{question.label}</span>
            <span className="research-question">{question.text}</span>
            <span className="research-copy">
              {copied === index ? "Copied ✓" : "Copy"}
            </span>
          </button>
        ))}
      </div>
      <p className="research-status" role="status">
        {status}
      </p>
      <AIProviders
        prompt={questions.map((question) => question.prompt).join("\n\n")}
      />
      <p className="research-note">{note}</p>
    </div>
  );
}
