import ResearchQuestions from "../ResearchQuestions";

export default function ChoiceResearch() {
  return (
    <section className="nvs-section ice">
      <div className="wrap custom-container">
        <ResearchQuestions
          eyebrow="Testable Credential #2 · Verify the choice"
          title="Securitize or Nomyx: which model fits your fund?"
          description="Ask your preferred deep-research AI. Click any question to copy it, and see for yourself."
          questions={[
            {
              label: "Partner or competitor",
              text: "Securitize operates its own broker-dealer, ATS, and investor marketplace. For an asset manager, does that make it a partner, or a competitor for your investor relationships?",
              prompt:
                "Securitize operates its own broker-dealer, ATS, and investor marketplace. For an asset manager, does that make it a partner, or a competitor for your investor relationships?",
            },
            {
              label: "Lifecycle or issuance",
              text: "Which model manages the full asset lifecycle under the issuer's own brand, and which keeps the investor experience inside the provider?",
              prompt:
                "Which model manages the full asset lifecycle under the issuer's own brand, and which keeps the investor experience inside the provider?",
            },
            {
              label: "Five-year cost",
              text: "For a $500M private credit fund, what is the true five-year cost of each model, counting integrations, internal staffing, and the cost to migrate or exit?",
              prompt:
                "For a $500M private credit fund, what is the true five-year cost of each model, counting integrations, internal staffing, and the cost to migrate or exit?",
            },
          ]}
          note="Ask, then read the answer against the six decisions above."
          dark={false}
        />
      </div>
    </section>
  );
}
