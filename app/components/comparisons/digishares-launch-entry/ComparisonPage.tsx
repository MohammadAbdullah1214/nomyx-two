import { CircleDollarSign, Search, TriangleAlert } from "lucide-react";
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
import CostAnchors from "./CostAnchors";
import {
  comparisonRows,
  economics,
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
          <span>DigiShares Launch vs Nomyx vs Bitbond</span>
          <span aria-hidden="true">·</span>
          <strong>First offering</strong>
        </div>
        <h1 className="text-display">
          Find the smallest complete setup your team can afford to operate.
        </h1>
        <p className="prgraphs cmp-hero-description">
          Launching one tokenized offering means more than deploying a token.
          Your team needs to onboard investors, confirm payments, maintain
          records, distribute proceeds, and resolve routine problems. Compare
          the cash required and the work left with your team.
        </p>
        <div className="cmp-actions">
          <FitReviewAction />
          <AnimatedAction
            text="See the cost anchors"
            href="#cost"
            tone="outline"
          />
        </div>
        <p className="cmp-publishing-note">
          An Infrastructure Fit Review can help define the requirements and
          recommend a suitable platform, including a lower-cost alternative to
          Nomyx when it fits better.
        </p>
        <ul className="cmp-meta" aria-label="Publication details">
          <li>Published by Nomyx</li>
          <li>
            Sources and listed prices reviewed{" "}
            <time dateTime="2026-10-12">12 October 2026</time>
          </li>
          <li>
            Price illustrations compare components, not equivalent complete
            solutions. No vendor workflow trial was performed.
          </li>
        </ul>
      </div>
    </header>
  );
}

export default function ComparisonPage() {
  return (
    <>
      <Hero />
      <ComparisonSection id="quick">
        <SectionHeading title="Quick answer: which starting model fits your team?">
          <p>
            Fit judgments are evaluation hypotheses, not trial results.
            Entry-level describes scope and resources; it does not remove
            offering or investor requirements. No Nomyx starter price or
            packaged entry-level plan was established in this review.
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
                {vendor.suffix && (
                  <span className="launch-logo-suffix">{vendor.suffix}</span>
                )}
              </h3>
              <p>
                {vendor.description}
                <References ids={vendor.references} />
              </p>
            </article>
          ))}
        </div>
      </ComparisonSection>
      <ComparisonSection id="compare" neutral>
        <SectionHeading title="Compare the starting point under one constraint">
          <p>
            Vendor names appear as exemplars, with equal emphasis. Each option
            can win under a concrete constraint. Public descriptions support a
            shortlist, not a proven lowest total cost.
          </p>
        </SectionHeading>
        <ComparisonTable
          vendors={vendors}
          rows={comparisonRows}
          icons={[CircleDollarSign, Search, TriangleAlert]}
          decisionLabel="Starting point"
          caption="DigiShares Launch, Nomyx, and Bitbond: starting points and qualifications"
        />
        <p className="cmp-note">
          Nomyx belongs on the shortlist only once a complete scoped quote is in
          hand. Do not infer an entry-level Nomyx price from this comparison.
        </p>
        <div className="cmp-actions">
          <FitReviewAction />
        </div>
      </ComparisonSection>
      <ComparisonSection id="cost">
        <SectionHeading title="Published cost anchors for one offering">
          <p>
            These calculations assume uninterrupted service, unchanged prices,
            one initial issuance, and no additional projects. They are
            arithmetic illustrations, not future-price commitments or complete
            budgets.
          </p>
        </SectionHeading>
        <CostAnchors />
        <p className="cmp-note">
          Bitbond&apos;s annual plan is paid in advance; its terms also list
          monthly billing at €349/month. The free plan is for test activity and
          does not allow live offerings or real payments. Do not choose a winner
          from these subtotals. Offering Manager alone and DigiShares Launch
          cover different scopes, so add the missing components and operating
          work first.
          <References ids={["B2"]} />
        </p>
      </ComparisonSection>
      <ComparisonSection id="scope" neutral>
        <SectionHeading title="Define a small, complete first scope">
          <p>
            Start with one offering, one investor class, one payment route, the
            required ownership and payment exports, and the team that will
            operate it. Confirm support for your actual investor volume and
            jurisdictions.
          </p>
        </SectionHeading>
        <div className="cmp-structure-callout">
          <p>
            Price optional customization, additional networks, and advanced
            features separately unless they are required for the offering. Get a
            price for the second issuance before committing to the first.
          </p>
          <p>
            A premium can be reasonable when it removes necessary recurring
            work. It still has to fit the cash you can commit. Recovered staff
            time is capacity; it is not automatically a payroll saving.
          </p>
        </div>
      </ComparisonSection>
      <ComparisonSection id="requirements">
        <SectionHeading title="Have your operators rehearse the first cycle">
          <p>
            Use approved sample terms, synthetic investors, and test assets. Ask
            the people who will run the service to complete these tasks after
            the proposed onboarding.
          </p>
        </SectionHeading>
        <NumberedRows items={requirements} />
        <p className="cmp-note">
          Record operator hours, specialist assistance, manual re-entry, and
          unresolved steps. Vendor help is allowed; its cost and recurring role
          must be visible. A demonstration by experts alone does not establish
          that your team can run the workflow.
        </p>
        <div className="cmp-actions">
          <FitReviewAction />
        </div>
      </ComparisonSection>
      <ComparisonSection id="economics" neutral>
        <SectionHeading title="Compare cash and staff effort separately">
          <p>
            Ask what is included, when payments fall due, and which volume or
            feature changes trigger another charge. Keep unquoted mandatory
            costs open rather than treating them as zero.
          </p>
        </SectionHeading>
        <NumberedRows items={economics} />
      </ComparisonSection>
      <ComparisonSection id="fit-review">
        <div className="cmp-review-band">
          <h2 className="section-heading">Infrastructure Fit Review</h2>
          <p>
            Bring one offering, a budget range, and an honest picture of your
            team&apos;s capacity. In this discovery call, we&apos;ll identify
            the infrastructure requirements for the first operating cycle and
            discuss the options that fit them, recommend another platform when
            it is more appropriate, or identify what must be resolved before a
            recommendation is possible.
          </p>
          <p>
            You can start with a high-level offering outline. There is no need
            to prepare a complete technical specification, and the
            recommendation may be DigiShares Launch, Nomyx, Bitbond, or another
            suitable option.
          </p>
          <div className="cmp-actions">
            <FitReviewAction />
          </div>
        </div>
      </ComparisonSection>
      <ComparisonSection id="faq">
        <SectionHeading title="Questions about first-offering tokenization costs" />
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
      <ComparisonSection id="sources" neutral>
        <SectionHeading title="Sources and pricing limits" />
        <dl className="cmp-sources">
          {sources.map(([id, description]) => (
            <div id={`source-${id.toLowerCase()}`} key={id}>
              <dt>{id}</dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>
        <p className="cmp-note">
          Recheck prices, access conditions, and support before purchasing.
          Neither software availability nor this comparison guarantees
          compliance, investor demand, capital raised, or a completed exit.
        </p>
      </ComparisonSection>
    </>
  );
}
