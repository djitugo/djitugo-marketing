export const SITE = {
  name: "Djitugo",
  legalName: "PT Djitu Solusi Digital",
  tagline: "Where Creativity Meets Technology",
  description:
    "Your Growth Partner in the Digital Era. Smarter Marketing Strategies for Ambitious Business.",
  email: "hello@djitugo.com",
  phone: "+62 813 3732 9381",
  whatsapp: "https://wa.me/6281337329381",
  address:
    "Jln Bukit Sari Utara No.88X, Padangsambian Kaja, Denpasar Barat, Denpasar City, Bali 80117",
  hours: "Mon to Fri, 09:00 to 18:00 WITA",
  social: {
    instagram: "https://www.instagram.com/djitugo/",
    linkedin: "https://www.linkedin.com/company/djitugo/",
    facebook: "https://www.facebook.com/djitugo.official/"
  }
};

export const NAV = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" }
];

export const PARTNERS = [
  "JobStreet Express",
  "BB Resort Nusa Penida",
  "The Mesare Resort",
  "Chandra Bali Villas",
  "Great Bali Villas",
  "Love Scooter Bali",
  "Sunhwa Beauty",
  "Bali Family Dental Care",
  "Ruang Bahasa",
  "Ninobu"
];

export const STATS = [
  { value: 700, suffix: "+", label: "Clients delivered" },
  { value: 6, suffix: "", label: "Years compounding" },
  { value: 27, suffix: "", label: "Industries served" },
  { value: 37, suffix: "K", label: "Instagram community" }
];

export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  tagline: string;
  body: string;
  body2: string;
  deliverables: string[];
  image: string;
  alt: string;
  detailImage: string;
  detailAlt: string;
};

export const SERVICES: Service[] = [
  {
    slug: "digital-marketing",
    number: "01",
    title: "All-in-One Digital Marketing with Automation",
    short: "Digital Marketing",
    tagline: "Strategy and execution under one operating system.",
    body:
      "Strategy, content, paid media, and analytics, orchestrated through automation. One team, one operating system, one accountable monthly outcome.",
    body2:
      "Most agencies hand you a deck and disappear. We embed the playbook into the tools you already run: HubSpot, n8n, GA4, Meta Business, GSC. Each new asset, each new audience, each new offer compounds inside the system instead of sitting on a slide.",
    deliverables: [
      "Quarterly growth plan and channel mix",
      "Content calendar, scheduled and shipped weekly",
      "Marketing automation: CRM hooks, lead routing, lifecycle flows",
      "Unified reporting dashboard, refreshed daily",
      "Weekly stand-up and monthly readout"
    ],
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80",
    alt:
      "An operator at a wide monitor reviewing a multi-channel marketing dashboard in soft daylight.",
    detailImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80",
    detailAlt:
      "Close-up of a unified analytics dashboard showing channel performance over time."
  },
  {
    slug: "social-media",
    number: "02",
    title: "Social Media Marketing, AI-Powered",
    short: "Social Media",
    tagline: "Always on, always in voice.",
    body:
      "Content management, posting cadence, community engagement, and trend prediction. Your brand stays on time, in voice, and in the algorithm.",
    body2:
      "We run social as a system, not a series of posts. A real-time trend radar, a brand voice guide that an AI assistant respects, a community team that replies in your tone within thirty minutes during work hours. The result is a feed that earns reach instead of buying it.",
    deliverables: [
      "Monthly editorial plan for Instagram, TikTok, and LinkedIn",
      "Production: reels, photo posts, carousels, stories",
      "Community management with branded reply playbooks",
      "Trend radar with weekly briefs",
      "Monthly engagement and follower-quality report"
    ],
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1600&q=80",
    alt:
      "A creator desk lit by a single soft source, phone clamped to a tripod, captions scribbled in a notebook.",
    detailImage:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=2000&q=80",
    detailAlt:
      "A creator framing a flat-lay shot for a brand reel, hands and product in soft directional light."
  },
  {
    slug: "web-development",
    number: "03",
    title: "Web Development with AI Integration",
    short: "Web Development",
    tagline: "Sites that handle every visitor and capture every lead.",
    body:
      "Fast, conversion-focused websites with embedded chatbots and AI agents. Every visitor handled, every lead captured, every minute measured.",
    body2:
      "We design for the funnel as much as for the feed. Pages load under a second, forms route to your CRM in real time, and an AI concierge answers off-hours questions in your brand voice. From discovery to launch in four to eight weeks, depending on scope.",
    deliverables: [
      "Discovery, IA, and wireframes",
      "Design system aligned to brand guidelines",
      "Headless or framework build (Next.js, Webflow, WordPress)",
      "AI chat / lead-qualification agent",
      "Analytics, SEO baseline, and CRM integration"
    ],
    image:
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=1600&q=80",
    alt:
      "A developer's secondary monitor showing a clean web layout in progress, hands resting on a mechanical keyboard.",
    detailImage:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000&q=80",
    detailAlt:
      "An overhead shot of a laptop with a coffee cup, deep focus on a code editor in a daylit cafe."
  },
  {
    slug: "performance-marketing",
    number: "04",
    title: "Performance Marketing",
    short: "Performance Ads",
    tagline: "Spend like it is your own money.",
    body:
      "Targeted ad strategies across Meta, Google, TikTok, and LinkedIn. Optimised daily by people who watch the spend like it is their own.",
    body2:
      "We treat ad accounts as living instruments. Daily checks, weekly creative refresh, monthly account audits. No black-box dashboards: you see the same numbers we do, with a one-line explanation of every shift over five percent.",
    deliverables: [
      "Campaign architecture and audience strategy",
      "Creative production: 8 to 16 ad units per month",
      "Daily monitoring with anomaly alerts",
      "Conversion tracking, server-side where it matters",
      "Monthly CAC, ROAS, and contribution-margin report"
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    alt:
      "A media buyer's screen reflecting performance graphs over a designer's glasses in low light.",
    detailImage:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=2000&q=80",
    detailAlt:
      "A line chart of channel ROAS climbing across a quarter, rendered in high contrast on a dark monitor."
  },
  {
    slug: "branding-design",
    number: "05",
    title: "Branding and Design",
    short: "Brand and Design",
    tagline: "Brands that survive the scroll and the shelf.",
    body:
      "Logo systems, identity, packaging, and creative direction. We build brands that survive the scroll, the shelf, and the second look.",
    body2:
      "Identity work that begins with the customer, not the moodboard. We map who you want to be remembered as, then translate it into wordmarks, palettes, type systems, and packaging that hold up across an Instagram post, a billboard, and a hotel matchbook.",
    deliverables: [
      "Brand discovery and positioning",
      "Logo system, wordmark, monogram",
      "Color, typography, and motion guidelines",
      "Print, packaging, and signage applications",
      "Brand book ready for any vendor"
    ],
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80",
    alt:
      "A studio worktop with three logo concepts pinned, pencils and a fine-tip pen beside them.",
    detailImage:
      "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=2000&q=80",
    detailAlt:
      "An overhead view of brand sketches, a mood board, and a ceramic mug on a designer's desk."
  },
  {
    slug: "commercial-photography",
    number: "06",
    title: "Commercial Photography",
    short: "Photography",
    tagline: "Made for the campaign, the catalogue, and the algorithm.",
    body:
      "Marketing-grade product and brand photography. Shot for the campaign, the catalogue, and the algorithm, in one production.",
    body2:
      "We shoot for the deck the same day we shoot for the feed. A single production yields a hero image, twelve lifestyle frames, and the cutdowns your social calendar needs for the next four weeks. Studio in Padangsambian or on location across Bali.",
    deliverables: [
      "Pre-production: shot list and mood board",
      "One studio day or location half-day",
      "Hero plus 12 supporting still frames",
      "Vertical and square cutdowns for social",
      "Colour grading and basic retouching"
    ],
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1600&q=80",
    alt:
      "A studio still life of a single ceramic object lit by a north-facing window.",
    detailImage:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=2000&q=80",
    detailAlt:
      "Studio lighting setup with a softbox illuminating a product on a paper sweep."
  }
];

export type PortfolioItem = {
  slug: string;
  client: string;
  industry: string;
  disciplines: string[];
  image: string;
  alt: string;
  summary: string;
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    slug: "the-mesare-resort",
    client: "The Mesare Resort",
    industry: "Hospitality",
    disciplines: ["Web Development", "Social Media", "SEO"],
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1800&q=80",
    alt:
      "Cypress trees above a limestone hotel facade at dusk, soft warm light spilling from the windows.",
    summary:
      "A full site rebuild and a content engine that took direct bookings up by a third in two quarters."
  },
  {
    slug: "jobstreet-express",
    client: "JobStreet Express",
    industry: "Recruitment Tech",
    disciplines: ["Social Media", "Performance Ads", "KOL Management"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80",
    alt:
      "A focused job seeker scrolling a laptop in a daylit cafe, branded coffee cup beside.",
    summary:
      "An always-on social and KOL strategy for one of Indonesia's largest job platforms."
  },
  {
    slug: "bali-family-dental",
    client: "Bali Family Dental Care",
    industry: "Healthcare",
    disciplines: ["Website Development", "Branding"],
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=80",
    alt:
      "A calm, minimal dental reception, single chair in soft light, no patient in frame.",
    summary:
      "A calm, premium identity and booking site that turned walk-in traffic into a measurable funnel."
  },
  {
    slug: "love-scooter-bali",
    client: "Love Scooter Bali",
    industry: "Mobility",
    disciplines: ["Social Media", "Performance Ads"],
    image:
      "https://images.unsplash.com/photo-1602133187081-4874fdbd555c?auto=format&fit=crop&w=1800&q=80",
    alt:
      "A scooter parked at dawn along a rice terrace road, helmet on the seat.",
    summary:
      "A scooter rental brand reshaped around the dawn-to-dusk Bali rider, then scaled with paid social."
  },
  {
    slug: "sunhwa-beauty",
    client: "Sunhwa Beauty",
    industry: "Beauty",
    disciplines: ["Web Development", "Branding"],
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd07cf?auto=format&fit=crop&w=1800&q=80",
    alt:
      "A skincare bottle on a textured stone slab, single shadow line crossing the frame.",
    summary:
      "A premium beauty wordmark, packaging system, and storefront launched ahead of a regional rollout."
  }
];

export const TESTIMONIALS = [
  {
    quote:
      "Djitugo rebuilt our funnel and our voice in the same quarter. The bookings followed.",
    author: "Operations Lead",
    org: "The Mesare Resort"
  },
  {
    quote:
      "They treat our ad spend like their own. Cost per booking dropped by a third inside six weeks.",
    author: "Marketing Manager",
    org: "BB Resort Nusa Penida"
  },
  {
    quote:
      "A creative partner that ships on a schedule. Rare in this market.",
    author: "Founder",
    org: "Sunhwa Beauty"
  }
];

export const TEAM = [
  { name: "Gustu Adi", role: "Co-Founder" },
  { name: "Komang Joni", role: "Co-Founder" },
  { name: "Priska Puspitasari", role: "Business Development" },
  { name: "Muhammad Afifudin", role: "Project Manager" },
  { name: "Krisna Wiraska", role: "Ads Specialist" },
  { name: "Krisnu Artha", role: "Website Developer" },
  { name: "Intan Pramodika", role: "Social Media Lead" },
  { name: "Gung Gek", role: "Social Media" },
  { name: "Tryssa Kirana", role: "Social Media" },
  { name: "Satria Apriyudana", role: "Graphic Design" },
  { name: "Agus Supariana", role: "Graphic Design" },
  { name: "Vieri Bachtiar", role: "Graphic Design" },
  { name: "Aditya Pratama", role: "Content Creator" },
  { name: "Clara Puspaningrum", role: "Content Creator" },
  { name: "Satya Wedanta", role: "Content Creator" },
  { name: "Nia Antari", role: "Photo and Video" },
  { name: "Gita Lokananta", role: "Accounting" },
  { name: "Ayuni Kumalayanti", role: "People and Culture" }
];

export const VALUES = [
  {
    title: "Run a system, not a sprint.",
    body:
      "We build operating loops, not one-off campaigns. Each engagement leaves you with something you can hand to your next hire."
  },
  {
    title: "Earn the spend.",
    body:
      "We treat budgets as our own. If a channel does not work this month, we say so. If a creative is the reason, we re-cut it before you ask."
  },
  {
    title: "Show the receipts.",
    body:
      "One dashboard. One Slack channel. One weekly stand-up. No screenshot games, no buried KPIs."
  },
  {
    title: "Make work people stop to look at.",
    body:
      "Craft is non-negotiable. Performance numbers come and go; the design and the writing live on every brand surface for years."
  }
];
