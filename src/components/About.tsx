
export default function About() {
  return (
    <section id="about" className="bg-snow relative py-[120px] px-8 max-[968px]:py-20 max-[968px]:px-6">
      <div className="max-w-[1040px] mx-auto">
        {/* Top section */}
        <div className="mb-24">
          <span className="font-mono text-[11px] font-medium lowercase tracking-[0.1em] text-verdant-deep mb-6 block">
            about
          </span>
          <h2
            className="font-sans font-bold leading-[1.05] tracking-[-0.025em] max-w-[900px] mb-12"
            style={{ fontSize: "clamp(32px, 4.8vw, 60px)" }}
          >
            Built for small businesses.{" "}
            <br className="max-[968px]:hidden" />
            Not the <span className="text-verdant-deep">FTSE 100.</span>
          </h2>

          <div className="grid grid-cols-2 gap-14 about-cols max-[968px]:grid-cols-1 max-[968px]:gap-9">
            <div>
              <h4 className="text-lg font-semibold mb-3">What we do</h4>
              <p className="text-ink/85 text-base leading-[1.65]">
                We help UK businesses use AI to grow — fast. One discovery call,
                your roadmap, and your first agent built by us. Optional support
                to build the rest.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">
                What we&apos;re not
              </h4>
              <p className="text-ink/85 text-base leading-[1.65]">
                We&apos;re not consultants in disguise. No PowerPoint decks.
                No three-month planning. No tool you&apos;ll never use.
                We start with how you work, pick the right tool, and stay
                honest about what AI can and can&apos;t do.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
