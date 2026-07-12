"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { APP_STORE_URL } from "@/lib/constants";

export default function ScrollDownloadBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!dismissed && window.scrollY > 600) {
        setVisible(true);
      } else if (window.scrollY <= 600) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        left: "50%",
        zIndex: 50,
        width: "calc(100% - 2rem)",
        maxWidth: "440px",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(-50%) translateY(0)"
          : "translateX(-50%) translateY(2rem)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          padding: "14px 16px",
          borderRadius: "18px",
          background: "linear-gradient(135deg, rgba(35,35,56,0.98) 0%, rgba(26,26,46,0.98) 100%)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(217,185,155,0.25)",
          boxShadow: "0 12px 44px rgba(0,0,0,0.6)",
        }}
      >
        <Image
          src="/app-icon.png"
          alt="Ilham app icon"
          width={44}
          height={44}
          style={{ borderRadius: "11px", flexShrink: 0 }}
        />

        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ color: "#f8f4e8", fontSize: "14px", fontWeight: 600, lineHeight: 1.25, margin: 0 }}>
            Someone&apos;s dua could change your life
          </p>
          <p style={{ color: "#d6cba8", fontSize: "12px", marginTop: "2px", margin: 0 }}>
            Anonymous duas + daily Quranic wisdom — free
          </p>
        </div>

        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-ga-location="scroll_banner"
          style={{
            flexShrink: 0,
            padding: "9px 16px",
            background: "#f8f4e8",
            color: "#12121f",
            fontSize: "12px",
            fontWeight: 700,
            borderRadius: "999px",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Get the app
        </a>

        <button
          onClick={() => setDismissed(true)}
          style={{
            flexShrink: 0,
            background: "none",
            border: "none",
            color: "rgba(214,203,168,0.5)",
            cursor: "pointer",
            padding: "4px",
          }}
          aria-label="Dismiss"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
