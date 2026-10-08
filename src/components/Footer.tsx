import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL, IOS_URL, PLAY_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-[#080d19]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/app-icon.png" alt="" width={32} height={32} className="rounded-[9px]" />
            <span className="font-[family-name:var(--font-serif-var)] text-xl font-semibold text-cream-bright">
              AyahReel
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-dim">
            Let the next thing on someone&apos;s feed be an ayah.
          </p>
          <p lang="ar" dir="rtl" className="font-arabic mt-5 text-lg text-gold/80">
            وَرَتِّلِ ٱلْقُرْءَانَ تَرْتِيلًا
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">App</p>
          <ul className="space-y-2.5 text-sm text-cream-dim">
            <li><Link href="/#how" className="hover:text-cream-bright">How it works</Link></li>
            <li><Link href="/#features" className="hover:text-cream-bright">Features</Link></li>
            <li><Link href="/#faq" className="hover:text-cream-bright">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">Download</p>
          <ul className="space-y-2.5 text-sm text-cream-dim" data-ga-location="footer">
            <li>
              <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-cream-bright">
                Google Play
              </a>
            </li>
            <li>
              <a href={IOS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-cream-bright">
                App Store
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">More</p>
          <ul className="space-y-2.5 text-sm text-cream-dim">
            <li><Link href="/blog" className="hover:text-cream-bright">Guides</Link></li>
            <li><Link href="/privacy" className="hover:text-cream-bright">Privacy policy</Link></li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-cream-bright">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-cream-dim/70 sm:px-6">
          © {new Date().getFullYear()} AyahReel. Quran text: Tanzil. Translation: Saheeh International.
        </p>
      </div>
    </footer>
  );
}
