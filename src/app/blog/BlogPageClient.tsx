"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { BlogPost } from "./blogContent";

type BlogPageClientProps = {
  blogs: BlogPost[];
  featuredPost: BlogPost;
  categories: string[];
};

export default function BlogPageClient({
  blogs,
  featuredPost,
  categories,
}: BlogPageClientProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs = useMemo(() => {
    const baseBlogs =
      activeCategory === "All"
        ? blogs
        : blogs.filter((blog) => blog.category === activeCategory);

    return [...baseBlogs].sort((a, b) => {
      if (a.slug === featuredPost.slug) return -1;
      if (b.slug === featuredPost.slug) return 1;
      return 0;
    });
  }, [activeCategory, blogs, featuredPost.slug]);

  const renderGradientTitle = (title: string) => {
    const parts = title.split(
      /(Google|Antigravity|Planera|Budget|AGC|Company|2\.0)/g,
    );

    return parts.map((part, index) => {
      if (
        part === "Google" ||
        part === "Antigravity" ||
        part === "Planera" ||
        part === "Budget" ||
        part === "AGC" ||
        part === "Company" ||
        part === "2.0"
      ) {
        return (
          <span
            key={`${part}-${index}`}
            className="animated-text-gradient italic inline-block"
          >
            {part}
          </span>
        );
      }

      return <span key={`text-${index}`}>{part}</span>;
    });
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <main className="max-w-6xl mx-auto px-6 pt-[14rem] md:pt-[15rem] pb-16">
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] items-center gap-10 lg:gap-16">
          <div>
            <p className="text-base text-[var(--muted)] mb-4">Featured</p>
            <h1 className="text-6xl md:text-7xl leading-[1.14] font-normal tracking-tight [font-family:var(--font-instrument-serif)]">
              {renderGradientTitle(featuredPost.title)}
            </h1>
            <p className="mt-7 text-[var(--muted)]">
              {featuredPost.date} &nbsp; {featuredPost.category}
            </p>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[var(--surface)] px-8 text-lg leading-none text-[var(--foreground)] transition hover:bg-[var(--surface-hover)]"
            >
              Read blog
            </Link>
          </div>

          <div className="w-full rounded-[28px] overflow-hidden bg-[var(--surface)] border border-black dark:border-white">
            <img
              src={
                featuredPost.cardImage ??
                featuredPost.coverImage ??
                "/img/preview.png"
              }
              alt={featuredPost.imageLabel}
              className="block w-full h-auto rounded-[28px]"
            />
          </div>
        </section>

        <div className="mt-16 border-b border-[var(--border)] flex items-center gap-10 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`pb-4 text-lg whitespace-nowrap transition ${
                activeCategory === category
                  ? "border-b-2 border-[#2563eb] text-[var(--foreground)]"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredBlogs.length === 0 ? (
          <section className="pt-12 pb-6 border-b border-[var(--border)]">
            <p className="text-2xl [font-family:var(--font-instrument-serif)]">
              Coming soon
            </p>
            <p className="mt-2 text-[var(--muted)]">
              Blogs for this section will be published soon.
            </p>
          </section>
        ) : (
          <section className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.slug}
                className="py-6 border-b border-[var(--border)] grid grid-cols-[1fr_116px] items-center gap-6"
              >
                <div>
                  <h2 className="text-2xl md:text-[30px] leading-[1.15] tracking-tight font-normal text-[var(--foreground)] max-w-[26ch] [font-family:var(--font-instrument-serif)]">
                    {renderGradientTitle(blog.title)}
                  </h2>
                  <p className="mt-4 text-sm text-[var(--muted)]">
                    {blog.date} &nbsp; {blog.category}
                  </p>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="mt-5 inline-flex h-12 items-center justify-center rounded-full bg-[var(--surface)] px-8 text-lg leading-none text-[var(--foreground)] transition hover:bg-[var(--surface-hover)]"
                  >
                    Read blog
                  </Link>
                </div>

                {blog.cardImage ? (
                  <div className="w-[116px] h-[116px] rounded-2xl overflow-hidden border border-black dark:border-white bg-[var(--surface)]">
                    <img
                      src={blog.cardImage}
                      alt={blog.imageLabel}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-[116px] h-[116px] rounded-2xl bg-black flex items-center justify-center p-3">
                    <p className="text-white text-sm text-center leading-tight">
                      {blog.imageLabel}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
