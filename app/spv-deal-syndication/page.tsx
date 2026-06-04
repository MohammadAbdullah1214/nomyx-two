import type { Metadata } from "next";

import SpvDeal from "../components/SpvDeal";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.nomyx.io/spv-deal-syndication",
  },
};

export default function SpvDealSyndicationPage() {
  return <SpvDeal />;
}
