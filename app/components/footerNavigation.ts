import pageContent from "@/app/pageContent.json";

type FooterLink = { name: string; href?: string };
type FooterGroup = { title: string; links: FooterLink[] };

const groups: FooterGroup[] = [
  {
    title: "Situations & Use Cases",
    links: [
      {
        name: "Collateral Readiness",
        href: "/capital-velocity-pillar#collateral",
      },
      {
        name: "Fragmented Tokenization Infrastructure",
        href: "/tokenized-asset-lifecycle#gap",
      },
      {
        name: "Restructuring Without Reissuance",
        href: "/capital-velocity-pillar#recomposition",
      },
      {
        name: "White-Label Tokenization Infrastructure",
        href: "/tokenized-asset-lifecycle#white-label",
      },
      {
        name: "Investor Experience Ownership",
        href: "/capital-velocity-pillar#own-rent",
      },
      { name: "Lifecycle Automation", href: "/tokenized-asset-lifecycle" },
      { name: "Market Connectivity", href: "/nomyx-gateway" },
      {
        name: "Institutional Tokenization Evaluation",
        href: "/three-model-comparison",
      },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Private Credit", href: "/private-credit-syndication" },
      { name: "Equipment Finance" },
      { name: "Trade Finance" },
      {
        name: "Alternative Asset Managers",
        href: "/capital-velocity-pillar#fit",
      },
      { name: "Fund Administrators", href: "/#platform" },
      { name: "Institutional Issuers", href: "/tokenized-asset-lifecycle" },
      { name: "Tokenized Asset Lifecycle", href: "/tokenized-asset-lifecycle" },
    ],
  },
  {
    title: "Platform",
    links: [
      { name: "Nomyx Engine", href: "/nomyx-engine" },
      { name: "Nomyx ID", href: "/nomyx-id" },
      { name: "Nomyx Gateway", href: "/nomyx-gateway" },
      {
        name: "Lifecycle Management",
        href: "/tokenized-asset-lifecycle#lifecycle-gates",
      },
      { name: "Identity and Compliance", href: "/nomyx-id" },
      {
        name: "White-Label Investor Portal",
        href: "/tokenized-asset-lifecycle#white-label",
      },
      { name: "APIs and Integrations", href: "/developers" },
      { name: "Market Connectivity", href: "/nomyx-gateway" },
    ],
  },
  {
    title: "Compare",
    links: [
      { name: "Nomyx vs. Securitize", href: "/nomyx-vs-securitize" },
      {
        name: "Tokenization Platform Evaluation Scorecard",
        href: "/three-model-comparison#matrix",
      },
      {
        name: "Build vs. Buy Tokenization Infrastructure",
        href: "/settlemint-bitbond",
      },
      {
        name: "Tokenization Total Cost of Ownership",
        href: "/digishares-launch-entry#economics",
      },
      {
        name: "Five Stages of Capital Velocity Maturity",
        href: "/nomyx-vs-securitize#stages",
      },
      { name: "Testable Credentials", href: "/nomyx-vs-securitize#proof" },
      { name: "Future-Proof Infrastructure", href: "/the-diamond-standard" },
    ],
  },
  {
    title: "Diligence",
    links: [
      {
        name: "What remains manual after tokenization?",
        href: "/tokenized-asset-lifecycle#gap",
      },
      {
        name: "What is Capital Velocity Infrastructure?",
        href: "/capital-velocity-pillar#executive",
      },
      {
        name: "Can tokenized private credit become collateral-ready?",
        href: "/capital-velocity-pillar#collateral",
      },
      {
        name: "What should an investment committee require?",
        href: "/three-model-comparison#commitments",
      },
      {
        name: "How do you evaluate tokenization infrastructure?",
        href: "/three-model-comparison#diligence",
      },
      {
        name: "What creates vendor lock-in?",
        href: "/capital-velocity-pillar#own-rent",
      },
      {
        name: "What happens after issuance?",
        href: "/tokenized-asset-lifecycle#lifecycle-gates",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Stage-Finder", href: "/tokenized-asset-lifecycle#stagefinder" },
      {
        name: "Cost-of-Staying Worksheet",
        href: "/tokenized-asset-lifecycle#worksheet",
      },
      {
        name: "Capital Velocity Assessment",
        href: "/capital-velocity-pillar#assessment",
      },
      { name: "Technical Paper", href: "/technical-documentation" },
      { name: "Case Studies", href: "/technical-documentation" },
      {
        name: "Institutional Due-Diligence",
        href: "/three-model-comparison#diligence",
      },
      {
        name: "Security & Audit Documentation",
        href: "/tokenized-asset-lifecycle#security",
      },
      { name: "Implementation Guide", href: "/technical-documentation" },
      { name: "Customer Success" },
      { name: "Blog", href: "/blog" },
      { name: "News", href: "/news" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Nomyx", href: "/" },
      { name: "Leadership" },
      { name: "Partners", href: "/#partners" },
      { name: "Investors" },
      { name: "Press and Media", href: "/news" },
      { name: "Press Releases", href: "/news" },
      { name: "Visual Library" },
      { name: "Careers" },
      {
        name: "Contact",
        href: "https://bookings.cloud.microsoft/book/NomyxDiscoveryCall@nomyx.io/?ismsaljsauthenabled=true",
      },
    ],
  },
  {
    title: "Documentation",
    links: [
      { name: "Products and Services", href: "/technical-documentation" },
      { name: "Technical Documentation", href: "/technical-documentation" },
      { name: "Category Briefs", href: "/technical-documentation" },
      { name: "Integration Documentation", href: "/developers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Notice", href: "/legal-documents/privacy-notice" },
      { name: "Terms of Use", href: "/legal-documents/terms-of-use" },
      { name: "Disclosures" },
      { name: "Accessibility" },
    ],
  },
];

// Preserve existing footer destinations while adding the expanded navigation.
export const footerNavigation = groups.map((group) => ({
  ...group,
  links: [
    ...group.links,
    ...(
      pageContent.footer.columns.find((column) => column.title === group.title)
        ?.links ?? []
    ).filter(
      (link) => !group.links.some((existing) => existing.name === link.name),
    ),
  ],
}));
