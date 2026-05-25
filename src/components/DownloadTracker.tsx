"use client";

import { useEffect } from "react";
import { APP_STORE_URL } from "@/lib/constants";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function DownloadTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor || anchor.href !== APP_STORE_URL) return;

      const location =
        anchor.dataset.gaLocation ||
        anchor.closest<HTMLElement>("[data-ga-location]")?.dataset.gaLocation ||
        "unknown";

      window.gtag?.("event", "download_click", {
        location,
        link_url: anchor.href,
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
