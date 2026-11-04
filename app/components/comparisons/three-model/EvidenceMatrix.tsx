import ModelTable from "../ModelTable";

export default function EvidenceMatrix() {
  return (
    <section id="matrix" className="sec">
      <div className="wrap custom-container">
        <div className="sh">
          <span className="tag eyebrow">
            Master tripartite comparison matrix
          </span>
          <h2 className="section-heading">
            Twelve dimensions, four clusters, one evidence scale.
          </h2>
          <p className="lede">
            The matrix benchmarks three operating-model bets across four
            operational clusters and 12 core dimensions. Each cell states a
            strength before a trade-off. Vendor names appear as exemplars, and
            every vendor statement traces to the claims register.
          </p>
        </div>
        <div className="evkey">
          <div className="k">
            <span className="ev v">V</span>Validated: documented in
            institutional production today, with a named source.
          </div>
          <div className="k">
            <span className="ev p">P</span>Partner-dependent: relies on an
            external licensed institution.
          </div>
          <div className="k">
            <span className="ev u">U</span>Unproven / contingent: not yet
            demonstrated, or awaiting a legal, audit, or market condition.
          </div>
        </div>

        <div className="mtx-wrap">
          <ModelTable
            headings={[
              "Dimension",
              "Regulated monolith · e.g. Securitize",
              "Nomyx issuer infrastructure",
              "Credit protocol · e.g. Centrifuge, Clearpool",
            ]}
            rows={[
              {
                group:
                  "4.1 Ownership & governance · who governs your fund, investors, and code?",
              },
              {
                title: "1. Core operating bet",
                cells: [
                  <>
                    <b className="lead">Outsourced closed ecosystem.</b>Bundles
                    tokenization, transfer agency, broker-dealer, ATS, and fund
                    administration into one vendor-operated platform, which
                    gives a single accountable counterparty. The same bundle
                    ties every service to one vendor.{" "}
                    <span className="ev v">V</span>
                  </>,
                  <>
                    <b className="lead">Composable sovereign infrastructure.</b>
                    Modular components (Nomyx ID, Engine, Gateway) run under
                    your brand and connect to independent regulated partners.
                    You manage those partner relationships instead of buying one
                    bundle. <span className="ev v">V</span>
                    <span className="basis">
                      Basis: Messaging Guide, Stages 1–3 status.{" "}
                      <span className="verify">C-20</span>
                    </span>
                  </>,
                  <>
                    <b className="lead">On-chain capital distribution.</b>
                    Tokenizes debt and routes it into on-chain vaults where
                    crypto-native allocators supply capital around the clock.
                    Pool operators own compliance and recovery design.{" "}
                    <span className="ev v">V</span>
                  </>,
                ],
              },
              {
                title: "2. Brand & investor experience",
                cells: [
                  <>
                    <b className="lead">Vendor ecosystem account.</b>Investors
                    hold a reusable ID that speeds onboarding across issuers.
                    Branding depth stays undocumented, so verify white-label
                    scope in diligence. <span className="ev v">V</span>
                  </>,
                  <>
                    <b className="lead">White-label sovereign experience.</b>
                    Investor portal, verification, subscription workflows, and
                    reporting carry your institutional brand.{" "}
                    <span className="ev v">V</span>
                    <span className="basis">
                      Basis: none in the Messaging Guide.{" "}
                      <span className="verify">C-26</span>
                    </span>
                  </>,
                  <>
                    <b className="lead">Wallet-based access.</b>Investors invest
                    from their own wallets and hold a token representing the
                    position. Suits crypto-native allocators; institutional LPs
                    without wallet ops need a custodian or on-ramp.{" "}
                    <span className="ev v">V</span>
                  </>,
                ],
              },
              {
                title: "3. Investor identity & compliance",
                cells: [
                  <>
                    <b className="lead">Vendor-held reusable identity.</b>
                    Credentials live in the vendor's directory, reusable across
                    issuers. Identity ownership stays with the vendor, not your
                    fund. <span className="ev v">V</span>
                  </>,
                  <>
                    <b className="lead">Issuer-controlled reusable ID.</b>
                    Evaluates compliance state continuously and checks transfer
                    eligibility before settlement, without pooling your investor
                    list into a shared directory.{" "}
                    <span className="ev u">U</span>
                    <span className="basis">
                      Basis: continuous compliance in Stages 1–3;
                      no-shared-directory depends on per-customer isolation,
                      which awaits an independent audit.{" "}
                      <span className="verify">C-21</span>
                    </span>
                  </>,
                  <>
                    <b className="lead">Token-level restrictions.</b>Share
                    tokens carry transfer hooks and member lists. Compliance
                    authority sits with each pool operator, so issuers design
                    and run their own KYC. <span className="ev v">V</span>
                  </>,
                ],
              },
              {
                title: "4. Contract architecture & governance",
                cells: [
                  <>
                    <b className="lead">Vendor-governed contracts.</b>One vendor
                    operates contract standards and release cycles, which
                    simplifies accountability. Change control sits with the
                    vendor, so request written upgrade terms and fees.{" "}
                    <span className="ev p">P</span>
                  </>,
                  <>
                    <b className="lead">Modular EIP-2535 Diamond.</b>Separates
                    state storage from business logic through facet contracts,
                    so compliance and asset rules update without changing the
                    token address. Issuer-controlled multisig and timelock
                    governance holds upgrade authority.{" "}
                    <span className="ev v">V</span> architecture ·{" "}
                    <span className="ev u">U</span> governance
                    <span className="basis">
                      Basis: Messaging Guide lists recomposition as validated.
                      Current-production audit and published governance
                      parameters remain open.{" "}
                      <span className="verify">C-20, C-22</span>
                    </span>
                  </>,
                  <>
                    <b className="lead">Immutable core, modular extensions.</b>
                    The protocol core stays fixed while issuers customize at the
                    extension layer, which limits unilateral change. Core-level
                    changes fall outside issuer control.{" "}
                    <span className="ev v">V</span>
                  </>,
                ],
              },
              {
                group:
                  "4.2 Asset lifecycle & servicing · what operational reality follows minting?",
              },
              {
                title: "5. Legal register & dual-book sync",
                cells: [
                  <>
                    <b className="lead">Captive registered transfer agent.</b>An
                    SEC-registered affiliate keeps the record of ownership.
                    Reconciling that record to your existing administrator's
                    books needs integration work.{" "}
                    <span className="ev v">V</span>
                  </>,
                  <>
                    <b className="lead">API sync with your administrator.</b>
                    Treats token records as a workflow engine and synchronizes
                    with your fund administrator's legal register, which stays
                    authoritative. <span className="ev p">P</span>
                    <span className="basis">
                      Basis: depends on administrator integrations; the
                      Messaging Guide confirms none.{" "}
                      <span className="verify">C-23, C-27</span>
                    </span>
                  </>,
                  <>
                    <b className="lead">Pool legal wrapper.</b>Each pool sits in
                    a legal vehicle; the token represents a beneficial interest
                    and an off-chain register records ownership. Sync with your
                    administrator stays undocumented.{" "}
                    <span className="ev p">P</span>
                  </>,
                ],
              },
              {
                title: "6. Debt restructuring & workouts",
                cells: [
                  <>
                    <b className="lead">Vendor-scoped amendments.</b>Facility
                    amendments, margin resets, and covenant changes run through
                    vendor scoping and fees, so request the amendment procedure
                    in writing. <span className="ev p">P</span>
                  </>,
                  <>
                    <b className="lead">Modular facet upgrades.</b>Updates
                    interest calculations, haircut schedules, and waterfalls by
                    changing isolated facet contracts through governed
                    diamondCut transactions, without reissuing tokens.{" "}
                    <span className="ev v">V</span>
                    <span className="basis">
                      Basis: Messaging Guide, recomposition.{" "}
                      <span className="verify">C-20</span>
                    </span>
                  </>,
                  <>
                    <b className="lead">
                      On-chain write-downs, off-chain recovery.
                    </b>
                    Protocol logic adjusts valuations and allocates losses by
                    tranche automatically, while originators handle recovery by
                    negotiation. No in-place recomposition of token terms shown.{" "}
                    <span className="ev p">P</span>
                  </>,
                ],
              },
              {
                title: "7. Servicing & corporate actions",
                cells: [
                  <>
                    <b className="lead">Bundled fund services.</b>Digitized
                    onboarding, workflow automation, on-demand issuance and
                    redemption, and NAV with on-chain oracles. Your operations
                    lean on vendor staffing. <span className="ev v">V</span>
                  </>,
                  <>
                    <b className="lead">Native automation engine.</b>
                    Orchestrates redemptions and distributions through
                    documented API and on-chain rules.{" "}
                    <span className="ev v">V</span>
                    <span className="basis">
                      Basis: Messaging Guide names redemption terms and
                      waterfalls. Capital-call automation stays undocumented.{" "}
                      <span className="verify">C-20, C-23</span>
                    </span>
                  </>,
                  <>
                    <b className="lead">Smart-contract distribution.</b>Borrower
                    repayments arrive through bank accounts, then smart
                    contracts distribute interest to holders automatically.
                    Preparation and reconciliation stay with operators.{" "}
                    <span className="ev v">V</span>
                  </>,
                ],
              },
              {
                group:
                  "4.3 Market connectivity & liquidity · can your asset move across counterparties?",
              },
              {
                title: "8. Secondary market rails",
                cells: [
                  <>
                    <b className="lead">Affiliated ATS.</b>Routes secondary
                    trading through an SEC-registered ATS an affiliate operates,
                    giving regulated execution in one venue. Single-venue
                    routing limits external choice.{" "}
                    <span className="ev v">V</span>
                  </>,
                  <>
                    <b className="lead">Multi-venue connectivity.</b>Bridges
                    into independent regulated ATS, broker-dealer, and exchange
                    partners, including the announced tZERO relationship.
                    Connectivity does not create liquidity.{" "}
                    <span className="ev p">P</span>{" "}
                    <span className="verify">C-24</span>
                  </>,
                  <>
                    <b className="lead">
                      On-chain redemption &amp; pool liquidity.
                    </b>
                    Investors subscribe and redeem on-chain, and DeFi protocols
                    supply demand. BIS research finds limited trading activity
                    and concentrated holdings. <span className="ev u">U</span>
                  </>,
                ],
              },
              {
                title: "9. Collateral mobility & custody",
                cells: [
                  <>
                    <b className="lead">Ecosystem-partnered custody.</b>
                    Collateral pledging runs through affiliated or partnered
                    custodians; external tri-party arrangements need legal
                    clearance. <span className="ev p">P</span>
                  </>,
                  <>
                    <b className="lead">Institutional collateral packaging.</b>
                    Packages asset data, ownership verification, and lien status
                    into feeds custodians and repo lenders can diligence.{" "}
                    <span className="ev u">U</span>{" "}
                    <span className="ev c">Contingent</span>
                    <span className="basis">
                      Basis: Stage 4 awaits a named lender integration and stays
                      embargoed. <span className="verify">C-25</span>
                    </span>
                  </>,
                  <>
                    <b className="lead">DeFi collateral use.</b>Tokenized credit
                    serves as collateral inside DeFi. Bank and prime-broker
                    acceptance lacks evidence; cross-ledger collateral needs
                    synchronized legal finality. <span className="ev v">V</span>{" "}
                    DeFi · <span className="ev u">U</span> bank
                  </>,
                ],
              },
              {
                title: "10. Payment & cash settlement",
                cells: [
                  <>
                    <b className="lead">Platform settlement rails.</b>Supports
                    stablecoin and bank-channel settlement through vendor
                    integrations. Traditional wire investors may meet added
                    steps. <span className="ev p">P</span>
                  </>,
                  <>
                    <b className="lead">
                      Hybrid fiat &amp; stablecoin gateway.
                    </b>
                    Orchestrates ACH, Fedwire, and approved stablecoins so LPs
                    avoid managing wallets. <span className="ev p">P</span>
                    <span className="basis">
                      Basis: depends on banking partners; the Messaging Guide
                      holds no integration evidence.{" "}
                      <span className="verify">C-23</span>
                    </span>
                  </>,
                  <>
                    <b className="lead">Stablecoin-native flows.</b>Pools price
                    and settle in on-chain dollars, so fiat LPs need on-ramp and
                    off-ramp partners outside the protocol.{" "}
                    <span className="ev p">P</span>
                  </>,
                ],
              },
              {
                group:
                  "4.4 Commercial reality & risk · what does diligence uncover?",
              },
              {
                title: "11. Ecosystem interoperability",
                cells: [
                  <>
                    <b className="lead">One integrated stack.</b>Reduces vendor
                    count by bundling. Partial adoption can duplicate providers
                    you already pay, such as an existing administrator or
                    transfer agent. <span className="ev p">P</span>
                  </>,
                  <>
                    <b className="lead">Integration through documented APIs.</b>
                    Connects to existing administrators, transfer agents,
                    custodians, and CRMs through Nomyx Gateway.{" "}
                    <span className="ev v">V</span>
                    <span className="basis">
                      Basis: Guide defines Gateway as the integration layer. API
                      docs and live integrations sit outside it.{" "}
                      <span className="verify">C-23, C-27</span>
                    </span>
                  </>,
                  <>
                    <b className="lead">SDK and API modules.</b>Provides SDK and
                    API access plus modules for NAV and investor management
                    across chains. Fund-accounting and banking integrations stay
                    undocumented. <span className="ev v">V</span>
                  </>,
                ],
              },
              {
                title: "12. Exit rights & total cost",
                cells: [
                  <>
                    <b className="lead">Vendor terms govern exit.</b>Pricing and
                    export terms stay undisclosed on pages reviewed. Request fee
                    schedule, data-export rights, and migration terms in
                    writing. <span className="ev p">P</span>
                  </>,
                  <>
                    <b className="lead">Portability commitments.</b>Targets full
                    data export, open contract licenses, and issuer-held keys.
                    Pricing scopes to asset, volume, integrations, and
                    structure; no external price ships.{" "}
                    <span className="ev u">U</span>
                    <span className="basis">
                      Basis: contract terms sit outside the Messaging Guide.{" "}
                      <span className="verify">C-23</span>
                    </span>
                  </>,
                  <>
                    <b className="lead">Open-protocol exit.</b>Immutable core
                    contracts keep running without a single vendor. Costs for
                    gas, audits, curators, and pool operators vary by pool.{" "}
                    <span className="ev u">U</span>
                  </>,
                ],
              },
            ]}
            caption="Twelve operating-model dimensions across four operational clusters"
          />
        </div>
        <p className="cmpnote2">
          Each cell states a strength before a trade-off. Nomyx cells add a
          Basis line naming their proof; where the proof sits outside the Nomyx
          evidence file, the cell carries a verify tag. Vendor statements trace
          to the claims register.
        </p>
      </div>
    </section>
  );
}
