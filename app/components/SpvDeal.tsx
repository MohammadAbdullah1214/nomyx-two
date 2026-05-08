"use client";

import { CustomCursor, Footer, Navbar } from "../home";
import { SpvHero } from "./spv/Hero";
import { Waterfall } from "./spv/Waterfall";
import { Onboarding } from "./spv/Onboarding";

export default function SpvDeal() {
  return (
    <div className="min-h-screen bg-bg font-sans text-ink">
      <CustomCursor />
      <Navbar />

      <main>
        <SpvHero />
        <Waterfall />
        <Onboarding />
      </main>

      <Footer 
        ctaTitle="Ready For Your Next Deal?"
        ctaDescription="Launch your next compliant SPV in minutes. Join the asset managers moving billions on-chain with Nomyx."
        ctaButtonText="Launch An SPV Demo"
        ctaButtonLink="https://calendly.com/ivan-j-nomyx"
      />
    </div>
  );
}

