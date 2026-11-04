import AnimatedAction from "@/app/components/shared/AnimatedAction";
import ModelTable from "../ModelTable";

export default function RealityCheck() {
  return (
    <section className="sec">
      <div className="wrap custom-container">
        <div className="sh">
          <span className="tag eyebrow">Post-issuance reality check</span>
          <h2 className="section-heading">
            Tokenization digitizes ownership. It solves none of your operating
            seams.
          </h2>
          <p className="lede">
            Tokenizing an asset creates a digital record on a ledger. It does
            not create ready counterparties, verify accredited status across
            jurisdictions, enforce debt covenants, adjust interest waterfalls,
            or reconcile books with fund administrators and custodians. Each
            model solves real problems and leaves distinct operating traps.
          </p>
        </div>
        <div className="traps">
          <div className="trap mono">
            <h4>
              Trap 1<br />
              Monolithic walled garden
            </h4>
            <p>
              A recognized full-stack provider minimizes perceived diligence
              risk: one contract, one accountable counterparty, licenses already
              in place. That convenience carries a price. Investor identity may
              sit in the vendor's directory, and bundled transfer-agent,
              broker-dealer, and ATS services may duplicate providers you
              already pay. When your credit facility changes or you switch
              custodians, re-platforming effort and contract terms set your
              switching cost.
            </p>
          </div>
          <div className="trap proto">
            <h4>
              Trap 2<br />
              Public-protocol liquidity ceiling
            </h4>
            <p>
              Smart-contract-native credit protocols connect debt to real
              on-chain capital, and investors subscribe and redeem around the
              clock. Those strengths come with structural trade-offs for a
              midmarket private credit fund:
            </p>
            <ul className="srclist">
              <li>
                Compliance sits with each pool operator, delegated through
                transfer hooks, so you build and own KYC and eligibility rules.{" "}
                <span className="ev v">V</span>
              </li>
              <li>
                An immutable core with modular extensions limits how far you
                reshape asset logic. <span className="ev v">V</span>
              </li>
              <li>
                Recovery runs off-chain, so token terms and negotiated terms can
                diverge.
              </li>
              <li>
                BIS research finds secondary depth stays thin, about 90% of two
                funds' holdings with four wallet holders.
              </li>
              <li>
                Collateral use stays inside DeFi; no evidence shows banks
                accepting these tokens.
              </li>
              <li>
                IMF analysis warns automation can amplify stress and accelerate
                selloffs.
              </li>
            </ul>
          </div>
          <div className="trap nmx">
            <h4>The third way · Nomyx</h4>
            <p>
              Nomyx sits between the two traps: it does not bundle you into a
              walled garden, and it does not hand compliance to a pool operator.
              Your brand, keys, and administrator stay yours while regulated
              partners connect as modules.
            </p>
            <p className="punch">
              Tokenization should remove operating friction. It should not
              relocate it.
            </p>
          </div>
        </div>
        <div className="seams">
          <ModelTable
            headings={[
              "Operating seam",
              "Regulated monolith",
              "Credit protocol",
            ]}
            rows={[
              {
                title: "Investor onboarding",
                cells: [
                  <>Vendor holds LP identity</>,
                  <>Each pool builds own KYC</>,
                ],
              },
              {
                title: "Facility amendments",
                cells: [
                  <>Vendor scopes each change</>,
                  <>Recovery runs off-chain</>,
                ],
              },
              {
                title: "Fund administration",
                cells: [
                  <>Bundled admin overlaps yours</>,
                  <>Admin sync path unconfirmed</>,
                ],
              },
              {
                title: "Collateral acceptance",
                cells: [
                  <>Vendor-partnered custody</>,
                  <>Bank acceptance unproven</>,
                ],
              },
            ]}
            caption="Operating-seam trade-offs"
          />
        </div>
        <div className="after-q">
          <p>
            When capital stops moving through your fund, where does friction
            sit: in your software, or across your operational boundaries?
          </p>
          <AnimatedAction
            text="Compare the three models for your asset"
            href="#plan"
            tone="accent"
          />
        </div>
      </div>
    </section>
  );
}
