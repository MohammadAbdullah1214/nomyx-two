"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus, Search } from "lucide-react";
import { FitReviewAction } from "../shared";
import {
  bookingUrl,
  categoryFilters,
  categoryLabels,
  companies,
  type CategoryId,
} from "./content";

function getCategoryCount(categoryId: CategoryId) {
  if (categoryId === "all") return companies.length;
  return companies.filter((company) =>
    (company.categories as readonly string[]).includes(categoryId),
  ).length;
}

export default function CompareCatalog() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const trimmedQuery = query.trim();
  const normalizedQuery = trimmedQuery.toLowerCase();

  const filteredCompanies = companies.filter((company) => {
    const matchesCategory =
      activeCategory === "all" ||
      (company.categories as readonly string[]).includes(activeCategory);
    const matchesQuery =
      normalizedQuery === "" ||
      company.name.toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesQuery;
  });

  const activeCategoryLabel =
    categoryFilters.find((category) => category.id === activeCategory)?.label ??
    "All";

  const countText =
    filteredCompanies.length === companies.length
      ? `Showing all ${companies.length} companies`
      : `Showing ${filteredCompanies.length} of ${companies.length} companies${
          activeCategory !== "all" ? ` in ${activeCategoryLabel}` : ""
        }${trimmedQuery ? ` matching "${trimmedQuery}"` : ""}`;

  return (
    <>
      <div className="htools">
        <label className="hsearch">
          <Search size={18} strokeWidth={1.8} aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search companies"
            autoComplete="off"
            aria-label="Search companies"
          />
        </label>
        <div className="hchips" role="group" aria-label="Filter by use case">
          {categoryFilters.map((category) => {
            const isSelected = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                className={`hchip${isSelected ? " on" : ""}`}
                aria-pressed={isSelected}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
                <span className="cnt">{getCategoryCount(category.id)}</span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="hcount" aria-live="polite">
        {countText}
      </p>

      {filteredCompanies.length > 0 ? (
        <div className="hgrid">
          {filteredCompanies.map((company) => (
            <article className="hcard" key={company.id}>
              <div className="hc-logo">
                <img
                  className="firm-logo"
                  style={{ "--ls": company.logoScale } as CSSProperties}
                  src={company.logo}
                  alt={`${company.name} logo`}
                />
              </div>
              <h3 className="sr-only">{company.name}</h3>
              <div className="hc-tags">
                {company.categories.map((categoryId) => (
                  <span className="hc-tag" key={categoryId}>
                    {categoryLabels[categoryId]}
                  </span>
                ))}
              </div>
              <p className="hc-blurb">{company.blurb}</p>
              <div className="hc-links">
                <span className="hc-lbl">Compared in</span>
                {company.links.map((link) => (
                  <Link className="hc-link" href={link.href} key={link.href}>
                    <span>{link.label}</span>
                    <ArrowRight
                      size={13}
                      strokeWidth={1.9}
                      className="hc-arrow"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </article>
          ))}

          <article className="hcard hc-other">
            <span className="g-ico" aria-hidden="true">
              <Plus size={20} strokeWidth={1.8} />
            </span>
            <h3 className="hc-oname">Not on the list?</h3>
            <p className="hc-blurb">
              Evaluating another provider? We&apos;ll compare it with Nomyx in
              an Infrastructure Fit Review, using the same tests as these pages.
            </p>
            <div className="hc-links">
              <a
                className="hc-link"
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Book an Infrastructure Fit Review</span>
                <ArrowRight
                  size={13}
                  strokeWidth={1.9}
                  className="hc-arrow"
                  aria-hidden="true"
                />
              </a>
            </div>
          </article>
        </div>
      ) : (
        <div className="hempty">
          <strong>No company matches that search.</strong>
          <p>
            Not on the list? Book a Fit Review and we&apos;ll compare Nomyx with
            the provider you are evaluating.
          </p>
          <div className="hempty-action">
            <FitReviewAction />
          </div>
        </div>
      )}
    </>
  );
}

