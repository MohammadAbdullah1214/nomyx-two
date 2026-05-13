"use client";

import { motion } from "motion/react";
import { ShieldCheck, UserCheck, Zap } from "lucide-react";
import { fadeUp, SectionIntro } from "../evergreen/shared";

export const Onboarding = () => (
  <section className="py-20 md:py-24">
    <div className="custom-container">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="mb-14 text-center"
      >
        <h2 className="section-heading">Onboard Investors In Minutes.</h2>
      </motion.div>

      <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-[#0A112824] bg-white md:grid-cols-3">
        {[
          [Zap, "Step 1", "Link-Based Invites", "Send a secure link to LPs. They connect their wallet and sign subscription docs digitally."],
          [UserCheck, "Step 2", "Instant KYC/KYB", "Integrated identity verification checks investor eligibility in real time."],
          [ShieldCheck, "Step 3", "Atomic Closing", "Funds move from LP wallet to the SPV smart contract instantly upon signing."],
        ].map(([Icon, step, title, text], index) => {
          const TypedIcon = Icon as typeof Zap;

          return (
            <motion.div
              key={title as string}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className={`group p-8 transition-colors hover:bg-slate-50/50 ${
                index !== 2 ? "border-b md:border-b-0 md:border-r" : ""
              } border-[#0A112824]`}
            >
              <div className="mb-7 text-[#2060D4]">
                <TypedIcon size={50} strokeWidth={1.5} />
              </div>
              <div className="mb-3 text-[11px] font-bold uppercase tracking-widest">
                {step as string}
              </div>
              <h3 className="mb-4 text-[24px] font-bold tracking-tight text-ink">
                {title as string}
              </h3>
              <p className="text-[15px] leading-relaxed text-ink-muted">{text as string}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

