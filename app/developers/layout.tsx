import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Tokenization APIs & Developer Docs | Nomyx",
  description: "Build on Nomyx with our robust developer APIs. Integrate banking-grade tokenization, identity, and compliance infrastructure directly into your application.",
  pathname: "/developers",
});

export default function DevelopersLayout({ children }: { children: ReactNode }) {
  return children;
}
