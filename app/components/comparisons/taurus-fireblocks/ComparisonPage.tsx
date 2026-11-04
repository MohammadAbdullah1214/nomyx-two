import { Flag, Search, ShieldCheck } from "lucide-react";
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
  reviewSteps,
  sources,
  vendors,
} from "./content";

function Hero() {
  return (
    <header className="cmp-hero">
      <div className="custom-container">
        <div className="cmp-hero-badge">
          <span className="cmp-badge-dot" aria-hidden="true" />
          <span>Taurus vs Nomyx vs Fireblocks</span>
          <span aria-hidden="true">·</span>
          <strong>Institutional tokenization</strong>
        </div>
        <h1 className="text-display">
          Choose infrastructure your team can launch, operate, and change.
        </h1>
        <p className="prgraphs cmp-hero-description">
          Comparing tokenization infrastructure for an asset manager or
          financial institution? Start with the complete investor workflow: what
          the platform supplies, what your existing providers handle, and what
          your team must build.
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
          In an Infrastructure Fit Review, we&apos;ll discuss your requirements
          and recommend a platform suited to them, even when that platform is
          not Nomyx.
        </p>
        <ul className="cmp-meta" aria-label="Publication details">
          <li>Published by Nomyx</li>
          <li>
            Product sources reviewed{" "}
            <time dateTime="2026-10-12">12 October 2026</time>
          </li>
          <li>
            Fit recommendations are editorial judgments; no comparative
            deployment trial was performed.
          </li>
        </ul>
      </div>
    </header>
  );
}

function QuickAnswer() {
  return (
    <ComparisonSection id="quick">
      <SectionHeading title="Quick answer: which platform belongs on your shortlist?">
        <p>
          These scopes overlap. Select the configuration that completes your
          workflow with acceptable control, support, and operating effort. A
          technology product and a contracted custody service are different
          purchases; identify the actual provider and agreement.
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

function Propositions() {
  return (
    <ComparisonSection id="compare" neutral>
      <SectionHeading title="Compare the three starting propositions">
        <p>
          Vendor names appear as exemplars, with equal emphasis. Product
          descriptions establish what a vendor offers; customer-specific
          responsibility and performance require a scoped proposal.
        </p>
      </SectionHeading>
      <ComparisonTable
        vendors={vendors}
        rows={comparisonRows}
        icons={[Flag, Search, ShieldCheck]}
        decisionLabel="Buyer question"
        caption="Comparison of Taurus, Nomyx, and Fireblocks institutional tokenization propositions"
      />
      <p className="cmp-note">
        The evaluation guidance above is not a tested performance ranking.
        Identify the actual provider and agreement behind each proposition.
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
      <SectionHeading title="Compare the work required to deliver a complete service">
        <p>
          A subscription is complete when the investor&apos;s request,
          approvals, funds, issued interest, and operating records agree.
          Successful execution in one system is only part of that result.
        </p>
      </SectionHeading>
      <p className="cmp-requirements-intro">
        Ask all three providers to account for the same five requirements. Mark
        each function included, partner-delivered, customer-built, or
        unresolved, and name who resolves failures that cross those boundaries.
      </p>
      <NumberedRows items={requirements} />
      <p className="cmp-path-note">
        Taurus and Fireblocks both describe tokenization capabilities, and
        neither should be evaluated as a wallet-only product. Nomyx must meet
        the same standard of completeness rather than receive credit for a
        broader proposed scope.
        <References ids={["T1", "F1"]} />
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
            Where Nomyx may fit your operation
          </h2>
          <p className="cmp-fit-description">
            If your administrator and banking relationships already work,
            replacing them may create unnecessary transition work. Nomyx is
            worth evaluating around a specific question: can the proposed
            workflow connect those relationships and reduce the work your team
            performs between them?
          </p>
        </div>
        <aside className="cmp-fit-card">
          <h3>A reason to ask for proof</h3>
          <p>
            Nomyx Engine describes fund operations and configurable asset logic.
            That is a reason to request a working demonstration, not evidence
            that your integration is already complete.
            <References ids={["N1"]} />
          </p>
          <p className="mt-4">
            Prefer another provider if its configuration better satisfies
            mandatory controls, needs less unsupported implementation, or gives
            your operating team clearer accountability.
          </p>
        </aside>
      </div>
      <div className="cmp-acceptance-test">
        <SectionHeading title="Ask for one subscription, one change, and one recovery">
          <p>
            Use synthetic investors, test assets, and the same approved sample
            terms for each provider. This is a proposed acceptance test, not a
            completed benchmark.
          </p>
        </SectionHeading>
        <NumberedRows items={acceptanceTests} />
        <p className="cmp-note">
          Record elapsed time, staff hours, manual steps, and unresolved work. A
          controlled update or planned migration can be acceptable if it meets
          your requirements; assess the business result rather than favor one
          architecture.
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
      <SectionHeading title="Compare three-year cost for the same scope">
        <p>
          Include setup, infrastructure, applications, integrations, external
          services, operating labor, changes, recovery, and exit. Separate
          initial delivery work from recurring operations, and credit
          infrastructure and expertise you can reuse.
        </p>
      </SectionHeading>
      <div className="cmp-card text-center">
        <p className="font-semibold">
          Three-year cost = launch + 36 months of recurring costs + expected
          changes and recovery work + the defined exit scenario.
        </p>
      </div>
      <p className="cmp-note">
        Request a named owner beside each cost. No comparable quotations or
        measured workloads were available for this review, so it does not
        establish a lowest-cost provider.
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
          Find out what your operating model requires before committing to a
          configuration. This discovery call is for teams evaluating
          institutional tokenization infrastructure. We&apos;ll discuss the
          workflow you need, the systems you want to keep, and the control or
          deployment requirements that could determine the choice.
        </p>
        <ol className="cmp-review-steps">
          {reviewSteps.map((step, index) => (
            <li key={step}>
              <span className="cmp-row-number">{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
        <p className="cmp-review-note">
          Bring a high-level workflow or existing shortlist if you have one. You
          do not need a completed procurement brief to begin.
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
        Product descriptions establish what a vendor offers or claims.
        Customer-specific availability, responsibility, and performance require
        a scoped proposal and relevant evidence. This comparison does not
        promise launch speed, savings, liquidity, or investment outcomes.
      </p>
    </ComparisonSection>
  );
}

export default function ComparisonPage() {
  return (
    <>
      <Hero />
      <QuickAnswer />
      <Propositions />
      <Requirements />
      <NomyxFit />
      <Pricing />
      <FitReview />
      <ComparisonSection id="faq">
        <SectionHeading title="Questions about Taurus, Nomyx, and Fireblocks" />
        <div className="cmp-faq">
          <Accordion
            items={faqs.map(({ question, answer }) => ({
              question,
              answer: <p>{answer}</p>,
            }))}
          />
        </div>
      </ComparisonSection>
      <ComparisonSection>
        <ResearchPrompt
          prompt={researchPrompt}
          description="Run the prompt below in your preferred deep-research copilot and judge the configuration for yourself."
        />
      </ComparisonSection>
      <Sources />
    </>
  );
}
