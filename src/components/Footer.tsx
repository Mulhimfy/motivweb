import Image from "next/image";
import { APP_STORE_URL, PRIVACY_URL } from "@/lib/constants";

const links = [
  { href: "/#problem", label: "Why Ilham" },
  { href: "/#how", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/blog", label: "Guides" },
  { href: "/#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-[rgba(236,228,207,0.07)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/app-icon.png"
                alt="Ilham app icon"
                width={36}
                height={36}
                className="rounded-[10px]"
              />
              <span className="font-[family-name:var(--font-serif-var)] text-2xl font-semibold text-cream">
                Ilham
              </span>
            </div>
            <p className="text-cream-dim text-sm leading-relaxed max-w-xs">
              Anonymous duas from friends and strangers, and daily Islamic
              wisdom paired with the Quran. Quietly, gently, daily.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-cream-dim uppercase tracking-wider mb-4">
              Explore
            </h4>
            <nav className="flex flex-col gap-2.5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-cream-dim hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Get the app */}
          <div>
            <h4 className="text-sm font-semibold text-cream-dim uppercase tracking-wider mb-4">
              Get Ilham
            </h4>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ga-location="footer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-cream transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.6 2.4c-.37.2-.6.6-.6 1.1v17c0 .5.23.9.6 1.1l9.06-9.6L3.6 2.4z" />
                <path d="M16.8 8.55 5.3 2.1l7.36 7.9 4.14-1.45z" />
                <path d="M16.8 15.45 12.66 14 5.3 21.9l11.5-6.45z" />
                <path d="M20.4 10.55l-2.53-1.42-4.5 2.87 4.5 2.87 2.53-1.42c.8-.45.8-2.45 0-2.9z" />
              </svg>
              Get it on Google Play
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[rgba(236,228,207,0.07)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-dim/70">
            &copy; {new Date().getFullYear()} Ilham. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={PRIVACY_URL}
              className="text-xs text-cream-dim/70 hover:text-cream transition-colors"
            >
              Privacy Policy
            </a>
            <p className="text-xs text-cream-dim/70">Made with ❤️ for the Ummah</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
