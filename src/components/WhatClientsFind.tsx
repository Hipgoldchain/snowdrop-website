const findings = [
  {
    pattern: "Quotes written at nine at night",
    line: "From memory and photos on your phone, days after they asked, when they\u2019ve already had three others.",
  },
  {
    pattern: "Enquiries that quietly go nowhere",
    line: "Demand isn\u2019t your problem. Following up on it is.",
  },
  {
    pattern: "Nothing for anyone to find you by",
    line: "No website worth the name, no reviews, and good work nobody can see.",
  },
  {
    pattern: "Finance admin done by hand",
    line: "Costs allocated one invoice at a time, every month, by someone who should be doing something else.",
  },
  {
    pattern: "The AI you tried that fell over",
    line: "You chucked it into ChatGPT and it made a mess. The data was the problem, not the AI.",
  },
  {
    pattern: "A business that lives in one person\u2019s head",
    line: "And one day that person retires.",
  },
];

export default function WhatClientsFind() {
  return (
    <section id="what-clients-find" className="bg-mist py-[120px] px-8 max-[968px]:py-20 max-[968px]:px-6">
      <div className="max-w-[1280px] mx-auto">
        <span className="font-mono text-[11px] font-medium lowercase tracking-[0.1em] text-verdant-deep mb-6 block">
          what our clients find
        </span>
        <h2
          className="font-sans font-bold leading-[1.02] tracking-[-0.03em] mb-5"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          Most businesses are losing money to the same six things.
        </h2>
        <p className="text-lg text-ink/70 max-w-[720px] mb-16">
          Three audits across three sectors. The problems rhyme.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-[960px]">
          {findings.map((f, i) => (
            <div key={i}>
              <h3 className="font-sans font-semibold text-[18px] leading-[1.3] text-ink mb-2">
                {f.pattern}
              </h3>
              <p className="text-[16px] leading-[1.55] text-ink/65">
                {f.line}
              </p>
            </div>
          ))}
        </div>

        <p className="text-lg text-ink/70 max-w-[720px] mt-16">
          Your roadmap names which one is costing you most. Then we build the fix for it.
        </p>
      </div>
    </section>
  );
}
