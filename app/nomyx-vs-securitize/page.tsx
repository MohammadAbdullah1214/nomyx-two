import type { Metadata } from "next";
import { CustomCursor, Footer, Navbar } from "@/app/home";
import ComparisonPage from "@/app/components/comparisons/nomyx-vs-securitize/ComparisonPage";
import { faqs } from "@/app/components/comparisons/nomyx-vs-securitize/content";
import "@/app/css/comparisons.css";
import "@/app/css/nomyx-vs-securitize.css";

export const metadata: Metadata = {
  title: "Nomyx vs Securitize | Tokenization Operating Models",
  description:
    "Compare Nomyx and Securitize across issuer control, investor experience, asset changes, retained service providers, market access, and total operating cost.",
  alternates: { canonical: "https://www.nomyx.io/nomyx-vs-securitize" },
};

export default function NomyxVsSecuritizePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, schemaAnswer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: schemaAnswer },
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
      <CustomCursor variant="dark" />
      <Navbar variant="dark" transparentInitially hideBorder />
      <main className="nvs-page">
        <ComparisonPage />
      </main>
      <Footer
        ctaTitle="Still comparing your options?"
        ctaDescription="Bring us your asset and your shortlist. We will help you name the questions your investment committee should answer before choosing a provider."
        ctaButtonText="Book an Infrastructure Fit Review"
      />
    </>
  );
}
