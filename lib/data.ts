export const SITE = {
  name: "Djitugo",
  legalName: "PT Djitu Solusi Digital",
  tagline: "Where Creativity Meets Technology",
  description:
    "Your Growth Partner in the Digital Era. Smarter Marketing Strategies for Ambitious Business.",
  email: "hello@djitugo.com",
  phone: "+62 813 3732 9381",
  whatsapp: "https://wa.me/6281337329381",
  address: "Jl. Bukit Sari Utara No.88X, Denpasar, Bali 80117",
  addressFull:
    "Jln Bukit Sari Utara No.88X, Padangsambian Kaja, Denpasar Barat, Denpasar City, Bali 80117",
  hours: "Mon to Fri, 09:00 to 18:00 WITA",
  social: {
    instagram: "https://www.instagram.com/djitugo/",
    linkedin: "https://www.linkedin.com/company/djitugo/",
    facebook: "https://www.facebook.com/djitugo.official/"
  }
};

export const NAV = [
  { label: "Home", href: "/", key: "home" },
  { label: "About", href: "/about", key: "about" },
  { label: "Services", href: "/services", key: "services" },
  { label: "Work", href: "/work", key: "work" },
  { label: "Contact", href: "/contact", key: "contact" }
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
  { value: 700, suffix: "+" },
  { value: 6, suffix: "" },
  { value: 27, suffix: "" },
  { value: 37, suffix: "K" }
];

export type ServiceText = {
  title: string;
  short: string;
  tagline: string;
  body: string;
  body2: string;
  deliverables: string[];
};

export type Service = {
  slug: string;
  number: string;
  en: ServiceText;
  id: ServiceText;
  alt: string;
  detailAlt: string;
};

export const SERVICES: Service[] = [
  {
    slug: "digital-marketing",
    number: "01",
    en: {
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
      ]
    },
    id: {
      title: "Digital Marketing All-in-One dengan Otomasi",
      short: "Digital Marketing",
      tagline: "Strategi dan eksekusi dalam satu sistem operasi.",
      body:
        "Strategi, konten, paid media, dan analytics, semua dijalankan lewat otomasi. Satu tim, satu sistem, satu outcome bulanan yang jelas pertanggungjawabannya.",
      body2:
        "Kebanyakan agency kasih deck terus hilang. Kami tanam playbook-nya langsung ke tools yang udah kamu pakai: HubSpot, n8n, GA4, Meta Business, GSC. Tiap asset baru, audience baru, offer baru jadi compound di sistem, bukan ngendon di slide.",
      deliverables: [
        "Growth plan kuartalan dan channel mix",
        "Kalender konten, dijadwal dan ditayang mingguan",
        "Marketing automation: CRM hook, lead routing, lifecycle flow",
        "Reporting dashboard tunggal, refresh harian",
        "Stand-up mingguan dan readout bulanan"
      ]
    },
    alt:
      "An operator at a wide monitor reviewing a multi-channel marketing dashboard in soft daylight.",
    detailAlt:
      "Close-up of a unified analytics dashboard showing channel performance over time."
  },
  {
    slug: "social-media",
    number: "02",
    en: {
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
      ]
    },
    id: {
      title: "Social Media Marketing, Powered by AI",
      short: "Social Media",
      tagline: "Selalu on, selalu in voice.",
      body:
        "Manajemen konten, jadwal posting, engagement komunitas, sampai prediksi trend. Brand kamu tetap on time, in voice, dan masuk algoritma.",
      body2:
        "Kami treat social sebagai sistem, bukan kumpulan post. Trend radar real-time, brand voice guide yang dipatuhi AI assistant, dan community team yang balas dalam tiga puluh menit di jam kerja. Hasilnya: feed yang earn reach, bukan beli reach.",
      deliverables: [
        "Editorial plan bulanan untuk Instagram, TikTok, dan LinkedIn",
        "Produksi: reels, foto post, carousel, story",
        "Community management dengan playbook reply branded",
        "Trend radar dengan brief mingguan",
        "Report engagement dan follower-quality bulanan"
      ]
    },
    alt:
      "A creator desk lit by a single soft source, phone clamped to a tripod, captions scribbled in a notebook.",
    detailAlt:
      "A creator framing a flat-lay shot for a brand reel, hands and product in soft directional light."
  },
  {
    slug: "web-development",
    number: "03",
    en: {
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
      ]
    },
    id: {
      title: "Web Development dengan Integrasi AI",
      short: "Web Development",
      tagline: "Site yang handle tiap visitor dan capture tiap lead.",
      body:
        "Website cepat, fokus konversi, dengan chatbot dan AI agent built-in. Tiap visitor di-handle, tiap lead di-capture, tiap menit di-measure.",
      body2:
        "Kami desain untuk funnel sekaligus feed. Page load di bawah satu detik, form langsung masuk CRM real-time, dan AI concierge bisa jawab pertanyaan di luar jam kerja sesuai brand voice. Dari discovery sampai launch: empat sampai delapan minggu, tergantung scope.",
      deliverables: [
        "Discovery, IA, dan wireframe",
        "Design system selaras brand guidelines",
        "Build headless atau framework (Next.js, Webflow, WordPress)",
        "AI chat / lead-qualification agent",
        "Analytics, SEO baseline, dan integrasi CRM"
      ]
    },
    alt:
      "A developer's secondary monitor showing a clean web layout in progress, hands resting on a mechanical keyboard.",
    detailAlt:
      "An overhead shot of a laptop with a coffee cup, deep focus on a code editor in a daylit cafe."
  },
  {
    slug: "performance-marketing",
    number: "04",
    en: {
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
      ]
    },
    id: {
      title: "Performance Marketing",
      short: "Performance Ads",
      tagline: "Treat budget kamu kayak duit sendiri.",
      body:
        "Strategi ads target tinggi di Meta, Google, TikTok, dan LinkedIn. Dioptimasi harian sama orang yang anggap budget kamu duit sendiri.",
      body2:
        "Kami treat akun ads sebagai instrumen hidup. Cek harian, creative refresh mingguan, audit akun bulanan. Nggak ada dashboard black-box: kamu lihat angka yang sama dengan kami, dengan penjelasan satu kalimat tiap pergeseran di atas lima persen.",
      deliverables: [
        "Arsitektur campaign dan strategi audience",
        "Produksi kreatif: 8 sampai 16 unit ads per bulan",
        "Monitoring harian dengan anomaly alert",
        "Conversion tracking, server-side untuk yang penting",
        "Report CAC, ROAS, dan contribution-margin bulanan"
      ]
    },
    alt:
      "A media buyer's screen reflecting performance graphs over a designer's glasses in low light.",
    detailAlt:
      "A line chart of channel ROAS climbing across a quarter, rendered in high contrast on a dark monitor."
  },
  {
    slug: "branding-design",
    number: "05",
    en: {
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
      ]
    },
    id: {
      title: "Branding dan Desain",
      short: "Brand dan Desain",
      tagline: "Brand yang tahan scroll dan tahan rak.",
      body:
        "Logo system, identitas, packaging, sampai arahan kreatif. Kami bangun brand yang tahan scroll, tahan di rak, dan tahan dilihat kedua kalinya.",
      body2:
        "Identity work yang mulai dari customer, bukan dari moodboard. Kami petakan kamu mau diingat sebagai apa, lalu terjemahkan ke wordmark, palet, sistem tipografi, dan packaging yang konsisten dari post Instagram, billboard, sampai korek api hotel.",
      deliverables: [
        "Brand discovery dan positioning",
        "Logo system, wordmark, monogram",
        "Color, typography, dan motion guidelines",
        "Aplikasi print, packaging, dan signage",
        "Brand book siap pakai untuk vendor manapun"
      ]
    },
    alt:
      "A studio worktop with three logo concepts pinned, pencils and a fine-tip pen beside them.",
    detailAlt:
      "An overhead view of brand sketches, a mood board, and a ceramic mug on a designer's desk."
  },
  {
    slug: "commercial-photography",
    number: "06",
    en: {
      title: "Commercial Photography",
      short: "Photography",
      tagline: "Made for the campaign, the catalogue, and the algorithm.",
      body:
        "Marketing-grade product and brand photography. Shot for the campaign, the catalogue, and the algorithm, in one production.",
      body2:
        "We shoot for the deck the same day we shoot for the feed. A single production yields a hero image, twelve lifestyle frames, and the cutdowns your social calendar needs for the next four weeks. Studio in Bali or on location across the island.",
      deliverables: [
        "Pre-production: shot list and mood board",
        "One studio day or location half-day",
        "Hero plus 12 supporting still frames",
        "Vertical and square cutdowns for social",
        "Colour grading and basic retouching"
      ]
    },
    id: {
      title: "Fotografi Komersial",
      short: "Fotografi",
      tagline: "Dibuat buat campaign, katalog, dan algoritma.",
      body:
        "Fotografi produk dan brand kualitas marketing. Sekali shoot, hasilnya untuk campaign, katalog, dan algoritma sekaligus.",
      body2:
        "Kami shoot untuk deck di hari yang sama kami shoot untuk feed. Satu produksi menghasilkan satu hero image, dua belas frame lifestyle, dan cutdown yang dibutuhkan kalender sosial kamu empat minggu ke depan. Studio di Bali atau on-location di seluruh pulau.",
      deliverables: [
        "Pre-produksi: shot list dan mood board",
        "Satu studio day atau half-day on-location",
        "Hero plus 12 frame supporting",
        "Cutdown vertical dan square untuk sosial",
        "Color grading dan retouching dasar"
      ]
    },
    alt:
      "A studio still life of a single ceramic object lit by a north-facing window.",
    detailAlt:
      "Studio lighting setup with a softbox illuminating a product on a paper sweep."
  }
];

export type PortfolioItem = {
  slug: string;
  client: string;
  industry: string;
  industryId: string;
  kind: string;
  disciplines: string[];
  disciplinesId: string[];
  alt: string;
  summary: string;
  summaryId: string;
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    slug: "the-mesare-resort",
    client: "The Mesare Resort",
    industry: "Hospitality",
    industryId: "Hospitality",
    kind: "hospitality",
    disciplines: ["Web Development", "Social Media", "SEO"],
    disciplinesId: ["Web Development", "Social Media", "SEO"],
    alt:
      "A schematic of a boutique resort facade with palm motifs, marking the case study.",
    summary:
      "A full site rebuild and a content engine that took direct bookings up by a third in two quarters.",
    summaryId:
      "Bangun ulang website dan content engine yang dorong direct booking naik sepertiga dalam dua kuartal."
  },
  {
    slug: "jobstreet-express",
    client: "JobStreet Express",
    industry: "Recruitment Tech",
    industryId: "Recruitment Tech",
    kind: "recruitment",
    disciplines: ["Social Media", "Performance Ads", "KOL Management"],
    disciplinesId: ["Social Media", "Performance Ads", "Manajemen KOL"],
    alt:
      "A briefcase and two figures denoting a recruitment platform engagement.",
    summary:
      "An always-on social and KOL strategy for one of Indonesia's largest job platforms.",
    summaryId:
      "Strategi sosial dan KOL always-on untuk salah satu platform kerja terbesar di Indonesia."
  },
  {
    slug: "bali-family-dental",
    client: "Bali Family Dental Care",
    industry: "Healthcare",
    industryId: "Healthcare",
    kind: "healthcare",
    disciplines: ["Website Development", "Branding"],
    disciplinesId: ["Website Development", "Branding"],
    alt:
      "A medical cross on a quiet grid, marking the dental clinic project.",
    summary:
      "A calm, premium identity and booking site that turned walk-in traffic into a measurable funnel.",
    summaryId:
      "Identitas premium yang kalem dan site booking yang ubah walk-in jadi funnel yang bisa diukur."
  },
  {
    slug: "love-scooter-bali",
    client: "Love Scooter Bali",
    industry: "Mobility",
    industryId: "Mobility",
    kind: "mobility",
    disciplines: ["Social Media", "Performance Ads"],
    disciplinesId: ["Social Media", "Performance Ads"],
    alt:
      "A scooter outline above a dashed road, denoting the mobility rental brand.",
    summary:
      "A scooter rental brand reshaped around the dawn-to-dusk Bali rider, then scaled with paid social.",
    summaryId:
      "Brand rental scooter yang dibentuk ulang untuk rider Bali dari subuh sampai senja, lalu di-scale lewat paid social."
  },
  {
    slug: "sunhwa-beauty",
    client: "Sunhwa Beauty",
    industry: "Beauty",
    industryId: "Beauty",
    kind: "beauty",
    disciplines: ["Web Development", "Branding"],
    disciplinesId: ["Web Development", "Branding"],
    alt:
      "A serum bottle silhouette denoting the beauty brand engagement.",
    summary:
      "A premium beauty wordmark, packaging system, and storefront launched ahead of a regional rollout.",
    summaryId:
      "Wordmark beauty premium, sistem packaging, dan storefront yang launch sebelum rollout regional."
  }
];

export type Testimonial = {
  quote: string;
  quoteId: string;
  author: string;
  org: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Djitugo rebuilt our funnel and our voice in the same quarter. The bookings followed.",
    quoteId:
      "Djitugo bangun ulang funnel dan voice kami dalam satu kuartal. Booking-nya nyusul.",
    author: "Operations Lead",
    org: "The Mesare Resort"
  },
  {
    quote:
      "They treat our ad spend like their own. Cost per booking dropped by a third inside six weeks.",
    quoteId:
      "Mereka treat ad spend kami kayak duit sendiri. Cost per booking turun sepertiga dalam enam minggu.",
    author: "Marketing Manager",
    org: "BB Resort Nusa Penida"
  },
  {
    quote:
      "A creative partner that ships on a schedule. Rare in this market.",
    quoteId:
      "Partner kreatif yang ship sesuai jadwal. Langka di market ini.",
    author: "Founder",
    org: "Sunhwa Beauty"
  }
];

export const TEAM = [
  { name: "Gustu Adi", role: "Co-Founder", roleId: "Co-Founder" },
  { name: "Komang Joni", role: "Co-Founder", roleId: "Co-Founder" },
  { name: "Priska Puspitasari", role: "Business Development", roleId: "Business Development" },
  { name: "Muhammad Afifudin", role: "Project Manager", roleId: "Project Manager" },
  { name: "Krisna Wiraska", role: "Ads Specialist", roleId: "Ads Specialist" },
  { name: "Krisnu Artha", role: "Website Developer", roleId: "Website Developer" },
  { name: "Intan Pramodika", role: "Social Media Lead", roleId: "Social Media Lead" },
  { name: "Gung Gek", role: "Social Media", roleId: "Social Media" },
  { name: "Tryssa Kirana", role: "Social Media", roleId: "Social Media" },
  { name: "Satria Apriyudana", role: "Graphic Design", roleId: "Graphic Design" },
  { name: "Agus Supariana", role: "Graphic Design", roleId: "Graphic Design" },
  { name: "Vieri Bachtiar", role: "Graphic Design", roleId: "Graphic Design" },
  { name: "Aditya Pratama", role: "Content Creator", roleId: "Content Creator" },
  { name: "Clara Puspaningrum", role: "Content Creator", roleId: "Content Creator" },
  { name: "Satya Wedanta", role: "Content Creator", roleId: "Content Creator" },
  { name: "Nia Antari", role: "Photo and Video", roleId: "Foto dan Video" },
  { name: "Gita Lokananta", role: "Accounting", roleId: "Accounting" },
  { name: "Ayuni Kumalayanti", role: "People and Culture", roleId: "People and Culture" }
];

export type ValueText = { title: string; body: string };
export type ValueEntry = { en: ValueText; id: ValueText };

export const VALUES: ValueEntry[] = [
  {
    en: {
      title: "Run a system, not a sprint.",
      body:
        "We build operating loops, not one-off campaigns. Each engagement leaves you with something you can hand to your next hire."
    },
    id: {
      title: "Bangun sistem, bukan sprint.",
      body:
        "Kami bangun loop operasional, bukan kampanye sekali tayang. Tiap engagement meninggalkan sesuatu yang bisa kamu kasih ke hire berikutnya."
    }
  },
  {
    en: {
      title: "Earn the spend.",
      body:
        "We treat budgets as our own. If a channel does not work this month, we say so. If a creative is the reason, we re-cut it before you ask."
    },
    id: {
      title: "Pantas dapat budget-nya.",
      body:
        "Kami treat budget seperti milik sendiri. Kalau satu channel nggak jalan bulan ini, kami bilang. Kalau creative-nya penyebabnya, kami cut ulang sebelum kamu minta."
    }
  },
  {
    en: {
      title: "Show the receipts.",
      body:
        "One dashboard. One Slack channel. One weekly stand-up. No screenshot games, no buried KPIs."
    },
    id: {
      title: "Tunjukin bukti.",
      body:
        "Satu dashboard. Satu Slack channel. Satu stand-up mingguan. Nggak ada main screenshot, nggak ada KPI yang ditutupin."
    }
  },
  {
    en: {
      title: "Make work people stop to look at.",
      body:
        "Craft is non-negotiable. Performance numbers come and go; the design and the writing live on every brand surface for years."
    },
    id: {
      title: "Bikin karya yang bikin orang berhenti scroll.",
      body:
        "Craft itu nggak bisa dinegoin. Angka performance datang dan pergi; desain dan copy tinggal di tiap permukaan brand selama bertahun-tahun."
    }
  }
];
