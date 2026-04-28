import "server-only";

import fs from "node:fs";
import path from "node:path";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  imageLabel: string;
  coverImage?: string;
  cardImage?: string;
  heroTitle?: string;
  featured?: boolean;
  draft?: boolean;
  content: string;
  updatedAt: number;
};

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

function parseDateToTime(value: string): number {
  const ddmmyyyy = value.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (ddmmyyyy) {
    const [, dd, mm, yyyy] = ddmmyyyy;
    return new Date(Number(yyyy), Number(mm) - 1, Number(dd)).getTime();
  }

  const parsed = new Date(value).getTime();
  return Number.isNaN(parsed) ? 0 : parsed;
}

function parseFrontmatter(raw: string): {
  meta: Record<string, string>;
  content: string;
} {
  if (!raw.startsWith("---")) {
    return { meta: {}, content: raw.trim() };
  }

  const end = raw.indexOf("\n---", 3);
  if (end === -1) {
    return { meta: {}, content: raw.trim() };
  }

  const frontmatter = raw.slice(3, end).trim();
  const content = raw.slice(end + 4).trim();
  const meta: Record<string, string> = {};

  for (const line of frontmatter.split("\n")) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim().replace(/^["']|["']$/g, "");
    meta[key] = value;
  }

  return { meta, content };
}

function extractFirstMarkdownImage(content: string): string | undefined {
  const match = content.match(/!\[[^\]]*\]\(([^)]+)\)/);
  if (!match) return undefined;
  const source = match[1].trim();
  if (!source || source.startsWith("placeholder:")) return undefined;
  return source;
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md") && file.toLowerCase() !== "readme.md");

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const fullPath = path.join(BLOG_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const stats = fs.statSync(fullPath);
    const { meta, content } = parseFrontmatter(raw);
    const firstContentImage = extractFirstMarkdownImage(content);

    return {
      slug,
      title: meta.title ?? slug,
      date: meta.date ?? "28-04-2026",
      category: meta.category ?? "Web3 Project",
      author: meta.author ?? "Ritik Kumar",
      imageLabel: meta.imageLabel ?? "Blog Preview",
      coverImage: meta.coverImage,
      cardImage: meta.cardImage ?? meta.coverImage ?? firstContentImage,
      heroTitle: meta.heroTitle,
      featured: meta.featured === "true",
      draft: meta.draft === "true",
      content,
      updatedAt: stats.mtimeMs,
    } satisfies BlogPost;
  });

  return posts
    .filter((post) => !post.draft)
    .sort((a, b) => {
    if (b.updatedAt !== a.updatedAt) return b.updatedAt - a.updatedAt;
    return parseDateToTime(b.date) - parseDateToTime(a.date);
    });
}

export function getFeaturedPost(posts: BlogPost[]): BlogPost | undefined {
  return posts.find((post) => post.featured) ?? posts[0];
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((post) => post.slug === slug);
}
