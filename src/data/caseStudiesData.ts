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
    title: "Centralizing Multi-Location Inventory & Operations for Logistics Management",
    client: "Logistics & Distribution Client",
    industry: "Logistics & Supply Chain",
    summary:
      "Built a web-based operations platform that connected multiple warehouse locations into a single, real-time inventory management dashboard.",
    challenge:
      "The client used separate spreadsheets and manual email approvals across 14 warehouse locations, leading to inventory errors, delayed order processing, and poor visibility across branches.",
    solution:
      "Dhruvi Software Solutions built a custom web platform with automated order routing, inventory tracking, role-based approval workflows, and administrative reporting.",
    architectureDetails: [
      "Modular Node.js and PostgreSQL backend for reliable data storage",
      "Next.js web portal with instant search, filtering, and report export",
      "API connections for carrier tracking and shipping updates",
      "Role-based access permissions for warehouse staff and managers",
    ],
    results: [
      { metric: "100%", label: "Centralized inventory visibility across all locations" },
      { metric: "Real-Time", label: "Stock updates and order status tracking" },
      { metric: "Zero", label: "Manual spreadsheet dependency" },
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    featured: true,
    category: "Custom Software Engineering",
  },
  {
    id: "recruitment-platform-scaling",
    slug: "recruitment-platform-scaling",
    title: "Building Talentgate: Applicant Tracking & Candidate Pipeline Management",
    client: "In-House Product (Talentgate)",
    industry: "HR & Recruitment",
    summary:
      "Designed and developed Talentgate, a modern candidate pipeline management tool featuring drag-and-drop hiring stages and automated resume indexing.",
    challenge:
      "Traditional recruitment tools were often cluttered, slow, and lacked simple visual pipeline tracking, making candidate screening time-consuming for hiring teams.",
    solution:
      "Engineered Talentgate with a clean Kanban hiring pipeline, candidate evaluation scorecards, resume skill extraction, and email communication triggers.",
    architectureDetails: [
      "Resume parsing service for candidate CV skill extraction",
      "Multi-workspace architecture for company team access",
      "Interview feedback scorecards and rating rubrics",
      "Automated email notifications for candidate status updates",
    ],
    results: [
      { metric: "Visual", label: "Drag-and-drop hiring pipeline" },
      { metric: "Automated", label: "Resume parsing and skill extraction" },
      { metric: "Structured", label: "Team scorecards & candidate feedback" },
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    featured: true,
    category: "SaaS Product Engineering",
  },
  {
    id: "fintech-portal-modernization",
    slug: "fintech-portal-modernization",
    title: "Modernizing a Legacy Financial Dashboard into a Fast Web Application",
    client: "Financial Services Client",
    industry: "Finance & Services",
    summary:
      "Updated an older financial reporting dashboard into a fast, responsive React/Next.js application without disrupting ongoing daily operations.",
    challenge:
      "The client's legacy portal suffered from slow page loading times, outdated user interface controls, and unstable database queries during peak reporting periods.",
    solution:
      "Gradually refactored the legacy interface into a modern Next.js application while maintaining secure connections to core financial databases.",
    architectureDetails: [
      "Next.js App Router for fast rendering of financial data tables",
      "Secure user authentication and role-based permissions",
      "Optimized database queries for fast report generation",
      "Responsive layout for desktop and tablet access",
    ],
    results: [
      { metric: "Fast", label: "Page loading speed and responsive filters" },
      { metric: "Seamless", label: "Migration with zero daily business downtime" },
      { metric: "Modern", label: "Clean UI design for daily reporting" },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    featured: true,
    category: "Software Modernization",
  },
];
