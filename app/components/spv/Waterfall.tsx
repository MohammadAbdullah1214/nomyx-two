"use client";

import { motion } from "motion/react";
import { Check, Calculator, Eye, Zap } from "lucide-react";
import { fadeUp, SectionIntro } from "../evergreen/shared";

const steps = [
  ["Step 1", "Return Of Capital", "LP principal returned first", "100%"],
  ["Step 2", "Preferred Return (Hurdle)", "Target return threshold", "8%"],
  ["Step 3", "Carried Interest", "Split: LPs get 80%, GP gets 20%", "80/20"],
];

export const Waterfall = () => (
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
        <h2 className="section-heading">Perfect Waterfalls.<br />Zero Spreadsheets.</h2>
      </motion.div>

      <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          {steps.map(([label, title, text, value], index) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative rounded-xl border border-[#0A112824] bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#2060D4]">
                    {label}
                  </div>
                  <h3 className="text-[23px] font-bold text-ink">
                    {title}
                  </h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-muted">{text}</p>
                </div>
                <div className="text-3xl font-bold text-[#2060D4]">{value}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="flex h-full flex-col rounded-2xl border border-[#0A112824] bg-white p-8 md:p-12"
        >
          <div className="mb-8 flex items-center gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#0A112824] text-[#2060D4]">
              <Calculator size={26} />
            </div>
            <h2 className="text-[28px] font-bold leading-tight tracking-tight text-ink lg:text-[32px]">
              Program Your Carry Logic.
            </h2>
          </div>
          <p className="mb-10 text-[17px] leading-relaxed text-ink-muted">
            Forget manual calculations at exit. Encode your LP preferences, hurdle rates, and GP catch-up logic directly into the SPV smart contract. When the exit happens, funds distribute instantly according to the code.
          </p>
          <div className="space-y-6">
            {[
              [Zap, "No Spreadsheet Errors", "Calculations execute automatically on-chain"],
              [Check, "Instant Settlement", "Funds flow to wallets in seconds, not days"],
              [Eye, "Full Transparency", "Every LP can verify the distribution logic"],
            ].map(([Icon, title, text]) => {
              const TypedIcon = Icon as typeof Zap;
              return (
                <div key={title as string} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#0A112824] text-[#2060D4]">
                    <TypedIcon size={18} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-ink">{title as string}</h3>
                    <p className="text-[14px] leading-relaxed text-ink-muted">{text as string}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

