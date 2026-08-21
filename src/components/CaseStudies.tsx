import { caseStudies } from "@/data/caseStudies";
import Image from "next/image";

const sectorColorMap = {
  bluebell: {
    bg: "rgba(107, 143, 217, 0.15)",
    text: "#4060B0",
  },
  butter: {
    bg: "rgba(242, 208, 107, 0.3)",
    text: "#D4A82C",
  },
  moss: {
    bg: "rgba(90, 122, 91, 0.18)",
    text: "#3F5A40",
  },
  purple: {
    bg: "rgba(107, 79, 160, 0.15)",
    text: "#6B4FA0",
  },
};

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-mist relative py-[120px] px-8 max-[968px]:py-20 max-[968px]:px-6">
      <div className="max-w-[1280px] mx-auto">
        <span className="font-mono text-[11px] font-medium lowercase tracking-[0.1em] text-verdant-deep mb-6 block">
          our experience
        </span>
        <span className="font-mono text-[11px] lowercase tracking-[0.08em] text-ink/55 mb-5 block">
          property · travel &amp; leisure · construction · consumer
        </span>
        <h2
          className="font-sans font-bold leading-[1.02] tracking-[-0.03em] mb-5"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          How we&apos;ve used AI to help real <br className="max-[968px]:hidden" />
          UK businesses achieve their ambitions.
        </h2>
        <p className="text-lg text-ink/70 max-w-[720px] mb-16">
          Six jobs across four sectors. The same problems come up again and
          again — too much admin, lost sales, founders stretched too thin. The
          wins stack up fast.
        </p>

        <div className="grid grid-cols-3 gap-6 case-grid">
          {caseStudies.map((study, i) => {
            const colors = sectorColorMap[study.sectorColor];
            return (
              <div
                key={i}
                className="bg-snow rounded-2xl py-8 px-7 border border-ink/6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(26,31,37,0.1)] case-card flex flex-col"
              >
                {/* Header section */}
                <div className="mb-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    {/* Sector pill - top left */}
                    <span
                      className="font-mono text-[11px] tracking-[0.04em] py-[6px] px-3 rounded-full inline-block font-semibold shrink-0"
                      style={{
                        background: colors.bg,
                        color: colors.text,
                      }}
                    >
                      {study.sector}
                    </span>

                    {/* Logo OR Name - top right */}
                    <div className="text-right">
                      {["SIFT", "RenoCheck", "Auspicious by Design"].includes(study.name) ? (
                        // Wordmark logos: show logo only
                        study.url ? (
                          <a
                            href={study.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block hover:opacity-80 transition-opacity"
                          >
                            <Image
                              src={study.logo}
                              alt={study.name}
                              width={110}
                              height={30}
                              className="h-[30px] w-auto max-w-[180px] object-contain grayscale opacity-70"
                              style={{ filter: 'grayscale(100%)' }}
                            />
                          </a>
                        ) : (
                          <Image
                            src={study.logo}
                            alt={study.name}
                            width={110}
                            height={30}
                            className="h-[30px] w-auto max-w-[180px] object-contain grayscale opacity-70"
                            style={{ filter: 'grayscale(100%)' }}
                          />
                        )
                      ) : (
                        // Symbol/crest logos: show text only
                        study.url ? (
                          <a
                            href={study.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[22px] font-bold tracking-[-0.02em] leading-[1.15] block text-ink no-underline hover:text-verdant-deep transition-colors"
                          >
                            {study.name}
                          </a>
                        ) : (
                          <h3 className="text-[22px] font-bold tracking-[-0.02em] leading-[1.15]">
                            {study.name}
                          </h3>
                        )
                      )}
                    </div>
                  </div>

                  <p className="text-ink/55 text-[13px] mb-4 font-medium">
                    {study.title}
                  </p>
                </div>

                {/* the problem */}
                <div className="mb-5">
                  <div className="font-mono text-[11px] lowercase tracking-[0.06em] text-ink/60 mb-2">
                    the problem
                  </div>
                  <p className="text-ink/65 text-sm italic">
                    {study.context}
                  </p>
                </div>

                {/* what we did */}
                <div className="mb-5">
                  <div className="font-mono text-[11px] lowercase tracking-[0.06em] text-ink/60 mb-2">
                    what we did
                  </div>
                  <div className="space-y-1">
                    {study.tags.map((tag, k) => (
                      <div key={k} className="flex items-start gap-2">
                        <span className="text-verdant-deep text-[10px] mt-[3px]">•</span>
                        <span className="text-ink/85 text-[15px] leading-[1.5]">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* why it mattered */}
                <div className="mb-6">
                  <div className="font-mono text-[11px] lowercase tracking-[0.06em] text-ink/60 mb-2">
                    why it mattered
                  </div>
                  <p className="text-ink/85 text-[15px] leading-[1.6]">
                    {study.body}
                  </p>
                </div>

                {/* the impact */}
                <div className="mt-auto pt-6 border-t border-mist">
                  <div className="font-mono text-[11px] lowercase tracking-[0.06em] text-ink/60 mb-3">
                    the impact
                  </div>
                  <div className="flex flex-col gap-2">
                    {study.stats.map((s, j) => (
                      <div
                        key={j}
                        className="bg-mist rounded-lg py-3 px-[14px] flex items-baseline justify-between gap-3"
                      >
                        <div className="font-mono font-bold text-[17px] text-verdant-deep tracking-[-0.01em] shrink-0">
                          {s.stat}
                        </div>
                        <div className="text-[12px] text-ink/60 leading-[1.3] text-right">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 font-mono text-[12px] lowercase tracking-[0.06em] text-ink/50">
          More case studies and sample reports on request.
        </div>
      </div>
    </section>
  );
}
