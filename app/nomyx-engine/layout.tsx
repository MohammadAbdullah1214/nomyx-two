import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.nomyx.io/nomyx-engine",
  },
};

export default function NomyxEngineLayout({ children }: { children: ReactNode }) {
  return children;
}
