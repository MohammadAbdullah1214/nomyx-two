export const vendors = ["DigiShares Launch", "Nomyx", "Bitbond"] as const;

export const quickAnswers = [
  {
    name: "DigiShares",
    logo: "/comparisons/digishares.webp",
    suffix: "Launch",
    description:
      "A defined issuer-software package for a packaged starting workflow.",
    references: ["D1"],
  },
  {
    name: "Nomyx",
    logo: "/nomyx-logo.png",
    suffix: "",
    description:
      "Enters the final shortlist only after a complete scoped quote shows the proposed workflow fits your budget and staffing.",
    references: ["N1"],
  },
  {
    name: "Bitbond",
    logo: "/comparisons/bitbond.webp",
    suffix: "",
    description:
      "Token deployment through Token Tool separated from the investor-offering workflow in Offering Manager.",
    references: ["B1", "B2"],
  },
] as const;

export const comparisonRows = [
  {
    title: "Scope to price",
    cells: [
      { text: "Launch and required external services.", references: [] },
      {
        text: "A minimum complete configuration with every required component itemized.",
        references: [],
      },
      {
        text: "Token Tool plus the required Offering Manager plan and external services.",
        references: [],
      },
    ],
  },
  {
    title: "Best reason to investigate",
    cells: [
      { text: "You want a packaged starting workflow.", references: [] },
      {
        text: "Your recurring operating requirements may justify a broader implementation.",
        references: [],
      },
      {
        text: "You want to combine self-service token tools with offering administration.",
        references: [],
      },
    ],
  },
  {
    title: "Main qualification",
    cells: [
      {
        text: "The required workflow must fit Launch rather than depend on a higher tier.",
        references: [],
      },
      {
        text: "Cash requirements and specialist work must fit the available resources.",
        references: [],
      },
      {
        text: "Every step between the tools and ongoing servicing needs an owner.",
        references: [],
      },
    ],
  },
] as const;

export const costAnchors = [
  {
    title:
      "DigiShares Launch: €5,000 setup + €300/month for the first issuance",
    references: ["D1"],
    firstYear: "€8,600",
    threeYears: "€15,800",
    excluded:
      "Separately charged services, usage, applicable taxes, staff time, and anything outside Launch.",
  },
  {
    title:
      "Bitbond Offering Manager Professional: €3,588/year with annual billing",
    references: ["B2"],
    firstYear: "€3,588",
    threeYears: "€10,764",
    excluded:
      "Token Tool deployment, applicable VAT, external services, and staff time.",
  },
  {
    title: "Nomyx minimum complete configuration",
    references: [],
    firstYear: "Scoped quote needed",
    threeYears: "Scoped quote needed",
    excluded: "Included and excluded items must be specified in the quote.",
  },
] as const;

export const requirements = [
  [
    "Set up",
    "Set up the offering and process an investor application needing correction.",
  ],
  [
    "Confirm and reconcile",
    "Confirm a payment, allocate the interest, and reconcile the ownership record.",
  ],
  [
    "Distribute",
    "Approve and reconcile a sample distribution, including one failed payment.",
  ],
  [
    "Handle a duplicate",
    "Handle a duplicate payment confirmation without creating a second allocation.",
  ],
  [
    "Export and answer",
    "Export usable records for your accountant and answer an investor's sample question.",
  ],
] as const;

export const economics = [
  [
    "First-year cash",
    "Setup, software, deployment, transaction charges, required services, paid assistance, and support.",
  ],
  [
    "Operating capacity",
    "Staff hours for onboarding, reviews, approvals, records, distributions, and exceptions.",
  ],
  [
    "Three-year economics",
    "Cash costs plus consistently valued internal effort, planned changes, and transition work.",
  ],
] as const;

export const faqs = [
  {
    question: "Which option is cheapest?",
    answer:
      "The published Offering Manager subtotal is lower than the Launch subtotal shown here, but it is not the same scope. A complete quote and an operating rehearsal are needed to rank the overall cost.",
    references: [],
  },
  {
    question: "Does Nomyx have an entry-level package?",
    answer:
      "This review did not establish a published Nomyx starter tier. Request a minimum complete proposal before treating it as commercially qualified for your project.",
    references: [],
  },
  {
    question: "Can we operate without a blockchain engineer?",
    answer:
      "Test that with the intended operators. Identify tasks that need vendor or specialist help, and include that help in the support arrangement and budget.",
    references: [],
  },
  {
    question: "What happens when we add another issuance?",
    answer:
      "Ask about setup reuse, plan limits, ongoing fees, and additional work. DigiShares lists €200/month for subsequent Launch issuances; confirm the complete scope and any other charges.",
    references: ["D1"],
  },
] as const;

export const researchPrompt = `Compare DigiShares Launch, a scoped Nomyx configuration, and Bitbond Token Tool plus Offering Manager for one first offering. Use current primary pricing sources and show the checked date.

Separate software subtotals from total first-year cash and staff effort. Do not invent Nomyx pricing or treat a test plan as a live-offering plan.

Identify required extras, plan limits, and the operator rehearsal needed before choosing.`;

export const sources = [
  ["D1", "DigiShares Launch, published package and pricing."],
  ["B1", "Bitbond, Token Tool and Offering Manager distinction."],
  [
    "B2",
    "Offering Manager terms, plans, billing, applicable VAT, and free-plan restrictions.",
  ],
  ["N1", "Nomyx Engine, product description; not an entry-level quote."],
] as const;
