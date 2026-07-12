const points = [
  {
    title: "100% anonymous, by design",
    text: "You never see who sent a dua, and senders never see your inbox. What they said stays between them and Allah.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 4.4-3 8.4-7 9.5C8 20.4 5 16.4 5 12V7l7-4z" />
    ),
  },
  {
    title: "Your inbox is yours alone",
    text: "Duas sent to your link can only be read by you. No public wall, no comments, no audience — what's said stays between the sender, you, and Allah.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: "No account. Ever.",
    text: "No sign-up, no email, no password. Open the app and your personal link already works — there's nothing to hack and nothing to leak.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5z" />
    ),
  },
  {
    title: "Nothing personal to lose",
    text: "Ilham never asks for your name, email or number — so there's no profile to build and nothing personal to leak. The privacy policy says it in plain words.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    ),
  },
];

export default function PrivacySection() {
  return (
    <section
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg,#12121f 0%,#1a1a2e 50%,#12121f 100%)" }}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-4">
            Your trust
          </p>
          <h2 className="font-[family-name:var(--font-serif-var)] text-3xl md:text-5xl font-semibold text-cream-bright mb-4">
            An app made for vulnerability.
            <br />
            <span className="text-accent">Built like it, too.</span>
          </h2>
          <p className="text-cream-dim text-base md:text-lg leading-relaxed">
            Receiving duas means opening your heart. Here is exactly how Ilham
            protects it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {points.map((p, i) => (
            <div key={i} className="glass-card p-7 md:p-8 flex gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[rgba(217,185,155,0.12)] text-accent">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                  {p.icon}
                </svg>
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-serif-var)] text-xl font-semibold text-cream mb-1.5">
                  {p.title}
                </h3>
                <p className="text-cream-dim text-[14px] leading-relaxed">
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
