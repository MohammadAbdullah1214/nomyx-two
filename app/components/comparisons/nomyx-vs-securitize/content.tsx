export const faqs = [
  {
    question: "Is Nomyx better than Securitize?",
    answer: (
      <>
        <p>
          Not for every organization, and the honest answer depends on your
          asset and operating strategy. Securitize may fit institutions that
          want a large, vertically integrated regulated ecosystem. Nomyx may fit
          midmarket managers that prioritize issuer control, white-label
          infrastructure, configurable asset logic, and flexibility across
          existing service providers. The Fit Review determines which model
          matches your asset, not which brand markets harder.
        </p>
      </>
    ),
    schemaAnswer:
      "Not for every organization, and the honest answer depends on your asset and operating strategy. Securitize may fit institutions that want a large, vertically integrated regulated ecosystem. Nomyx may fit midmarket managers that prioritize issuer control, white-label infrastructure, configurable asset logic, and flexibility across existing service providers. The Fit Review determines which model matches your asset, not which brand markets harder.",
  },
  {
    question:
      "What makes Nomyx's architecture different from a tokenization platform?",
    answer: (
      <>
        <p>
          Nomyx runs each issuer as its own on-chain organization. Like Shopify
          for tokenized assets, you own your store, not a booth in someone
          else's marketplace. Five design principles separate infrastructure you
          control from a platform you rent:
        </p>
        <ul>
          <li>
            <strong>Domains as organizations:</strong> each issuer runs as its
            own on-chain org, white-label and issuer-controlled.
          </li>
          <li>
            <strong>Composability:</strong> recompose smart contracts in
            seconds, no handoff at any boundary, a smaller attack surface.
          </li>
          <li>
            <strong>Sovereignty:</strong> you control your own environment, your
            brand and your book.
          </li>
          <li>
            <strong>Offline-first:</strong> local-first data, resilient to
            outages, no single point of failure.
          </li>
          <li>
            <strong>Multi-tenant isolation:</strong> each customer's environment
            stays segregated, the institutional precondition.
          </li>
        </ul>
      </>
    ),
    schemaAnswer:
      "Nomyx runs each issuer as its own on-chain organization. Like Shopify for tokenized assets, you own your store, not a booth in someone else's marketplace. Five design principles separate infrastructure you control from a platform you rent: Domains as organizations: each issuer runs as its own on-chain org, white-label and issuer-controlled. Composability: recompose smart contracts in seconds, no handoff at any boundary, a smaller attack surface. Sovereignty: you control your own environment, your brand and your book. Offline-first: local-first data, resilient to outages, no single point of failure. Multi-tenant isolation: each customer's environment stays segregated, the institutional precondition.",
  },
  {
    question: "Does Nomyx hold the same regulatory licenses as Securitize?",
    answer: (
      <>
        <p>
          No, and no honest comparison implies it. Securitize provides regulated
          services through affiliated entities that include a registered
          broker-dealer, transfer agent, fund administrator, and ATS operator.
          Nomyx provides infrastructure and compliance technology and connects
          you to regulated partners where those services apply.{" "}
          <span className="verify">tZERO relationship status and wording</span>
        </p>
      </>
    ),
    schemaAnswer:
      "No, and no honest comparison implies it. Securitize provides regulated services through affiliated entities that include a registered broker-dealer, transfer agent, fund administrator, and ATS operator. Nomyx provides infrastructure and compliance technology and connects you to regulated partners where those services apply. tZERO relationship status and wording",
  },
  {
    question: "Will Nomyx replace our fund administrator?",
    answer: (
      <>
        <p>
          Not necessarily. Nomyx runs as an infrastructure layer that connects
          with your existing administrators, custodians, and servicers. What
          stays and what changes depends on your administrator, asset structure,
          required records, and workflow, and the Fit Review maps it before any
          production work begins.
        </p>
      </>
    ),
    schemaAnswer:
      "Not necessarily. Nomyx runs as an infrastructure layer that connects with your existing administrators, custodians, and servicers. What stays and what changes depends on your administrator, asset structure, required records, and workflow, and the Fit Review maps it before any production work begins.",
  },
  {
    question:
      "Can Nomyx restructure an asset after issuance without reissuing it?",
    answer: (
      <>
        <p>
          Yes. Nomyx Engine uses EIP-2535 architecture to change modular
          compliance and asset logic without changing the token address or
          migrating the asset. The governance, approvals, and audit around those
          changes stay reviewable in technical diligence:
        </p>
        <ul>
          <li>Pool composition and tranche structure recompose on-chain.</li>
          <li>
            Redemption windows and distribution waterfalls change without a
            burn-and-reissue.
          </li>
          <li>
            History, compliance state, and investor relationships survive the
            change.
          </li>
          <li>
            Every upgrade carries multisig control and a timelock.{" "}
            <span className="verify">final governance parameters</span>
          </li>
        </ul>
      </>
    ),
    schemaAnswer:
      "Yes. Nomyx Engine uses EIP-2535 architecture to change modular compliance and asset logic without changing the token address or migrating the asset. The governance, approvals, and audit around those changes stay reviewable in technical diligence: Pool composition and tranche structure recompose on-chain. Redemption windows and distribution waterfalls change without a burn-and-reissue. History, compliance state, and investor relationships survive the change. Every upgrade carries multisig control and a timelock. final governance parameters",
  },
  {
    question: "Does either platform guarantee liquidity?",
    answer: (
      <>
        <p>
          No, and anyone who tells you otherwise sells something. Infrastructure
          and regulated market access improve transferability, onboarding,
          settlement, and discoverability. They cannot guarantee buyers,
          transaction volume, pricing, or an exit. Both providers improve the
          plumbing; neither creates demand.
        </p>
      </>
    ),
    schemaAnswer:
      "No, and anyone who tells you otherwise sells something. Infrastructure and regulated market access improve transferability, onboarding, settlement, and discoverability. They cannot guarantee buyers, transaction volume, pricing, or an exit. Both providers improve the plumbing; neither creates demand.",
  },
  {
    question: "How much do Nomyx and Securitize cost?",
    answer: (
      <>
        <p>
          Neither publishes a standard public price for a complete issuer
          implementation, so compare the total operating model, not a single
          platform fee. A lower software quote can conceal expensive
          integrations and internal staffing. A higher platform quote may
          include regulated services that would otherwise require separate
          vendors. Compare across three horizons:
        </p>
        <ul>
          <li>
            <strong>Horizon I, initial implementation:</strong> setup, legal
            structuring, token design, audits, integrations, testing.
          </li>
          <li>
            <strong>Horizon II, annual operations:</strong> platform minimums,
            transaction charges, administration, custody, market access,
            support.
          </li>
          <li>
            <strong>Horizon III, long-term change:</strong> new asset classes,
            new jurisdictions, compliance updates, provider migration, exit.
          </li>
        </ul>
        <p>
          Judge a platform by what it costs to launch, operate, change, and
          eventually leave.
        </p>
      </>
    ),
    schemaAnswer:
      "Neither publishes a standard public price for a complete issuer implementation, so compare the total operating model, not a single platform fee. A lower software quote can conceal expensive integrations and internal staffing. A higher platform quote may include regulated services that would otherwise require separate vendors. Compare across three horizons: Horizon I, initial implementation: setup, legal structuring, token design, audits, integrations, testing. Horizon II, annual operations: platform minimums, transaction charges, administration, custody, market access, support. Horizon III, long-term change: new asset classes, new jurisdictions, compliance updates, provider migration, exit. Judge a platform by what it costs to launch, operate, change, and eventually leave.",
  },
  {
    question: "What will we receive after the Fit Review?",
    answer: (
      <>
        <p>
          A documented fit recommendation your buying committee can defend,
          sized to the stage of your project. Depending on where your project
          sits, the review identifies the recommended infrastructure model, the
          major advantages and tradeoffs, the legal and compliance dependencies,
          the required integrations, the buying-committee stakeholders, the open
          vendor questions, the implementation risks, a suggested proof-of-value
          scope, and a recommended next step.
        </p>
      </>
    ),
    schemaAnswer:
      "A documented fit recommendation your buying committee can defend, sized to the stage of your project. Depending on where your project sits, the review identifies the recommended infrastructure model, the major advantages and tradeoffs, the legal and compliance dependencies, the required integrations, the buying-committee stakeholders, the open vendor questions, the implementation risks, a suggested proof-of-value scope, and a recommended next step.",
  },
];
