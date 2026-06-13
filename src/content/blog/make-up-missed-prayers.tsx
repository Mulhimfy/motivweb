import type { PostMeta } from "@/lib/blog/types";
import {
  Lead,
  P,
  H2,
  UL,
  LI,
  Steps,
  Step,
  Strong,
  Em,
  A,
  Quote,
  Callout,
  KeyTakeaways,
} from "@/components/blog/Prose";
import ArticleCTA from "@/components/blog/ArticleCTA";

export const meta: PostMeta = {
  slug: "make-up-missed-prayers",
  title: "How to Make Up Missed Prayers (Qada Salah): A Practical Guide",
  description:
    "Years of missed prayers feel impossible to face. Here's a practical, hope-filled way to make up qada salah without being overwhelmed — and where the scholars differ.",
  excerpt:
    "If a mountain of missed prayers is quietly convincing you there's no point starting, read this. Making up qada salah is more doable than it feels — and it begins with a single prayer, not the whole pile.",
  category: "Praying on time",
  keywords: [
    "how to make up missed prayers",
    "qada salah",
    "qada prayers",
    "making up missed prayers",
    "how to pray qada",
    "missed years of prayers",
  ],
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
  readingTime: "8 min read",
  related: ["stop-delaying-prayers", "wake-up-for-fajr"],
  faq: [
    {
      q: "Do I have to make up years of missed prayers?",
      a: "This is an area where scholars genuinely differ. The majority position across the four madhabs is that missed obligatory prayers should be made up (qada), even if there are many. A minority view holds that prayers missed deliberately cannot be made up and that one should instead make sincere repentance and pray abundant voluntary prayers. Because the rulings and how they apply to your past differ, this is exactly the kind of question to put to a trusted local scholar.",
    },
    {
      q: "How do I actually pray a qada prayer?",
      a: "A made-up prayer is prayed the same way as the on-time one — same number of rak'ah, with the intention (niyyah) that you are making up that specific missed prayer. Many people pair it with their current prayers: after praying the present Dhuhr, for example, they pray one missed Dhuhr as qada.",
    },
    {
      q: "Can I make up missed prayers all at once?",
      a: "There is no requirement to do them all in one sitting, and for most people that is not realistic. The common, sustainable approach is to attach a number of qada prayers to your daily prayers and chip away consistently over time. Steady and lasting beats intense and abandoned.",
    },
    {
      q: "Is it too late to start if I missed prayers for years?",
      a: "It is never too late to turn back to Allah. The door of repentance stays open, and the feeling that there is 'no point now' is from shaytan, not from Allah. Start with today's prayers on time, make sincere tawbah, and begin making up the past gradually — guided by a scholar for your situation.",
    },
  ],
};

export function Body() {
  return (
    <>
      <Lead>{meta.excerpt}</Lead>

      <P>
        Almost everyone who carries missed prayers carries something heavier
        alongside them: the quiet belief that the pile is too big to ever clear,
        so why bother. If that is you, hear this clearly —{" "}
        <Strong>that thought is a trap, not a fact.</Strong> You are not asked to
        fix years in a day. You are asked to begin. And beginning is far more
        within reach than the weight on your chest is telling you.
      </P>

      <KeyTakeaways
        items={[
          "Qada means making up an obligatory prayer after its time has passed.",
          "The majority of scholars say missed prayers should be made up — but scholars differ; ask one.",
          "Don't try to clear it all at once — attach qada prayers to your daily ones.",
          "Sincere repentance (tawbah) and consistency matter more than a perfect count.",
        ]}
      />

      <H2 id="what-is-qada">What qada actually means</H2>
      <P>
        <Em>Qada</Em> simply means performing a prayer after its proper time has
        passed — &ldquo;making it up.&rdquo; A qada prayer is prayed exactly like
        its on-time version: the same number of rak'ah, just with the intention
        that you are now making up that missed obligation.
      </P>
      <Callout title="An honest note on the fiqh">
        <p>
          Scholars genuinely differ on making up prayers missed{" "}
          <Em>deliberately</Em> over long periods. The majority across the four
          schools say to make them up; a minority say the focus should be sincere
          repentance and abundant voluntary prayer instead. This guide takes the
          practical, widely-followed path of making them up — but please take the
          ruling for <Em>your</Em> past to a trusted local scholar rather than
          settling it from an article.
        </p>
      </Callout>

      <H2 id="the-mindset">First, fix the mindset</H2>
      <P>
        Before any method, the real obstacle is despair. Shaytan does not need to
        stop you praying forever — he only needs to convince you that starting is
        pointless. The Qur'an answers him directly:
      </P>
      <Quote cite="Qur'an 39:53">
        “Say: O My servants who have transgressed against themselves, do not
        despair of the mercy of Allah. Indeed, Allah forgives all sins.”
      </Quote>
      <P>
        Your past missed prayers are between you and a Lord whose mercy outweighs
        them entirely. The goal now is not to drown in guilt — it is to turn
        back, and to stop the pile from growing while you clear it.
      </P>

      <H2 id="the-system">A system you can actually keep</H2>
      <Steps>
        <Step n={1} title="Stop the bleeding — lock in today's five first">
          There is no sense making up old prayers while still missing new ones.
          The foundation is praying today's five on time, every day. If that is
          the part that slips, our guide on{" "}
          <A href="/blog/stop-delaying-prayers">
            how to stop delaying your prayers
          </A>{" "}
          is the place to start — and{" "}
          <A href="/blog/wake-up-for-fajr">waking for Fajr</A> is often the
          hardest link in that chain.
        </Step>
        <Step n={2} title="Estimate the backlog — don't obsess over it">
          Make a reasonable estimate of how long you missed prayers, rather than
          chasing an impossible exact count. From roughly when you became
          accountable to roughly when you became consistent — that range is your
          working number. An honest estimate is enough to act on.
        </Step>
        <Step n={3} title="Pair qada with your daily prayers">
          The most sustainable method: with each prayer you pray on time, add one
          make-up prayer of the same type. Pray today's Fajr, then a qada Fajr;
          today's Dhuhr, then a qada Dhuhr. It barely lengthens your day, and it
          steadily empties the backlog without burning you out.
        </Step>
        <Step n={4} title="Make it a fixed daily habit">
          Decide on a realistic daily amount and protect it like an appointment.
          A handful of qada prayers a day, kept up consistently, clears far more
          over a year than occasional heroic bursts you cannot sustain.
        </Step>
        <Step n={5} title="Pair it with sincere tawbah">
          Making up the prayers is the action; repentance is the heart of it.
          Ask Allah's forgiveness genuinely, resolve not to return to neglect,
          and let the qada be the proof of that resolve rather than just a
          checklist.
        </Step>
      </Steps>

      <ArticleCTA
        location="blog_qada_mid"
        headline="Build the consistency that makes qada possible."
        body="I pray helps you lock in today's five prayers on time — accurate prayer times, an authentic adhan, app-locking, and a streak you'll want to protect — so the backlog stops growing while you clear it. Free on iPhone."
      />

      <H2 id="consistency-wins">Why consistency beats intensity</H2>
      <P>
        People who clear years of qada almost never do it in dramatic weekend
        marathons. They do it the way every lasting thing is built: a little,
        every day, kept up. The Prophet ﷺ pointed to exactly this:
      </P>
      <Quote cite="Reported from Aisha — Sahih al-Bukhari & Muslim">
        “The most beloved of deeds to Allah are those done consistently, even if
        they are small.”
      </Quote>
      <P>
        A small daily qada quota you actually maintain will outperform any plan
        that looks impressive for three days and then collapses under its own
        weight. Make it small enough to keep, and keep it.
      </P>

      <H2 id="start-now">Start with the next one</H2>
      <P>
        You will not feel the backlog shrink overnight, and that is fine. What
        matters is that the direction has changed: instead of the pile growing
        every single day, it is now shrinking every single day. That shift —
        from adding to clearing — is the whole victory. Everything after it is
        just time and consistency.
      </P>
      <P>
        Start with the next prayer. Pray it on time, add one from the past, make
        your tawbah, and trust the mercy you were promised. Allah is not waiting
        to reject you. He is waiting to forgive you.
      </P>

      <ArticleCTA
        location="blog_qada_end"
        headline="Today's prayers, on time. Starting now."
        body="I pray gives you accurate prayer times, an authentic adhan, and the focus to actually pray — the foundation everything else is built on. Free on iPhone, no account needed."
      />
    </>
  );
}
