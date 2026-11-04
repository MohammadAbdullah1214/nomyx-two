export const bookingUrl =
  "https://bookings.cloud.microsoft/book/NomyxDiscoveryCall@nomyx.io/?ismsaljsauthenabled=true";

export const gates = [
  [
    "Orient",
    "Choose the right asset. Under what conditions should we tokenize, and when should we pass?",
  ],
  [
    "Tokenize",
    "Prepare and put on-chain. How do we optimize time-to-market, security, governance and optionality?",
  ],
  [
    "Distribute",
    "Reach qualified demand. How do we reach larger pools of alpha-seeking investors?",
  ],
  [
    "Collateralize",
    "Unlock lending value. How do we borrow against tokenized assets without a six-month ordeal?",
  ],
  [
    "Settle",
    "Convert value quickly. How do we settle at T+0, not T+2 to T+20?",
  ],
] as const;

export const gaps = [
  [
    "Issuance is not liquidity.",
    "Digitizing ownership does not create buyers, financing, efficient settlement, or an exit. The asset may be on-chain while the capital behind it still moves bilaterally.",
  ],
  [
    "Compliance still behaves like a checkpoint.",
    "Eligibility gets verified at issuance or transfer. Between those events, counterparties often cannot query a continuously updated compliance state without requesting documents, involving people, or recreating the diligence process.",
  ],
  [
    "Platforms still behave like islands.",
    "A token that moves inside one venue may still need a manual handoff, custom integration, reconciliation event, or new onboarding process to reach another. Every seam adds friction.",
  ],
  [
    "Asset terms become expensive to change.",
    "When restructuring requires migration, reissuance, rebuilt records, or investor re-onboarding, managers avoid changing assets even when economics or regulation require it.",
  ],
] as const;

export const stages = [
  "Encumbered",
  "Siloed",
  "Recomposable",
  "Hyperliquid",
  "Borderless",
];
export const stageDescriptions = [
  "Every move needs a new project",
  "One venue at a time",
  "Collateral use in days",
  "T+0 to T+1 settlement",
  "Across jurisdictions",
];
export const dragBasisPoints = [120, 80, 45, 15, 5];

export const questions = [
  {
    label: "Compliance updates",
    title: "When an investor’s eligibility changes, how is compliance updated?",
    options: [
      [1, "Manually re-checked for each transaction"],
      [2, "Updated, but only inside one system"],
      [3, "Continuously queryable on-chain by counterparties"],
    ],
    constraint:
      "Compliance still behaves like a checkpoint. Counterparties cannot query a continuously updated compliance state without a manual diligence process.",
  },
  {
    label: "Moving to another venue",
    title: "Moving an asset to another venue or counterparty requires…",
    options: [
      [1, "A manual handoff or re-onboarding"],
      [2, "A custom integration per venue"],
      [4, "Connected rails with minimal friction"],
    ],
    constraint:
      "Your assets are siloed. Reaching another venue or counterparty requires a manual handoff or a custom integration per connection.",
  },
  {
    label: "Changing asset terms",
    title: "Changing asset terms, redemption logic, or structure requires…",
    options: [
      [1, "Burning and reissuing the token, or migration"],
      [2, "A partial manual rebuild of records"],
      [3, "A modular change in place, no reissuance"],
    ],
    constraint:
      "Asset terms are expensive to change. Restructuring forces a burn-and-reissue or migration rather than a modular change in place.",
  },
  {
    label: "Lifecycle settlement",
    title: "Settlement of a lifecycle event typically takes…",
    options: [
      [1, "Days, with manual reconciliation"],
      [2, "Hours, inside a single system"],
      [4, "T+0 to T+1 across connected rails"],
    ],
    constraint:
      "Settlement is slow. Lifecycle events wait on manual reconciliation instead of clearing across connected rails.",
  },
  {
    label: "Collateral diligence",
    title:
      "Could a lender diligence this asset as collateral today without a new manual process?",
    options: [
      [1, "No"],
      [2, "Partially"],
      [3, "Yes, the state is queryable"],
    ],
    constraint:
      "The asset is not collateral-ready. A lender cannot diligence it today without initiating a new manual process.",
  },
] as const;

export const credentials = [
  {
    eyebrow: "Testable Credential #1 · Verify the operating gap",
    title:
      "After you tokenize a private-credit asset, what still stays manual, slow, or impossible?",
    description:
      "Don’t take our framing on faith. Ask your own AI to find the gaps, and the evidence against our thesis.",
    heading: "Tokenization is the starting point.",
    topics: [
      "Compliance",
      "Eligibility",
      "Transfers",
      "Restructuring",
      "Collateral use",
      "Market connectivity",
      "Reconciliation",
      "Settlement",
    ],
    checks: [
      "Capabilities broadly available in the market today",
      "Capabilities dependent on a specific provider or partner",
      "Capabilities still limited, contingent or unproven",
    ],
    prompt: `Act as an institutional digital-asset operating-model analyst. A midmarket private-credit or alternative-asset manager has already tokenized an asset.

Identify what work typically remains manual, bilateral, slow, or difficult across compliance, investor eligibility, transfers, restructuring, collateral use, market connectivity, reconciliation, and settlement.

Do not assume tokenization creates liquidity or operational efficiency.

Separate:
1. capabilities broadly available in the market today;
2. capabilities that depend on a specific provider or partner; and
3. capabilities that remain limited, contingent, or unproven.

Look specifically for evidence that contradicts the thesis that tokenization alone solves these problems.

Cite primary sources.

Start with a TLDR, then give three implications for executive action and a plain-English explanation for a nontechnical board member.

End with the single question that should most influence a platform decision.`,
  },
  {
    eyebrow: "Testable Credential #2 · Verify the collateral path",
    title:
      "What must actually be true before a lender will advance against a tokenized private-credit asset?",
    description:
      "Ask your own AI to separate infrastructure prerequisites from everything Nomyx cannot control.",
    heading: "Tokenized does not mean financeable.",
    topics: [
      "Title",
      "Compliance",
      "Valuation",
      "Control",
      "Liquidation",
      "Restructuring",
      "Settlement",
      "Underwriting",
    ],
    checks: [
      "Infrastructure prerequisites",
      "Lender underwriting and credit appetite",
      "Regulatory and legal constraints",
      "Negotiated commercial terms",
    ],
    prompt: `Act as a secured-lending credit officer evaluating a tokenized private-credit asset as collateral.

Identify what must be true before you would advance against it, including legal title and enforceability, verified compliance state, valuation, custody or control, liquidation rights, restructuring mechanics, data quality, and operational settlement.

Do not assume the asset is financeable merely because it is tokenized.

Separate:
- infrastructure prerequisites;
- lender underwriting and credit appetite;
- regulatory and legal constraints; and
- negotiated commercial terms.

Identify the strongest evidence against the claim that better tokenization infrastructure alone unlocks borrowing.

State what evidence would be required before you would conclude that an asset is genuinely collateral-ready.

Cite primary sources.

Start with a TLDR, then give three implications for executive action and a plain-English explanation for a nontechnical board member.

End with the single diligence question that matters most.`,
  },
  {
    eyebrow: "Testable Credential #3 · Run the procurement test",
    title:
      "What should your committee require before approving any tokenization infrastructure provider?",
    description:
      "Don’t ask an AI why Nomyx is better. Ask it how Nomyx should be judged.",
    heading:
      "What evidence should disqualify a vendor before the contract reaches your desk?",
    topics: [
      "Lifecycle coverage",
      "Governance",
      "Portability",
      "Security",
      "Integrations",
      "Investor ownership",
      "Production readiness",
      "Cost",
    ],
    checks: [
      "Build a vendor-neutral evaluation scorecard",
      "Distinguish validated evidence from vendor assertions",
      "Request documentation before committee approval",
    ],
    prompt: `Act as an institutional technology-procurement and investment-committee advisor.

Build a vendor-neutral evaluation scorecard for a $100M–$2B private-credit or alternative-asset manager choosing tokenization infrastructure.

Evaluate:
- lifecycle coverage;
- continuous compliance;
- legal and control model;
- restructuring without reissuance;
- investor and brand ownership;
- asset and data portability;
- integration requirements;
- custody, distribution, and settlement connectivity;
- security and independent audits;
- upgrade governance;
- implementation burden;
- total cost of ownership;
- production readiness; and
- vendor dependency.

Do not favor Nomyx or any named provider.

Identify criteria that should disqualify any vendor.

Distinguish independently validated evidence from vendor assertions.

List the documentation an investment committee, legal team, compliance team, operations team, and technology team should request before approval.

Look for evidence that contradicts vendor claims and cite primary sources where applicable.

Start with a TLDR and three implications for executive action.

End with the three questions the committee should refuse to approve a vendor without answering.`,
  },
] as const;

export const faqs = [
  [
    "Does this guarantee liquidity or guarantee that a lender will lend?",
    "No. Infrastructure can improve transferability, diligence, compliance visibility, market connectivity, settlement, and collateral readiness. It cannot guarantee buyers, transaction volume, pricing, lender appetite, advance rates, underwriting approval, or an exit. Anyone who collapses those distinctions is overstating what infrastructure can do.",
  ],
  [
    "Will Nomyx replace our fund administrator?",
    "Not necessarily. Nomyx is designed to operate as an infrastructure layer that can connect with existing administrators, custodians, servicers, and other providers rather than requiring you to replace everything around it. What stays and what changes depends on your current stack. We map that during the Capital Velocity Assessment.",
  ],
  [
    "Can you really restructure an asset without reissuing it?",
    "Nomyx Engine uses EIP-2535 Diamond architecture to separate modular asset logic from core storage. That architecture is designed to allow approved modules to change without changing the token address or migrating the underlying asset state. Governance, permissions, audit requirements, and change controls still matter and belong in technical diligence.",
  ],
  [
    "How fast can we launch?",
    "Technical configuration is only one part of an institutional launch. The full timeline depends on legal readiness, offering documents, asset structure, compliance rules, required integrations, partner readiness, security review, testing, and stakeholder approval. A credible implementation plan separates time to technical configuration from time to first live transaction. We give you both.",
  ],
  [
    "Do you hold the same regulatory licenses as the large incumbents?",
    "No, and no honest comparison should imply that. Nomyx provides infrastructure and compliance technology and connects with regulated partners where regulated services apply.",
  ],
  [
    "What happens to our assets if we leave?",
    "They remain your assets. Token continuity, smart-contract ownership, data export, identity portability, integrations, and termination rights should be documented before choosing any infrastructure provider, including Nomyx. We put those answers in writing.",
  ],
  [
    "What does implementation cost?",
    "Pricing depends on the asset, transaction volume, integrations, infrastructure configuration, implementation requirements, and commercial structure. The correct comparison is not a single platform fee. It is first-year cost plus ongoing operating cost plus internal labor plus integrations plus migration exposure plus the cost of remaining at your current stage.",
  ],
  [
    "Is our data isolated from other customers?",
    "Nomyx’s architecture uses dedicated, isolated customer infrastructure designed to separate customer compliance data, asset structures, and investor relationships.",
  ],
  [
    "Who can change our asset’s logic, and under what control?",
    "Upgradeability should never mean arbitrary mutability. Changes belong behind documented governance, permissions, approval controls, auditability, and appropriate time delays. Nomyx’s specific production governance parameters should be disclosed during technical diligence.",
  ],
] as const;
