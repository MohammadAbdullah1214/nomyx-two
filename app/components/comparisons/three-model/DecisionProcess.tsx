import AnimatedAction from "@/app/components/shared/AnimatedAction";
import ScorecardDownload from "./ScorecardDownload";

export default function DecisionProcess() {
  return (
    <section id="plan" className="sec alt">
      <div className="wrap custom-container">
        <div className="sh">
          <span className="tag eyebrow">Decision acceleration process</span>
          <h2 className="section-heading">
            From strategic ambition to an actionable blueprint in three steps.
          </h2>
          <p className="lede">
            Selecting tokenization infrastructure should not involve generic
            sales presentations. Nomyx provides an intensive, working diligence
            engagement that evaluates your exact asset structure across all
            three operating models.
          </p>
        </div>
        <div className="steps3">
          <div className="step3">
            <div className="sn">1</div>
            <h4>Submit your asset &amp; operating profile</h4>
            <p>
              Share your target asset class (private credit, specialty finance,
              or fund equity), legal structure (Reg D, Reg S, 3(c)(7)), current
              fund administrator, qualified custodian, and vendor shortlist.
            </p>
          </div>
          <div className="step3">
            <div className="sn">2</div>
            <h4>Architecture &amp; Capital Velocity audit</h4>
            <p>
              Our specialists benchmark your operating requirements against the
              three models. We evaluate identity control, dual-book
              reconciliation, waterfall upgradeability, secondary connectivity,
              and total cost of ownership.
            </p>
          </div>
          <div className="step3">
            <div className="sn">3</div>
            <h4>Receive your Fit Blueprint</h4>
            <p>
              A documented, committee-ready diligence artifact: the optimal
              operating model for your vehicle, open diligence flags, exact
              integration specs, a source and as-of date for every vendor claim,
              and a transparent total-cost model.
            </p>
          </div>
        </div>
        <div className="commit-g">
          <h4>Commitment to objective guidance</h4>
          <p>
            If our working review reveals that a vertically integrated provider
            (such as Securitize), a smart-contract-native credit protocol (such
            as Centrifuge or Clearpool), or an internal custom build best fits
            your needs, our report states that directly.
          </p>
        </div>
      </div>
      <div className="resolve">
        <div className="wrap custom-container">
          <h2 className="section-heading">
            Resolve your infrastructure decision with defensible diligence.
          </h2>
          <p>
            Bring us your asset, your existing providers, and your vendor
            shortlist. Leave with a committee-ready analysis of which operating
            model fits, and why.
          </p>
          <div className="cta-row">
            <AnimatedAction
              text="Book an Infrastructure Fit Review"
              href="https://bookings.cloud.microsoft/book/NomyxDiscoveryCall@nomyx.io/?ismsaljsauthenabled=true"
              tone="amber"
              target="_blank"
            />
            <ScorecardDownload />
          </div>
          <p className="fine">
            For private credit and alternative asset managers with $100M to $10B
            in AUM.
          </p>
        </div>
      </div>
    </section>
  );
}
