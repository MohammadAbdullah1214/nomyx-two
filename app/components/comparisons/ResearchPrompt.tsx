"use client";

import { useState } from "react";
import AnimatedAction from "@/app/components/shared/AnimatedAction";

const providers = [
  ["ChatGPT", "https://chatgpt.com/?q="],
  ["Claude", "https://claude.ai/new?q="],
  ["Gemini", "https://gemini.google.com/app"],
  ["Grok", "https://grok.com/?q="],
  ["Perplexity", "https://www.perplexity.ai/search?q="],
] as const;

export default function ResearchPrompt({
  prompt: researchPrompt,
  description = "Run the prompt below in your preferred deep-research copilot and judge the arrangement for yourself.",
  title = "Test this comparison with your own AI",
  copyLabel = "Copy the prompt",
}: {
  prompt: string;
  description?: string;
  title?: string;
  copyLabel?: string;
}) {
  const [copyStatus, setCopyStatus] = useState("");

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(researchPrompt);
      setCopyStatus("Prompt copied to clipboard.");
    } catch {
      setCopyStatus("Select the prompt above to copy it manually.");
    }
  }

  return (
    <div className="cmp-research">
      <h2 className="section-heading">{title}</h2>
      <p>{description}</p>
      <pre className="cmp-prompt">{researchPrompt}</pre>
      <div className="cmp-prompt-actions">
        <AnimatedAction text={copyLabel} onClick={copyPrompt} tone="white" />
        <span>Runs in any deep-research copilot.</span>
      </div>
      <p className="cmp-copy-status" role="status">
        {copyStatus}
      </p>
      <nav
        className="cmp-ai-providers"
        aria-label="Run the comparison in your preferred AI"
      >
        <span>Run it in</span>
        {providers.map(([name, url]) => (
          <a
            href={
              url.endsWith("?q=")
                ? `${url}${encodeURIComponent(researchPrompt)}`
                : url
            }
            key={name}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Run in ${name}`}
          >
            <img
              src={`/lifecycle/ai/${name.toLowerCase()}.png`}
              alt={name}
              height={22}
            />
          </a>
        ))}
      </nav>
    </div>
  );
}
