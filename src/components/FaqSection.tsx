"use client";

import { useState } from "react";
import AppStoreBadge from "./AppStoreBadge";

const faqs = [
  {
    q: "Is it really anonymous?",
    a: "Really. You never see who sent a dua — no names, no handles, no hints. The sender stays between themselves and Allah, which is exactly why people are honest in what they write.",
  },
  {
    q: "Do people need the app to send me a dua?",
    a: "No. Your link opens right in the browser — anyone can write you a dua from their phone in seconds. No download, no sign-up on their side.",
  },
  {
    q: "Do I need an account?",
    a: "Never. No sign-up, no email, no password. Download the app and your personal link already works — you're ready in under a minute.",
  },
  {
    q: "Is Ilham free?",
    a: "Completely. No subscription, no locked features. Download it and everything is yours.",
  },
  {
    q: "Is the content authentic?",
    a: "Every wisdom is paired with the exact Quran verse it stands on — surah and ayah cited right on the card. Rooted in the Quran and Sunnah, nothing generated on the fly.",
  },
  {
    q: "Does it work in Arabic?",
    a: "Fully. Ilham is bilingual — English and Arabic with complete right-to-left support, and the Quran rendered in the classical Amiri script.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[rgba(236,228,207,0.1)] last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-[family-name:var(--font-serif-var)] text-xl md:text-2xl font-semibold text-cream">
          {q}
        </span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[rgba(236,228,207,0.2)] text-accent transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-10 text-cream-dim text-[15px] leading-relaxed">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 islamic-pattern opacity-40" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-14">
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-4">
            Honest answers
          </p>
          <h2 className="font-[family-name:var(--font-serif-var)] text-3xl md:text-5xl font-semibold text-cream-bright">
            Every reason to hesitate, answered
          </h2>
        </div>

        <div className="glass-card px-6 md:px-9 py-2">
          {faqs.map((f, i) => (
            <FaqItem key={i} {...f} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-cream-dim mb-6">
            The honest truth? Somewhere out there, someone would make dua for
            you today — if you gave them the way.
          </p>
          <div className="flex justify-center">
            <AppStoreBadge variant="solid" location="faq" />
          </div>
        </div>
      </div>
    </section>
  );
}
