import type { PostMeta } from "@/lib/blog/types";
import {
  Lead,
  P,
  H2,
  Strong,
  Em,
  A,
  Dua,
  Quote,
  Callout,
  KeyTakeaways,
} from "@/components/blog/Prose";
import ArticleCTA from "@/components/blog/ArticleCTA";

export const meta: PostMeta = {
  slug: "dua-for-anxiety",
  title: "Dua for Anxiety and Stress (5 Authentic Duas from the Quran & Sunnah)",
  description:
    "Feeling anxious or overwhelmed? Here are 5 authentic duas for anxiety and stress — in Arabic, transliteration, and English — with their sources and how to use them.",
  excerpt:
    "When the heart is tight with worry, the Prophet ﷺ taught us exactly what to say. These five authentic duas for anxiety and stress — with their full sources — are the words to reach for when you don't have your own.",
  category: "Duas",
  keywords: [
    "dua for anxiety",
    "dua for stress and anxiety",
    "dua for worry and anxiety",
    "dua for peace of mind",
    "islamic dua for anxiety",
    "dua to remove anxiety and depression",
    "dua for anxiety in the quran",
  ],
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
  readingTime: "7 min read",
  related: ["dua-before-sleep", "dua-for-forgiveness"],
  faq: [
    {
      q: "What is the best dua for anxiety?",
      a: "A widely recommended one is the dua of Yunus (peace be upon him): 'La ilaha illa anta subhanaka inni kuntu mina al-zalimin' (Qur'an 21:87). The Prophet ﷺ said no Muslim ever supplicates with it for anything but that Allah answers him (al-Tirmidhi). Equally direct is the Prophet's own dua against anxiety and grief reported in Sahih al-Bukhari: 'Allahumma inni a'udhu bika minal-hammi wal-hazan...' There is no single 'best' — reach for whichever you can say with presence of heart.",
    },
    {
      q: "Is there a dua for anxiety in the Quran?",
      a: "Yes. The dua of Yunus in Surah al-Anbiya (21:87) was said in the depths of distress, and Allah says directly after it: 'So We responded to him and saved him from distress. And thus do We save the believers.' Many also recite 'Hasbunallahu wa ni'mal-wakil' — 'Allah is sufficient for us, and He is the best disposer of affairs' (3:173).",
    },
    {
      q: "How many times should I recite dua for anxiety?",
      a: "There is no fixed number for most of these duas — recite them sincerely and as often as your heart needs, especially after the five daily prayers, in the morning and evening, and the moment worry strikes. What matters far more than a count is presence: understanding the words and turning to Allah with genuine need.",
    },
    {
      q: "What dua did the Prophet ﷺ make for anxiety and grief?",
      a: "In Sahih al-Bukhari he ﷺ taught: 'Allahumma inni a'udhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal, wal-bukhli wal-jubn, wa dala'id-dayn wa ghalabatir-rijal' — 'O Allah, I seek refuge in You from anxiety and grief, from weakness and laziness, from miserliness and cowardice, from the burden of debt and from being overpowered by men.'",
    },
    {
      q: "Does making dua actually help with anxiety?",
      a: "Dua brings the heart back to the One in control, and the Quran promises that 'in the remembrance of Allah do hearts find rest' (13:28) — countless believers find real relief and steadiness in it. At the same time, Islam does not ask you to choose between dua and action. Tie your camel and trust Allah: make the dua, and also take the practical means — rest, talk to someone you trust, and seek a doctor or counsellor when anxiety is persistent or severe.",
    },
  ],
};

export function Body() {
  return (
    <>
      <Lead>{meta.excerpt}</Lead>

      <P>
        Anxiety has a way of making the world feel smaller and the heart feel
        tighter. Your chest is heavy, your thoughts race ahead to everything
        that could go wrong, and even words of prayer can feel hard to find. The
        mercy of Islam is that you do not have to find them. The Prophet ﷺ, who
        knew real grief and fear, left us exact words for exactly these moments —
        words you can lean on when your own run out.
      </P>

      <KeyTakeaways
        items={[
          "The Quran promises that hearts find rest in the remembrance of Allah (13:28).",
          "The dua of Yunus (21:87) is the classic supplication for relief from distress.",
          "The Prophet ﷺ sought refuge from anxiety (hamm) and grief (hazan) in a single dua.",
          "Dua and practical means go together — make the dua, then take action and seek help when needed.",
        ]}
      />

      <H2 id="what-islam-says-about-anxiety">What Islam says about worry</H2>
      <P>
        Feeling anxious is not a sign of weak faith. Prophets felt fear and
        sorrow — Yaqub wept until he lost his sight, Musa felt fear, and the
        Prophet ﷺ grieved deeply. What Islam offers is not a demand to never
        feel anxious, but a place to <Em>put</Em> that anxiety: in the hands of
        the One who holds every outcome. That is the whole purpose of these
        duas — to move the weight off your chest and onto the One who can
        actually carry it.
      </P>
      <Quote cite="Qur'an 13:28">
        “Verily, in the remembrance of Allah do hearts find rest.”
      </Quote>

      <H2 id="authentic-duas-for-anxiety">5 authentic duas for anxiety and stress</H2>
      <P>
        Each of these is established in the Quran or the authentic Sunnah, with
        its source noted. Read the meaning slowly first — understanding the words
        is what turns recitation into relief.
      </P>

      <Callout title="Dua 1 — The dua of distress (Yunus ﷺ)">
        <p>
          Said by Yunus (Jonah) from the depths of the whale&rsquo;s belly. Allah
          says immediately after it: &ldquo;So We responded to him and saved him
          from distress&rdquo; (21:88).
        </p>
      </Callout>
      <Dua
        arabic="لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ"
        transliteration="Lā ilāha illā anta subḥānaka innī kuntu mina aẓ-ẓālimīn"
        translation="There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers."
        source="Qur'an 21:87 · The Prophet ﷺ said no Muslim supplicates with it but that Allah answers him (Jami' at-Tirmidhi, graded sahih)"
      />

      <Callout title="Dua 2 — The Prophet's dua against anxiety and grief">
        <p>
          The most direct of all — it names anxiety (<Em>hamm</Em>, worry about
          the future) and grief (<Em>hazan</Em>, sorrow over the past) and seeks
          refuge from both.
        </p>
      </Callout>
      <Dua
        arabic="اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ"
        transliteration="Allāhumma innī aʿūdhu bika mina al-hammi wa al-ḥazan, wa al-ʿajzi wa al-kasal, wa al-bukhli wa al-jubn, wa ḍalaʿi ad-dayni wa ghalabati ar-rijāl"
        translation="O Allah, I seek refuge in You from anxiety and grief, from weakness and laziness, from miserliness and cowardice, from the burden of debt and from being overpowered by men."
        source="Sahih al-Bukhari"
      />

      <Callout title="Dua 3 — Calling on the Ever-Living">
        <p>
          A short cry the Prophet ﷺ turned to when something distressed him —
          easy to memorise and to repeat when the words won&rsquo;t come.
        </p>
      </Callout>
      <Dua
        arabic="يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ"
        transliteration="Yā Ḥayyu yā Qayyūm, bi-raḥmatika astaghīth"
        translation="O Ever-Living, O Sustainer of all, by Your mercy I seek relief."
        source="Jami' at-Tirmidhi, narrated by Anas (graded hasan)"
      />

      <ArticleCTA
        location="blog_dua_anxiety_mid"
        headline="Carry these duas with you — and never miss the prayer that anchors them."
        body="I pray keeps authentic duas for anxiety, worry and hardship in your pocket with Arabic, transliteration and meaning, alongside accurate prayer times and a gentle adhan. Free on iPhone, no account needed."
      />

      <Callout title="Dua 4 — Entrusting your affairs to Allah">
        <p>
          When anxiety comes from feeling you must control everything, this dua
          hands the controls back to the only One who truly holds them.
        </p>
      </Callout>
      <Dua
        arabic="اللَّهُمَّ رَحْمَتَكَ أَرْجُو فَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ، وَأَصْلِحْ لِي شَأْنِي كُلَّهُ، لَا إِلَٰهَ إِلَّا أَنْتَ"
        transliteration="Allāhumma raḥmataka arjū falā takilnī ilā nafsī ṭarfata ʿaynin, wa aṣliḥ lī shaʾnī kullah, lā ilāha illā ant"
        translation="O Allah, it is Your mercy that I hope for, so do not leave me in charge of my affairs even for the blink of an eye, and set right for me all of my affairs. There is no deity except You."
        source="Sunan Abi Dawud (graded hasan)"
      />

      <Callout title="Dua 5 — Allah is enough">
        <p>
          The words the believers said when fear was at its highest — and Allah
          turned it into ease and favour (3:174).
        </p>
      </Callout>
      <Dua
        arabic="حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ"
        transliteration="Ḥasbunā Allāhu wa niʿma al-wakīl"
        translation="Allah is sufficient for us, and He is the best disposer of affairs."
        source="Qur'an 3:173"
      />

      <H2 id="when-and-how">When and how to make these duas</H2>
      <P>
        You do not need perfect Arabic or a fixed count. Say what you can,
        understand what you say, and turn up with a needy heart — that is the
        condition Allah loves. A few practical moments to reach for them:
      </P>
      <P>
        <Strong>Right after the five daily prayers,</Strong> when the heart is
        already turned toward Allah and dua is especially accepted. Praying on
        time is the frame that holds all of this together — if salah itself has
        slipped, start with our guide on{" "}
        <A href="/blog/stop-delaying-prayers">
          how to stop delaying your prayers
        </A>
        , because the prayer is where the calm begins. And in the morning, the
        steadiest hearts are often the ones who caught{" "}
        <A href="/blog/wake-up-for-fajr">Fajr on time</A>.
      </P>

      <H2 id="dua-and-action">Dua is the beginning, not an escape</H2>
      <P>
        Here is the honest part too much &ldquo;Islamic anxiety&rdquo; advice
        leaves out: dua is not meant to replace action. The Prophet ﷺ told the
        man to tie his camel <Em>and</Em> trust in Allah — both, in that order.
        So make these duas with full conviction, and also take the means Allah
        placed in the world: rest your body, speak to someone you trust, lighten
        what you can, and — if anxiety is persistent, heavy, or stealing your
        ability to function — see a doctor or counsellor. Seeking treatment is
        not a lapse in tawakkul; it <Em>is</Em> tawakkul, the same as taking
        medicine for any other illness.
      </P>
      <Quote cite="Reported from Abu Hurayrah — Sahih al-Bukhari">
        “Allah has not sent down a disease except that He has also sent down its
        cure.”
      </Quote>
      <P>
        Make the dua. Take the step. And trust that the One you are calling on
        hears you — &ldquo;and thus do We save the believers&rdquo; (21:88).
      </P>

      <ArticleCTA
        location="blog_dua_anxiety_end"
        headline="Keep the words close for the moment you need them."
        body="I pray puts authentic duas, accurate prayer times, and a calming adhan in one simple app — so when worry hits, what to say is already in your hand. Free on iPhone."
      />
    </>
  );
}
