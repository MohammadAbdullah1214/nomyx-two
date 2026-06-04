import type { Metadata } from "next";

import Evergreen from "../components/Evergreen";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.nomyx.io/evergreen-open-ended-funds",
  },
};

export default function EvergreenOpenEndedFundsPage() {
  return <Evergreen />;
}
