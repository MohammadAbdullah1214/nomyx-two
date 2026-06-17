import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tokenization Engine for Asset Managers | Nomyx",
  description: "Nomyx Engine is the ultimate operating system for digital assets. Issue, manage, and distribute compliant tokenized assets with infinite upgradability.",
  alternates: {
    canonical: "https://www.nomyx.io/nomyx-engine",
  },
};

export default function NomyxEngineLayout({ children }: { children: ReactNode }) {
  return children;
}
