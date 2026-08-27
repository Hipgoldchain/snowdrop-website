export interface AuditCard {
  name: string;
  logo: string;
  url?: string;
  sector: string;
  sectorColor: "bluebell" | "butter" | "moss" | "purple";
  situation: string;
  opportunities: string[];
  growthFound: string;
  toolCost: string;
  timeToLive: string;
  footnote?: string;
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
    growthFound: "~£17k a year",
    toolCost: "<£300 a year",
    timeToLive: "full roadmap live in 4–6 weeks",
    footnote: "that\u2019s up to ~50\u00D7 return on tool investment"
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
      "Marketing & content"
    ],
    growthFound: "£140k–£337k a year",
    toolCost: "~£40 a month",
    timeToLive: "full roadmap live in 4–6 weeks"
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
    growthFound: "£45k–£225k a year",
    toolCost: "£116 a year",
    timeToLive: "full roadmap live in 4–6 weeks"
  }
];
