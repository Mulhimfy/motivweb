"use client";

import { useEffect, useState } from "react";

/**
 * A live imitation of a finished reel: scenery, the verse with its words
 * lighting up as they would be recited, the translation, and the watermark.
 * It cycles through a few verses on its own; the scene dots below let a
 * visitor jump between them.
 *
 * Text is Tanzil Uthmani and Saheeh International, the same sources the app
 * uses. Where only part of an ayah is shown, the reference still names it.
 */
const REELS = [
  {
    scene: "/scenes/aurora.webp",
    words: ["أَلَا", "بِذِكْرِ", "ٱللَّهِ", "تَطْمَئِنُّ", "ٱلْقُلُوبُ"],
    translation: "Unquestionably, by the remembrance of Allah hearts are assured.",
    ref: "Ar-Ra'd 13:28",
    reciter: "Mishary Alafasy",
  },
  {
    scene: "/scenes/desert.webp",
    words: ["فَإِنَّ", "مَعَ", "ٱلْعُسْرِ", "يُسْرًا"],
    translation: "For indeed, with hardship [will be] ease.",
    ref: "Ash-Sharh 94:5",
    reciter: "Mahmoud Al-Husary",
  },
  {
    scene: "/scenes/forest.webp",
    words: ["لَا", "يُكَلِّفُ", "ٱللَّهُ", "نَفْسًا", "إِلَّا", "وُسْعَهَا"],
    translation: "Allah does not charge a soul except [with that within] its capacity.",
    ref: "Al-Baqarah 2:286",
    reciter: "Abdul Basit",
  },
  {
    scene: "/scenes/ocean.webp",
    words: ["وَمَن", "يَتَوَكَّلْ", "عَلَى", "ٱللَّهِ", "فَهُوَ", "حَسْبُهُۥٓ"],
    translation: "And whoever relies upon Allah, then He is sufficient for him.",
    ref: "At-Talaq 65:3",
    reciter: "Yasser Ad-Dussary",
  },
];

const WORD_MS = 650;
const HOLD_MS = 1800;

export default function ReelDemo() {
  const [reel, setReel] = useState(0);
  const [word, setWord] = useState(-1);

  const current = REELS[reel];
  const total = current.words.length;

  useEffect(() => {
    const done = word >= total - 1;
    const t = setTimeout(
      () => {
        if (done) {
          setReel((r) => (r + 1) % REELS.length);
          setWord(-1);
        } else {
          setWord((w) => w + 1);
        }
      },
      done ? HOLD_MS : word < 0 ? 700 : WORD_MS,
    );
    return () => clearTimeout(t);
  }, [word, total]);

  const progress = Math.max(0, (word + 1) / total);

  return (
    <div className="flex flex-col items-center">
      <div className="phone-frame w-[270px] sm:w-[300px]">
        <div className="phone-screen">
          {REELS.map((r, i) => (
            <div
              key={r.scene}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: i === reel ? 1 : 0 }}
              aria-hidden={i !== reel}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={r.scene}
                alt=""
                className={`h-full w-full object-cover ${i === reel ? "kenburns" : ""}`}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.35),rgba(0,0,0,0.05)_70%)]" />

          {/* top bar: like the app's player */}
          <div className="absolute inset-x-0 top-0 p-4 pt-5">
            <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-gold transition-[width] duration-500 ease-out"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <p className="mt-2.5 text-[11px] font-medium text-white/80">
              {current.reciter}
            </p>
          </div>

          {/* the verse */}
          <div className="absolute inset-x-0 top-[34%] px-5 text-center" aria-live="polite">
            <p
              lang="ar"
              dir="rtl"
              className="font-arabic text-[26px] leading-[1.9] sm:text-[28px]"
              style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}
            >
              {current.words.map((w, i) => (
                <span
                  key={`${reel}-${i}`}
                  className="transition-colors duration-300"
                  style={{
                    color: i === word ? "#ecd08f" : i < word ? "#faf6ec" : "rgba(250,246,236,0.55)",
                  }}
                >
                  {w}{" "}
                </span>
              ))}
            </p>
            <div className="mx-auto my-3 h-px w-10 bg-gold/70" />
            <p
              className="text-[12px] italic leading-relaxed text-white/85"
              style={{ textShadow: "0 1px 10px rgba(0,0,0,0.6)" }}
            >
              {current.translation}
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-gold/90">
              {current.ref}
            </p>
          </div>

          <p className="absolute inset-x-0 bottom-6 text-center text-[10px] tracking-wide text-white/60">
            <span className="text-gold">✦</span> AyahReel
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2.5" role="tablist" aria-label="Example reels">
        {REELS.map((r, i) => (
          <button
            key={r.scene}
            role="tab"
            aria-selected={i === reel}
            aria-label={`Show ${r.ref}`}
            onClick={() => {
              setReel(i);
              setWord(-1);
            }}
            className={`h-11 w-8 overflow-hidden rounded-lg border-2 transition-all ${
              i === reel ? "border-gold scale-110" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={r.scene} alt="" className="h-full w-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
