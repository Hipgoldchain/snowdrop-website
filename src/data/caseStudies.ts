export interface CaseStat {
  stat: string;
  label: string;
}

export interface CaseStudy {
  sector: string;
  sectorColor: "bluebell" | "butter" | "moss" | "purple";
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
    title: "Property management company",
    context: "Historic estate business. Founder approaching retirement.",
    stats: [
      { stat: "~£17k", label: "a year unlocked" },
      { stat: "~50×", label: "return in year one" },
      { stat: "<£300", label: "a year on tools" },
    ],
    body: "We sorted their costs automatically, built a maintenance log, and set up a simple way to talk to tenants. The real win wasn\u2019t the money saved. It was getting what\u2019s in the founder\u2019s head into a system \u2014 before they retire.",
    tags: ["Costs", "Maintenance", "Tenant comms", "Knowledge capture"],
  },
  {
    sector: "Property",
    sectorColor: "bluebell",
    title: "Online property portal",
    context:
      "A property-search app that scores and ranks listings for buyers.",
    stats: [
      { stat: "Full app", label: "accounts & inboxes" },
      { stat: "Custom", label: "CRM, built bespoke" },
      { stat: "4 systems", label: "working together" },
    ],
    body: "We built the whole operating system behind the portal: a lead funnel that finds and scores opportunities, a custom CRM, a PR agent, and a content pipeline. Users sign up, get their own account and inbox, and the admin runs itself.",
    tags: ["Lead funnel", "Custom CRM", "PR agent", "Content pipeline"],
  },
  {
    sector: "Property",
    sectorColor: "bluebell",
    title: "AI renovation cost platform",
    context:
      "Homeowners wait weeks for builder quotes. Renovation costs are a black box.",
    stats: [
      { stat: "Live", label: "built and launched" },
      { stat: "Minutes", label: "to a realistic cost estimate" },
      { stat: "AI", label: "powered pricing engine" },
    ],
    body: "We built an AI tool that estimates renovation costs in minutes \u2014 describe the job, get a realistic price range. Designed, built, and shipped end to end, and live today.",
    tags: ["AI estimator", "Cost modelling", "Rapid build", "Live product"],
  },
  {
    sector: "Travel & Leisure",
    sectorColor: "butter",
    title: "Multi-site hospitality operator",
    context:
      "London-based breakfast group. Too much demand, not enough capacity.",
    stats: [
      { stat: "£140k\u2013£337k", label: "extra revenue possible" },
      { stat: "12\u201318mo", label: "head office hire delayed" },
      { stat: "~£40/mo", label: "total tool cost" },
    ],
    body: "Catering and private-hire enquiries were getting missed. The follow-up was patchy. We built a system that responds straight away, follows up at day 2, 5, and 10, and tracks every lead in one place.",
    tags: ["CRM", "Auto follow-up", "Catering pipeline", "Revenue engine"],
  },
  {
    sector: "Construction",
    sectorColor: "moss",
    title: "Bristol-based builder",
    context: "Solo builder. Strong word-of-mouth, no online presence.",
    stats: [
      { stat: "£45k\u2013£225k", label: "extra revenue possible" },
      { stat: "£116/yr", label: "total tool cost" },
      { stat: "1 job", label: "pays it back 388 times" },
    ],
    body: "He had no website and no reviews online. We built a simple way for new customers to find him, see his work, and book a call \u2014 for less than a tank of fuel.",
    tags: ["Website", "Reviews", "Paid search", "Content"],
  },
  {
    sector: "Consumer",
    sectorColor: "purple",
    title: "International antique dealers",
    context:
      "Antiques dealer. Whole catalogue stuck inside a printed PDF.",
    stats: [
      { stat: "PDF \u2192 web", label: "full catalogue online" },
      { stat: "Days", label: "build time, not weeks" },
      { stat: "Searchable", label: "browse & enquire" },
    ],
    body: "They had a paper catalogue full of one-of-a-kind antiques. We turned the whole thing into a website you can browse \u2014 built in days, for a fraction of what an agency would charge.",
    tags: ["Rapid build", "PDF to web", "Catalogue", "AI-assisted"],
  },
];
