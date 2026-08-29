export interface AuditCard {
  name: string;
  logo: string;
  url?: string;
  sector: string;
  sectorColor: "bluebell" | "butter" | "moss" | "purple";
  situation: string;
  opportunities: string[];
  cardLine: string;
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
    cardLine: "Found \u00A317,000 a year. Tools cost under \u00A3300.",
    growthFound: "\u00A317,000 a year",
    toolCost: "under \u00A3300 a year",
    timeToLive: "full roadmap live in 4\u20136 weeks"
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
    cardLine: "Found \u00A3130,000. One job pays for the lot.",
    growthFound: "\u00A3130,000",
    toolCost: "\u00A3116 a year",
    timeToLive: "full roadmap live in 4\u20136 weeks"
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
    cardLine: "Found \u00A3230,000, and delayed a hire by over a year.",
    growthFound: "\u00A3230,000",
    toolCost: "~\u00A340 a month",
    timeToLive: "full roadmap live in 4\u20136 weeks"
  }
];
