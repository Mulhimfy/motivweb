const steps = [
  {
    num: "01",
    title: "Share your link",
    text: "Ilham gives you a personal link. Drop it in your story, your bio, or the family group chat — anyone can open it, no app needed on their side.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    ),
  },
  {
    num: "02",
    title: "Friends and strangers send duas",
    text: "Whoever opens it can pour their heart into a dua for you. 100% anonymous — you never see who. It stays between them and Allah.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    ),
  },
  {
    num: "03",
    title: "Read, say Ameen, send it back",
    text: "Each dua lands quietly in your inbox. Say Ameen, hold onto it — then make dua for someone else, and the angels answer: and for you the same.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg,#12121f 0%,#1a1a2e 50%,#12121f 100%)" }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-20 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-4">
            How it works
          </p>
          <h2 className="font-[family-name:var(--font-serif-var)] text-3xl md:text-5xl font-semibold text-cream-bright mb-5 leading-tight">
            Other apps hand you content.
            <br />
            <span className="text-accent">Ilham hands you someone&apos;s dua.</span>
          </h2>
          <p className="text-cream-dim text-base md:text-lg leading-relaxed">
            No profile, no followers, no performing. Three quiet steps, and
            hearts start praying for one another.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative glass-card p-7 md:p-8 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-[family-name:var(--font-serif-var)] text-5xl font-bold text-accent/25">
                  {s.num}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(217,185,155,0.12)] text-accent">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                    {s.icon}
                  </svg>
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-serif-var)] text-2xl font-semibold text-cream">
                {s.title}
              </h3>
              <p className="text-cream-dim text-[15px] leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>

        {/* Daily wisdom note */}
        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-center rounded-2xl border border-[rgba(236,228,207,0.1)] bg-[rgba(30,30,51,0.45)] px-6 py-5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(232,201,144,0.14)] text-gold">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </span>
          <p className="text-cream-dim text-sm md:text-[15px]">
            <span className="text-cream font-semibold">One verse. One reflection. Every day.</span>{" "}
            Alongside your duas, Ilham pairs a piece of Islamic wisdom with the
            exact Quran verse it stands on — delivered at the hour the noise
            usually wins.
          </p>
        </div>
      </div>
    </section>
  );
}
