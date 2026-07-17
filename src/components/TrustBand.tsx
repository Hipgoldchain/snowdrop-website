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
        <div className="relative z-1 text-center max-w-[980px] mx-auto">
          <div className="font-mono text-[11px] font-medium lowercase tracking-[0.12em] text-verdant/85 mb-7">
            businesses already working with Snowdrop —
          </div>

          <div className="flex items-center justify-center gap-8 flex-wrap max-[768px]:gap-7">
            {/* Stat 1 */}
            <div className="text-center px-3">
              <div
                className="font-mono font-bold text-verdant tracking-[-0.02em] mb-[6px] leading-none"
                style={{ fontSize: "clamp(32px, 4vw, 44px)" }}
              >
                6
              </div>
              <div className="text-[13px] text-snow/70 leading-[1.4] max-w-[200px] mx-auto">
                businesses helped
              </div>
            </div>

            <div className="w-px h-12 bg-snow/15 max-[768px]:hidden" />

            {/* Stat 2 */}
            <div className="text-center px-3">
              <div
                className="font-mono font-bold text-verdant tracking-[-0.02em] mb-[6px] leading-none"
                style={{ fontSize: "clamp(32px, 4vw, 44px)" }}
              >
                4
              </div>
              <div className="text-[13px] text-snow/70 leading-[1.4] max-w-[200px] mx-auto">
                sectors
              </div>
            </div>

            <div className="w-px h-12 bg-snow/15 max-[768px]:hidden" />

            {/* Stat 3 */}
            <div className="text-center px-3">
              <div
                className="font-mono font-bold text-verdant tracking-[-0.02em] mb-[6px] leading-none"
                style={{ fontSize: "clamp(32px, 4vw, 44px)" }}
              >
                £400k+
              </div>
              <div className="text-[13px] text-snow/70 leading-[1.4] max-w-[200px] mx-auto">
                growth opportunities found
              </div>
            </div>

            <div className="w-px h-12 bg-snow/15 max-[768px]:hidden" />

            {/* Stat 4 */}
            <div className="text-center px-3">
              <div
                className="font-mono font-bold text-verdant tracking-[-0.02em] mb-[6px] leading-none"
                style={{ fontSize: "clamp(32px, 4vw, 44px)" }}
              >
                <span className="text-[0.42em] font-medium tracking-[0.04em] text-verdant/75 align-middle mr-[2px]">
                  up to
                </span>{" "}
                50×
              </div>
              <div className="text-[13px] text-snow/70 leading-[1.4] max-w-[200px] mx-auto">
                return in year one
              </div>
            </div>

            <div className="w-px h-12 bg-snow/15 max-[768px]:hidden" />

            {/* Stat 5 */}
            <div className="text-center px-3">
              <div
                className="font-mono font-bold text-verdant tracking-[-0.02em] mb-[6px] leading-none"
                style={{ fontSize: "clamp(32px, 4vw, 44px)" }}
              >
                48hr
              </div>
              <div className="text-[13px] text-snow/70 leading-[1.4] max-w-[200px] mx-auto">
                to your custom roadmap
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
