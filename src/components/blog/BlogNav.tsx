import Image from "next/image";
import Link from "next/link";
import { APP_STORE_URL } from "@/lib/constants";

/**
 * Lightweight nav for /blog pages. Unlike the homepage Header (which scrolls
 * to in-page anchors), this links back to the home sections with absolute
 * paths so it works from any blog URL.
 */
export default function BlogNav() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 glass">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3.5">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/app-icon.png"
            alt="I pray app icon"
            width={34}
            height={34}
            className="rounded-[10px]"
          />
          <span className="font-[family-name:var(--font-cormorant-var)] text-2xl font-semibold text-cream tracking-wide">
            I pray
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/blog"
            className="hidden sm:inline text-sm text-cream-dim hover:text-cream transition-colors"
          >
            Guides
          </Link>
          <Link
            href="/#how"
            className="hidden sm:inline text-sm text-cream-dim hover:text-cream transition-colors"
          >
            How it works
          </Link>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ga-location="blog_nav"
            className="px-5 py-2 bg-cream-bright text-[#03191c] text-sm font-semibold rounded-full hover:shadow-[0_0_24px_rgba(76,196,203,0.35)] transition-all"
          >
            Download
          </a>
        </div>
      </nav>
    </header>
  );
}
