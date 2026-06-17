import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tokenization APIs & Developer Docs | Nomyx",
  description: "Build on Nomyx with our robust developer APIs. Integrate banking-grade tokenization, identity, and compliance infrastructure directly into your application.",
  alternates: {
    canonical: "https://www.nomyx.io/developers",
  },
};

export default function DevelopersLayout({ children }: { children: ReactNode }) {
  return children;
}
