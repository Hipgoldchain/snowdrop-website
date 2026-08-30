
export default function About() {
  return (
    <section id="about" className="bg-[#191E26] relative py-[120px] px-8 max-[968px]:py-20 max-[968px]:px-6 border-t border-[#2A313B]">
      <div className="max-w-[1040px] mx-auto">
        {/* Top section */}
        <div className="mb-24">
          <span className="font-mono text-[11px] font-medium lowercase tracking-[0.1em] text-verdant mb-6 block">
            about
          </span>
          <h2
            className="font-sans font-bold leading-[1.05] tracking-[-0.025em] max-w-[900px] mb-12 text-snow"
            style={{ fontSize: "clamp(32px, 4.8vw, 60px)" }}
          >
            Built for small businesses,{" "}
            <br className="max-[968px]:hidden" />
            not the <span className="text-verdant">FTSE 100.</span>
          </h2>

          <div className="grid grid-cols-2 gap-14 about-cols max-[968px]:grid-cols-1 max-[968px]:gap-9">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-snow">What we do</h4>
              <p className="text-[#A8B2BC] text-base leading-[1.65]">
                We find the work that&apos;s costing you, write you a plan for fixing it, and build the first fix ourselves. If you want more after that, we&apos;ll talk about it then.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-snow">
                What we&apos;re not
              </h4>
              <p className="text-[#A8B2BC] text-base leading-[1.65]">
                No PowerPoint factory, no three month diagnostic, no tool you&apos;ll never log into again.
              </p>
            </div>
          </div>
        </div>

        {/* Why trust us */}
        <div className="border-t border-[#2A313B] pt-20">
          <div className="text-center max-w-[820px] mx-auto mb-16">
            <span className="font-mono text-[11px] lowercase tracking-[0.12em] text-verdant mb-5 block">
              why trust us
            </span>
            <h3
              className="font-sans font-bold leading-[1.05] tracking-[-0.025em] text-snow mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Sasha has worked in some of the UK&apos;s{" "}
              <br className="max-[968px]:hidden" />
              biggest companies, on their biggest projects.
            </h3>
          </div>

          <div className="grid grid-cols-4 gap-5 mb-14 max-[968px]:grid-cols-2 max-[520px]:grid-cols-1">
            <div className="bg-[#20262F] border border-[#2A313B] rounded-xl py-7 px-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:border-verdant hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)]">
              <div className="font-sans font-bold text-2xl text-snow tracking-[-0.02em] mb-[6px]">Tesco</div>
              <div className="font-mono text-[11px] lowercase tracking-[0.06em] text-verdant font-semibold pb-[14px] mb-[14px] border-b border-[#2A313B]">
                finance transformation
              </div>
              <div className="text-[13px] text-[#A8B2BC] leading-[1.5]">
                Led their largest ever finance transformation.
              </div>
            </div>

            <div className="bg-[#20262F] border border-[#2A313B] rounded-xl py-7 px-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:border-verdant hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)]">
              <div className="font-sans font-bold text-2xl text-snow tracking-[-0.02em] mb-[6px]">Haleon</div>
              <div className="font-mono text-[11px] lowercase tracking-[0.06em] text-verdant font-semibold pb-[14px] mb-[14px] border-b border-[#2A313B]">
                enterprise AI
              </div>
              <div className="text-[13px] text-[#A8B2BC] leading-[1.5]">
                Led enterprise AI strategy.
              </div>
            </div>

            <div className="bg-[#20262F] border border-[#2A313B] rounded-xl py-7 px-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:border-verdant hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)]">
              <div className="font-sans font-bold text-2xl text-snow tracking-[-0.02em] mb-[6px]">GSK &amp; Haleon</div>
              <div className="font-mono text-[11px] lowercase tracking-[0.06em] text-verdant font-semibold pb-[14px] mb-[14px] border-b border-[#2A313B]">
                £35B+ separation
              </div>
              <div className="text-[13px] text-[#A8B2BC] leading-[1.5]">
                Separation lead across the split.
              </div>
            </div>

            <div className="bg-[#20262F] border border-[#2A313B] rounded-xl py-7 px-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:border-verdant hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)]">
              <div className="font-sans font-bold text-2xl text-snow tracking-[-0.02em] mb-[6px]">EasyJet</div>
              <div className="font-mono text-[11px] lowercase tracking-[0.06em] text-verdant font-semibold pb-[14px] mb-[14px] border-b border-[#2A313B]">
                commercial
              </div>
              <div className="text-[13px] text-[#A8B2BC] leading-[1.5]">
                Commercial transformation.
              </div>
            </div>
          </div>

          <div className="text-center pt-10 border-t border-[#2A313B]">
            <div className="flex gap-[10px] justify-center flex-wrap mb-6">
              <span className="font-mono text-[11px] lowercase tracking-[0.04em] bg-[#20262F] border border-[#2A313B] text-[#A8B2BC] py-[5px] px-3 rounded-full">Life Sciences</span>
              <span className="font-mono text-[11px] lowercase tracking-[0.04em] bg-[#20262F] border border-[#2A313B] text-[#A8B2BC] py-[5px] px-3 rounded-full">Retail</span>
              <span className="font-mono text-[11px] lowercase tracking-[0.04em] bg-[#20262F] border border-[#2A313B] text-[#A8B2BC] py-[5px] px-3 rounded-full">FMCG</span>
              <span className="font-mono text-[11px] lowercase tracking-[0.04em] bg-[#20262F] border border-[#2A313B] text-[#A8B2BC] py-[5px] px-3 rounded-full">Travel &amp; Leisure</span>
              <span className="font-mono text-[11px] lowercase tracking-[0.04em] bg-[#20262F] border border-[#2A313B] text-[#A8B2BC] py-[5px] px-3 rounded-full">Public Sector</span>
            </div>
            <p className="text-sm text-[#7A848E] max-w-[620px] mx-auto leading-[1.5]">
              Founded by <strong className="text-snow font-semibold">Sasha</strong>. Eight years across the FTSE 100, on enterprise AI and transformation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
