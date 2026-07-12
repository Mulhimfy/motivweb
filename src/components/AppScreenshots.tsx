/**
 * "A look inside" — real wisdom–verse pairings from the app, rendered as the
 * app renders them: quote, ornamental divider, italic verse, surah reference,
 * over the app's own 135° gradients.
 */
const cards = [
  {
    wisdom: "Allah never burdens you with more than you can handle.",
    verse: "Allah does not burden a soul beyond that it can bear.",
    ref: "Al-Baqarah 2:286",
    gradient: "linear-gradient(135deg,#0A0E27 0%,#1A1A3E 50%,#1E3A8A 100%)",
  },
  {
    wisdom: "Every difficulty is a door to something better.",
    verse: "So verily, with hardship, there is relief.",
    ref: "Ash-Sharh 94:5",
    gradient: "linear-gradient(135deg,#0B1929 0%,#1A4D5E 50%,#B83B73 100%)",
  },
  {
    wisdom: "Never despair of Allah’s mercy.",
    verse: "Do not despair of the mercy of Allah. Indeed, Allah forgives all sins.",
    ref: "Az-Zumar 39:53",
    gradient: "linear-gradient(135deg,#3A0CA3 0%,#7209B7 50%,#9D4EDD 100%)",
  },
  {
    wisdom: "When you have Allah, you have everything.",
    verse: "And whoever puts their trust in Allah, He will be enough for them.",
    ref: "At-Talaq 65:3",
    gradient: "linear-gradient(135deg,#1B4332 0%,#2D6A4F 55%,#40916C 100%)",
  },
  {
    wisdom: "The heart finds peace only in remembering Allah.",
    verse: "Verily, in the remembrance of Allah do hearts find rest.",
    ref: "Ar-Ra’d 13:28",
    gradient: "linear-gradient(135deg,#073B4C 0%,#118AB2 65%,#06D6A0 130%)",
  },
  {
    wisdom: "Let your faith be bigger than your fears.",
    verse: "Do not lose hope, nor be sad. You will surely be victorious if you are true believers.",
    ref: "Aal-E-Imran 3:139",
    gradient: "linear-gradient(135deg,#1a1a2e 0%,#0f3460 55%,#1B4332 100%)",
  },
];

export default function AppScreenshots() {
  return (
    <section id="preview" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-4">
            A look inside
          </p>
          <h2 className="font-[family-name:var(--font-serif-var)] text-3xl md:text-5xl font-semibold text-cream-bright mb-4">
            One verse. One reflection. Every day.
          </h2>
          <p className="text-cream-dim text-base md:text-lg leading-relaxed">
            Every card in Ilham pairs a wisdom with the exact Quran verse it
            stands on — swipe through them like a feed that actually feeds you.
          </p>
        </div>
      </div>

      <div className="flex gap-5 md:gap-7 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-6 category-scroll snap-x snap-mandatory">
        {cards.map((c, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-center w-[240px] md:w-[280px] rounded-[28px] overflow-hidden border border-[rgba(236,228,207,0.1)]"
            style={{ background: c.gradient }}
          >
            <div className="flex h-[440px] md:h-[500px] flex-col items-center justify-center px-7 text-center">
              <p
                className="text-[17px] md:text-[19px] font-light leading-relaxed text-white"
                style={{ textShadow: "0 0 12px rgba(100,150,255,0.5)", letterSpacing: "0.6px" }}
              >
                &ldquo;{c.wisdom}&rdquo;
              </p>

              <div className="quote-divider my-6 w-3/4 text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-[rgba(255,255,255,0.5)]" />
              </div>

              <p className="text-[15px] md:text-[16px] font-medium italic leading-relaxed text-[rgba(255,255,255,0.9)]">
                &ldquo;{c.verse}&rdquo;
              </p>
              <p className="mt-3.5 text-[12px] font-medium tracking-wide text-[rgba(255,255,255,0.55)]">
                {c.ref}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
