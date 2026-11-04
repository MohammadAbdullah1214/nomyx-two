import type { Metadata } from "next";
import { CustomCursor, Footer, Navbar } from "@/app/home";
import ComparisonPage from "@/app/components/comparisons/centrifuge-clearpool/ComparisonPage";
import { faqs } from "@/app/components/comparisons/centrifuge-clearpool/content";
import "@/app/css/comparisons.css";
import "@/app/css/centrifuge-clearpool.css";

export const metadata: Metadata = {
  title: "Centrifuge vs Nomyx vs Clearpool | Private Credit Comparison",
  description:
    "Compare Centrifuge, Nomyx, and Clearpool for private credit. Separate tokenization infrastructure from borrowing facilities, funding commitments, servicing, and operating costs.",
  alternates: { canonical: "https://www.nomyx.io/centrifuge-clearpool" },
};

export default function CentrifugeClearpoolPage() {
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
      <main className="comparison-page credit-comparison">
        <ComparisonPage />
      </main>
      <Footer />
    </>
  );
}
