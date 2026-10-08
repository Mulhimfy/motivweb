import { IOS_URL, PLAY_URL } from "@/lib/constants";

function PlayLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
      <path fill="#34A853" d="M3.6 1.8 13.4 12 3.6 22.2c-.4-.2-.6-.7-.6-1.2V3c0-.5.2-1 .6-1.2Z" />
      <path fill="#FBBC04" d="m16.7 8.7-3.3 3.3 3.3 3.3 3.8-2.1c1-.6 1-2 0-2.5l-3.8-2Z" />
      <path fill="#4285F4" d="M13.4 12 3.6 22.2c.4.2.9.2 1.4-.1l11.7-6.8-3.3-3.3Z" />
      <path fill="#EA4335" d="M3.6 1.8c.4-.2.9-.2 1.4.1l11.7 6.8-3.3 3.3L3.6 1.8Z" />
    </svg>
  );
}

function AppleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M16.4 12.6c0-2.5 2-3.7 2.1-3.7-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.1 2.5-1.8 3.1-.5 7.6 1.3 10.1.8 1.2 1.8 2.6 3.1 2.5 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4 1-1.4 1.3-2.7 1.4-2.8-.1 0-2.5-1-2.5-4.2ZM14 5.2c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.6 2.8-1.4Z" />
    </svg>
  );
}

interface Props {
  /** GA `location` tag, so clicks can be told apart by where they happened. */
  location: string;
  className?: string;
  size?: "md" | "lg";
}

/**
 * The two store buttons. Drawn in markup rather than with the official badge
 * images so they sit in the gold-on-navy system, stay crisp at any size, and
 * cost no extra requests.
 */
export default function StoreBadges({ location, className = "", size = "lg" }: Props) {
  const pad = size === "lg" ? "px-5 py-3" : "px-4 py-2.5";
  const base = `inline-flex items-center gap-3 rounded-2xl ${pad} transition-all hover:-translate-y-0.5`;
  return (
    <div className={`flex flex-wrap gap-3 ${className}`} data-ga-location={location}>
      <a
        href={PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} btn-gold`}
      >
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#0b1120]">
          <PlayLogo />
        </span>
        <span className="flex flex-col leading-tight text-left">
          <span className="text-[11px] font-medium opacity-75">Get it on</span>
          <span className="text-[17px] font-semibold">Google Play</span>
        </span>
      </a>
      <a
        href={IOS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} border border-[rgba(236,230,214,0.18)] bg-[rgba(236,230,214,0.04)] text-cream-bright hover:border-gold/60`}
      >
        <span className="grid h-8 w-8 place-items-center">
          <AppleLogo />
        </span>
        <span className="flex flex-col leading-tight text-left">
          <span className="text-[11px] font-medium opacity-70">Download on the</span>
          <span className="text-[17px] font-semibold">App Store</span>
        </span>
      </a>
    </div>
  );
}
