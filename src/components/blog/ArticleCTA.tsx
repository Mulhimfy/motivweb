import StoreBadges from "@/components/StoreBadges";

interface ArticleCTAProps {
  headline: string;
  body: string;
  location: string;
}

/**
 * In-article download CTA. Every guide ends somewhere useful: an install,
 * pitched in terms of what the reader just read.
 */
export default function ArticleCTA({ headline, body, location }: ArticleCTAProps) {
  return (
    <div className="relative my-12 overflow-hidden rounded-[24px] border border-gold/25 bg-gradient-to-b from-surface-2 to-surface p-8 md:p-10">
      <div className="gold-glow pointer-events-none absolute -right-16 -top-16 h-48 w-48" />
      <div className="relative">
        <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-gold">
          Try AyahReel
        </p>
        <h3 className="mb-3 font-[family-name:var(--font-serif-var)] text-2xl font-semibold leading-snug text-cream-bright md:text-3xl">
          {headline}
        </h3>
        <p className="mb-6 max-w-xl text-[16px] leading-relaxed text-cream-dim">
          {body}
        </p>
        <StoreBadges location={location} size="md" />
      </div>
    </div>
  );
}
