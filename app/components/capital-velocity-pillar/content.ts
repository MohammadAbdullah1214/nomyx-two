export type TableCell = { text: string; badge?: "no" | "dep" | "yes" };
export type GuideTable = { title: string; headings: string[]; rows: TableCell[][] };

export const sections = [
  {
    "id": "executive",
    "label": "Executive answer"
  },
  {
    "id": "what-changed",
    "label": "What changed?"
  },
  {
    "id": "not-liquidity",
    "label": "Tokenization is not liquidity"
  },
  {
    "id": "own-rent",
    "label": "Own your store or rent a stall"
  },
  {
    "id": "no-crypto",
    "label": "Tokenization without crypto ops"
  },
  {
    "id": "compliance",
    "label": "Compliance travels with the asset"
  },
  {
    "id": "recomposition",
    "label": "Recomposition"
  },
  {
    "id": "collateral",
    "label": "From tokenized to collateral-ready"
  },
  {
    "id": "settlement",
    "label": "Settlement and reconciliation"
  },
  {
    "id": "lifecycle",
    "label": "Connecting the lifecycle"
  },
  {
    "id": "evidence",
    "label": "Inspect the evidence"
  },
  {
    "id": "fit",
    "label": "Is it right for your firm?"
  },
  {
    "id": "assessment",
    "label": "Run an assessment"
  },
  {
    "id": "faq",
    "label": "FAQ"
  }
];

export const faqs = [
  {
    "question": "What is Capital Velocity Infrastructure?",
    "answer": "Capital Velocity Infrastructure connects the rules, systems, counterparties, and evidence required for tokenized assets and their capital to progress through distribution, compliance, servicing, restructuring, financing, transfer, and settlement with fewer avoidable handoffs."
  },
  {
    "question": "How does it differ from a tokenization platform?",
    "answer": "A tokenization platform may focus on creating and issuing the digital representation. Capital Velocity Infrastructure starts with issuance but evaluates what the asset needs after issuance, including continuous compliance, lifecycle operations, distribution connectivity, governed change, collateral diligence, and settlement."
  },
  {
    "question": "Does tokenizing an asset make it liquid?",
    "answer": "No. Tokenization can improve representation, programmability, access, and execution. Liquidity still depends on eligible buyers, demand, price, market depth, transferability, information, and an available transaction path."
  },
  {
    "question": "If tokenization does not create liquidity, what can it improve?",
    "answer": "The right architecture can reduce selected manual steps, connect ownership and eligibility records, automate supported asset events, improve transaction auditability, and enable new distribution or settlement connections. The result depends on the asset, legal structure, counterparties, integrations, and operating design."
  },
  {
    "question": "Is NOMYX an exchange?",
    "answer": "NOMYX positions itself as infrastructure beneath the asset manager's operating environment. Regulated marketplaces and Alternative Trading Systems perform separate market functions. A NOMYX deployment may connect external venues or transaction services when the asset, investor, and jurisdiction qualify."
  },
  {
    "question": "What does \"own your own store\" mean?",
    "answer": "It means more than white-label design. The manager should retain its brand, direct investor relationship, contractual data rights, configurable workflows, integration access, governance authority, and a practical exit path. Each right belongs in the deployment architecture and contract."
  },
  {
    "question": "Do investors need crypto wallets, seed phrases, or gas tokens?",
    "answer": "That depends on the deployed user, wallet, custody, chain, and payment architecture. Institutional infrastructure should abstract unnecessary crypto mechanics. Verify the actual task flow, recovery model, user obligations, and support burden before deployment."
  },
  {
    "question": "Can investors fund by wire?",
    "answer": "Only when the live payment and settlement configuration supports it. Ask which currencies, banks, partners, geographies, limits, processing times, and exception paths apply to the proposed deployment."
  },
  {
    "question": "Does KYC happen only once?",
    "answer": "Not as a universal rule. Identity and eligibility can change. The system should preserve prior verification evidence, refresh relevant data when required, conduct applicable ongoing monitoring, and evaluate current status before governed events."
  },
  {
    "question": "What is asset recomposition?",
    "answer": "Asset recomposition means a governed change to supported asset logic or economic configuration that preserves designated elements of the existing on-chain identity and history. The implementation must specify what changes, what survives, who approves, and which legal or regulatory actions remain."
  },
  {
    "question": "Can an asset's waterfall change without reissuing the token?",
    "answer": "Do not assume so. The answer depends on the contract architecture, governing documents, economic effect, technical implementation, investor rights, and applicable law. Ask for a preservation and consent matrix tied to the exact asset."
  },
  {
    "question": "Can I borrow against a tokenized private-credit asset?",
    "answer": "Possibly, but tokenization alone does not make the asset acceptable collateral. A lender must still evaluate title, enforceability, value, control, priority, liquidation, data, servicing, structure, borrower risk, and credit appetite."
  },
  {
    "question": "Does collateral readiness mean a lender will approve the loan?",
    "answer": "No. Readiness supports diligence. The lender still decides whether to lend, how much to advance, what controls to require, how to price the facility, and whether all closing conditions have been met."
  },
  {
    "question": "Does NOMYX support T+0 settlement?",
    "answer": "Ask for a transaction-specific answer. \"T+0\" must identify the asset, cash rail, venue or bilateral path, custody model, authoritative ownership record, timing, finality, and exception process. A general label does not prove that every leg settles together on trade date."
  },
  {
    "question": "What functions run natively, through integrations, or through partners?",
    "answer": "The answer can change by deployment and over time. Request a dated capability ledger that marks each function as native, live integration, partner-delivered, beta, or roadmap and states every material condition."
  },
  {
    "question": "How much faster or less expensive will the lifecycle become?",
    "answer": "No responsible answer can precede a baseline. Measure current time-to-stage, labor, systems touched, exceptions, settlement duration, financing diligence, and idle capital. Then compare those measures after deployment across a defined period and cohort."
  },
  {
    "question": "Which asset managers fit NOMYX best?",
    "answer": "The strongest candidates manage assets with meaningful lifecycle complexity and want to retain control over investor experience, data, rules, and provider relationships. Fit depends more on the operating model and required lifecycle states than on AUM alone."
  }
];

export const tables: GuideTable[] = [
  {
    "title": "Table · The after-tokenization audit",
    "headings": [
      "Lifecycle requirement",
      "Automatic after tokenization?",
      "The question that resolves it"
    ],
    "rows": [
      [
        {
          "text": "Investor eligibility"
        },
        {
          "text": "No",
          "badge": "no"
        },
        {
          "text": "Can the system query current identity, accreditation, jurisdiction, and transfer status?"
        }
      ],
      [
        {
          "text": "Primary distribution"
        },
        {
          "text": "No",
          "badge": "no"
        },
        {
          "text": "Where do eligible buyers come from, and who owns that relationship?"
        }
      ],
      [
        {
          "text": "Secondary transactions"
        },
        {
          "text": "No",
          "badge": "no"
        },
        {
          "text": "Which regulated venue, bulletin board, bilateral process, or transfer path supports the asset?"
        }
      ],
      [
        {
          "text": "Ongoing servicing"
        },
        {
          "text": "No",
          "badge": "no"
        },
        {
          "text": "How do capital calls, distributions, redemptions, reporting, and exceptions operate?"
        }
      ],
      [
        {
          "text": "Changes to asset terms"
        },
        {
          "text": "It depends",
          "badge": "dep"
        },
        {
          "text": "Which changes can the architecture support, and which approvals do they trigger?"
        }
      ],
      [
        {
          "text": "Collateral use"
        },
        {
          "text": "No",
          "badge": "no"
        },
        {
          "text": "Can a lender establish title, value, control, enforceability, and a liquidation path?"
        }
      ],
      [
        {
          "text": "Settlement"
        },
        {
          "text": "It depends",
          "badge": "dep"
        },
        {
          "text": "Where do the asset and cash legs settle, and when does each become final?"
        }
      ],
      [
        {
          "text": "Reconciliation"
        },
        {
          "text": "It depends",
          "badge": "dep"
        },
        {
          "text": "Which system holds authoritative state at each boundary?"
        }
      ]
    ]
  },
  {
    "title": "Table · Four concepts to keep separate",
    "headings": [
      "Concept",
      "What it answers",
      "What it does not prove"
    ],
    "rows": [
      [
        {
          "text": "Tokenization"
        },
        {
          "text": "How will specified asset rights and records receive a digital representation?"
        },
        {
          "text": "Buyer demand, legal transferability, or liquidity"
        }
      ],
      [
        {
          "text": "Distribution"
        },
        {
          "text": "How will the offering reach eligible prospective investors?"
        },
        {
          "text": "An active secondary market"
        }
      ],
      [
        {
          "text": "Market access"
        },
        {
          "text": "Where and under what rules can eligible parties transact?"
        },
        {
          "text": "Adequate demand, price, or market depth"
        }
      ],
      [
        {
          "text": "Liquidity"
        },
        {
          "text": "Can a holder transact the required size, within the required time, at an acceptable price and cost?"
        },
        {
          "text": "That every eligible asset will find a buyer"
        }
      ]
    ]
  },
  {
    "title": "Table · Three operating models",
    "headings": [
      "Operating model",
      "What the manager controls",
      "Primary tradeoff"
    ],
    "rows": [
      [
        {
          "text": "Rent a marketplace"
        },
        {
          "text": "The asset and selected offering terms"
        },
        {
          "text": "Faster access can come with platform-led branding, data, investor relationships, and switching constraints."
        }
      ],
      [
        {
          "text": "Build the stack"
        },
        {
          "text": "Architecture, workflows, data, and experience"
        },
        {
          "text": "Maximum control brings engineering, security, integration, maintenance, and compliance burdens."
        }
      ],
      [
        {
          "text": "Own the storefront and operating rails"
        },
        {
          "text": "Brand, investor experience, core workflows, data rights, and provider choices"
        },
        {
          "text": "The manager must define governance and validate every connected service boundary."
        }
      ]
    ]
  },
  {
    "title": "Table · The NOMYX architecture, layer by layer",
    "headings": [
      "Layer",
      "Primary responsibility"
    ],
    "rows": [
      [
        {
          "text": "Issuer-controlled experience"
        },
        {
          "text": "Brand, LP journey, offering context, approvals, communications, and operating policy"
        }
      ],
      [
        {
          "text": "NOMYX ID"
        },
        {
          "text": "Identity and eligibility signals used by supported workflows and transfer logic"
        }
      ],
      [
        {
          "text": "NOMYX Engine and Diamond architecture"
        },
        {
          "text": "Token issuance and governed asset or contract logic within validated implementation boundaries"
        }
      ],
      [
        {
          "text": "NOMYX Gateway"
        },
        {
          "text": "Connections to distribution and transaction services, subject to partner, asset, and jurisdiction conditions"
        }
      ],
      [
        {
          "text": "External regulated services"
        },
        {
          "text": "Functions that require an eligible venue, custodian, payment provider, lender, transfer agent, or other authorized counterparty"
        }
      ]
    ]
  },
  {
    "title": "Table · Institutional task vs infrastructure question",
    "headings": [
      "Institutional task",
      "Infrastructure question"
    ],
    "rows": [
      [
        {
          "text": "Sign in and recover access"
        },
        {
          "text": "Can users rely on passkeys or governed recovery instead of seed phrases?"
        }
      ],
      [
        {
          "text": "Establish identity"
        },
        {
          "text": "How do KYC, KYB, beneficial ownership, accreditation, and jurisdiction checks work?"
        }
      ],
      [
        {
          "text": "Subscribe and fund"
        },
        {
          "text": "Which wires, fiat rails, stablecoins, or custody arrangements operate today?"
        }
      ],
      [
        {
          "text": "Hold or transfer"
        },
        {
          "text": "Does the user need a browser wallet, private key, gas token, or specialist support?"
        }
      ],
      [
        {
          "text": "Receive distributions"
        },
        {
          "text": "Which payment method, tax record, and accounting entry governs the event?"
        }
      ],
      [
        {
          "text": "Resolve an exception"
        },
        {
          "text": "Who can pause, remediate, reverse where legally possible, or recover the workflow?"
        }
      ]
    ]
  },
  {
    "title": "Table · Preservation and consent matrix",
    "headings": [
      "Proposed change",
      "Token identity remain?",
      "Holder state remain?",
      "Who must consent?",
      "Legal / regulatory action",
      "Evidence that survives"
    ],
    "rows": [
      [
        {
          "text": "Redemption parameter"
        },
        {
          "text": "Verify by implementation"
        },
        {
          "text": "Governance-dependent"
        },
        {
          "text": "Context-dependent"
        },
        {
          "text": "Prior rule, new rule, approval, effective time"
        },
        {
          "text": "—"
        }
      ],
      [
        {
          "text": "Distribution waterfall"
        },
        {
          "text": "Do not assume"
        },
        {
          "text": "Often context-dependent"
        },
        {
          "text": "Legal review likely"
        },
        {
          "text": "Economic terms, consent, calculation history"
        },
        {
          "text": "—"
        }
      ],
      [
        {
          "text": "Compliance module"
        },
        {
          "text": "Architecture-dependent"
        },
        {
          "text": "Often intended"
        },
        {
          "text": "Named governance authority"
        },
        {
          "text": "Jurisdiction-dependent"
        },
        {
          "text": "Version, authorization, test, deployment record"
        }
      ],
      [
        {
          "text": "New tranche"
        },
        {
          "text": "Verify"
        },
        {
          "text": "Often required"
        },
        {
          "text": "Legal and regulatory review may apply"
        },
        {
          "text": "Class terms, allocation, approvals, history"
        },
        {
          "text": "—"
        }
      ],
      [
        {
          "text": "Material economic amendment"
        },
        {
          "text": "Do not generalize"
        },
        {
          "text": "Often required"
        },
        {
          "text": "Full amendment and approval trail"
        },
        {
          "text": "—"
        },
        {
          "text": "—"
        }
      ]
    ]
  },
  {
    "title": "Table · Lender diligence domains",
    "headings": [
      "Diligence domain",
      "What must become clear"
    ],
    "rows": [
      [
        {
          "text": "Legal title and enforceability"
        },
        {
          "text": "What property or security interest does the token represent, and can the relevant agreement enforce it?"
        }
      ],
      [
        {
          "text": "Borrower and asset compliance"
        },
        {
          "text": "Do the borrower, holder, asset, and transaction meet applicable requirements?"
        }
      ],
      [
        {
          "text": "Valuation"
        },
        {
          "text": "What valuation method, source, frequency, and challenge process govern the asset?"
        }
      ],
      [
        {
          "text": "Custody or control"
        },
        {
          "text": "How can the secured party obtain and maintain legally meaningful control?"
        }
      ],
      [
        {
          "text": "Priority and perfection"
        },
        {
          "text": "Which law governs the security interest, and what establishes priority against competing claims?"
        }
      ],
      [
        {
          "text": "Liquidation rights"
        },
        {
          "text": "Can the lender transfer, sell, redeem, or otherwise realize value after default?"
        }
      ],
      [
        {
          "text": "Data quality"
        },
        {
          "text": "Can the lender verify ownership, cash flows, encumbrances, servicing, and asset performance?"
        }
      ],
      [
        {
          "text": "Restructuring mechanics"
        },
        {
          "text": "What happens when terms, collateral, covenants, or parties change?"
        }
      ],
      [
        {
          "text": "Operational settlement"
        },
        {
          "text": "Can collateral movement and payment complete through a controlled and auditable process?"
        }
      ],
      [
        {
          "text": "Credit appetite"
        },
        {
          "text": "Does the asset fit the lender's policy, concentration limits, return hurdle, and risk tolerance?"
        }
      ]
    ]
  },
  {
    "title": "Table · Lifecycle states and infrastructure requirements",
    "headings": [
      "State",
      "Capital question",
      "Infrastructure requirement"
    ],
    "rows": [
      [
        {
          "text": "Orient"
        },
        {
          "text": "What rights does the asset represent?"
        },
        {
          "text": "Legal mapping, authoritative records, disclosures, governance"
        }
      ],
      [
        {
          "text": "Issue"
        },
        {
          "text": "Can the manager create and allocate the tokenized interest correctly?"
        },
        {
          "text": "Asset logic, investor eligibility, subscription, ownership record"
        }
      ],
      [
        {
          "text": "Distribute"
        },
        {
          "text": "Can the offering reach eligible investors without surrendering control?"
        },
        {
          "text": "Branded experience, investor access, compliant transaction path"
        }
      ],
      [
        {
          "text": "Service and recompose"
        },
        {
          "text": "Can the asset operate and adapt through time?"
        },
        {
          "text": "Events, payments, reporting, modular logic, approvals, audit history"
        }
      ],
      [
        {
          "text": "Finance"
        },
        {
          "text": "Can a lender evaluate and control the asset?"
        },
        {
          "text": "Title, data, valuation, custody or control, priority, liquidation path"
        }
      ],
      [
        {
          "text": "Transfer and settle"
        },
        {
          "text": "Can eligible parties complete the transaction and update authoritative state?"
        },
        {
          "text": "Venue or bilateral path, transfer rules, payment rails, finality, exceptions"
        }
      ]
    ]
  },
  {
    "title": "Table · Capability ledger to request",
    "headings": [
      "Capability",
      "Status to disclose",
      "Conditions to disclose"
    ],
    "rows": [
      [
        {
          "text": "Token issuance"
        },
        {
          "text": "Native, integration, partner, beta, or roadmap"
        },
        {
          "text": "Supported asset structures and chains"
        }
      ],
      [
        {
          "text": "Investor identity"
        },
        {
          "text": "Native or integrated components"
        },
        {
          "text": "Data sources, privacy, refresh, recovery, jurisdictions"
        }
      ],
      [
        {
          "text": "Primary distribution"
        },
        {
          "text": "Native, partner, or configured workflow"
        },
        {
          "text": "Offering type, eligibility, geography, commercial terms"
        }
      ],
      [
        {
          "text": "Secondary transaction access"
        },
        {
          "text": "Partner or venue connection"
        },
        {
          "text": "Asset acceptance, investor eligibility, venue approval, liquidity limits"
        }
      ],
      [
        {
          "text": "Payment rails"
        },
        {
          "text": "Live integration or partner"
        },
        {
          "text": "Currency, geography, limits, finality, exception handling"
        }
      ],
      [
        {
          "text": "Recomposition"
        },
        {
          "text": "Precise validated boundary"
        },
        {
          "text": "Modules, approvals, timelocks, rollback, preservation"
        }
      ],
      [
        {
          "text": "Collateral readiness"
        },
        {
          "text": "Infrastructure support"
        },
        {
          "text": "Asset, lender, legal regime, valuation, control, underwriting"
        }
      ],
      [
        {
          "text": "Settlement"
        },
        {
          "text": "Transaction-specific state"
        },
        {
          "text": "Cash leg, asset leg, venue, custodian, finality"
        }
      ],
      [
        {
          "text": "Cross-border movement"
        },
        {
          "text": "Conditional"
        },
        {
          "text": "Jurisdictions, counterparties, rules, asset eligibility"
        }
      ]
    ]
  }
];
