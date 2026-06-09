"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
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

  const filtered = useMemo(
    () => (active === "all" ? news : news.filter((n) => n.category_id === active)),
    [news, active]
  );

  const allCats = [{ id: "all", name: "All" }, ...categories];

  return (
    <>
      {/* ─────────────────────────────────────────────
          HERO
      ───────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(180deg, #D9EFFF 0%, #ffffff 100%)",
          paddingTop: "clamp(6rem, 10vw, 8.5rem)",
          paddingBottom: "clamp(3rem, 5vw, 5rem)",
        }}
      >
        <div className="custom-container">
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span className="eyebrow" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase"}}>
              Newsroom
            </span>
          </div>

          {/* Headline row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "clamp(2rem, 6vw, 6rem)",
              marginBottom: "clamp(2.5rem, 5vw, 4rem)",
              flexWrap: "wrap",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "#0A1128",
                margin: 0,
                flexShrink: 0,
              }}
            >
              The latest from
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #1a50c0, #4a8ee8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Nomyx.
              </span>
            </h1>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: "rgba(10,17,40,0.5)",
                maxWidth: 360,
                margin: 0,
                paddingBottom: 4,
              }}
            >
              Press releases, partner announcements, and industry news from the team
              building agile infrastructure for institutional capital.
            </p>
          </div>

          {/* ── FEATURED CARD ── */}
          {featuredNews && (
            <Link
              href={`/news/${featuredNews.slug}`}
              className="group"
              style={{ display: "block", textDecoration: "none" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1.1fr",
                  borderRadius: 18,
                  overflow: "hidden",
                  border: "1px solid rgba(10,17,40,0.09)",
                  background: "#fff",
                  boxShadow: "0 4px 32px rgba(10,17,40,0.06), 0 1px 4px rgba(10,17,40,0.04)",
                  transition: "box-shadow 0.3s ease",
                }}
                className="flex flex-col md:grid group-hover:shadow-[0_12px_48px_rgba(10,17,40,0.11)]"
              >
                {/* Left: text panel */}
                <div
                  style={{
                    padding: "clamp(2rem, 3.5vw, 3rem)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 0,
                    borderRight: "1px solid rgba(10,17,40,0.06)",
                  }}
                >
                  {/* Meta */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#2060D4",
                        background: "#EEF4FF",
                        padding: "4px 10px",
                        borderRadius: 99,
                      }}
                    >
                      {featuredNews.category?.name || "News"}
                    </span>
                    <span style={{ fontSize: 12, color: "rgba(10,17,40,0.38)", fontWeight: 500 }}>
                      {fmtDate(featuredNews.published_at)}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    style={{
                      fontSize: "clamp(1.2rem, 2vw, 1.75rem)",
                      fontWeight: 800,
                      lineHeight: 1.2,
                      letterSpacing: "-0.02em",
                      color: "#0A1128",
                      marginBottom: 14,
                      transition: "color 0.2s",
                    }}
                    className="group-hover:!text-[#2060D4]"
                  >
                    {featuredNews.title}
                  </h2>

                  {/* Excerpt */}
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "rgba(10,17,40,0.5)",
                      marginBottom: 28,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {featuredNews.excerpt ||
                      plainTextFromHtml(featuredNews.content_html).slice(0, 160)}
                  </p>

                  <div>
                    <span
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-[6px] bg-[#2060D4] px-6 text-sm font-bold uppercase tracking-widest text-white shadow-[0_4px_12px_rgba(33,94,199,0.2)] transition-all group-hover:-translate-y-0.5 group-hover:bg-[#1a4ba8] group-hover:shadow-[0_6px_16px_rgba(33,94,199,0.3)]"
                    >
                      Read Article
                    </span>
                  </div>
                </div>

                {/* Right: image */}
                <div style={{ position: "relative", overflow: "hidden", minHeight: 260, background: "#0d1a40" }}>
                  {featuredNews.cover_image_url ? (
                    <img
                      src={featuredNews.cover_image_url}
                      alt={featuredNews.title}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.65s ease",
                      }}
                      className="group-hover:scale-[1.035]"
                    />
                  ) : (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(135deg, #0d1f4f 0%, #1e3f8a 100%)",
                      }}
                    />
                  )}
                  {/* Featured pill */}
                  <span
                    style={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#fff",
                      background: "rgba(10,17,40,0.55)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      padding: "5px 12px",
                      borderRadius: 99,
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "#4a8ee8",
                        flexShrink: 0,
                      }}
                    />
                    Featured
                  </span>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          FILTER BAR + GRID
      ───────────────────────────────────────────── */}
      <section style={{ background: "#f5f7fa", paddingBottom: "clamp(4rem, 8vw, 6rem)" }}>
        {/* Filter bar — sticky */}
        <div
          className="sticky top-0 z-20"
          style={{
            background: "rgba(245,247,250,0.97)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(10,17,40,0.07)",
            marginBottom: "clamp(2rem, 4vw, 3.5rem)",
          }}
        >
          <div className="custom-container">
            <div
              style={{ display: "flex", alignItems: "center", gap: 8, overflowX: "auto", padding: "14px 0" }}
              className="scrollbar-hide"
            >
              {allCats.map((cat) => {
                const on = cat.id === "all" ? active === "all" : active === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    style={{
                      padding: "6px 16px",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      border: on ? "1.5px solid #2060D4" : "1.5px solid rgba(10,17,40,0.14)",
                      borderRadius: 99,
                      background: on ? "#2060D4" : "transparent",
                      color: on ? "#fff" : "rgba(10,17,40,0.45)",
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                      lineHeight: 1,
                    }}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="custom-container">
          {filtered.length === 0 ? (
            <div
              style={{
                padding: "5rem 2rem",
                textAlign: "center",
                background: "#fff",
                borderRadius: 16,
                border: "1px solid rgba(10,17,40,0.08)",
              }}
            >
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(10,17,40,0.22)", marginBottom: 8 }}>
                No articles
              </p>
              <p style={{ fontSize: 14, color: "rgba(10,17,40,0.38)" }}>
                Nothing in this category yet — check back soon.
              </p>
            </div>
          ) : (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              style={{ gap: 20 }}
            >
              {filtered.map((item) => (
                <ArticleCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

/* ─── Article Card ─── */
function ArticleCard({ item }: { item: NewsPost }) {
  const date = item.published_at
    ? new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(
        new Date(item.published_at)
      )
    : "";

  return (
    <Link
      href={`/news/${item.slug}`}
      className="group"
      style={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        background: "#fff",
        borderRadius: 14,
        overflow: "hidden",
        border: "1px solid rgba(10,17,40,0.08)",
        transition: "transform 0.22s ease, box-shadow 0.22s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.transform = "translateY(-3px)";
        el.style.boxShadow = "0 12px 40px rgba(10,17,40,0.09)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          aspectRatio: "16/9",
          overflow: "hidden",
          background: "#0d1a40",
          flexShrink: 0,
        }}
      >
        {item.cover_image_url ? (
          <img
            src={item.cover_image_url}
            alt={item.title}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.55s ease",
            }}
            className="group-hover:scale-[1.05]"
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #0d1f4f 0%, #1e3f8a 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
        )}
        {/* Thin blue line on hover */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            background: "#2060D4",
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.3s ease",
          }}
          className="group-hover:scale-x-100"
        />
      </div>

      {/* Body */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "1.35rem 1.5rem 1.5rem",
        }}
      >
        {/* Meta row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            marginBottom: 12,
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#2060D4",
              background: "#EEF4FF",
              padding: "3px 9px",
              borderRadius: 99,
              whiteSpace: "nowrap",
            }}
          >
            {item.category?.name || "News"}
          </span>
          <span style={{ fontSize: 11, color: "rgba(10,17,40,0.35)", fontWeight: 500, whiteSpace: "nowrap" }}>
            {date}
          </span>
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
            color: "#0A1128",
            marginBottom: 10,
            transition: "color 0.18s",
          }}
          className="group-hover:!text-[#2060D4]"
        >
          {item.title}
        </h2>

        {/* Excerpt */}
        <p
          style={{
            fontSize: 13,
            lineHeight: 1.65,
            color: "rgba(10,17,40,0.46)",
            flex: 1,
            marginBottom: 20,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.excerpt || plainTextFromHtml(item.content_html).slice(0, 120)}
        </p>

        {/* Arrow CTA */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#2060D4",
            marginTop: "auto",
          }}
        >
          Read more
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: "transform 0.2s" }}
            className="group-hover:translate-x-[3px]"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </div>
      </div>
    </Link>
  );
}