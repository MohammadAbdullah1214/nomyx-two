"use client";

import { motion } from "motion/react";
import { Banknote, Clock3 } from "lucide-react";
import { fadeUp, AnimatedButton } from "../evergreen/shared";

export const RentDistribution = () => (
  <section className="relative overflow-hidden bg-[#FAFAFA] py-20 md:py-32">
    {/* Decorative Radial Gradients */}
    <div className="pointer-events-none absolute -right-[10%] -top-[10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(32,96,212,0.06)_0%,transparent_70%)]" />
    <div className="pointer-events-none absolute -bottom-[10%] -left-[10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(32,96,212,0.06)_0%,transparent_70%)]" />

    <div className="custom-container relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
      {/* Dashboard Visual (Left) */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="overflow-hidden rounded-2xl border border-[#0A112815] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
      >
        <div className="bg-[#2060D4] pl-8 py-6 text-white">
          <div className="mb-2 text-2xl font-semibold tracking-tight">
            Property Dashboard
          </div>
          <div className="text-[15px] font-medium text-white/70">123 Main Street, Manhattan</div>
        </div>

        <div className="p-8">
          <div className="mb-6 flex items-center justify-between text-[16px]">
            <span className="font-bold text-ink-muted">Net Rental Income</span>
            <span className="font-bold text-ink">$125,000</span>
          </div>
          
          <div className="relative mb-8">
            <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#0A1128] py-4 text-[15px] font-bold text-white transition-all hover:bg-ink/90 active:scale-[0.98]">
              Distribute To Holders
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
            </button>
          </div>

          <div className="mb-4 text-[11px] font-bold uppercase tracking-widest text-ink-muted/60">
            Distribution Results
          </div>
          <div className="space-y-2">
            {["0x742d...3f21", "0x8a3c...7e19", "0x5f1b...2d84", "0x9e2a...6c45"].map((wallet, index) => (
              <motion.div
                key={wallet}
                className="flex items-center justify-between rounded-lg border border-[#0A112808] bg-slate-50/50 px-5 py-3 text-[14px]"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="font-medium text-ink-muted">{wallet}</span>
                <span className="font-bold text-[#2060D4]">+$1,250.00 USDC</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Content (Right) */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        <div className="eyebrow mb-6">Distribution Automation</div>
        <h2 className="section-heading mb-8">Rent Distributions on Autopilot.</h2>
        <p className="prgraphs mb-12">
          Distribute rental income to hundreds of investors in a single click. The smart contract calculates the pro-rata share based on tokens held at the time of the snapshot and distributes USDC instantly.
        </p>

        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-[#0A112824] bg-white sm:grid-cols-2">
          {[
            [Clock3, "12 sec", "Distribution Time"],
            [Banknote, "$5", "Gas Cost"],
          ].map(([Icon, value, label], index) => {
            const TypedIcon = Icon as typeof Clock3;
            return (
              <div key={label as string} className={`relative p-8 ${index === 0 ? "border-b border-[#0A112824] sm:border-b-0 sm:border-r" : ""}`}>
                <TypedIcon className="mb-3 text-[#2060D4]" size={32} strokeWidth={2} />
                <div className="mb-1 text-[32px] font-bold tracking-tight text-ink">{value as string}</div>
                <div className="text-[13px] font-semibold tracking-widest text-[#42546E]">{label as string}</div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </section>
);
