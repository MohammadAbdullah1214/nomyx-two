export const vendors = ["Taurus", "Nomyx", "Fireblocks"] as const;

export const quickAnswers = [
  {
    name: "Taurus",
    logo: "/comparisons/taurus.webp",
    description:
      "Integrated tokenization and custody technology are central to your requirements.",
    references: ["T1"],
  },
  {
    name: "Nomyx",
    logo: "/nomyx-logo.png",
    description:
      "Your priority is coordinating investor and asset operations around the providers you intend to retain.",
    references: ["N1"],
  },
  {
    name: "Fireblocks",
    logo: "/comparisons/fireblocks.svg",
    description:
      "Token operations, signing controls, and connecting application components are central.",
    references: ["F1"],
  },
] as const;

export const comparisonRows = [
  {
    title: "What is the starting proposition?",
    cells: [
      {
        text: "Taurus-CAPITAL tokenization, integrated with Taurus-PROTECT technology.",
        references: ["T1"],
      },
      {
        text: "Nomyx Engine asset operations, with the identity, connectivity, and external services specified in your proposal.",
        references: ["N1"],
      },
      {
        text: "Tokenization and wallet infrastructure with policy controls and multiple contract deployment routes.",
        references: ["F1"],
      },
    ],
  },
  {
    title: "Why investigate it?",
    cells: [
      {
        text: "You want to assess issuance and custody technology together.",
        references: [],
      },
      {
        text: "You want a fund workflow that accommodates existing operating relationships.",
        references: [],
      },
      {
        text: "You want to assess token operations within an existing or proposed digital-asset stack.",
        references: [],
      },
    ],
  },
  {
    title: "What must the proposal settle?",
    cells: [
      {
        text: "Deployment model, investor application, and contracted service responsibilities.",
        references: [],
      },
      {
        text: "Supported integrations, retained-provider work, and ownership of exceptions.",
        references: [],
      },
      {
        text: "Which functions come from Fireblocks, partners, and your own applications.",
        references: [],
      },
    ],
  },
] as const;

export const requirements = [
  [
    "Investor journey",
    "The interface investors will use, eligibility process, and support owner.",
  ],
  [
    "Approval and signing",
    "Who can authorize each action, who can sign, and how unauthorized requests are blocked.",
  ],
  [
    "Existing systems",
    "The exact administrator, bank, custody, and reporting connections included in delivery.",
  ],
  [
    "Asset changes",
    "A supported procedure for an approved change, including permissions and record continuity.",
  ],
  [
    "Recovery and exit",
    "An interrupted-workflow procedure, usable exports, transition responsibilities, and costs.",
  ],
] as const;

export const acceptanceTests = [
  [
    "Complete a subscription.",
    "Follow the investor request through eligibility, payment confirmation, approval, issuance, and administrator reconciliation.",
  ],
  [
    "Change an approved term.",
    "Apply a sample distribution-rule change and show the approval, effective date, calculation, and resulting records.",
  ],
  [
    "Interrupt a handoff.",
    "Suppress a downstream confirmation after issuance succeeds. Show how the operator resolves the mismatch without issuing twice.",
  ],
] as const;

export const reviewSteps = [
  "Identify your infrastructure requirements and the work that remains outside the platform.",
  "Discuss which configurations deserve further evaluation and what evidence would resolve the decision.",
  "Recommend a suitable platform when the information supports it, including alternatives to Nomyx.",
] as const;

export const faqs = [
  {
    question: "Can these providers be used together?",
    answer:
      "Potentially, but do not assume a supported integration exists. Require the proposed architecture, contracting scope, delivery owner, and support arrangement before evaluating a combined stack.",
  },
  {
    question: "Does an integrated product eliminate application work?",
    answer:
      "It depends on the contracted configuration. Verify the investor interface, external records, and exception handling as well as the token functions.",
  },
  {
    question: "Which option is most secure?",
    answer:
      "This review does not rank security. Compare assurance for the deployed versions, signing controls, access policies, and recovery procedures against your institution's requirements.",
  },
  {
    question: "Will the review always recommend Nomyx?",
    answer:
      "No. The Infrastructure Fit Review starts with your needs. A competing platform may be the stronger fit, or further evidence may be needed before selecting one.",
  },
] as const;

export const researchPrompt = `Compare Taurus-CAPITAL and PROTECT, Nomyx, and Fireblocks for an institution that must retain its administrator and banking arrangements.

Use current primary sources and name the product scope. Separate documented functions from completed integrations.

Identify the strongest case for each option, the remaining application work, and the evidence that would reverse a Nomyx recommendation.

Do not infer absent capabilities from missing documentation.`;

export const sources = [
  ["T1", "Taurus-CAPITAL, vendor product description."],
  ["F1", "Fireblocks tokenization, vendor product description."],
  ["N1", "Nomyx Engine, vendor product description."],
] as const;
