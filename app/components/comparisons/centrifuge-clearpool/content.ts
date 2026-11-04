export const vendors = ["Centrifuge", "Nomyx", "Clearpool"] as const;

export const quickAnswers = [
  {
    name: "Centrifuge",
    logo: "/comparisons/centrifuge.svg",
    description:
      "Whitelabel offers infrastructure for issuing and operating tokenized asset products.",
    references: ["C1"],
  },
  {
    name: "Nomyx",
    logo: "/nomyx-logo.png",
    description:
      "Private-credit workflows connecting investor capital with retained off-chain servicing.",
    references: ["N1"],
  },
  {
    name: "Clearpool",
    logo: "/comparisons/clearpool.svg",
    description:
      "Lending products, including permissioned institutional borrowing through Prime and a separate Credit Vaults model.",
    references: ["P1", "P2"],
  },
] as const;

export const comparisonRows = [
  {
    title: "Scope to evaluate",
    cells: [
      {
        text: "Whitelabel deployment, integrations, and any separately contracted services.",
        references: ["C1"],
      },
      {
        text: "Proposed investor and asset workflow plus retained servicing and integrations.",
        references: ["N1"],
      },
      {
        text: "A named lending product: Prime, Credit Vaults, or another expressly proposed configuration.",
        references: ["P1", "P2"],
      },
    ],
  },
  {
    title: "Best reason to investigate",
    cells: [
      {
        text: "You want to issue and operate a tokenized asset product.",
        references: [],
      },
      {
        text: "You want investor operations around a credit book and servicing model you retain.",
        references: [],
      },
      {
        text: "You want to evaluate a borrowing facility that fits the entity and financing requirement.",
        references: [],
      },
    ],
  },
  {
    title: "What must be proven?",
    cells: [
      {
        text: "Product operation and the actual distribution arrangement.",
        references: [],
      },
      {
        text: "Receipt-to-distribution reconciliation across the retained systems.",
        references: [],
      },
      {
        text: "Eligibility, lender participation, funding conditions, and repayment obligations.",
        references: [],
      },
    ],
  },
] as const;

export const requirements = [
  [
    "Technical access",
    "A supported interface, product, network, and configuration.",
  ],
  ["Admission", "Acceptance criteria for the asset, entity, and participants."],
  ["Counterparty interest", "Identified parties and their stated conditions."],
  ["Commitment", "Agreed amount, funding conditions, and expiry or duration."],
  ["Usable capital", "Funds available to the intended recipient."],
] as const;

export const exceptions = [
  [
    "Cash mismatch",
    "The receipt differs from the expected amount. The operator must record and resolve the difference.",
  ],
  [
    "Duplicate confirmation",
    "The same payment message arrives twice. It must not create a second economic effect.",
  ],
  [
    "Insufficient available cash",
    "An exit request exceeds cash on hand. The workflow must apply the actual product terms and report the outstanding request accurately.",
  ],
] as const;

export const costSchedules = [
  [
    "Operating schedule",
    "Setup, 36 months of platform and service fees, integration maintenance, staff effort, exceptions, changes, and exit.",
  ],
  [
    "Financing schedule",
    "The amount committed and funded, interest, fees, duration, repayment conditions, reserves, funding delay, and renewal or exit requirements.",
  ],
] as const;

export const faqs = [
  {
    question: "Is Centrifuge only a credit marketplace?",
    answer:
      "No. Its current Whitelabel materials describe tokenization infrastructure, vaults, investor operations, and integration tools. Evaluate the proposed deployment and service scope.",
    references: ["C1"],
  },
  {
    question: "Are Clearpool Prime and Credit Vaults the same product?",
    answer:
      "No. Prime documents permissioned institutional borrowing with fixed terms. Credit Vaults describe a distinct perpetual-loan model. Eligibility, repayment, and withdrawal conditions must be checked for the selected product.",
    references: ["P1", "P2"],
  },
  {
    question: "Does market access guarantee funding or an exit?",
    answer:
      "No. Confirm actual counterparties, commitments, available cash, and execution conditions. Infrastructure compatibility alone does not establish any of those outcomes.",
    references: [],
  },
  {
    question: "Does Nomyx replace the loan servicer?",
    answer:
      "Its private-credit proposition describes retained off-chain servicing. Confirm the data, payment, reconciliation, and exception responsibilities in the actual proposal.",
    references: ["N1"],
  },
] as const;

export const researchPrompt = `Compare Centrifuge Whitelabel, Nomyx, and a specifically named Clearpool lending product for a private-credit strategy.

First identify the capital recipient, instrument, repayment source, and servicer. Separate infrastructure compatibility, admission, counterparty interest, committed funding, and usable capital.

Cite current primary sources. Explain when each option fits, distinguish operating costs from financing terms, and identify evidence that would reverse the recommendation.`;

export const sources = [
  ["C1", "Centrifuge Whitelabel, vendor infrastructure and service options."],
  [
    "N1",
    "Nomyx private-credit syndication, vendor servicing and investor-workflow proposition.",
  ],
  ["P1", "Clearpool Prime, product documentation."],
  ["P2", "Clearpool Credit Vaults, separate product documentation."],
] as const;
