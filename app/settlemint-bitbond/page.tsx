import type { Metadata } from "next";
import { CustomCursor, Footer, Navbar } from "@/app/home";
import ComparisonPage from "@/app/components/comparisons/settlemint-bitbond/ComparisonPage";
import { faqs } from "@/app/components/comparisons/settlemint-bitbond/content";
import "@/app/css/comparisons.css";

export const metadata: Metadata = {
  title: "SettleMint vs Nomyx vs Bitbond | Private Credit Comparison",
  description:
    "Compare SettleMint, Nomyx, and Bitbond for private-credit fund operations. Evaluate post-issuance changes, integrations, responsibilities, and operating costs.",
  alternates: { canonical: "https://www.nomyx.io/settlemint-bitbond" },
};

export default function SettleMintBitbondPage() {
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
