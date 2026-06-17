import type { Metadata } from "next";

import RealEstate from "../components/RealEstate";

export const metadata: Metadata = {
  title: "Real Estate Tokenization | Nomyx",
  description: "Unlock real estate liquidity through tokenization. Lower minimum ticket sizes, access global capital, and easily manage 500+ investors on a single cap table.",
  alternates: {
    canonical: "https://www.nomyx.io/real-estate-tokenization",
  },
};

export default function RealEstateTokenizationPage() {
  return <RealEstate />;
}
