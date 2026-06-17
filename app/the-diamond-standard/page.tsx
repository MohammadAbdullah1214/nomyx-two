import type { Metadata } from "next";

import DiamondStandard from "../components/DiamondStandard";

export const metadata: Metadata = {
  title: "EIP-2535 The Diamond Standard | Nomyx",
  description: "Discover the EIP-2535 Diamond Standard at Nomyx. Build modular, upgradeable smart contracts that adapt to regulatory changes without costly token migrations.",
  alternates: {
    canonical: "https://www.nomyx.io/the-diamond-standard",
  },
};

export default function TheDiamondStandardPage() {
  return <DiamondStandard />;
}
