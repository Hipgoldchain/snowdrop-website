"use client";

import InteractiveDotGrid from "./InteractiveDotGrid";

const CALENDLY_DISCOVERY_URL = "https://calendly.com/snowdropgrowth/ai-discovery-call";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-68px)] mt-[68px] flex items-center justify-center relative overflow-hidden py-20 px-6 bg-[#191E26]"
    >
      {/* Interactive dot grid background */}
      <InteractiveDotGrid />

      {/* Bottom fade — dissolves dot grid into the next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none z-[1]"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #20262F 100%)",
        }}
      />

      {/* Hero card */}
      <div className="relative z-[2] bg-[#20262F]/80 backdrop-blur-[12px] border border-[#2A313B] rounded-[20px] py-[72px] px-16 max-w-[760px] w-full text-center shadow-[0_1px_2px_rgba(0,0,0,0.12),0_8px_24px_rgba(0,0,0,0.18),0_24px_60px_rgba(0,0,0,0.24)] max-[600px]:py-12 max-[600px]:px-7 max-[600px]:rounded-2xl">
        <span
          className="font-mono lowercase text-verdant mb-4 block tracking-[0.1em] max-[390px]:text-[13px] max-[390px]:tracking-[0.08em]"
          style={{ fontSize: "clamp(13px, 1.1vw, 15px)" }}
        >
          the ai audit · for growing businesses
        </span>

        <h1
          className="font-sans font-bold leading-[1.05] tracking-[-0.03em] text-snow mb-6 max-w-[680px] mx-auto"
          style={{ fontSize: "clamp(36px, 5.2vw, 58px)" }}
        >
          Too busy running the business to <span className="text-verdant">grow it.</span>
        </h1>

        <p
          className="text-[#A8B2BC] leading-[1.55] max-w-[560px] mx-auto mb-8"
          style={{ fontSize: "clamp(17px, 1.5vw, 19px)" }}
        >
          The AI Audit finds what&apos;s eating your time, prices what it&apos;s costing you, and gives you a roadmap to fix it, with your first fix built and live in a week.
        </p>

        {/* Pricing block */}
        <div className="mb-10">
          <div className="text-snow mb-2" style={{ fontSize: "clamp(20px, 2vw, 26px)" }}>
            <span className="font-semibold">The AI Audit</span>
            <span className="mx-2">—</span>
            <span className="line-through text-[#7A848E]">£750</span>
            {" "}
            <span className="font-bold text-snow">£500</span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] font-bold text-butter bg-butter/15 border border-butter/30 py-[5px] px-3 rounded-full inline-block">
            launch price · save £250
          </span>
        </div>

        {/* CTA */}
        <div className="mb-5">
          <a
            href={CALENDLY_DISCOVERY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-verdant text-ink py-[18px] px-10 rounded-[10px] font-semibold text-[17px] no-underline transition-all duration-200 inline-block border-none cursor-pointer hover:bg-verdant-deep hover:text-snow hover:-translate-y-px"
          >
            Book Your Free Discovery Call
          </a>
        </div>

        {/* Fit-check pill */}
        <div className="mb-7">
          <span className="font-mono text-[12px] lowercase tracking-[0.04em] text-[#7A848E]">
            not sure yet? free 15-min call, we&apos;ll find your biggest bottleneck and tell you if the audit&apos;s worth it
          </span>
        </div>

        {/* Reassure */}
        <div className="font-mono text-[11px] lowercase tracking-[0.08em] text-[#7A848E]">
          no pitch · no prep · we&apos;ll only sell you the roadmap if it&apos;s a fit
        </div>

      </div>
    </section>
  );
}
