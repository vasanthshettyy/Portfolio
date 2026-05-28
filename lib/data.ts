// ─── Personal Info ─────────────────────────────────────────────────────
export const personal = {
  name: "Vasanth Shetty",
  initials: "VS",
  tagline: "Full-Stack Developer & Builder",
  headline:
    "BCA student building AI-assisted full-stack products for startup environments.",
  bio: "I'm not just learning to code — I'm building products. I design systems, write backend logic, handle databases, and ship interfaces that actually work. My focus is on building practical, deployable software that solves real problems — not textbook exercises.",
  location: "India",
  availability: "Available for internship & early-stage roles",
  cgpa: "8.46",
  graduationYear: "2026",
  degree: "BCA",
  email: "vasanthshetty@email.com",
  github: "https://github.com/vasanthshettyy",
  linkedin: "https://linkedin.com/in/vasanthshettyy",
  currentFocus: "Building a startup-ready portfolio & AI-assisted tools",
};

// ─── Skills ────────────────────────────────────────────────────────────
export const skillGroups = [
  {
    category: "Languages",
    icon: "Code2",
    skills: ["JavaScript", "TypeScript", "PHP", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    icon: "Monitor",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
      "Lucide Icons",
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: ["Node.js", "Next.js API Routes", "PHP (Native)", "REST APIs", "Authentication Systems"],
  },
  {
    category: "Databases",
    icon: "Database",
    skills: ["MySQL", "Supabase (PostgreSQL)", "Database Design", "Query Optimization"],
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Vercel", "VS Code", "Postman", "npm"],
  },
  {
    category: "Concepts",
    icon: "Lightbulb",
    skills: [
      "AI-Assisted Development",
      "Rapid Prototyping",
      "System Architecture",
      "Product Thinking",
      "Agile / Sprint-based",
      "Debugging & Optimization",
    ],
  },
];

// ─── Projects ──────────────────────────────────────────────────────────
export const projects = [
  {
    slug: "makerhq",
    name: "MakerHQ",
    tagline: "Startup SaaS campaign management platform",
    status: "In Progress",
    type: "Startup SaaS",
    description:
      "A campaign workflow and content management system built for early-stage startups. Designed to help small teams plan, execute, and track marketing campaigns without the overhead of enterprise tools.",
    problem:
      "Early-stage startups waste time juggling spreadsheets and disconnected tools for campaign management. There's no lightweight SaaS that fits their actual workflow.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui"],
    highlights: [
      "Campaign pipeline with state machine logic",
      "Role-based team access control",
      "AI-assisted content drafting integration",
    ],
    architectureNote:
      "Built on Next.js App Router with Supabase for real-time data and auth. Designed for extensibility — modules are isolated and composable.",
    humanNote:
      "This exists because I wanted to understand what 'building a product' actually means — not just features, but systems, decisions, and trade-offs.",
    github: "https://github.com/vasanthshettyy/MakerHQ",
    live: null,
    featured: true,
    order: 1,
  },
  {
    slug: "agroshare",
    name: "AgroShare",
    tagline: "Agricultural equipment sharing platform",
    status: "Completed",
    type: "Full-Stack Web App",
    description:
      "A web application that lets farmers share and rent agricultural equipment with verified booking, real-time notifications, and trust-based review systems.",
    problem:
      "Small-scale farmers can't afford expensive equipment. AgroShare creates a sharing economy for agricultural tools with proper booking and accountability.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "AJAX"],
    highlights: [
      "Booking state machine (pending → confirmed → completed)",
      "Real-time polling for notifications",
      "Community trust review system",
    ],
    architectureNote:
      "PHP native backend with MySQL. Booking logic is built around a state machine. AJAX-based realtime poller keeps the UI synced without full-page reloads.",
    humanNote:
      "AgroShare taught me database design, session management, and the pain of debugging real user workflows. It's the most practical app I've built.",
    github: "https://github.com/vasanthshettyy/AgroShare",
    live: null,
    featured: true,
    order: 2,
  },
  {
    slug: "scamguard",
    name: "Scam Guard",
    tagline: "Browser-based AI scam risk detection tool",
    status: "Completed",
    type: "Hackathon Build",
    description:
      "A browser extension and web tool that uses AI to analyze URLs, messages, and patterns to flag potential scam risks. Built under 12-hour hackathon constraints.",
    problem:
      "Users fall for phishing and scam content daily. There's no simple, instant tool that ordinary people can run on suspicious content before engaging with it.",
    tech: ["JavaScript", "HTML/CSS", "AI APIs", "Browser Extension APIs"],
    highlights: [
      "Real-time URL and text pattern analysis",
      "Risk scoring with confidence level",
      "Built in a 12-hour hackathon sprint",
    ],
    architectureNote:
      "Browser-native processing for speed. External AI API for pattern detection. Designed to run without server dependency.",
    humanNote:
      "Scam Guard was about speed — could we ship something real and useful in 12 hours? We did. That's the test.",
    github: "https://github.com/vasanthshettyy/ScamGuard",
    live: null,
    featured: true,
    order: 3,
  },
  {
    slug: "cognivault",
    name: "CogniVault",
    tagline: "Experimental AI reasoning and forensics pipeline",
    status: "Completed",
    type: "AI Experiment",
    description:
      "A dual-engine AI forensics pipeline that combines OpenRouter's Gemini model for deep analysis with Groq for high-speed extraction. Designed for document and content intelligence.",
    problem:
      "AI-assisted analysis tools are either too generic or too expensive. CogniVault explores whether a well-structured pipeline can do real, targeted forensic analysis at low cost.",
    tech: ["React", "Node.js", "Supabase", "OpenRouter API", "Groq API"],
    highlights: [
      "Dual-engine AI pipeline (Gemini + Groq)",
      "Forensic dashboard with structured reasoning output",
      "Token-efficient field combining for cost reduction",
    ],
    architectureNote:
      "Agentic pipeline routes tasks by complexity. Gemini handles deep analysis, Groq handles fast extraction. Results stored and structured in Supabase.",
    humanNote:
      "CogniVault is my most technically ambitious project. It's about understanding how to build AI-first systems, not just call APIs.",
    github: "https://github.com/vasanthshettyy/CogniVault",
    live: null,
    featured: true,
    order: 4,
  },
];

// ─── Hackathons ────────────────────────────────────────────────────────
export const hackathons = [
  {
    name: "Smart India Hackathon (Internal)",
    role: "Team Lead",
    duration: "12 hours",
    year: "2024",
    project: "Scam Guard",
    outcome:
      "Shipped a working browser scam-detection tool under full time pressure",
    tags: ["Team Lead", "AI", "12h Sprint"],
  },
  {
    name: "College Techfest Hackathon",
    role: "Team Lead",
    duration: "6 hours",
    year: "2024",
    project: "Rapid MVP",
    outcome:
      "Led team from zero to functional prototype in 6 hours under audience evaluation",
    tags: ["Team Lead", "6h Sprint", "MVP"],
  },
  {
    name: "Internal Innovation Challenge",
    role: "Team Lead",
    duration: "12 hours",
    year: "2023",
    project: "Web Tool",
    outcome:
      "Coordinated end-to-end — problem framing, architecture, build, and presentation",
    tags: ["Team Lead", "Full Ownership", "12h Sprint"],
  },
];

// ─── Build Process ─────────────────────────────────────────────────────
export const buildProcess = [
  {
    step: "01",
    title: "Understand the Problem",
    description:
      "Map the real constraint. What actually fails? What's the simplest model that explains it?",
    icon: "Search",
  },
  {
    step: "02",
    title: "Sketch the Architecture",
    description:
      "Data model first. Then routes, then UI. Structure before syntax.",
    icon: "GitBranch",
  },
  {
    step: "03",
    title: "Build Fast",
    description:
      "Ship a working version. No perfect-first, just function-first. Iterate from real behavior.",
    icon: "Zap",
  },
  {
    step: "04",
    title: "Test & Debug",
    description:
      "Break it deliberately. Read the error messages. Understand why, not just what.",
    icon: "Bug",
  },
  {
    step: "05",
    title: "Refine UX",
    description:
      "Does it feel right to someone who didn't build it? If not, fix the friction.",
    icon: "Layers",
  },
  {
    step: "06",
    title: "Deploy & Iterate",
    description:
      "Get it live. Real feedback changes everything. Iteration is the product.",
    icon: "Rocket",
  },
];

// ─── Tech Stack proof section ──────────────────────────────────────────
export const techProof = [
  { name: "Next.js", category: "Framework", used: ["MakerHQ", "CogniVault"] },
  { name: "React", category: "UI", used: ["MakerHQ", "CogniVault"] },
  { name: "PHP", category: "Backend", used: ["AgroShare"] },
  { name: "Supabase", category: "Database", used: ["MakerHQ", "CogniVault"] },
  { name: "MySQL", category: "Database", used: ["AgroShare"] },
  { name: "Tailwind CSS", category: "Styling", used: ["MakerHQ", "Portfolio"] },
  { name: "TypeScript", category: "Language", used: ["MakerHQ", "Portfolio"] },
  { name: "Vercel", category: "Deployment", used: ["Portfolio", "MakerHQ"] },
];
