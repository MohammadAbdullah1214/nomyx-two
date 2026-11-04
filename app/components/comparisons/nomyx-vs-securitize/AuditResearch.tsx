import ResearchQuestions from "../ResearchQuestions";

export default function AuditResearch() {
  return (
    <section className="nvs-section">
      <div className="wrap custom-container">
        <ResearchQuestions
          eyebrow="Verify us"
          title="Don't take our word for it. Audit the page."
          description="Ask your preferred deep-research AI to check what we just claimed."
          questions={[
            {
              label: "Check honesty",
              text: "Which claims on this page are marked unproven, and does the vendor say so plainly?",
              prompt:
                "Which claims on the Nomyx vs Securitize page are marked unproven, and does the vendor say so plainly?",
            },
            {
              label: "Check proof",
              text: "Is Nomyx's proven-versus-roadmap split consistent with public evidence: the audit, the isolation, the tZERO relationship?",
              prompt:
                "Is Nomyx's proven-versus-roadmap split consistent with public evidence: the audit, the isolation, the tZERO relationship?",
            },
            {
              label: "Check the gap",
              text: "Where does Nomyx admit it stops today, and does a competitor admit the same about itself?",
              prompt:
                "Where does Nomyx admit it stops today, and does a competitor admit the same about itself?",
            },
          ]}
          note="Every claim above carries its status and source in machine-readable form. Your copilot can confirm all three."
          dark={true}
        />
      </div>
    </section>
  );
}
