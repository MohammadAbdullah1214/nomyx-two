export const bookingUrl =
  "https://bookings.cloud.microsoft/book/NomyxDiscoveryCall@nomyx.io/?ismsaljsauthenabled=true";

export type CategoryId = "all" | "fund" | "credit" | "inst" | "re" | "first";

export type CategoryFilter = {
  readonly id: CategoryId;
  readonly label: string;
};

export type CompanyLink = {
  readonly label: string;
  readonly href: string;
};

export type CompanyCard = {
  readonly id: string;
  readonly name: string;
  readonly logo: string;
  readonly logoScale: number;
  readonly categories: readonly Exclude<CategoryId, "all">[];
  readonly blurb: string;
  readonly links: readonly CompanyLink[];
};

export type GuideIcon =
  | "layers"
  | "shield-check"
  | "dollar"
  | "plug"
  | "target"
  | "search";

export type GuideCard = {
  readonly title: string;
  readonly description: string;
  readonly actionLabel: string;
  readonly href: string;
  readonly icon: GuideIcon;
};

export const categoryFilters = [
  { id: "all", label: "All" },
  { id: "fund", label: "Fund tokenization" },
  { id: "credit", label: "Private credit" },
  { id: "inst", label: "Institutional infrastructure" },
  { id: "re", label: "Real estate" },
  { id: "first", label: "First offering" },
] as const satisfies readonly CategoryFilter[];

export const categoryLabels: Record<Exclude<CategoryId, "all">, string> = {
  fund: "Fund tokenization",
  credit: "Private credit",
  inst: "Institutional infrastructure",
  re: "Real estate",
  first: "First offering",
};

export const companies = [
  {
    id: "bitbond",
    name: "Bitbond",
    logo: "/comparisons/bitbond.webp",
    logoScale: 1.0,
    categories: ["credit", "first"],
    blurb:
      "Token Tool and Offering Manager, with token deployment and the investor-offering workflow identified separately.",
    links: [
      { label: "SettleMint vs Nomyx vs Bitbond", href: "/settlemint-bitbond" },
      {
        label: "DigiShares Launch vs Nomyx vs Bitbond",
        href: "/digishares-launch-entry",
      },
    ],
  },
  {
    id: "brickken",
    name: "Brickken",
    logo: "/comparisons/brickken.webp",
    logoScale: 1.3,
    categories: ["fund", "credit"],
    blurb:
      "Issuer Studio, White Label Infrastructure, API access, and investor and lifecycle management.",
    links: [{ label: "Nomyx vs Brickken", href: "/nomyx-vs-brickken" }],
  },
  {
    id: "centrifuge",
    name: "Centrifuge",
    logo: "/comparisons/centrifuge.svg",
    logoScale: 1.75,
    categories: ["credit"],
    blurb:
      "Whitelabel infrastructure for issuing and operating tokenized asset products.",
    links: [
      {
        label: "Centrifuge vs Nomyx vs Clearpool",
        href: "/centrifuge-clearpool",
      },
    ],
  },
  {
    id: "clearpool",
    name: "Clearpool",
    logo: "/comparisons/clearpool.svg",
    logoScale: 1.05,
    categories: ["credit"],
    blurb:
      "Lending products, including permissioned institutional borrowing through Prime and a separate Credit Vaults model.",
    links: [
      {
        label: "Centrifuge vs Nomyx vs Clearpool",
        href: "/centrifuge-clearpool",
      },
    ],
  },
  {
    id: "digishares",
    name: "DigiShares",
    logo: "/comparisons/digishares.webp",
    logoScale: 1.1,
    categories: ["re", "first"],
    blurb:
      "Issuer software in defined packages, with capabilities varying by tier, including a Launch package.",
    links: [
      {
        label: "DigiShares vs Nomyx vs InvestaX",
        href: "/digishares-investax",
      },
      {
        label: "DigiShares Launch vs Nomyx vs Bitbond",
        href: "/digishares-launch-entry",
      },
    ],
  },
  {
    id: "fireblocks",
    name: "Fireblocks",
    logo: "/comparisons/fireblocks.svg",
    logoScale: 1.25,
    categories: ["inst"],
    blurb:
      "Token operations, signing controls, and connecting application components.",
    links: [
      { label: "Taurus vs Nomyx vs Fireblocks", href: "/taurus-fireblocks" },
    ],
  },
  {
    id: "investax",
    name: "InvestaX",
    logo: "/comparisons/investax.svg",
    logoScale: 1.0,
    categories: ["re"],
    blurb:
      "Tokenization technology with a Singapore-based market-services proposition.",
    links: [
      {
        label: "DigiShares vs Nomyx vs InvestaX",
        href: "/digishares-investax",
      },
    ],
  },
  {
    id: "securitize",
    name: "Securitize",
    logo: "/comparisons/securitize.svg",
    logoScale: 0.9,
    categories: ["fund"],
    blurb:
      "Technology alongside fund administration and other specifically contracted services.",
    links: [
      { label: "Nomyx vs Securitize", href: "/nomyx-vs-securitize" },
      { label: "Securitize vs Nomyx vs Tokeny", href: "/securitize-tokeny" },
    ],
  },
  {
    id: "settlemint",
    name: "SettleMint",
    logo: "/comparisons/settlemint.svg",
    logoScale: 1.0,
    categories: ["credit"],
    blurb:
      "DALP combines digital-asset lifecycle operations and governance in a shared environment.",
    links: [
      { label: "SettleMint vs Nomyx vs Bitbond", href: "/settlemint-bitbond" },
    ],
  },
  {
    id: "taurus",
    name: "Taurus",
    logo: "/comparisons/taurus.webp",
    logoScale: 0.85,
    categories: ["inst"],
    blurb: "Integrated tokenization and custody technology.",
    links: [
      { label: "Taurus vs Nomyx vs Fireblocks", href: "/taurus-fireblocks" },
    ],
  },
  {
    id: "tokeny",
    name: "Tokeny",
    logo: "/comparisons/tokeny.webp",
    logoScale: 1.2,
    categories: ["fund"],
    blurb:
      "Branded applications or tokenization APIs, with fund services scoped separately where needed.",
    links: [
      { label: "Securitize vs Nomyx vs Tokeny", href: "/securitize-tokeny" },
    ],
  },
] as const satisfies readonly CompanyCard[];

export const decisionGuides = [
  {
    title: "Three operating models",
    description:
      "Outsource to one vendor, unbundle into modules, or sell debt into on-chain capital. Choose the model before the vendor.",
    actionLabel: "Read the buyer guide",
    href: "/three-model-comparison",
    icon: "layers",
  },
  {
    title: "Evaluation scorecard",
    description:
      "Twelve dimensions, four clusters, and one evidence scale for scoring any provider on your shortlist.",
    actionLabel: "Open the scorecard",
    href: "/three-model-comparison#matrix",
    icon: "shield-check",
  },
  {
    title: "Total cost of ownership",
    description:
      "Compare the cash required and the work left with your team, not only the platform fee.",
    actionLabel: "See the cost model",
    href: "/digishares-launch-entry#economics",
    icon: "dollar",
  },
  {
    title: "Build vs. buy",
    description:
      "Weigh developer platforms and token tools against infrastructure that runs the operating process for you.",
    actionLabel: "Compare the options",
    href: "/settlemint-bitbond",
    icon: "plug",
  },
  {
    title: "Five stages of capital velocity",
    description:
      "Find the stage your assets operate at today and what the next stage requires.",
    actionLabel: "Find your stage",
    href: "/nomyx-vs-securitize#stages",
    icon: "target",
  },
  {
    title: "Testable credentials",
    description:
      "Claims you can check yourself, with the evidence and the questions to ask in a demo.",
    actionLabel: "Test the claims",
    href: "/nomyx-vs-securitize#proof",
    icon: "search",
  },
] as const satisfies readonly GuideCard[];

export const methodologyRows = [
  [
    "Public sources, cited",
    "Each claim points to a vendor's own documentation or filing, with the date it was reviewed. Confirm scope and pricing for your own implementation.",
  ],
  [
    "Tests, not checkmarks",
    "Each comparison ends with acceptance tests both providers can run with the same fund terms, network, and integrations.",
  ],
  [
    "A fair reason to choose either",
    "Each page says when another provider may fit better. An Infrastructure Fit Review can recommend one.",
  ],
] as const;

