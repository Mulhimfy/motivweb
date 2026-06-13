import type { Metadata } from "next";
import Link from "next/link";
import BlogNav from "@/components/blog/BlogNav";
import Footer from "@/components/Footer";
import { posts } from "@/lib/blog/registry";

export const metadata: Metadata = {
  title: "Guides — Praying on Time, Prayer Times & Salah | I pray",
  description:
    "Honest, practical guides on praying on time, understanding prayer times, and building a salah habit that actually sticks. From the team behind I pray.",
  alternates: { canonical: "https://getilham.com/blog" },
  openGraph: {
    title: "Guides — I pray",
    description:
      "Honest, practical guides on praying on time and building a salah habit that sticks.",
    url: "https://getilham.com/blog",
    siteName: "I pray",
    type: "website",
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "I pray Guides",
  url: "https://getilham.com/blog",
  description:
    "Practical guides on praying on time, prayer times, and building a salah habit.",
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: `https://getilham.com/blog/${p.slug}`,
    datePublished: p.datePublished,
    dateModified: p.dateModified,
  })),
};

export default function BlogIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BlogNav />
      <main className="relative min-h-screen">
        <div className="absolute inset-0 islamic-pattern opacity-40 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28">
          <header className="max-w-2xl mb-14 md:mb-20">
            <p className="text-xs tracking-[0.3em] text-gold uppercase mb-4">
              Guides
            </p>
            <h1 className="font-[family-name:var(--font-cormorant-var)] text-4xl md:text-6xl font-semibold text-cream-bright leading-tight mb-5">
              Praying on time, made practical
            </h1>
            <p className="text-cream-dim text-lg leading-relaxed">
              Honest writing on salah, prayer times, and the daily fight to put
              the phone down and pray. No fluff, no guilt-tripping — just things
              that actually help.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="glass-card group flex flex-col gap-4 p-7 md:p-8"
              >
                <p className="text-[11px] tracking-[0.2em] uppercase text-gold">
                  {p.category}
                </p>
                <h2 className="font-[family-name:var(--font-cormorant-var)] text-2xl md:text-[28px] font-semibold text-cream leading-tight group-hover:text-cream-bright transition-colors">
                  {p.title}
                </h2>
                <p className="text-cream-dim text-[15px] leading-relaxed flex-1">
                  {p.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-accent">
                  Read guide
                  <span className="text-cream-dim/60">· {p.readingTime}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
