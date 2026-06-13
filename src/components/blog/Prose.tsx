import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Semantic, server-rendered article primitives.
 * Everything here is plain HTML styled to the site's teal/cream system —
 * no client JS, no markdown runtime. Crawlers see real h2/p/ul/table on
 * first paint, links included. That's the whole point.
 */

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="text-cream-bright/95 text-xl md:text-2xl font-[family-name:var(--font-cormorant-var)] leading-relaxed mb-10">
      {children}
    </p>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="text-cream/90 text-[17px] md:text-[18px] leading-[1.85] mb-6">
      {children}
    </p>
  );
}

export function H2({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="font-[family-name:var(--font-cormorant-var)] text-3xl md:text-4xl font-semibold text-cream-bright mt-16 mb-5 scroll-mt-28"
    >
      {children}
    </h2>
  );
}

export function H3({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3
      id={id}
      className="font-[family-name:var(--font-cormorant-var)] text-2xl md:text-3xl font-semibold text-cream mt-12 mb-4 scroll-mt-28"
    >
      {children}
    </h3>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="mb-6 flex flex-col gap-3 text-cream/90 text-[17px] md:text-[18px] leading-[1.8]">
      {children}
    </ul>
  );
}

export function OL({ children }: { children: ReactNode }) {
  return (
    <ol className="mb-6 flex flex-col gap-3 text-cream/90 text-[17px] md:text-[18px] leading-[1.8] [counter-reset:item]">
      {children}
    </ol>
  );
}

export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="relative pl-6 before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-accent">
      {children}
    </li>
  );
}

/** Numbered step with a large gold ordinal — for ordered how-to lists. */
export function Step({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <li className="relative flex gap-5">
      <span className="font-[family-name:var(--font-cormorant-var)] text-4xl font-bold leading-none text-accent/30 shrink-0 w-10">
        {String(n).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-[family-name:var(--font-cormorant-var)] text-2xl font-semibold text-cream mb-2">
          {title}
        </h3>
        <div className="text-cream/90 text-[17px] leading-[1.8]">{children}</div>
      </div>
    </li>
  );
}

export function Steps({ children }: { children: ReactNode }) {
  return <ol className="mb-8 flex flex-col gap-8">{children}</ol>;
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-cream-bright">{children}</strong>;
}

export function Em({ children }: { children: ReactNode }) {
  return <em className="italic text-cream-bright/90">{children}</em>;
}

/** Internal link (Next) for slugs, plain anchor for external. */
export function A({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  const cls =
    "text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent transition-colors";
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Hadith / Qur'an quote block. */
export function Quote({ children, cite }: { children: ReactNode; cite?: string }) {
  return (
    <blockquote className="my-8 border-l-2 border-gold/50 pl-6">
      <p className="font-[family-name:var(--font-cormorant-var)] text-2xl md:text-3xl italic text-cream-bright leading-snug">
        {children}
      </p>
      {cite && <cite className="mt-3 block text-sm not-italic text-gold">{cite}</cite>}
    </blockquote>
  );
}

/**
 * Authentic dua block — Arabic (RTL, Amiri), transliteration, translation, source.
 * Server-rendered raw HTML, so the Arabic text and its meaning are both crawlable
 * on first paint. This is the reusable unit behind every "dua for ___" guide.
 */
export function Dua({
  arabic,
  transliteration,
  translation,
  source,
}: {
  arabic: string;
  transliteration: string;
  translation: string;
  source?: string;
}) {
  return (
    <div className="my-8 rounded-2xl border border-[rgba(76,196,203,0.22)] bg-[rgba(8,43,48,0.5)] p-6 md:p-8">
      <p
        lang="ar"
        dir="rtl"
        style={{ fontFamily: "'Amiri', serif" }}
        className="text-cream-bright text-[26px] md:text-[32px] leading-[2] text-right mb-5"
      >
        {arabic}
      </p>
      <p className="font-[family-name:var(--font-cormorant-var)] italic text-cream-bright/90 text-lg md:text-xl leading-relaxed mb-3">
        {transliteration}
      </p>
      <p className="text-cream/90 text-[17px] leading-[1.8] mb-3">
        &ldquo;{translation}&rdquo;
      </p>
      {source && <p className="text-sm not-italic text-gold">{source}</p>}
    </div>
  );
}

/** Soft highlight box for a key idea or aside. */
export function Callout({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="my-8 rounded-2xl border border-[rgba(76,196,203,0.22)] bg-[rgba(8,43,48,0.5)] p-6 md:p-7">
      {title && (
        <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-2">{title}</p>
      )}
      <div className="text-cream/90 text-[16px] md:text-[17px] leading-[1.75] [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}

/** TL;DR / key takeaways at the top of a long guide. */
export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <div className="my-8 rounded-2xl border border-[rgba(236,228,207,0.12)] bg-[rgba(11,54,60,0.4)] p-6 md:p-7">
      <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-4">The short version</p>
      <ul className="flex flex-col gap-2.5">
        {items.map((t, i) => (
          <li key={i} className="flex gap-3 text-cream/90 text-[16px] leading-relaxed">
            <svg className="mt-1 h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="my-8 overflow-x-auto rounded-2xl border border-[rgba(236,228,207,0.1)]">
      <table className="w-full border-collapse text-left text-[15px] md:text-[16px]">
        <thead>
          <tr className="bg-[rgba(8,43,48,0.7)]">
            {head.map((h, i) => (
              <th key={i} className="px-4 py-3 font-semibold text-cream-bright border-b border-[rgba(236,228,207,0.1)]">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="odd:bg-[rgba(11,54,60,0.3)]">
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 align-top text-cream/85 border-b border-[rgba(236,228,207,0.06)]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
