import { Layers, Search, ShieldCheck } from "lucide-react";
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
  comparisonRows,
  costSchedules,
  exceptions,
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
          <span>Centrifuge vs Nomyx vs Clearpool</span>
          <span aria-hidden="true">·</span>
          <strong>Private credit</strong>
        </div>
        <h1 className="text-display">
          Choose the infrastructure or borrowing arrangement your credit
          strategy needs.
        </h1>
        <p className="prgraphs cmp-hero-description">
          Are investors subscribing to your fund, or are lenders financing your
          borrowing entity? That choice determines what you need to operate,
          which providers belong on the shortlist, and how to compare their
          economics.
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
          In an Infrastructure Fit Review, we&apos;ll discuss your structure and
          operating requirements and recommend a suitable platform, even when
          another provider is the stronger fit.
        </p>
        <ul className="cmp-meta" aria-label="Publication details">
          <li>Published by Nomyx</li>
          <li>
            Sources reviewed <time dateTime="2026-10-12">12 October 2026</time>
          </li>
          <li>
            No vendor trial or financing transaction was conducted for this
            comparison.
          </li>
        </ul>
      </div>
    </header>
  );
}

function QuickAnswer() {
  return (
    <ComparisonSection id="quick">
      <SectionHeading title="Quick answer: these can solve different financing problems">
        <p>
          Compare the entity receiving capital and the instrument being created
          before treating the proposals as substitutes. A lending facility and a
          fund-share platform can address different parts of the same strategy,
          so the second and third rows below are fit guidance rather than a
          ranking.
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
      <SectionHeading title="Compare scope, intent, and proof">
        <p>
          Vendor names appear as exemplars, with equal emphasis. Keep the
          different configurations visible without forcing them to look
          equivalent. Public descriptions support a shortlist, not a proven cost
          or financing winner.
        </p>
      </SectionHeading>
      <ComparisonTable
        vendors={vendors}
        rows={comparisonRows}
        icons={[Layers, Search, ShieldCheck]}
        caption="Centrifuge, Nomyx, and Clearpool: scope, intent, and proof"
      />
      <p className="cmp-note">
        A lending facility and a fund-share platform are not substitutes.
        Compare the entity receiving capital and the instrument being created
        before combining any proposals.
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
      <SectionHeading title="Separate infrastructure access from available capital">
        <p>
          A technical connection is not a funding commitment. For every claimed
          route to capital, establish what has actually happened at each stage.
        </p>
      </SectionHeading>
      <NumberedRows items={requirements} />
      <p className="cmp-path-note">
        Measure launch time, time to usable capital, and time to reconciled
        repayment separately. The platform controls only part of each process.
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
            Nomyx is relevant to evaluate when you already originate or manage
            credit and want investor operations to work around your existing
            servicer. Its private-credit proposition describes that separation.
            <References ids={["N1"]} />
          </p>
        </div>
        <aside className="cmp-fit-card">
          <h3>Ask for the connection, not the claim</h3>
          <p>
            Ask for the link between an off-chain receipt, approved allocation,
            investor payment, and operating records.
          </p>
          <p className="mt-4">
            If your central need is a borrowing facility or capital
            counterparties that the proposal cannot substantiate, a different
            arrangement may be more suitable.
          </p>
        </aside>
      </div>
      <div className="cmp-acceptance-test">
        <SectionHeading title="Define the structure before testing features">
          <p>
            Name the capital recipient, investor or lender instrument, repayment
            source, underwriting owner, servicer, and parties responsible for
            nonpayment. Establish the actual transfer, withdrawal, redemption,
            or maturity conditions.
          </p>
        </SectionHeading>
        <div className="cmp-structure-callout">
          <p>
            For a fund structure, follow a borrower payment through the servicer
            and vehicle to the investors. For a borrowing facility, follow the
            borrowing entity&apos;s repayment to its lenders. Do not substitute
            one demonstration for the other.
          </p>
        </div>
        <div className="cmp-actions">
          <FitReviewAction />
        </div>
      </div>
    </ComparisonSection>
  );
}

function RepaymentTests() {
  return (
    <ComparisonSection id="repayment-tests">
      <SectionHeading title="Test a repayment cycle and three exceptions">
        <p>
          Use synthetic counterparties and approved sample terms. Require the
          proposal to show funding, a scheduled repayment, an approved
          amendment, and a participant&apos;s exit request, then introduce each
          exception below.
        </p>
      </SectionHeading>
      <NumberedRows items={exceptions} />
      <p className="cmp-note">
        Retain approvals, calculation inputs, payment references, reconciled
        records, and manual interventions. These are proposed tests, not
        evidence of a completed comparative trial.
      </p>
    </ComparisonSection>
  );
}

function Costs() {
  return (
    <ComparisonSection id="costs" neutral>
      <SectionHeading title="Compare operating costs and financing terms separately">
        <p>
          Explain differences in instrument and obligations before combining the
          schedules. A fund investor&apos;s return and a borrower&apos;s
          interest expense are not interchangeable platform fees.
        </p>
      </SectionHeading>
      <NumberedRows items={costSchedules} />
      <p className="cmp-note">
        No common quotations or funding commitments were available to establish
        a numerical winner. Keep the two schedules distinct until the instrument
        and obligations are clear.
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
          Clarify the requirements behind your funding and operating plan. In
          this discovery call, we&apos;ll discuss who receives capital, what
          capital providers hold, your current service providers, and the events
          your team must manage, then explain the infrastructure requirements
          and recommend a suitable platform or identify the evidence needed to
          decide.
        </p>
        <p>
          Bring a high-level structure or existing proposal if available. The
          recommendation can favor Centrifuge, Clearpool, or another provider
          when it better serves the requirements.
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
        Fit depends on actual structure, eligibility, agreements, integrations,
        and funding evidence. This comparison does not guarantee credit
        approval, capital raised, liquidity, recovery, or investment
        performance. Sources support bounded descriptions, not an independent
        overall ranking.
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
      <RepaymentTests />
      <Costs />
      <FitReview />
      <ComparisonSection id="faq">
        <SectionHeading title="Questions about Centrifuge, Nomyx, and Clearpool" />
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
