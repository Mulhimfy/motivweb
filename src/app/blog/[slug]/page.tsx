import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BlogNav from "@/components/blog/BlogNav";
import Footer from "@/components/Footer";
import { getPost, getAllSlugs, getRelated } from "@/lib/blog/registry";

const SITE = "https://getilham.com";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${SITE}/blog/${post.slug}`;
  return {
    title: `${post.title} | I pray`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "I pray",
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelated(slug);
  const url = `${SITE}/blog/${post.slug}`;
  const { Body } = post;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        headline: post.title,
        description: post.description,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        author: { "@type": "Organization", name: "I pray", url: SITE },
        publisher: {
          "@type": "Organization",
          name: "I pray",
          url: SITE,
          logo: { "@type": "ImageObject", url: `${SITE}/app-icon.png` },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
      ...(post.faq && post.faq.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: post.faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogNav />
      <main className="relative">
        <div className="absolute inset-0 islamic-pattern opacity-30 pointer-events-none" />

        <article className="relative max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pt-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-cream-dim/70">
            <Link href="/" className="hover:text-cream transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-cream transition-colors">
              Guides
            </Link>
          </nav>

          {/* Title block */}
          <header className="mb-12">
            <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-4">
              {post.category}
            </p>
            <h1 className="font-[family-name:var(--font-cormorant-var)] text-4xl md:text-5xl font-semibold text-cream-bright leading-[1.15] mb-5">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-cream-dim/70">
              <time dateTime={post.datePublished}>
                {new Date(post.datePublished).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
          </header>

          {/* Body */}
          <div>
            <Body />
          </div>

          {/* FAQ */}
          {post.faq && post.faq.length > 0 && (
            <section className="mt-16">
              <h2 className="font-[family-name:var(--font-cormorant-var)] text-3xl md:text-4xl font-semibold text-cream-bright mb-6">
                Frequently asked
              </h2>
              <div className="flex flex-col divide-y divide-[rgba(236,228,207,0.1)]">
                {post.faq.map((f, i) => (
                  <div key={i} className="py-5">
                    <h3 className="font-[family-name:var(--font-cormorant-var)] text-xl md:text-2xl font-semibold text-cream mb-2">
                      {f.q}
                    </h3>
                    <p className="text-cream/85 text-[16px] leading-[1.8]">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-16 border-t border-[rgba(236,228,207,0.1)] pt-10">
              <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-5">
                Keep reading
              </p>
              <div className="flex flex-col gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="glass-card group flex flex-col gap-1.5 p-6"
                  >
                    <span className="font-[family-name:var(--font-cormorant-var)] text-xl font-semibold text-cream group-hover:text-cream-bright transition-colors">
                      {r.title}
                    </span>
                    <span className="text-cream-dim text-sm leading-relaxed">
                      {r.excerpt}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
