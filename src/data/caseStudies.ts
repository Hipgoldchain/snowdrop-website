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
  title: string;
  context: string;
  stats: CaseStat[];
  body: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    sector: "Property",
    sectorColor: "bluebell",
    name: "Breamore Estate",
    logo: "/logos/breamore.png",
    url: "https://breamorehouse.com/",
    title: "Property management",
    context: "Historic estate business. Founder approaching retirement.",
    stats: [
      { stat: "~£17k", label: "a year unlocked" },
      { stat: "~50×", label: "return in year one" },
      { stat: "<£300", label: "a year on tools" },
    ],
    body: "We mapped how to sort their costs automatically, log maintenance, and simplify tenant comms — then handed over the roadmap to make it happen. The real win wasn't the money saved. It was getting what's in the founder's head into a system — before they retire.",
    tags: ["AI cost tracking", "Maintenance logging", "Automated tenant communication", "Knowledge capture"],
  },
  {
    sector: "Property",
    sectorColor: "bluebell",
    name: "SIFT",
    logo: "/logos/sift.svg",
    url: "https://sifthomes.com",
    title: "Online property portal",
    context:
      "A property-search app that scores and ranks listings for buyers.",
    stats: [
      { stat: "Full app", label: "accounts & inboxes" },
      { stat: "Custom", label: "CRM, built bespoke" },
      { stat: "4 AI systems", label: "working together" },
    ],
    body: "We built the whole operating system behind the portal: a lead funnel that finds and scores opportunities, a custom CRM, a PR agent, and a content pipeline. Users sign up, get their own account and inbox, and the admin runs itself.",
    tags: ["AI lead generation", "Custom CRM", "AI PR agent", "AI content workflow"],
  },
  {
    sector: "Property",
    sectorColor: "bluebell",
    name: "RenoCheck",
    logo: "/logos/renocheck.png",
    url: "https://renocheck.co.uk",
    title: "AI renovation cost platform",
    context:
      "Homeowners wait weeks for builder quotes. Renovation costs are a black box.",
    stats: [
      { stat: "Live", label: "built and launched" },
      { stat: "Minutes", label: "to a realistic cost estimate" },
      { stat: "AI", label: "powered pricing engine" },
    ],
    body: "We built an AI tool that estimates renovation costs in minutes — describe the job, get a realistic price range. Designed, built, and shipped end to end, and live today.",
    tags: ["AI estimator", "Cost modelling", "Rapid build", "Live product"],
  },
  {
    sector: "Travel & Leisure",
    sectorColor: "butter",
    name: "Bangers",
    logo: "/logos/bangers.png",
    url: "https://bangerslondon.com",
    title: "Multi-site hospitality",
    context:
      "London-based breakfast group. Too much demand, not enough capacity.",
    stats: [
      { stat: "£140k–£337k", label: "extra revenue possible" },
      { stat: "12–18mo", label: "head office hire delayed" },
      { stat: "~£40/mo", label: "total tool cost" },
    ],
    body: "Catering and private-hire enquiries were getting missed. The follow-up was patchy. We designed a system that responds straight away, follows up at day 2, 5, and 10, and tracks every lead in one place — then handed over the roadmap to make it happen.",
    tags: ["CRM", "Automated follow-up", "Catering pipeline", "Revenue engine"],
  },
  {
    sector: "Construction",
    sectorColor: "moss",
    name: "Seven Split",
    logo: "/logos/svensplit.png",
    title: "Bristol-based builder",
    context: "Solo builder. Strong word-of-mouth, no online presence.",
    stats: [
      { stat: "£45k–£225k", label: "extra revenue possible" },
      { stat: "£116/yr", label: "total tool cost" },
      { stat: "1 job", label: "pays it back 388 times" },
    ],
    body: "He had no website and no reviews online. We mapped out how to help new customers find him, see his work, and book a call — then handed over the roadmap. The whole system costs less than a tank of fuel a year.",
    tags: ["Website", "Automated review prompts", "Automated Google Ads", "AI content creation"],
  },
  {
    sector: "Consumer",
    sectorColor: "purple",
    name: "Auspicious by Design",
    logo: "/logos/auspicious.png",
    url: "https://antiquetibetanfurniture.com",
    title: "International antique dealers",
    context:
      "Antiques dealer. Whole catalogue stuck inside a printed PDF.",
    stats: [
      { stat: "Full website", label: "built from PDF catalogue" },
      { stat: "Days", label: "build time, not weeks" },
      { stat: "Searchable", label: "online catalogue" },
    ],
    body: "They had a paper catalogue full of one-of-a-kind antiques. We turned the whole thing into a website you can browse — built in days, for a fraction of what an agency would charge.",
    tags: ["Rapid build", "Web design & development", "Catalogue", "AI-assisted"],
  },
];
