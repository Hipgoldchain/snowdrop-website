const CALENDLY_DISCOVERY_URL = "https://calendly.com/snowdropgrowth/ai-discovery-call";

export default function BrandMoment() {
  return (
    <section className="bg-[#151A20] text-snow py-[100px] px-8 relative overflow-hidden text-center max-[600px]:py-20 max-[600px]:px-6 border-t border-[#2A313B]">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #3FE174 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Bottom gradient */}
      <div
        className="absolute left-0 right-0 bottom-0 h-1/2 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(43, 184, 92, 0.04) 100%)",
        }}
      />

      <div className="relative z-1 max-w-[680px] mx-auto">
        <h2
          className="font-sans font-bold leading-[1.05] tracking-[-0.03em] text-snow mb-6"
          style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
        >
          Seen enough?
        </h2>
        <p
          className="text-[#A8B2BC] leading-[1.55] max-w-[520px] mx-auto mb-10"
          style={{ fontSize: "clamp(16px, 1.4vw, 18px)" }}
        >
          Fifteen minutes, free. You&apos;ll leave knowing your biggest bottleneck, and whether the audit&apos;s worth your money.
        </p>
        <a
          href={CALENDLY_DISCOVERY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-verdant text-ink py-[18px] px-10 rounded-[10px] font-semibold text-[17px] no-underline transition-all duration-200 inline-block border-none cursor-pointer hover:bg-verdant-deep hover:text-snow hover:-translate-y-px"
        >
          Book Your Free Discovery Call
        </a>
        <div className="mt-5 font-mono text-[11px] lowercase tracking-[0.08em] text-[#7A848E]">
          no pitch · no prep · we&apos;ll only sell you the roadmap if it&apos;s a fit
        </div>
      </div>
    </section>
  );
}
