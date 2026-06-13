import AppStoreBadge from "@/components/AppStoreBadge";

interface ArticleCTAProps {
  headline: string;
  body: string;
  location: string;
}

/**
 * In-article download CTA. This is the blog's "monetization" — every guide
 * funnels to an App Store install, contextual to what the reader just read.
 */
export default function ArticleCTA({ headline, body, location }: ArticleCTAProps) {
  return (
    <div className="my-12 overflow-hidden rounded-[24px] border border-[rgba(76,196,203,0.28)] bg-[rgba(8,43,48,0.6)] p-8 md:p-10 relative">
      <div className="absolute -right-16 -top-16 h-48 w-48 teal-glow pointer-events-none" />
      <div className="relative">
        <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-3">
          Try I pray
        </p>
        <h3 className="font-[family-name:var(--font-cormorant-var)] text-2xl md:text-3xl font-semibold text-cream-bright leading-snug mb-3">
          {headline}
        </h3>
        <p className="text-cream-dim text-[16px] leading-relaxed mb-6 max-w-xl">
          {body}
        </p>
        <AppStoreBadge variant="solid" location={location} />
      </div>
    </div>
  );
}
