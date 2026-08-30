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

      {/* Hero content — no card, content sits directly on dark ground */}
      <div className="relative z-1 max-w-[760px] mx-auto text-center">
        <span
          className="font-mono lowercase text-verdant mb-4 block tracking-[0.1em] max-[390px]:text-[13px] max-[390px]:tracking-[0.08em]"
          style={{ fontSize: "clamp(13px, 1.1vw, 15px)" }}
        >
          practical ai for growing businesses
        </span>

        <h1
          className="font-sans font-bold leading-[1.05] tracking-[-0.03em] text-snow mb-6"
          style={{ fontSize: "clamp(38px, 5.5vw, 64px)" }}
        >
          Your first AI fix, <span className="text-verdant">built and running</span> in a week.
        </h1>

        <p
          className="text-[#A8B2BC] leading-[1.55] max-w-[540px] mx-auto mb-8"
          style={{ fontSize: "clamp(17px, 1.5vw, 19px)" }}
        >
          One real solution, live in your business, helping it grow. No deck, no follow-up sale.
        </p>

        {/* Free-call pill — optional dark panel: bg-[#20262F] border border-[#2A313B] rounded-xl py-4 px-6 inline-block */}
        <p
          className="text-[#A8B2BC] leading-[1.55] max-w-[500px] mx-auto mb-10"
          style={{ fontSize: "clamp(15px, 1.2vw, 16px)" }}
        >
          Free 15 minute call. You&apos;ll leave knowing your biggest bottleneck, and one fix you can build yourself that week.
        </p>

        {/* CTA */}
        <div className="mb-7">
          <a
            href={CALENDLY_DISCOVERY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-verdant text-ink py-[18px] px-10 rounded-[10px] font-semibold text-[17px] no-underline transition-all duration-200 inline-block border-none cursor-pointer hover:bg-verdant-deep hover:text-snow hover:-translate-y-px"
          >
            Book Your Free Discovery Call
          </a>
        </div>

        {/* Reassure */}
        <div className="font-mono text-[11px] lowercase tracking-[0.08em] text-[#7A848E]">
          no pitch · no prep · we&apos;ll only sell you the roadmap if it&apos;s a fit
        </div>

      </div>
    </section>
  );
}
