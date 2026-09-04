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
  pricing?: {
    main: string;
    subtext?: string;
    guarantee?: string;
    variant?: "free" | "discounted" | "custom";
  };
}

export default function JourneyCard({
  svgContent,
  number,
  title,
  description,
  ctaLabel,
  ctaHref,
  ctaStyle,
  pricing,
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

  // Parse markdown bold syntax (**text**) to HTML with brand green color
  const parseDescription = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-verdant font-bold">$1</strong>');
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="bg-[#20262F] rounded-[22px] p-[10px_10px_24px] overflow-hidden flex flex-col"
      style={{ perspective: "900px" }}
    >
      <div
        ref={artRef}
        className="transition-transform duration-[180ms] ease-out will-change-transform"
      >
        <div dangerouslySetInnerHTML={{ __html: svgContent }} />
      </div>

      <div className="px-5 flex flex-col flex-1">
        <div className="font-mono text-[11px] font-bold tracking-[0.16em] text-[#7A848E] uppercase">
          {number}
        </div>
        <h3 className="text-[19px] font-bold tracking-[-0.01em] mt-[6px] mb-2 text-snow">
          {title}
        </h3>
        <p
          className="text-sm leading-[1.55] text-[#A8B2BC] mb-[18px]"
          dangerouslySetInnerHTML={{ __html: parseDescription(description) }}
        />

        <div className="mt-auto">
          {pricing && (
            <div className={`
              rounded-xl py-3 px-4 mb-4
              ${pricing.variant === "free" ? "bg-verdant/10 border border-verdant/25" : ""}
              ${pricing.variant === "discounted" ? "bg-[#2A2520] border border-[#4A3D2A]" : ""}
              ${pricing.variant === "custom" ? "bg-[#1A1F25] border border-[#2A313B]" : ""}
            `}>
              <div className={`
                font-bold text-base
                ${pricing.variant === "free" ? "text-verdant" : ""}
                ${pricing.variant === "discounted" ? "text-butter" : ""}
                ${pricing.variant === "custom" ? "text-snow" : ""}
              `}>
                {pricing.main}
              </div>
              {pricing.subtext && (
                <div className={`
                  text-xs font-medium mt-0.5
                  ${pricing.variant === "free" ? "text-verdant/70" : ""}
                  ${pricing.variant === "discounted" ? "text-butter/70" : ""}
                  ${pricing.variant === "custom" ? "text-[#7A848E]" : ""}
                `}>
                  {pricing.subtext}
                </div>
              )}
              {pricing.guarantee && (
                <div className="text-[11px] font-medium mt-1.5 text-verdant/80">
                  {pricing.guarantee}
                </div>
              )}
            </div>
          )}

          <div className="min-h-[48px] flex items-center">
            {ctaStyle === "solid" && ctaLabel && (
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-verdant text-ink py-[13px] px-6 rounded-[13px] font-bold text-[14px] no-underline transition-transform duration-[120ms] ease-out hover:-translate-y-px shadow-[0_2px_0_rgba(0,0,0,0.25)] hover:shadow-[0_4px_10px_rgba(43,184,92,0.35)]"
              >
                {ctaLabel}
              </a>
            )}

            {ctaStyle === "outline" && ctaLabel && (
              <a
                href={ctaHref}
                target={ctaHref.startsWith("mailto:") ? undefined : "_blank"}
                rel={ctaHref.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="block w-full text-center border-2 border-verdant text-snow py-[11px] px-6 rounded-[13px] font-bold text-[14px] no-underline bg-transparent transition-all duration-[120ms] ease-out hover:-translate-y-px hover:bg-verdant/12"
              >
                {ctaLabel}
              </a>
            )}

            {ctaStyle === "text" && ctaLabel && (
              <a
                href={ctaHref}
                className="inline-block font-mono text-[12.5px] text-[#7A848E] py-[6px] no-underline border-b-2 border-verdant/40 transition-colors duration-[120ms] hover:text-snow hover:border-verdant"
              >
                {ctaLabel}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
