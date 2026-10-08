import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Amiri } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { IOS_URL, PLAY_URL, SITE_URL } from "@/lib/constants";
import DownloadTracker from "@/components/DownloadTracker";

const fraunces = Fraunces({
  variable: "--font-serif-var",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-var",
  subsets: ["latin"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-arabic-var",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

const TITLE = "AyahReel: Quran Reel & Islamic Video Maker";
const DESCRIPTION =
  "Turn any verse of the Quran into a beautiful reel. Pick a reciter, choose your ayahs and a scenery, and share a 9:16 video with Arabic and translation perfectly synced. Free on Android and iPhone.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "AyahReel",
  keywords: [
    "quran reels",
    "quran video maker",
    "ayah video",
    "islamic video maker",
    "quran status video",
    "quran shorts",
    "islamic reels app",
    "quran recitation video",
    "jummah reel",
    "dawah app",
    "ayahreel",
  ],
  authors: [{ name: "AyahReel" }],
  metadataBase: new URL(SITE_URL),
  // No `alternates.canonical` here: child routes inherit it, which would make
  // every page without its own canonical point at the homepage.
  openGraph: {
    title: TITLE,
    description:
      "Let the next thing on someone's feed be an ayah. Recitation, Arabic and translation, synced over beautiful scenery. Free on Android and iPhone.",
    url: SITE_URL,
    siteName: "AyahReel",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "AyahReel: turn any ayah into a reel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Turn any verse of the Quran into a reel you can share. Free on Android and iPhone.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b1120",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "AyahReel",
      url: SITE_URL,
      description: "Quran reel and Islamic video maker for Android and iPhone.",
    },
    {
      "@type": "MobileApplication",
      name: "AyahReel",
      operatingSystem: "Android 7.0+, iOS 15+",
      applicationCategory: "MultimediaApplication",
      description: DESCRIPTION,
      image: `${SITE_URL}/app-icon.png`,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      downloadUrl: [PLAY_URL, IOS_URL],
      installUrl: PLAY_URL,
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
      <body className={`${fraunces.variable} ${inter.variable} ${amiri.variable} antialiased`}>
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
