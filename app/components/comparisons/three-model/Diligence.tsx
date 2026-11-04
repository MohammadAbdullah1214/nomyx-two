export default function Diligence() {
  return (
    <section id="diligence" className="sec alt">
      <div className="wrap custom-container">
        <div className="sh">
          <span className="tag eyebrow">Vendor accountability checklist</span>
          <h2 className="section-heading">
            Demand answers to these six questions before signing any contract.
          </h2>
          <p className="lede">
            Feature checklists hide operational traps. Bring these six questions
            to every vendor diligence session, Nomyx included.
          </p>
        </div>
        <div className="dqs">
          <div className="dq">
            <div className="dn">
              Question 1 · Investor relationship ownership
            </div>
            <p className="ask">
              "Does our investor create an account inside your proprietary
              network, or does our firm retain 100% ownership of the portal,
              identity credentials, and relationship history?"
            </p>
            <p className="why">
              <b>Why it matters:</b> If investors register on a vendor-branded
              network, that vendor may own your distribution channel and may
              market alternative products to your allocators.
            </p>
          </div>
          <div className="dq">
            <div className="dn">Question 2 · Legal register of record</div>
            <p className="ask">
              "How does your platform synchronize on-chain balances with our
              fund administrator's official off-chain books, and which record
              controls legally during a discrepancy?"
            </p>
            <p className="why">
              <b>Why it matters:</b> SEC staff state that tokenized securities
              remain subject to federal securities laws. Platforms that treat
              the blockchain as the sole ledger may expose your GP to regulatory
              risk.
            </p>
          </div>
          <div className="dq">
            <div className="dn">
              Question 3 · Covenant &amp; waterfall restructuring
            </div>
            <p className="ask">
              "When our credit facility undergoes a margin reset, workout, or
              borrower amendment, can we modify the contract terms in place, or
              must we burn and reissue tokens?"
            </p>
            <p className="why">
              <b>Why it matters:</b> Reissuing tokens forces re-onboarding of
              every LP and stalls distributions, and may raise tax questions. A
              token record that diverges from negotiated terms creates a second
              dispute.
            </p>
          </div>
          <div className="dq">
            <div className="dn">Question 4 · Secondary market independence</div>
            <p className="ask">
              "Can our tokenized assets trade beyond your internal venue or
              pool, can our fund connect directly to external regulated venues,
              and what trade-volume evidence supports your liquidity claims?"
            </p>
            <p className="why">
              <b>Why it matters:</b> BIS research on tokenized money market
              funds finds limited trading activity. Ask every vendor for
              observed trade volumes, not projections.
            </p>
          </div>
          <div className="dq">
            <div className="dn">
              Question 5 · Regulatory reality and advisory roles
            </div>
            <p className="ask">
              "Which specific regulatory licenses does your entity hold, which
              capabilities depend on third-party partners, and how do you
              protect us if a partner ceases operations?"
            </p>
            <p className="why">
              <b>Why it matters:</b> Vendors may blur the boundary between
              proprietary regulated status and third-party relationships. Demand
              clear licensing provenance in writing.
            </p>
          </div>
          <div className="dq">
            <div className="dn">Question 6 · Termination and portability</div>
            <p className="ask">
              "If we terminate our agreement after three years, what exact
              technical and legal procedure exports our smart contracts,
              cap-table data, and investor compliance records?"
            </p>
            <p className="why">
              <b>Why it matters:</b> Smart contracts that cannot function
              outside a vendor's cloud environment leave you dependent on that
              vendor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
