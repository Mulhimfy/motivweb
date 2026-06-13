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
  slug: "dua-for-parents",
  title: "Dua for Parents (Quranic Duas for Living & Deceased Parents)",
  description:
    "Authentic Quranic duas for your parents — for their mercy, forgiveness and wellbeing, living or passed away — in Arabic, transliteration and English, with sources.",
  excerpt:
    "Few duas are as beloved to Allah as a child praying for their parents. These are the Quranic duas for your parents — for mercy, forgiveness and reward — whether they're with you or have passed on.",
  category: "Duas",
  keywords: [
    "dua for parents",
    "dua for parents forgiveness",
    "dua for deceased parents",
    "dua for mother and father",
    "rabbi irhamhuma",
    "dua for parents health",
    "quran dua for parents",
  ],
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
  readingTime: "5 min read",
  related: ["dua-for-forgiveness", "dua-for-rizq"],
  faq: [
    {
      q: "What is the dua for parents from the Quran?",
      a: "The most well-known is 'Rabbi irhamhuma kama rabbayani saghira' — 'My Lord, have mercy upon them as they brought me up when I was small' (al-Isra 17:24). Allah commands it directly after telling us to be gentle and humble with our parents.",
    },
    {
      q: "What dua can I make for deceased parents?",
      a: "Continue 'Rabbi irhamhuma...' and 'Rabbana ighfir li wa liwalidayya' (Ibrahim 14:41) — asking for their forgiveness and mercy. The Prophet ﷺ said that when a person dies their deeds end except for three, one of which is 'a righteous child who prays for them' (Sahih Muslim), so your dua is an ongoing gift to them.",
    },
    {
      q: "Is it allowed to make dua for non-Muslim parents?",
      a: "You may pray for their guidance and for good treatment of them in this life, and Islam strongly commands kindness to parents regardless of their faith. Asking forgiveness for those who died upon disbelief is an exception scholars discuss from the Quran; for your situation, ask a trusted local scholar.",
    },
    {
      q: "What is the best gift I can give my parents after they die?",
      a: "Ongoing dua for them, giving charity on their behalf, fulfilling their debts and promises, and keeping ties with their friends and relatives. The Prophet ﷺ described a righteous child's dua as a means by which a parent's rank is raised after death.",
    },
  ],
};

export function Body() {
  return (
    <>
      <Lead>{meta.excerpt}</Lead>

      <P>
        Allah places kindness to parents directly beside worship of Him: &ldquo;Your
        Lord has decreed that you worship none but Him, and to parents, good
        treatment&rdquo; (17:23). Praying for them is one of the purest forms of
        that good treatment — a quiet act they may never see, carried straight to
        Allah. These duas come from the Quran itself, words Allah chose for exactly
        this.
      </P>

      <KeyTakeaways
        items={[
          "'Rabbi irhamhuma...' (17:24) is the central dua for your parents' mercy.",
          "'Rabbana ighfir li wa liwalidayya' (14:41) asks forgiveness for you and them.",
          "Dua for deceased parents is an ongoing charity that raises their rank.",
          "Pair the dua with action: call them, serve them, keep their ties.",
        ]}
      />

      <H2 id="dua-for-mercy">For Allah's mercy on them</H2>
      <P>
        This is the dua Allah teaches right after commanding gentleness and
        humility toward parents. Say it for them daily — it costs seconds and
        means everything.
      </P>
      <Dua
        arabic="رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا"
        transliteration="Rabbi irḥamhumā kamā rabbayānī ṣaghīrā"
        translation="My Lord, have mercy upon them as they brought me up when I was small."
        source="Qur'an 17:24"
      />

      <Callout title="For your forgiveness and theirs">
        <p>
          The dua of Ibrahim (peace be upon him) — joining your forgiveness to
          your parents&rsquo; and to all the believers.
        </p>
      </Callout>
      <Dua
        arabic="رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ"
        transliteration="Rabbanā ighfir lī wa liwālidayya wa lil-mu'minīna yawma yaqūmu al-ḥisāb"
        translation="Our Lord, forgive me and my parents and the believers on the Day the account is established."
        source="Qur'an 14:41"
      />

      <ArticleCTA
        location="blog_dua_parents_mid"
        headline="Make dua for your parents part of every prayer."
        body="I pray keeps these Quranic duas in your pocket and reminds you to pray on time — so a dua for the two people who raised you is never far from your day. Free on iPhone, no account needed."
      />

      <H2 id="dua-of-gratitude">For gratitude and righteousness</H2>
      <P>
        A fuller dua that thanks Allah for the favour shown to you{" "}
        <Em>and</Em> to your parents, and asks to be made righteous — the best
        thing you can become for their sake.
      </P>
      <Dua
        arabic="رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ"
        transliteration="Rabbi awziʿnī an ashkura niʿmataka allatī anʿamta ʿalayya wa ʿalā wālidayya wa an aʿmala ṣāliḥan tarḍāh"
        translation="My Lord, enable me to be grateful for Your favour which You have bestowed upon me and upon my parents, and to do righteousness of which You approve."
        source="Qur'an 46:15"
      />

      <H2 id="dua-and-action">Dua is half of it — service is the other half</H2>
      <P>
        These words are most truthful when matched by how you treat your parents.
        If they are alive, the dua is a prompt: <Strong>call them, be patient with
        them, sit with them.</Strong> The Prophet ﷺ said it three times — humiliated
        is the one who finds his parents in old age and does not enter Paradise
        through serving them (Sahih Muslim).
      </P>
      <Quote cite="Reported from Abu Hurayrah — Sahih Muslim">
        “When a person dies, their deeds end except three: ongoing charity,
        knowledge benefited from, and a righteous child who prays for them.”
      </Quote>
      <P>
        If your parents have passed, this hadith is your comfort: your dua still
        reaches them. Keep saying it. And if their passing weighs heavy, the{" "}
        <A href="/blog/dua-for-anxiety">duas for grief and anxiety</A> were given
        for exactly this kind of ache. Seeking{" "}
        <A href="/blog/dua-for-forgiveness">forgiveness</A> for them is among the
        greatest gifts you can still send.
      </P>

      <ArticleCTA
        location="blog_dua_parents_end"
        headline="Let every prayer carry a dua for the ones who raised you."
        body="I pray brings prayer times, an authentic adhan, and the duas for your parents into one simple app — so you never go a day without praying for them. Free on iPhone."
      />
    </>
  );
}
