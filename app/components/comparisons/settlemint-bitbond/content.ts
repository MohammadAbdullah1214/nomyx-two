export const vendors = ["SettleMint", "Nomyx", "Bitbond"] as const;

export const quickAnswers = [
  {
    name: "SettleMint",
    logo: "/comparisons/settlemint.svg",
    description:
      "DALP combines digital-asset lifecycle operations and governance in a shared environment.",
    references: ["S1"],
  },
  {
    name: "Nomyx",
    logo: "/nomyx-logo.png",
    description:
      "You want fund operations with modular asset logic and an issuer-branded experience.",
    references: ["N1", "N2"],
  },
  {
    name: "Bitbond",
    logo: "/comparisons/bitbond.webp",
    description:
      "Token Tool plus Offering Manager cover token and offering workflows, with token operations identified separately.",
    references: ["B1"],
  },
] as const;

export const comparisonRows = [
  {
    title: "Product scope to evaluate",
    cells: [
      {
        text: "DALP and the chosen deployment and integration scope.",
        references: ["S1"],
      },
      {
        text: "Engine plus the identity, connectivity, and external services your workflow needs.",
        references: ["N2"],
      },
      {
        text: "Token Tool plus Offering Manager and required external services.",
        references: ["B1"],
      },
    ],
  },
  {
    title: "Documented starting point",
    cells: [
      {
        text: "Issuance, controls, settlement coordination, servicing, and operating records.",
        references: ["S1"],
      },
      {
        text: "Asset logic that can be updated through a modular architecture.",
        references: ["N1"],
      },
      {
        text: "Token tooling and an investor-offering administration product.",
        references: ["B1"],
      },
    ],
  },
  {
    title: "Best reason to investigate",
    cells: [
      {
        text: "A shared environment for operations and technology teams.",
        references: [],
      },
      {
        text: "Changes to asset rules alongside existing fund relationships.",
        references: [],
      },
      {
        text: "A focused offering workflow with separately identified token operations.",
        references: [],
      },
    ],
  },
  {
    title: "Decisive demonstration",
    cells: [
      {
        text: "Resolve a servicing exception across approvals and records.",
        references: [],
      },
      {
        text: "Apply your approved amendment and reconcile downstream effects.",
        references: [],
      },
      {
        text: "Connect payment, allocation, and the required servicing event across the proposed tools.",
        references: [],
      },
    ],
  },
] as const;

export const requirements = [
  [
    "Control",
    "Approval authority, investor-data rights, administrative access, exports, and termination obligations.",
  ],
  [
    "Continuity",
    "The administrator, custodian, and loan servicer you intend to retain, plus the integration and support owner for each.",
  ],
  [
    "Change",
    "The amendment itself, its authorized effective date, and the records that must remain consistent.",
  ],
  [
    "Completion",
    "Payment and ownership reconciliation, including a failed or disputed event.",
  ],
] as const;

export const acceptanceTests = [
  [
    "Launch",
    "Approved configuration, permissions, issuance, and connected ownership records.",
  ],
  [
    "Admit an investor",
    "Eligible and ineligible cases, an incomplete application, and matched payment and allocation.",
  ],
  [
    "Amend a rule",
    "Authorized before-and-after terms, preserved history, and reconciled calculation effects.",
  ],
  [
    "Distribute proceeds",
    "Correct entitlements, approvals, payment status, and resolution of a failed payment without duplication.",
  ],
  [
    "Change a provider",
    "Usable exports, authority transfer, remaining dependencies, and transition costs.",
  ],
] as const;

export const faqs = [
  {
    question: "Is either competitor limited to issuance?",
    answer:
      "No such conclusion is supported here. SettleMint documents lifecycle operations, and Bitbond has distinct token and offering products. Evaluate the required post-issuance event in the actual proposed scope.",
    references: ["S1", "B1"],
  },
  {
    question: "Can we keep our administrator and loan servicer?",
    answer:
      "Make that a requirement of the proposal. Ask for the actual connection, reconciliation process, implementation owner, and ongoing support terms. Do not treat a generic integration claim as a finished connection.",
    references: [],
  },
  {
    question: "Does an upgradeable contract mean every amendment is easy?",
    answer:
      "No. The exact change, authorization, testing, records, and external-system effects determine the work. Compare the same event rather than ranking token standards.",
    references: [],
  },
  {
    question: "Will tokenization produce liquidity?",
    answer:
      "A transfer mechanism does not establish investor demand, a buyer, or financing approval. Evaluate the proposed route and its counterparties separately from the platform's operating features.",
    references: [],
  },
] as const;

export const researchPrompt = `Compare SettleMint DALP, Nomyx, and Bitbond Token Tool plus Offering Manager for a private-credit fund retaining its administrator and servicer.

Evaluate launch, investor admission, an approved distribution-rule amendment, a failed payment, and provider transition.

Cite current primary sources. Separate documented capabilities from working integrations and proposed tests.

Give each provider a credible reason to win and identify evidence that would make Nomyx the wrong choice.`;

export const sources = [
  ["S1", "SettleMint DALP capabilities, vendor documentation."],
  ["N1", "Nomyx Diamond architecture, vendor architecture claims."],
  ["N2", "Nomyx Engine, vendor product description."],
  [
    "B1",
    "Bitbond product overview, Token Tool and Offering Manager product scopes.",
  ],
] as const;
