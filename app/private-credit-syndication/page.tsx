import type { Metadata } from "next";

import PrivateCredit from "../components/PrivateCredit";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.nomyx.io/private-credit-syndication",
  },
};

export default function PrivateCreditSyndicationPage() {
  return <PrivateCredit />;
}
