"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  mainFooterColumns,
  subFooterColumns,
  legalLinks,
  type FooterLink,
} from "@/app/components/footerNavigation";
import PreferredSourceButton from "@/app/components/PreferredSourceButton";
import { AnimatedButton } from "@/app/components/evergreen/shared";
import pageContent from "@/app/pageContent.json";

export interface FooterProps {
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
}

function NomyxLogoSvg() {
  return (
    <svg
      viewBox="0 0 272 44"
      fill="currentColor"
      role="img"
      aria-label="Nomyx"
      className="h-[30px] w-auto text-[#0A1128]"
    >
      <path d="M40.9149 1.52332V18.813L16.1899 1.52332V18.6398H0V36.3024H16.5449V19.4344L41.4474 36.8485V19.1859H57.4561V1.52332H40.9149Z" />
      <path d="M75.7348 33.0859V0.346267H81.4232V8.7187C83.6837 2.95463 88.758 0.0692138 93.144 0.0692138C102.125 0.0692138 106.714 5.56299 106.714 14.28V33.0859H100.823V14.895C100.823 9.06333 98.0833 5.35351 91.9834 5.35351C85.2019 5.35351 81.6324 9.61067 81.6324 16.1991V33.0859H75.7348Z" />
      <path d="M127.497 0C137.227 0 144.427 4.80452 144.427 16.6773C144.427 28.5501 137.234 33.4222 127.497 33.4222C117.76 33.4222 110.499 28.5501 110.499 16.6773C110.499 4.80452 117.767 0 127.497 0ZM138.462 16.6773C138.462 8.09538 134.211 5.21672 127.497 5.21672C120.783 5.21672 116.464 8.10214 116.464 16.6773C116.464 25.2524 120.85 28.2054 127.497 28.2054C134.143 28.2054 138.462 25.2524 138.462 16.6773Z" />
      <path d="M148.693 33.0844V0.344693H154.381V8.64955C156.365 4.45996 159.726 0.344693 165.691 0.0676394C170.279 -0.209414 175.563 1.8516 177.681 7.82515C180.974 1.64887 185.286 0.0676394 190.016 0.0676394C198.653 0.0676394 202.972 5.62899 202.972 14.2785V33.0844H197.081V14.8934C197.081 9.33205 194.679 5.35194 188.579 5.35194C181.932 5.35194 178.781 8.44007 178.781 14.7583V33.0844H172.89V14.8934C172.89 9.33205 170.488 5.35194 164.388 5.35194C157.742 5.35194 154.591 9.95373 154.591 16.1976V33.0844H148.693Z" />
      <path d="M222.537 38.4387C221.026 41.8038 217.672 44 214.042 44H206.363V39.405H213.151C215.209 39.405 217.058 38.1684 217.882 36.3168L219.116 33.6409L204.656 0.353882H210.823L221.998 26.5051H222.409L233.516 0.353882H239.339L222.544 38.4454L222.537 38.4387Z" />
      <path d="M241.027 33.1011C242.684 30.6439 244.25 28.3264 245.815 26.0062C247.786 23.086 249.748 20.1603 251.742 17.2511C252.032 16.8293 252.053 16.5416 251.76 16.1033C248.401 11.1067 245.072 6.09644 241.737 1.08614C241.598 0.880684 241.471 0.667013 241.281 0.365683C243.424 0.365683 245.463 0.316047 247.496 0.354398C247.672 0.354398 247.656 0.354398 247.656 0.354398C250.349 4.41688 253.459 9.03578 256.143 13.1037C256.282 13.3147 256.433 13.5174 256.613 13.7804C256.808 13.4955 256.971 13.2736 257.119 13.0435C259.738 8.99195 262.717 4.41414 265.321 0.354395C265.449 0.354386 265.385 0.354394 265.944 0.354726C267.84 0.387598 269.737 0.368422 271.759 0.368422C271.59 0.647838 271.469 0.858769 271.335 1.06148C268.009 6.07452 264.689 11.093 261.342 16.0951C261.055 16.5252 261.052 16.8128 261.342 17.2457C264.745 22.2697 268.125 27.3073 271.51 32.3396C271.652 32.5505 271.816 32.819 272 33.1011C271.747 33.1011 271.554 33.1011 271.377 33.1011C269.675 33.1038 267.974 33.0819 266.272 33.1148C265.739 33.1258 265.961 33.1148 265.513 33.1148C262.814 29.0277 259.732 24.3927 257.016 20.3165C256.885 20.1247 256.752 19.933 256.551 19.6426C256.376 19.8891 256.231 20.0809 256.098 20.2781C253.355 24.3653 250.202 29.0167 247.48 33.1175C247.032 33.1178 247.303 33.1258 246.771 33.1175C244.904 33.0847 243.036 33.1038 241.021 33.1038L241.027 33.1011Z" />
    </svg>
  );
}

export const Footer = ({
  ctaTitle = pageContent.cta.title,
  ctaDescription = pageContent.cta.description,
  ctaButtonText = pageContent.cta.button,
  ctaButtonLink = "https://bookings.cloud.microsoft/book/NomyxDiscoveryCall@nomyx.io/?ismsaljsauthenabled=true",
}: FooterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const handleToggle = () => {
    const nextOpen = !isOpen;
    setIsOpen(nextOpen);
    if (nextOpen) {
      setTimeout(() => {
        if (toggleButtonRef.current) {
          const r = toggleButtonRef.current.getBoundingClientRect();
          if (r.top > window.innerHeight * 0.55) {
            window.scrollBy({
              top: r.top - window.innerHeight * 0.25,
              behavior: "smooth",
            });
          }
        }
      }, 60);
    }
  };

  const renderLink = (link: FooterLink) => {
    const isHash = link.href?.includes("#");
    const isExternal = link.href?.startsWith("http");
    const isCurrent = Boolean(
      link.href &&
        !isHash &&
        !isExternal &&
        (link.href === "/"
          ? pathname === "/"
          : pathname?.replace(/\/$/, "") === link.href.replace(/\/$/, ""))
    );

    if (link.href && link.href !== "#") {
      if (isExternal) {
        return (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        );
      }
      return (
        <Link
          href={link.href}
          aria-current={isCurrent ? "page" : undefined}
        >
          {link.name}
        </Link>
      );
    }

    return (
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        aria-disabled="true"
        tabIndex={-1}
        className="opacity-75 cursor-default hover:!text-inherit"
      >
        {link.name}
      </a>
    );
  };

  return (
    <footer className="relative w-full bg-white overflow-hidden nx-footer" aria-label="Site footer">
      <div className="relative w-full bg-[#F2F9FF] rounded-t-[60px] md:rounded-t-[100px] pt-20 overflow-hidden">
        {/* Background Decorative Logos */}
        <img
          src="/footer-logo-left.png"
          alt=""
          className="absolute left-0 top-[20%] h-auto w-[20%] pointer-events-none opacity-60 z-0"
        />
        <img
          src="/footer-logo-right.png"
          alt=""
          className="absolute right-0 top-[10%] h-auto w-[20%] pointer-events-none opacity-60 z-0"
        />

        {/* CTA Content (rendered if ctaTitle is provided) */}
        {ctaTitle ? (
          <div className="custom-container relative z-10 mb-24 md:mb-32 text-center">
            <h2 className="section-heading mb-5">{ctaTitle}</h2>
            <p className="mx-auto mb-12 max-w-2xl text-[18px] text-[#42546E]">
              {ctaDescription}
            </p>
            <AnimatedButton
              text={ctaButtonText}
              href={ctaButtonLink}
              variant="accent"
              className="h-14 !px-10 !text-white"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        ) : null}

        {/* Main Footer */}
        <div className="nf-main relative z-10">
          <div className="nf-wrap nf-grid">
            <div className="nf-brand">
              <Link className="nf-logo" href="/" aria-label="Nomyx home">
                <NomyxLogoSvg />
              </Link>
              <p>The infrastructure layer for the future of capital.</p>
              <PreferredSourceButton />
            </div>

            {mainFooterColumns.map((column) => (
              <div key={column.title} className="nf-col">
                <h4>{column.title}</h4>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.name}>{renderLink(link)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Sub Footer Drawer */}
        <div className={`nf-sub ${isOpen ? "open" : ""} relative z-10`}>
          <button
            type="button"
            className="nf-toggle"
            id="nfToggle"
            ref={toggleButtonRef}
            aria-expanded={isOpen ? "true" : "false"}
            aria-controls="nfSubPanel"
            onClick={handleToggle}
          >
            <span className="nf-toggle-l">
              <span className="nf-open-t">Explore all Nomyx pages</span>
              <span className="nf-close-t">Hide all Nomyx pages</span>
            </span>
            <svg className="nf-chev" viewBox="0 0 12 8" aria-hidden="true">
              <path
                d="M1 1.5l5 5 5-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="nf-panel" id="nfSubPanel" role="region" aria-labelledby="nfToggle">
            <div className="nf-panel-in">
              <div className="nf-wrap nf-subgrid">
                {subFooterColumns.map((column) => (
                  <div key={column.title} className="nf-scol">
                    <h4>{column.title}</h4>
                    <ul>
                      {column.links.map((link) => (
                        <li key={link.name}>{renderLink(link)}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="nf-bottom relative z-10">
          <div className="nf-wrap nf-bottom-in">
            <span className="nf-copy">© 2026 NOMYX INC. ALL RIGHTS RESERVED.</span>
            <nav className="nf-legal" aria-label="Legal">
              {legalLinks.map((link) => (
                <Link key={link.name} href={link.href || "#"}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
