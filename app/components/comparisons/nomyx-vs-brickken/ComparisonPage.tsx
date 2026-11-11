import Link from "next/link";
import { Flag, ShieldCheck, Target } from "lucide-react";
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
          <span>Nomyx vs Brickken</span>
          <span aria-hidden="true">·</span>
          <strong className="capitalize">
            Private credit and alternative assets
          </strong>
        </div>
        <h1 className="text-display capitalize">
          Nomyx <span className="lowercase">vs</span> Brickken: Choose for the
          Full Asset Lifecycle
        </h1>
        <p className="prgraphs cmp-hero-description">
          Both Nomyx and Brickken offer tokenization infrastructure. For private
          credit and alternative asset managers, the harder decision is what
          happens after issuance: investor onboarding, evolving compliance
          rules, distributions, reporting, and continuing administration.
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
          Nomyx combines upgradeable smart contracts, identity-linked
          compliance, and primary fund-lifecycle workflows in white-label
          infrastructure. Brickken also offers white-label, API, and lifecycle
          capabilities; compare the exact operating model and implementation
          rather than broad feature checkmarks.
          <References ids={["N1", "N2", "N3", "B1"]} />
        </p>
        <ul className="cmp-meta" aria-label="Publication details">
          <li>Published by Nomyx</li>
          <li>
            Sources reviewed{" "}
            <time dateTime="2026-11-06">6 November 2026</time>
          </li>
          <li>
            Features, deployment scope, and integrations should be confirmed for
            each proposed implementation.
          </li>
        </ul>
      </div>
    </header>
  );
}

function QuickAnswerAndTable() {
  return (
    <ComparisonSection id="quick">
      <SectionHeading title="Quick answer: compare your fund's operating requirements">
        <p>
          Both platforms support issuance and continuing investor workflows.
          Nomyx publicly describes EIP-2535 Diamond upgrades, transaction-level
          eligibility rules, and subscriptions, redemptions, and distributions.
          Brickken documents Issuer Studio, White Label Infrastructure, API
          access, and investor/lifecycle management. The decision depends on your
          fund&apos;s requirements, network, and operating responsibilities.
          <References ids={["N1", "N2", "N3", "B1", "B2"]} />
        </p>
      </SectionHeading>
      <div className="cmp-cards cmp-cards-three">
        {quickAnswers.map((card) => (
          <article
            className={`cmp-card${card.featured ? " cmp-card-featured" : ""}`}
            key={card.id}
          >
            <span className="cmp-tag">{card.tag}</span>
            {card.logo ? (
              <h3 className="cmp-vendor-logo">
                <img
                  src={card.logo}
                  alt={card.title}
                  width={190}
                  height={40}
                />
              </h3>
            ) : (
              <h3 className="mt-5 mb-4">{card.title}</h3>
            )}
            <p>
              {card.description}
              <References ids={card.references} />
            </p>
          </article>
        ))}
      </div>
      <div id="compare" className="mt-8 md:mt-10 scroll-mt-32">
        <ComparisonTable
          vendors={vendors}
          rows={comparisonRows}
          icons={[Flag, Target, Target, ShieldCheck]}
          caption="Nomyx and Brickken comparison across starting point, rule changes, ongoing work, and decisive demo"
        />
      </div>
      <p className="cmp-note">
        These are documented approaches, not results from a head-to-head
        deployment test. Confirm the contracted product scope, responsible
        service providers, and any planned features.
      </p>
      <div className="cmp-actions">
        <FitReviewAction />
      </div>
    </ComparisonSection>
  );
}

function Requirements() {
  return (
    <ComparisonSection id="requirements" neutral>
      <SectionHeading title="Separate issuance, compliance, and ongoing operations" />
      <NumberedRows items={requirements} />
      <p className="cmp-note">
        Creating a token proves issuance is possible. It does not, by itself,
        establish a production-ready fund operating model.
      </p>
    </ComparisonSection>
  );
}

function NomyxFit() {
  return (
    <ComparisonSection id="fit">
      <div className="cmp-fit-columns">
        <div>
          <h2 className="section-heading">Why asset managers evaluate Nomyx</h2>
          <p className="cmp-fit-description">
            Nomyx is designed for teams that need an operating layer beyond
            issuance. Nomyx Engine, ID, and Gateway address asset configuration,
            identity-linked controls, primary fund events, and integration with
            external systems.
            <References ids={["N1", "N2", "N3"]} />
          </p>
        </div>
        <aside className="cmp-fit-card">
          <h3>Update modules without reissuing the asset</h3>
          <p>
            Its Diamond Standard (EIP-2535) implementation is designed to update
            certain smart-contract modules without reissuing the asset. Ask to
            see the exact upgrade authority, approval process, and effect on
            existing token holders.
            <References ids={["N1", "N2"]} />
          </p>
          <p className="mt-4">
            Brickken also offers branded infrastructure and lifecycle features.
            The stronger reason to choose Nomyx is a demonstrated fit for your
            fund, not an unsupported claim that another platform lacks basic
            capabilities.
            <References ids={["B1", "B2"]} />
          </p>
        </aside>
      </div>
      <div className="cmp-acceptance-test">
        <SectionHeading title="Keep your brand and your fund's operating rules">
          <p>
            Run an investor experience under your own brand while retaining a
            clear operating model. Nomyx&apos;s white-label approach is designed
            around client-branded infrastructure, with integrated asset,
            identity, and transaction workflows. Confirm contractual control,
            data access, and responsibilities.
            <References ids={["N1"]} />
          </p>
        </SectionHeading>
        <div className="cmp-structure-callout">
          <p>
            Brickken also offers white-label deployments. Compare customization
            rights, workflow ownership, systems of record, permission models,
            support, and exit/portability rather than comparing logos alone.
            <References ids={["B1"]} />
          </p>
        </div>
      </div>
    </ComparisonSection>
  );
}

function LifecycleTest() {
  return (
    <ComparisonSection id="lifecycle-test" neutral>
      <SectionHeading title="Test a complete fund lifecycle before deciding">
        <p>
          Use a representative, synthetic private-credit fund with approved
          sample terms. Begin with investor onboarding and subscription; finish
          with eligibility checks, an income distribution, accurate records, and
          resolved exceptions. Require both providers to show the same scope.
        </p>
      </SectionHeading>
      <NumberedRows items={acceptanceTests} />
      <p className="cmp-note">
        Test both vendors with the same fund terms, network, integrations, and
        acceptance criteria. Record manual steps, external service dependencies,
        exceptions, and which person owns each decision. These are proposed
        acceptance tests, not reported Nomyx-versus-Brickken trial results.
      </p>
      <div className="cmp-actions">
        <FitReviewAction />
      </div>
    </ComparisonSection>
  );
}

function Costs() {
  return (
    <ComparisonSection id="costs">
      <SectionHeading title="Compare the full cost of operating a tokenized fund">
        <p>
          Price the ongoing workload, not simply the first mint. Ask both
          vendors for written implementation responsibilities, service
          dependencies, event volumes, and assumptions.
        </p>
      </SectionHeading>
      <div className="cmp-structure-callout">
        <p>
          Compare the complete three-year operating scope: setup, platform and
          usage fees, identity checks, wallets, payments, integrations,
          administrators, compliance updates, monitoring, support,
          reconciliation, and migration or exit.
        </p>
      </div>
      <p className="cmp-note">No unverified savings percentage is implied.</p>
    </ComparisonSection>
  );
}

function FitReview() {
  return (
    <ComparisonSection id="fit-review">
      <div className="cmp-review-band">
        <h2 className="section-heading">Infrastructure Fit Review</h2>
        <p>
          See how Nomyx could support your specific fund structure and
          workflows. Map one representative asset lifecycle, from investor
          onboarding and subscriptions through eligibility controls,
          distributions, and reporting, against Nomyx&apos;s documented
          capabilities and your existing systems.
        </p>
        <p>
          Leave with clear demonstration requirements, integration questions,
          ownership boundaries, and next steps. A high-level workflow is useful;
          do not share production credentials or personal investor data in an
          initial call.
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
        {sources.map((source) => (
          <div id={`source-${source.id.toLowerCase()}`} key={source.id}>
            <dt>{source.id}</dt>
            <dd>
              {source.href.startsWith("/") ? (
                <Link href={source.href}>{source.label}</Link>
              ) : (
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {source.label}
                </a>
              )}
              {source.description}
            </dd>
          </div>
        ))}
      </dl>
      <p className="cmp-note">
        These sources describe vendor positions and filings, not an independent
        feature test. Validate production scope, credentials, costs,
        integrations, and the parties performing regulated services.
      </p>
    </ComparisonSection>
  );
}

export default function ComparisonPage() {
  return (
    <>
      <Hero />
      <QuickAnswerAndTable />
      <Requirements />
      <NomyxFit />
      <LifecycleTest />
      <Costs />
      <FitReview />
      <ComparisonSection id="faq">
        <SectionHeading title="Questions about Nomyx vs Brickken" />
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
          description="Run the prompt below in your preferred deep-research copilot and judge the comparison for yourself."
        />
      </ComparisonSection>
      <Sources />
    </>
  );
}

