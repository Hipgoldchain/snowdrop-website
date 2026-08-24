export interface AuditCard {
  name: string;
  logo: string;
  url?: string;
  sector: string;
  sectorColor: "bluebell" | "butter" | "moss" | "purple";
  situation: string;
  opportunities: string[];
  impactChain?: string;
  impact?: Array<{ stat: string; label: string }>;
}

export const audits: AuditCard[] = [
  {
    name: "Breamore Estate",
    logo: "/logos/breamore.png",
    url: "https://breamorehouse.com/",
    sector: "Property",
    sectorColor: "bluebell",
    situation: "Historic estate business. Founder approaching retirement.",
    opportunities: [
      "AI property maintenance & cost tracking",
      "Automated tenant communication",
      "End-of-month finance reconciliations"
    ],
    impactChain: "<£300/yr on tools → ~£17k/yr unlocked → ~50× return"
  },
  {
    name: "Bangers",
    logo: "/logos/bangers.png",
    url: "https://bangerslondon.com",
    sector: "Travel & Leisure",
    sectorColor: "butter",
    situation: "London-based breakfast group. Too much demand, not enough capacity.",
    opportunities: [
      "Automated events booking & follow-up",
      "Catering offer & online ordering",
      "Marketing & content pipeline"
    ],
    impact: [
      { stat: "£140k–£337k", label: "extra revenue possible per year" }
    ]
  },
  {
    name: "Seven Split",
    logo: "/logos/svensplit.png",
    sector: "Construction",
    sectorColor: "moss",
    situation: "Solo builder. Strong word-of-mouth, no online presence.",
    opportunities: [
      "AI quote generation",
      "Automatic enquiry follow-up",
      "New website build"
    ],
    impact: [
      { stat: "£45k–£225k", label: "extra revenue possible per year" },
      { stat: "388×", label: "one job pays back the tools" }
    ]
  }
];
