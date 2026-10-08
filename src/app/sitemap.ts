import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog/registry";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

const SITE = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE,
      lastModified: "2026-10-08",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE}/blog`,
      lastModified: "2026-10-08",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((p) => ({
      url: `${SITE}/blog/${p.slug}`,
      lastModified: p.dateModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${SITE}/privacy`,
      lastModified: "2026-10-08",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
