import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { APP_STORE_URL } from "@/lib/constants";
import DownloadTracker from "@/components/DownloadTracker";

const lora = Lora({
  variable: "--font-serif-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-var",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ilham — Anonymous Duas & Daily Quranic Wisdom",
  description:
    "Share your link and receive heartfelt duas from friends and strangers — 100% anonymous. Plus one wisdom and one Quran verse for your heart, every day. Free on Android.",
  keywords: [
    "dua app",
    "anonymous dua",
    "islamic quotes app",
    "daily quran verses",
    "islamic wisdom app",
    "muslim inspiration app",
    "daily islamic reminders",
    "dua for me link",
    "islamic quote wallpapers",
    "quran quotes app",
    "ilham app",
  ],
  authors: [{ name: "Ilham" }],
  metadataBase: new URL("https://getilham.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png",
  },
  openGraph: {
    title: "Ilham — Anonymous Duas & Daily Quranic Wisdom",
    description:
      "Someone's dua could change your life. Share your link, receive anonymous duas — and let one verse reach your heart every day.",
    url: "https://getilham.com",
    siteName: "Ilham",
    locale: "en_US",
    type: "website",
    images: [{ url: "/app-icon.png", width: 1024, height: 1024, alt: "Ilham app icon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilham — Anonymous Duas & Daily Quranic Wisdom",
    description:
      "Receive anonymous duas from friends and strangers, plus daily Islamic wisdom paired with the Quran. Free on Android.",
    images: ["/app-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Ilham",
      url: "https://getilham.com",
      description:
        "Anonymous duas from friends and strangers, and daily Islamic wisdom paired with the Quran.",
    },
    {
      "@type": "MobileApplication",
      name: "Ilham — Anonymous Duas & Daily Islamic Wisdom",
      operatingSystem: "Android",
      applicationCategory: "LifestyleApplication",
      description:
        "Ilham gives you a personal link — friends and strangers send you heartfelt duas, completely anonymous. Every day it pairs one Islamic wisdom with the Quran verse it came from, with daily reminders, streaks, beautiful backgrounds and full Arabic support.",
      installUrl: APP_STORE_URL,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${lora.variable} ${inter.variable} antialiased`}>
        {children}
        <DownloadTracker />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WV2N0GNDMH"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WV2N0GNDMH');
          `}
        </Script>
      </body>
    </html>
  );
}
