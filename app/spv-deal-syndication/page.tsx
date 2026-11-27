import type { Metadata } from "next";

import SpvDeal from "../components/SpvDeal";
import { serviceSchemas } from "@/lib/schema-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "SPV & Deal Syndication | Nomyx",
  description: "Spin up compliant SPVs in hours with Nomyx. Automate deal syndication, capital formation, cap table management, and carry distribution for single-asset vehicles.",
  pathname: "/spv-deal-syndication",
});

export default function SpvDealSyndicationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchemas["spv-deal-syndication"]),
        }}
      />
      <SpvDeal />
    </>
  );
}

