import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Technical Documentation | Nomyx",
  description: "Explore Nomyx technical documentation, strategic reports, and developer guides. Discover the compliant infrastructure powering the next generation of digital assets.",
  pathname: "/technical-documentation",
});

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return children;
}
