import { Flag, Layers, ShieldCheck } from "lucide-react";
import Accordion from "@/app/components/shared/Accordion";
import AnimatedAction from "@/app/components/shared/AnimatedAction";
import ComparisonTable from "../ComparisonTable";
import NumberedRows from "../NumberedRows";
import ResearchPrompt from "../ResearchPrompt";
import {
  ComparisonSection,
  FitReviewAction,
  References,
  SectionHeading,
} from "../shared";
import {
  acceptanceTests,
  comparisonRows,
  faqs,
  quickAnswers,
  requirements,
  researchPrompt,
  sources,
  vendors,
} from "./content";

function Hero() {
  return (
    <header className="cmp-hero">
      <div className="custom-container">
        <div className="cmp-hero-badge">
          <span className="cmp-badge-dot" aria-hidden="true" />
          <span>DigiShares vs Nomyx vs InvestaX</span>
          <span aria-hidden="true">·</span>
          <strong>Real estate</strong>
        </div>
        <h1 className="text-display">
          Choose a platform that fits your property structure and investor
          operations.
        </h1>
        <p className="prgraphs cmp-hero-description">
          Your investors need accurate ownership records, understandable
          distributions, and a clear process for transfers. Compare how each
          proposal supports that work, which services it includes, and whether
          it can serve your intended investors.
        </p>
        <div className="cmp-actions">
          <FitReviewAction />
          <AnimatedAction
            text="See the comparison"
            href="#compare"
            tone="outline"
          />
        </div>
        <p className="cmp-publishing-note">
          An Infrastructure Fit Review helps you identify the requirements and
          evaluate a suitable platform, even when that platform is not Nomyx.
        </p>
        <ul className="cmp-meta" aria-label="Publication details">
          <li>Published by Nomyx</li>
          <li>
            Sources reviewed <time dateTime="2026-10-12">12 October 2026</time>
          </li>
          <li>
            Recommendations are conditional; no comparative property workflow
            was tested.
          </li>
        </ul>
      </div>
    </header>
  );
}

function QuickAnswer() {
  return (
    <ComparisonSection id="quick">
      <SectionHeading title="Quick answer: start with eligibility, then compare operations">
        <p>
          These are reasons to investigate, not performance rankings.
          InvestaX&apos;s current platform disclosure says it does not accept
          U.S. users, which is a qualification issue rather than a minor feature
          difference. Confirm the proposed issuer and investor access before
          evaluating any option, and do not assume a different arrangement is
          available without confirmation.
        </p>
      </SectionHeading>
      <div className="cmp-cards cmp-cards-three">
        {quickAnswers.map((vendor) => (
          <article
            className={`cmp-card${vendor.name === "Nomyx" ? " cmp-card-featured" : ""}`}
            key={vendor.name}
          >
            <span className="cmp-tag">Evaluate when</span>
            <h3 className="cmp-vendor-logo">
              <img
                src={vendor.logo}
                alt={vendor.name}
                width={190}
                height={40}
              />
            </h3>
            <p>
              {vendor.description}
              <References ids={vendor.references} />
            </p>
          </article>
        ))}
      </div>
    </ComparisonSection>
  );
}

function ScopeComparison() {
  return (
    <ComparisonSection id="compare" neutral>
      <SectionHeading title="Compare scope, proposition, and the decisive question">
        <p>
          Vendor names appear as exemplars, with equal emphasis. The InvestaX
          U.S.-user restriction stays visible beside the comparison. Public
          descriptions support a shortlist, not a proven cost or security
          winner.
        </p>
      </SectionHeading>
      <ComparisonTable
        vendors={vendors}
        rows={comparisonRows}
        icons={[Layers, Flag, ShieldCheck]}
        caption="DigiShares, Nomyx, and InvestaX: scope, proposition, and the decisive question"
      />
      <p className="cmp-note">
        Eligibility can invalidate a shortlist before operating features matter.
        MAS entity status does not establish offering approval or global access.
        Confirm the actual scope for your proposed arrangement.
      </p>
      <div className="cmp-actions">
        <FitReviewAction />
      </div>
    </ComparisonSection>
  );
}

function Requirements() {
  return (
    <ComparisonSection id="requirements">
      <SectionHeading title="Establish what the investor owns">
        <p>
          Before comparing software, identify the issuer, the instrument
          represented by the token, and the record that governs ownership. Token
          possession should not be described as direct property title unless the
          actual legal structure supports it. Then define four operational
          requirements and name the party responsible for each handoff.
        </p>
      </SectionHeading>
      <NumberedRows items={requirements} />
      <p className="cmp-path-note">
        Separate property management and accounting from investor
        administration. A branded portal does not establish who produces,
        approves, and corrects the financial inputs.
      </p>
    </ComparisonSection>
  );
}

function NomyxFit() {
  return (
    <ComparisonSection id="fit" neutral>
      <div className="cmp-fit-columns">
        <div>
          <h2 className="section-heading">Where Nomyx may fit</h2>
          <p className="cmp-fit-description">
            Nomyx merits evaluation when you want to improve recurring investor
            operations around property managers, accounting processes, and other
            providers you intend to retain. Its real-estate page describes
            snapshot-based distributions and controlled peer-to-peer transfers.
            <References ids={["N1"]} />
          </p>
        </div>
        <aside className="cmp-fit-card">
          <h3>Ask for your rules, including exceptions</h3>
          <p>
            Ask the team to demonstrate your allocation rules and records,
            including the exceptions.
          </p>
          <p className="mt-4">
            A simpler DigiShares package or an eligible InvestaX arrangement may
            be preferable if it supplies the required operating scope with less
            implementation work or a better commercial fit.
          </p>
        </aside>
      </div>
      <div className="cmp-acceptance-test">
        <SectionHeading title="Test a distribution and a change of ownership">
          <p>
            Use one sample property vehicle, 100 synthetic investors, and one
            approved distribution, with the vehicle&apos;s approved allocation
            rules. A simple pro-rata example is insufficient if the actual
            structure has preferred returns or multiple classes. These are test
            assumptions, not vendor capacity limits.
          </p>
        </SectionHeading>
        <NumberedRows items={acceptanceTests} />
        <p className="cmp-note">
          Include an attempted transfer to an ineligible recipient. Measure
          staff effort, correction time, manual re-entry, and unresolved
          responsibilities across all three configurations. These are proposed
          tests, not results from trials conducted for this page.
        </p>
      </div>
    </ComparisonSection>
  );
}

function Costs() {
  return (
    <ComparisonSection id="costs">
      <SectionHeading title="Compare cost at your intended investor volume">
        <p>
          Price the same property and planned portfolio across all three, and
          specify which services are included and which require separate
          agreements.
        </p>
      </SectionHeading>
      <div className="cmp-structure-callout">
        <p>
          Three-year cost = setup + platform fees + verification + payments +
          reporting + transfer administration + internal labor + changes + exit,
          compared alongside staff time per investor event.
        </p>
      </div>
      <p className="cmp-note">
        Public package prices can anchor a budget, but complete proposals are
        needed to establish the most economical arrangement. Keep possible
        staff-capacity gains separate from cash savings.
      </p>
    </ComparisonSection>
  );
}

function FitReview() {
  return (
    <ComparisonSection id="fit-review">
      <div className="cmp-review-band">
        <h2 className="section-heading">Infrastructure Fit Review</h2>
        <p>
          Clarify the infrastructure your property operation needs. During this
          discovery call, we&apos;ll discuss your property structure, intended
          investor base, current providers, and recurring operating work, then
          identify the infrastructure requirements and recommend a platform
          where the available information supports a choice, including another
          provider when appropriate.
        </p>
        <p>
          Bring a high-level structure and distribution workflow if you have
          them. The initial discussion does not require investor identities or
          live account credentials, and the recommendation may be DigiShares,
          Nomyx, InvestaX, or another suitable option.
        </p>
        <div className="cmp-actions">
          <FitReviewAction />
        </div>
      </div>
    </ComparisonSection>
  );
}

function Sources() {
  return (
    <ComparisonSection id="sources" neutral>
      <SectionHeading title="Sources and comparison limits" />
      <dl className="cmp-sources">
        {sources.map(([id, description]) => (
          <div id={`source-${id.toLowerCase()}`} key={id}>
            <dt>{id}</dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>
      <p className="cmp-note">
        Product descriptions are not completed implementation evidence. Scope
        and eligibility need confirmation for the proposed arrangement. This
        comparison does not establish an investment return, guaranteed exit, or
        comparative security result.
      </p>
    </ComparisonSection>
  );
}

export default function ComparisonPage() {
  return (
    <>
      <Hero />
      <QuickAnswer />
      <ScopeComparison />
      <Requirements />
      <NomyxFit />
      <Costs />
      <FitReview />
      <ComparisonSection id="faq">
        <SectionHeading title="Questions about DigiShares, Nomyx, and InvestaX" />
        <div className="cmp-faq">
          <Accordion
            variant="plain"
            items={faqs.map((faq) => ({
              question: faq.question,
              answer: (
                <p>
                  {faq.answer}
                  <References ids={faq.references} />
                </p>
              ),
            }))}
          />
        </div>
      </ComparisonSection>
      <ComparisonSection id="research">
        <ResearchPrompt
          prompt={researchPrompt}
          description="Run the prompt below in your preferred deep-research copilot and judge the shortlist for yourself."
        />
      </ComparisonSection>
      <Sources />
    </>
  );
}
