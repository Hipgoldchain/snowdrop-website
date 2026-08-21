import Image from "next/image";

interface Credential {
  name: string;
  logo: string;
  sector: string;
  engagementType: "AI AUDIT" | "DESIGN & BUILD";
  actions: string[];
  impact: string[];
  link?: string;
  linkLabel?: string;
}

const credentials: Credential[] = [
  {
    name: "Breamore Estate",
    logo: "/logos/breamore.png",
    sector: "Travel & Leisure",
    engagementType: "AI AUDIT",
    actions: [
      "Designed automated rent collection & payment chasing",
      "Specced AI cost allocation across the portfolio",
      "Mapped a simple CRM + maintenance workflow"
    ],
    impact: [
      "~£17k/yr value found",
      "~50× return",
      "<£300/yr tools"
    ],
    link: "https://breamorehouse.com",
    linkLabel: "Visit site →"
  },
  {
    name: "SIFT",
    logo: "/logos/sift.svg",
    sector: "Retail",
    engagementType: "DESIGN & BUILD",
    actions: [
      "Full web app — designed & built",
      "Custom CRM",
      "Automated lead funnel & content pipeline"
    ],
    impact: [
      "Live platform",
      "4 systems connected",
      "Built end to end"
    ],
    link: "https://sift.co.uk",
    linkLabel: "Visit site →"
  },
  {
    name: "RenoCheck",
    logo: "/logos/renocheck.png",
    sector: "Retail",
    engagementType: "DESIGN & BUILD",
    actions: [
      "AI cost-estimate engine",
      "Web design & development",
      "Launched end to end"
    ],
    impact: [
      "Live today",
      "Quotes in minutes"
    ],
    link: "https://renocheck.co.uk",
    linkLabel: "Visit site →"
  },
  {
    name: "Bangers",
    logo: "/logos/bangers.png",
    sector: "Retail",
    engagementType: "AI AUDIT",
    actions: [
      "Designed a private-hire & catering enquiry engine",
      "Specced automated review prompts",
      "Mapped a simple CRM for repeat bookings"
    ],
    impact: [
      "£140k–£337k growth found",
      "hire delayed 12–18 months",
      "~£40/mo tool stack"
    ]
  },
  {
    name: "Seven Split",
    logo: "/logos/svensplit.png",
    sector: "Retail",
    engagementType: "AI AUDIT",
    actions: [
      "Designed AI quote generation",
      "Specced automatic enquiry follow-up",
      "One simple workflow, no new hires"
    ],
    impact: [
      "£45k–£225k growth found",
      "£116/yr tools",
      "one job pays back 388×"
    ]
  },
  {
    name: "Auspicious by Design",
    logo: "/logos/auspicious.png",
    sector: "Retail",
    engagementType: "DESIGN & BUILD",
    actions: [
      "Web design & development",
      "Searchable online catalogue from paper records"
    ],
    impact: [
      "Live in days",
      "Full stock searchable",
      "First web presence"
    ],
    link: "https://antiquetibetanfurniture.com",
    linkLabel: "Visit site →"
  },
];

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
                We help ambitious UK businesses adopt AI to grow their business — fast. A
                focused discovery call, your Opportunity Roadmap, and your first AI
                agent built by us. Optional ongoing support to ship the rest.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">
                What we&apos;re not
              </h4>
              <p className="text-ink/85 text-base leading-[1.65]">
                We&apos;re not enterprise consultants in disguise. No PowerPoint
                factory. No three-month discovery phase. No tool you&apos;ll
                never log into again. We start with how you work, pick the
                right tool, and stay honest about what AI can and can&apos;t do
                for your business.
              </p>
            </div>
          </div>
        </div>

        {/* Founder / Credentials block */}
        <div className="border-t border-ink/10 pt-20">
          <div className="text-center max-w-[820px] mx-auto mb-16">
            <span className="font-mono text-[11px] lowercase tracking-[0.12em] text-verdant-deep mb-5 block">
              why trust us
            </span>
            <h3
              className="font-sans font-bold leading-[1.05] tracking-[-0.025em] mb-6 text-ink"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Real businesses.{" "}
              <br className="max-[968px]:hidden" />
              Real results.
            </h3>
            <p className="text-[17px] text-ink/70 leading-[1.6] max-w-[680px] mx-auto">
              From complete builds to AI audits — we help UK businesses
              find growth opportunities and ship solutions that work.
            </p>
          </div>

          {/* Credentials grid */}
          <div className="grid grid-cols-4 gap-5 mb-14 credentials-grid max-[968px]:grid-cols-2 max-[520px]:grid-cols-1">
            {credentials.map((cred) => (
              <div key={cred.name} className="bg-snow border border-ink/10 rounded-xl py-7 px-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:border-verdant hover:shadow-[0_12px_28px_rgba(26,31,37,0.08)] flex flex-col">
                {/* Logo + Client name */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="shrink-0">
                    <Image
                      src={cred.logo}
                      alt={`${cred.name} logo`}
                      width={110}
                      height={32}
                      className="h-8 w-auto max-w-[110px] object-contain grayscale opacity-70"
                      style={{ filter: 'grayscale(100%)' }}
                    />
                  </div>
                  <div className="font-sans font-bold text-2xl text-ink tracking-[-0.02em] leading-[1.1]">
                    {cred.link ? (
                      <a
                        href={cred.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-verdant-deep transition-colors"
                      >
                        {cred.name}
                      </a>
                    ) : (
                      cred.name
                    )}
                  </div>
                </div>

                {/* Sector pill + Engagement badge */}
                <div className="flex items-center gap-2 mb-5 flex-wrap">
                  <span className="font-mono text-[11px] lowercase tracking-[0.04em] bg-mist border border-ink/6 text-ink/75 py-[5px] px-3 rounded-full">
                    {cred.sector}
                  </span>
                  <span className={`font-mono text-[10px] uppercase tracking-[0.08em] font-semibold ${
                    cred.engagementType === "AI AUDIT" ? "text-bluebell" : "text-verdant-deep"
                  }`}>
                    {cred.engagementType}
                  </span>
                </div>

                {/* Actions */}
                <div className="mb-5">
                  <div className="font-mono text-[11px] lowercase tracking-[0.06em] text-ink/60 mb-2">
                    actions
                  </div>
                  <div className="space-y-1">
                    {cred.actions.map((action, idx) => (
                      <div key={idx} className="text-[13px] text-ink/85 leading-[1.5] flex items-start gap-2">
                        <span className="text-verdant-deep text-[10px] mt-[3px]">•</span>
                        <span>{action}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="mt-auto">
                  <div className="font-mono text-[11px] lowercase tracking-[0.06em] text-ink/60 mb-2">
                    impact
                  </div>
                  <div className="space-y-1">
                    {cred.impact.map((item, idx) => (
                      <div key={idx} className="text-[13px] text-ink/85 leading-[1.5] flex items-start gap-2">
                        <span className="text-verdant-deep text-[10px] mt-[3px]">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Link */}
                {cred.link && cred.linkLabel && (
                  <div className="mt-4 pt-4 border-t border-ink/8">
                    <a
                      href={cred.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[13px] font-semibold text-verdant-deep hover:text-verdant transition-colors"
                    >
                      {cred.linkLabel}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Credentials footer */}
          <div className="text-center pt-10 border-t border-ink/8">
            <div className="flex gap-[10px] justify-center flex-wrap mb-6">
              {[
                "Life Sciences",
                "Retail",
                "FMCG",
                "Travel & Leisure",
                "Public Sector",
              ].map((sector) => (
                <span
                  key={sector}
                  className="font-mono text-[11px] lowercase tracking-[0.04em] bg-mist border border-ink/6 text-ink/75 py-[5px] px-3 rounded-full"
                >
                  {sector}
                </span>
              ))}
            </div>
            <p className="text-sm text-ink/65 max-w-[620px] mx-auto leading-[1.5]">
              8+ years inside FTSE 100 and FTSE 20 businesses, working on
              enterprise AI and transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
