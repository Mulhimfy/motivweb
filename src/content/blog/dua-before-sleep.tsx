import type { PostMeta } from "@/lib/blog/types";
import {
  Lead,
  P,
  H2,
  Strong,
  Em,
  A,
  UL,
  LI,
  Dua,
  Quote,
  Callout,
  KeyTakeaways,
} from "@/components/blog/Prose";
import ArticleCTA from "@/components/blog/ArticleCTA";

export const meta: PostMeta = {
  slug: "dua-before-sleep",
  title: "Dua Before Sleep (Authentic Bedtime Duas from the Sunnah)",
  description:
    "The duas the Prophet ﷺ said before sleeping — in Arabic, transliteration and English, with sources. A simple bedtime routine to sleep under Allah's protection.",
  excerpt:
    "The last thing you say before sleep shapes the night. These are the authentic duas the Prophet ﷺ taught for bedtime — short, sourced, and easy to make a habit.",
  category: "Duas",
  keywords: [
    "dua before sleep",
    "dua for sleeping",
    "sleeping dua",
    "bedtime dua",
    "dua before bed",
    "what to recite before sleeping",
    "sunnah of sleeping",
  ],
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
  readingTime: "6 min read",
  related: ["dua-for-anxiety", "dua-for-forgiveness"],
  faq: [
    {
      q: "What is the main dua to say before sleeping?",
      a: "The Prophet ﷺ would say when going to bed: 'Bismika Allahumma amutu wa ahya' — 'In Your name, O Allah, I die and I live' (Sahih al-Bukhari). It is short, easy to memorise, and the simplest way to make sleep an act of remembrance.",
    },
    {
      q: "What should I recite before sleeping for protection?",
      a: "Established practice from the Sunnah includes reciting Ayat al-Kursi (al-Baqarah 2:255) — a guardian is appointed over you until morning (Sahih al-Bukhari) — the last two verses of Surah al-Baqarah, and the three Quls (al-Ikhlas, al-Falaq, an-Nas) blown into the palms and wiped over the body three times (Sahih al-Bukhari).",
    },
    {
      q: "What dua did the Prophet ﷺ say lying down to sleep?",
      a: "Lying on his right side he ﷺ would say: 'Allahumma aslamtu nafsi ilayk...' — 'O Allah, I submit myself to You, turn my face to You, entrust my affairs to You...' He said whoever says it and dies that night dies upon the fitrah (Sahih al-Bukhari & Muslim).",
    },
    {
      q: "What is the tasbih before sleep?",
      a: "The Prophet ﷺ taught Fatimah to say, on going to bed, SubhanAllah thirty-three times, Alhamdulillah thirty-three times, and Allahu Akbar thirty-four times — telling her it was better for her than a servant (Sahih al-Bukhari & Muslim).",
    },
  ],
};

export function Body() {
  return (
    <>
      <Lead>{meta.excerpt}</Lead>

      <P>
        Sleep is described in the Quran as a sign of Allah and a kind of small
        death — &ldquo;It is He who takes your souls by night&rdquo; (6:60). The
        Prophet ﷺ treated bedtime accordingly: not as the day winding down, but
        as handing yourself back to Allah for the night. He left a simple,
        repeatable routine for it, and none of it takes more than a minute or two.
      </P>

      <KeyTakeaways
        items={[
          "Say 'Bismika Allahumma amutu wa ahya' as you lie down — the simplest bedtime dua.",
          "Recite Ayat al-Kursi for protection through the night (Bukhari).",
          "'Allahumma aslamtu nafsi ilayk' entrusts your whole self to Allah before sleep.",
          "End the day with istighfar and a clear heart — it's the Sunnah way to close a day.",
        ]}
      />

      <H2 id="the-bedtime-duas">The authentic bedtime duas</H2>
      <P>
        Start with the shortest and build from there. Even one of these, said
        with meaning, changes how you go to sleep.
      </P>

      <Callout title="Dua 1 — The simplest, as you lie down">
        <p>
          Short enough that there is no excuse to forget it. The Prophet ﷺ said
          it every night.
        </p>
      </Callout>
      <Dua
        arabic="بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا"
        transliteration="Bismika Allāhumma amūtu wa aḥyā"
        translation="In Your name, O Allah, I die and I live."
        source="Sahih al-Bukhari"
      />

      <Callout title="Dua 2 — Submitting yourself for the night">
        <p>
          Said lying on the right side. He ﷺ said whoever says it and dies that
          night dies upon the natural state of faith (<Em>fitrah</Em>).
        </p>
      </Callout>
      <Dua
        arabic="اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ"
        transliteration="Allāhumma aslamtu nafsī ilayk, wa wajjahtu wajhī ilayk, wa fawwaḍtu amrī ilayk, wa alja'tu ẓahrī ilayk, raghbatan wa rahbatan ilayk, lā malja'a wa lā manjā minka illā ilayk, āmantu bikitābika alladhī anzalt, wa binabiyyika alladhī arsalt"
        translation="O Allah, I submit myself to You, turn my face to You, entrust my affairs to You, and lay myself down relying on You, in hope and fear of You. There is no refuge and no escape from You except to You. I believe in Your Book which You revealed and Your Prophet whom You sent."
        source="Sahih al-Bukhari & Muslim"
      />

      <Callout title="Dua 3 — Seeking safety from the Day of Judgement">
        <p>The Prophet ﷺ would say this three times as he settled to sleep.</p>
      </Callout>
      <Dua
        arabic="اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ"
        transliteration="Allāhumma qinī ʿadhābaka yawma tabʿathu ʿibādak"
        translation="O Allah, protect me from Your punishment on the Day You resurrect Your servants."
        source="Sunan Abi Dawud (graded sahih by Ibn Hajar)"
      />

      <ArticleCTA
        location="blog_dua_sleep_mid"
        headline="Build a bedtime routine you'll actually keep."
        body="I pray keeps the authentic sleeping duas, the three Quls and Ayat al-Kursi in your pocket — and locks the apps that keep you scrolling past your bedtime. Free on iPhone, no account needed."
      />

      <H2 id="the-protection-recitations">The recitations for protection</H2>
      <P>
        Beyond the duas above, the Sunnah adds a short protection routine before
        sleep. You do not need to do all of it from night one — add what you can:
      </P>
      <UL>
        <LI>
          <Strong>Ayat al-Kursi</Strong> (al-Baqarah 2:255) — whoever recites it
          on going to bed has a guardian from Allah and no devil comes near until
          morning (Sahih al-Bukhari).
        </LI>
        <LI>
          <Strong>The last two verses of Surah al-Baqarah</Strong> (2:285&ndash;286)
          — &ldquo;whoever recites them at night, they will suffice him&rdquo;
          (Sahih al-Bukhari & Muslim).
        </LI>
        <LI>
          <Strong>The three Quls</Strong> — al-Ikhlas, al-Falaq and an-Nas: blow
          lightly into the palms, recite each, and wipe over the body, repeating
          three times (Sahih al-Bukhari).
        </LI>
        <LI>
          <Strong>The tasbih of Fatimah</Strong> — SubhanAllah ×33, Alhamdulillah
          ×33, Allahu Akbar ×34 (Sahih al-Bukhari & Muslim).
        </LI>
      </UL>

      <H2 id="the-night-before-problem">Close the day before you close your eyes</H2>
      <P>
        Two honest things make these duas land. First, <Strong>end the day with
        istighfar</Strong> — a clear heart sleeps lighter; our guide to{" "}
        <A href="/blog/dua-for-forgiveness">seeking forgiveness</A> has the words.
        Second, <Strong>protect the sleep itself.</Strong> The most beautiful
        bedtime dua does little if you say it and then scroll for another hour.
        For most people the phone is the real thief of both sleep and Fajr — which
        is exactly the battle in our guide on{" "}
        <A href="/blog/wake-up-for-fajr">how to wake up for Fajr</A>.
      </P>
      <Quote cite="Reported from al-Bara ibn Azib — Sahih al-Bukhari & Muslim">
        “When you go to your bed, perform wudu as you would for prayer, then lie
        on your right side…”
      </Quote>
      <P>
        Wudu, a few verses, a short dua, phone out of reach. That is the whole
        Sunnah of sleep — and a calmer night than any amount of scrolling will
        ever give you.
      </P>

      <ArticleCTA
        location="blog_dua_sleep_end"
        headline="Make tonight the first night you sleep on the Sunnah."
        body="I pray gives you the bedtime duas, prayer times, a gentle adhan to wake you, and app-locking to guard your sleep — all in one free app. Start tonight."
      />
    </>
  );
}
