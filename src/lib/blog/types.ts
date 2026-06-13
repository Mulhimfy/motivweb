import type { ComponentType } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

export interface PostMeta {
  /** URL slug under /blog */
  slug: string;
  /** H1 + base of the SEO title */
  title: string;
  /** <meta name="description"> — keep ~150 chars, benefit-led */
  description: string;
  /** Card blurb + article lead paragraph */
  excerpt: string;
  /** Display category / eyebrow */
  category: string;
  /** Target keywords (informational only; not a ranking factor, but useful inventory) */
  keywords: string[];
  /** ISO date */
  datePublished: string;
  /** ISO date */
  dateModified: string;
  /** e.g. "7 min read" */
  readingTime: string;
  /** Slugs of related guides for internal linking */
  related: string[];
  /** Optional FAQ — rendered on page AND emitted as FAQPage JSON-LD */
  faq?: FaqItem[];
}

export interface Post extends PostMeta {
  Body: ComponentType;
}
