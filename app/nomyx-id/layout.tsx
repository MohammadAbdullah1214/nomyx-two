import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.nomyx.io/nomyx-id",
  },
};

export default function NomyxIdLayout({ children }: { children: ReactNode }) {
  return children;
}
