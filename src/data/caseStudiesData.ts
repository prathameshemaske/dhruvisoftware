export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  architectureDetails: string[];
  results: Array<{ metric: string; label: string }>;
  techStack: string[];
  featured: boolean;
  category: string;
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "supply-chain-automation",
    slug: "supply-chain-automation",
    title: "Modernizing Multi-Location Inventory & Workflow Control for Global Logistics Firm",
    client: "Global Logistics Provider",
    industry: "Logistics & Supply Chain",
    summary:
      "Engineered an automated business operations engine that unified 14 regional warehouse databases into a single real-time command dashboard.",
    challenge:
      "The client relied on fragmented legacy spreadsheets and manual email approvals across 14 warehouse locations, leading to inventory discrepancies, delayed shipping schedules, and poor visibility into order throughput.",
    solution:
      "Dhruvi Software Solutions engineered a custom cloud-native operations platform featuring automated order routing, real-time inventory synchronization, role-based approval workflows, and interactive executive analytics.",
    architectureDetails: [
      "Microservices architecture built with Node.js and PostgreSQL read-replicas",
      "Redis event cache handling over 15,000 inventory updates per minute",
      "Next.js administrative portal with sub-second data filtering and export engines",
      "Webhook bridge connecting carrier APIs for real-time tracking updates",
    ],
    results: [
      { metric: "65%", label: "Reduction in order processing time" },
      { metric: "99.8%", label: "Inventory tracking accuracy" },
      { metric: "$140k", label: "Annual operational cost savings" },
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    featured: true,
    category: "Custom Software Engineering",
  },
  {
    id: "recruitment-platform-scaling",
    slug: "recruitment-platform-scaling",
    title: "Scaling Talentgate: AI Resume Parsing & Kanban Candidate Pipelines for Enterprise HR",
    client: "Internal Owned SaaS Platform (Talentgate)",
    industry: "HR & Talent Acquisition",
    summary:
      "Architected a high-concurrency SaaS recruitment portal handling thousands of candidate applications with instant AI resume indexing.",
    challenge:
      "Traditional applicant tracking systems were slow, cluttered, and lacked automated resume skill parsing, causing recruiters to spend hours manually screening CVs.",
    solution:
      "Engineered Talentgate as a proprietary SaaS suite with a drag-and-drop Kanban hiring workflow, automated email communication triggers, and asynchronous AI resume parsing.",
    architectureDetails: [
      "Asynchronous Python worker queue for OCR and candidate resume skill extraction",
      "Multi-tenant database schema ensuring tenant data privacy",
      "Real-time WebSocket notifications for interview feedback and scorecards",
    ],
    results: [
      { metric: "45%", label: "Faster time-to-hire across client organizations" },
      { metric: "10,000+", label: "Resumes parsed daily with sub-2s latency" },
      { metric: "99.95%", label: "Uptime SLA maintained" },
    ],
    techStack: ["Next.js", "TypeScript", "Python", "PostgreSQL", "Tailwind CSS", "AWS Lambda"],
    featured: true,
    category: "SaaS Product Engineering",
  },
  {
    id: "fintech-portal-modernization",
    slug: "fintech-portal-modernization",
    title: "Refactoring Legacy Financial Analytics Monolith into Cloud Micro-Frontends",
    client: "Regional Financial Services Network",
    industry: "Finance & Fintech",
    summary:
      "Modernized a 10-year-old legacy portal into a high-security, fast React/Next.js dashboard with zero downtime during migration.",
    challenge:
      "The client's legacy codebase suffered from slow page loads (>8 seconds), security vulnerabilities, and fragile database connections that crashed during end-of-month financial reporting.",
    solution:
      "Implemented a Strangler Fig migration pattern, building a modern Next.js frontend with isolated microservices APIs while preserving existing transactional databases.",
    architectureDetails: [
      "Next.js App Router for server-rendered financial reporting tables",
      "JWT + OAuth2 authentication with multi-factor biometric enforcement",
      "Optimized SQL indexing reducing end-of-month reporting query times by 80%",
    ],
    results: [
      { metric: "1.2s", label: "Average page load speed (down from 8.4s)" },
      { metric: "0", label: "Downtime minutes during migration" },
      { metric: "100%", label: "OWASP Top 10 compliance score" },
    ],
    techStack: ["Next.js", "React", "TypeScript", ".NET Core", "PostgreSQL", "Azure"],
    featured: true,
    category: "Software Modernization",
  },
];
