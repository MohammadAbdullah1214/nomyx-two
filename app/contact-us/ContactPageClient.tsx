"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactPageClient() {
  return (
    <>
      {/* ── HERO (Compact & consistent with News page) ── */}
      <section
        className="relative overflow-hidden pt-28 pb-8 md:pt-36 md:pb-12 w-full"
        style={{
          background: "linear-gradient(to bottom, #D9EFFF 0%, #FFFFFF 100%)",
        }}
      >
        <div className="custom-container relative text-center w-full">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow mb-3 md:mb-4 text-xs font-bold uppercase tracking-[0.14em] text-accent">
              Get in Touch
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold text-ink mb-4 tracking-tight">
              Talk to the Nomyx team.
            </h1>
            <p className="mx-auto text-base md:text-lg text-ink-muted max-w-2xl leading-relaxed">
              Questions about the platform, a partnership, investor relations, or press? Send us a message and the right person will get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT (Full Container Width 2-Column Grid) ── */}
      <section className="bg-white pb-16 md:pb-24 w-full">
        <div className="custom-container w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start w-full">
            {/* Form Card (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-[#DCE3EE] rounded-2xl p-6 sm:p-8 xl:p-10 shadow-[0_12px_40px_-20px_rgba(10,17,40,0.12)]">
              <h2 className="text-xl md:text-2xl font-semibold text-ink tracking-tight">
                Send us a message
              </h2>
              <p className="mt-1 text-xs md:text-sm text-[#6B7690]">
                Fields marked <span className="text-[#C40000] font-semibold">*</span> are required.
              </p>

              <ContactForm />

              <p className="mt-5 text-xs text-[#6B7690] leading-relaxed border-t border-[#E8EDF4] pt-4">
                We use your details to reply to your message. The updates checkbox is optional. See our{" "}
                <Link href="/legal-documents/privacy-notice" className="text-accent underline underline-offset-2">
                  Privacy Notice
                </Link>
                .
              </p>
            </div>

            {/* Aside Column (5 cols) */}
            <aside className="lg:col-span-5 flex flex-col gap-5" aria-label="Other ways to reach Nomyx">
              {/* Ready for a Demo Card */}
              <div className="bg-[#1B243C] text-white border border-[#1B243C] rounded-2xl p-6 md:p-8 shadow-[0_10px_35px_-15px_rgba(27,36,60,0.3)]">
                <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight">
                  Ready for a demo?
                </h3>
                <p className="mt-2 text-sm text-[#C8D2E5] leading-relaxed">
                  Skip the form and pick a time for a discovery call with the team.
                </p>
                <a
                  href="https://bookings.cloud.microsoft/book/NomyxDiscoveryCall@nomyx.io/?ismsaljsauthenabled=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-white text-ink text-sm font-semibold transition-all hover:bg-[#EAF1FD]"
                >
                  Book a discovery call
                  <ArrowRight size={14} className="text-accent" />
                </a>
              </div>

              {/* What Happens Next Card */}
              <div className="bg-white border border-[#DCE3EE] rounded-2xl p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-semibold text-ink tracking-tight">
                  What happens next
                </h3>
                <ol className="mt-4 space-y-3.5">
                  <li className="flex items-start gap-3 text-sm text-[#42546E] leading-relaxed">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EAF1FD] text-accent font-bold text-xs flex items-center justify-center mt-0.5">
                      1
                    </span>
                    <span>
                      <strong className="text-ink font-semibold">Your message goes to the Nomyx team,</strong> along with the reason you chose.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#42546E] leading-relaxed">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EAF1FD] text-accent font-bold text-xs flex items-center justify-center mt-0.5">
                      2
                    </span>
                    <span>
                      <strong className="text-ink font-semibold">We reply by email</strong> to the work email you give us.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#42546E] leading-relaxed">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EAF1FD] text-accent font-bold text-xs flex items-center justify-center mt-0.5">
                      3
                    </span>
                    <span>
                      <strong className="text-ink font-semibold">For platform questions,</strong> we may suggest a short call to understand your assets and workflows.
                    </span>
                  </li>
                </ol>
              </div>

              {/* Looking for something else? Card */}
              <div className="bg-white border border-[#DCE3EE] rounded-2xl p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-semibold text-ink tracking-tight mb-2">
                  Looking for something else?
                </h3>
                <nav className="flex flex-col divide-y divide-[#E8EDF4]" aria-label="Other resources">
                  <Link
                    href="/news"
                    className="flex items-center justify-between py-3 text-sm font-medium text-ink hover:text-accent transition-colors group"
                  >
                    <span>Press and news</span>
                    <ArrowRight size={14} className="text-accent transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/technical-documentation"
                    className="flex items-center justify-between py-3 text-sm font-medium text-ink hover:text-accent transition-colors group"
                  >
                    <span>Technical documentation</span>
                    <ArrowRight size={14} className="text-accent transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/developers"
                    className="flex items-center justify-between py-3 text-sm font-medium text-ink hover:text-accent transition-colors group"
                  >
                    <span>Developers and APIs</span>
                    <ArrowRight size={14} className="text-accent transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/legal-documents/msa"
                    className="flex items-center justify-between py-3 text-sm font-medium text-ink hover:text-accent transition-colors group"
                  >
                    <span>Legal documents</span>
                    <ArrowRight size={14} className="text-accent transition-transform group-hover:translate-x-1" />
                  </Link>
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
