import { Flag, Layers, Search, ShieldCheck } from "lucide-react";
import Accordion from "@/app/components/shared/Accordion";
import AnimatedAction from "@/app/components/shared/AnimatedAction";
import ComparisonTable from "../ComparisonTable";
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
          <span>SettleMint vs Nomyx vs Bitbond</span>
          <span aria-hidden="true">·</span>
          <strong>Private credit</strong>
        </div>
        <h1 className="text-display">
          Choose infrastructure for the changes your fund will face after
          issuance.
        </h1>
        <p className="prgraphs cmp-hero-description">
          For private-credit and alternative-asset managers, the platform
          decision continues beyond launch: investor updates, distribution
          exceptions, approved amendments, and changes to service providers all
          need an operating process.
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
          Compare those requirements in an Infrastructure Fit Review. We&apos;ll
          help identify what your fund needs and recommend a suitable platform,
          even when another provider is the better fit.
        </p>
        <ul className="cmp-meta" aria-label="Publication details">
          <li>Published by Nomyx</li>
          <li>
            Product sources reviewed{" "}
            <time dateTime="2026-10-12">12 October 2026</time>
          </li>
          <li>
            No comparative workflow trial was performed; fit recommendations are
            conditional.
          </li>
        </ul>
      </div>
    </header>
  );
}

function QuickAnswer() {
  return (
    <ComparisonSection id="quick">
      <SectionHeading title="Quick answer: how do the three options differ?">
        <p>
          All three deserve evaluation beyond initial issuance. The deciding
          question is which proposed scope can handle your actual amendments,
          payments, and retained systems with acceptable operating effort. The
          fit judgments are starting hypotheses; public documentation does not
          establish a completed implementation for your fund.
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

function Options() {
  return (
    <ComparisonSection id="compare" neutral>
      <SectionHeading title="Compare the three options">
        <p>
          Vendor names appear as exemplars, with equal emphasis. Public
          descriptions support a shortlist, not a proven cost or performance
          winner.
        </p>
      </SectionHeading>
      <ComparisonTable
        vendors={vendors}
        rows={comparisonRows}
        icons={[Layers, Flag, Search, ShieldCheck]}
        caption="Comparison of SettleMint, Nomyx, and Bitbond for private-credit fund operations"
      />
      <p className="cmp-note">
        Confirm the product, delivery responsibility, and evidence for your
        deployment. These scopes overlap, so compare complete proposals rather
        than product labels.
      </p>
      <div className="cmp-actions">
        <FitReviewAction />
      </div>
    </ComparisonSection>
  );
}

function NumberedRows({
  items,
}: {
  items: readonly (readonly [string, string])[];
}) {
  return (
    <ol className="cmp-numbered-rows cmp-boundaries">
      {items.map(([title, description], index) => (
        <li key={title}>
          <span className="cmp-row-number">{index + 1}</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </li>
      ))}
    </ol>
  );
}

function Requirements() {
  return (
    <ComparisonSection id="requirements">
      <SectionHeading title="Compare the cost of operating through change">
        <p>
          A changed term can affect approvals, calculations, investor records,
          and external systems. Ask who performs each step and who takes
          responsibility when the records disagree. Use the same four
          requirements for all three proposals.
        </p>
      </SectionHeading>
      <NumberedRows items={requirements} />
      <p className="cmp-path-note">
        An API is a starting point for integration. A branded portal does not
        establish data ownership. A technical update does not by itself
        authorize a change to investor rights.
      </p>
    </ComparisonSection>
  );
}

function NomyxFit() {
  return (
    <ComparisonSection neutral>
      <div className="cmp-fit-columns">
        <div>
          <h2 className="section-heading">
            Where Nomyx may earn a place on your shortlist
          </h2>
          <p className="cmp-fit-description">
            Nomyx&apos;s modular architecture is relevant when changing asset
            logic is a recurring requirement. Its published description says
            modules can change while the contract address and balances remain.
            Ask for evidence on your exact change, permissions, and retained
            records.
            <References ids={["N1"]} />
          </p>
        </div>
        <aside className="cmp-fit-card">
          <h3>The result must be demonstrated</h3>
          <p>
            The practical reason to choose Nomyx would be a supported workflow
            that reduces the work around those changes.
          </p>
          <p className="mt-4">
            SettleMint or Bitbond should win if its complete proposal meets the
            same requirements with stronger evidence, lower operating burden, or
            better commercial fit.
          </p>
        </aside>
      </div>
      <div className="cmp-acceptance-test">
        <SectionHeading title="Test five events before choosing">
          <p>
            Use one proposed fund vehicle, approved sample terms, synthetic
            investors, and the same retained-provider assumptions. Loan-level
            servicing remains outside this test unless explicitly included.
          </p>
        </SectionHeading>
        <NumberedRows items={acceptanceTests} />
        <p className="cmp-note">
          Measure elapsed time, staff hours by role, manual re-entry, and
          unresolved exceptions. These are proposed tests; they are not results
          from trials conducted for this page.
        </p>
        <div className="cmp-actions">
          <FitReviewAction />
        </div>
      </div>
    </ComparisonSection>
  );
}

function Pricing() {
  return (
    <ComparisonSection>
      <SectionHeading title="Compare launch, operation, change, and exit costs">
        <p>
          Request the same investor count, transaction volume, integrations,
          support level, and change schedule. Include platform fees, required
          services, internal effort, and transition work.
        </p>
      </SectionHeading>
      <div className="cmp-card text-center">
        <p className="font-semibold">
          Three-year cost = launch + 36 months of recurring operations + agreed
          change scenarios + exit.
        </p>
      </div>
      <p className="cmp-note">
        Count bundled services once. Keep possible staff-capacity gains separate
        from cash savings. A token-deployment fee alone cannot price the
        operating model of a private-credit fund.
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
          Turn your shortlist into clear infrastructure requirements. In this
          discovery call, we&apos;ll discuss your fund structure, existing
          providers, expected changes, and operational constraints, then explain
          the infrastructure those requirements imply and recommend a platform
          when there is enough information to do so.
        </p>
        <p>
          Bring a high-level asset outline, the systems you want to retain, and
          any proposals you already have. We can also identify which
          demonstration or scope question should come next. The recommendation
          may be SettleMint, Nomyx, Bitbond, or another suitable option, and
          there is no requirement to arrive with a finished technical
          specification.
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
        Public descriptions support a shortlist, not a proven cost or
        performance winner. Confirm the product, delivery responsibility, and
        evidence for your deployment. This page makes no guarantee of savings,
        liquidity, or investment performance.
      </p>
    </ComparisonSection>
  );
}

export default function ComparisonPage() {
  return (
    <>
      <Hero />
      <QuickAnswer />
      <Options />
      <Requirements />
      <NomyxFit />
      <Pricing />
      <FitReview />
      <ComparisonSection id="faq">
        <SectionHeading title="Questions about SettleMint, Nomyx, and Bitbond" />
        <div className="cmp-faq">
          <Accordion
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
      <ComparisonSection>
        <ResearchPrompt
          prompt={researchPrompt}
          description="Run the prompt below in your preferred deep-research copilot and judge the shortlist for yourself."
        />
      </ComparisonSection>
      <Sources />
    </>
  );
}
