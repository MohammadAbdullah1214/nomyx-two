import type { Metadata } from "next";

import SpvDeal from "../components/SpvDeal";

export const metadata: Metadata = {
  title: "SPV & Deal Syndication | Nomyx",
  description: "Spin up compliant SPVs in hours with Nomyx. Automate deal syndication, capital formation, cap table management, and carry distribution for single-asset vehicles.",
  alternates: {
    canonical: "https://www.nomyx.io/spv-deal-syndication",
  },
};

export default function SpvDealSyndicationPage() {
  return <SpvDeal />;
}
