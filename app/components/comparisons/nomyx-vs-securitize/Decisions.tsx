import AnimatedAction from "@/app/components/shared/AnimatedAction";
import ModelTable from "../ModelTable";

export default function Decisions() {
  return (
    <section className="nvs-section">
      <div className="wrap custom-container">
        <div className="sh">
          <span className="tag eyebrow">
            Nomyx and Securitize, where it counts
          </span>
          <h2 className="section-heading">
            Six decisions decide how fast your capital moves.
          </h2>
          <p className="lede big">
            These six decisions expand the three you just asked: Own, Preserve,
            Prepare. The full feature grid runs to dozens of rows and buries the
            signal. Six decisions carry the weight, and each maps to a stage of
            the ladder it gates.
          </p>
        </div>
        <div className="tbl-wrap">
          <ModelTable
            headings={[
              "Decision",
              "Securitize · integrated ecosystem",
              "Nomyx · issuer-controlled infrastructure",
              "Stage it gates",
            ]}
            rows={[
              { group: "Own · control what is yours" },
              {
                title: "Brand, investor experience, identity & data",
                cells: [
                  <>
                    Custom front ends through APIs; identity and
                    regulated-services experience tend to run inside the
                    Securitize ecosystem{" "}
                    <span className="verify blue">Connect KYC branding</span>
                  </>,
                  <>
                    Branded issuer portal; onboarding, compliance, and
                    distribution run white-label under your brand
                  </>,
                  <>Stages 1–3</>,
                ],
              },
              {
                title: "Data and exit portability",
                cells: [
                  <>
                    Confirm data export, identity portability, transfer-agent
                    transition, and termination rights in the contract{" "}
                    <span className="verify blue">confirm</span>
                  </>,
                  <>
                    Confirm data export, smart-contract ownership,
                    infrastructure portability, and termination rights in the
                    contract
                  </>,
                  <>Stage 5</>,
                ],
              },
              { group: "Preserve · keep what works" },
              {
                title: "Which existing systems you keep",
                cells: [
                  <>
                    The integrated suite may replace systems you already run;
                    confirm what stays
                  </>,
                  <>
                    Connects to your existing administrators, custodians, and
                    servicers as an infrastructure layer
                  </>,
                  <>Operational disruption</>,
                ],
              },
              { group: "Prepare · ready the asset for change" },
              {
                title: "Whether the asset changes after issuance",
                cells: [
                  <>
                    Post-issuance administration and configurable fund
                    infrastructure; confirm asset-logic change scope per product{" "}
                    <span className="verify blue">confirm</span>
                  </>,
                  <>
                    EIP-2535 architecture changes modular compliance and asset
                    logic without changing the token address or migrating the
                    asset
                  </>,
                  <>Stage 3</>,
                ],
              },
              {
                title: "Distribution and market access",
                cells: [
                  <>
                    Primary and secondary distribution through affiliated
                    broker-dealer and ATS infrastructure
                  </>,
                  <>
                    Connects to regulated external partners; the tZERO
                    relationship maps a path toward secondary{" "}
                    <span className="verify blue">tZERO wording</span>
                  </>,
                  <>Stage 4</>,
                ],
              },
              { group: "The sum" },
              {
                title: "Total operating cost",
                cells: [
                  <>
                    Public pricing not available; request a full implementation
                    and operating proposal
                  </>,
                  <>
                    Pricing reflects asset, volume, integrations, and structure;
                    compare first-year and long-term operating cost
                  </>,
                  <>The real comparison</>,
                ],
              },
            ]}
            caption="Six decisions across the Securitize and Nomyx operating models"
          />
        </div>
        <p className="cmpnote">
          This table describes publicly documented operating models. Exact
          capabilities, pricing, responsibilities, and timelines depend on the
          asset and contract each provider presents.
        </p>
        <div className="cta-c">
          <AnimatedAction
            text="Run these six against your asset → Book an Infrastructure Fit Review"
            href="https://bookings.cloud.microsoft/book/NomyxDiscoveryCall@nomyx.io/?ismsaljsauthenabled=true"
            tone="amber"
            target="_blank"
          />
        </div>
      </div>
    </section>
  );
}
