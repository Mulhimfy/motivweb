import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import {
  Hero,
  Stats,
  HowItWorks,
  Features,
  Scenery,
  Dawah,
  Amanah,
  Privacy,
  Faq,
  Guides,
  FinalCta,
} from "@/components/home/Sections";
import { homeFaq } from "@/lib/faq";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Features />
        <Scenery />
        <Dawah />
        <Amanah />
        <Privacy />
        <Faq />
        <Guides />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
