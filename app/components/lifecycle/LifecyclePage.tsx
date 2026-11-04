"use client";

import { useState } from "react";
import { MotionConfig } from "motion/react";
import {
  ArrowDown,
  ArrowUp,
  ArrowRight,
  ArrowLeftRight,
  Check,
  Clock3,
  Code2,
  Columns3,
  Diamond,
  DollarSign,
  FileText,
  Globe2,
  Globe,
  LockKeyhole,
  Network,
  Plus,
  RefreshCw,
  Settings2,
  Settings,
  Shield,
  ShieldCheck,
  Store,
  Users,
  X,
} from "lucide-react";
import { Partners } from "@/app/home";
import Accordion from "@/app/components/shared/Accordion";
import { gates, gaps, faqs } from "./content";
import { Action, AssessmentAction, Cards, Intro, Section } from "./shared";
import StageFinder from "./StageFinder";
import CollateralCalculator from "./CollateralCalculator";
import ResearchCredential from "./ResearchCredential";
import {
  ChangePath,
  CollateralPath,
  ConnectedRail,
  OperatingPath,
  PlatformPath,
  WhiteLabelPath,
} from "./Diagrams";

const heroChecks = [
  "Verify compliance once and keep it current so counterparties can move forward without manual re-checks.",
  "Update asset terms and redemption logic modularly without the cost of burning and reissuing tokens.",
  "Prepare assets for institutional diligence so they are ready to be used as collateral in days, not months.",
  "Connect distribution and settlement rails into a single workflow that removes operational delays.",
];

function Hero() {
  return (
    <section className="lc-hero relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[500px] -top-[500px] h-[1000px] w-[1000px] rounded-full bg-hero-glow blur-[180px] opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[500px] -bottom-[500px] h-[1000px] w-[1000px] rounded-full bg-hero-glow blur-[180px] opacity-60"
      />
      <div className="custom-container lc-hero-grid relative z-10">
        <div>
          <span className="eyebrow">Tokenized-asset lifecycle</span>
          <h1 className="text-display mb-7">
            You tokenized your RWA. So why is moving capital still so slow?
          </h1>
          <p className="prgraphs mb-6">
            Creating a digital record is only the start. Without a connected
            system, your assets still get stuck in manual handoffs and
            disconnected silos. Nomyx provides the single, continuous pipeline
            that keeps capital moving across every stage of the lifecycle.
          </p>
          <p className="prgraphs mb-8 text-white/70">
            Did you buy a ledger entry, or a digital asset that can actually
            move through its lifecycle without delay or added cost?
          </p>
          <ul className="lc-hero-checks">
            {heroChecks.map((check) => (
              <li key={check}>
                <Diamond
                  size={12}
                  className="mt-1.5 shrink-0 fill-current text-white/70"
                  aria-hidden="true"
                />
                <span>{check}</span>
              </li>
            ))}
          </ul>
          <div className="lc-hero-actions">
            <AssessmentAction />
            <Action
              text="Download the Stage-Finder + Cost-of-Staying Worksheet"
              href="#worksheet"
              tone="outline"
            />
          </div>
        </div>
        <div className="lc-pipeline">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-5 mb-6">
            <h2 className="text-lg font-semibold">Asset Lifecycle Pipeline</h2>
            <span className="lc-live">
              <span />
              Live
            </span>
          </div>
          <ol>
            {[
              ["Orient & Tokenize", "Ownership recorded on-chain", "Complete"],
              ["Compliance State", "Continuously queryable", "Current"],
              ["Collateral Readiness", "Diligence-ready in days", "In review"],
              ["Distribute & Settle", "T+0 to T+1 target", "Queued"],
            ].map(([title, description, status], index) => (
              <li key={title} className="lc-pipeline-stage">
                <span className="lc-pipeline-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <span className="lc-pipeline-status">{status}</span>
              </li>
            ))}
          </ol>
          <p className="lc-note">
            One asset · one compliance state · one connected path
          </p>
        </div>
      </div>
      <div className="relative z-10 mt-8 lg:mt-15 pt-10 pb-10">
        <div className="custom-container text-center">
          <p className="prgraphs text-white">
            Built on institutional-grade infrastructure
          </p>
        </div>
      </div>
    </section>
  );
}

function OperatingGap() {
  return (
    <Section id="gap" tone="soft">
      <Intro
        eyebrow="Issuance isn’t the finish line"
        title="Tokenization digitized the asset. It did not build the functionality for achieving alpha."
      >
        <p>
          The hard problems begin after issuance. Compliance, transfers,
          restructuring, collateral readiness, market connectivity,
          reconciliation, and settlement.
        </p>
        <p>After you tokenize the asset, what actually becomes easier?</p>
      </Intro>
      <OperatingPath />
      <h3 className="lc-subheading">Four gaps the market already knows</h3>
      <Cards items={gaps} columns={2} numbered />
      <div className="lc-gap-result">
        <h3>The result: you can own a tokenized asset and still have</h3>
        <div className="lc-result-pills">
          {[
            "Expensive integrations",
            "Trapped collateral",
            "Slow lifecycle events",
            "Fragmented investor access",
            "Duplicated compliance work",
            "Capital that waits",
          ].map((item, index) => {
            const Icon = [
              Settings2,
              FileText,
              RefreshCw,
              Users,
              Shield,
              DollarSign,
            ][index];
            return (
              <span key={item}>
                <Icon size={24} aria-hidden="true" />
                {item}
              </span>
            );
          })}
        </div>
        <AssessmentAction />
      </div>
      <p className="lc-band">
        Tokenization starts the lifecycle. Operations determine velocity.
      </p>
    </Section>
  );
}

function Collateralization() {
  return (
    <Section tone="neutral">
      <Intro
        eyebrow="Collateralization path"
        title="Recomposable Stage makes a tokenized asset ready for a lender to evaluate as collateral."
      >
        <p>
          That does not secure a loan. It removes infrastructure gaps that can
          make the asset difficult to diligence, control, restructure, or
          liquidate.
        </p>
        <p>Could a lender actually diligence and control this asset today?</p>
        <p>
          Collateralization means borrowing against an asset without selling it.
          For a lender to seriously evaluate a tokenized private-credit asset,
          several questions have to be answerable.
        </p>
      </Intro>
      <CollateralPath />
      <div className="lc-collateral-limits">
        <div className="lc-callout">
          <h3>
            Stage 3 addresses the infrastructure side of that problem. It does
            not replace
          </h3>
          <div className="lc-chips mt-6">
            {[
              "Lender underwriting",
              "Credit appetite",
              "Valuation",
              "Legal analysis",
              "Custody or control requirements",
              "Regulatory constraints",
              "Negotiated commercial terms",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="lc-collateral-quote">
          <h3>Stage 3 creates collateral readiness.</h3>
          <p>The lender still has to lend.</p>
        </div>
      </div>
      <div className="mt-16">
        <Intro title="Collateralization Headroom Model">
          <p>
            Replace the guesswork with a transparent scenario model. Enter your
            assumptions and see illustrative financing capacity.
          </p>
        </Intro>
        <CollateralCalculator />
      </div>
    </Section>
  );
}

function Platform() {
  return (
    <Section id="platform" tone="dark">
      <Intro
        eyebrow="Why Nomyx"
        title="Every platform solves stages. Nomyx is designed around the seams between them."
      >
        <p>
          One infrastructure envelope across identity and compliance, asset
          logic, and market connectivity.
        </p>
        <p className="lc-platform-question">
          How many handoffs does your capital encounter between issuance and
          settlement?
        </p>
        <p>
          Some platforms specialize in issuance, compliance, or distribution.
          The architectural question is what happens at the boundary of their
          coverage, because every handoff is a place where capital velocity can
          die.
        </p>
      </Intro>
      <PlatformPath />
      <h2 className="section-heading text-center mt-16 mb-10">
        Three products. One envelope.
      </h2>
      <Cards
        icons={[ShieldCheck, Settings, Globe]}
        items={[
          [
            "Nomyx ID",
            "Compliance as a continuous property of assets and actors, designed to remain queryable by authorized counterparties.",
          ],
          [
            "Nomyx Engine",
            "Recompose pools, tranches, waterfalls, redemption terms, and modular asset logic without burning and reissuing the token.",
          ],
          [
            "Nomyx Gateway",
            "Connect to distribution, custody, and settlement infrastructure without making each connection the center of your asset architecture.",
          ],
        ]}
      />
      <div className="lc-platform-envelope">
        <p className="lc-envelope-heading">Nomyx · one operating envelope</p>
        <ConnectedRail
          envelope
          items={["Asset", "Issue", "Distribute", "Collateralize", "Settle"]}
        />
        <div className="lc-platform-badge-row">
          <span className="lc-platform-badge">
            One asset · one compliance state · one connected path
          </span>
        </div>
      </div>
      <div className="lc-platform-footer">
        <p>
          Nomyx is architected toward the Stage 4 Hyperliquid target state and
          works backward from the capabilities required to reach it.
        </p>
        <p className="lc-note">
          Actual lender, venue, custody, distribution, and settlement
          capabilities depend on live integrations, regulated partners, asset
          structure, jurisdiction, and commercial availability.
        </p>
        <AssessmentAction />
      </div>
    </Section>
  );
}

function InvestorExperience() {
  return (
    <>
      <Section>
        <Intro
          eyebrow="Own the investor relationship"
          title="One record. Nothing to reconcile."
        >
          <p>
            Launch an institutional digital-asset experience without sending
            your investors into someone else’s brand ecosystem.
          </p>
          <p>
            Managing digital investments usually involves juggling disconnected
            systems, forcing teams to manually reconcile data every time an
            asset changes hands. Nomyx consolidates these steps into one unified
            system, helping reconciliation disappear.
          </p>
        </Intro>
        <Cards
          columns={4}
          icons={[Plus, ShieldCheck, Code2, ArrowRight]}
          items={[
            [
              "Unified Records",
              "Instead of updating multiple systems, there is one central lifecycle record that automatically updates for everyone.",
            ],
            [
              "Automatic Compliance",
              "Rather than manually re-checking investor eligibility for every transaction, compliance rules travel with the asset and update automatically.",
            ],
            [
              "Seamless Integration",
              "The platform connects directly to your existing accounting and reporting software via API, eliminating manual data entry.",
            ],
            [
              "Direct Settlement",
              "By connecting assets directly to settlement channels, we remove the need for a middleman layer that often requires its own reconciliation.",
            ],
          ]}
        />
        <h2 className="section-heading text-center mt-16 mb-10">
          Asset coverage
        </h2>
        <Cards
          items={[
            [
              "Private Credit",
              "Streamlines loan amortization, interest payments, compliance, and administration.",
            ],
            [
              "Real Estate",
              "Manages fractional ownership and distribution workflows.",
            ],
            [
              "SPVs and Evergreen Funds",
              "Handles capital calls, redemptions, and lifecycle administration on one platform.",
            ],
          ]}
        />
      </Section>
      <Section id="white-label" tone="neutral">
        <Intro
          eyebrow="Own the investor relationship"
          title="Your brand on the glass. Nomyx underneath."
        >
          <p>
            Launch an institutional digital-asset experience without sending
            your investors into someone else’s brand ecosystem.
          </p>
          <p>Own the trust, or hand it to the infrastructure vendor?</p>
        </Intro>
        <Cards
          columns={4}
          items={[
            [
              "Your portal",
              "Your domain. Your visual identity. Your investor experience.",
            ],
            [
              "Your onboarding experience",
              "Identity and eligibility presented under your brand rather than redirecting the relationship into a vendor’s front end.",
            ],
            [
              "Your investor relationship",
              "The infrastructure supports the experience without becoming the brand your investors associate with their assets.",
            ],
            [
              "Your market connectivity",
              "Distribution, custody, and settlement connections reached through Nomyx Gateway where supported and commercially available.",
            ],
          ]}
        />
        <WhiteLabelPath />
        <div className="mt-16">
          <Intro
            eyebrow="The Shopify model for tokenized assets"
            title="Own the investor relationship, not just the token."
          >
            <p>
              Who should own the brand, the customer data and the economics?
            </p>
          </Intro>
        </div>
        <div className="lc-store-comparison">
          <article className="lc-store-card lc-store-own">
            <p className="lc-caption">Option 1 · Nomyx</p>
            <h3>Own your own store</h3>
            <Store className="lc-store-icon" size={56} aria-hidden="true" />
            <ul className="lc-checks">
              {[
                "Your brand and portal — investors enter through your experience.",
                "Your investors and data — the relationship remains yours.",
                "Your IP and economics — investment compounds inside your business.",
                "A platform that does not compete — Nomyx remains infrastructure underneath.",
              ].map((item) => (
                <li key={item}>
                  <Check
                    size={18}
                    className="text-accent shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    <strong>{item.split(" — ")[0]}</strong>
                    <span>{item.split(" — ")[1]}</span>
                  </span>
                </li>
              ))}
            </ul>
          </article>
          <span className="lc-store-or">OR</span>
          <article className="lc-store-card">
            <p className="lc-caption">Option 2 · Marketplace model</p>
            <h3>Rent a stall in crowded exchanges</h3>
            <ArrowLeftRight
              className="lc-store-icon"
              size={56}
              aria-hidden="true"
            />
            <ul className="lc-checks">
              {[
                "Their portal and brand — investors enter the landlord’s experience.",
                "Shared customer ownership — your relationship lives inside their system.",
                "Their rules and economics — the landlord controls the marketplace.",
                "A landlord that may compete — your stall is not the landlord’s priority.",
              ].map((item) => (
                <li key={item}>
                  <X size={18} className="lc-store-cross" aria-hidden="true" />
                  <span>
                    <strong>{item.split(" — ")[0]}</strong>
                    <span>{item.split(" — ")[1]}</span>
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <div className="lc-store-underband">
          <div>
            <p className="lc-caption">Nomyx runs underneath your store</p>
            <h3>Infrastructure without taking the investor relationship.</h3>
          </div>
          <div className="lc-chips">
            <span>Application logic</span>
            <span>Data + network</span>
            <span>Settlement rails</span>
          </div>
        </div>
        <p className="lc-never">Nomyx never competes with its customers.</p>
      </Section>
    </>
  );
}

function Engine() {
  const [updatedModules, setUpdatedModules] = useState<string[]>([]);
  return (
    <>
      <Section>
        <Intro
          eyebrow="The hard problem"
          title="Issuance is not the hard problem. Change after issuance is."
        >
          <p>
            Real assets evolve. Static token rules turn routine change into a
            rebuild.
          </p>
        </Intro>
        <ChangePath />
      </Section>
      <Section id="engine" tone="dark">
        <div className="lc-split items-center gap-10 xl:gap-16">
          <div>
            <span className="eyebrow">Nomyx Engine · Powered by EIP-2535</span>
            <h2 className="section-heading">
              Change the rules without reissuing the asset.
            </h2>
            <p className="prgraphs mt-6 text-white/70">
              Compliance logic and asset structure can be upgraded modularly
              while the token address and core asset state remain intact.
            </p>
            <p className="mt-5">
              Amend the module, or migrate the whole token?
            </p>
            <p className="mt-5 text-white/70">
              Traditional immutability creates a tradeoff. Lock everything
              forever, or migrate when something changes. Nomyx Engine is
              designed to separate the asset’s core state from modular logic.
            </p>
            <div className="lc-checks my-8">
              {[
                [
                  "Zero-migration upgrades",
                  "A rule changes. The applicable module changes in place rather than requiring a new asset address, rebuilt cap table, token swap, or investor re-onboarding process.",
                ],
                [
                  "Modular security",
                  "Changes can be isolated to specific logic rather than forcing the entire asset architecture to move every time a feature evolves.",
                ],
                [
                  "Long-duration architecture",
                  "A seven-year credit book should not have to migrate because the technology stack evolved during year three.",
                ],
              ].map(([title, description]) => (
                <div key={title}>
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-white/70">{description}</p>
                </div>
              ))}
            </div>
            <Action
              text="Explore the technical paper"
              href="/technical-documentation"
            />
            <p className="lc-note">
              Future-proofing the architecture: Agentic counterparties ·
              Cryptographic change · Faster settlement rails
            </p>
          </div>
          <div>
            <div className="lc-diamond">
              <h3>EIP-2535 Diamond architecture</h3>
              <div className="lc-module-grid">
                {[
                  "Issuance",
                  "Subscriptions / redemptions",
                  "Compliance",
                  "Yield + cash flow",
                ].map((name, index) => (
                  <div className="lc-module-position" key={name}>
                    {index >= 2 && (
                      <ArrowUp className="lc-module-arrow" aria-hidden="true" />
                    )}
                    <button
                      type="button"
                      aria-pressed={updatedModules.includes(name)}
                      onClick={() =>
                        setUpdatedModules(
                          updatedModules.includes(name)
                            ? updatedModules.filter((module) => module !== name)
                            : [...updatedModules, name],
                        )
                      }
                    >
                      <span className="lc-caption">
                        {updatedModules.includes(name)
                          ? "Updated in place ✓"
                          : "Updateable module"}
                      </span>
                      <strong>{name}</strong>
                    </button>
                    {index < 2 ? (
                      <ArrowDown
                        className="lc-module-arrow"
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>
                ))}
                <div className="lc-asset-core">
                  <Diamond size={40} aria-hidden="true" />
                  <h3>Core Asset State</h3>
                  <p>Immutable · token address preserved</p>
                </div>
              </div>
              <p className="lc-band">Change the rules · keep the asset</p>
              <p className="lc-note">
                Tap a module to see it change in place. The core state and token
                address stay put.
              </p>
            </div>
            <p className="lc-engine-principle">
              Immutability where permanence matters. Adaptability where change
              is inevitable.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

function Security() {
  return (
    <Section id="security">
      <Intro
        eyebrow="Security and compliance"
        title="What should your committee require before approving any tokenization infrastructure provider?"
      >
        <p>
          Your reputation is the asset. Every mark below shows its actual
          status.
        </p>
      </Intro>
      <div className="lc-cards lc-cards-4">
        {[
          [
            "In progress",
            "SOC 2 Type II",
            "Continuous security monitoring and institutional controls. Certification pending.",
          ],
          [
            "Declared",
            "GDPR and CCPA readiness",
            "Privacy controls designed around applicable data-protection requirements.",
          ],
          [
            "Validated",
            "Smart contract security review",
            "Halborn assessment of the Diamond proxy smart contracts, April to May 2025. All reported findings addressed.",
          ],
          [
            "Validated",
            "Per-customer isolation",
            "Dedicated, isolated customer infrastructure designed to keep compliance data, asset structures, and investor relationships separated.",
          ],
        ].map(([status, title, description], index) => {
          const Icon = [Shield, LockKeyhole, ShieldCheck, Columns3][index];
          return (
            <article className="lc-card" key={title}>
              <Icon className="text-accent mb-5" size={32} aria-hidden="true" />
              <span
                className={`lc-status ${status === "In progress" ? "bg-amber/15 text-ink" : "bg-accent/10 text-accent"}`}
              >
                {status}
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          );
        })}
      </div>
      <p className="lc-note text-center">
        Do not make the prospect discover the difference during diligence.
      </p>
    </Section>
  );
}

function Assessment() {
  const steps = [
    [
      "Bring us the asset.",
      "Show us:",
      [
        "What you tokenize",
        "How ownership sits",
        "Applicable jurisdictions",
        "Investor structure",
        "Current service providers",
        "The systems supporting it today",
      ],
    ],
    [
      "We map the stage and the gaps.",
      "We identify:",
      [
        "Your current maturity stage",
        "Where capital stops",
        "What remains manual",
        "What the next stage requires",
        "Which assumptions still require diligence",
      ],
    ],
    [
      "Leave with a fit-and-launch recommendation.",
      "You receive:",
      [
        "Key tradeoffs",
        "Open diligence questions",
        "Required stakeholders",
        "Major implementation considerations",
        "The recommended path forward, in writing",
      ],
    ],
  ] as const;
  return (
    <Section id="assessment">
      <Intro
        eyebrow="Capital Velocity Assessment"
        title="From stuck to a decision in three steps."
      >
        <p>
          Bring us the asset. We map the gaps. You leave knowing what should
          happen next.
        </p>
        <p>
          What would your committee need to know before approving the next move?
        </p>
      </Intro>
      <div className="lc-cards lc-cards-3 lc-assessment-steps">
        {steps.map(([title, label, items], index) => (
          <article className="lc-card" key={title}>
            <span className="lc-number">{index + 1}</span>
            <h3>{title}</h3>
            <p>{label}</p>
            <ul className="lc-bullets">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="lc-assessment-fit">
        <h2 className="section-heading">
          If Nomyx is not the best fit, we tell you.
        </h2>
        <p className="prgraphs max-w-4xl mx-auto mt-6">
          The goal is not to force a Nomyx recommendation. The goal is to give
          your legal, compliance, operations, technology, treasury, and
          executive stakeholders a decision they can stand behind.
        </p>
        <div className="lc-actions">
          <AssessmentAction />
          <Action
            text="Download the Stage-Finder + Cost-of-Staying Worksheet"
            href="#worksheet"
            tone="outline"
          />
        </div>
        <p className="lc-note">
          For private credit and alternative asset managers with $100M–$10B in
          AUM.
        </p>
      </div>
    </Section>
  );
}

export default function LifecyclePage() {
  return (
    <MotionConfig reducedMotion="user">
      <Hero />
      <Partners />
      <Section id="lifecycle-gates">
        <Intro
          eyebrow="Tokenized-asset lifecycle"
          title="Five time-to-value gates, cleared faster."
        >
          <p>How fast can your tokenized asset clear each gate?</p>
        </Intro>
        <Cards items={gates} columns={5} numbered />
        <div className="lc-callout">
          <p>
            Every platform runs your assets through these five gates, handing
            your asset off to another walled garden of cost and delay.
          </p>
          <p className="mt-4">
            Nomyx runs your assets from orientation to settlement on one set of
            rails, with materially less friction at every gate. That compounding
            velocity is what turns into{" "}
            <strong className="text-accent">Structural-Velocity Alpha</strong>.
          </p>
        </div>
      </Section>
      <OperatingGap />
      <ResearchCredential index={0} />
      <Section tone="neutral">
        <Intro
          eyebrow="Capital Velocity Infrastructure"
          title="Every day capital sits in a silo, you lose alpha."
        >
          <p>
            Structural-Velocity Alpha is the economic advantage created when
            capital moves through its lifecycle with fewer seams, fewer delays,
            and fewer manual interventions.
          </p>
          <p>
            Does your infrastructure keep capital moving, or make it wait at
            every handoff?
          </p>
        </Intro>
        <Cards
          columns={4}
          icons={[Clock3, LockKeyhole, Network, FileText]}
          items={[
            [
              "Idle settlement",
              "Capital sits in transit while proceeds wait to redeploy.",
            ],
            [
              "Trapped collateral",
              "Assets already on the books may remain difficult for a lender to evaluate, control, or finance.",
            ],
            [
              "Thin or fragmented markets",
              "Liquidity distributed across isolated venues does not behave like one market.",
            ],
            [
              "Manual lifecycle events",
              "Every spreadsheet, reconciliation step, approval chain, and bilateral handoff adds time between economic events.",
            ],
          ]}
        />
        <div className="lc-category-statement">
          <h2 className="section-heading">One category owns the seams.</h2>
          <p className="prgraphs mt-6 max-w-4xl mx-auto">
            Capital Velocity Infrastructure is the integrated layer that manages
            what happens between lifecycle stages and compresses the friction
            capital encounters moving across them.
          </p>
          <p className="mt-5">
            Nomyx built that layer for midmarket private credit and alternative
            assets. Run it today.
          </p>
          <div className="lc-actions">
            <AssessmentAction />
            <Action
              text="Download the worksheet"
              href="#worksheet"
              tone="outline"
            />
          </div>
        </div>
      </Section>
      <Section id="stagefinder">
        <Intro
          eyebrow="Five stages of capital velocity maturity"
          title="Find your stage. Price what it forfeits."
        >
          <p>
            Answer five questions. Enter your AUM. See how your capital moves
            today and where the next constraint sits.
          </p>
          <p>Which stage holds your capital today?</p>
        </Intro>
        <StageFinder />
      </Section>
      <Collateralization />
      <ResearchCredential index={1} />
      <Platform />
      <InvestorExperience />
      <Engine />
      <Security />
      <ResearchCredential index={2} />
      <Section id="incumbents">
        <Intro
          eyebrow="Why not incumbents"
          title="You can’t buy your way past architecture."
        >
          <p>
            Different platform categories optimize different parts of the
            lifecycle. The question is where each architecture reaches its
            ceiling.
          </p>
          <p>
            In three years, will you extend the architecture, or rip and replace
            it?
          </p>
        </Intro>
        <div className="lc-cards lc-cards-3">
          {[
            [
              "Compliance-Led Platforms",
              "Controlled issuance, transfers and regulated-market workflows.",
              "What happens beyond the regulated gate, and what requires another system?",
            ],
            [
              "Yield-Optimized Wrappers",
              "Standardized assets designed to fit the wrapper.",
              "What happens when the asset is bespoke private credit rather than a standardized liquid instrument?",
            ],
            [
              "Fund Products",
              "Investment exposure to tokenized or digital assets.",
              "Are you buying infrastructure, or someone else’s product?",
            ],
          ].map(([title, optimized, ceiling]) => (
            <article className="lc-card" key={title}>
              <p className="lc-caption text-accent">Common regime</p>
              <h3>{title}</h3>
              <p className="lc-caption mt-5">Optimized for</p>
              <p>{optimized}</p>
              <div className="lc-incumbent-ceiling">
                <p className="lc-caption">The ceiling</p>
                <p>{ceiling}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="lc-incumbent-bet">
          <div>
            <p className="lc-caption">Nomyx’s architectural bet</p>
            <h3>Own the seams across the full asset lifecycle.</h3>
            <p className="mt-3">
              Built for midmarket private credit and alternative assets, not one
              isolated transaction.
            </p>
          </div>
          <div>
            <div className="lc-bet-gates">
              {gates.map(([name], index) => (
                <span key={name}>
                  <strong>{name}</strong>
                  {index < gates.length - 1 && (
                    <ArrowRight size={18} aria-hidden="true" />
                  )}
                </span>
              ))}
            </div>
            <p className="lc-band">
              Own the seams, not just the issuance event
            </p>
          </div>
        </div>
        <div className="lc-actions">
          <AssessmentAction />
        </div>
      </Section>
      <Section id="faq" tone="soft">
        <Intro
          eyebrow="Questions your committee will ask"
          title="Straight answers to the questions that can stop the deal."
        />
        <div className="max-w-5xl mx-auto">
          <Accordion
            items={faqs.map(([question, answer]) => ({ question, answer }))}
          />
        </div>
      </Section>
      <Assessment />
    </MotionConfig>
  );
}
