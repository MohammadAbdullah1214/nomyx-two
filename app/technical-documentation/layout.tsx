import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Technical Documentation | Nomyx",
  description: "Explore Nomyx technical documentation, strategic reports, and developer guides. Discover the compliant infrastructure powering the next generation of digital assets.",
  alternates: {
    canonical: "https://www.nomyx.io/technical-documentation",
  },
};

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return children;
}
