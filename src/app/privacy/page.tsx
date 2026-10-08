import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/constants";

/**
 * The Ilham app's privacy policy. This site used to be Ilham's, and Ilham's
 * store listing points at /privacy, so the policy lives here unchanged.
 */
export const metadata: Metadata = {
  title: "Privacy Policy | Ilham",
  description: "Privacy policy for the Ilham app.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-3 font-[family-name:var(--font-serif-var)] text-2xl font-semibold text-cream-bright">
        {title}
      </h2>
      <div className="space-y-4 text-[16px] leading-[1.8] text-cream/85 [&_strong]:text-cream-bright [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative">
        <div className="islamic-pattern pointer-events-none absolute inset-0 opacity-30" />
        <article className="relative mx-auto max-w-[760px] px-4 pb-24 pt-14 sm:px-6 md:pt-20">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-gold">Ilham app</p>
          <h1 className="font-[family-name:var(--font-serif-var)] text-4xl font-semibold leading-tight text-cream-bright md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mb-12 mt-4 text-sm text-cream-dim">Last updated: March 2026</p>

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
              The Ilham app does not require you to create an account or provide
              your name, email address, or any other personal details.
            </p>
            <p>
              We may collect anonymous, aggregated usage data (such as which
              features are used most) through third-party analytics tools to help
              us improve the app. This data cannot be used to identify you
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
              The app may use the following third-party services, each governed
              by their own privacy policies:
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
              under the age of 13. The app contains no user-generated content and
              no social features.
            </p>
          </Section>
          <Section title="Changes to This Policy">
            <p>
              We may update this privacy policy from time to time. Any changes
              will be reflected on this page with an updated date. Continued use
              of the app after any changes constitutes your acceptance of the new
              policy.
            </p>
          </Section>
          <Section title="Contact">
            <p>
              If you have any questions about this privacy policy, please contact
              us at:{" "}
              <a href="mailto:support@getilham.com" className="text-gold hover:text-gold-bright">
                support@getilham.com
              </a>
            </p>
          </Section>

          <p className="mt-12 text-sm">
            <Link href="/" className="text-gold hover:text-gold-bright">← Back home</Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
