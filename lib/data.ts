export const profile = {
  name: "Arijeet Ghosh",
  first: "ARIJEET",
  last: "GHOSH",
  role: "Software Engineer — React Native & Full-Stack",
  location: "Durgapur, India",
  availability: "open to remote or onsite",
  summary:
    "5+ years shipping production systems end-to-end. Founding engineer behind a crypto + fiat billing platform, multi-tenant VM infra for live AI workspaces, and production LLM agents wired up with custom MCP servers. Three React Native apps shipped across fintech and e-commerce.",
  email: "arijeetghosh251@gmail.com",
  github: "https://github.com/0xShisuiii",
  linkedin: "https://linkedin.com/in/arijeet-ghosh",
  education: "B.Tech, Heritage Institute of Technology, Kolkata",
};

export const stats = [
  { value: "5+", label: "years shipping" },
  { value: "2.5+", label: "years React Native" },
  { value: "3", label: "mobile apps shipped" },
];

export type Mission = {
  company: string;
  role: string;
  dates: string;
  status: "ACTIVE" | "COMPLETE";
  brief: string;
  points: { k: string; v: string }[];
};

export const missions: Mission[] = [
  {
    company: "Plena Ecosystems (now Noah)",
    role: "Full Stack Developer · core / founding engineer",
    dates: "Mar 2025 – Present",
    status: "ACTIVE",
    brief:
      "Core engineer on Plena Playground, an AI-driven no-code development platform for web3, and on Plena’s AI agent, billing and growth-bot infrastructure.",
    points: [
      { k: "Mobile app.", v: "Built Noah’s React Native app: manage projects, stream from your phone, monitor deployments on the go." },
      { k: "Agentic AI & MCP.", v: "Agent workflows and custom MCP servers powering the coding agent: tool-calling, code diff/preview, sub-agent orchestration, prompt pipelines." },
      { k: "Billing platform.", v: "Architected and owned it end-to-end: data model, API design, idempotent transactions across crypto and fiat rails." },
      { k: "Agent memory.", v: "Persistent memory on a vector DB: observation summaries and per-session context retrieval." },
      { k: "Infra.", v: "Multi-tenant VM infrastructure for isolated agent workspaces, live code preview and AI codebase audits." },
      { k: "Growth bots.", v: "LLM-powered Twitter/X bots that generated and scheduled content for multiple clients." },
    ],
  },
  {
    company: "Hashstack Finance",
    role: "Software Development Engineer 1",
    dates: "May 2024 – Feb 2025",
    status: "COMPLETE",
    brief: "DeFi lending on Starknet: mobile, SDKs, cloud services and token incentives.",
    points: [
      { k: "Mobile app.", v: "React Native app for borrow/supply portfolios with real-time position tracking." },
      { k: "SDKs.", v: "For Cairo 2 contracts enabling under-collateralized lending and spending." },
      { k: "Incentives.", v: "Distribution logic for ~24K STRK (~$9.6K) disbursed weekly in the Starknet incentive program." },
      { k: "Cloud.", v: "EC2, CodePipeline and Lambda services snapshotting user actions for airdrops and campaigns." },
      { k: "Integrations.", v: "Lend and spend against Compound and AAVE collateral, modular across chains." },
    ],
  },
  {
    company: "Growexx",
    role: "Software Developer",
    dates: "Dec 2022 – Mar 2024",
    status: "COMPLETE",
    brief: "Full-stack features and backend services for client projects in JavaScript/TypeScript, delivered Agile.",
    points: [
      { k: "Mobile app.", v: "Shipped a React Native e-commerce app for a client: browsing, cart and checkout." },
      { k: "Full-stack.", v: "Backend services and features on cloud infrastructure across client engagements." },
    ],
  },
  {
    company: "Kazam EV Tech",
    role: "Backend Developer",
    dates: "Sep 2021 – Dec 2022",
    status: "COMPLETE",
    brief: "Backend for EV charging operations.",
    points: [
      { k: "IoT analytics.", v: "Architecture for data analytics and remote operations on EV chargers." },
      { k: "APIs.", v: "RESTful APIs for EV management systems on SQL-backed storage." },
    ],
  },
];

export const skills = [
  { name: "Systems", blurb: "Designing services that hold up under real traffic and real money.", where: "Plena billing, Kazam EV", items: ["System Design", "Distributed Systems", "Backend Architecture", "API Design", "Microservices", "Payments & Billing (Crypto + Fiat)"] },
  { name: "AI Agents", blurb: "Production LLM agents: tools, memory, orchestration.", where: "Plena Playground", items: ["Agent Orchestration", "MCP Servers", "LLM Tool-Calling", "Sub-Agent Architectures", "RAG", "Agent Memory", "Prompt Engineering"] },
  { name: "Mobile & Web", blurb: "Three React Native apps shipped across fintech and e-commerce.", where: "Noah, Hashstack, Growexx", items: ["React Native", "TypeScript", "JavaScript", "Node.js", "MERN Stack"] },
  { name: "Data", blurb: "Modeling, storage and retrieval, from SQL to vectors.", where: "Plena, Kanshi, Kazam", items: ["SQL", "NoSQL", "Data Modeling", "Caching", "Vector Databases", "Postgres", "Redis", "MongoDB"] },
  { name: "Cloud", blurb: "Deploying and running the services, not just writing them.", where: "Hashstack, Plena", items: ["AWS EC2", "AWS Lambda", "CodePipeline", "CI/CD", "Multi-tenant VM Infra"] },
  { name: "Languages", blurb: "Pick the right tool for the job.", where: "everywhere", items: ["TypeScript", "JavaScript", "Python", "Go", "Rust", "Cairo"] },
];

export const projects = [
  { name: "Kanshi", tag: "RUST · INDEXER", desc: "Rust integration for Apibara DNA that listens to Starknet events, with CLI-configurable filters and pluggable storage.", stack: ["Rust", "Starknet", "Postgres", "Redis", "MongoDB"], href: "https://github.com/roguedevs-hq/kanshi", link: "github.com/roguedevs-hq/kanshi" },
  { name: "SniQ", tag: "BOT · TRADING", desc: "Telegram bot that alerts users to new Starknet meme-coin launches, with built-in swap, gas handling and local-currency conversion.", stack: ["Telegram", "Starknet", "Swaps"], href: "https://beta.sniq.fun", link: "beta.sniq.fun" },
  { name: "WPL", tag: "MARKETPLACE · WEB3", desc: "Web3 freelance marketplace for designers, creators and devRels. Built with Starkware, payments via CopperX, $7K+ in volume. Mobile version in progress.", stack: ["Web3", "Payments", "Marketplace"], href: "https://thewp1.xyz", link: "thewp1.xyz" },
];

export const achievements = [
  { id: "boot", icon: "01", name: "System Online", hint: "Load the portfolio." },
  { id: "contact", icon: "02", name: "First Contact", hint: "Run any command in the console." },
  { id: "archivist", icon: "03", name: "Mission Archivist", hint: "Open every mission log." },
  { id: "polyglot", icon: "04", name: "Polyglot", hint: "Inspect every skill branch." },
  { id: "hire", icon: "05", name: "Recruiter Mode", hint: "Run the hire command." },
  { id: "sudo", icon: "06", name: "Nice Try", hint: "Attempt to sudo." },
] as const;

export type AchievementId = (typeof achievements)[number]["id"];
