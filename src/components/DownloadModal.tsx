"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { APP_STORE_URL } from "@/lib/constants";

export default function DownloadModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let triggered = false;
    const onScroll = () => {
      if (triggered) return;
      const target = document.getElementById("faq");
      if (!target) return;
      const threshold =
        target.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.6;
      if (window.scrollY >= threshold) {
        triggered = true;
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      onClick={() => setVisible(false)}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        background: "rgba(18,18,31,0.88)",
        backdropFilter: "blur(8px)",
        animation: "modalFadeIn 0.4s ease",
      }}
    >
      <style>{`
        @keyframes modalFadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes modalSlideUp { from { opacity: 0; transform: translateY(40px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "440px",
          borderRadius: "26px",
          background: "linear-gradient(160deg, #232338 0%, #1a1a2e 65%, #12121f 100%)",
          border: "1px solid rgba(217,185,155,0.25)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.65)",
          animation: "modalSlideUp 0.4s ease",
          position: "relative",
        }}
      >
        <button
          onClick={() => setVisible(false)}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "rgba(236,228,207,0.08)",
            border: "none",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "rgba(214,203,168,0.6)",
          }}
          aria-label="Close"
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div style={{ padding: "44px 36px 36px", textAlign: "center" }}>
          <Image
            src="/app-icon.png"
            alt="Ilham app icon"
            width={76}
            height={76}
            style={{ borderRadius: "18px", margin: "0 auto 22px" }}
          />

          <h2
            style={{
              color: "#f8f4e8",
              fontSize: "27px",
              fontWeight: 600,
              margin: "0 0 12px",
              lineHeight: 1.2,
              fontFamily: "var(--font-serif-var), serif",
            }}
          >
            A dua with your name on it.
          </h2>

          <p style={{ color: "#d6cba8", fontSize: "15px", lineHeight: 1.6, margin: "0 0 28px" }}>
            Install Ilham, share your link, and heartfelt duas from friends and
            strangers find their way to you — anonymously. One verse a day
            finds your heart, too.
          </p>

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ga-location="modal"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "14px 28px",
              background: "#f8f4e8",
              color: "#12121f",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "15px",
              justifyContent: "center",
              marginBottom: "14px",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.6 2.4c-.37.2-.6.6-.6 1.1v17c0 .5.23.9.6 1.1l9.06-9.6L3.6 2.4z" />
              <path d="M16.8 8.55 5.3 2.1l7.36 7.9 4.14-1.45z" />
              <path d="M16.8 15.45 12.66 14 5.3 21.9l11.5-6.45z" />
              <path d="M20.4 10.55l-2.53-1.42-4.5 2.87 4.5 2.87 2.53-1.42c.8-.45.8-2.45 0-2.9z" />
            </svg>
            Get it on Google Play
          </a>

          <button
            onClick={() => setVisible(false)}
            style={{
              background: "none",
              border: "none",
              color: "rgba(214,203,168,0.4)",
              fontSize: "13px",
              cursor: "pointer",
            }}
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
