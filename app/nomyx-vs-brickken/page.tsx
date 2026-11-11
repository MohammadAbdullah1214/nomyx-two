import type { Metadata } from "next";
import { CustomCursor, Footer, Navbar } from "@/app/home";
import ComparisonPage from "@/app/components/comparisons/nomyx-vs-brickken/ComparisonPage";
import { faqs } from "@/app/components/comparisons/nomyx-vs-brickken/content";
import "@/app/css/comparisons.css";
import "@/app/css/nomyx-vs-brickken.css";

export const metadata: Metadata = {
  title: "Nomyx vs Brickken: Tokenization Platform Comparison for Asset Managers",
  description:
    "Compare Nomyx and Brickken on smart-contract upgrades, compliance controls, fund lifecycle operations, white-label delivery, integrations, and operating costs.",
  alternates: { canonical: "https://www.nomyx.io/nomyx-vs-brickken" },
};

export default function NomyxVsBrickkenPage() {
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
      <main className="comparison-page brickken-comparison">
        <ComparisonPage />
      </main>
      <Footer />
    </>
  );
}

