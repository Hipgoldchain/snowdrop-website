"use client";

import { useRef } from "react";

interface JourneyCardProps {
  svgContent: string;
  number: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  ctaStyle: "solid" | "outline" | "text";
}

export default function JourneyCard({
  svgContent,
  number,
  title,
  description,
  ctaLabel,
  ctaHref,
  ctaStyle,
}: JourneyCardProps) {
  const artRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!cardRef.current || !artRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const r = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;

    artRef.current.style.transform = `rotateY(${px * 7}deg) rotateX(${-py * 6}deg) translateZ(6px)`;
  };

  const handlePointerLeave = () => {
    if (!artRef.current) return;
    artRef.current.style.transform = "";
  };

  // Parse markdown bold syntax (**text**) to HTML
  const parseDescription = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="bg-mist rounded-[22px] p-[10px_10px_24px] overflow-hidden flex flex-col"
      style={{ perspective: "900px" }}
    >
      <div
        ref={artRef}
        className="transition-transform duration-[180ms] ease-out will-change-transform"
      >
        <div dangerouslySetInnerHTML={{ __html: svgContent }} />
      </div>

      <div className="px-5 flex flex-col flex-1">
        <div className="font-mono text-[11px] font-bold tracking-[0.16em] text-[#8C9A92] uppercase">
          {number}
        </div>
        <h3 className="text-[19px] font-bold tracking-[-0.01em] mt-[6px] mb-2">
          {title}
        </h3>
        <p
          className="text-sm leading-[1.55] text-ink/72 mb-[18px]"
          dangerouslySetInnerHTML={{ __html: parseDescription(description) }}
        />

        <div className="mt-auto">
          {ctaStyle === "solid" && (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-verdant text-ink py-[13px] px-[22px] rounded-[13px] font-bold text-[14.5px] no-underline transition-transform duration-[120ms] ease-out hover:-translate-y-px shadow-[0_2px_0_rgba(26,31,37,0.18)] hover:shadow-[0_4px_10px_rgba(43,184,92,0.35)]"
            >
              {ctaLabel}
            </a>
          )}

          {ctaStyle === "outline" && (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-verdant-deep text-ink py-[11px] px-5 rounded-[13px] font-bold text-sm no-underline bg-transparent transition-all duration-[120ms] ease-out hover:-translate-y-px hover:bg-verdant/12"
            >
              {ctaLabel}
            </a>
          )}

          {ctaStyle === "text" && (
            <a
              href={ctaHref}
              className="inline-block font-mono text-[12.5px] text-[#4A555E] py-[6px] no-underline border-b-2 border-verdant-deep/40 transition-colors duration-[120ms] hover:text-ink hover:border-verdant-deep"
            >
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
