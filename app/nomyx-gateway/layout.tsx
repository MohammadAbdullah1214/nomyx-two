import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Asset Distribution & Liquidity Infrastructure | Nomyx",
  description: "Deploy a branded, compliant marketplace with Nomyx Gateway. Manage the entire lifecycle of your digital assets from primary issuance to secondary trading.",
  pathname: "/nomyx-gateway",
});

export default function NomyxGatewayLayout({ children }: { children: ReactNode }) {
  return children;
}
