import AppStoreBadge from "./AppStoreBadge";

export default function DownloadCTA() {
  return (
    <section
      id="download"
      className="py-24 md:py-36 relative overflow-hidden islamic-pattern"
      style={{ background: "linear-gradient(135deg,#232338 0%,#1a1a2e 55%,#12121f 100%)" }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[420px] w-[420px] teal-glow" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          lang="ar"
          dir="rtl"
          className="text-2xl md:text-3xl text-gold/90 mb-2"
          style={{ fontFamily: "'Amiri', serif" }}
        >
          أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
        </p>
        <p className="text-cream-dim text-sm italic mb-8">
          “Verily, in the remembrance of Allah do hearts find rest.” — Surah Ar-Ra&apos;d 13:28
        </p>

        <h2 className="font-[family-name:var(--font-serif-var)] text-4xl md:text-6xl font-bold text-cream-bright leading-[1.05] mb-5">
          Let it reach your heart.
        </h2>
        <p className="text-cream-dim text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Somewhere out there is a dua with your name on it. Install Ilham,
          share your link, and let hearts start praying for one another —
          beginning with yours.
        </p>

        <div className="flex justify-center">
          <AppStoreBadge variant="solid" location="download_cta" />
        </div>

        <p className="mt-6 text-xs text-cream-dim/80">
          Free to download · Android · No account needed · 100% anonymous
        </p>
      </div>
    </section>
  );
}
