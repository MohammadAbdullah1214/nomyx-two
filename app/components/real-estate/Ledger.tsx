"use client";

import { motion } from "motion/react";
import { Check, Database, FileText } from "lucide-react";
import { fadeUp, SectionIntro } from "../evergreen/shared";

const ledgerRows = [
  ["Sarah Chen", "150 Tokens"],
  ["Michael Torres", "200 Tokens"],
  ["Jessica Park", "100 Tokens"],
];

export const Ledger = () => (
  <section className="py-20 md:py-32">
    <div className="custom-container">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="mb-14 text-center"
      >
        <div className="eyebrow mb-4">Transfer Agent Layer</div>
        <h2 className="section-heading mb-6">Scale Your LP Base. Not Your Paperwork.</h2>
        <p className="mx-auto max-w-3xl text-[17px] leading-relaxed text-ink-muted md:text-lg">
          Raising capital from smaller investors usually means a cap table nightmare. Nomyx acts as a digital transfer agent, maintaining a real-time, immutable record of ownership for thousands of fractional holders.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-[#0A112824] bg-white lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="relative p-10 md:p-8 lg:10"
        >
          <div className="mb-8 text-[#2060D4]">
            <FileText size={45} strokeWidth={1.5} />
          </div>
          <h3 className="mb-4 text-[32px] font-semibold tracking-tight text-ink">
            Traditional Syndication
          </h3>
          <p className="mb-10 text-[15px] leading-relaxed text-ink-muted">
            Manual K-1s, scattered emails, outdated Excel sheets.
          </p>
          <div className="relative h-64 overflow-hidden rounded-xl border border-[#0A112810] bg-slate-50/50">
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                className="absolute h-24 w-20 border border-[#0A112810] bg-white shadow-sm"
                style={{
                  left: 60 + (index % 4) * 38,
                  top: 60 + Math.floor(index / 4) * 32,
                  rotate: `${-14 + index * 4}deg`,
                }}
                animate={{ y: [0, -5, 0], rotate: [-12 + index * 3, -8 + index * 3, -12 + index * 3] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.09 }}
              />
            ))}
          </div>
          <div className="absolute right-0 top-1/2 hidden h-1/2 w-px -translate-y-1/2 bg-[#0A112824] lg:block" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative overflow-hidden bg-[#1B243C] p-10 md:p-8 lg:10 text-white"
        >
          <div className="relative mb-8">
            <Database size={45} strokeWidth={1.5} className="text-white" />
          </div>
          <h3 className="relative mb-4 text-[32px] font-semibold tracking-tight text-white">
            Nomyx Ledger
          </h3>
          <p className="relative mb-12 text-[15px] leading-relaxed text-white/60">
            Automated ownership tracking, instant transfer recording, and digital K-1 distribution.
          </p>
          <div className="relative mb-8 flex border-b border-white/10 text-[14px] font-semibold">
            <div className="border-b-2 border-white px-2 pb-4 text-white">Investors</div>
            <div className="px-6 pb-4 text-white/40">Distribution History</div>
          </div>
          <div className="relative space-y-3">
            {ledgerRows.map(([name, tokens], index) => (
              <motion.div
                key={name}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.05] px-6 py-4 transition-colors hover:bg-white/[0.05]"
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.18 + index * 0.1 }}
              >
                <span className="text-[17px] font-bold text-white">{name}</span>
                <div className="flex items-center gap-6">
                  <span className="text-[12px] font-semibold uppercase tracking-widest text-white/40">
                    {tokens}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-md bg-[#2A344E] px-3 py-1.5 text-[12px] font-bold text-white shadow-sm">
                    <Check size={14} strokeWidth={3} className="text-white/80" />
                    Settled
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

