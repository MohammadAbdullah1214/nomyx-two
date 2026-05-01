"use client";

import { motion } from "motion/react";
import { Search, BookOpen, FileText, ArrowUpRight, Code, Terminal, CheckCircle, Copy, Download, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { CustomCursor, Navbar, Footer } from "@/app/home";

/* ── Resources Hero Section ── */
const ResourcesHero = () => (
  <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
    {/* Decorative background elements */}
    <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />
    <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-50/50 blur-[120px] pointer-events-none" />

    <div className="custom-container relative z-10 w-full">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center justify-center px-5 py-2 bg-emerald-50 border border-emerald-100 rounded-full mb-8 shadow-sm"
        >
          <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-widest text-center">Institutional Library</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-ink tracking-tight leading-[1.05] mb-6"
        >
          Insights, Documentation, <br className="hidden md:block" />
          and Research.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-ink-muted leading-relaxed font-medium max-w-2xl mx-auto mb-10"
        >
          Explore our technical guides, strategic reports, and developer documentation to understand the infrastructure powering the next generation of assets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <button className="h-14 px-8 rounded-full bg-accent text-white font-bold text-sm hover:bg-accent/90 transition-all shadow-[0_8px_24px_rgba(30,58,138,0.25)] hover:shadow-[0_12px_32px_rgba(30,58,138,0.35)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group mx-auto">
            Visit Developer Docs
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ── Build on Nomyx (Creative Refactor) ── */
const BuildOnNomyx = () => (
  <section className="section-padding bg-slate-50 relative overflow-hidden">
    {/* Grid Background Pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    
    <div className="custom-container relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-6 shadow-sm"
        >
          <Code size={14} className="text-blue-600" />
          <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest">Developer Hub</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-ink tracking-tight leading-[1.05] mb-6"
        >
          Integrate with a <br className="hidden sm:block" />
          few lines of code.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto"
        >
          Access our comprehensive API references, SDKs, and smart contract architecture guides. Everything your engineering team needs to go to market instantly.
        </motion.p>
      </div>

      {/* Developer Bento Box */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Massive Code Editor (Spans 2 columns) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 bg-[#0B1120] rounded-[2rem] shadow-xl overflow-hidden border border-slate-800 flex flex-col group"
        >
          <div className="px-5 py-4 border-b border-slate-800/60 flex items-center justify-between bg-[#0B1120]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <div className="text-xs font-mono text-slate-500">nomyx-integration.ts</div>
            <div className="text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
              <Copy size={14} />
            </div>
          </div>
          <div className="p-6 md:p-8 font-mono text-[13px] md:text-sm leading-loose overflow-x-auto text-slate-300 flex-1">
            <span className="text-fuchsia-400">import</span> {'{'} NomyxClient {'}'} <span className="text-fuchsia-400">from</span> <span className="text-emerald-300">'@nomyx/sdk'</span>;<br/><br/>
            
            <span className="text-slate-500">// Initialize the secure banking-grade client</span><br/>
            <span className="text-fuchsia-400">const</span> client = <span className="text-fuchsia-400">new</span> <span className="text-amber-300">NomyxClient</span>({'{'}<br/>
            &nbsp;&nbsp;apiKey: process.env.<span className="text-sky-300">NOMYX_API_KEY</span>,<br/>
            &nbsp;&nbsp;environment: <span className="text-emerald-300">'production'</span>,<br/>
            {'}'});<br/><br/>

            <span className="text-slate-500">// Mint a new tokenized asset instantly</span><br/>
            <span className="text-fuchsia-400">const</span> asset = <span className="text-fuchsia-400">await</span> client.assets.<span className="text-sky-300">tokenize</span>({'{'}<br/>
            &nbsp;&nbsp;type: <span className="text-emerald-300">'REAL_ESTATE'</span>,<br/>
            &nbsp;&nbsp;valuation: <span className="text-orange-300">24500000</span>,<br/>
            &nbsp;&nbsp;compliance: <span className="text-emerald-300">'REG_D'</span><br/>
            {'}'});<br/><br/>

            <span className="text-sky-300">console</span>.<span className="text-sky-300">log</span>(<span className="text-emerald-300">`Asset minted: {'${'}asset.contractAddress{'}'}`</span>);
          </div>
        </motion.div>

        {/* Stacked Right Column */}
        <div className="flex flex-col gap-6">
          
          {/* Terminal Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#0B1120] rounded-[2rem] p-6 md:p-8 shadow-xl border border-slate-800 flex-1 flex flex-col justify-center font-mono"
          >
            <div className="flex items-center text-emerald-400 mb-6 gap-2">
              <Terminal size={18} />
              <span className="text-[13px] font-bold tracking-wider">TERMINAL</span>
            </div>
            <div className="text-sm md:text-base text-slate-300 mb-4">
              <span className="text-emerald-400 mr-2">$</span>npm install @nomyx/sdk
            </div>
            <div className="text-xs md:text-sm text-slate-500 mb-4">Fetching packages...</div>
            <div className="text-[13px] md:text-sm font-semibold text-emerald-400 flex items-center gap-2">
              <CheckCircle size={16} /> Installed successfully.
            </div>
          </motion.div>

          {/* CTA Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-accent rounded-[2rem] p-8 shadow-xl border border-accent/80 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-accent/90 transition-colors"
          >
            <h3 className="text-white font-black text-2xl mb-2">Read the Docs</h3>
            <p className="text-blue-200 text-sm font-medium mb-6">Explore the full API reference.</p>
            <div className="w-14 h-14 rounded-full bg-white text-accent flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <ArrowUpRight size={28} strokeWidth={3} />
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  </section>
);

/* ── Ebook Feature ── */
const EbookFeature = () => (
  <section className="section-padding bg-white relative overflow-hidden">
    <div className="custom-container relative z-10">
      
      <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-[0_8px_30px_rgba(10,17,40,0.04)] border border-border relative overflow-hidden">
        {/* Decorative subtle glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Book Cover Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full max-w-[340px] aspect-[3/4]"
            >
              <Image 
                src="/ebook-cover.png"
                alt="Why Tokenize My Fund? eBook Cover"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-sm font-bold text-slate-400 tracking-wide"
            >
              Read by 500+ Asset Managers.
            </motion.p>
          </motion.div>

          {/* Right: Text Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-8 shadow-sm"
            >
              <FileText size={14} className="text-accent" />
              <span className="text-[11px] font-bold text-accent uppercase tracking-widest">Definitive Guide</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-ink tracking-tight leading-[1.1] mb-6"
            >
              Why Tokenize My Fund?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-ink-muted leading-relaxed mb-8 font-medium"
            >
              Unlock the liquidity premium. Download our definitive guide on operational efficiency, secondary markets, and the shift to 'Institutional-Native' funds.
            </motion.p>

            <motion.ul 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 mb-10"
            >
              {[
                "The ROI of tokenization for fund managers",
                "Step-by-step implementation roadmap",
                "Compliance and regulatory considerations",
                "Case studies from leading institutions"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-ink-muted font-medium">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <button className="h-14 px-8 rounded-xl bg-accent text-white font-bold text-base hover:bg-accent/90 transition-all shadow-[0_8px_24px_rgba(30,58,138,0.25)] hover:shadow-[0_12px_32px_rgba(30,58,138,0.35)] hover:-translate-y-1 flex items-center justify-center gap-3">
                <Download size={20} />
                Download PDF
              </button>
            </motion.div>
          </div>

        </div>
      </div>

    </div>
  </section>
);

/* ── Final CTA ── */
const ResourcesCTA = () => (
  <section className="pt-32 pb-40 bg-[#0A1128] relative overflow-hidden">
    {/* Decorative background effects */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-10" />

    <div className="custom-container relative z-10">
      <div className="text-center max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.1]"
        >
          Need a deeper dive?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium mb-10"
        >
          Schedule a personalized walkthrough with our technical team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button className="h-14 px-10 rounded-full bg-accent text-white font-bold text-base hover:bg-accent/90 transition-all duration-300 shadow-[0_8px_32px_rgba(37,99,235,0.4)] hover:shadow-[0_16px_48px_rgba(37,99,235,0.6)] hover:-translate-y-1 inline-flex items-center justify-center gap-3 group">
            Schedule a Technical Demo
            <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <CustomCursor />
      <Navbar />

      <main>
        <ResourcesHero />
        <BuildOnNomyx />
        <EbookFeature />
        <ResourcesCTA />
      </main>

      <Footer />
    </div>
  );
}
