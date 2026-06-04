import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.nomyx.io/nomyx-gateway",
  },
};

export default function NomyxGatewayLayout({ children }: { children: ReactNode }) {
  return children;
}
