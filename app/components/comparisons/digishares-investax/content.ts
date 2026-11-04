export const vendors = ["DigiShares", "Nomyx", "InvestaX"] as const;

export const quickAnswers = [
  {
    name: "DigiShares",
    logo: "/comparisons/digishares.webp",
    description:
      "Issuer software in defined packages, with capabilities varying by tier.",
    references: ["D1", "D2"],
  },
  {
    name: "Nomyx",
    logo: "/nomyx-logo.png",
    description:
      "Workflows for ownership records, distributions, and controlled transfers around real-estate vehicles.",
    references: ["N1"],
  },
  {
    name: "InvestaX",
    logo: "/comparisons/investax.svg",
    description:
      "Tokenization technology with a Singapore-based market-services proposition. Its current disclosure excludes U.S. users.",
    references: ["I1"],
  },
] as const;

export const comparisonRows = [
  {
    title: "Scope to compare",
    cells: [
      {
        text: "The selected Launch, Standard, or Advanced package and external services.",
        references: ["D1", "D2"],
      },
      {
        text: "The proposed property workflow, modules, and retained providers.",
        references: ["N1"],
      },
      {
        text: "The named platform services, contracting entities, and eligible participants. U.S. users are excluded under the current disclosure.",
        references: ["I1"],
      },
    ],
  },
  {
    title: "Starting proposition",
    cells: [
      {
        text: "Investor administration and branding, with capabilities varying by package.",
        references: ["D1", "D2"],
      },
      {
        text: "Ownership snapshots, distributions, and controlled investor transfers.",
        references: ["N1"],
      },
      {
        text: "Issuance, lifecycle management, and market access under the applicable arrangement.",
        references: ["I1"],
      },
    ],
  },
  {
    title: "Decisive question",
    cells: [
      {
        text: "Does the selected tier cover the workflow without unplanned upgrades?",
        references: [],
      },
      {
        text: "Does the proposed workflow reconcile property cash and investor records?",
        references: [],
      },
      {
        text: "Does the arrangement fit the product, investor locations, and service requirements?",
        references: [],
      },
    ],
  },
] as const;

export const requirements = [
  [
    "Subscriptions",
    "Who verifies investors, confirms payments, and reconciles allocations.",
  ],
  [
    "Distributions",
    "Who approves distributable cash and applies the vehicle's entitlement rules.",
  ],
  [
    "Transfers",
    "Who checks eligibility and consent, and when ownership actually changes.",
  ],
  [
    "Reporting",
    "Who provides investor statements, corrects errors, and answers questions.",
  ],
] as const;

export const acceptanceTests = [
  [
    "Subscription",
    "Eligibility decision, confirmed funds, issued interest, and reconciled records.",
  ],
  [
    "Distribution",
    "Approved cash inputs, correct entitlements, payment status, and matching investor reports.",
  ],
  [
    "Transfer near the record date",
    "Seller and buyer receive the amounts required by the approved terms.",
  ],
  [
    "Failed payment",
    "The obligation stays visible and is resolved without a duplicate payment.",
  ],
  [
    "Unmatched sale request",
    "The investor sees the actual request status rather than a promised exit.",
  ],
] as const;

export const faqs = [
  {
    question: "Does a tokenization platform create liquidity?",
    answer:
      "No platform feature alone establishes a buyer, sale price, or redemption date. Assess transfer capability, market admission, participant demand, and execution separately.",
    references: [],
  },
  {
    question: "Does InvestaX's Singapore status apply to every offering?",
    answer:
      "The MAS directory lists IC SG Pte. Ltd. as a Capital Markets Services Licensee and Recognised Market Operator. That establishes listed entity status, not approval of a particular offering or unrestricted investor access. Confirm the actual scope.",
    references: ["R1"],
  },
  {
    question: "Does every DigiShares package include the same customization?",
    answer:
      "No. Compare the selected tier. Standard describes a branded issuer platform, while Advanced describes deeper customization and API access. Check external-provider conditions and implementation scope.",
    references: ["D1", "D2"],
  },
  {
    question: "Can the platform replace property accounting?",
    answer:
      "Do not assume so. The comparison starts with approved property cash and follows it into investor operations. Identify who produces, approves, and corrects the financial inputs.",
    references: [],
  },
] as const;

export const researchPrompt = `Compare DigiShares, Nomyx, and InvestaX for a property vehicle with recurring distributions. Use current primary sources.

Check investor and issuer eligibility first, including InvestaX's disclosed U.S. user restriction. Then compare subscriptions, ownership records, a transfer near the distribution record date, failed payments, and a sale request without a buyer.

Separate software from contracted services. Give each feasible option a reason to win and identify what remains unverified.`;

export const sources = [
  [
    "D1",
    "DigiShares Standard, package description and third-party conditions.",
  ],
  ["D2", "DigiShares Advanced, customization and API proposition."],
  ["N1", "Nomyx real-estate tokenization, vendor workflow claims."],
  ["I1", "InvestaX platform, service proposition and user-access disclosure."],
  ["R1", "MAS directory for IC SG Pte. Ltd., listed entity status."],
] as const;
