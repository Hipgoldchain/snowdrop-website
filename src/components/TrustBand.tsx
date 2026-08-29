"use client";

import Image from "next/image";

const logos = [
  { name: "RenoCheck", src: "/logos/renocheck.png", width: 160 },
  { name: "Sift", src: "/logos/sift.svg", width: 100 },
  { name: "Auspicious by Design", src: "/logos/auspicious.png", width: 260 },
  { name: "Breamore House", src: "/logos/breamore.png", width: 190 },
  { name: "Bangers", src: "/logos/bangers.png", width: 160 },
  { name: "Seven Split", src: "/logos/svensplit.png", width: 145 },
];

const stats = [
  { value: "6", label: "businesses helped" },
  { value: "4", label: "sectors" },
  { value: "48hr", label: "to your roadmap" },
  { value: "1 week", label: "your first fix live" },
  { value: "1", label: "founder, no juniors" },
];

export default function TrustBand() {
  return (
    <section className="py-14 px-8 bg-ink text-snow relative overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #3FE174 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="max-w-[1280px] mx-auto">
        {/* Logo Carousel */}
        <div className="relative z-1 mb-12">
          <div className="text-center mb-8">
            <div className="font-mono text-[13px] font-bold lowercase tracking-[0.14em] text-verdant mb-2">
              Trusted by real UK businesses
            </div>
            <div className="text-[15px] text-snow/60">
              all over the country
            </div>
          </div>

          {/* Infinite scroll container */}
          <div className="relative overflow-hidden">
            <div className="flex gap-12 animate-scroll">
              {/* First set */}
              {logos.map((logo, i) => (
                <div
                  key={`logo-1-${i}`}
                  className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 shrink-0"
                  style={{ width: `${logo.width}px` }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={48}
                    className="h-12 w-auto object-contain"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
              ))}
              {/* Second set for seamless loop */}
              {logos.map((logo, i) => (
                <div
                  key={`logo-2-${i}`}
                  className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 shrink-0"
                  style={{ width: `${logo.width}px` }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={48}
                    className="h-12 w-auto object-contain"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-1 text-center max-w-[980px] mx-auto">
          <div className="flex items-center justify-center gap-8 flex-wrap max-[768px]:gap-7">
            {stats.map((stat, i) => (
              <div key={i} className="contents">
                <div className="text-center px-3">
                  <div
                    className="font-mono font-bold text-verdant tracking-[-0.02em] mb-[6px] leading-none"
                    style={{ fontSize: "clamp(32px, 4vw, 44px)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[13px] text-snow/70 leading-[1.4] max-w-[200px] mx-auto">
                    {stat.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-12 bg-snow/15 max-[768px]:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
