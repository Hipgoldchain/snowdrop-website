export default function FinalCta() {
  return (
    <section id="book" className="bg-ink text-snow text-center relative overflow-hidden py-[120px] px-8 max-md:py-20 max-md:px-6">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #3FE174 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative z-1 max-w-[880px] mx-auto">
        <span className="font-mono text-[11px] font-medium lowercase tracking-[0.1em] text-verdant mb-6 block">
          book your free call
        </span>
        <h2 className="font-sans font-bold text-[clamp(36px,5.5vw,72px)] leading-[1.05] tracking-[-0.03em] mb-6">
          Ready to use AI to grow your business?
        </h2>
        <p className="text-xl text-snow/70 mb-12 max-w-[600px] mx-auto">
          Book a free 15-minute discovery call. If we&apos;re a fit, you can
          book the AI Roadmap. If not, we&apos;ll point you in the right
          direction. No pressure, no pitch.
        </p>

        {/* Calendly placeholder */}
        <div className="bg-snow text-ink rounded-xl py-20 px-8 mb-8 border-2 border-dashed border-verdant">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-verdant-deep mb-3">
            Calendly Embed
          </div>
          <h3 className="text-2xl font-bold mb-2">
            Book your free 15-minute call
          </h3>
          <p className="text-ink/60 text-sm">
            Calendly inline widget will load here once the URL is configured.
          </p>
        </div>

        <div className="font-mono text-[11px] lowercase tracking-[0.08em] text-verdant mb-4">
          £500 launch price · save £250 · 48hr delivery
        </div>
        <a
          href="mailto:hello@snowdropgrowth.com"
          className="text-snow/70 no-underline text-[15px] transition-colors duration-200 hover:text-verdant"
        >
          Or email hello@snowdropgrowth.com →
        </a>
      </div>
    </section>
  );
}
