import AnimatedAction from "@/app/components/shared/AnimatedAction";
import ScorecardDownload from "./ScorecardDownload";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap custom-container">
        <span className="tag light eyebrow">Nomyx vs. Securitize</span>
        <h1 className="text-display">
          You are not choosing a platform. You are choosing who owns your
          operating model.
        </h1>
        <p className="h2sub">
          Securitize offers a vertically integrated regulated ecosystem, built
          for a human-only market. Nomyx offers configurable, issuer-controlled
          infrastructure, built for the market agents are already bringing. Both
          tokenize your asset. One question decides your fit.
        </p>
        <p className="frameq">
          How much of your operating ecosystem do you want the provider to own,
          and how much do you intend to control?
        </p>
        <p className="support">
          Nomyx moves midmarket capital across the full tokenized-asset
          lifecycle, under your brand, without collapsing your operating model
          into another provider's ecosystem.
        </p>
        <div className="fork-asset">
          <span className="pill">
            <span className="d"></span>One tokenized asset
          </span>
        </div>
        <div className="fork">
          <div className="path sec">
            <div className="pl">Path A · Securitize</div>
            <div className="pt">Sealed inside the ecosystem</div>
            <div className="pd">
              The asset lives within a vertically integrated regulated stack.
              The provider owns more of the surrounding model.
            </div>
            <div className="horizon">
              At the agentic horizon, a human-only stack owes a rebuild to stay
              in the market.
            </div>
          </div>
          <div className="path nmx">
            <div className="pl">Path B · Nomyx</div>
            <div className="pt">Kept at your center, open spokes</div>
            <div className="pd">
              The asset stays under your brand and control, connecting regulated
              partners as spokes rather than a single owner.
            </div>
            <div className="horizon">
              At the agentic horizon, continuous machine-verifiable compliance
              continues without a rebuild.
            </div>
          </div>
        </div>
        <div className="cta-row">
          <AnimatedAction
            text="Book an Infrastructure Fit Review"
            href="https://bookings.cloud.microsoft/book/NomyxDiscoveryCall@nomyx.io/?ismsaljsauthenabled=true"
            tone="amber"
            target="_blank"
          />
          <ScorecardDownload text="Or compare on paper first → Download the Evaluation Scorecard" />
        </div>
        <div className="after">
          <p>
            Equal weight. Two legitimate paths. The fit depends on how much you
            intend to control.
          </p>
          <p>
            Are you choosing the safer-sounding provider, or the one that
            secures your asset for the future?
          </p>
        </div>
      </div>
    </header>
  );
}
