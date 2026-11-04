import type { Metadata } from "next";
import { CustomCursor, Footer, Navbar } from "@/app/home";
import ComparisonPage from "@/app/components/comparisons/taurus-fireblocks/ComparisonPage";
import { faqs } from "@/app/components/comparisons/taurus-fireblocks/content";
import "@/app/css/comparisons.css";

export const metadata: Metadata = {
  title:
    "Taurus vs Nomyx vs Fireblocks | Institutional Tokenization Comparison",
  description:
    "Compare Taurus, Nomyx, and Fireblocks for institutional tokenization. Evaluate investor workflows, custody technology, integrations, controls, and three-year operating costs.",
  alternates: { canonical: "https://www.nomyx.io/taurus-fireblocks" },
};

export default function TaurusFireblocksPage() {
  const faqSchema = {
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
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <CustomCursor variant="light" />
      <Navbar variant="light" transparentInitially hideBorder />
      <main className="comparison-page">
        <ComparisonPage />
      </main>
      <Footer />
    </>
  );
}
