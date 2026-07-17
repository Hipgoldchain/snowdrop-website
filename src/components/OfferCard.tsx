export default function OfferCard() {
  return (
    <section id="audit-offer" className="bg-mist py-[100px] px-8 relative overflow-hidden max-[600px]:py-16 max-[600px]:px-5">
      {/* Grey dot grid */}
      <div
        className="absolute inset-0 opacity-[0.22] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #C5CDC8 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative z-1 text-center max-w-[1040px] mx-auto">
        <span className="font-mono text-[11px] font-medium lowercase tracking-[0.1em] text-verdant-deep mb-10 block">
          how it works
        </span>

        <div className="bg-snow border border-ink/10 rounded-[20px] p-12 text-left max-w-[800px] mx-auto shadow-[0_1px_2px_rgba(26,31,37,0.04),0_12px_32px_rgba(26,31,37,0.06),0_32px_80px_rgba(26,31,37,0.08)] max-[600px]:py-8 max-[600px]:px-6 max-[600px]:rounded-2xl">
          {/* Rung 01 */}
          <div className="flex items-start gap-[18px] mb-8">
            <span className="font-mono font-bold text-[13px] text-verdant-deep bg-mist w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-[2px]">
              01
            </span>
            <div className="flex-1 pt-1">
              <strong className="block font-sans font-semibold text-[17px] text-ink mb-1 tracking-[-0.01em]">
                Free discovery call · 15 mins
              </strong>
              <span className="block text-sm text-ink/72 leading-[1.5]">
                We find your single biggest bottleneck — live — and you leave
                with your first AI fix: a simple starter agent you can try that
                week.
              </span>
            </div>
          </div>

          {/* Rung 02 */}
          <div className="flex items-start gap-[18px] mb-8">
            <span className="font-mono font-bold text-[13px] text-verdant-deep bg-mist w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-[2px]">
              02
            </span>
            <div className="flex-1 pt-1">
              <strong className="block font-sans font-semibold text-[17px] text-ink mb-1 tracking-[-0.01em]">
                The AI Opportunity Roadmap
              </strong>
              <div className="flex items-center gap-[10px] flex-wrap mb-3">
                <span className="font-mono text-[13px] text-ink/50 line-through decoration-[1.5px]">
                  was £750
                </span>
                <span className="font-sans font-bold text-base text-ink tracking-[-0.01em]">
                  now £500
                </span>
                <span className="bg-butter text-ink font-mono text-[10px] font-bold uppercase tracking-[0.12em] py-[5px] px-[10px] rounded inline-block">
                  Launch price · Save £250
                </span>
              </div>
              <ul className="list-none p-0 m-0 flex flex-col gap-2">
                <li className="text-sm text-ink/72 leading-[1.5]">
                  — AI Audit call · 45 mins — we talk about your business, your
                  week, and where time and money are slipping away.
                </li>
                <li className="text-sm text-ink/72 leading-[1.5]">
                  — Your custom AI Roadmap — delivered in 48 hours. Practical
                  steps, ranked by impact, with real numbers on what each one is
                  worth.
                </li>
                <li className="text-sm text-ink/72 leading-[1.5]">
                  — Activation call · 1 hour — we walk through the roadmap
                  together. Pick the first agent to build. Plan it out.
                </li>
                <li className="text-sm text-verdant-deep font-medium leading-[1.5]">
                  — Your first AI agent — built, deployed, and live. Included.
                  Pay only when you&apos;re happy with the results.
                </li>
              </ul>
            </div>
          </div>

          {/* Rung 03 */}
          <div className="flex items-start gap-[18px] mb-10">
            <span className="font-mono font-bold text-[13px] text-verdant-deep bg-mist w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-[2px]">
              03
            </span>
            <div className="flex-1 pt-1">
              <strong className="block font-sans font-semibold text-[17px] text-ink mb-1 tracking-[-0.01em]">
                Going forward
              </strong>
              <span className="block text-sm text-ink/72 leading-[1.5]">
                Custom AI agents and workflows, or ongoing advisory — scoped
                together once your roadmap is live.
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-8 border-t border-ink/8 text-center">
            <div>
              <a
                href="#book"
                className="bg-verdant text-ink py-[18px] px-10 rounded-[10px] font-semibold text-[17px] no-underline transition-all duration-200 inline-block border-none cursor-pointer hover:bg-verdant-deep hover:text-snow hover:-translate-y-px"
              >
                Book Your Free Discovery Call
              </a>
            </div>
            <a
              href="#book"
              className="inline-block mt-4 text-[13px] text-ink/55 no-underline border-b border-dashed border-ink/25 pb-px transition-colors duration-200 hover:text-verdant-deep hover:border-verdant-deep"
            >
              Already sold? Skip ahead and book the £500 roadmap →
            </a>
            <div className="mt-[18px] text-[13px] text-ink/62 leading-[1.5] max-w-[480px] mx-auto">
              We&apos;ll only sell you the roadmap if it&apos;s a fit. No pitch,
              no pressure.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
