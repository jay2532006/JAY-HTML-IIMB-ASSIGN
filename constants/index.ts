export const SITE = {
  name: "Jay Parmar",
  shortName: "Jay",
  role: "AI/ML Builder · Finance Analyst · Product Leader",
  headline: "I turn complex data into decisions that move.",
  subheadline:
    "I’m an AI/ML builder, finance analyst and product leader. I build useful systems, bring people around ambitious ideas and stay with the work until it creates a real outcome.",
  email: "jaydeepak2532006@gmail.com",
  phone: "+91 77730 60203",
  location: "Bhilai, Chhattisgarh, India",
  timezone: "IST (UTC+5:30)",
  educationShort: "BBA, IIM Bangalore",
  github: "https://github.com/jay2532006",
  linkedin: "https://www.linkedin.com/in/jay-parmar-ai",
  resumeUrl: "/assets/portfolio/resume/Jay-Parmar-Resume.pdf",
  portraitUrl: "/assets/portfolio/gallery/gallery-03.jpg",
  brandMarkUrl: "/assets/brand/jay-parmar-mark.webp",
  brandBannerUrl: "/assets/brand/jay-parmar-brand-banner.webp",
  badge: "Strategy × Technology",
};

export const NAV_LINKS = [
  { label: "Projects", href: "#showcase" },
  { label: "Experience", href: "#experience" },
  { label: "Dossier", href: "#dossier" },
  { label: "Gallery", href: "#gallery" },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "#contact" },
];

export const EDUCATION = [
  {
    degree: "BBA, Digital Business & Entrepreneurship (DBE)",
    institution: "Indian Institute of Management Bangalore (IIMB)",
    period: "2026 – 2029",
    highlights: [
      "Top 20 — Young Leadership Summit, IIM Bangalore (selected from 70,000+ applicants)",
      "National Finalist — SIPS 2026 (IIM Bangalore) & AVANT B-Plan (IIM Indore)",
    ],
  },
];

export const EXPERIENCE = [
  {
    period: "2025 — Present",
    role: "AI & Disaster Analytics Intern",
    organization: "Center for Disaster Management, IIT Guwahati",
    location: "Remote / Guwahati",
    summary:
      "Built automated data pipelines consolidating social media streams, government advisories, and public-source datasets into real-time risk-monitoring dashboards.",
    bullets: [
      "Designed automated ETL pipelines ingesting social, government, and open public feeds into live risk-monitoring dashboards.",
      "Curated and structured NLP-ready pre-disaster preparedness datasets for early-warning and situational analysis.",
    ],
  },
  {
    period: "2025 — Present",
    role: "Founder & Product Lead",
    organization: "ShikshaShakti.AI",
    location: "Bhilai, India",
    summary:
      "Built an offline-first adaptive learning platform and prerequisite diagnostic engine funded by a ₹2L DST-NIDHI ignition grant.",
    bullets: [
      "Architected a question-generation and diagnostic engine powered by the Claude API spanning 233 chapters and 157 prerequisite relationships.",
      "Engineered an offline-first delivery model tailored for low-bandwidth classrooms, reaching TRL 4 with ₹2L DST-NIDHI grant backing.",
    ],
  },
  {
    period: "2024 — 2025",
    role: "Core Coordinator, Event & Logistics Management (Internship)",
    organization: "CSVTU-FORTE DST-NIDHI i-TBI",
    location: "Bhilai, India",
    summary:
      "Led vendor coordination and budget-conscious execution across startup incubation cohorts and mentoring programs.",
    bullets: [
      "Managed vendor negotiations, procurement timelines, and end-to-end event logistics across incubation and mentoring programs.",
      "Tracked budgets against financial plan, flagged cost variances early, and maintained stakeholder reporting.",
    ],
  },
  {
    period: "2024 — 2025",
    role: "Company Outreach Lead & Event Management Core Coordinator",
    organization: "Training & Placement Cell, CSVTU Bhilai",
    location: "Bhilai, India",
    summary:
      "Coordinated corporate outreach, vocational training allocations, and placement drive operations across students, faculty, and hiring partners.",
    bullets: [
      "Spearheaded company outreach and onboarding for campus placement and vocational training drives.",
      "Synchronized scheduling, logistics, and communication between student cohorts, faculty coordinators, and corporate recruiters.",
    ],
  },
];

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  year: string;
  badge: string;
  summary: string;
  headlineMetric: string;
  metrics: string[];
  stack: string[];
  image: string;
  caseDeckUrl?: string;
  github?: string;
}

export const PROJECTS: PortfolioProject[] = [
  {
    id: "shikshashakti",
    title: "ShikshaShakti.AI",
    category: "EdTech · Founder",
    year: "2025",
    badge: "₹2L DST-NIDHI Grant · TRL 4",
    summary:
      "Offline-first adaptive learning platform that maps prerequisite gaps before generating targeted questions for students in low-bandwidth classrooms.",
    headlineMetric: "233 chapters mapped",
    metrics: [
      "233 chapters mapped",
      "157 prerequisite links",
      "₹2L DST-NIDHI grant",
      "TRL 4 validated",
    ],
    stack: ["Claude API", "Python", "FastAPI", "React", "Knowledge Graph"],
    image: "/assets/carousel/carousel-33.webp",
    caseDeckUrl: "https://drive.google.com/file/d/1KB5ZEOAgdl6hEC4cCXVQ1u9I0FcxkGHx/view",
  },
  {
    id: "packedge",
    title: "PackEdge",
    category: "Supply Chain · 1st Place IIT Bombay",
    year: "2025",
    badge: "1st Position · Techfest IIT Bombay",
    summary:
      "Partial knock-down (PKD) packaging and logistics redesign developed for Godrej Interio to maximize truck loadability and cut freight costs.",
    headlineMetric: "₹47.5L projected annual savings",
    metrics: [
      "₹47.5L projected annual savings",
      "18.5% less volume",
      "33% freight reduction",
      "25% higher loadability",
    ],
    stack: ["ROI Modeling", "Excel", "Supply Chain Analytics", "Unit Economics"],
    image: "/assets/carousel/carousel-25.webp",
    caseDeckUrl: "https://drive.google.com/file/d/198jU7tjaPgLchEVKDLTQ7UO2OzyOkM91/view",
  },
  {
    id: "nextgenaml",
    title: "NextGenAML",
    category: "FinTech · National Winner",
    year: "2025",
    badge: "TCS Foundation Winner · NIT Trichy",
    summary:
      "Real-time anti-money-laundering screening engine combining Graph Neural Networks, XGBoost, FATF typologies, and LLM-assisted case triage.",
    headlineMetric: "<12ms screening latency",
    metrics: [
      "<12ms screening latency",
      "0.78 ROC-AUC",
      "GNN + XGBoost + FATF rules",
      "LLM-assisted case triage",
    ],
    stack: ["Python", "GNN", "XGBoost", "Neo4j", "FastAPI", "Claude API"],
    image: "/assets/carousel/carousel-35.webp",
  },
  {
    id: "fdr-setu",
    title: "FDR-Setu",
    category: "RegTech · SIH 2026 AICTE",
    year: "2026",
    badge: "Smart India Hackathon 2026 · AICTE",
    summary:
      "Regulatory infrastructure layer for the institutional security-deposit lifecycle featuring two-phase settlement and an audit-first architecture.",
    headlineMetric: "55 REST endpoints · 26 tables",
    metrics: [
      "55 REST endpoints",
      "26-table data model",
      "Two-phase settlement",
      "Role-based audit workflows",
    ],
    stack: ["Python", "FastAPI", "SQL", "React", "Audit Architecture"],
    image: "/assets/carousel/carousel-32.webp",
  },
  {
    id: "cryptotrace-lea",
    title: "CryptoTrace LEA",
    category: "Web3 Forensics · MHA PS 26183",
    year: "2026",
    badge: "129/129 Tests Passing · SIH",
    summary:
      "Multi-chain cryptocurrency fraud attribution and investigation workspace built for law enforcement agencies with a 7-component risk scoring engine.",
    headlineMetric: "129/129 tests passing",
    metrics: [
      "129/129 tests passing",
      "7-component risk score",
      "Multi-chain entity attribution",
      "MHA Problem Statement 26183",
    ],
    stack: ["Python", "Graph Analytics", "FastAPI", "React", "Web3 Forensics"],
    image: "/assets/carousel/carousel-10.webp",
  },
  {
    id: "realtime-fraud-alerts",
    title: "Real-time Fraud Alerts",
    category: "Fraud Prevention · 2× Finalist",
    year: "2026",
    badge: "MUJ Hack 4.0 & Fintechstico 2026",
    summary:
      "Active transaction defence layer that pauses suspicious payments in flight and triggers instant multilingual verification voice calls via Sarvam AI.",
    headlineMetric: "2× National Finalist",
    metrics: [
      "Real-time transaction pause",
      "Multilingual Sarvam AI voice alerts",
      "MUJ Hack 4.0 Finalist",
      "Fintechstico 2026, NSUT Delhi",
    ],
    stack: ["Python", "Sarvam AI", "FastAPI", "ML Risk Scoring", "Voice Pipelines"],
    image: "/assets/carousel/carousel-24.webp",
  },
];

export const ACHIEVEMENTS = [
  {
    index: "01",
    title: "National Winner — TCS Foundation 36-Hour Hackathon",
    venue: "NIT Tiruchirappalli",
    detail: "First place nationally for NextGenAML real-time transaction screening.",
  },
  {
    index: "02",
    title: "1st Position — PackEdge Supply Chain Challenge",
    venue: "Techfest, IIT Bombay",
    detail: "Winner for Godrej Interio partial knock-down packaging redesign (₹47.5L projected annual savings).",
  },
  {
    index: "03",
    title: "Hack-LLM Winner",
    venue: "IIIT Delhi",
    detail: "Awarded top honors for applied LLM systems engineering.",
  },
  {
    index: "04",
    title: "Top 100 in India — iDEA 2.0 AML Challenge",
    venue: "Union Bank of India",
    detail: "Selected among the top 100 teams nationwide for anti-money-laundering innovation.",
  },
  {
    index: "05",
    title: "Top 20 — Young Leadership Summit",
    venue: "IIM Bangalore",
    detail: "Selected into the top 20 nationally from over 70,000+ applicants.",
  },
  {
    index: "06",
    title: "5× National Finalist across Flagship Hackathons & B-Plans",
    venue: "IIT BHU · NSUT Delhi · IIM Indore · IIM Bangalore · MUJ",
    detail: "Finalist at SANGYAN (IIT BHU), MUJ Hack 4.0, Fintechstico 2026 (NSUT Delhi), AVANT B-Plan (IIM Indore), and SIPS 2026 (IIM Bangalore).",
  },
];

export const CERTIFICATES = [
  {
    id: "cert-01",
    title: "PackEdge — 1st Position",
    issuer: "Techfest, IIT Bombay",
    year: "2025",
    image: "/assets/portfolio/certificates/cert-01.jpg",
  },
  {
    id: "cert-02",
    title: "National Hackathon — First Place",
    issuer: "TCS Foundation × NIT Trichy",
    year: "2025",
    image: "/assets/portfolio/certificates/cert-02.jpg",
  },
  {
    id: "cert-05",
    title: "Drone Technology E-SDP",
    issuer: "Ministry of MSME, Government of India",
    year: "2025",
    image: "/assets/portfolio/certificates/cert-05.jpg",
  },
  {
    id: "cert-03",
    title: "GitHub Dev Days",
    issuer: "Rungta International Skills University",
    year: "2025",
    image: "/assets/portfolio/certificates/cert-03.jpg",
  },
  {
    id: "cert-06",
    title: "Recruitment Drive Appreciation",
    issuer: "Codelent Technologies",
    year: "2025",
    image: "/assets/portfolio/certificates/cert-06.jpg",
  },
  {
    id: "cert-07",
    title: "VLSI Workshop",
    issuer: "Electromos × IIT Bhilai",
    year: "2025",
    image: "/assets/portfolio/certificates/cert-07.jpg",
  },
];

export const SKILL_CATEGORIES = [
  {
    category: "Data & Reporting",
    items: [
      "Power BI",
      "Excel",
      "Data Pipelines",
      "Data Analysis",
      "Financial Analysis",
      "ROI Modeling",
      "KPI Definition",
      "Reporting Automation",
      "Dashboard Design",
    ],
  },
  {
    category: "AI & Tools",
    items: [
      "Claude API",
      "LLM Fine-Tuning",
      "Machine Learning",
      "GNN",
      "NLP",
      "XGBoost",
      "GenAI Applications",
    ],
  },
  {
    category: "Engineering",
    items: ["Python", "FastAPI", "React", "Neo4j"],
  },
  {
    category: "Business",
    items: [
      "Budget Tracking",
      "Vendor Coordination",
      "Stakeholder Management",
      "Cross-Functional Coordination",
    ],
  },
  {
    category: "Office & Productivity",
    items: ["Microsoft Excel", "PowerPoint", "Word", "Outlook"],
  },
];

export const SKILLS = SKILL_CATEGORIES.flatMap((group) => group.items);

export const STACK = [
  "Python",
  "Claude API",
  "FastAPI",
  "React",
  "Neo4j",
  "XGBoost",
  "GNN",
  "Power BI",
  "Excel",
  "NLP",
  "ROI Modeling",
];

export const AIMS = [
  {
    index: "01",
    title: "Build useful intelligence",
    description:
      "Ship AI and analytics systems that solve concrete bottlenecks — from <12ms AML triage to offline prerequisite mapping in rural classrooms.",
  },
  {
    index: "02",
    title: "Create from India, for the world",
    description:
      "Prove that high-rigor product engineering, financial modeling, and institutional-grade software can emerge out of Bhilai and IIM Bangalore.",
  },
  {
    index: "03",
    title: "Grow through service",
    description:
      "Stay accountable to real outcomes — coordinating placement drives, incubation cohorts, and public-interest disaster pipelines alongside technical builds.",
  },
];

export const ABOUT_COPY = {
  lead: "I’m Jay — a builder, organiser and relentlessly curious learner, most energised when an ambitious idea has to survive contact with the real world.",
  bio: "Pursuing BBA in Digital Business & Entrepreneurship at IIM Bangalore while leading product engineering on ShikshaShakti.AI and AI disaster pipelines at IIT Guwahati.",
};
