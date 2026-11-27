import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Tokenization Engine for Asset Managers | Nomyx",
  description: "Nomyx Engine is the ultimate operating system for digital assets. Issue, manage, and distribute compliant tokenized assets with infinite upgradability.",
  pathname: "/nomyx-engine",
});

export default function NomyxEngineLayout({ children }: { children: ReactNode }) {
  return children;
}
