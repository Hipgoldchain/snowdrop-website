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
          {/* Header */}
          <div className="flex justify-between items-start gap-6 pb-8 mb-8 border-b border-ink/8 max-[600px]:flex-col max-[600px]:items-start">
            <div>
              <div className="font-mono text-[11px] lowercase tracking-[0.1em] text-verdant-deep mb-[6px] font-semibold">
                AI Opportunity Roadmap
              </div>
              <div className="font-sans font-bold text-2xl text-ink tracking-[-0.02em]">
                Your custom roadmap and your first AI agent — included.
              </div>
            </div>
            <div className="text-right shrink-0 max-[600px]:text-left">
              <div className="font-mono text-[11px] lowercase tracking-[0.1em] text-ink/55 mb-[2px] font-medium">
                Usually
              </div>
              <div className="font-mono text-lg text-ink/40 line-through decoration-2 mb-[2px]">
                £750
              </div>
              <div className="font-sans font-bold text-[44px] text-ink tracking-[-0.03em] leading-none mb-2">
                £500
              </div>
              <div className="bg-butter text-ink font-mono text-[10px] font-bold uppercase tracking-[0.12em] py-[5px] px-[10px] rounded inline-block">
                Launch price · Save £250
              </div>
            </div>
          </div>

          {/* Steps */}
          <ul className="list-none flex flex-col gap-[18px] mb-10 p-0">
            <li className="flex items-start gap-[18px]">
              <span className="font-mono font-bold text-[13px] text-verdant-deep bg-mist w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-[2px]">
                01
              </span>
              <div className="flex-1 pt-1">
                <strong className="block font-sans font-semibold text-[17px] text-ink mb-1 tracking-[-0.01em]">
                  Free discovery call · 15 mins
                </strong>
                <span className="block text-sm text-ink/72 leading-[1.5]">
                  We make sure we&apos;re a fit before you spend a penny.
                </span>
              </div>
            </li>

            <li className="flex items-start gap-[18px]">
              <span className="font-mono font-bold text-[13px] text-verdant-deep bg-mist w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-[2px]">
                02
              </span>
              <div className="flex-1 pt-1">
                <strong className="block font-sans font-semibold text-[17px] text-ink mb-1 tracking-[-0.01em]">
                  AI Audit · 45 mins
                </strong>
                <span className="block text-sm text-ink/72 leading-[1.5]">
                  We talk about your business, your week, and where time and
                  money are slipping away.
                </span>
              </div>
            </li>

            <li className="flex items-start gap-[18px]">
              <span className="font-mono font-bold text-[13px] text-verdant-deep bg-mist w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-[2px]">
                03
              </span>
              <div className="flex-1 pt-1">
                <strong className="block font-sans font-semibold text-[17px] text-ink mb-1 tracking-[-0.01em]">
                  Your custom AI Roadmap
                </strong>
                <span className="block text-sm text-ink/72 leading-[1.5]">
                  Delivered in 48 hours. Practical steps, ranked by impact, with
                  real numbers on what each one is worth.
                </span>
              </div>
            </li>

            <li className="flex items-start gap-[18px]">
              <span className="font-mono font-bold text-[13px] text-verdant-deep bg-mist w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-[2px]">
                04
              </span>
              <div className="flex-1 pt-1">
                <strong className="block font-sans font-semibold text-[17px] text-ink mb-1 tracking-[-0.01em]">
                  Activation call · 1 hour
                </strong>
                <span className="block text-sm text-ink/72 leading-[1.5]">
                  We walk through the roadmap together. Pick the first agent to
                  build. Plan it out.
                </span>
              </div>
            </li>

            <li className="flex items-start gap-[18px]">
              <span className="font-mono font-bold text-[13px] text-ink bg-verdant w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-[2px]">
                05
              </span>
              <div className="flex-1 pt-1">
                <strong className="block font-sans font-semibold text-[17px] text-verdant-deep mb-1 tracking-[-0.01em]">
                  Your first AI agent — built free, included
                </strong>
                <span className="block text-sm text-ink/72 leading-[1.5]">
                  A real working agent inside your business — before we even
                  talk about the next step. Pay only when you&apos;re happy with
                  the results.
                </span>
              </div>
            </li>
          </ul>

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
