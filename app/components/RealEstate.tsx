"use client";

import { CustomCursor, Footer, Navbar } from "../home";
import { RealEstateHero } from "./real-estate/Hero";
import { Ledger } from "./real-estate/Ledger";
import { RentDistribution } from "./real-estate/RentDistribution";
import { LiquidityPremium } from "./real-estate/LiquidityPremium";

export default function RealEstate() {
  return (
    <div className="min-h-screen bg-bg font-sans text-ink">
      <CustomCursor />
      <Navbar />

      <main>
        <RealEstateHero />
        <Ledger />
        <RentDistribution />
        <LiquidityPremium />
      </main>

      <Footer 
        ctaTitle="Turn Your Property Into A Liquid Asset."
        ctaDescription="Unlock liquidity and reach global investors. Join the asset managers moving billions on-chain with Nomyx."
        ctaButtonText="Start A Real Estate Pilot"
        ctaButtonLink="https://calendly.com/ivan-j-nomyx"
      />
    </div>
  );
}

