/**
 * In-browser recreation of the Ilham "Duas" home screen — dark near-black
 * surface with the app's neon-mint accent. Pure markup, no interactivity.
 */
export default function HeroPhoneScreen() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg,#02060a 0%,#071a28 35%,#0a1622 65%,#08160f 100%)",
      }}
    >
      {/* soft glows, like the app's aurora background */}
      <div
        className="absolute -top-10 -right-10 h-40 w-40 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,255,135,0.09) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-10 -left-10 h-44 w-44 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(15,52,96,0.35) 0%, transparent 70%)" }}
      />

      <div className="relative flex h-full flex-col px-5 pt-12 pb-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[8px] tracking-[0.25em] text-[rgba(255,255,255,0.4)]">ILHAM</p>
            <p className="mt-1 font-[family-name:var(--font-serif-var)] text-xl font-semibold text-white">
              Your duas
            </p>
          </div>
          <span className="flex items-center gap-1 rounded-full border border-[rgba(0,255,135,0.3)] bg-[rgba(0,255,135,0.1)] px-2.5 py-1 text-[9px] font-semibold text-[#00ff87]">
            2 new
          </span>
        </div>

        {/* Share link pill */}
        <div className="mt-4 flex items-center justify-between rounded-[14px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-3.5 py-2.5">
          <div className="min-w-0">
            <p className="text-[8px] tracking-[0.15em] text-[rgba(255,255,255,0.4)]">YOUR LINK</p>
            <p className="truncate text-[11px] text-[rgba(255,255,255,0.85)]">getilham.com/d/you</p>
          </div>
          <span className="shrink-0 rounded-full bg-[#00ff87] px-3 py-1.5 text-[9px] font-bold text-black">
            Share
          </span>
        </div>

        {/* Dua cards */}
        <div className="mt-4 flex flex-col gap-3">
          {[
            {
              text: "May Allah lift what weighs on your heart and replace it with peace only He can give.",
              time: "2m ago",
              fresh: true,
            },
            {
              text: "Ya Allah, open for them every door they stopped knocking on.",
              time: "1h ago",
              fresh: true,
            },
            {
              text: "May Allah accept all your duas, ease your hardships, and grant you good in this life and the next. 🤲",
              time: "Yesterday",
              fresh: false,
            },
          ].map((d, i) => (
            <div
              key={i}
              className="rounded-[16px] border p-3.5"
              style={{
                borderColor: d.fresh ? "rgba(0,255,135,0.25)" : "rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.035)",
              }}
            >
              <div className="flex items-center justify-between">
                <p className="text-[8px] tracking-[0.2em] text-[rgba(255,255,255,0.35)]">
                  ANONYMOUS
                </p>
                <p className="text-[8px] text-[rgba(255,255,255,0.3)]">{d.time}</p>
              </div>
              <p className="mt-1.5 text-[10.5px] leading-relaxed text-[rgba(255,255,255,0.88)]">
                {d.text}
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <span className="rounded-full border border-[rgba(0,255,135,0.35)] px-3 py-1 text-[9px] font-semibold text-[#00ff87]">
                  Ameen 🤲
                </span>
                <span className="rounded-full border border-[rgba(255,255,255,0.12)] px-3 py-1 text-[9px] text-[rgba(255,255,255,0.5)]">
                  Reply
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-auto pt-3 text-center text-[8px] text-[rgba(255,255,255,0.3)]">
          100% anonymous · You never see who sent it
        </p>
      </div>
    </div>
  );
}
