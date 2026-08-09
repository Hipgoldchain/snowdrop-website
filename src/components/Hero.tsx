"use client";

import InteractiveDotGrid from "./InteractiveDotGrid";

const CALENDLY_DISCOVERY_URL = "https://calendly.com/snowdropgrowth/ai-discovery-call";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-68px)] mt-[68px] flex items-center justify-center relative overflow-hidden py-20 px-6"
    >
      {/* Interactive dot grid background */}
      <InteractiveDotGrid />

      {/* Hero card */}
      <div className="relative z-1 bg-snow border border-ink/8 rounded-[20px] py-[72px] px-16 max-w-[760px] w-full text-center shadow-[0_1px_2px_rgba(26,31,37,0.04),0_8px_24px_rgba(26,31,37,0.06),0_24px_60px_rgba(26,31,37,0.08)] max-[600px]:py-12 max-[600px]:px-7 max-[600px]:rounded-2xl">
        <span
          className="font-mono font-bold uppercase text-verdant-deep mb-4 block tracking-[0.1em] max-[390px]:text-[13px] max-[390px]:tracking-[0.08em]"
          style={{ fontSize: "clamp(13px, 1.1vw, 15px)" }}
        >
          The AI Audit · For ambitious UK businesses
        </span>

        <h1
          className="font-sans font-bold leading-[1.05] tracking-[-0.03em] text-ink mb-6"
          style={{ fontSize: "clamp(38px, 5.5vw, 64px)" }}
        >
          <span className="text-verdant-deep">Grow</span> your business.
          <br className="max-[600px]:hidden" />
          {" "}With AI.
        </h1>

        <p
          className="text-ink/72 leading-[1.55] max-w-[540px] mx-auto mb-10"
          style={{ fontSize: "clamp(17px, 1.5vw, 19px)" }}
        >
          We bring deep expertise and hands-on experience with businesses across the UK to help yours grow, faster.
        </p>

        {/* CTA */}
        <div className="flex gap-3 justify-center items-center mb-7 flex-wrap">
          <a
            href={CALENDLY_DISCOVERY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-verdant text-ink py-[18px] px-10 rounded-[10px] font-semibold text-[17px] no-underline transition-all duration-200 inline-block border-none cursor-pointer hover:bg-verdant-deep hover:text-snow hover:-translate-y-px"
          >
            Book Your Free Discovery Call
          </a>
          <a
            href="#journey"
            className="border-2 border-verdant-deep text-ink py-[16px] px-8 rounded-[10px] font-semibold text-[17px] no-underline transition-all duration-200 inline-block bg-transparent hover:-translate-y-px hover:bg-verdant/12"
          >
            How it works
          </a>
        </div>

        {/* Reassure */}
        <div className="font-mono text-[11px] lowercase tracking-[0.08em] text-ink/50">
          <span className="max-[390px]:hidden">no prep · no pitch · leave with your first growth fix, free</span>
          <span className="hidden max-[390px]:inline">no prep · leave with your first growth fix, free</span>
        </div>

      </div>
    </section>
  );
}
