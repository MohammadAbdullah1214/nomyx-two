import type { Metadata } from "next";
import { CustomCursor, Footer, Navbar } from "@/app/home";
import ComparisonPage from "@/app/components/comparisons/digishares-investax/ComparisonPage";
import { faqs } from "@/app/components/comparisons/digishares-investax/content";
import "@/app/css/comparisons.css";
import "@/app/css/digishares-investax.css";

export const metadata: Metadata = {
  title:
    "DigiShares vs Nomyx vs InvestaX | Real Estate Tokenization Comparison",
  description:
    "Compare DigiShares, Nomyx, and InvestaX for real-estate investor operations. Evaluate eligibility, ownership records, distributions, controlled transfers, service scope, and total operating cost.",
  alternates: { canonical: "https://www.nomyx.io/digishares-investax" },
};

export default function DigiSharesInvestaXPage() {
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
      <main className="comparison-page property-comparison">
        <ComparisonPage />
      </main>
      <Footer />
    </>
  );
}
