import { RectangleHorizontal, ShieldCheck } from "lucide-react";

export default function Evidence() {
  return (
    <section id="proof" className="nvs-section alt prf">
      <div className="wrap custom-container">
        <div className="sh">
          <span className="tag eyebrow">
            What Nomyx delivers today, what it does not
          </span>
          <h2 className="section-heading">
            Three stages proven. One contingent. One declared. We mark every
            claim.
          </h2>
          <p className="lede ink">
            The five stages of capital velocity span the full category. Today
            Nomyx proves three. Most tokenization technologies blur that line.
            We draw it, because the buyer who reads for the gap names exactly
            the buyer we want.
          </p>
        </div>
        <div className="strows">
          <div className="strow">
            <span className="sbadge proven">Proven · Stages 1–3</span>
            <p>
              Nomyx tokenizes, recomposes in motion, and presents continuous,
              machine-verifiable compliance. Per-customer isolated
              infrastructure. Cryptographic integrity audited by Halborn.{" "}
              <span className="verify">
                Gemforce codebase; current-production audit status
              </span>
            </p>
          </div>
          <div className="strow">
            <span className="sbadge contingent">Contingent · Stage 4</span>
            <p>
              Hyperliquid depends on a confirmed collateral integration. Until a
              named lender or protocol confirms a documented integration, the
              deployable-capital argument reads illustrative, not delivered.{" "}
              <span className="verify">Aave Horizon / Morpho Blue</span>
            </p>
          </div>
          <div className="strow">
            <span className="sbadge declared">Declared · Stage 5</span>
            <p>
              Borderless names the roadmap: CBDC interoperability and agentic
              execution under governed mandates. We claim the architecture's
              readiness for it, not its delivery today.
            </p>
          </div>
        </div>
        <div className="proofbar">
          <span className="pchip">
            <ShieldCheck size={16} aria-hidden="true" />
            Smart-contract security audit, Halborn{" "}
            <span className="verify soft">scope + current-production</span>
          </span>
          <span className="pchip">
            <RectangleHorizontal size={16} aria-hidden="true" />
            Per-customer isolated infrastructure{" "}
            <span className="verify soft">isolation claim</span>
          </span>
          <span className="pchip">
            Distribution relationship, tZERO{" "}
            <span className="verify soft">wording; investor count</span>
          </span>
          <span className="pchip">
            Active pilot, ECGI Holdings / RezyFi{" "}
            <span className="verify soft">amount; spelling; permission</span>
          </span>
          <span className="pchip">
            Named customer, Molokai Capital{" "}
            <span className="verify soft">permission to name</span>
          </span>
        </div>
        <div className="gov">
          <h4>
            Governance, compliance, and recomposable assets. Who can change it,
            and under what control?
          </h4>
          <p>
            Nomyx publishes the DiamondCut governance model, multisig control, a
            timelock on every upgrade, and a stated audit cadence, rather than
            hiding the capability.{" "}
            <span className="verify">
              final diamondCut governance parameters
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
