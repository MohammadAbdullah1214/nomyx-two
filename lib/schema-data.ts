export const organizationAndWebsiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.nomyx.io#organization",
      "name": "Nomyx",
      "legalName": "Nomyx Inc.",
      "url": "https://www.nomyx.io",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nomyx.io/nomyx-logo.png",
      },
      "description":
        "Tokenization infrastructure for institutional capital with upgradeable smart contracts and built-in compliance.",
      "slogan": "The infrastructure layer for the future of capital.",
      "founder": {
        "@type": "Person",
        "@id": "https://www.nomyx.io/blog/author/ubair-javaid#person",
        "name": "Ubair Javaid",
      },
      "knowsAbout": [
        "Real-world asset tokenization",
        "Institutional tokenization infrastructure",
        "Smart contract compliance",
        "Onchain identity and KYC/AML",
        "Private credit syndication",
        "SPV and deal syndication",
        "Evergreen and open-ended fund tokenization",
        "Real estate tokenization",
        "EIP-2535 Diamond Standard",
        "Tokenized private markets",
      ],
      "award": [
        "Selected for Mastercard Start Path Blockchain and Digital Assets Program (cohort announced September 15, 2025)",
        "Selected for the XDC Network and Plug and Play RWA Accelerator (from 100+ applicants, 11 selected)",
        "Named one of six fintech startups recognized at Money20/20 Europe's Startup Media Session",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.nomyx.io#website",
      "url": "https://www.nomyx.io",
      "name": "Nomyx - Agile Infrastructure for Institutional Capital",
      "description":
        "Tokenization infrastructure for institutional capital with upgradeable smart contracts and built-in compliance.",
      "publisher": {
        "@id": "https://www.nomyx.io#organization",
      },
      "inLanguage": "en-US",
    },
  ],
};

export const ubairJavaidPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.nomyx.io/blog/author/ubair-javaid#person",
  "name": "Ubair Javaid",
  "url": "https://www.nomyx.io/blog/author/ubair-javaid",
  "jobTitle": "Co-Founder and CEO",
  "worksFor": {
    "@id": "https://www.nomyx.io#organization",
  },
  "description":
    "Ubair Javaid is a digital asset, DLT, and tokenization expert with a track record of building infrastructure that solves real enterprise problems. As Co-Founder and CEO of Nomyx, he leads the team building institutional grade tokenization infrastructure for asset managers, covering compliant token issuance, investor identity, lifecycle management, and secondary trading in a single white-labeled stack. His background spans blockchain architecture, compliance systems, and data-driven platforms across regulated industries. He previously led developmental efforts at Panasonic Avionics, building solutions that integrated data analytics with Salesforce to optimize complex SLA-driven billing environments, and has held CTO roles at Radair and Next Block LLC. Ubair has spoken at AIF Global Annual Investor Summit, Powered by Jones Day, Digital Assets Week, Permissionless, RWA Day, and the Tokenisation Summit, and most recently presented at Consensus Miami 2026 on the mainstream adoption of tokenized real world assets.",
  "knowsAbout": [
    "Digital assets",
    "Distributed ledger technology (DLT)",
    "Tokenization infrastructure",
    "Blockchain architecture",
    "Compliance systems",
  ],
};

export const serviceSchemas: Record<string, object> = {
  "nomyx-engine": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nomyx.io/nomyx-engine#service",
    serviceType: "Tokenization Engine",
    name: "Tokenization Engine for Asset Managers",
    url: "https://www.nomyx.io/nomyx-engine",
    description:
      "Nomyx Engine is the ultimate operating system for digital assets. Issue, manage, and distribute compliant tokenized assets with infinite upgradability.",
    provider: {
      "@id": "https://www.nomyx.io#organization",
    },
    areaServed: "Global",
    audience: {
      "@type": "Audience",
      audienceType: "Institutional asset managers and fund administrators",
    },
  },
  "nomyx-id": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nomyx.io/nomyx-id#service",
    serviceType: "Onchain Identity & Compliance Infrastructure",
    name: "Onchain Identity & Compliance Infrastructure",
    url: "https://www.nomyx.io/nomyx-id",
    description:
      "Nomyx ID provides advanced on-chain identity and compliance infrastructure. Secure tokenized assets with automated KYC/AML rules and biometric wallet recovery.",
    provider: {
      "@id": "https://www.nomyx.io#organization",
    },
    areaServed: "Global",
    audience: {
      "@type": "Audience",
      audienceType: "Institutional asset managers and fund administrators",
    },
  },
  "nomyx-gateway": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nomyx.io/nomyx-gateway#service",
    serviceType: "Asset Distribution & Liquidity Infrastructure",
    name: "Asset Distribution & Liquidity Infrastructure",
    url: "https://www.nomyx.io/nomyx-gateway",
    description:
      "Deploy a branded, compliant marketplace with Nomyx Gateway. Manage the entire lifecycle of your digital assets from primary issuance to secondary trading.",
    provider: {
      "@id": "https://www.nomyx.io#organization",
    },
    areaServed: "Global",
    audience: {
      "@type": "Audience",
      audienceType: "Institutional asset managers and fund administrators",
    },
  },
  "evergreen-open-ended-funds": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nomyx.io/evergreen-open-ended-funds#service",
    serviceType: "Evergreen & Open-Ended Fund Tokenization",
    name: "Evergreen & Open-Ended Fund Tokenization",
    url: "https://www.nomyx.io/evergreen-open-ended-funds",
    description:
      "Automate your evergreen and open-ended funds with Nomyx. Replace quarterly drag with always-on efficiency, continuous subscriptions, and dynamic NAV updates.",
    provider: {
      "@id": "https://www.nomyx.io#organization",
    },
    areaServed: "Global",
    audience: {
      "@type": "Audience",
      audienceType: "Institutional asset managers and fund administrators",
    },
  },
  "spv-deal-syndication": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nomyx.io/spv-deal-syndication#service",
    serviceType: "SPV & Deal Syndication",
    name: "SPV & Deal Syndication",
    url: "https://www.nomyx.io/spv-deal-syndication",
    description:
      "Spin up compliant SPVs in hours with Nomyx. Automate deal syndication, capital formation, cap table management, and carry distribution for single-asset vehicles.",
    provider: {
      "@id": "https://www.nomyx.io#organization",
    },
    areaServed: "Global",
    audience: {
      "@type": "Audience",
      audienceType: "Institutional asset managers and fund administrators",
    },
  },
  "private-credit-syndication": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nomyx.io/private-credit-syndication#service",
    serviceType: "Private Credit Syndication",
    name: "Tokenized Private Credit Syndication",
    url: "https://www.nomyx.io/private-credit-syndication",
    description:
      "Syndicate private credit loans efficiently. Aggregate liquidity on-chain, deploy fiat to borrowers, and automate yield distribution to your LP capital stack.",
    provider: {
      "@id": "https://www.nomyx.io#organization",
    },
    areaServed: "Global",
    audience: {
      "@type": "Audience",
      audienceType: "Institutional asset managers and fund administrators",
    },
  },
  "real-estate-tokenization": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nomyx.io/real-estate-tokenization#service",
    serviceType: "Real Estate Tokenization",
    name: "Real Estate Tokenization",
    url: "https://www.nomyx.io/real-estate-tokenization",
    description:
      "Unlock real estate liquidity through tokenization. Lower minimum ticket sizes, access global capital, and easily manage 500+ investors on a single cap table.",
    provider: {
      "@id": "https://www.nomyx.io#organization",
    },
    areaServed: "Global",
    audience: {
      "@type": "Audience",
      audienceType: "Institutional asset managers and fund administrators",
    },
  },
};

export const blogSchemas: Record<string, object> = {
  "white-label-tokenization-platform": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id":
          "https://www.nomyx.io/blog/white-label-tokenization-platform#article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://www.nomyx.io/blog/white-label-tokenization-platform",
        },
        headline: "What Is a White-Label Tokenization Platform | Nomyx",
        description:
          "Learn how a white-label tokenization platform helps asset managers launch branded funds with built-in compliance, investor onboarding and secondary trading.",
        url: "https://www.nomyx.io/blog/white-label-tokenization-platform",
        author: {
          "@id": "https://www.nomyx.io/blog/author/ubair-javaid#person",
        },
        publisher: {
          "@id": "https://www.nomyx.io#organization",
        },
        inLanguage: "en-US",
        isPartOf: {
          "@type": "Blog",
          "@id": "https://www.nomyx.io/blog#blog",
          name: "Nomyx Blog",
        },
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://www.nomyx.io/blog/white-label-tokenization-platform#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is a white-label tokenization platform for asset managers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A white-label tokenization platform for asset managers is infrastructure that powers compliant token issuance, investor onboarding, lifecycle management, and secondary trading under the asset manager's own brand, with all blockchain and compliance infrastructure running in the background.",
            },
          },
          {
            "@type": "Question",
            name: "How does investor onboarding work in a white-label tokenization platform?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Investor onboarding works by connecting KYC verification, AML screening, accreditation checks, and jurisdiction eligibility into a single automated flow under the asset manager's brand without manual intervention.",
            },
          },
          {
            "@type": "Question",
            name: "What is a branded secondary marketplace in tokenized fund infrastructure?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A branded secondary marketplace is a trading environment under the asset manager's brand where LPs can trade, transfer, or collateralize positions with compliance enforced automatically at every transaction.",
            },
          },
          {
            "@type": "Question",
            name: "Does white-label tokenization require blockchain expertise?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "White-label tokenization on Nomyx requires zero blockchain expertise. The Nomyx Engine handles token issuance, lifecycle workflows, and fund accounting integration, while the asset manager manages their fund through a standard fund operations interface.",
            },
          },
          {
            "@type": "Question",
            name: "How does compliance work behind the scenes in a white-label tokenization platform?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Compliance works by enforcing KYC, AML, accreditation, jurisdiction eligibility, transfer restrictions, and issuer rules at the token level automatically, so investors never encounter a compliance checkpoint and asset managers never run manual compliance reviews.",
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to deploy a white-label tokenization platform?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "On correctly built infrastructure like Nomyx, deployment takes under two weeks. A longer timeline means compliance and integration are being rebuilt from scratch for each deployment, which is a custom development project rather than a product.",
            },
          },
        ],
      },
    ],
  },
  "why-tokenization-deployments-fail": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id":
          "https://www.nomyx.io/blog/why-tokenization-deployments-fail#article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://www.nomyx.io/blog/why-tokenization-deployments-fail",
        },
        headline: "Why Tokenization Deployments Fail and How to Avoid It",
        description:
          "Learn why tokenization deployments fail despite functional tokens. This guide explains common pitfalls and defines effective integration-first infrastructure.",
        url: "https://www.nomyx.io/blog/why-tokenization-deployments-fail",
        author: {
          "@id": "https://www.nomyx.io/blog/author/ubair-javaid#person",
        },
        publisher: {
          "@id": "https://www.nomyx.io#organization",
        },
        inLanguage: "en-US",
        isPartOf: {
          "@type": "Blog",
          "@id": "https://www.nomyx.io/blog#blog",
          name: "Nomyx Blog",
        },
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://www.nomyx.io/blog/why-tokenization-deployments-fail#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Why do tokenization deployments fail?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tokenization deployments fail when the token cannot connect to the fund's existing operational infrastructure after issuance. Most vendors leave the fund to solve that integration problem after signing.",
            },
          },
          {
            "@type": "Question",
            name: "What is the tokenization integration graveyard?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The tokenization integration graveyard refers to failed deployments where funds discovered the integration was their responsibility after signing, and abandoned the project after consuming significant ops, legal, and budget resources.",
            },
          },
          {
            "@type": "Question",
            name: "What should a fund manager ask a tokenization vendor before signing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ask whether the platform connects natively to your fund accounting system, integrates with your transfer agent, shows real-time on-chain positions, and enforces compliance automatically at the token level. Ask for a live reference who can verify all of it.",
            },
          },
          {
            "@type": "Question",
            name: "What does integration-first tokenization infrastructure mean?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Integration first means the tokenization layer was built to connect with fund accounting, transfer agents, investor onboarding, and compliance verification in a single workflow, so funds deploy on infrastructure where every layer already works together.",
            },
          },
          {
            "@type": "Question",
            name: "How do you verify a tokenization vendor's integration claims?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ask for a live deployment reference and speak directly with the fund administrator. Ask how fund accounting integration works in practice, whether the transfer agent required a custom connection, and what reconciliation looks like at month-end.",
            },
          },
        ],
      },
    ],
  },
  "automated-tokenized-fund-administration": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id":
          "https://www.nomyx.io/blog/automated-tokenized-fund-administration#article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id":
            "https://www.nomyx.io/blog/automated-tokenized-fund-administration",
        },
        headline:
          "Automated Tokenized Fund Administration Explained | Nomyx",
        description:
          "Discover how automated tokenized fund administration helps private funds automate subscriptions, capital calls, reporting, compliance, and investor operations onchain.",
        url: "https://www.nomyx.io/blog/automated-tokenized-fund-administration",
        author: {
          "@id": "https://www.nomyx.io/blog/author/ubair-javaid#person",
        },
        publisher: {
          "@id": "https://www.nomyx.io#organization",
        },
        inLanguage: "en-US",
        isPartOf: {
          "@type": "Blog",
          "@id": "https://www.nomyx.io/blog#blog",
          name: "Nomyx Blog",
        },
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://www.nomyx.io/blog/automated-tokenized-fund-administration#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How does automated fund administration work in a tokenized fund?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Automated tokenized fund administration works by connecting subscriptions, capital calls, redemptions, distributions, cap table updates, and reporting into a single onchain workflow that executes automatically at every capital event without manual intervention.",
            },
          },
          {
            "@type": "Question",
            name: "How are capital calls automated in a tokenized fund?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Capital call automation works by triggering investor notifications, tracking responses, verifying compliance, and updating fund accounting in a single automated workflow, eliminating the manual reconciliation cycle that typically takes two weeks.",
            },
          },
          {
            "@type": "Question",
            name: "How does onchain cap table management work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Onchain cap table management works by recording every ownership change onchain in real time at every transfer, redemption, and subscription, so the cap table is always current without requiring a manual update after each capital event.",
            },
          },
          {
            "@type": "Question",
            name: "How are compliance exports generated in a tokenized fund?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Compliance exports in a tokenized fund are generated directly from the fund's immutable onchain audit trail, which records every transfer and compliance verification automatically, making them producible on demand in minutes.",
            },
          },
          {
            "@type": "Question",
            name: "How does tokenization improve NAV workflows?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tokenization improves NAV workflows by generating NAV calculation inputs directly from the onchain record of the fund's positions and capital events, making the data always current and supporting more frequent NAV calculation than traditional quarterly cycles allow.",
            },
          },
        ],
      },
    ],
  },
  "smart-contract-compliance-for-tokenized-funds": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id":
          "https://www.nomyx.io/blog/smart-contract-compliance-for-tokenized-funds#article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id":
            "https://www.nomyx.io/blog/smart-contract-compliance-for-tokenized-funds",
        },
        headline: "Smart Contract Compliance for Tokenized Funds",
        description:
          "Learn how Smart contract compliance automates KYC, AML, accreditation, jurisdiction checks, and transfer restrictions at the token level.",
        url: "https://www.nomyx.io/blog/smart-contract-compliance-for-tokenized-funds",
        author: {
          "@id": "https://www.nomyx.io/blog/author/ubair-javaid#person",
        },
        publisher: {
          "@id": "https://www.nomyx.io#organization",
        },
        inLanguage: "en-US",
        isPartOf: {
          "@type": "Blog",
          "@id": "https://www.nomyx.io/blog#blog",
          name: "Nomyx Blog",
        },
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://www.nomyx.io/blog/smart-contract-compliance-for-tokenized-funds#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How does smart contract compliance work in tokenized funds?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Smart contract compliance in tokenized funds works by embedding KYC, AML, accreditation, jurisdiction eligibility, transfer restrictions, and issuer rules directly into the token, automatically checking every transfer against those rules before it completes.",
            },
          },
          {
            "@type": "Question",
            name: "What is KYC and AML enforcement in tokenized assets?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "KYC and AML enforcement in tokenized assets works by encoding each investor's verification status into a digital identity credential connected to the token, automatically blocking any transfer where the credential is expired, revoked, or missing.",
            },
          },
          {
            "@type": "Question",
            name: "How are transfer restrictions enforced in tokenized funds?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Transfer restrictions in tokenized funds are enforced by embedding holding periods, investor caps, and issuer rules into the smart contract, blocking any violating transfer automatically and recording it in the audit trail.",
            },
          },
          {
            "@type": "Question",
            name: "What is an audit trail in tokenized fund compliance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An audit trail in tokenized fund compliance is an immutable, transaction-level record of every transfer, every blocked transaction with the rule that triggered it, and every compliance verification completed, producible on demand in under five minutes.",
            },
          },
          {
            "@type": "Question",
            name: "Why do tokenized fund smart contracts need to be upgradeable?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tokenized fund smart contracts need to be upgradeable because regulations change over the life of a fund. Static contracts require full redeployment to update compliance logic, while upgradeable contracts built on EIP-2535 allow modular updates without touching the underlying asset.",
            },
          },
        ],
      },
    ],
  },
  "tokenization-infrastructure-requirements": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id":
          "https://www.nomyx.io/blog/tokenization-infrastructure-requirements#article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id":
            "https://www.nomyx.io/blog/tokenization-infrastructure-requirements",
        },
        headline:
          "Tokenization Infrastructure Requirements for Asset Managers",
        description:
          "Learn the tokenization infrastructure asset managers need to launch compliant funds, including identity, compliance, lifecycle workflows, reporting, APIs, and secondary liquidity.",
        url: "https://www.nomyx.io/blog/tokenization-infrastructure-requirements",
        author: {
          "@id": "https://www.nomyx.io/blog/author/ubair-javaid#person",
        },
        publisher: {
          "@id": "https://www.nomyx.io#organization",
        },
        inLanguage: "en-US",
        isPartOf: {
          "@type": "Blog",
          "@id": "https://www.nomyx.io/blog#blog",
          name: "Nomyx Blog",
        },
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://www.nomyx.io/blog/tokenization-infrastructure-requirements#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What infrastructure does an asset manager need to tokenize a fund?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The infrastructure an asset manager needs includes identity verification connected to the token, compliance enforcement at the token level, issuance, lifecycle workflow automation, fund accounting integration, regulatory reporting, secondary market connectivity, and an immutable audit trail.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between token issuance and tokenization infrastructure?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The difference between token issuance and tokenization infrastructure is that issuance is the act of creating a token, while infrastructure is the full stack that makes it compliant, operable, and liquid.",
            },
          },
          {
            "@type": "Question",
            name: "How does compliance work in a tokenized fund?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Compliance in a tokenized fund works by enforcing rules at the token level through a digital identity credential connected to every investor, automatically checking every transfer against KYC status, jurisdiction eligibility, and transfer restrictions before it completes.",
            },
          },
          {
            "@type": "Question",
            name: "What is an audit trail in tokenized asset management?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An audit trail in tokenized asset management is an immutable, transaction-level record of every transfer, blocked transaction, and compliance verification, producible on demand in under five minutes.",
            },
          },
          {
            "@type": "Question",
            name: "How does secondary liquidity work for tokenized fund interests?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Secondary liquidity for tokenized fund interests works through controlled transfer rules, marketplace connectivity, and identity verification at the point of transfer. Without all three, the token does not create a secondary market.",
            },
          },
        ],
      },
    ],
  },
  "how-to-choose-a-tokenization-platform": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id":
          "https://www.nomyx.io/blog/how-to-choose-a-tokenization-platform#article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id":
            "https://www.nomyx.io/blog/how-to-choose-a-tokenization-platform",
        },
        headline:
          "How to Choose a Tokenization Platform: 4 Questions to Ask",
        description:
          "A tokenization vendor evaluation guide for asset managers comparing compliance updates, audit trails, deployment timelines, and full-stack infrastructure.",
        url: "https://www.nomyx.io/blog/how-to-choose-a-tokenization-platform",
        author: {
          "@id": "https://www.nomyx.io/blog/author/ubair-javaid#person",
        },
        publisher: {
          "@id": "https://www.nomyx.io#organization",
        },
        inLanguage: "en-US",
        isPartOf: {
          "@type": "Blog",
          "@id": "https://www.nomyx.io/blog#blog",
          name: "Nomyx Blog",
        },
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://www.nomyx.io/blog/how-to-choose-a-tokenization-platform#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What questions should I ask a tokenization vendor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ask whether compliance logic can update without redeploying the asset, whether they have a live audit reference, what the audit trail looks like in a working environment, and what is included versus sourced separately.",
            },
          },
          {
            "@type": "Question",
            name: "How long should tokenization deployment take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Two weeks on infrastructure built correctly. Nine months means it is a custom development project, not a product.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between static and upgradeable smart contracts?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Static contracts lock compliance logic at deployment. Upgradeable contracts built on EIP-2535 allow compliance updates without redeploying the asset or re-onboarding investors.",
            },
          },
          {
            "@type": "Question",
            name: "What does a compliant audit trail require?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Immutable, transaction-level, and producible on demand, with every transfer, blocked transaction, and compliance verification recorded and retrievable in minutes.",
            },
          },
        ],
      },
    ],
  },
  "institutional-tokenization-infrastructure": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id":
          "https://www.nomyx.io/blog/institutional-tokenization-infrastructure#article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id":
            "https://www.nomyx.io/blog/institutional-tokenization-infrastructure",
        },
        headline:
          "Institutional Tokenization Infrastructure: Guide for Asset Managers",
        description:
          "Learn what institutional tokenization infrastructure is, how it works, and what asset managers should look for in a compliant RWA tokenization platform.",
        url: "https://www.nomyx.io/blog/institutional-tokenization-infrastructure",
        author: {
          "@id": "https://www.nomyx.io/blog/author/ubair-javaid#person",
        },
        publisher: {
          "@id": "https://www.nomyx.io#organization",
        },
        inLanguage: "en-US",
        isPartOf: {
          "@type": "Blog",
          "@id": "https://www.nomyx.io/blog#blog",
          name: "Nomyx Blog",
        },
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://www.nomyx.io/blog/institutional-tokenization-infrastructure#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is institutional tokenization infrastructure?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The full technology and compliance stack for issuing, managing, transferring, settling, and reporting regulated assets as blockchain-based tokens, covering smart contracts, investor identity, compliance rules, fund administration, payment rails, and liquidity infrastructure.",
            },
          },
          {
            "@type": "Question",
            name: "How is institutional tokenization infrastructure different from an RWA tokenization platform?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An RWA tokenization platform handles token creation. Institutional tokenization infrastructure supports the full asset lifecycle including onboarding, compliance enforcement, subscriptions, redemptions, distributions, secondary trading, and reporting.",
            },
          },
          {
            "@type": "Question",
            name: "What is tokenization infrastructure for funds?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Infrastructure that helps asset managers issue and manage tokenized fund interests, covering subscriptions, redemptions, capital calls, distributions, investor eligibility, cap table updates, transfer restrictions, and audit-ready reporting.",
            },
          },
          {
            "@type": "Question",
            name: "Why do tokenized assets need smart contract compliance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Regulated assets can't move freely. Smart contract compliance verifies KYC, AML, accreditation, jurisdiction, and holding period rules on every transfer before settlement occurs.",
            },
          },
          {
            "@type": "Question",
            name: "What assets can institutions tokenize?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Private equity funds, private credit funds, real estate funds, SPVs, trade finance assets, receivables, debt instruments, and fund shares. The asset type determines the compliance rules and lifecycle requirements.",
            },
          },
          {
            "@type": "Question",
            name: "Can asset managers launch tokenized assets under their own brand?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. White-label tokenization infrastructure lets asset managers launch under their own brand while the infrastructure provider powers issuance, compliance, lifecycle workflows, and secondary trading behind the scenes.",
            },
          },
          {
            "@type": "Question",
            name: "What should asset managers look for in a tokenization infrastructure provider?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Compliance automation at every transaction, upgradeable smart contracts, fund lifecycle management, white-label deployment, secondary market support, audit trails, and fast implementation without internal blockchain development.",
            },
          },
        ],
      },
    ],
  },
};

export const newsSchemas: Record<string, object> = {
  "nomyx-supports-t7x-launchpad": {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": "https://www.nomyx.io/news/nomyx-supports-t7x-launchpad#news",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.nomyx.io/news/nomyx-supports-t7x-launchpad",
    },
    headline: "Nomyx Supports T7X Launchpad",
    description:
      "GlobeNewswire release highlights Nomyx as a strategic infrastructure partner supporting T7X Launchpad with tokenization and identity technology.",
    url: "https://www.nomyx.io/news/nomyx-supports-t7x-launchpad",
    publisher: {
      "@id": "https://www.nomyx.io#organization",
    },
    inLanguage: "en-US",
    datePublished: "2026-03-18",
    isBasedOn:
      "https://www.globenewswire.com/news-release/2026/03/18/3258190/0/en/t7x-launches-regulated-launchpad-for-tokenized-real-world-asset-securities.html",
  },
  "nomyx-ecgi-mortgage-tokenization": {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": "https://www.nomyx.io/news/nomyx-ecgi-mortgage-tokenization#news",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.nomyx.io/news/nomyx-ecgi-mortgage-tokenization",
    },
    headline: "Nomyx Powers ECGI Mortgage Tokenization Pilot",
    description:
      "Nomyx supports ECGI’s RezyFi mortgage tokenization pilot, starting with up to $10M in residential mortgages originated by ResMac.",
    url: "https://www.nomyx.io/news/nomyx-ecgi-mortgage-tokenization",
    publisher: {
      "@id": "https://www.nomyx.io#organization",
    },
    inLanguage: "en-US",
    datePublished: "2026-03-17",
    isBasedOn:
      "https://www.nasdaq.com/press-release/ecgi-advances-mortgage-tokenization-pilot-institutional-market-rails-continue-develop",
  },
  "nomyx-tzero-connect-issuance-trading": {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id":
      "https://www.nomyx.io/news/nomyx-tzero-connect-issuance-trading#news",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.nomyx.io/news/nomyx-tzero-connect-issuance-trading",
    },
    headline: "Nomyx and tZERO Connect Issuance to Trading",
    description:
      "Nomyx and tZERO connect tokenization infrastructure with regulated primary issuance, potential secondary trading, and onchain custody for issuers.",
    url: "https://www.nomyx.io/news/nomyx-tzero-connect-issuance-trading",
    publisher: {
      "@id": "https://www.nomyx.io#organization",
    },
    inLanguage: "en-US",
    isBasedOn:
      "https://www.tzero.com/news/tzero-nomyx-partner-to-provide-issuers-a-direct-regulated-route-from-tokenization-to-trading",
  },
  "nomyx-partners-with-tzero": {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": "https://www.nomyx.io/news/nomyx-partners-with-tzero#news",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.nomyx.io/news/nomyx-partners-with-tzero",
    },
    headline: "Nomyx Partners with tZERO for Regulated Trading",
    description:
      "Nomyx partners with tZERO to connect tokenization, primary issuance, regulated secondary trading, and onchain custody for tokenized securities.",
    url: "https://www.nomyx.io/news/nomyx-partners-with-tzero",
    publisher: {
      "@id": "https://www.nomyx.io#organization",
    },
    inLanguage: "en-US",
    isBasedOn:
      "https://www.theglobeandmail.com/investing/markets/markets-news/TheNewswire.com/584258/tzero-nomyx-partner-to-provide-issuers-a-direct-regulated-route-from-tokenization-to-trading/",
  },
  "nomyx-joins-ownera-superapps-platform": {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": "https://www.nomyx.io/news/nomyx-joins-ownera-superapps-platform#news",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.nomyx.io/news/nomyx-joins-ownera-superapps-platform",
    },
    headline: "Nomyx Joins Ownera SuperApps Platform",
    description:
      "Nomyx joins Ownera’s SuperApps Platform, making token deployment, compliance, digital identity, and primary issuance available to institutional networks.",
    url: "https://www.nomyx.io/news/nomyx-joins-ownera-superapps-platform",
    publisher: {
      "@id": "https://www.nomyx.io#organization",
    },
    inLanguage: "en-US",
    isBasedOn:
      "https://www.einpresswire.com/article/883510609/nomyx-joins-ownera-s-superapps-platform-to-deliver-end-to-end-tokenization-infrastructure",
  },
  "nomyx-mastercard-start-path-blockchain-digital-assets": {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id":
      "https://www.nomyx.io/news/nomyx-mastercard-start-path-blockchain-digital-assets#news",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.nomyx.io/news/nomyx-mastercard-start-path-blockchain-digital-assets",
    },
    headline:
      "Nomyx Joins Mastercard Start Path Blockchain and Digital Assets Program",
    description:
      "Nomyx joins Mastercard Start Path’s Blockchain and Digital Assets program, highlighting its no-code tokenization platform for fund managers and financial institutions.",
    url: "https://www.nomyx.io/news/nomyx-mastercard-start-path-blockchain-digital-assets",
    publisher: {
      "@id": "https://www.nomyx.io#organization",
    },
    inLanguage: "en-US",
    datePublished: "2025-09-15",
    isBasedOn:
      "https://www.mastercard.com/us/en/news-and-trends/press/2025/september/fueling-the-digital-economy.html",
  },
  "nomyx-featured-in-plug-and-play": {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": "https://www.nomyx.io/news/nomyx-featured-in-plug-and-play#news",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.nomyx.io/news/nomyx-featured-in-plug-and-play",
    },
    headline:
      "Nomyx Featured in Plug and Play and XDC Network’s RWA Accelerator Success Story",
    description:
      "Nomyx was featured by Plug and Play and XDC Network for building compliant, identity-first tokenization infrastructure for institutional asset managers.",
    url: "https://www.nomyx.io/news/nomyx-featured-in-plug-and-play",
    publisher: {
      "@id": "https://www.nomyx.io#organization",
    },
    inLanguage: "en-US",
  },
  "nomyx-featured-by-thestreet": {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": "https://www.nomyx.io/news/nomyx-featured-by-thestreet#news",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.nomyx.io/news/nomyx-featured-by-thestreet",
    },
    headline: "Nomyx Featured by TheStreet for Tokenized Invoice Finance",
    description:
      "Nomyx was featured by TheStreet for tokenizing invoices to help farmers and firms unlock liquidity from trade finance receivables.",
    url: "https://www.nomyx.io/news/nomyx-featured-by-thestreet",
    publisher: {
      "@id": "https://www.nomyx.io#organization",
    },
    inLanguage: "en-US",
    isBasedOn:
      "https://www.thestreet.com/crypto/innovation/this-startup-wants-to-fix-finance-with-tokenized-invoices",
  },
  "revroad-leads-nomyx-seed-round": {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": "https://www.nomyx.io/news/revroad-leads-nomyx-seed-round#news",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.nomyx.io/news/revroad-leads-nomyx-seed-round",
    },
    headline: "RevRoad Leads Nomyx $1.75M Seed Round",
    description:
      "RevRoad Capital led Nomyx’s $1.75M seed round, with participation from Stellar Foundation, angel investors, and additional funding from Plug and Play.",
    url: "https://www.nomyx.io/news/revroad-leads-nomyx-seed-round",
    publisher: {
      "@id": "https://www.nomyx.io#organization",
    },
    inLanguage: "en-US",
    isBasedOn:
      "https://www.utahbusiness.com/press-releases/2024/12/23/revroad-capital-nomyx-seed-round/",
  },
  "money20-20-europe-crowns-6-fintech-startups": {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id":
      "https://www.nomyx.io/news/money20-20-europe-crowns-6-fintech-startups#news",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.nomyx.io/news/money20-20-europe-crowns-6-fintech-startups",
    },
    headline: "Money20/20 Europe Crowns 6 Fintech Startups",
    description:
      "Money20/20 Europa has unveiled six startups that are poised to transform the world of money. The selected startups are Flexvelop, Brite Payments, Kore Labs, Nomyx, Velexa, and NALA...",
    url: "https://www.nomyx.io/news/money20-20-europe-crowns-6-fintech-startups",
    publisher: {
      "@id": "https://www.nomyx.io#organization",
    },
    inLanguage: "en-US",
    isBasedOn:
      "https://fintechnews.ch/events/money20-20-europe-crowns-6-fintech-startups/70923",
  },
};

export const diamondStandardTechArticleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": "https://www.nomyx.io/the-diamond-standard#techarticle",
  headline: "Smart Contracts That Never Expire.",
  description:
    "Discover the EIP-2535 Diamond Standard at Nomyx. Build modular, upgradeable smart contracts that adapt to regulatory changes without costly token migrations.",
  url: "https://www.nomyx.io/the-diamond-standard",
  about: {
    "@type": "Thing",
    name: "EIP-2535 Diamond Standard",
  },
  author: {
    "@id": "https://www.nomyx.io#organization",
  },
  publisher: {
    "@id": "https://www.nomyx.io#organization",
  },
};
