import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | AyahReel",
  description:
    "AyahReel has no accounts, no advertising, no analytics and no tracking. Everything you make stays on your phone.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-10">
      <h2 className="mb-3 font-[family-name:var(--font-serif-var)] text-2xl font-semibold text-cream-bright">
        {title}
      </h2>
      <div className="space-y-4 text-[16px] leading-[1.8] text-cream/85 [&_strong]:text-cream-bright [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="pt-2 text-lg font-semibold text-cream-bright">{children}</h3>;
}

const mail = (
  <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:text-gold-bright">
    {CONTACT_EMAIL}
  </a>
);

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative">
        <div className="islamic-pattern pointer-events-none absolute inset-0 opacity-30" />
        <article className="relative mx-auto max-w-[760px] px-4 pb-24 pt-14 sm:px-6 md:pt-20">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-gold">Privacy</p>
          <h1 className="font-[family-name:var(--font-serif-var)] text-4xl font-semibold leading-tight text-cream-bright md:text-5xl">
            Privacy Policy for AyahReel
          </h1>
          <p className="mt-4 text-sm text-cream-dim">Last updated: 25 September 2026</p>

          <div className="my-10 rounded-2xl border border-gold/25 bg-gold/[0.06] p-6 text-[16px] leading-relaxed text-cream">
            <strong className="text-cream-bright">In short:</strong> AyahReel has no
            accounts, no advertising, no analytics and no tracking. Almost
            everything the app handles stays on your phone. Only two things ever
            reach us or a service working for us: a feedback message you choose
            to send, and an anonymous number our update service uses to count
            active copies of the app. Neither is used for advertising, and
            neither is ever sold.
          </div>

          <Section title="About this policy">
            <p>
              AyahReel (&ldquo;the app&rdquo;) lets you create short Quran
              recitation videos on your phone. This policy explains what the app
              does and does not do with your information.
            </p>
          </Section>

          <Section title="Information we collect">
            <H3>Feedback you choose to send</H3>
            <p>
              The app has a feedback form (in Settings, and as a prompt that may
              appear after you have made several reels). When you tap Send, we
              receive:
            </p>
            <ul>
              <li>your message;</li>
              <li>
                the email address you typed, if you typed one. It is optional,
                and only used to reply to you;
              </li>
              <li>
                a few technical details, added automatically so we can
                understand and fix what you describe: the app version, your
                phone&apos;s operating system and its version, the app language,
                how many reels you have made, and whether you wrote from
                Settings or from the prompt.
              </li>
            </ul>
            <p>
              We do not receive your name, your reels, your contacts, or any
              device or advertising identifier with it. Nothing is sent unless
              you tap Send.
            </p>
            <p>
              Your message is delivered to our email inbox by FormSubmit
              (formsubmit.co), an email-forwarding service, which handles it
              under its own privacy policy. We keep it in our email only to read
              it and reply to you. We do not use it for marketing, do not add you
              to any mailing list, and do not share it with anyone else.
            </p>

            <H3>App updates</H3>
            <p>
              The app receives small updates through Shorebird (shorebird.dev), a
              code-push service. When it checks for an update, it sends the
              app&apos;s version, your phone&apos;s platform and processor type,
              and a random ID that the update service creates the first time the
              app is opened. That ID is stored inside the app, is different for
              every app it is used in, is not your advertising ID or any device
              identifier, and is deleted when you uninstall the app. Shorebird
              uses it only to count how many copies of the app are active and to
              report whether updates installed. It cannot be used to identify
              you.
            </p>
          </Section>

          <Section title="Information stored on your device">
            <p>
              The app saves the following locally on your phone. It never leaves
              your device, and we cannot see it:
            </p>
            <ul>
              <li>
                <strong>Reels and cards you create:</strong> the video and image
                files, plus the reciter, surah and verse range used to make them.
              </li>
              <li>
                <strong>Photos, videos or audio you choose:</strong> a photo or
                video as a reel background, or your own recitation as an audio or
                video file. These are read only when you select them, used only
                to make your reel on your phone, and are never uploaded anywhere.
              </li>
              <li>
                <strong>Names you type:</strong> your own name, for the greeting
                on the home screen, and the name of anyone you dedicate a reel or
                card to. They appear only on your screen and in the reels and
                cards you make.
              </li>
              <li>
                <strong>App settings:</strong> language, reminder preferences and
                sharing options.
              </li>
              <li>
                <strong>Your streak, points and badges:</strong> a local count of
                reels you have created and shared.
              </li>
              <li>
                <strong>Tanafus rounds:</strong> your scores, best results and
                past rounds.
              </li>
              <li>
                <strong>Cached content:</strong> Quran text, translations,
                recitation audio, word-timing data and background scenery,
                downloaded once so the app works offline and loads faster.
              </li>
            </ul>
            <p>
              All of this is removed when you uninstall the app. You can also
              clear the cached downloads at any time from Settings → Storage, and
              delete individual reels from My Reels.
            </p>
          </Section>

          <Section title="Photo, media and file access">
            <p>
              If you choose your own photo, video or audio file, the app asks
              your device for access to that file. Access is used solely to make
              your reel on your device. If you save a finished reel, it is
              written to your device&apos;s gallery in an album named &ldquo;Ayah
              Reels&rdquo;. Nothing is uploaded.
            </p>
          </Section>

          <Section title="Connections">
            <p>
              All connections use encrypted HTTPS, and downloaded content is
              cached on your device, so repeat use requires no further requests.
            </p>
          </Section>

          <Section title="Notifications">
            <p>
              The app can send you a daily reminder to create or read a reel.
              These are local notifications, scheduled entirely on your device.
              No push server is involved and no notification token is created or
              shared. They are optional: you are only asked for permission after
              you choose to enable a reminder, and you can turn them off at any
              time in Settings or in your device settings.
            </p>
          </Section>

          <Section title="Sharing your reels">
            <p>
              When you share a reel, card or invitation, the app hands it to your
              device&apos;s share sheet, or directly to WhatsApp or Instagram
              Stories if you use those options. What happens next is governed by
              the app you share to and by the privacy policy of that service. We
              are not involved in the transfer and receive no copy.
            </p>
          </Section>

          <Section title="Advertising, analytics and tracking">
            <p>
              The app contains no advertising, no analytics SDK, no
              crash-reporting service, and no tracking or profiling technology.
              We do not use cookies, device fingerprinting or advertising
              identifiers, and we never sell your data or share it for
              advertising. The only identifier the app sends is the random update
              ID described under &ldquo;App updates&rdquo;.
            </p>
          </Section>

          <Section title="Children's privacy">
            <p>
              AyahReel is suitable for all ages. The app does not ask anyone for
              personal information. The only personal information we can receive
              is what someone chooses to write in the feedback form. If you
              believe a child has sent us personal information, contact us and we
              will delete it.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              Everything the app creates lives on your device and is entirely
              under your control: delete individual reels in the app, clear
              cached downloads in Settings → Storage, or uninstall the app to
              remove everything.
            </p>
            <p>
              If you sent us feedback, you can ask us to show you or delete that
              message, together with the email address you gave, by writing to
              the address below. The anonymous update ID cannot be linked to you,
              and uninstalling the app removes it from your phone.
            </p>
          </Section>

          <Section title="This website">
            <p>
              This website (not the app) uses Google Analytics to count visits
              and clicks on the store buttons. It does not ask for your name or
              email, and nothing from the website is linked to the app.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              If a future version of the app changes what data it handles, this
              policy will be updated and the &ldquo;Last updated&rdquo; date
              above revised before that version is released.
            </p>
          </Section>

          <Section title="Contact">
            <p>Questions about this policy, or requests: {mail}</p>
          </Section>

          {/*
            The Ilham app's policy. This site used to be Ilham's, and Ilham's
            store listing may still point at /privacy, so the policy stays
            reachable here, unchanged, at /privacy#ilham.
          */}
          <hr className="my-16 border-border" />

          <section id="ilham" className="text-cream-dim">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-gold">Ilham app</p>
            <h2 className="font-[family-name:var(--font-serif-var)] text-3xl font-semibold text-cream-bright">
              Privacy Policy for Ilham
            </h2>
            <p className="mb-10 mt-3 text-sm">Last updated: March 2026</p>

            <Section title="Overview">
              <p>
                Ilham (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the
                app&rdquo;) is committed to protecting your privacy. This policy
                explains what information we collect, how we use it, and your
                rights regarding your data.
              </p>
            </Section>
            <Section title="Information We Collect">
              <p>
                <strong>We do not collect any personally identifiable information.</strong>{" "}
                The Ilham app does not require you to create an account or
                provide your name, email address, or any other personal details.
              </p>
              <p>
                We may collect anonymous, aggregated usage data (such as which
                features are used most) through third-party analytics tools to
                help us improve the app. This data cannot be used to identify you
                personally.
              </p>
            </Section>
            <Section title="Data Storage">
              <p>
                All your preferences (such as notification times and favourite
                quotes) are stored locally on your device. We do not transmit or
                store this data on any external server.
              </p>
            </Section>
            <Section title="Third-Party Services">
              <p>
                The app may use the following third-party services, each
                governed by their own privacy policies:
              </p>
              <ul>
                <li>Google Play Services</li>
                <li>Firebase Analytics (anonymous usage statistics only)</li>
              </ul>
            </Section>
            <Section title="Notifications">
              <p>
                If you enable daily reminders, the app will send local push
                notifications at your chosen time. This is handled entirely on
                your device. We do not collect or store your notification
                preferences on any server.
              </p>
            </Section>
            <Section title="Children's Privacy">
              <p>
                Ilham does not knowingly collect any information from children
                under the age of 13. The app contains no user-generated content
                and no social features.
              </p>
            </Section>
            <Section title="Changes to This Policy">
              <p>
                We may update this privacy policy from time to time. Any changes
                will be reflected on this page with an updated date. Continued
                use of the app after any changes constitutes your acceptance of
                the new policy.
              </p>
            </Section>
            <Section title="Contact">
              <p>
                If you have any questions about this privacy policy, please
                contact us at:{" "}
                <a href="mailto:support@getilham.com" className="text-gold hover:text-gold-bright">
                  support@getilham.com
                </a>
              </p>
            </Section>
          </section>

          <p className="mt-12 text-sm">
            <Link href="/" className="text-gold hover:text-gold-bright">← Back to AyahReel</Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
