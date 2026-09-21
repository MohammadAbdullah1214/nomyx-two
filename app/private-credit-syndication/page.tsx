import type { Metadata } from "next";

import PrivateCredit from "../components/PrivateCredit";
import { serviceSchemas } from "@/lib/schema-data";

export const metadata: Metadata = {
  title: "Tokenized Private Credit Syndication | Nomyx",
  description: "Syndicate private credit loans efficiently. Aggregate liquidity on-chain, deploy fiat to borrowers, and automate yield distribution to your LP capital stack.",
  alternates: {
    canonical: "https://www.nomyx.io/private-credit-syndication",
  },
};

export default function PrivateCreditSyndicationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchemas["private-credit-syndication"]
          ),
        }}
      />
      <PrivateCredit />
    </>
  );
}

