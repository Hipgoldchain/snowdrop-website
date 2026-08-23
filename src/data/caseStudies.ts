export interface CaseStat {
  stat: string;
  label: string;
}

export interface CaseStudy {
  sector: string;
  sectorColor: "bluebell" | "butter" | "moss" | "purple";
  name: string;
  logo: string;
  url?: string;
  type: "build" | "audit";
  actions: string[];
  stats: CaseStat[];
  impactChain?: string; // For Breamore's connected chain
}

export const caseStudies: CaseStudy[] = [
  {
    sector: "Property",
    sectorColor: "bluebell",
    name: "Breamore Estate",
    logo: "/logos/breamore.png",
    url: "https://breamorehouse.com/",
    type: "audit",
    actions: [
      "AI property maintenance & cost tracking",
      "Automated tenant communication",
      "End-of-month finance reconciliations"
    ],
    stats: [],
    impactChain: "<£300/yr on tools → ~£17k/yr unlocked → ~50× return on tool investment",
  },
  {
    sector: "Property",
    sectorColor: "bluebell",
    name: "SIFT",
    logo: "/logos/sift.svg",
    url: "https://sifthomes.com",
    type: "build",
    actions: [
      "Web & mobile app",
      "AI lead generation",
      "AI PR agent",
      "AI content & marketing workflow"
    ],
    stats: [
      { stat: "Full app", label: "accounts & inboxes" },
      { stat: "Custom", label: "CRM, built bespoke" },
      { stat: "4 AI systems", label: "working together" },
    ],
  },
  {
    sector: "Property",
    sectorColor: "bluebell",
    name: "RenoCheck",
    logo: "/logos/renocheck.png",
    url: "https://renocheck.co.uk",
    type: "build",
    actions: [
      "Web design & build",
      "AI cost-estimating engine"
    ],
    stats: [
      { stat: "Live", label: "built and launched" },
      { stat: "Minutes", label: "to a realistic cost estimate" },
      { stat: "AI", label: "powered pricing engine" },
    ],
  },
  {
    sector: "Travel & Leisure",
    sectorColor: "butter",
    name: "Bangers",
    logo: "/logos/bangers.png",
    url: "https://bangerslondon.com",
    type: "audit",
    actions: [
      "Auto booking & follow-up",
      "Online catering orders",
      "Marketing & content"
    ],
    stats: [
      { stat: "£140k–£337k", label: "extra revenue possible" },
      { stat: "12–18mo", label: "head office hire delayed" },
      { stat: "~£40/mo", label: "total tool cost" },
    ],
  },
  {
    sector: "Construction",
    sectorColor: "moss",
    name: "Seven Split",
    logo: "/logos/svensplit.png",
    type: "build",
    actions: [
      "Web design & build"
    ],
    stats: [
      { stat: "Live", label: "built and launched" },
      { stat: "First web presence", label: "now searchable online" },
      { stat: "Quote-ready", label: "contact form live" },
    ],
  },
  {
    sector: "Consumer",
    sectorColor: "purple",
    name: "Auspicious by Design",
    logo: "/logos/auspicious.png",
    url: "https://antiquetibetanfurniture.com",
    type: "build",
    actions: [
      "Website build & SEO"
    ],
    stats: [
      { stat: "Sales doubled", label: "after launch" },
      { stat: "Found online", label: "for the first time" },
      { stat: "Enquiries", label: "with no marketing spend" },
    ],
  },
];
