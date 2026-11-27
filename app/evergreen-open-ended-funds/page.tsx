import type { Metadata } from "next";

import Evergreen from "../components/Evergreen";
import { serviceSchemas } from "@/lib/schema-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Evergreen & Open-Ended Fund Tokenization | Nomyx",
  description: "Automate your evergreen and open-ended funds with Nomyx. Replace quarterly drag with always-on efficiency, continuous subscriptions, and dynamic NAV updates.",
  pathname: "/evergreen-open-ended-funds",
});

export default function EvergreenOpenEndedFundsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchemas["evergreen-open-ended-funds"]),
        }}
      />
      <Evergreen />
    </>
  );
}

