import type { Metadata } from "next";

import DiamondStandard from "../components/DiamondStandard";
import { diamondStandardTechArticleSchema } from "@/lib/schema-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "EIP-2535 The Diamond Standard | Nomyx",
  description: "Discover the EIP-2535 Diamond Standard at Nomyx. Build modular, upgradeable smart contracts that adapt to regulatory changes without costly token migrations.",
  pathname: "/the-diamond-standard",
});

export default function TheDiamondStandardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(diamondStandardTechArticleSchema),
        }}
      />
      <DiamondStandard />
    </>
  );
}

