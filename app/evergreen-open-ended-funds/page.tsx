import type { Metadata } from "next";

import Evergreen from "../components/Evergreen";

export const metadata: Metadata = {
  title: "Evergreen & Open-Ended Fund Tokenization | Nomyx",
  description: "Automate your evergreen and open-ended funds with Nomyx. Replace quarterly drag with always-on efficiency, continuous subscriptions, and dynamic NAV updates.",
  alternates: {
    canonical: "https://www.nomyx.io/evergreen-open-ended-funds",
  },
};

export default function EvergreenOpenEndedFundsPage() {
  return <Evergreen />;
}
