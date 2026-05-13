"use client";

import { motion } from "motion/react";
import { Check, FileCheck2, Users } from "lucide-react";
import { fadeUp, forceHomeNavigation, AnimatedButton } from "../evergreen/shared";

const AnimatedHeadline = () => {
  const words = "Spin Up Compliant SPVs In Hours, Not Weeks.".split(" ");
  return (
    <motion.h1 
      className="text-display mb-8 mt-1"
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.08 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={fadeUp}
          className="mr-[0.18em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export const SpvHero = () => (
  <section 
    className="relative overflow-hidden text-ink pt-18"
    style={{
      background: "linear-gradient(to bottom, #D9EFFF 0%, #FFFFFF 100%)"
    }}
  >
    <div className="custom-container relative grid grid-cols-1 items-center gap-12 py-24 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.div variants={fadeUp} className="eyebrow">
          Solution: Deal-By-Deal Structuring
        </motion.div>
        <AnimatedHeadline />
        <motion.p variants={fadeUp} className="prgraphs mb-20 md:text-xl">
          {"The fastest way to syndicate deals. Automate capital formation, cap table management, and carry distribution for single-asset vehicles."
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className="mr-1 inline-block"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                {word}
              </motion.span>
            ))}
        </motion.p>
        <motion.div variants={fadeUp}>
          <AnimatedButton
            href="https://calendly.com/ivan-j-nomyx"
            text="Start Your Syndication"
            variant="accent"
            className="h-11 !px-7"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative flex justify-end"
      >
        <img
          src="/spvs-deal-syndication-hero.png"
          alt="SPVs Deal Syndication"
          className="w-[600px] h-auto object-contain"
        />
      </motion.div>
    </div>
  </section>
);

