export interface BuildCard {
  name: string;
  logo: string;
  url: string;
  sector: string;
  sectorColor: "bluebell" | "butter" | "moss" | "purple";
  brief: string;
  built: string[];
  launch: string[];
}

export const builds: BuildCard[] = [
  {
    name: "SIFT",
    logo: "/logos/sift.svg",
    url: "https://sifthomes.com",
    sector: "Property",
    sectorColor: "bluebell",
    brief: "A smarter way for buyers to find the right property.",
    built: [
      "Web & mobile app",
      "AI lead generation",
      "AI PR agent",
      "AI content & marketing workflow"
    ],
    launch: [
      "Live in beta",
      "First users onboard"
    ]
  },
  {
    name: "RenoCheck",
    logo: "/logos/renocheck.png",
    url: "https://renocheck.co.uk",
    sector: "Property",
    sectorColor: "bluebell",
    brief: "Renovation costs, without the weeks of waiting.",
    built: [
      "Web design & build",
      "AI cost-estimating engine"
    ],
    launch: [
      "Live today",
      "~10 new leads a day"
    ]
  },
  {
    name: "Auspicious by Design",
    logo: "/logos/auspicious.png",
    url: "https://antiquetibetanfurniture.com",
    sector: "Consumer",
    sectorColor: "purple",
    brief: "A digital presence for a traditional business.",
    built: [
      "Website build & SEO",
      "Refreshed commercial offer"
    ],
    launch: [
      "First-ever web presence",
      "Collection online",
      "Customer enquiries from search"
    ]
  }
];
