import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, PenLine } from "lucide-react";

import { CustomCursor, Footer, Navbar } from "@/app/home";
import { getPublishedBlogs, plainTextFromHtml } from "@/lib/blogs";
import { AnimatedButton } from "@/app/components/evergreen/shared";

function formatDate(value: string | null) {
  if (!value) {
    return "Unscheduled";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export default async function BlogIndexPage() {
  const blogs = await getPublishedBlogs();

  return (
    <div className="min-h-screen bg-white text-ink">
      <CustomCursor />
      <Navbar variant="light" transparentInitially={true} hideBorder={true} />

      <main className="overflow-hidden">
        <section 
          className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
          style={{
            background: "linear-gradient(to bottom, #D9EFFF 0%, #FFFFFF 100%)"
          }}
        >
          <div className="custom-container relative text-center">
            <div className="mx-auto max-w-4xl">
              <p className="eyebrow mb-6">
                Insights
              </p>
              <h1 className="text-display mb-8">
                Nomyx Blog
              </h1>
              <p className="mx-auto prgraphs mb-20 md:text-xl">
                Tokenization infrastructure notes, capital markets workflows, and product thinking from the Nomyx team.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="custom-container">
            {blogs.length === 0 ? (
              <div className="rounded-2xl border border-[#0A112824] bg-white px-6 py-20 text-center text-sm font-bold uppercase tracking-widest text-ink-muted">
                No published blog posts yet.
              </div>
            ) : (
              <div className="grid items-stretch gap-8 lg:grid-cols-2">
                {blogs.map((blog, index) => (
                  <article
                    key={blog.id}
                    className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#0A112824] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Link href={`/blog/${blog.slug}`} className="relative block aspect-[16/9] overflow-hidden bg-ink">
                      {blog.cover_image_url ? (
                        <img
                          src={blog.cover_image_url}
                          alt={blog.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-ink text-xs font-bold uppercase tracking-widest text-white/30">
                          No Image Available
                        </div>
                      )}
                    </Link>

                    <div className="flex flex-1 flex-col p-8 md:p-10">
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[#2060D4]">
                          {blog.featured ? "Featured / " : ""}
                          {formatDate(blog.published_at)}
                        </p>
                      </div>
                      <h2 className="mb-4 text-[28px] font-bold leading-tight tracking-tight text-ink">
                        {blog.title}
                      </h2>
                      <p className="mb-10 line-clamp-3 flex-1 text-[16px] leading-relaxed text-ink-muted">
                        {blog.excerpt || plainTextFromHtml(blog.content_html).slice(0, 170)}
                      </p>
                      <div className="mt-auto">
                        <AnimatedButton 
                          text="Read Article" 
                          href={`/blog/${blog.slug}`} 
                          variant="accent" 
                          className="h-11 !px-7"
                        />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
