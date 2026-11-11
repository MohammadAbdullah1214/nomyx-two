export const vendors = ["Nomyx", "Brickken", "What to verify"] as const;

export type QuickAnswerCard = {
  id: string;
  tag: string;
  title: string;
  logo?: string;
  featured?: boolean;
  description: string;
  references: readonly string[];
};

export const quickAnswers: readonly QuickAnswerCard[] = [
  {
    id: "nomyx",
    tag: "Evaluate when",
    title: "Nomyx",
    logo: "/nomyx-logo.png",
    featured: true,
    description:
      "White-label fund infrastructure across Engine, ID, and Gateway, with EIP-2535 Diamond upgrades, transaction-level eligibility rules, and subscriptions, redemptions, and distributions.",
    references: ["N1", "N2", "N3"],
  },
  {
    id: "brickken",
    tag: "Evaluate when",
    title: "Brickken",
    logo: "/comparisons/brickken.webp",
    description:
      "Issuer Studio, White Label Infrastructure, API access, and investor/lifecycle management.",
    references: ["B1", "B2"],
  },
  {
    id: "buyer-decision",
    tag: "Decide on",
    title: "Buyer decision",
    description:
      "Both support issuance and continuing investor workflows. The decision depends on your fund's requirements, network, and operating responsibilities.",
    references: [],
  },
];

export const comparisonRows = [
  {
    title: "Starting point",
    cells: [
      {
        text: "White-label fund infrastructure: Engine, ID, Gateway; Diamond upgrade design.",
        references: ["N1"],
      },
      {
        text: "Issuer Studio, White Label Infrastructure, or embedded API.",
        references: ["B1"],
      },
      {
        text: "Which deployment owns the investor experience and fund workflows?",
        references: [],
      },
    ],
  },
  {
    title: "Rule changes",
    cells: [
      {
        text: "Asset-linked eligibility and modular compliance update model.",
        references: ["N1", "N3"],
      },
      {
        text: "KYC/KYB and compliance-supporting flows; configuration varies.",
        references: ["B1", "B2"],
      },
      {
        text: "Demonstrate eligibility at transfer and a governed policy update.",
        references: [],
      },
    ],
  },
  {
    title: "Ongoing work",
    cells: [
      {
        text: "Primary subscriptions, redemptions, distributions, and records.",
        references: ["N1", "N2"],
      },
      {
        text: "Onboarding, records, reporting, distributions, and servicing.",
        references: ["B1", "B2"],
      },
      {
        text: "Trace a live-scope fund event through required systems.",
        references: [],
      },
    ],
  },
  {
    title: "Decisive demo",
    cells: [
      {
        text: "Demonstrate the fund lifecycle plus change control.",
        references: [],
      },
      {
        text: "Show the same scenario in the quoted Brickken package.",
        references: [],
      },
      {
        text: "Compare integrations, owners, exceptions, and three-year cost.",
        references: [],
      },
    ],
  },
] as const;

export const requirements = [
  [
    "Issuance",
    "Can the chosen platform configure your vehicle and issue interests to approved investors without unnecessary custom development?",
  ],
  [
    "Compliance",
    "What enforces eligibility, transfer limits, approvals, and changing rules at the relevant point in the transaction?",
  ],
  [
    "Operations",
    "How are subscriptions, redemptions, distributions, ownership records, reporting, and exceptions handled after launch?",
  ],
] as const;

export const acceptanceTests = [
  [
    "Investor onboarding",
    "Approved investors pass checks; ineligible investors are held or rejected.",
  ],
  [
    "Subscription and issuance",
    "Approved subscription allocates correctly; payment and investor records agree.",
  ],
  [
    "Eligibility and transfers",
    "An ineligible transfer is blocked and the reason is traceable.",
  ],
  [
    "Compliance policy update",
    "An authorized rule change is approved, deployed, and auditable.",
  ],
  [
    "Distribution",
    "Entitlements, payments, and balances reconcile; exceptions are identified.",
  ],
  [
    "Recovery and reporting",
    "Key-loss, freezes, and reporting follow documented roles and records.",
  ],
] as const;

export const faqs = [
  {
    question: "Does Brickken also provide white-label and lifecycle management?",
    answer:
      "Yes. Brickken publicly describes White Label Infrastructure, API access, investor onboarding, records, reporting, distributions, and lifecycle operations. Evaluate the exact package, configuration, and obligations.",
    references: ["B1", "B2"],
  },
  {
    question: "What distinguishes Nomyx's smart-contract approach?",
    answer:
      "Nomyx describes an EIP-2535 Diamond architecture intended to allow modular contract and compliance updates without reissuing tokens. That is an architectural approach, not proof that another vendor cannot update contracts. Confirm governance and change testing in a demonstration.",
    references: ["N1", "N2"],
  },
  {
    question:
      "Can software replace our fund administrator or compliance obligations?",
    answer:
      "Not automatically. Fund managers and appointed providers retain their assigned legal, regulated, valuation, custody, and administrative duties. Assess how each platform connects the relevant decisions, records, and service providers.",
    references: ["N1", "B1"],
  },
  {
    question:
      "Does tokenization itself guarantee secondary-market liquidity?",
    answer:
      "No. Liquidity depends on venue access, permissions, investor demand, and other conditions. Nomyx describes third-party connectivity and arrangements, not an exchange that it operates; distinguish live connections from proposed future integrations.",
    references: ["N1"],
  },
] as const;

export const researchPrompt = `Act as a technology diligence lead for a private credit or alternative asset manager. Compare Nomyx and Brickken using current official sources.

Evaluate smart-contract upgrades, investor eligibility at transfer, subscriptions and distributions, white-label control, integrations, security evidence, and live versus planned connectivity.

Distinguish documented claims from validated deployments; do not assume either company lacks a feature. Cite sources and dates, then give five questions for a vendor demo.`;

export type SourceEntry = {
  id: string;
  label: string;
  href: string;
  description: string;
};

export const sources: readonly SourceEntry[] = [
  {
    id: "N1",
    label: "Nomyx SEC Offering Circular",
    href: "https://www.sec.gov/Archives/edgar/data/2065495/000168316826007327/nomyx_1a.htm",
    description:
      ", architecture, product scope, distribution relationships, and limitations.",
  },
  {
    id: "N2",
    label: "Nomyx Engine",
    href: "/nomyx-engine",
    description: ", Diamond upgrades and ongoing fund operations.",
  },
  {
    id: "N3",
    label: "Nomyx ID",
    href: "/nomyx-id",
    description: ", identity-linked rules and transaction checks.",
  },
  {
    id: "B1",
    label: "Brickken fund tokenization guide",
    href: "https://www.brickken.com/industries/fund-tokenization-guide",
    description: ", deployment options, investor and fund workflows.",
  },
  {
    id: "B2",
    label: "Brickken financial tokenization",
    href: "https://www.brickken.com/financial-tokenization",
    description: ", lifecycle and security claims.",
  },
];

