import Accordion from "@/app/components/shared/Accordion";
import AnimatedAction from "@/app/components/shared/AnimatedAction";
import { Flag, Plug, ShieldCheck, UserRound } from "lucide-react";
import ComparisonTable from "../ComparisonTable";
import ResearchPrompt from "../ResearchPrompt";
import {
  acceptanceTests,
  comparisonRows,
  faqs,
  quickAnswers,
  serviceBoundaries,
  sources,
  researchPrompt,
  vendors,
} from "./content";
import {
  ComparisonSection,
  FitReviewAction,
  References,
  SectionHeading,
} from "../shared";

function Hero() {
  return (
    <header className="cmp-hero">
      <div className="custom-container">
        <div className="cmp-hero-badge">
          <span className="cmp-badge-dot" aria-hidden="true" />
          <span>Securitize vs Nomyx vs Tokeny</span>
          <span aria-hidden="true">·</span>
          <strong>Fund tokenization</strong>
        </div>
        <h1 className="text-display">
          Decide which services to consolidate, and which relationships to keep.
        </h1>
        <p className="prgraphs cmp-hero-description">
          For private-credit and alternative-asset managers, a tokenization
          proposal can include software, administration, investor services, and
          outside providers. The useful comparison is what each arrangement
          delivers, who takes responsibility, and what changing it later will
          require.
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
          An Infrastructure Fit Review helps you identify those requirements and
          choose a suitable platform, including a competitor when it fits
          better.
        </p>
        <ul className="cmp-meta" aria-label="Publication details">
          <li>Published by Nomyx</li>
          <li>
            Sources reviewed <time dateTime="2026-10-12">12 October 2026</time>
          </li>
          <li>
            Fit recommendations are conditional; no comparative customer
            deployment was tested.
          </li>
        </ul>
      </div>
    </header>
  );
}

function QuickAnswer() {
  return (
    <ComparisonSection id="quick">
      <SectionHeading title="Quick answer: compare the proposed service arrangement">
        <p>
          A corporate group, product suite, and signed service agreement are not
          interchangeable. Neither branding nor corporate ownership establishes
          who controls data, administers assets, or handles failures.
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

function FeasiblePaths() {
  return (
    <ComparisonSection neutral>
      <SectionHeading title="Compare two feasible paths">
        <p>
          Ask for both paths when feasible. If a provider cannot support one,
          record that scope limitation and compare complete alternatives.
        </p>
      </SectionHeading>
      <div className="cmp-cards cmp-cards-two">
        {[
          [
            "Preserve",
            "Keep the administrator, custodian, and other relationships that already serve the fund well. Add the technology and services required for the new vehicle.",
          ],
          [
            "Consolidate",
            "Evaluate the services a provider can deliver or arrange. Name each replacement, contracting entity, migration task, and continuing dependency.",
          ],
        ].map(([title, description]) => (
          <article className="cmp-card cmp-path-card" key={title}>
            <span className="cmp-card-mark" aria-hidden="true" />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
      <p className="cmp-path-note">
        Do not assume Securitize requires replacing every provider, or that
        choosing Tokeny automatically requires an Apex administration contract.
        Compare the arrangement actually proposed.
      </p>
      <div className="cmp-actions">
        <FitReviewAction />
      </div>
    </ComparisonSection>
  );
}

function Arrangements() {
  return (
    <ComparisonSection id="compare">
      <SectionHeading title="Compare the three arrangements">
        <p>
          Vendor names appear as exemplars, with equal emphasis. Public sources
          support the distinctions, not an independently tested winner.
        </p>
      </SectionHeading>
      <ComparisonTable
        vendors={vendors}
        rows={comparisonRows}
        icons={[Flag, UserRound, Plug, ShieldCheck]}
        caption="Comparison of proposed Securitize, Nomyx, and Tokeny service arrangements"
      />
      <p className="cmp-note">
        The final row is evaluation guidance, not a scorecard. Confirm the
        delivering entity, agreement, price, and service obligations in each
        proposal.
      </p>
    </ComparisonSection>
  );
}

function ServiceBoundaries() {
  return (
    <ComparisonSection id="boundaries" neutral>
      <SectionHeading title="Make every service boundary visible">
        <p>
          For every row, distinguish included, optional, retained-provider,
          customer, and unresolved work. Identify the operational escalation
          owner as well as the legal counterparty.
        </p>
      </SectionHeading>
      <ol className="cmp-numbered-rows cmp-boundaries">
        {serviceBoundaries.map(([title, description], index) => (
          <li key={title}>
            <span className="cmp-row-number">{index + 1}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ol>
    </ComparisonSection>
  );
}

function NomyxFit() {
  return (
    <ComparisonSection>
      <div className="cmp-fit-columns">
        <div>
          <h2 className="section-heading">
            Where Nomyx may be the stronger fit
          </h2>
          <p className="cmp-fit-description">
            Nomyx deserves evaluation when you want to retain selected providers
            while changing how investor and asset operations work together. Its
            modular asset-logic proposition makes approved changes a useful
            demonstration topic.
            <References ids={["N1"]} />
          </p>
        </div>
        <aside className="cmp-fit-card">
          <h3>Be even-handed about it</h3>
          <p>
            The case for Nomyx depends on the completed workflow and acceptable
            coordination effort. A more consolidated Securitize proposal, or a
            Tokeny-based arrangement, may be preferable if it meets your
            requirements with less transition risk, clearer ownership, or a
            better overall cost.
          </p>
        </aside>
      </div>
      <div className="cmp-acceptance-test">
        <SectionHeading title="Test the arrangement across organizational boundaries">
          <p>
            Use the same sample vehicle, synthetic investors, and approved terms
            for each feasible sourcing path. Ask each provider to:
          </p>
        </SectionHeading>
        <ol className="cmp-numbered-rows cmp-test-rows">
          {acceptanceTests.map((test, index) => (
            <li key={test}>
              <span className="cmp-row-number">{index + 1}</span>
              <p>{test}</p>
            </li>
          ))}
        </ol>
        <p className="cmp-note">
          Record staff time, the parties involved, unresolved exceptions, and
          who coordinates resolution. These are proposed acceptance tests; no
          provider has passed them as part of this review.
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
    <ComparisonSection neutral>
      <SectionHeading title="Price what changes, and what continues">
        <p>
          Compare launch, 36 months of operation, defined changes, and a
          provider-transition scenario. Separate software from contracted
          services and internal labor.
        </p>
      </SectionHeading>
      <div className="cmp-cards cmp-cards-two">
        {[
          [
            "In a consolidation proposal",
            "Include migration and overlapping contracts. Deduct legacy fees only when those expenses can actually end.",
          ],
          [
            "In a preserve proposal",
            "Include maintaining the connections between retained providers.",
          ],
        ].map(([title, description]) => (
          <article className="cmp-card" key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
      <p className="cmp-note">
        Request current, itemized proposals. A software tier or a broad services
        description cannot establish the cost of your complete fund program.
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
          Clarify which responsibilities your fund should retain or delegate. In
          this discovery call, we’ll discuss your fund, current providers,
          operational needs, and proposed changes, then identify the
          infrastructure requirements and explain which platform or arrangement
          appears most suitable.
        </p>
        <p>
          Bring an existing shortlist or provider list if available. We can
          discuss the questions to resolve before choosing, and recommend
          another platform when it better meets your needs.
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
        Public sources support the distinctions above, not an independently
        tested winner. Contract scope, current service availability, integration
        completion, and asset eligibility require confirmation. No liquidity,
        security, or investment-performance ranking is implied.
      </p>
    </ComparisonSection>
  );
}

export default function ComparisonPage() {
  return (
    <>
      <Hero />
      <QuickAnswer />
      <FeasiblePaths />
      <Arrangements />
      <ServiceBoundaries />
      <NomyxFit />
      <Pricing />
      <FitReview />
      <ComparisonSection id="faq" neutral>
        <SectionHeading title="Questions about Securitize, Nomyx, and Tokeny" />
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
        <ResearchPrompt prompt={researchPrompt} />
      </ComparisonSection>
      <Sources />
    </>
  );
}
