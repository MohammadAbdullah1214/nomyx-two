import type { Metadata } from "next";
import { CustomCursor, Footer, Navbar } from "@/app/home";
import ComparisonPage from "@/app/components/comparisons/securitize-tokeny/ComparisonPage";
import { faqs } from "@/app/components/comparisons/securitize-tokeny/content";
import "@/app/css/comparisons.css";

export const metadata: Metadata = {
  title: "Securitize vs Nomyx vs Tokeny | Fund Tokenization Comparison",
  description:
    "Compare Securitize, Nomyx, and Tokeny for fund tokenization. Evaluate service scope, retained providers, operating responsibilities, integrations, and transition costs.",
  alternates: { canonical: "https://www.nomyx.io/securitize-tokeny" },
};

export default function SecuritizeTokenyPage() {
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
