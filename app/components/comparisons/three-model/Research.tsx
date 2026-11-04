import ResearchPrompt from "../ResearchPrompt";

export default function Research() {
  return (
    <section className="sec">
      <div className="wrap custom-container">
        <div className="sh">
          <span className="tag eyebrow">Evidence-based methodology</span>
          <h2 className="section-heading">
            Don't take our word for it. Stress-test our category claims with
            your AI copilot.
          </h2>
          <p className="lede">
            Most software vendors ask you to trust their sales presentations.
            Nomyx invites your investment committee and technology diligence
            team to run adversarial research using deep-research AI copilots.
            Copy the exact prompt below into your preferred AI engine to verify
            the operational reality of private credit tokenization.
          </p>
        </div>
        <ResearchPrompt
          title="Adversarial audit prompt for your AI research assistant"
          description="Steelman each model before you criticize it. Then name the evidence that would falsify each Nomyx claim."
          prompt={
            "Act as an institutional digital-asset operating-model analyst and capital-markets technology auditor.\n\nA private credit manager ($500M AUM) evaluates tokenization infrastructure across three operating models:\n1. Vertically integrated regulated platforms (e.g., Securitize)\n2. Modular, issuer-controlled infrastructure (e.g., Nomyx)\n3. Smart-contract-native credit protocols (e.g., Centrifuge, Clearpool)\n\nAudit the operational claims of these models across the full asset lifecycle. Steelman each model before you criticize it.\n\nSeparate capabilities into:\n- Validated (documented as available in institutional production today)\n- Partner-dependent (relies on external regulated financial institutions)\n- Unproven or contingent (unresolved regulatory, legal, audit, or market conditions)\n\nTest every claim tagged [V], [P], or [U] against the vendor's own documentation, and name the evidence that would falsify each Nomyx claim.\n\nAnalyze primary source findings from the SEC, BIS, DTCC, ESMA, and IMF regarding:\n1. Does tokenization create secondary market liquidity for private credit, or do tokens trade mainly through subscription and redemption?\n2. Can private debt restructurings, covenant waivers, and workouts execute through smart contracts without discretionary off-chain legal governance?\n3. What cross-ledger reconciliation and legal finality risks arise when on-chain token ledgers synchronize with fund-administration books of record?\n4. What custody and legal barriers keep prime brokers and banks from accepting tokenized debt as cross-venue collateral?\n5. What do IMF findings say about smart contracts that trigger margin calls or liquidations?\n\nProvide a concise executive summary, three critical operational risks for fund leadership, a table of claims you could not verify, and cite authoritative primary sources."
          }
          copyLabel="Copy the full prompt"
        />
        <h3 className="sources-h">
          Primary source evidence behind the category claims
        </h3>
        <div className="sources">
          <div className="srcitem">
            <div className="st">Limited secondary liquidity</div>
            <p>
              <a
                href="https://www.bis.org/publ/bisbull115.htm"
                target="_blank"
                rel="noopener"
              >
                BIS Bulletin 115
              </a>{" "}
              (26 Nov 2025, "The rise of tokenised money market funds") reports
              limited trading activity, holdings concentrated in few wallets
              (around 90% with four holders across two funds), and demand driven
              by DeFi protocols. The study covers money market funds, so read it
              as directional for private credit. Tokenization changes issuance
              mechanics; it does not manufacture secondary liquidity.
            </p>
          </div>
          <div className="srcitem">
            <div className="st">Dual-book legal primacy</div>
            <p>
              The{" "}
              <a
                href="https://www.sec.gov/newsroom/speeches-statements"
                target="_blank"
                rel="noopener"
              >
                SEC Division of Corporation Finance Staff Statement on Tokenized
                Securities
              </a>{" "}
              establishes that tokenized assets remain fully subject to federal
              securities laws, making an authoritative, reconciled register
              mandatory regardless of blockchain state.
            </p>
          </div>
          <div className="srcitem">
            <div className="st">Settlement and liquidity trade-offs</div>
            <p>
              The{" "}
              <a
                href="https://www.sec.gov/files/recommendation-market-structure-subcommittee-tokenization-equity-securities-022626.pdf"
                target="_blank"
                rel="noopener"
              >
                SEC Investor Advisory Committee Recommendation on Tokenization
              </a>{" "}
              notes that atomic gross settlement eliminates
              delivery-versus-payment lag but also eliminates multilateral trade
              netting, increasing intraday liquidity demands on asset managers.
            </p>
          </div>
          <div className="srcitem">
            <div className="st">Collateral mobility barriers</div>
            <p>
              A{" "}
              <a
                href="https://www.dtcc.com/-/media/interoperable-digital-asset-securities-white-paper.pdf"
                target="_blank"
                rel="noopener"
              >
                joint DTCC, Clearstream, Euroclear, and BCG study
              </a>{" "}
              establishes that cross-ledger collateral mobility requires
              synchronized legal finality, tri-party settlement controls, and
              harmonized custodian records. Smart contracts operating in
              isolation cannot achieve cross-platform collateral reuse without
              coordinated market rails.
            </p>
          </div>
          <div className="srcitem">
            <div className="st">
              Regulatory jurisdiction and money settlement
            </div>
            <p>
              An official review of the{" "}
              <a
                href="https://www.esma.europa.eu/sites/default/files/2025-06/ESMA75-117376770-460_Report_on_the_functioning_and_review_of_the_DLTR_-_Art.14.pdf"
                target="_blank"
                rel="noopener"
              >
                ESMA DLT Pilot Regime
              </a>{" "}
              documents that European digital securities markets remain
              constrained by the absence of CBDC settlement, forcing reliance on
              commercial bank money or e-money tokens that introduce
              counterparty and credit risks.
            </p>
          </div>
          <div className="srcitem">
            <div className="st">Automation and procyclical stress</div>
            <p>
              <a
                href="https://www.elibrary.imf.org/view/journals/068/2026/001/article-A001-en.xml"
                target="_blank"
                rel="noopener"
              >
                IMF Note 2026/001
              </a>
              , "Tokenized Finance" (Adrian, April 2026) warns that automated
              margining and collateral mechanisms could intensify procyclical
              pressure, with smart contracts that trigger margin calls or
              liquidations potentially accelerating selloffs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
