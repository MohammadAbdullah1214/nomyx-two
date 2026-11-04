import type { Metadata } from "next";
import { CustomCursor, Footer, Navbar } from "@/app/home";
import ComparisonPage from "@/app/components/comparisons/digishares-launch-entry/ComparisonPage";
import { faqs } from "@/app/components/comparisons/digishares-launch-entry/content";
import "@/app/css/comparisons.css";
import "@/app/css/digishares-launch-entry.css";

export const metadata: Metadata = {
  title: "DigiShares Launch vs Nomyx vs Bitbond | First Offering Costs",
  description:
    "Compare DigiShares Launch, a scoped Nomyx configuration, and Bitbond for a first tokenized offering. Evaluate published cost anchors, required extras, and operator effort.",
  alternates: { canonical: "https://www.nomyx.io/digishares-launch-entry" },
};

export default function DigiSharesLaunchEntryPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <CustomCursor variant="light" />
      <Navbar variant="light" transparentInitially hideBorder />
      <main className="comparison-page launch-comparison">
        <ComparisonPage />
      </main>
      <Footer />
    </>
  );
}
