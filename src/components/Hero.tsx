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
          className="font-mono lowercase text-verdant-deep mb-4 block tracking-[0.1em] max-[390px]:text-[13px] max-[390px]:tracking-[0.08em]"
          style={{ fontSize: "clamp(13px, 1.1vw, 15px)" }}
        >
          practical ai for growing businesses
        </span>

        <h1
          className="font-sans font-bold leading-[1.05] tracking-[-0.03em] text-ink mb-6"
          style={{ fontSize: "clamp(38px, 5.5vw, 64px)" }}
        >
          Your first AI fix, built and running in a week.
        </h1>

        <p
          className="text-ink/72 leading-[1.55] max-w-[540px] mx-auto mb-8"
          style={{ fontSize: "clamp(17px, 1.5vw, 19px)" }}
        >
          One real solution, live in your business, helping it grow. No deck, no follow-up sale.
        </p>

        {/* Free-call pill */}
        <p
          className="text-ink/65 leading-[1.55] max-w-[500px] mx-auto mb-10"
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
        <div className="font-mono text-[11px] lowercase tracking-[0.08em] text-ink/50">
          no pitch · no prep · we&apos;ll only sell you the roadmap if it&apos;s a fit
        </div>

      </div>
    </section>
  );
}
