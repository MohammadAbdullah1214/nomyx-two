import Link from "next/link";
import {
  ArrowRight,
  CircleDollarSign,
  Layers,
  Plug,
  Search,
  ShieldCheck,
  Target,
} from "lucide-react";
import AnimatedAction from "@/app/components/shared/AnimatedAction";
import NumberedRows from "../NumberedRows";
import {
  ComparisonSection,
  FitReviewAction,
  SectionHeading,
} from "../shared";
import CompareCatalog from "./CompareCatalog";
import {
  decisionGuides,
  methodologyRows,
  type GuideIcon,
} from "./content";

function GuideIconBadge({ icon }: { icon: GuideIcon }) {
  const icons: Record<GuideIcon, typeof Layers> = {
    layers: Layers,
    "shield-check": ShieldCheck,
    dollar: CircleDollarSign,
    plug: Plug,
    target: Target,
    search: Search,
  };
  const Icon = icons[icon];

  return (
    <span className="g-ico" aria-hidden="true">
      <Icon size={20} strokeWidth={1.8} />
    </span>
  );
}

function Hero() {
  return (
    <header className="cmp-hero">
      <div className="custom-container">
        <div className="cmp-hero-badge">
          <span className="cmp-badge-dot" aria-hidden="true" />
          <span>Compare</span>
          <span aria-hidden="true">·</span>
          <strong className="capitalize">Tokenization platforms</strong>
        </div>
        <h1 className="text-display capitalize">
          Compare Nomyx with the platform on your shortlist.
        </h1>
        <p className="prgraphs cmp-hero-description">
          Choose a company to see how its operating model differs from Nomyx:
          what each provider documents, what to verify in a demo, and where
          another provider may be the better fit.
        </p>
        <div className="cmp-actions">
          <FitReviewAction />
          <AnimatedAction
            text="Choose a company"
            href="#companies"
            tone="outline"
          />
        </div>
        <ul className="cmp-meta" aria-label="Publication details">
          <li>Published by Nomyx</li>
          <li className="cmp-meta-sep" aria-hidden="true">
            •
          </li>
          <li>11 companies across 8 comparisons</li>
          <li className="cmp-meta-sep" aria-hidden="true">
            •
          </li>
          <li>Each page lists its sources and review date.</li>
        </ul>
      </div>
    </header>
  );
}

function CompaniesSection() {
  return (
    <ComparisonSection id="companies">
      <SectionHeading title="Choose a company to compare">
        <p>
          Search by name or filter by what you are tokenizing. Each card links
          to the comparison that covers that company.
        </p>
      </SectionHeading>
      <CompareCatalog />
    </ComparisonSection>
  );
}

function GuidesSection() {
  return (
    <ComparisonSection id="guides" neutral>
      <SectionHeading title="Not sure which company to compare? Start with the decision.">
        <p>These guides apply to any provider on your shortlist.</p>
      </SectionHeading>
      <div className="ggrid">
        {decisionGuides.map((guide) => (
          <Link className="gcard" href={guide.href} key={guide.href}>
            <GuideIconBadge icon={guide.icon} />
            <h3>{guide.title}</h3>
            <p>{guide.description}</p>
            <span className="g-go">
              {guide.actionLabel}
              <ArrowRight
                size={13}
                strokeWidth={1.9}
                className="g-arrow"
                aria-hidden="true"
              />
            </span>
          </Link>
        ))}
      </div>
    </ComparisonSection>
  );
}

function MethodologySection() {
  return (
    <ComparisonSection id="method">
      <SectionHeading title="How every comparison is built" />
      <NumberedRows items={methodologyRows} />
      <div className="cmp-actions">
        <FitReviewAction />
      </div>
    </ComparisonSection>
  );
}

function FitReview() {
  return (
    <ComparisonSection id="fit-review">
      <div className="cmp-review-band">
        <h2 className="section-heading">Infrastructure Fit Review</h2>
        <p>
          Not sure which comparison applies to you? Bring a high-level workflow
          and the providers on your shortlist. We&apos;ll map one representative
          asset lifecycle against Nomyx&apos;s documented capabilities and your
          existing systems.
        </p>
        <p>
          You leave with demonstration requirements, integration questions, and
          next steps. The review can recommend a provider other than Nomyx.
        </p>
        <div className="cmp-actions">
          <FitReviewAction />
        </div>
      </div>
    </ComparisonSection>
  );
}

export default function ComparisonPage() {
  return (
    <>
      <Hero />
      <CompaniesSection />
      <GuidesSection />
      <MethodologySection />
      <FitReview />
    </>
  );
}

