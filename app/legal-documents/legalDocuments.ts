export type LegalDocument = {
  slug: string;
  title: string;
  href: string;
  lastUpdated: string;
  description: string;
};

export const legalDocuments = [
  {
    slug: "msa",
    title: "Main Service Agreement",
    href: "/legal-documents/msa",
    lastUpdated: "July 1, 2025",
    description: "Primary service terms for Nomyx customers and authorized users.",
  },
  {
    slug: "cookie-notice",
    title: "Cookie Notice",
    href: "/legal-documents/cookie-notice",
    lastUpdated: "July 1, 2025",
    description: "Information about cookies and similar technologies used by Nomyx.",
  },
  {
    slug: "dpa",
    title: "Data Processing Agreement",
    href: "/legal-documents/dpa",
    lastUpdated: "July 1, 2025",
    description: "Data processing terms for customer and platform data.",
  },
  {
    slug: "securities-addendum",
    title: "Securities Tokenization Service Addendum",
    href: "/legal-documents/securities-addendum",
    lastUpdated: "July 1, 2025",
    description: "Additional terms for securities tokenization services.",
  },
  {
    slug: "privacy-notice",
    title: "Privacy Notice",
    href: "/legal-documents/privacy-notice",
    lastUpdated: "July 1, 2025",
    description: "How Nomyx collects, uses, and protects personal information.",
  },
  {
    slug: "blockchain-terms",
    title: "Blockchain Service-Specific Terms",
    href: "/legal-documents/blockchain-terms",
    lastUpdated: "July 1, 2025",
    description: "Terms that apply to blockchain-specific Nomyx services.",
  },
  {
    slug: "terms-of-use",
    title: "Website Terms of Use",
    href: "/legal-documents/terms-of-use",
    lastUpdated: "July 1, 2025",
    description: "Terms governing access to and use of the Nomyx website.",
  },
  {
    slug: "enterprise-protection",
    title: "Enterprise Services",
    href: "/legal-documents/enterprise-services",
    lastUpdated: "July 1, 2025",
    description: "Terms governing access to and use of the Nomyx website.",
  },
  {
    slug: "innovation-services",
    title: "Innovation Services",
    href: "/legal-documents/innovation-services",
    lastUpdated: "November 1, 2024",
    description: "Security measures for Nomyx innovation services.",
  },
  {
    slug: "in-product-cookie-policy",
    title: "In-Product Cookie Policy",
    href: "/legal-documents/in-product-cookie-policy",
    lastUpdated: "July 1, 2025",
    description: "Information about how and when Nomyx uses Cookies within the Nomyx Services.",
  },
  {
    slug: "professional-services",
    title: "Professional Services Terms and Conditions",
    href: "/legal-documents/professional-services",
    lastUpdated: "July 1, 2025",
    description: "Terms and conditions for Nomyx professional services.",
  },
  {
    slug: "trademark-usage-guidelines",
    title: "Trademark Usage Guidelines",
    href: "/legal-documents/trademark-usage-guidelines",
    lastUpdated: "July 1, 2025",
    description: "Guidelines for using Nomyx trademarks and brand assets.",
  },
  {
    slug: "user-content-and-conduct-policy",
    title: "User Content and Conduct Policy",
    href: "/legal-documents/user-content-and-conduct-policy",
    lastUpdated: "July 1, 2025",
    description: "Policy regarding acceptable user content and conduct on Nomyx.",
  },
  {
    slug: "promotional-credit-policy",
    title: "Promotional Credits Policy",
    href: "/legal-documents/promotional-credit-policy",
    lastUpdated: "July 1, 2025",
    description: "Policy regarding promotional credits for Nomyx services.",
  },
] satisfies LegalDocument[];

export function getLegalDocument(slug: string) {
  return legalDocuments.find((document) => document.slug === slug);
}
