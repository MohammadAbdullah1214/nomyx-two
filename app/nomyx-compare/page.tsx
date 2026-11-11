import type { Metadata } from "next";
import { CustomCursor, Footer, Navbar } from "@/app/home";
import ComparisonPage from "@/app/components/comparisons/nomyx-compare/ComparisonPage";
import "@/app/css/comparisons.css";
import "@/app/css/nomyx-compare.css";

export const metadata: Metadata = {
  title: "Compare Nomyx: Tokenization Platform Comparisons",
  description:
    "Compare Nomyx with Securitize, Tokeny, Taurus, Fireblocks, Brickken, Centrifuge, Clearpool, SettleMint, Bitbond, DigiShares, and InvestaX. Choose a company to see its comparison.",
  alternates: { canonical: "https://www.nomyx.io/nomyx-compare" },
};

export default function NomyxComparePage() {
  return (
    <>
      <CustomCursor variant="light" />
      <Navbar variant="light" transparentInitially hideBorder />
      <main className="comparison-page compare-hub">
        <ComparisonPage />
      </main>
      <Footer />
    </>
  );
}

