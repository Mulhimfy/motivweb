const features = [
  {
    featured: true,
    title: "Anonymous duas",
    description:
      "The heart of Ilham. Share your link and heartfelt duas from friends and strangers arrive in your inbox — completely anonymous, and yours to keep.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    ),
  },
  {
    title: "Wisdom that stands on revelation",
    description:
      "Every wisdom is hand-matched to the exact Quran verse it comes from, surah and ayah cited. Never random, never repeated until you’ve seen them all.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    ),
  },
  {
    title: "A reminder that carries meaning",
    description:
      "One notification a day, carrying an actual wisdom — not “you have a new message.” Tap it, and the full verse is already waiting for you.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 00-4-5.7V5a2 2 0 10-4 0v.3A6 6 0 006 11v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    ),
  },
  {
    title: "Scenery that lets a verse breathe",
    description:
      "Mountain peaks, ocean waves, aurora skies and deep night gradients — choose the background your daily reflection lives on.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V4.5a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V9.75z" />
    ),
  },
  {
    title: "Save it, share it as art",
    description:
      "Bookmark what strikes you, and share any pairing as a beautiful card — Midnight, Forest, Ocean, Purple Dreams and more.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
    ),
  },
  {
    title: "Streaks your heart keeps",
    description:
      "Day 3, 7, 14, 21… 100. A gentle count of the days you showed up for your heart — and a quiet reason to come back tomorrow.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 3l-1.5 6.5L17 9l-6 12 1.5-8L7 13l6-10z" />
    ),
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 islamic-pattern opacity-40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-4">
            Everything your heart checks in for
          </p>
          <h2 className="font-[family-name:var(--font-serif-var)] text-3xl md:text-5xl font-semibold text-cream-bright mb-4">
            A quieter kind of app
          </h2>
          <p className="text-cream-dim text-base md:text-lg leading-relaxed">
            No feed, no followers, no noise. Just duas arriving, wisdom paired
            with revelation, and a streak of days your heart showed up.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`glass-card p-7 md:p-8 flex flex-col gap-4 ${
                f.featured
                  ? "border-[rgba(217,185,155,0.4)] bg-[rgba(30,30,51,0.6)]"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    f.featured
                      ? "bg-accent/20 text-accent"
                      : "bg-[rgba(217,185,155,0.1)] text-accent"
                  }`}
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                    {f.icon}
                  </svg>
                </span>
                {f.featured && (
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
                    Core feature
                  </span>
                )}
              </div>
              <h3 className="font-[family-name:var(--font-serif-var)] text-2xl font-semibold text-cream">
                {f.title}
              </h3>
              <p className="text-cream-dim text-[15px] leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
