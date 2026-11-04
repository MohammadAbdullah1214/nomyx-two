import AnimatedAction from "@/app/components/shared/AnimatedAction";
import ScorecardDownload from "./ScorecardDownload";

export default function Hero() {
  return (
    <header className="hero left">
      <div className="wrap custom-container">
        <span className="tag light eyebrow">
          Tokenization infrastructure decision field
        </span>
        <h1 className="text-display">
          Choose your operating model, not just software.
        </h1>
        <div className="tri">
          <p>
            Regulated monoliths bundle every license and hold investor identity
            inside one ecosystem.
          </p>
          <p>
            Smart-contract-native credit protocols route debt into on-chain
            capital and leave compliance to each pool operator.
          </p>
          <p className="nmx">
            Nomyx delivers modular, issuer-controlled infrastructure that keeps
            your brand, investor identity, and asset logic under your own
            control.
          </p>
        </div>
        <p className="frameq">
          Did you buy an asset you can govern through its full lifecycle, or an
          entry inside someone else's ecosystem or liquidity pool?
        </p>
        <div className="bets">
          <div className="bet mono">
            <div className="bl">Regulated monolith · e.g. Securitize</div>
            <div className="bname">Outsource to one vendor</div>
            <div className="brow">
              <b>Strength:</b> turnkey licenses, one accountable contract.
            </div>
            <div className="brow">
              <b>Trade-off:</b> vendor-held LP identity, bundled services.
            </div>
          </div>
          <div className="bet nmx">
            <div className="bl">
              Nomyx issuer infrastructure · configurable &amp; sovereign
            </div>
            <div className="bname">Unbundle into modules</div>
            <div className="brow">
              <b>Strength:</b> your brand, keys, and administrator stay yours.
            </div>
            <div className="brow">
              <b>Trade-off:</b> you manage partner relations and governance.
            </div>
          </div>
          <div className="bet proto">
            <div className="bl">
              Smart-contract credit · e.g. Centrifuge, Clearpool
            </div>
            <div className="bname">Sell debt into on-chain capital</div>
            <div className="brow">
              <b>Strength:</b> crypto-native demand, 24/7 on-chain flows.
            </div>
            <div className="brow">
              <b>Trade-off:</b> pool operators own compliance and recovery.
            </div>
          </div>
        </div>
        <p className="bet-note">
          Each model solves a real problem. A regulated monolith delivers
          turnkey licenses. A credit protocol delivers on-chain demand. Nomyx
          delivers control after issuance.
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
        <p className="qual">
          For private credit and alternative asset managers with $100M to $10B
          in AUM.
        </p>
        <p className="micro">
          Bring us your asset profile, existing service providers, and vendor
          shortlist. Leave with a documented analysis showing which operating
          model fits your fund structure. If another model fits better, we say
          so.
        </p>
      </div>
    </header>
  );
}
