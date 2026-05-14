"use client";

import { motion } from "motion/react";
import { ChartNoAxesCombined, LockKeyhole, TimerReset, TrendingUp } from "lucide-react";
import { fadeUp, SectionIntro } from "../evergreen/shared";

export const LiquidityPremium = () => (
  <section className="py-20 md:py-32">
    <div className="custom-container">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
        className="mb-14 text-center"
      >
        <h2 className="section-heading mb-4">The Liquidity Premium.</h2>
        <p className="text-[17px] text-ink-muted">Don't lock your investors in for 7 years. Offer them an exit.</p>
      </motion.div>

      <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-[#0A112815] bg-white lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="relative flex flex-col bg-[#1B243C] p-10 text-white lg:p-8"
        >
          <ChartNoAxesCombined className="mb-8 text-white" size={38} strokeWidth={1.5} />
          <h3 className="mb-3 text-[25px] font-semibold tracking-tight">
            Private Secondary Trading
          </h3>
          <p className="text-[15px] leading-relaxed text-white/60">
            Enable a private, white-label bulletin board where approved investors can trade their property shares peer-to-peer. You control the trading windows and the eligible buyers.
          </p>
        </motion.div>

        {[
          [LockKeyhole, "Controlled Access", "Approved buyers only"],
          [TimerReset, "Trading Windows", "Set your own schedule"],
          [TrendingUp, "Price Discovery", "Market-driven valuations"],
        ].map(([Icon, title, text], index) => {
          const TypedIcon = Icon as typeof LockKeyhole;
          return (
            <motion.div
              key={title as string}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`relative flex flex-col justify-center p-8 transition-colors hover:bg-slate-50/50 lg:p-12 ${
                index !== 2 ? "lg:border-r lg:border-[#0A112815]" : ""
              } border-b border-[#0A112815] lg:border-b-0`}
            >
              <TypedIcon className="mb-6 text-[#2060D4]" size={40} strokeWidth={1.5} />
              <h4 className="mb-4 text-[22px] font-bold tracking-tight text-ink">
                {title as string}
              </h4>
              <p className="text-[15px] leading-relaxed text-[#42546E]">{text as string}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

