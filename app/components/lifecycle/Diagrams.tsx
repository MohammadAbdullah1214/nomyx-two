import {
  ArrowDown,
  ArrowRight,
  CircleDollarSign,
  UserRound,
} from "lucide-react";
import type { CSSProperties } from "react";

const operatingSteps = [
  "Compliance",
  "Transfers",
  "Restructuring",
  "Collateral",
  "Connectivity",
  "Reconciliation",
  "Settlement",
];

export function OperatingPath() {
  return (
    <div className="lc-operating-path">
      <div className="lc-path-heading">
        <span>Post-issuance operating path</span>
        <span>Every seam adds friction</span>
      </div>
      <div className="lc-path-grid">
        <div className="lc-path-edge">
          <span className="lc-caption">Left edge</span>
          <span className="lc-edge-symbol">T</span>
          <h3>Token issued</h3>
          <p>Ownership is digitized.</p>
        </div>
        <ol className="lc-operating-rail">
          {operatingSteps.map((step, index) => (
            <li key={step} style={{ "--step": index } as CSSProperties}>
              <span className="lc-rail-dot" />
              <span className="lc-rail-label">{step}</span>
            </li>
          ))}
        </ol>
        <div className="lc-path-edge">
          <span className="lc-caption">Right edge</span>
          <span className="lc-edge-symbol lc-edge-ink">
            <ArrowRight aria-hidden="true" />
          </span>
          <h3>Capital movement</h3>
          <p>Still constrained by operations.</p>
        </div>
      </div>
    </div>
  );
}

export function ConnectedRail({
  items,
  envelope = false,
}: {
  items: readonly string[];
  envelope?: boolean;
}) {
  return (
    <ol className={`lc-connected-rail${envelope ? " lc-envelope-rail" : ""}`}>
      {items.map((item) => (
        <li key={item}>
          <span aria-hidden="true">
            {envelope
              ? item === "Asset"
                ? "$"
                : item === "Settle"
                  ? "✓"
                  : ""
              : ""}
          </span>
          <strong>{item}</strong>
        </li>
      ))}
    </ol>
  );
}

export function PlatformPath() {
  return (
    <div className="lc-platform-path">
      <p className="lc-caption">Typical point solutions</p>
      <ol className="lc-handoffs">
        {["Issue", "Comply", "Distribute", "Settle"].map((item, index) => (
          <li key={item}>
            <strong>{item}</strong>
            {index < 3 && <span>Handoff</span>}
          </li>
        ))}
      </ol>
      <p className="lc-note lc-handoff-caption">
        Four systems. Three handoffs. More places for capital to stall.
      </p>
      <p className="lc-caption mt-8">Nomyx: one connected operating layer</p>
      <div className="lc-one-layer">
        <ConnectedRail items={["Issue", "Comply", "Distribute", "Settle"]} />
        <p>No system changes hands. No workflow restarts.</p>
      </div>
      <div className="lc-platform-badge-row">
        <span className="lc-platform-badge">Fewer seams. More velocity.</span>
      </div>
    </div>
  );
}

export function CollateralPath() {
  return (
    <div className="lc-collateral-path">
      <div className="lc-collateral-state">
        <p className="lc-caption">Starting point</p>
        <CircleDollarSign size={44} aria-hidden="true" />
        <h3>Tokenized asset</h3>
        <p>Issued on-chain, not yet lender-ready</p>
      </div>
      <ArrowRight className="lc-diagram-arrow" aria-hidden="true" />
      <div className="lc-requirements">
        <p className="lc-caption">Lender diligence requirements</p>
        <ol>
          {[
            [
              "Compliance state",
              "Verify ongoing eligibility without restarting diligence.",
            ],
            [
              "Legal title and enforceability",
              "Confirm ownership, underlying rights and enforceability.",
            ],
            [
              "Control and liquidation",
              "Establish control and define the default process.",
            ],
            [
              "Restructuring mechanics",
              "Amend or restructure without burn and reissue.",
            ],
          ].map(([title, description], index) => (
            <li key={title}>
              <span>{index + 1}</span>
              <div>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <ArrowRight className="lc-diagram-arrow" aria-hidden="true" />
      <div className="lc-collateral-state lc-collateral-ready">
        <p className="lc-caption">Stage 3 state</p>
        <span className="lc-collateral-check" aria-hidden="true">
          ✓
        </span>
        <h3>Collateral-ready</h3>
        <p>Evidence available · control defined · changes supported</p>
      </div>
      <ArrowRight className="lc-diagram-arrow" aria-hidden="true" />
      <div className="lc-collateral-state">
        <p className="lc-caption">Lender</p>
        <h3>Underwriting</h3>
        <p>Approve? Advance rate? Covenants? Terms? Or no loan.</p>
      </div>
    </div>
  );
}

export function WhiteLabelPath() {
  return (
    <>
      <div className="lc-white-label-path">
        <div className="lc-investor-node">
          <UserRound size={36} aria-hidden="true" />
          <h3>Investor</h3>
          <p>
            enters through
            <br />
            your experience
          </p>
        </div>
        <ArrowRight className="lc-diagram-arrow" aria-hidden="true" />
        <div className="lc-portal-mockup">
          <div className="lc-portal-title">
            <strong>Your brand</strong>
            <span>yourdomain.com</span>
          </div>
          <div className="lc-portal-pillars">
            {[
              [
                "Your portal",
                "Your experience",
                "Your domain and visual identity.",
              ],
              [
                "Your onboarding",
                "Your front door",
                "Identity and eligibility under your brand.",
              ],
              [
                "Your relationship",
                "Your investor trust",
                "The vendor stays behind the experience.",
              ],
            ].map(([label, title, description]) => (
              <div key={label}>
                <p>{label}</p>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <p className="lc-band">Your brand stays on the glass</p>
          <div className="lc-portal-under">
            <strong>Nomyx infrastructure underneath</strong>
            <p>Identity · eligibility · asset operations · orchestration</p>
            <span>Nomyx Gateway</span>
          </div>
        </div>
        <ArrowRight className="lc-diagram-arrow" aria-hidden="true" />
        <div className="lc-external-rails">
          <p className="lc-caption">External regulated rails</p>
          {["Distribution", "Custody", "Settlement"].map((item) => (
            <div key={item}>{item}</div>
          ))}
          <p>Connected where supported and commercially available.</p>
        </div>
      </div>
      <p className="lc-relationship-quote">
        The relationship stays yours. <br/><span>Nomyx runs underneath it.</span>
      </p>
    </>
  );
}

export function ChangePath() {
  return (
    <div className="lc-change-path">
      <p className="lc-caption">The real asset keeps changing</p>
      <div className="lc-chips justify-center">
        {[
          "Investors",
          "Compliance",
          "Cash flows",
          "Permissions",
          "Markets",
          "Regulation",
        ].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <ArrowDown className="lc-down-arrow" aria-hidden="true" />
      <div className="lc-static-rules">
        <strong>Static token rules</strong>
        <span>The asset changes. The contract does not.</span>
      </div>
      <ArrowDown className="lc-down-arrow" aria-hidden="true" />
      <p className="lc-caption">Every change creates more work</p>
      <div className="lc-change-work">
        {[
          ["Reissue", "replace the token"],
          ["Migrate", "move records and logic"],
          ["Re-onboard", "repeat investor work"],
          ["Reconcile", "rebuild the operating truth"],
        ].map(([title, description]) => (
          <div key={title}>
            <strong>{title}</strong>
            <span>{description}</span>
          </div>
        ))}
      </div>
      <p className="lc-change-outcome">
        More cost · more delay · less liquidity
      </p>
    </div>
  );
}
