import type { Metadata } from "next";

/**
 * Direct APK download for AyahReel.
 *
 * It does not sell anything. It exists so a link can be handed to someone
 * who should end up with the app installed, in one tap, without a store in
 * the way. Every choice below follows from that: one button, the file
 * behind it, and only the facts a person needs before they let an unknown
 * APK onto their phone.
 *
 * Deliberately no Play Store link. A page offering both sends the visitor
 * to make a decision they have no basis for, and the store build is not
 * what this link is for.
 *
 * `noindex`: the home page is what should rank for AyahReel. A sideload
 * page in the index would compete with it and send searchers to an APK
 * instead of the store. This page is meant to be *sent*, not found.
 */

const APK_URL =
  "https://github.com/Mulhimfy/motivweb/releases/download/ayahreel-v1.0.3/ayahreel-1.0.3.apk";
const VERSION = "1.0.3";
const SIZE = "150 MB";

export const metadata: Metadata = {
  title: "Download AyahReel",
  description:
    "Download AyahReel for Android — turn any verse of the Quran into a reel you can share. Direct APK download.",
  robots: { index: false, follow: false },
};

export default function AyahReelDownloadPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-5 py-16 islamic-pattern relative overflow-hidden"
      style={{ background: "linear-gradient(160deg,#18233b 0%,#111a2e 55%,#0b1120 100%)" }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[420px] w-[420px] gold-glow" />

      <div className="relative w-full max-w-lg text-center">
        <p
          lang="ar"
          dir="rtl"
          className="font-arabic text-2xl md:text-3xl text-gold/90 mb-2"
        >
          وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
        </p>
        <p className="text-cream-dim text-sm italic mb-10">
          &ldquo;And recite the Quran with measured recitation.&rdquo; — Surah
          Al-Muzzammil 73:4
        </p>

        <h1 className="font-[family-name:var(--font-serif-var)] text-4xl md:text-5xl font-bold text-cream-bright leading-[1.1] mb-4">
          AyahReel
        </h1>
        <p className="text-cream-dim text-base md:text-lg leading-relaxed mb-10">
          Turn any verse of the Quran into a reel — the recitation you choose,
          over scenery, with the words appearing as they are read. Then share
          it.
        </p>

        {/*
          A plain anchor with `download`, not a button behind a script: the
          whole promise of this page is that one tap starts the file. Nothing
          should be able to fail between the tap and the download — no
          handler, no state, no hydration.
        */}
        <a
          href={APK_URL}
          download
          className="inline-flex flex-col items-center justify-center w-full rounded-2xl px-8 py-5 font-semibold text-lg transition-transform hover:scale-[1.02] active:scale-[0.99]"
          style={{
            background: "linear-gradient(180deg,#e8c47c 0%,#c99d52 100%)",
            color: "#0b1120",
          }}
        >
          <span>Download for Android</span>
          <span className="text-sm font-normal opacity-80 mt-0.5">
            Version {VERSION} · {SIZE} · APK
          </span>
        </a>

        <p className="mt-5 text-xs text-cream-dim/80">
          Free · No account · Works offline once your scenery is downloaded
        </p>

        {/*
          Everything below is what a person needs in order to *finish*
          installing. A direct APK meets two things a store download never
          does — the unknown-sources prompt, and the fact that this build and
          a Play build cannot replace one another — and finding either of
          them out halfway through is what makes someone give up.
        */}
        <div
          className="mt-14 text-left rounded-2xl p-6 md:p-7"
          style={{
            background: "rgba(236,228,207,0.04)",
            border: "1px solid rgba(236,228,207,0.1)",
          }}
        >
          <h2 className="text-cream-bright font-semibold mb-4 text-base">
            After it downloads
          </h2>
          <ol className="text-cream-dim text-sm leading-relaxed space-y-3 list-decimal list-inside">
            <li>Open the downloaded file — your browser will offer to.</li>
            <li>
              Android will ask whether to allow installs from this app. That
              prompt is normal for any app installed outside the Play Store;
              allow it and you will land straight back on the installer.
            </li>
            <li>Tap Install, then Open.</li>
          </ol>

          <p className="text-cream-dim/70 text-xs leading-relaxed mt-5 pt-5 border-t border-[rgba(236,228,207,0.1)]">
            This build installs on its own and updates from inside the app. It
            is signed separately from the Play Store copy, so the two cannot
            replace each other — if you ever switch to the store version,
            uninstall this one first. Android 7.0 or newer.
          </p>
        </div>
      </div>
    </main>
  );
}
