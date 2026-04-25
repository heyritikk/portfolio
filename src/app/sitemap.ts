import type { MetadataRoute } from "next";

// TODO: Replace with your deployed website URL
const siteUrl = "https://www.yourdomain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-02-28"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
