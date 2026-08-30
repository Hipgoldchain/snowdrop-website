"use client";

import { audits, AuditCard } from "@/data/audits";
import Image from "next/image";
import { useState } from "react";

const sectorColorMap = {
  bluebell: {
    bg: "rgba(107, 143, 217, 0.20)",
    text: "#8BABEE",
  },
  butter: {
    bg: "rgba(242, 208, 107, 0.20)",
    text: "#F2D06B",
  },
  moss: {
    bg: "rgba(90, 122, 91, 0.25)",
    text: "#7FA880",
  },
  purple: {
    bg: "rgba(107, 79, 160, 0.25)",
    text: "#9B7FD0",
  },
};

const impactRows: Array<{
  label: string;
  key: keyof Pick<AuditCard, "growthFound" | "toolCost" | "timeToLive">;
  valueColor: string;
}> = [
  { label: "growth found", key: "growthFound", valueColor: "text-verdant" },
  { label: "tool cost", key: "toolCost", valueColor: "text-snow" },
  { label: "time to live", key: "timeToLive", valueColor: "text-snow" },
];

function ImpactRows({ audit }: { audit: AuditCard }) {
  return (
    <div className="mt-auto">
      <div className="font-mono text-[11px] lowercase tracking-[0.06em] text-[#7A848E] mb-3">
        impact if delivered
      </div>
      <div className="flex flex-col gap-2">
        {impactRows.map((row) => (
          <div
            key={row.key}
            className="bg-[#191E26] rounded-lg h-[46px] px-[14px] flex items-center justify-between gap-3"
          >
            <div className="font-mono text-[11px] lowercase tracking-[0.04em] text-[#7A848E] shrink-0 w-[90px]">
              {row.label}
            </div>
            <div
              className={`font-mono font-bold text-[15px] tracking-[-0.01em] text-right ${row.valueColor}`}
            >
              {audit[row.key]}
            </div>
          </div>
        ))}
      </div>
      {audit.footnote && (
        <div className="font-mono text-[11px] text-[#7A848E]/60 tracking-[0.02em] mt-2 px-[14px]">
          {audit.footnote}
        </div>
      )}
    </div>
  );
}

export default function AuditExperience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? audits.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === audits.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="audit-experience" className="bg-[#191E26] relative py-[120px] px-8 max-[968px]:py-20 max-[968px]:px-6 border-t border-[#2A313B]">
      <div className="max-w-[1280px] mx-auto">
        <span className="font-mono text-[11px] font-medium lowercase tracking-[0.1em] text-verdant mb-6 block">
          our experience
        </span>
        <h2
          className="font-sans font-bold leading-[1.02] tracking-[-0.03em] mb-5 text-snow"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          How we&apos;ve used AI to help real businesses grow.
        </h2>
        <p className="text-lg text-[#A8B2BC] max-w-[720px] mb-16">
          Six jobs across four sectors. Here&apos;s what we found.
        </p>

        {/* Desktop: all three visible */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {audits.map((audit, i) => {
            const colors = sectorColorMap[audit.sectorColor];
            return (
              <div
                key={i}
                className="bg-[#20262F] rounded-2xl py-8 px-7 border border-[#2A313B] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] hover:border-verdant/30 flex flex-col"
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
                      {audit.sector}
                    </span>

                    <div className="text-right flex flex-col items-end gap-2">
                      {audit.url ? (
                        <a
                          href={audit.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block hover:opacity-80 transition-opacity"
                        >
                          <Image
                            src={audit.logo}
                            alt={audit.name}
                            width={140}
                            height={40}
                            className="h-10 w-auto max-w-[180px] object-contain"
                            style={{ filter: 'brightness(0) invert(1)' }}
                          />
                        </a>
                      ) : (
                        <Image
                          src={audit.logo}
                          alt={audit.name}
                          width={140}
                          height={40}
                          className="h-10 w-auto max-w-[180px] object-contain"
                          style={{ filter: 'brightness(0) invert(1)' }}
                        />
                      )}
                      <div className="text-[15px] font-semibold text-snow/80">
                        {audit.name}
                      </div>
                    </div>
                  </div>
                </div>

                {/* The situation */}
                <div className="mb-6">
                  <div className="font-mono text-[11px] lowercase tracking-[0.06em] text-[#7A848E] mb-2">
                    the situation
                  </div>
                  <p className="text-[14px] text-[#A8B2BC] leading-[1.5]">
                    {audit.situation}
                  </p>
                </div>

                {/* Opportunities uncovered */}
                <div className="mb-6">
                  <div className="font-mono text-[11px] lowercase tracking-[0.06em] text-[#7A848E] mb-3">
                    opportunities uncovered
                  </div>
                  <div className="flex flex-col gap-2">
                    {audit.opportunities.map((opp, k) => (
                      <div
                        key={k}
                        className="bg-[#191E26] rounded-lg py-3 px-[14px]"
                      >
                        <div className="text-[14px] text-[#A8B2BC] leading-[1.4]">
                          {opp}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact if delivered, uniform rows */}
                <ImpactRows audit={audit} />
              </div>
            );
          })}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {audits.map((audit, i) => {
                const colors = sectorColorMap[audit.sectorColor];
                return (
                  <div
                    key={i}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="bg-[#20262F] rounded-2xl py-8 px-7 border border-[#2A313B] flex flex-col">
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
                            {audit.sector}
                          </span>

                          <div className="text-right flex flex-col items-end gap-2">
                            {audit.url ? (
                              <a
                                href={audit.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block hover:opacity-80 transition-opacity"
                              >
                                <Image
                                  src={audit.logo}
                                  alt={audit.name}
                                  width={140}
                                  height={40}
                                  className="h-10 w-auto max-w-[180px] object-contain"
                                  style={{ filter: 'brightness(0) invert(1)' }}
                                />
                              </a>
                            ) : (
                              <Image
                                src={audit.logo}
                                alt={audit.name}
                                width={140}
                                height={40}
                                className="h-10 w-auto max-w-[180px] object-contain"
                                style={{ filter: 'brightness(0) invert(1)' }}
                              />
                            )}
                            <div className="text-[15px] font-semibold text-snow/80">
                              {audit.name}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* The situation */}
                      <div className="mb-6">
                        <div className="font-mono text-[11px] lowercase tracking-[0.06em] text-[#7A848E] mb-2">
                          the situation
                        </div>
                        <p className="text-[14px] text-[#A8B2BC] leading-[1.5]">
                          {audit.situation}
                        </p>
                      </div>

                      {/* Opportunities uncovered */}
                      <div className="mb-6">
                        <div className="font-mono text-[11px] lowercase tracking-[0.06em] text-[#7A848E] mb-3">
                          opportunities uncovered
                        </div>
                        <div className="flex flex-col gap-2">
                          {audit.opportunities.map((opp, k) => (
                            <div
                              key={k}
                              className="bg-[#191E26] rounded-lg py-3 px-[14px]"
                            >
                              <div className="text-[14px] text-[#A8B2BC] leading-[1.4]">
                                {opp}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Impact if delivered, uniform rows */}
                      <ImpactRows audit={audit} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrow controls (mobile only) */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-[#2A313B] text-snow flex items-center justify-center hover:border-verdant hover:text-verdant transition-colors"
              aria-label="Previous audit"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#2A313B] text-snow flex items-center justify-center hover:border-verdant hover:text-verdant transition-colors"
              aria-label="Next audit"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6L12 10L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
