import AnimatedAction from "@/app/components/shared/AnimatedAction";

export default function FitReview() {
  return (
    <section id="fit-review" className="nvs-section alt">
      <div className="wrap custom-container">
        <div className="sh">
          <span className="tag eyebrow">How the Fit Review works</span>
          <h2 className="section-heading">
            Three steps to a decision you can defend.
          </h2>
        </div>
        <div className="spine">
          <div className="node">
            <div className="sn">01</div>
            <h4>Bring us the asset.</h4>
            <p>
              Tell us what you intend to tokenize, how ownership sits, which
              jurisdictions apply, and what systems support it today. You do not
              need a finished plan. Bring what you have.
            </p>
          </div>
          <div aria-hidden="true" className="arw"></div>
          <div className="node">
            <div className="sn">02</div>
            <h4>We map your stage and the gap.</h4>
            <p>
              We locate your capital on the five-stage ladder, quantify what
              your current stage costs you, and name the legal, compliance,
              technical, and operational dependencies between you and the next
              stage.
            </p>
          </div>
          <div aria-hidden="true" className="arw"></div>
          <div className="node">
            <div className="sn">03</div>
            <h4>Leave with a fit and launch recommendation.</h4>
            <p>
              The major tradeoffs, the open diligence questions, the
              stakeholders your buying committee needs, and a recommended path
              forward. In writing.
            </p>
          </div>
        </div>
        <div className="wtb">
          <h4>What to bring</h4>
          <p>
            The asset under consideration, your current legal structure, target
            investors and jurisdictions, your existing administrator or
            servicer, required integrations, your intended launch window, and
            any proposals already received. You do not need all of it.
          </p>
        </div>
        <div className="plan-cta">
          <AnimatedAction
            text="Book an Infrastructure Fit Review"
            href="https://bookings.cloud.microsoft/book/NomyxDiscoveryCall@nomyx.io/?ismsaljsauthenabled=true"
            tone="amber"
            target="_blank"
          />
          <span>We will tell you when Nomyx does not fit your asset best.</span>
        </div>
      </div>
    </section>
  );
}
