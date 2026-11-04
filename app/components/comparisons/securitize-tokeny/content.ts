export const bookingUrl =
  "https://bookings.cloud.microsoft/book/NomyxDiscoveryCall@nomyx.io/?ismsaljsauthenabled=true";

export const vendors = ["Securitize", "Nomyx", "Tokeny"] as const;

export const quickAnswers = [
  {
    name: "Securitize",
    logo: "/comparisons/securitize.svg",
    description:
      "You want to assess technology alongside fund-administration and other specifically contracted services.",
    references: ["S1"],
  },
  {
    name: "Nomyx",
    logo: "/nomyx-logo.png",
    description:
      "Preserving selected operating relationships and accommodating asset changes are priorities.",
    references: ["N1"],
  },
  {
    name: "Tokeny",
    logo: "/comparisons/tokeny.webp",
    description:
      "You want branded applications or tokenization APIs, with fund services scoped separately where needed.",
    references: ["T1", "T2"],
  },
] as const;

export const comparisonRows = [
  {
    title: "Starting scope",
    cells: [
      {
        text: "Tokenization technology plus the services identified in the proposal.",
        references: ["S1"],
      },
      {
        text: "Proposed fund workflow and named external providers.",
        references: ["N1"],
      },
      {
        text: "T-REX Platform applications or T-REX Engine APIs.",
        references: ["T1", "T2"],
      },
    ],
  },
  {
    title: "Investor experience",
    cells: [
      {
        text: "Connect API supports integrating the Securitize ID journey into an issuer website.",
        references: ["S2"],
      },
      {
        text: "Issuer experience and operating connections specified for the engagement.",
        references: [],
      },
      {
        text: "Branded issuer and investor applications are documented.",
        references: ["T1"],
      },
    ],
  },
  {
    title: "Existing systems",
    cells: [
      {
        text: "Require a scope for retained providers and required services.",
        references: [],
      },
      {
        text: "Require a scope for the integrations and responsibilities you retain.",
        references: [],
      },
      {
        text: "API integration is offered; any Apex service arrangement needs its own scope.",
        references: ["T2", "A1"],
      },
    ],
  },
  {
    title: "Decisive question",
    cells: [
      {
        text: "Does consolidation reduce coordination enough to justify transition and dependencies?",
        references: [],
      },
      {
        text: "Does retaining providers produce a supported, manageable workflow?",
        references: [],
      },
      {
        text: "Does the chosen software-and-services arrangement close the whole operating process?",
        references: [],
      },
    ],
  },
] as const;

export const serviceBoundaries = [
  [
    "Onboarding and eligibility",
    "Verification provider, decision authority, investor journey, and data rights.",
  ],
  [
    "Ownership records and transfers",
    "Governing record, responsible entity, reconciliation process, and correction authority.",
  ],
  [
    "Administration and reporting",
    "Included tasks, retained systems, and service commitments.",
  ],
  [
    "Custody and payments",
    "Contracted providers, approval authority, payment routes, and exception ownership.",
  ],
  [
    "Changes and termination",
    "Approval process, fees, exports, transition support, and access after termination.",
  ],
] as const;

export const acceptanceTests = [
  "Process an eligible subscription and resolve a payment/allocation mismatch.",
  "Apply an authorized distribution-rule change and reconcile every affected record.",
  "Recover when a verification or payment connection is unavailable.",
  "Export the records and explain the steps for replacing one material provider.",
] as const;

export const faqs = [
  {
    question: "Can Securitize integrate with an issuer’s own website?",
    answer:
      "Its API documentation describes an integrated investor journey using Securitize ID. Confirm the exact experience and retained-provider scope in your proposal.",
    references: ["S2"],
  },
  {
    question: "Is white-label branding unique to Nomyx?",
    answer:
      "No. Tokeny documents a white-label platform. Compare investor experience alongside contractual data rights, permissions, exports, and ongoing responsibilities.",
    references: ["T1"],
  },
  {
    question: "Does a provider’s affiliation make all services included?",
    answer:
      "No. Confirm the delivering entity, agreement, price, and service obligations. An affiliate’s capability does not establish inclusion in your purchase.",
    references: [],
  },
  {
    question: "Which arrangement offers the most control?",
    answer:
      "The answer depends on the rights and permissions you need. Inspect data use, approvals, key administration, provider selection, and termination provisions rather than relying on an architecture label.",
    references: [],
  },
] as const;

export const researchPrompt = `Compare Securitize, Nomyx, and Tokeny for a fund considering both retained-provider and consolidated-service arrangements.

Use current primary sources. Separate software, affiliated services, external providers, and customer responsibilities.

Identify the strongest case for each, contractual questions that public pages cannot answer, and evidence that would reverse the recommendation.

Do not infer mandatory bundling or investor-data ownership from branding or corporate affiliation.`;

export const sources = [
  [
    "S1",
    "Securitize fund-administration acquisition, company announcement; historical acquisition context, not a current scoped quote.",
  ],
  ["S2", "Securitize APIs, integration documentation."],
  [
    "N1",
    "Nomyx Diamond architecture, vendor description; deployment proof remains required.",
  ],
  [
    "T1",
    "Tokeny T-REX Platform, issuer and investor application documentation.",
  ],
  ["T2", "Tokeny T-REX Engine, vendor API description."],
  ["A1", "Apex digital asset fund services, vendor service description."],
] as const;
