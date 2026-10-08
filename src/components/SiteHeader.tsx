import Image from "next/image";
import Link from "next/link";
import { PLAY_URL } from "@/lib/constants";

/**
 * One header for every page. Section links are absolute (`/#how`) so they
 * work from a guide or the privacy page as well as from home.
 */
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 glass">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label="AyahReel home">
          <Image
            src="/app-icon.png"
            alt=""
            width={34}
            height={34}
            className="rounded-[10px]"
            priority
          />
          <span className="font-[family-name:var(--font-serif-var)] text-[22px] font-semibold tracking-tight text-cream-bright">
            AyahReel
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          {[
            ["/#how", "How it works"],
            ["/#features", "Features"],
            ["/blog", "Guides"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="hidden rounded-full px-3 py-2 text-sm text-cream-dim transition-colors hover:text-cream-bright md:inline"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/blog"
            className="rounded-full px-3 py-2 text-sm text-cream-dim transition-colors hover:text-cream-bright md:hidden"
          >
            Guides
          </Link>
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ga-location="header"
            className="btn-gold ml-1 rounded-full px-4 py-2 text-sm font-semibold sm:px-5"
          >
            Get the app
          </a>
        </div>
      </nav>
    </header>
  );
}
