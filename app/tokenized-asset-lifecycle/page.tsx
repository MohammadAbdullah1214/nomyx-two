import type { Metadata } from "next";
import { CustomCursor, Footer, Navbar } from "@/app/home";
import LifecyclePage from "@/app/components/lifecycle/LifecyclePage";
import "@/app/css/tokenized-asset-lifecycle.css";
import "@/app/css/lifecycle-diagrams.css";
import "@/app/css/lifecycle-platform.css";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Tokenized-asset Lifecycle | Nomyx",
  description:
    "Capital Velocity Infrastructure for private credit and alternative assets. Connect compliance, asset operations, collateral readiness, distribution, and settlement.",
  pathname: "/tokenized-asset-lifecycle",
});

export default function TokenizedAssetLifecyclePage() {
  return (
    <>
      <CustomCursor variant="dark" />
      <Navbar variant="dark" />
      <main className="lifecycle-page">
        <LifecyclePage />
      </main>
      <Footer />
    </>
  );
}
