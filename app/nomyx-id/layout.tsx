import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Onchain Identity & Compliance Infrastructure | Nomyx",
  description: "Nomyx ID provides advanced on-chain identity and compliance infrastructure. Secure tokenized assets with automated KYC/AML rules and biometric wallet recovery.",
  alternates: {
    canonical: "https://www.nomyx.io/nomyx-id",
  },
};

export default function NomyxIdLayout({ children }: { children: ReactNode }) {
  return children;
}
