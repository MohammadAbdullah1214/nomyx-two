import type { Metadata } from "next";

import Home from "./home";

import { getFeaturedBlogs } from "@/lib/blogs";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.nomyx.io/",
  },
};

export default async function Page() {
  const featuredBlogs = await getFeaturedBlogs(3);

  return <Home featuredBlogs={featuredBlogs} />;
}
