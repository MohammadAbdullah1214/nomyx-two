import AnimatedAction from "@/app/components/shared/AnimatedAction";
import ScorecardDownload from "./ScorecardDownload";

export default function Closing() {
  return (
    <section className="nvs-section">
      <div className="wrap custom-container">
        <div className="choose">
          <span className="tag light eyebrow">Choose on purpose</span>
          <h2 className="section-heading">
            Choose the infrastructure that fits your fund today, and the market
            coming tomorrow.
          </h2>
          <p>
            Securitize may offer the integrated ecosystem your organization
            needs. Nomyx may give you the control, configurability, and
            operating flexibility your asset requires. Do not make the decision
            from a generic demo or a feature checklist. Compare both models
            against your asset, your investors, your existing systems, your
            legal obligations, your compliance requirements, your internal
            resources, and your long-term control.
          </p>
          <p className="q">
            Move up the stages on your terms, or move under duress when the
            market makes it mandatory? Find which stage your capital sits in.
            Then decide.
          </p>
          <div className="cta-row">
            <AnimatedAction
              text="Book an Infrastructure Fit Review"
              href="https://bookings.cloud.microsoft/book/NomyxDiscoveryCall@nomyx.io/?ismsaljsauthenabled=true"
              tone="amber"
              target="_blank"
            />
            <ScorecardDownload text="Not ready to talk? Download the Evaluation Scorecard" />
          </div>
          <p className="fine">
            No pressure to force a Nomyx recommendation. The goal serves one
            end: a decision your legal, compliance, operations, technology, and
            executive stakeholders can all stand behind. For private credit and
            alternative asset managers with $100M to $2B in AUM.
          </p>
        </div>
      </div>
    </section>
  );
}
