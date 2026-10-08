import Link from "next/link";
import StoreBadges from "@/components/StoreBadges";
import ReelDemo from "./ReelDemo";
import Icon, { type IconName } from "./Icon";
import { homeFaq } from "@/lib/faq";
import { posts } from "@/lib/blog/registry";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-gold">{children}</p>
  );
}

function H2({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`font-[family-name:var(--font-serif-var)] text-[34px] font-semibold leading-[1.1] tracking-tight text-cream-bright md:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

/* ------------------------------------------------------------------ hero */

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="islamic-pattern pointer-events-none absolute inset-0 opacity-60" />
      <div className="gold-glow pointer-events-none absolute -top-40 right-[-10%] h-[640px] w-[640px]" />
      <div className="gold-glow pointer-events-none absolute -bottom-60 left-[-15%] h-[520px] w-[520px] opacity-60" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-12 sm:px-6 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28">
        <div className="text-center lg:text-left">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold-bright">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Quran reel maker for Android and iPhone
          </p>
          <h1 className="font-[family-name:var(--font-serif-var)] text-[44px] font-semibold leading-[1.02] tracking-tight text-cream-bright sm:text-6xl lg:text-[72px]">
            Let the next thing on someone&apos;s feed be{" "}
            <span className="text-gold-gradient italic">an ayah.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream-dim lg:mx-0">
            Turn any verse of the Quran into a beautiful reel. The recitation you
            love, the Arabic and its translation lighting up word by word, over
            calm scenery. No editing. Ready to share in under a minute.
          </p>
          <StoreBadges location="hero" className="mt-9 justify-center lg:justify-start" />
          <p className="mt-5 text-sm text-cream-dim/80">
            Free · No account · No ads · No tracking
          </p>
        </div>

        <div className="animate-float">
          <ReelDemo />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- stats */

const STATS = [
  ["114", "surahs, every ayah"],
  ["100+", "reciters"],
  ["700+", "sceneries"],
  ["9:16", "HD video"],
  ["5", "languages"],
];

export function Stats() {
  return (
    <section className="border-y border-border bg-surface/50">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-4 py-10 sm:grid-cols-5 sm:px-6">
        {STATS.map(([n, l]) => (
          <div key={l} className="text-center">
            <dt className="sr-only">{l}</dt>
            <dd className="font-[family-name:var(--font-serif-var)] text-4xl font-semibold text-gold-gradient">
              {n}
            </dd>
            <dd className="mt-1 text-sm text-cream-dim">{l}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/* ----------------------------------------------------------------- steps */

const STEPS: { icon: IconName; title: string; body: string }[] = [
  { icon: "mic", title: "Pick a reciter", body: "Tap any voice to hear it first. Alafasy, Al-Husary, Abdul Basit, As-Sudais and 100 more." },
  { icon: "book", title: "Pick your verses", body: "Any surah. Tap the first ayah and the last. That is your range." },
  { icon: "image", title: "Pick a scenery", body: "Swipe through sky, sea, desert and mosques with your verse already on it." },
  { icon: "type", title: "Make it yours", body: "Font, size, colour, glow and position, set on a still frame you can see." },
  { icon: "share", title: "Share", body: "Your reel plays at once. Send it to WhatsApp, Instagram, TikTok or save it." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <div className="reveal mx-auto max-w-2xl text-center">
        <Eyebrow>How it works</Eyebrow>
        <H2>Five taps from verse to reel</H2>
        <p className="mt-5 text-lg text-cream-dim">
          Lining up recitation, Arabic and translation used to take hours in a
          video editor. AyahReel does it for you, to the exact syllable.
        </p>
      </div>

      <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {STEPS.map((s, i) => (
          <li key={s.title} className="glass-card reveal relative p-6">
            <span className="absolute right-5 top-4 font-[family-name:var(--font-serif-var)] text-4xl font-semibold text-cream/10">
              {i + 1}
            </span>
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/10 text-gold">
              <Icon name={s.icon} />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-cream-bright">{s.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-cream-dim">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* -------------------------------------------------------------- features */

const FEATURES: { icon: IconName; title: string; body: string; wide?: boolean }[] = [
  {
    icon: "sparkle",
    title: "Word by word",
    body: "Each word lights up the moment it is recited, so viewers follow along and learn as they listen.",
    wide: true,
  },
  {
    icon: "moon",
    title: "Jummah reel, every Friday",
    body: "A ready-made reel of Al-Ahzab 33:56, the ayah of salawat. One tap and your Friday reminder is posted.",
    wide: true,
  },
  { icon: "card", title: "Islamic cards", body: "Turn a verse or a hadith into a card for your Instagram story, with frames, fonts and effects." },
  { icon: "quiz", title: "Tanafus: Quran quiz", body: "Complete the verse, find the missing word, name the surah. Then dare a friend to beat you." },
  { icon: "mic", title: "Your own voice", body: "Upload your own recitation and turn it into a reel with the text on screen." },
  { icon: "series", title: "Reel series", body: "A whole surah over several days, one reel to share each day." },
  { icon: "bell", title: "Daily ayah", body: "A verse on your home screen widget and a gentle reminder to keep your streak." },
  { icon: "gift", title: "Dedicate it", body: "Make a reel or card as sadaqah jariyah for someone you love, or send it as a gift." },
  {
    icon: "share",
    title: "Share anywhere",
    body: "Vertical 9:16 HD for TikTok, Instagram Reels, YouTube Shorts and WhatsApp status, with one-tap buttons for WhatsApp and Instagram Stories.",
    wide: true,
  },
];

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-24 md:py-32">
      <div className="islamic-pattern pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <Eyebrow>Features</Eyebrow>
          <H2>More ways to live with the Quran</H2>
          <p className="mt-5 text-lg text-cream-dim">
            Reels are the start. AyahReel is built to keep the Quran close to
            you, and to the people who follow you.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className={`glass-card reveal p-7 ${f.wide ? "lg:col-span-2" : ""}`}
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/10 text-gold">
                <Icon name={f.icon} />
              </span>
              <h3
                className={`mt-5 font-semibold text-cream-bright ${f.wide ? "font-[family-name:var(--font-serif-var)] text-2xl" : "text-lg"}`}
              >
                {f.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-cream-dim">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- scenery */

const TABS = ["sky", "water", "desert", "sacred", "forest", "mountains", "road", "abstract"];
const ROW_A = TABS.flatMap((t) => [`${t}-1`, `${t}-2`]);
const ROW_B = TABS.flatMap((t) => (t === "mountains" ? [] : [`${t}-3`, `${t}-4`]));

function Strip({ ids, reverse }: { ids: string[]; reverse?: boolean }) {
  // Doubled so the track can slide by half its width and loop seamlessly.
  const all = [...ids, ...ids];
  return (
    <div className="marquee-mask overflow-hidden">
      <div className={`marquee-track gap-4 ${reverse ? "reverse" : ""}`}>
        {all.map((id, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`${id}-${i}`}
            src={`/thumbs/${id}.webp`}
            alt=""
            width={216}
            height={384}
            loading="lazy"
            className="h-[220px] w-[124px] rounded-2xl object-cover ring-1 ring-white/10 md:h-[260px] md:w-[146px]"
          />
        ))}
      </div>
    </div>
  );
}

export function Scenery() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="scenery-title">
      <div className="reveal mx-auto max-w-2xl px-4 text-center sm:px-6">
        <Eyebrow>Sceneries</Eyebrow>
        <H2>
          <span id="scenery-title">A backdrop worthy of the words</span>
        </H2>
        <p className="mt-5 text-lg text-cream-dim">
          More than 700 calm photos and moving videos: night skies, open sea,
          desert dunes, forests and minarets. Or use your own photo or video.
        </p>
      </div>
      <div className="mt-14 space-y-4" aria-hidden="true">
        <Strip ids={ROW_A} />
        <Strip ids={ROW_B} reverse />
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- dawah */

export function Dawah() {
  return (
    <section className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="reveal relative mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-gold/20 bg-gradient-to-b from-surface-2 to-surface p-8 text-center md:p-16">
        <div className="gold-glow pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2" />
        <div className="relative">
          <Eyebrow>A halal way to create</Eyebrow>
          <H2>Change your feed. Change your days.</H2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream-dim">
            The world scrolls through reels for hours. Each one you post could
            reach someone at the very moment they needed that ayah. And every
            view, every share, every heart softened can carry on as your
            sadaqah jariyah, in shaa Allah.
          </p>
          <figure className="mt-12">
            <blockquote>
              <p lang="ar" dir="rtl" className="font-arabic text-3xl leading-loose text-gold-bright md:text-4xl">
                مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ
              </p>
              <p className="mt-4 font-[family-name:var(--font-serif-var)] text-xl italic text-cream md:text-2xl">
                &ldquo;Whoever guides someone to goodness will have a reward like
                the one who does it.&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-3 text-sm text-cream-dim">Sahih Muslim 1893</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- amanah */

const RECITERS = [
  "Mishary Alafasy", "Mahmoud Al-Husary", "Abdul Basit", "Al-Minshawi",
  "Abdur-Rahman As-Sudais", "Saud Ash-Shuraym", "Maher Al-Muaiqly", "Ali Al-Hudhaify",
  "Yasser Ad-Dussary", "Abu Bakr Ash-Shatri", "Muhammad Ayyub", "Ahmed Al-Ajmi",
  "Nasser Al-Qatami", "Abdullah Al-Juhani", "Salah Al-Budair", "Hani Ar-Rifai",
  "Muhammad Jibreel", "Abdullah Basfar", "Salah Bukhatir", "Khalid Al-Qahtani",
];

const SOURCES: [string, string][] = [
  ["Arabic text", "Tanzil, Uthmani script"],
  ["English", "Saheeh International"],
  ["Recitations", "EveryAyah, mp3quran, Quranic Audio, King Saud University"],
  ["Timing", "Each ayah measured against its recitation"],
];

export function Amanah() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="reveal">
          <Eyebrow>Made with amanah</Eyebrow>
          <H2>Treated with the care the Book deserves</H2>
          <p className="mt-5 text-lg leading-relaxed text-cream-dim">
            No distortion, no careless edits. The text comes from trusted
            sources and every word is timed to the reciter&apos;s voice, so what
            people read is exactly what they hear.
          </p>
          <dl className="mt-10 divide-y divide-border border-y border-border">
            {SOURCES.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
                <dt className="w-32 shrink-0 text-sm font-medium text-gold">{k}</dt>
                <dd className="text-[15px] text-cream">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal">
          <div className="glass-card h-full p-7 md:p-9">
            <p className="text-sm font-medium text-cream-bright">
              Voices you know and love
            </p>
            <p className="mt-1 text-sm text-cream-dim">
              Murattal and mujawwad. Tap any of them in the app to hear it.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {RECITERS.map((r) => (
                <li
                  key={r}
                  className="rounded-full border border-border bg-white/[0.03] px-3.5 py-1.5 text-sm text-cream"
                >
                  {r}
                </li>
              ))}
              <li className="rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-sm text-gold-bright">
                and 80+ more
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- privacy */

const PRIVACY: { icon: IconName; title: string; body: string }[] = [
  { icon: "lock", title: "No account", body: "Open the app and start. No sign up, no email, no password." },
  { icon: "noads", title: "No ads, no tracking", body: "No advertising, no analytics and no tracking inside the app." },
  { icon: "phone", title: "Stays on your phone", body: "Your reels, photos and recordings never leave your device." },
  { icon: "offline", title: "Works offline", body: "Everything you use once is saved, so the next reel needs no signal." },
];

export function Privacy() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Eyebrow>Private by design</Eyebrow>
            <H2>Your reels are yours</H2>
          </div>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PRIVACY.map((p) => (
            <div key={p.title} className="reveal">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-gold/25 text-gold">
                <Icon name={p.icon} />
              </span>
              <h3 className="mt-4 font-semibold text-cream-bright">{p.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-cream-dim">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- faq */

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-24 sm:px-6 md:py-32">
      <div className="reveal text-center">
        <Eyebrow>FAQ</Eyebrow>
        <H2>Questions, answered</H2>
      </div>
      <div className="mt-12 divide-y divide-border border-y border-border">
        {homeFaq.map((f) => (
          <details key={f.q} className="group py-1">
            <summary className="flex items-center justify-between gap-6 py-5 text-left text-[17px] font-medium text-cream-bright">
              {f.q}
              <span className="faq-icon grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border text-gold transition-transform">
                +
              </span>
            </summary>
            <p className="pb-6 pr-12 text-[15px] leading-relaxed text-cream-dim">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- guides */

export function Guides() {
  const latest = posts.slice(0, 3);
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 md:pb-32">
      <div className="reveal flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Eyebrow>Guides</Eyebrow>
          <H2>Duas and prayer, made practical</H2>
        </div>
        <Link href="/blog" className="text-sm font-medium text-gold hover:text-gold-bright">
          All guides →
        </Link>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {latest.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="glass-card reveal group flex flex-col p-7">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold">{p.category}</p>
            <h3 className="mt-3 font-[family-name:var(--font-serif-var)] text-xl font-semibold leading-snug text-cream group-hover:text-cream-bright">
              {p.title}
            </h3>
            <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-cream-dim">{p.excerpt}</p>
            <span className="mt-5 text-sm text-gold">{p.readingTime}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- final cta */

export function FinalCta() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 sm:px-6 md:pb-32">
      <div className="reveal relative mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-gold/25 p-10 text-center md:p-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/scenes/sacred.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        <div className="relative">
          <p lang="ar" dir="rtl" className="font-arabic text-2xl text-gold-bright md:text-3xl">
            وَرَتِّلِ ٱلْقُرْءَانَ تَرْتِيلًا
          </p>
          <p className="mt-2 text-sm italic text-cream-dim">
            &ldquo;And recite the Quran with measured recitation.&rdquo; Al-Muzzammil 73:4
          </p>
          <H2 className="mt-8">Your first reel is a minute away</H2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-cream-dim">
            Free on Android and iPhone. Pick a verse, and let it reach someone today.
          </p>
          <StoreBadges location="final_cta" className="mt-9 justify-center" />
        </div>
      </div>
    </section>
  );
}
