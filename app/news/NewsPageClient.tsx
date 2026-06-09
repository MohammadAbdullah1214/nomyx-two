"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { plainTextFromHtml } from "@/lib/blogs";
import type { NewsCategory, NewsPost } from "@/lib/news";

function fmtDate(value: string | null) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export default function NewsPageClient({
  news,
  categories,
  featuredNews,
}: {
  news: NewsPost[];
  categories: NewsCategory[];
  featuredNews: NewsPost | null;
}) {
  const [active, setActive] = useState("all");

  /* Merge featured into the list as the first item */
  const allItems = useMemo(() => {
    const base =
      active === "all" ? news : news.filter((n) => n.category_id === active);
    if (featuredNews && active === "all") {
      return [featuredNews, ...base];
    }
    return base;
  }, [news, active, featuredNews]);

  const allCats = [{ id: "all", name: "All" }, ...categories];

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden pt-32 pb-10 md:pt-40 md:pb-14"
        style={{
          background: "linear-gradient(to bottom, #D9EFFF 0%, #FFFFFF 100%)",
        }}
      >
        <div className="custom-container relative text-center">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow mb-6">Newsroom</p>
            <h1 className="text-display mb-6">The Latest From Nomyx</h1>
            <p className="mx-auto prgraphs text-ink-muted md:text-xl">
              Press releases, partner announcements, and industry news from the
              team building agile infrastructure for institutional capital.
            </p>
          </div>
        </div>
      </section>

      {/* ── FILTER + ROWS ── */}
      <section className="bg-white pb-20 md:pb-28 mx-auto max-w-[1250px]">
        <div className="custom-container">
          {/* Filter bar */}
          <div className="flex flex-wrap items-center gap-3 border-b border-border pb-5 pt-4">
            {allCats.map((cat) => {
              const on =
                cat.id === "all" ? active === "all" : active === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`inline-flex h-9 items-center rounded-full px-5 text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-200 ${
                    on
                      ? "bg-accent text-white shadow-[0_4px_12px_rgba(33,94,199,0.2)]"
                      : "border border-border text-ink-muted hover:border-accent hover:text-accent"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* News rows */}
          {allItems.length === 0 ? (
            <div className="py-20 text-center text-sm font-bold uppercase tracking-widest text-ink-muted">
              No articles in this category yet — check back soon.
            </div>
          ) : (
            <div>
              {allItems.map((item, i) => (
                <ArticleRow
                  key={item.id}
                  item={item}
                  reverse={i % 2 !== 0}
                  isFeatured={featuredNews?.id === item.id}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

/* ─── Article Row ─── */
function ArticleRow({
  item,
  reverse,
  isFeatured,
}: {
  item: NewsPost;
  reverse: boolean;
  isFeatured: boolean;
}) {
  const date = fmtDate(item.published_at);

  return (
    <Link href={`/news/${item.slug}`} className="group block">
      <article
        className={`grid grid-cols-1 items-center gap-8 border-b border-border py-12 md:grid-cols-[1fr_1fr] md:gap-16 lg:gap-20 ${
          isFeatured ? "md:py-16" : "md:py-12"
        }`}
      >
        {/* Text */}
        <div className={`${reverse ? "md:order-2" : "md:order-1"}`}>
          {/* Category */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="text-[12px] font-bold text-accent">
              {item.category?.name || "News"}
            </span>
            {isFeatured && (
              <>
                <span className="text-ink-muted/30">,</span>
                <span className="text-[12px] font-bold text-accent">
                  Featured
                </span>
              </>
            )}
          </div>

          {/* Title */}
          <h2
            className={`font-bold leading-[1.2] tracking-tight text-ink transition-colors duration-200 group-hover:text-accent ${
              isFeatured
                ? "mb-5 text-[26px] md:text-[34px]"
                : "mb-4 text-[22px] md:text-[28px]"
            }`}
          >
            {item.title}
          </h2>

          {/* Date */}
          <div className="mb-5 flex items-center gap-2">
            <span className="h-4 w-[2px] rounded-full bg-accent" />
            <span className="text-[13px] font-medium text-ink-muted">
              {date}
            </span>
          </div>

          {/* Excerpt */}
          <p className="mb-6 line-clamp-3 text-[15px] leading-relaxed text-ink-muted md:text-[16px]">
            {item.excerpt || plainTextFromHtml(item.content_html).slice(0, 180)}
          </p>

          {/* Read more link */}
          <span className="inline-flex items-center gap-2 text-[13px] font-bold text-accent transition-all duration-200 group-hover:gap-3">
            Read more
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </span>
        </div>

        {/* Image */}
        <div className={`${reverse ? "md:order-1" : "md:order-2"}`}>
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-ink">
            {item.cover_image_url ? (
              <img
                src={item.cover_image_url}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-ink text-xs font-bold uppercase tracking-widest text-white/30">
                No Image
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
