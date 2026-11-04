import type { Metadata } from "next";
import { CustomCursor, Footer, Navbar } from "@/app/home";
import ComparisonPage from "@/app/components/comparisons/three-model/ComparisonPage";
import { faqs } from "@/app/components/comparisons/three-model/content";
import "@/app/css/comparisons.css";
import "@/app/css/three-model-comparison.css";

export const metadata: Metadata = {
  title: "Three Tokenization Operating Models | Nomyx Comparison",
  description:
    "Compare regulated monoliths, modular issuer-controlled infrastructure, and smart-contract-native credit protocols across ownership, servicing, connectivity, and commercial risk.",
  alternates: { canonical: "https://www.nomyx.io/three-model-comparison" },
};

export default function ThreeModelComparisonPage() {
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
      <main className="three-model-page">
        <ComparisonPage />
      </main>
      <div className="three-model-footer">
        <Footer />
      </div>
    </>
  );
}
