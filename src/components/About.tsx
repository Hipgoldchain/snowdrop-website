import Image from "next/image";

interface Credential {
  name: string;
  logo: string;
  label: string;
  desc: string;
  link?: string;
  linkLabel?: string;
}

const credentials: Credential[] = [
  { name: "RenoCheck", logo: "/logos/renocheck.png", label: "website & mobile app", desc: "Built complete website and mobile app platform.", link: "https://renocheck.co.uk", linkLabel: "Visit site →" },
  { name: "Sift", logo: "/logos/sift.svg", label: "website build", desc: "Built and launched complete website.", link: "https://sift.co.uk", linkLabel: "Visit site →" },
  { name: "Auspicious by Design", logo: "/logos/auspicious.png", label: "e-commerce platform", desc: "Built and launched complete e-commerce platform.", link: "https://antiquetibetanfurniture.com", linkLabel: "Visit site →" },
  { name: "Tesco", logo: "/logos/tesco.svg", label: "finance transformation", desc: "Led Tesco\u2019s largest-ever finance transformation (corporate role)." },
  { name: "Haleon", logo: "/logos/haleon.svg", label: "enterprise AI", desc: "Led enterprise AI strategy at Haleon (corporate role)." },
  { name: "GSK", logo: "/logos/gsk.svg", label: "\u00A335B+ separation", desc: "Separation lead across the GSK demerger (corporate role)." },
  { name: "EasyJet", logo: "/logos/easyjet.svg", label: "commercial", desc: "Worked on EasyJet\u2019s commercial transformation (corporate role)." },
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
              We&apos;ve worked in some of the UK&apos;s{" "}
              <br className="max-[968px]:hidden" />
              biggest companies — on their biggest projects.
            </h3>
            <p className="text-[17px] text-ink/70 leading-[1.6] max-w-[680px] mx-auto">
              That same thinking now works for growing businesses: clear plans,
              honest numbers, real wins in weeks.
            </p>
          </div>

          {/* Credentials grid */}
          <div className="grid grid-cols-4 gap-5 mb-14 credentials-grid max-[968px]:grid-cols-2 max-[520px]:grid-cols-1">
            {credentials.map((cred) => (
              <div key={cred.name} className="bg-snow border border-ink/10 rounded-xl py-7 px-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:border-verdant hover:shadow-[0_12px_28px_rgba(26,31,37,0.08)]">
                <div className="mb-4 h-[32px] flex items-center">
                  <Image
                    src={cred.logo}
                    alt={`${cred.name} logo`}
                    width={90}
                    height={32}
                    className="opacity-40"
                  />
                </div>
                <div className="font-sans font-bold text-2xl text-ink tracking-[-0.02em] mb-[6px]">
                  {cred.name}
                </div>
                <div className="font-mono text-[11px] lowercase tracking-[0.06em] text-verdant-deep font-semibold pb-[14px] mb-[14px] border-b border-ink/8">
                  {cred.label}
                </div>
                <div className="text-[13px] text-ink/75 leading-[1.5] mb-3">
                  {cred.desc}
                </div>
                {cred.link && (
                  <a
                    href={cred.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[13px] font-semibold text-verdant-deep hover:text-verdant transition-colors"
                  >
                    {cred.linkLabel}
                  </a>
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
