export default function BrandMoment() {
  return (
    <section className="bg-ink text-snow py-[140px] px-8 relative overflow-hidden text-center max-[600px]:py-24 max-[600px]:px-6">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #3FE174 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Bottom gradient */}
      <div
        className="absolute left-0 right-0 bottom-0 h-1/2 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(43, 184, 92, 0.06) 100%)",
        }}
      />

      <div className="relative z-1 max-w-[1100px] mx-auto">
        <div className="inline-block leading-[0.92]">
          <div
            className="font-sans font-bold text-snow tracking-[-0.04em] after:content-['.'] after:text-verdant"
            style={{ fontSize: "clamp(72px, 14vw, 200px)" }}
          >
            Snowdrop
          </div>
        </div>
        <p
          className="font-sans font-normal text-snow/65 mt-12 tracking-[0.02em]"
          style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}
        >
          Growth systems for small businesses that work in weeks, not months.
        </p>
      </div>
    </section>
  );
}
