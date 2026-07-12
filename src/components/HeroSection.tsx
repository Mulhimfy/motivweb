import PhoneMockup from "./PhoneMockup";
import HeroPhoneScreen from "./HeroPhoneScreen";
import AppStoreBadge from "./AppStoreBadge";

export default function HeroSection() {
  return (
    <section className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 islamic-pattern opacity-60" />
      <div className="absolute -top-40 -left-40 h-[480px] w-[480px] teal-glow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(236,228,207,0.14)] px-4 py-1.5 text-xs tracking-wide text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              For Android · Free to download
            </p>

            <h1 className="mt-6 font-[family-name:var(--font-serif-var)] text-5xl md:text-6xl xl:text-7xl font-bold text-cream-bright leading-[1.08] tracking-tight">
              When did someone
              <br />
              last make <span className="text-accent">dua</span> for you?
            </h1>

            <p className="mt-6 text-base md:text-lg text-cream-dim max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Maybe a parent, long ago. Maybe a stranger you&apos;ll never meet.{" "}
              <span className="text-cream font-medium">Ilham</span> gives you a
              link — share it, and friends and strangers send you heartfelt
              duas. Completely anonymous. It stays between them and Allah.
            </p>

            <p className="mt-3 text-base md:text-lg text-cream-dim max-w-lg mx-auto lg:mx-0">
              And every day, one verse finds its way back to your heart.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <AppStoreBadge variant="solid" location="hero" />
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-2xl border border-[rgba(236,228,207,0.2)] px-6 py-3.5 font-semibold text-cream hover:border-accent hover:text-accent transition-all"
              >
                See how it works
              </a>
            </div>

            <p className="mt-6 text-xs text-cream-dim/80">
              Free · No account needed · 100% anonymous · English &amp; العربية
            </p>
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 -z-10 teal-glow scale-150" />
              <div className="animate-float">
                <PhoneMockup>
                  <HeroPhoneScreen />
                </PhoneMockup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
