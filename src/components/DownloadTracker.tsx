"use client";

import { useEffect } from "react";
import { IOS_URL, STORE_URLS } from "@/lib/constants";

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
      if (!anchor || !STORE_URLS.includes(anchor.href)) return;

      const location =
        anchor.dataset.gaLocation ||
        anchor.closest<HTMLElement>("[data-ga-location]")?.dataset.gaLocation ||
        "unknown";

      window.gtag?.("event", "download_click", {
        location,
        store: anchor.href === IOS_URL ? "app_store" : "google_play",
        link_url: anchor.href,
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
