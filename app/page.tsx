import type { Metadata } from "next";

import Home from "./home";

import { getFeaturedBlogs } from "@/lib/blogs";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Nomyx - Agile Infrastructure for Institutional Capital",
  description:
    "Tokenization infrastructure for institutional capital with upgradeable smart contracts and built-in compliance.",
  pathname: "/",
});

export default async function Page() {
  const featuredBlogs = await getFeaturedBlogs(3);

  return <Home featuredBlogs={featuredBlogs} />;
}
