"use client";

import { useId, useRef, useState } from "react";
import Accordion from "@/app/components/shared/Accordion";
import { credentials } from "./content";
import { Action, Intro, Section } from "./shared";

const providers = [
  ["ChatGPT", "https://chatgpt.com/?q="],
  ["Claude", "https://claude.ai/new?q="],
  ["Gemini", "https://gemini.google.com/app"],
  ["Grok", "https://grok.com/?q="],
  ["Perplexity", "https://www.perplexity.ai/search?q="],
] as const;

export default function ResearchCredential({ index }: { index: number }) {
  const credential = credentials[index];
  const [showProviders, setShowProviders] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const providersId = useId();
  const promptRef = useRef<HTMLDivElement>(null);
  const procurement = index === 2;
  const promptTitle =
    index === 0
      ? "View or copy the exact institutional research prompt"
      : index === 1
        ? "View or copy the exact secured-lending research prompt"
        : "The exact prompt";
  const promptPanel = (
    <div ref={promptRef}>
      <Accordion
        items={[
          {
            question: promptTitle,
            answer: (
              <>
                <pre className="lc-prompt">{credential.prompt}</pre>
                <div className="mt-5">
                  <Action text="Copy prompt" onClick={copyPrompt} />
                </div>
                <p className="lc-note" role="status">
                  {copyStatus}
                </p>
              </>
            ),
          },
        ]}
      />
    </div>
  );

  function togglePrompt() {
    const details = promptRef.current?.querySelector("details");
    if (details) details.open = !details.open;
  }

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(credential.prompt);
      setCopyStatus("Prompt copied. Paste it into your preferred AI.");
    } catch {
      setCopyStatus("Copy is unavailable. Select and copy the prompt below.");
    }
  }

  return (
    <Section tone={index === 2 ? "soft" : "white"}>
      <Intro eyebrow={credential.eyebrow} title={credential.title}>
        <p>{credential.description}</p>
      </Intro>
      <div
        className={procurement ? "lc-procurement" : "lc-split lc-credential"}
      >
        {!procurement && (
          <aside className="lc-credential-topics">
            <p className="lc-caption">What this reality check investigates</p>
            <h3>
              {index === 0
                ? "The work that remains"
                : index === 1
                  ? "What a lender must verify"
                  : "Build the scorecard"}
            </h3>
            <p className="lc-credential-subtitle">
              {index === 0
                ? "after an asset is tokenized."
                : "before advancing against the asset."}
            </p>
            <div className="lc-chips">
              {credential.topics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
            <p className="lc-note">
              Primary sources required.
              <br />
              {index === 0
                ? "Contradictory evidence welcomed."
                : "Evidence must support readiness."}
              <br />
              {index === 0
                ? "No assumed liquidity benefit."
                : "No assumed borrowing outcome."}
            </p>
          </aside>
        )}
        <div
          className={procurement ? "lc-procurement-body" : "lc-credential-body"}
        >
          <p className="lc-caption mb-5">
            {index === 0
              ? "Institutional operating-model check"
              : index === 1
                ? "Secured-lending collateral check"
                : "Procurement Test · Build the scorecard"}
          </p>
          <h3>{credential.heading}</h3>
          {procurement ? (
            <div className="lc-procurement-investigates">
              <p className="lc-caption">What the check investigates</p>
              <p>
                Lifecycle coverage. Compliance. Governance. Portability.
                Security. Integrations. Investor ownership. Production
                readiness. Vendor dependency. Cost.
              </p>
            </div>
          ) : (
            <>
              <p className="lc-credential-description">
                {index === 0
                  ? "The check identifies what remains manual, bilateral, slow or difficult, then tests whether the evidence supports the category’s operating claims."
                  : "The check tests what must be true before a credit officer would advance, then separates infrastructure readiness from the lender’s decision to lend."}
              </p>
              <ol className="lc-credential-checks">
                {credential.checks.map((check, step) => (
                  <li key={check}>
                    <span>{step + 1}</span>
                    {check}
                  </li>
                ))}
              </ol>
              {promptPanel}
              <p className="lc-note">
                TLDR · Three executive implications · Plain-English board
                explanation ·{" "}
                {index === 0
                  ? "One decisive platform question"
                  : "One decisive diligence question"}
              </p>
            </>
          )}
          <div className="lc-actions justify-start">
            <Action
              text={
                index === 2
                  ? "Run the procurement test"
                  : "Run the check with your AI"
              }
              onClick={() => setShowProviders(!showProviders)}
              expanded={showProviders}
              controls={providersId}
            />
            <button
              type="button"
              className="lc-text-button"
              onClick={togglePrompt}
            >
              View / copy the exact prompt →
            </button>
          </div>
          {showProviders && (
            <nav
              id={providersId}
              className="lc-chips mb-6"
              aria-label="Choose your AI provider"
            >
              {providers.map(([name, url]) => (
                <a
                  key={name}
                  href={
                    url.endsWith("?q=")
                      ? `${url}${encodeURIComponent(credential.prompt)}`
                      : url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name} ↗
                </a>
              ))}
            </nav>
          )}
          <p className="lc-note">
            Or copy the prompt and use whatever AI coworker you already trust.
          </p>
          <nav className="lc-ai-providers" aria-label="Research AI providers">
            {providers.map(([name, url]) => (
              <a
                key={name}
                href={
                  url.endsWith("?q=")
                    ? `${url}${encodeURIComponent(credential.prompt)}`
                    : url
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`/lifecycle/ai/${name.toLowerCase()}.png`}
                  alt={name}
                  height={20}
                  className="h-5 w-auto max-w-[120px] object-contain"
                />
              </a>
            ))}
          </nav>
          {procurement && (
            <>
              {promptPanel}
              <p className="lc-procurement-scorecard">
                Then bring us the scorecard. We will answer it.
              </p>
            </>
          )}
        </div>
      </div>
      {index === 0 && (
        <div className="lc-callout">
          <h3>About Testable Credentials</h3>
          <p>
            A Testable Credential is a claim we hand back to you to verify
            independently. We do not ask you to trust our framing, we give you a
            structured way to challenge it. The prompt instructs your AI to cite
            primary sources, look for contradictory evidence, and separate
            industry facts from vendor assertions.
          </p>
        </div>
      )}
      {index === 1 && (
        <p className="lc-note text-center">
          We would rather you discover the limitation yourself than believe a
          claim we cannot prove.
        </p>
      )}
    </Section>
  );
}
