export default function ModelFit() {
  return (
    <section id="fit" className="sec">
      <div className="wrap custom-container">
        <div className="sh">
          <span className="tag eyebrow">Objective procurement alignment</span>
          <h2 className="section-heading">
            Choose your model based on operating reality, not marketing
            promises.
          </h2>
          <p className="lede">
            No single infrastructure fits every fund profile. Diligent
            committees evaluate trade-offs objectively.
          </p>
        </div>
        <div className="fit-grid">
          <div className="fitcard mono">
            <div className="fl">Regulated monolith may fit when</div>
            <h4>You want turnkey licensing</h4>
            <ul>
              <li>
                You need a single counterparty for turnkey licenses: affiliated
                transfer agent, broker-dealer, and ATS.
              </li>
              <li>
                You prefer to outsource primary distribution to a vendor that
                runs its own investor marketplace.
              </li>
              <li>
                You follow a standardized, static fund structure with no
                post-issuance restructuring.
              </li>
              <li>
                You accept investors interacting with a third-party brand
                through onboarding and secondary trading.
              </li>
              <li>
                You budget for multi-year platform fees and verify the fee
                schedule in writing.
              </li>
            </ul>
          </div>
          <div className="fitcard nmx">
            <div className="fl">Nomyx may fit when</div>
            <h4>You want control after issuance</h4>
            <ul>
              <li>
                You manage $100M–$10B in private credit, specialty finance, or
                alternative strategies.
              </li>
              <li>
                You insist on full sovereignty over brand, onboarding, and LP
                relationships.
              </li>
              <li>
                You must preserve existing administrators, prime brokers,
                servicers, and custodians.
              </li>
              <li>
                You hold debt that needs dynamic lifecycle changes: covenant
                mods, paydowns, waterfall restructuring.
              </li>
              <li>
                You want freedom to route secondary trading to independent
                regulated partners, not one proprietary ATS.
              </li>
            </ul>
          </div>
          <div className="fitcard proto">
            <div className="fl">Credit protocol may fit when</div>
            <h4>You want on-chain capital</h4>
            <ul>
              <li>
                You seek on-chain capital from DeFi allocators, vaults, and
                crypto-native treasuries.
              </li>
              <li>
                You serve investors who operate wallets and accept
                stablecoin-denominated flows.
              </li>
              <li>
                You hold credit that tolerates off-chain, manager-led workouts.
              </li>
              <li>
                You employ a team that builds and maintains compliance logic
                through protocol extensions.
              </li>
              <li>
                You accept public-chain visibility and need little legacy
                fund-accounting connectivity.
              </li>
            </ul>
          </div>
        </div>
        <div className="accept">
          <div className="fl">Nomyx asks you to accept</div>
          <h4>The honest trade-offs of the sovereign model</h4>
          <ul>
            <li>
              You coordinate independent partners instead of one vendor; Gateway
              adapters aim to reduce that work.
            </li>
            <li>
              Nomyx holds no broker-dealer, ATS, or custody licenses; regulated
              partners supply those.
            </li>
            <li>
              You hold upgrade authority, so your team runs multisig approvals,
              timelocks, and LP notices.{" "}
              <span className="ev ill">Illustrative</span>
            </li>
            <li>
              Several Nomyx capabilities carry U or verify tags today. Ask for
              evidence on each during your Fit Review.
            </li>
          </ul>
          <p className="ac">
            If your goal centers on permissionless liquidity, a protocol fits
            better than Nomyx. We say so.
          </p>
        </div>
      </div>
    </section>
  );
}
