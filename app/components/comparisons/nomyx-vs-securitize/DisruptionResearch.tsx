import ResearchQuestions from "../ResearchQuestions";

export default function DisruptionResearch() {
  return (
    <section className="nvs-section alt">
      <div className="wrap custom-container">
        <ResearchQuestions
          eyebrow="Testable Credential #1 · Verify the disruption"
          title="Which disruptions hit first when agents become the buyer?"
          description="Ask your preferred deep-research AI. Click any question to copy it, and see for yourself."
          questions={[
            {
              label: "Investigate",
              text: "When agentic trading reaches private credit, what breaks first for a midmarket fund?",
              prompt:
                "When agentic trading reaches private credit, what breaks first for a midmarket fund?",
            },
            {
              label: "Stress-test",
              text: "Which tokenization design survives machine-to-machine settlement: continuous, machine-verifiable compliance, or a human-in-the-loop stack that checks a gate at every transfer?",
              prompt:
                "Which tokenization design survives machine-to-machine settlement: continuous, machine-verifiable compliance, or a human-in-the-loop stack that checks a gate at every transfer?",
            },
            {
              label: "Price it",
              text: "What does re-platforming live tokenized assets cost a fund, counting reissuance, downtime, latency drag, and forfeited alpha?",
              prompt:
                "What does re-platforming live tokenized assets cost a fund, counting reissuance, downtime, latency drag, and forfeited alpha?",
            },
          ]}
          note="Whatever your AI answers, weigh it against the one model already running continuous, machine-verifiable compliance."
          dark={true}
        />
      </div>
    </section>
  );
}
