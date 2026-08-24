import { builds } from "@/data/builds";
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

export default function BuildExperience() {
  return (
    <section id="build-experience" className="bg-snow relative py-[120px] px-8 max-[968px]:py-20 max-[968px]:px-6">
      <div className="max-w-[1280px] mx-auto">
        <span className="font-mono text-[11px] font-medium lowercase tracking-[0.1em] text-verdant-deep mb-6 block">
          what we&apos;ve built
        </span>
        <h2
          className="font-sans font-bold leading-[1.02] tracking-[-0.03em] mb-5"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          Designed, built, shipped.
        </h2>
        <p className="text-lg text-ink/70 max-w-[720px] mb-16">
          Live products you can visit today.
        </p>

        {/* Static grid: 3 across, 2/1 on smaller widths */}
        <div className="grid grid-cols-3 gap-6 max-[968px]:grid-cols-2 max-[640px]:grid-cols-1">
          {builds.map((build, i) => {
            const colors = sectorColorMap[build.sectorColor];
            return (
              <div
                key={i}
                className="bg-snow rounded-2xl py-8 px-7 border border-ink/6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(26,31,37,0.1)] flex flex-col"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="font-mono text-[11px] tracking-[0.04em] py-[6px] px-3 rounded-full inline-block font-semibold shrink-0"
                      style={{
                        background: colors.bg,
                        color: colors.text,
                      }}
                    >
                      {build.sector}
                    </span>

                    <div className="text-right flex flex-col items-end gap-2">
                      <a
                        href={build.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:opacity-80 transition-opacity"
                      >
                        <Image
                          src={build.logo}
                          alt={build.name}
                          width={140}
                          height={40}
                          className="h-10 w-auto max-w-[180px] object-contain"
                        />
                      </a>
                      <a
                        href={build.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] font-semibold text-ink/80 hover:text-verdant-deep transition-colors"
                      >
                        {build.name}
                      </a>
                    </div>
                  </div>
                </div>

                {/* The brief */}
                <div className="mb-6">
                  <div className="font-mono text-[11px] lowercase tracking-[0.06em] text-ink/60 mb-2">
                    the brief
                  </div>
                  <p className="text-[14px] text-ink/85 leading-[1.5]">
                    {build.brief}
                  </p>
                </div>

                {/* What we built */}
                <div className="mb-6">
                  <div className="font-mono text-[11px] lowercase tracking-[0.06em] text-ink/60 mb-3">
                    what we built
                  </div>
                  <div className="flex flex-col gap-2">
                    {build.built.map((item, k) => (
                      <div
                        key={k}
                        className="bg-mist rounded-lg py-3 px-[14px]"
                      >
                        <div className="text-[14px] text-ink/85 leading-[1.4]">
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Since launch */}
                <div className="mt-auto">
                  <div className="font-mono text-[11px] lowercase tracking-[0.06em] text-ink/60 mb-3">
                    since launch
                  </div>
                  <div className="flex flex-col gap-2">
                    {build.launch.map((item, k) => (
                      <div
                        key={k}
                        className="bg-mist rounded-lg py-3 px-[14px]"
                      >
                        <div className="text-[14px] text-ink/85 leading-[1.4]">
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
