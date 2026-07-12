import { APP_STORE_URL } from "@/lib/constants";

const PLAY_PATHS = [
  "M3.6 2.4c-.37.2-.6.6-.6 1.1v17c0 .5.23.9.6 1.1l9.06-9.6L3.6 2.4z",
  "M16.8 8.55 5.3 2.1l7.36 7.9 4.14-1.45z",
  "M16.8 15.45 12.66 14 5.3 21.9l11.5-6.45z",
  "M20.4 10.55l-2.53-1.42-4.5 2.87 4.5 2.87 2.53-1.42c.8-.45.8-2.45 0-2.9z",
];

interface AppStoreBadgeProps {
  variant?: "solid" | "outline";
  className?: string;
  location?: string;
}

/**
 * Official-style "Get it on Google Play" button.
 * solid  — cream fill on dark surfaces (primary CTA)
 * outline — transparent with cream border (secondary placement)
 */
export default function AppStoreBadge({
  variant = "solid",
  className = "",
  location,
}: AppStoreBadgeProps) {
  const solid = variant === "solid";

  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-ga-location={location}
      className={`group inline-flex items-center gap-3 rounded-2xl px-6 py-3.5 transition-all ${
        solid
          ? "bg-cream-bright text-[#12121f] hover:shadow-[0_10px_40px_rgba(236,228,207,0.25)] hover:-translate-y-0.5"
          : "border border-[rgba(236,228,207,0.25)] text-cream hover:border-accent hover:text-accent"
      } ${className}`}
    >
      <svg
        className="h-8 w-8 shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        {PLAY_PATHS.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </svg>
      <span className="text-left leading-none">
        <span className="block text-[11px] opacity-70">Get it on</span>
        <span className="block text-xl font-semibold leading-tight">
          Google Play
        </span>
      </span>
    </a>
  );
}
