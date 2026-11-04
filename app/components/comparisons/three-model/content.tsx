export const faqs = [
  {
    question:
      "Does using Nomyx require replacing our current fund administrator?",
    answer: (
      <>
        <p className="quick">
          No. Nomyx connects to your existing fund administrator through APIs
          and leaves your books and audit relationships in place.
        </p>
        <p>
          Regulated monoliths often bundle transfer agency and fund
          administration, so adopting them can displace providers you already
          trust. Nomyx Gateway instead synchronizes token activity with your
          administrator's records, and the administrator's register stays
          authoritative. Which administrator integrations run in production
          today remains open.
        </p>
        <ul>
          <li>Administrator keeps the legal register</li>
          <li>Bi-directional API synchronization</li>
          <li>Mints, burns, and transfers reconcile automatically</li>
          <li>Existing audit relationships stay intact</li>
          <li>No captive affiliate required</li>
        </ul>
        <p className="take">
          You keep your administrator and gain a token layer that reconciles to
          it.
        </p>
      </>
    ),
    schemaAnswer:
      "No. Nomyx connects to your existing fund administrator through APIs and leaves your books and audit relationships in place. Regulated monoliths often bundle transfer agency and fund administration, so adopting them can displace providers you already trust. Nomyx Gateway instead synchronizes token activity with your administrator's records, and the administrator's register stays authoritative. Which administrator integrations run in production today remains open. Administrator keeps the legal register Bi-directional API synchronization Mints, burns, and transfers reconcile automatically Existing audit relationships stay intact No captive affiliate required You keep your administrator and gain a token layer that reconciles to it.",
  },
  {
    question:
      "Do we become a systems integrator if we choose Nomyx instead of one bundled vendor?",
    answer: (
      <>
        <p className="quick">
          Partly: you coordinate independent partners, and Nomyx Gateway
          supplies pre-integrated adapters to reduce custom middleware.
        </p>
        <p>
          A bundled vendor offers one accountable counterparty, and that
          convenience has real value. Nomyx trades some of it for control over
          brand, identity, and asset logic. The Fit Review names each partner
          integration your structure needs and states which ones exist today, so
          you see the coordination burden before you sign.
        </p>
        <ul>
          <li>Gateway adapters target administrators and custodians</li>
          <li>Your review confirms named integrations</li>
          <li>You choose partners; Nomyx does not bundle them</li>
          <li>Custom middleware shrinks but does not vanish</li>
          <li>Governance duties stay with your team</li>
        </ul>
        <p className="take">
          You gain sovereignty and accept managing a small partner network.
        </p>
      </>
    ),
    schemaAnswer:
      "Partly: you coordinate independent partners, and Nomyx Gateway supplies pre-integrated adapters to reduce custom middleware. A bundled vendor offers one accountable counterparty, and that convenience has real value. Nomyx trades some of it for control over brand, identity, and asset logic. The Fit Review names each partner integration your structure needs and states which ones exist today, so you see the coordination burden before you sign. Gateway adapters target administrators and custodians Your review confirms named integrations You choose partners; Nomyx does not bundle them Custom middleware shrinks but does not vanish Governance duties stay with your team You gain sovereignty and accept managing a small partner network.",
  },
  {
    question:
      "How does Nomyx handle regulatory licensing, and what happens if a partner fails?",
    answer: (
      <>
        <p className="quick">
          Nomyx supplies technology and compliance infrastructure and holds no
          broker-dealer, ATS, or custody licenses, so licensed partners such as
          tZERO provide those services.
        </p>
        <p>
          Bundling licenses under one parent buys convenience and concentrates
          risk: a lost license or enforcement action strands every client at
          once. Nomyx connects issuers to independent licensed partners, and
          assets live in issuer-controlled contracts. If a partner exits, you
          change execution partners through Gateway configuration without
          reissuing tokens. Ask any vendor, Nomyx included, for licensing
          provenance in writing.
        </p>
        <ul>
          <li>Nomyx holds no BD, ATS, or custody licenses</li>
          <li>Partners supply regulated execution and custody</li>
          <li>tZERO relationship announced; wording under review</li>
          <li>Asset contracts stay issuer-controlled</li>
          <li>Partner swaps avoid token reissuance</li>
        </ul>
        <p className="take">
          You gain partner choice and accept that others supply the regulated
          services.
        </p>
      </>
    ),
    schemaAnswer:
      "Nomyx supplies technology and compliance infrastructure and holds no broker-dealer, ATS, or custody licenses, so licensed partners such as tZERO provide those services. Bundling licenses under one parent buys convenience and concentrates risk: a lost license or enforcement action strands every client at once. Nomyx connects issuers to independent licensed partners, and assets live in issuer-controlled contracts. If a partner exits, you change execution partners through Gateway configuration without reissuing tokens. Ask any vendor, Nomyx included, for licensing provenance in writing. Nomyx holds no BD, ATS, or custody licenses Partners supply regulated execution and custody tZERO relationship announced; wording under review Asset contracts stay issuer-controlled Partner swaps avoid token reissuance You gain partner choice and accept that others supply the regulated services.",
  },
  {
    question:
      "Can contract upgradeability let a GP or an attacker alter our waterfall after issuance?",
    answer: (
      <>
        <p className="quick">
          Upgradeable contracts carry that risk by design, so Nomyx wraps every
          upgrade in multisignature approval, timelocks, and LP notification
          instead of unilateral control.
        </p>
        <p>
          EIP-2535 separates asset logic into facets that update in place, so a
          credit facility amendment changes one waterfall facet without burning
          tokens or re-onboarding investors. Illustrative settings include a
          3-of-5 signer threshold that includes an external administrator and a
          14-day timelock on core financial logic. Nomyx publishes final
          parameters with its diamondCut governance model.{" "}
          <span className="ev ill">Illustrative</span>
        </p>
        <ul>
          <li>Multisignature threshold on every upgrade</li>
          <li>Timelock on core financial logic</li>
          <li>On-chain notice to LPs before changes</li>
          <li>Third-party audit cadence per facet</li>
          <li>Token address and holdings stay unchanged</li>
        </ul>
        <p className="take">
          Upgradeability gives you agility under fiduciary consent, not
          unilateral discretion.
        </p>
      </>
    ),
    schemaAnswer:
      "Upgradeable contracts carry that risk by design, so Nomyx wraps every upgrade in multisignature approval, timelocks, and LP notification instead of unilateral control. EIP-2535 separates asset logic into facets that update in place, so a credit facility amendment changes one waterfall facet without burning tokens or re-onboarding investors. Illustrative settings include a 3-of-5 signer threshold that includes an external administrator and a 14-day timelock on core financial logic. Nomyx publishes final parameters with its diamondCut governance model. Illustrative Multisignature threshold on every upgrade Timelock on core financial logic On-chain notice to LPs before changes Third-party audit cadence per facet Token address and holdings stay unchanged Upgradeability gives you agility under fiduciary consent, not unilateral discretion.",
  },
  {
    question:
      "Why not use a smart-contract-native credit protocol to reach on-chain liquidity?",
    answer: (
      <>
        <p className="quick">
          A protocol fits when you want on-chain capital from DeFi allocators,
          and it fits poorly when you need issuer-controlled compliance,
          in-place amendments, and bank-recognized collateral.
        </p>
        <p>
          Protocols such as Centrifuge and Clearpool connect credit to real
          on-chain demand, and some restrict access through KYC and whitelists.
          Trade-offs follow: pool operators own compliance design, the protocol
          core stays fixed, and recovery runs off-chain. BIS research finds
          limited secondary trading and concentrated holdings, and IMF analysis
          warns automated margin calls can accelerate selloffs. Treat liquidity
          as something to test, not assume.
        </p>
        <ul>
          <li>Real DeFi capital exists today</li>
          <li>Compliance logic sits with pool operators</li>
          <li>Core contracts stay immutable</li>
          <li>Recovery relies on off-chain discretion</li>
          <li>Secondary depth remains limited</li>
          <li>Bank collateral acceptance lacks evidence</li>
        </ul>
        <p className="take">
          Choose a protocol for on-chain capital and Nomyx for control after
          issuance.
        </p>
      </>
    ),
    schemaAnswer:
      "A protocol fits when you want on-chain capital from DeFi allocators, and it fits poorly when you need issuer-controlled compliance, in-place amendments, and bank-recognized collateral. Protocols such as Centrifuge and Clearpool connect credit to real on-chain demand, and some restrict access through KYC and whitelists. Trade-offs follow: pool operators own compliance design, the protocol core stays fixed, and recovery runs off-chain. BIS research finds limited secondary trading and concentrated holdings, and IMF analysis warns automated margin calls can accelerate selloffs. Treat liquidity as something to test, not assume. Real DeFi capital exists today Compliance logic sits with pool operators Core contracts stay immutable Recovery relies on off-chain discretion Secondary depth remains limited Bank collateral acceptance lacks evidence Choose a protocol for on-chain capital and Nomyx for control after issuance.",
  },
  {
    question: "How does Nomyx protect investor data privacy?",
    answer: (
      <>
        <p className="quick">
          Nomyx targets dedicated, isolated infrastructure for each
          institutional client so your investor records never pool with
          competing managers.
        </p>
        <p>
          Centralized platforms can hold investor identities in a shared
          directory. Nomyx does not monetize, pool, or expose your investor
          relationships to competing managers. An independent isolation audit
          remains open, and the Halborn smart-contract audit covers code, not
          infrastructure boundaries.
        </p>
        <ul>
          <li>Dedicated environment per client</li>
          <li>Investor records stay encrypted</li>
          <li>Client-controlled encryption keys</li>
          <li>No shared investor directory</li>
          <li>Independent isolation audit pending</li>
        </ul>
        <p className="take">
          You keep exclusive control of your LP relationships.
        </p>
      </>
    ),
    schemaAnswer:
      "Nomyx targets dedicated, isolated infrastructure for each institutional client so your investor records never pool with competing managers. Centralized platforms can hold investor identities in a shared directory. Nomyx does not monetize, pool, or expose your investor relationships to competing managers. An independent isolation audit remains open, and the Halborn smart-contract audit covers code, not infrastructure boundaries. Dedicated environment per client Investor records stay encrypted Client-controlled encryption keys No shared investor directory Independent isolation audit pending You keep exclusive control of your LP relationships.",
  },
  {
    question: "Can our investors participate without cryptocurrency wallets?",
    answer: (
      <>
        <p className="quick">
          Yes. Nomyx Gateway aims to let LPs subscribe, sign, and fund through
          bank wires and ACH while qualified custodians hold tokenized
          entitlements.
        </p>
        <p>
          Gateway abstracts blockchain mechanics for institutional allocators.
          LPs complete accreditation, sign subscription agreements, and fund
          capital calls through standard payment rails, and receive familiar
          custody statements and tax reporting. Protocol-native products differ:
          investors there invest from their own wallets.
        </p>
        <ul>
          <li>Accreditation completes in your branded portal</li>
          <li>Subscriptions sign electronically</li>
          <li>Funding runs through wires or ACH</li>
          <li>Custodians hold tokenized entitlements</li>
          <li>LPs receive familiar statements</li>
        </ul>
        <p className="take">
          Institutional LPs participate without touching cryptographic keys.
        </p>
      </>
    ),
    schemaAnswer:
      "Yes. Nomyx Gateway aims to let LPs subscribe, sign, and fund through bank wires and ACH while qualified custodians hold tokenized entitlements. Gateway abstracts blockchain mechanics for institutional allocators. LPs complete accreditation, sign subscription agreements, and fund capital calls through standard payment rails, and receive familiar custody statements and tax reporting. Protocol-native products differ: investors there invest from their own wallets. Accreditation completes in your branded portal Subscriptions sign electronically Funding runs through wires or ACH Custodians hold tokenized entitlements LPs receive familiar statements Institutional LPs participate without touching cryptographic keys.",
  },
  {
    question: "How do we exit if we transition away from Nomyx?",
    answer: (
      <>
        <p className="quick">
          Nomyx contracts target full data portability: you hold administrative
          control of your diamond keys, cap-table registers, and investor
          databases, and your contracts keep running on-chain after termination.
        </p>
        <p>
          If you terminate, your core smart contracts continue running
          autonomously on-chain, and your team exports compliance, audit, and
          lifecycle records in standard relational formats. Ask every vendor for
          the exact termination procedure in writing, including export formats
          and timelines. Nomyx finalizes contract terms during the Fit Review.
        </p>
        <ul>
          <li>You hold diamond upgrade keys</li>
          <li>Cap-table registers export on request</li>
          <li>Compliance records export in relational formats</li>
          <li>Contracts keep running after termination</li>
          <li>Termination procedure documented in writing</li>
        </ul>
        <p className="take">
          You leave with your contracts, records, and investor relationships
          intact.
        </p>
      </>
    ),
    schemaAnswer:
      "Nomyx contracts target full data portability: you hold administrative control of your diamond keys, cap-table registers, and investor databases, and your contracts keep running on-chain after termination. If you terminate, your core smart contracts continue running autonomously on-chain, and your team exports compliance, audit, and lifecycle records in standard relational formats. Ask every vendor for the exact termination procedure in writing, including export formats and timelines. Nomyx finalizes contract terms during the Fit Review. You hold diamond upgrade keys Cap-table registers export on request Compliance records export in relational formats Contracts keep running after termination Termination procedure documented in writing You leave with your contracts, records, and investor relationships intact.",
  },
];

export const scorecardRows = [
  [
    "Investor onboarding",
    "Vendor holds LP identity",
    "Each pool builds own KYC",
  ],
  [
    "Facility amendments",
    "Vendor scopes each change",
    "Recovery runs off-chain",
  ],
  [
    "Fund administration",
    "Bundled admin overlaps yours",
    "Admin sync path unconfirmed",
  ],
  [
    "Collateral acceptance",
    "Vendor-partnered custody",
    "Bank acceptance unproven",
  ],
  [
    "1. Core operating bet",
    "Outsourced closed ecosystem. Bundles tokenization, transfer agency, broker-dealer, ATS, and fund administration into one vendor-operated platform, which gives a single accountable counterparty. The same bundle ties every service to one vendor. V",
    "Composable sovereign infrastructure. Modular components (Nomyx ID, Engine, Gateway) run under your brand and connect to independent regulated partners. You manage those partner relationships instead of buying one bundle. V Basis: Messaging Guide, Stages 1–3 status. C-20",
    "On-chain capital distribution. Tokenizes debt and routes it into on-chain vaults where crypto-native allocators supply capital around the clock. Pool operators own compliance and recovery design. V",
  ],
  [
    "2. Brand & investor experience",
    "Vendor ecosystem account. Investors hold a reusable ID that speeds onboarding across issuers. Branding depth stays undocumented, so verify white-label scope in diligence. V",
    "White-label sovereign experience. Investor portal, verification, subscription workflows, and reporting carry your institutional brand. V Basis: none in the Messaging Guide. C-26",
    "Wallet-based access. Investors invest from their own wallets and hold a token representing the position. Suits crypto-native allocators; institutional LPs without wallet ops need a custodian or on-ramp. V",
  ],
  [
    "3. Investor identity & compliance",
    "Vendor-held reusable identity. Credentials live in the vendor's directory, reusable across issuers. Identity ownership stays with the vendor, not your fund. V",
    "Issuer-controlled reusable ID. Evaluates compliance state continuously and checks transfer eligibility before settlement, without pooling your investor list into a shared directory. U Basis: continuous compliance in Stages 1–3; no-shared-directory depends on per-customer isolation, which awaits an independent audit. C-21",
    "Token-level restrictions. Share tokens carry transfer hooks and member lists. Compliance authority sits with each pool operator, so issuers design and run their own KYC. V",
  ],
  [
    "4. Contract architecture & governance",
    "Vendor-governed contracts. One vendor operates contract standards and release cycles, which simplifies accountability. Change control sits with the vendor, so request written upgrade terms and fees. P",
    "Modular EIP-2535 Diamond. Separates state storage from business logic through facet contracts, so compliance and asset rules update without changing the token address. Issuer-controlled multisig and timelock governance holds upgrade authority. V architecture · U governance Basis: Messaging Guide lists recomposition as validated. Current-production audit and published governance parameters remain open. C-20, C-22",
    "Immutable core, modular extensions. The protocol core stays fixed while issuers customize at the extension layer, which limits unilateral change. Core-level changes fall outside issuer control. V",
  ],
  [
    "5. Legal register & dual-book sync",
    "Captive registered transfer agent. An SEC-registered affiliate keeps the record of ownership. Reconciling that record to your existing administrator's books needs integration work. V",
    "API sync with your administrator. Treats token records as a workflow engine and synchronizes with your fund administrator's legal register, which stays authoritative. P Basis: depends on administrator integrations; the Messaging Guide confirms none. C-23, C-27",
    "Pool legal wrapper. Each pool sits in a legal vehicle; the token represents a beneficial interest and an off-chain register records ownership. Sync with your administrator stays undocumented. P",
  ],
  [
    "6. Debt restructuring & workouts",
    "Vendor-scoped amendments. Facility amendments, margin resets, and covenant changes run through vendor scoping and fees, so request the amendment procedure in writing. P",
    "Modular facet upgrades. Updates interest calculations, haircut schedules, and waterfalls by changing isolated facet contracts through governed diamondCut transactions, without reissuing tokens. V Basis: Messaging Guide, recomposition. C-20",
    "On-chain write-downs, off-chain recovery. Protocol logic adjusts valuations and allocates losses by tranche automatically, while originators handle recovery by negotiation. No in-place recomposition of token terms shown. P",
  ],
  [
    "7. Servicing & corporate actions",
    "Bundled fund services. Digitized onboarding, workflow automation, on-demand issuance and redemption, and NAV with on-chain oracles. Your operations lean on vendor staffing. V",
    "Native automation engine. Orchestrates redemptions and distributions through documented API and on-chain rules. V Basis: Messaging Guide names redemption terms and waterfalls. Capital-call automation stays undocumented. C-20, C-23",
    "Smart-contract distribution. Borrower repayments arrive through bank accounts, then smart contracts distribute interest to holders automatically. Preparation and reconciliation stay with operators. V",
  ],
  [
    "8. Secondary market rails",
    "Affiliated ATS. Routes secondary trading through an SEC-registered ATS an affiliate operates, giving regulated execution in one venue. Single-venue routing limits external choice. V",
    "Multi-venue connectivity. Bridges into independent regulated ATS, broker-dealer, and exchange partners, including the announced tZERO relationship. Connectivity does not create liquidity. P C-24",
    "On-chain redemption & pool liquidity. Investors subscribe and redeem on-chain, and DeFi protocols supply demand. BIS research finds limited trading activity and concentrated holdings. U",
  ],
  [
    "9. Collateral mobility & custody",
    "Ecosystem-partnered custody. Collateral pledging runs through affiliated or partnered custodians; external tri-party arrangements need legal clearance. P",
    "Institutional collateral packaging. Packages asset data, ownership verification, and lien status into feeds custodians and repo lenders can diligence. U Contingent Basis: Stage 4 awaits a named lender integration and stays embargoed. C-25",
    "DeFi collateral use. Tokenized credit serves as collateral inside DeFi. Bank and prime-broker acceptance lacks evidence; cross-ledger collateral needs synchronized legal finality. V DeFi · U bank",
  ],
  [
    "10. Payment & cash settlement",
    "Platform settlement rails. Supports stablecoin and bank-channel settlement through vendor integrations. Traditional wire investors may meet added steps. P",
    "Hybrid fiat & stablecoin gateway. Orchestrates ACH, Fedwire, and approved stablecoins so LPs avoid managing wallets. P Basis: depends on banking partners; the Messaging Guide holds no integration evidence. C-23",
    "Stablecoin-native flows. Pools price and settle in on-chain dollars, so fiat LPs need on-ramp and off-ramp partners outside the protocol. P",
  ],
  [
    "11. Ecosystem interoperability",
    "One integrated stack. Reduces vendor count by bundling. Partial adoption can duplicate providers you already pay, such as an existing administrator or transfer agent. P",
    "Integration through documented APIs. Connects to existing administrators, transfer agents, custodians, and CRMs through Nomyx Gateway. V Basis: Guide defines Gateway as the integration layer. API docs and live integrations sit outside it. C-23, C-27",
    "SDK and API modules. Provides SDK and API access plus modules for NAV and investor management across chains. Fund-accounting and banking integrations stay undocumented. V",
  ],
  [
    "12. Exit rights & total cost",
    "Vendor terms govern exit. Pricing and export terms stay undisclosed on pages reviewed. Request fee schedule, data-export rights, and migration terms in writing. P",
    "Portability commitments. Targets full data export, open contract licenses, and issuer-held keys. Pricing scopes to asset, volume, integrations, and structure; no external price ships. U Basis: contract terms sit outside the Messaging Guide. C-23",
    "Open-protocol exit. Immutable core contracts keep running without a single vendor. Costs for gas, audits, curators, and pool operators vary by pool. U",
  ],
];
