const moments = [
  {
    label: "The endless scroll",
    text: "You put the phone down after an hour of feeds and feel emptier than when you picked it up. Nothing you saw was for you.",
  },
  {
    label: "The weight you can’t say out loud",
    text: "You’re carrying something you’d never post about. You just quietly wish someone, somewhere, would make dua for you.",
  },
  {
    label: "The verse that used to move you",
    text: "You still believe. But between the alerts and the reels, the words that once softened your heart feel far away.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 islamic-pattern opacity-40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-4">
            Sound familiar?
          </p>
          <h2 className="font-[family-name:var(--font-serif-var)] text-3xl md:text-5xl font-semibold text-cream-bright mb-4">
            The Quran is near. The noise is louder.
          </h2>
          <p className="text-cream-dim text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            The words that once moved you didn&apos;t change. We did.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moments.map((m, i) => (
            <div key={i} className="glass-card p-7 md:p-8 flex flex-col gap-4">
              <span className="font-[family-name:var(--font-serif-var)] text-5xl leading-none text-accent/40">
                &ldquo;
              </span>
              <p className="text-[11px] tracking-[0.2em] uppercase text-gold">
                {m.label}
              </p>
              <p className="text-cream-dim text-[15px] leading-relaxed">
                {m.text}
              </p>
            </div>
          ))}
        </div>

        {/* Reframe */}
        <div className="mt-12 md:mt-14 max-w-3xl mx-auto text-center rounded-[24px] border border-[rgba(217,185,155,0.22)] bg-[rgba(30,30,51,0.5)] p-8 md:p-10">
          <p className="font-[family-name:var(--font-serif-var)] text-2xl md:text-3xl font-medium text-cream leading-snug">
            Nothing is heavier in the scale.
            <br />
            Nothing is softer on the heart.
          </p>
          <p className="mt-4 text-cream-dim text-[15px] md:text-base leading-relaxed">
            The Prophet ﷺ said that whoever makes dua for his brother in his
            absence, the angel answers: <em>&ldquo;And for you the same.&rdquo;</em>{" "}
            (Sahih Muslim). Ilham is built on that promise — a quiet loop of
            hearts praying for one another, and one verse a day to bring the
            Quran back to yours.
          </p>
          <p className="mt-4 text-accent font-medium">
            You don&apos;t need another feed. You need to be remembered.
          </p>
        </div>
      </div>
    </section>
  );
}
