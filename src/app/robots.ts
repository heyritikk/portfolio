import type { MetadataRoute } from "next";

// TODO: Replace with your deployed website URL
const siteUrl = "https://www.yourdomain.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
