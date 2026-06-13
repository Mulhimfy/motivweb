import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog/registry";

export const dynamic = "force-static";

const SITE = "https://getilham.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE,
      lastModified: "2026-05-21",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE}/blog`,
      lastModified: "2026-06-13",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((p) => ({
      url: `${SITE}/blog/${p.slug}`,
      lastModified: p.dateModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
