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
  slug: "dua-for-forgiveness",
  title: "Dua for Forgiveness (Sayyid al-Istighfar & Authentic Duas)",
  description:
    "Authentic duas for seeking Allah's forgiveness — including Sayyid al-Istighfar, the master supplication — in Arabic, transliteration and English, with sources.",
  excerpt:
    "No sin is too big for Allah's mercy. These are the authentic duas for seeking forgiveness — led by Sayyid al-Istighfar, the master of them all — with how and when to say them.",
  category: "Duas",
  keywords: [
    "dua for forgiveness",
    "istighfar dua",
    "sayyid al istighfar",
    "dua to ask allah for forgiveness",
    "dua for repentance",
    "best dua for forgiveness",
    "astaghfirullah dua",
  ],
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
  readingTime: "6 min read",
  related: ["dua-for-anxiety", "dua-for-rizq"],
  faq: [
    {
      q: "What is the best dua for forgiveness?",
      a: "Sayyid al-Istighfar — 'the master of seeking forgiveness.' The Prophet ﷺ said whoever says it during the day with firm faith and dies that day before evening, or says it at night and dies before morning, will be among the people of Paradise (Sahih al-Bukhari). It begins 'Allahumma anta rabbi la ilaha illa ant...'",
    },
    {
      q: "What is the simplest dua for forgiveness?",
      a: "'Astaghfirullaha wa atubu ilayh' — 'I seek the forgiveness of Allah and turn to Him in repentance.' The Prophet ﷺ, though already forgiven, sought Allah's forgiveness more than seventy (and in another report, a hundred) times a day (Sahih al-Bukhari & Muslim).",
    },
    {
      q: "Is there a dua for forgiveness in the Quran?",
      a: "Yes — the dua of Adam and Hawwa: 'Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakunanna minal-khasirin' (al-A'raf 7:23). It is the model of admitting the wrong, throwing yourself on Allah's mercy, and asking to be forgiven.",
    },
    {
      q: "Does istighfar erase sins?",
      a: "Allah promises forgiveness to those who turn to Him sincerely: 'And whoever does a wrong or wrongs himself but then seeks forgiveness of Allah will find Allah Forgiving and Merciful' (an-Nisa 4:110). Sincere repentance — regret, stopping the sin, and resolve not to return — combined with istighfar, is the path the Quran lays out.",
    },
  ],
};

export function Body() {
  return (
    <>
      <Lead>{meta.excerpt}</Lead>

      <P>
        The door of forgiveness in Islam is never closed while you are alive.
        However far you feel you have drifted, the turning back is one sincere dua
        away — and Allah, the Quran tells us repeatedly, is more pleased by that
        return than you could imagine. These are the words the Prophet ﷺ taught
        for it, starting with the greatest of them.
      </P>

      <KeyTakeaways
        items={[
          "Sayyid al-Istighfar is the 'master' dua for forgiveness — learn it first.",
          "'Astaghfirullaha wa atubu ilayh' is the simple istighfar to repeat all day.",
          "Adam's dua (7:23) is the Quranic model: admit, plead, ask.",
          "Istighfar works alongside real repentance — regret, stop, and resolve not to return.",
        ]}
      />

      <H2 id="sayyid-al-istighfar">Sayyid al-Istighfar — the master supplication</H2>
      <P>
        The Prophet ﷺ called this <Em>the master of seeking forgiveness.</Em>{" "}
        Whoever says it in the day with conviction and dies that day, or says it
        at night and dies that night, is among the people of Paradise. It is worth
        memorising slowly, a line at a time.
      </P>
      <Dua
        arabic="اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ"
        transliteration="Allāhumma anta rabbī lā ilāha illā ant, khalaqtanī wa anā ʿabduk, wa anā ʿalā ʿahdika wa waʿdika ma astaṭaʿt, aʿūdhu bika min sharri mā ṣanaʿt, abū'u laka biniʿmatika ʿalayy, wa abū'u bidhanbī faghfir lī fa'innahu lā yaghfiru adh-dhunūba illā ant"
        translation="O Allah, You are my Lord, there is no deity but You. You created me and I am Your servant, and I keep to Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favour upon me, and I acknowledge my sin, so forgive me, for none forgives sins except You."
        source="Sahih al-Bukhari"
      />

      <Callout title="The Quranic model — Adam's dua">
        <p>
          When Adam and Hawwa erred, they did not argue or despair — they owned
          it and turned to Allah. This is the template for every istighfar.
        </p>
      </Callout>
      <Dua
        arabic="رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ"
        transliteration="Rabbanā ẓalamnā anfusanā wa in lam taghfir lanā wa tarḥamnā lanakūnanna mina al-khāsirīn"
        translation="Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers."
        source="Qur'an 7:23"
      />

      <ArticleCTA
        location="blog_dua_forgiveness_mid"
        headline="Keep Sayyid al-Istighfar where you can read it every morning."
        body="I pray keeps the authentic morning and evening adhkar — including the duas of forgiveness — in your pocket, with prayer times and a gentle adhan. Free on iPhone, no account needed."
      />

      <H2 id="the-simple-istighfar">The simple istighfar to keep on your tongue</H2>
      <P>
        Not every moment allows a long supplication. For driving, walking, waiting
        — keep this turning quietly:
      </P>
      <Dua
        arabic="أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ"
        transliteration="Astaghfirullāha wa atūbu ilayh"
        translation="I seek the forgiveness of Allah and turn to Him in repentance."
        source="The Prophet ﷺ did this 70–100 times a day (Sahih al-Bukhari & Muslim)"
      />
      <P>
        And a short, beautiful one the Prophet ﷺ would repeat many times in a
        single sitting:
      </P>
      <Dua
        arabic="رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ"
        transliteration="Rabbi ighfir lī wa tub ʿalayya innaka anta at-tawwābu ar-raḥīm"
        translation="My Lord, forgive me and accept my repentance; indeed You are the Acceptor of repentance, the Merciful."
        source="Sunan Abi Dawud & al-Tirmidhi (graded hasan sahih)"
      />

      <H2 id="istighfar-and-repentance">Istighfar is the tongue; repentance is the heart</H2>
      <P>
        Here is the honest part: saying the words while planning to return to the
        sin is not the repentance the Quran describes. True{" "}
        <Em>tawbah</Em> has three parts the scholars draw from the texts —{" "}
        <Strong>regret over what was done, stopping the sin now, and a sincere
        resolve not to go back to it</Strong> (and, where a person was wronged,
        returning their right). The dua is how you voice all of that to Allah.
      </P>
      <Quote cite="Qur'an 39:53">
        “Say: O My servants who have transgressed against themselves, do not
        despair of the mercy of Allah. Indeed, Allah forgives all sins.”
      </Quote>
      <P>
        Do not let shame keep you away from the very One who is waiting to forgive
        you. Say the words, mean them, and turn the page. If anxiety or guilt is
        weighing on you, our guide to the{" "}
        <A href="/blog/dua-for-anxiety">duas for anxiety and stress</A> pairs
        naturally with this one — forgiveness and peace tend to arrive together.
      </P>

      <ArticleCTA
        location="blog_dua_forgiveness_end"
        headline="Start fresh — today, on time, with a clear heart."
        body="I pray brings together prayer times, an authentic adhan, and the duas of forgiveness and remembrance, so turning back to Allah is the easiest thing in your day. Free on iPhone."
      />
    </>
  );
}
