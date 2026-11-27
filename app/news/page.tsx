import type { Metadata } from "next";
import { CustomCursor, Footer, Navbar } from "@/app/home";
import { getPublishedNews, getFeaturedNews, getNewsCategories } from "@/lib/news";
import NewsPageClient from "./NewsPageClient";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Nomyx News & Company Updates",
  description: "Get the latest Nomyx news, press releases, and partner announcements. Stay updated on our institutional tokenization platform and digital asset infrastructure.",
  pathname: "/news",
});

export default async function NewsIndexPage() {
  const [news, featured, allCategories] = await Promise.all([
    getPublishedNews(),
    getFeaturedNews(1),
    getNewsCategories()
  ]);

  const categories = allCategories.filter((cat) => cat.status === "active");

  const featuredNews = featured.length > 0 ? featured[0] : null;
  // If there's a featured news, don't show it twice in the grid
  const newsGrid = featuredNews 
    ? news.filter(n => n.id !== featuredNews.id)
    : news;

  return (
    <div className="min-h-screen bg-white text-ink">
      <CustomCursor />
      <Navbar variant="light" transparentInitially={true} hideBorder={true} />

      <main className="overflow-hidden">
        <NewsPageClient 
          news={newsGrid} 
          categories={categories} 
          featuredNews={featuredNews} 
        />
      </main>

      <Footer />
    </div>
  );
}
