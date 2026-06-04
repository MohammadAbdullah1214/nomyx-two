import type { Metadata } from "next";

import DiamondStandard from "../components/DiamondStandard";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.nomyx.io/the-diamond-standard",
  },
};

export default function TheDiamondStandardPage() {
  return <DiamondStandard />;
}
