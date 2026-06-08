"use client";

import { useEffect, useState } from "react";

const SUBMIT_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/submit-dua`;
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
// Where "get your own" sends people (set to the dua app's store link).
const APP_URL = process.env.NEXT_PUBLIC_DUA_APP_URL ?? "https://getilham.com";
const MAX = 500;

type State = "idle" | "sending" | "error" | "thanks" | "offer";

function mapError(status: number, code?: string): string {
  if (status === 404) return "This link isn't valid anymore.";
  if (status === 422 || code === "blocked") return "Please keep it kind — that couldn't be sent.";
  if (status === 429) return "Whoa, slow down a little — try again in a minute.";
  if (code === "length") return "Your dua is too long.";
  return "Something went wrong. Please try again.";
}

const BG = "radial-gradient(120% 120% at 50% 0%, #15614a 0%, #0b3d2e 45%, #062417 100%)";

export default function DuaForm({ ownerId }: { ownerId: string }) {
  const [body, setBody] = useState("");
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  // After the thank-you animation plays, reveal the "get your own" screen.
  useEffect(() => {
    if (state !== "thanks") return;
    const id = setTimeout(() => setState("offer"), 2300);
    return () => clearTimeout(id);
  }, [state]);

  const submit = async () => {
    const text = body.trim();
    if (!text || state === "sending") return;
    setState("sending");
    setError("");
    try {
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          apikey: ANON,
          Authorization: `Bearer ${ANON}`,
        },
        body: JSON.stringify({ ownerId, body: text }),
      });
      if (res.ok) {
        setState("thanks");
        return;
      }
      const data = await res.json().catch(() => ({}));
      setError(mapError(res.status, data?.error));
      setState("error");
    } catch {
      setError("Network error. Please try again.");
      setState("error");
    }
  };

  const atForm = state === "idle" || state === "error" || state === "sending";

  return (
    <main
      className={`min-h-dvh flex flex-col items-center px-5 text-white ${
        atForm ? "justify-start pt-14 pb-32" : "justify-center py-10"
      }`}
      style={{ background: BG }}
    >
      {/* animation keyframes */}
      <style>{`
        @keyframes pop  {0%{transform:scale(.3);opacity:0}60%{transform:scale(1.12)}100%{transform:scale(1);opacity:1}}
        @keyframes ring {0%{transform:scale(.4);opacity:.55}100%{transform:scale(2.1);opacity:0}}
        @keyframes rise {0%{transform:translateY(14px);opacity:0}100%{transform:translateY(0);opacity:1}}
        @keyframes cta  {0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
      `}</style>

      <div className="w-full max-w-md">
        {state === "thanks" ? (
          <div className="text-center">
            <div className="relative mx-auto mb-6 h-28 w-28 flex items-center justify-center">
              <span
                className="absolute inset-0 rounded-full border-2 border-white/40"
                style={{ animation: "ring 1.1s ease-out forwards" }}
              />
              <span
                className="absolute inset-0 rounded-full border-2 border-white/30"
                style={{ animation: "ring 1.1s ease-out .25s forwards" }}
              />
              <span className="text-6xl" style={{ animation: "pop .6s ease-out both" }}>
                🤲
              </span>
            </div>
            <h1 className="text-2xl font-bold" style={{ animation: "rise .5s ease-out .25s both" }}>
              Your dua was sent
            </h1>
            <p className="text-white/70 mt-2" style={{ animation: "rise .5s ease-out .4s both" }}>
              JazakAllahu khayran. May Allah accept it. 🤍
            </p>
          </div>
        ) : state === "offer" ? (
          <div className="text-center" style={{ animation: "rise .5s ease-out both" }}>
            <div className="text-6xl mb-5">🤲</div>
            <h1 className="text-2xl font-bold mb-8">Want anonymous duas of your own?</h1>
            <a
              href={APP_URL}
              className="inline-block w-full rounded-full bg-white text-[#0b3d2e] font-extrabold py-4 text-center"
              style={{ animation: "cta 1.1s ease-in-out infinite" }}
            >
              See and get anonymous duas 🤲
            </a>
            <button
              onClick={() => { setBody(""); setState("idle"); }}
              className="block w-full mt-3 text-white/55 text-sm py-2"
            >
              Send another dua
            </button>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-5xl mb-4">🤲</div>
            <h1 className="text-2xl font-bold mb-1">Send me an anonymous dua</h1>
            <p className="text-white/60 mb-6 text-sm">It stays between you and Allah.</p>

            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value.slice(0, MAX))}
              placeholder="Type your dua…"
              rows={5}
              className="w-full rounded-2xl bg-black/25 border border-white/15 p-4 text-white placeholder-white/40 outline-none focus:border-white/40 resize-none"
            />
            <div className="flex justify-between items-center mt-2 mb-4 px-1">
              <span className="text-xs text-white/40">{body.length}/{MAX}</span>
              {error && <span className="text-xs text-red-300">{error}</span>}
            </div>

            <button
              onClick={submit}
              disabled={!body.trim() || state === "sending"}
              className="w-full rounded-full bg-white text-[#0b3d2e] font-extrabold py-4 disabled:opacity-50"
            >
              {state === "sending" ? "Sending…" : "Send dua 🤲"}
            </button>

            <p className="text-[11px] text-white/35 mt-5">100% anonymous · You’re never identified</p>
          </div>
        )}
      </div>

      {/* Bottom CTA — pinned, scales while the user is writing → our app */}
      {atForm && (
        <a
          href={APP_URL}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2.5rem)] max-w-md rounded-full bg-white/10 backdrop-blur border border-white/25 text-white font-extrabold py-3.5 text-center shadow-lg"
          style={{ animation: `cta ${body.trim() ? "0.9s" : "2.6s"} ease-in-out infinite` }}
        >
          Get your own duas 🤲
        </a>
      )}
    </main>
  );
}
