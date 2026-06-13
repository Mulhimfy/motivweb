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
  slug: "dua-for-rizq",
  title: "Dua for Rizq (Authentic Duas for Provision & Sustenance)",
  description:
    "Authentic duas for rizq — provision, sustenance and barakah — from the Quran and Sunnah, in Arabic, transliteration and English, with sources and how to use them.",
  excerpt:
    "Rizq is from Allah alone — and He invites you to ask. These authentic duas for provision and sustenance, paired with the means He placed in the world, are how the believer seeks it.",
  category: "Duas",
  keywords: [
    "dua for rizq",
    "dua for provision",
    "dua for sustenance",
    "dua for wealth and barakah",
    "dua for halal rizq",
    "dua for money",
    "dua for financial difficulty",
  ],
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
  readingTime: "6 min read",
  related: ["dua-for-forgiveness", "dua-for-parents"],
  faq: [
    {
      q: "What is the best dua for rizq?",
      a: "A comprehensive one taught by the Prophet ﷺ is: 'Allahumma ikfini bihalalika 'an haramik, wa aghnini bifadlika 'amman siwak' — 'O Allah, suffice me with what You have made lawful against what is unlawful, and make me independent of all besides You by Your bounty' (al-Tirmidhi, hasan). It asks not just for provision, but for it to be pure.",
    },
    {
      q: "Which dua increases rizq and barakah?",
      a: "Istighfar is strongly linked to provision: 'Ask forgiveness of your Lord... He will send rain upon you in showers and give you increase in wealth and children' (Surah Nuh 71:10–12). Many also recite 'Allahumma inni as'aluka 'ilman nafi'an wa rizqan tayyiban wa 'amalan mutaqabbalan' after Fajr (Ibn Majah, sahih).",
    },
    {
      q: "Is there a dua for rizq in the Quran?",
      a: "Yes. The dua of Musa in his need: 'Rabbi inni lima anzalta ilayya min khayrin faqir' — 'My Lord, indeed I am, for whatever good You would send down to me, in need' (al-Qasas 28:24). It was followed immediately by relief, marriage and work.",
    },
    {
      q: "Does making dua for rizq mean I don't have to work?",
      a: "No. The Quran says 'disperse through the land and seek of the bounty of Allah' (62:10), and the Prophet ﷺ taught that the upper hand (the one that gives and earns) is better than the lower. Dua and effort go together: ask Allah, then go out and take the lawful means with trust in Him.",
    },
  ],
};

export function Body() {
  return (
    <>
      <Lead>{meta.excerpt}</Lead>

      <P>
        <Em>Rizq</Em> — provision — is wider than money. It is your health, your
        time, your knowledge, the people around you, and yes, your sustenance and
        wealth. The Quran is clear that Allah alone apportions it: &ldquo;And there
        is no creature on earth but that its provision is upon Allah&rdquo; (11:6).
        And He invites you to ask. These are the duas for it.
      </P>

      <KeyTakeaways
        items={[
          "'Allahumma ikfini bihalalika...' asks for provision that is lawful and pure.",
          "Istighfar opens the doors of rizq (Surah Nuh 71:10–12).",
          "Musa's dua (28:24) is the Quranic cry of need answered with relief.",
          "Ask Allah, then take the means — dua and lawful effort belong together.",
        ]}
      />

      <H2 id="dua-for-halal-rizq">For lawful, sufficient provision</H2>
      <P>
        Notice what this dua asks for: not just more, but <Strong>enough and
        pure</Strong> — to be made independent of everyone except Allah. That is
        the rizq worth wanting.
      </P>
      <Dua
        arabic="اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ"
        transliteration="Allāhumma ikfinī biḥalālika ʿan ḥarāmik, wa aghninī bifaḍlika ʿamman siwāk"
        translation="O Allah, suffice me with what You have made lawful against what You have made unlawful, and make me independent of all others besides You by Your bounty."
        source="Sunan al-Tirmidhi (graded hasan)"
      />

      <Callout title="The morning dua for good provision">
        <p>
          The Prophet ﷺ taught this to be said after the Fajr prayer — knowledge,
          provision and accepted deeds, together.
        </p>
      </Callout>
      <Dua
        arabic="اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا"
        transliteration="Allāhumma innī as'aluka ʿilman nāfiʿā, wa rizqan ṭayyibā, wa ʿamalan mutaqabbalā"
        translation="O Allah, I ask You for beneficial knowledge, good (lawful) provision, and accepted deeds."
        source="Sunan Ibn Majah (graded sahih)"
      />

      <ArticleCTA
        location="blog_dua_rizq_mid"
        headline="Catch the morning — where rizq and barakah begin."
        body="I pray wakes you for Fajr with an authentic adhan and keeps the morning duas for provision in your pocket. The day starts better when it starts with prayer. Free on iPhone."
      />

      <H2 id="quranic-dua-for-need">When the need is real — Musa's dua</H2>
      <P>
        Musa (peace be upon him) said this alone, tired and with nothing, having
        just helped two strangers. Within verses Allah gave him shelter, marriage
        and work. It is the dua of honest, humble need.
      </P>
      <Dua
        arabic="رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ"
        transliteration="Rabbi innī limā anzalta ilayya min khayrin faqīr"
        translation="My Lord, indeed I am, for whatever good You would send down to me, in need."
        source="Qur'an 28:24"
      />
      <P>
        And do not overlook the simplest key to provision in the Quran —{" "}
        <Strong>istighfar.</Strong> Nuh (peace be upon him) told his people that
        seeking Allah&rsquo;s forgiveness brings rain, wealth and children
        (71:10&ndash;12). If your rizq feels blocked, our guide to the{" "}
        <A href="/blog/dua-for-forgiveness">duas of forgiveness</A> is a natural
        place to turn.
      </P>

      <H2 id="dua-and-effort">Ask Allah, then tie your camel</H2>
      <P>
        The biggest mistake with rizq duas is treating them as a substitute for
        effort. They are not. Allah commands: &ldquo;When the prayer is concluded,
        disperse through the land and seek of the bounty of Allah&rdquo; (62:10).
        The believer&rsquo;s way is <Em>both</Em>: make the dua with full trust,
        then go out and work, apply, build, and give — and trust that the One who
        feeds the birds will not forget you.
      </P>
      <Quote cite="Reported from Umar ibn al-Khattab — Sunan al-Tirmidhi (hasan)">
        “If you were to rely upon Allah as He should be relied upon, He would
        provide for you as He provides for the birds: they go out hungry in the
        morning and return full in the evening.”
      </Quote>
      <P>
        Notice — the birds still <Em>go out.</Em> Tawakkul is not waiting; it is
        working while your heart leans on Allah. And keep praying for those who
        gave to you first: our{" "}
        <A href="/blog/dua-for-parents">dua for parents</A> belongs in the same
        breath, for their barakah flows into yours.
      </P>

      <ArticleCTA
        location="blog_dua_rizq_end"
        headline="Start every day with the prayer that opens provision."
        body="I pray gives you accurate prayer times, an authentic adhan, and the duas for rizq and barakah in one free app — so you ask Allah first, then go earn with trust. Free on iPhone."
      />
    </>
  );
}
