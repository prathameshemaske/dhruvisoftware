export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  fullDescription: string;
  category: string;
  architectureType: string;
  targetAudience: string[];
  keyCapabilities: Array<{ title: string; description: string; icon: string }>;
  modules: Array<{ name: string; detail: string }>;
  techStack: string[];
  status: string;
  highlights: string[];
  externalUrl?: string;
  schemaType: "SoftwareApplication";
  applicationCategory: string;
  operatingSystem: string;
}

export const productsData: ProductItem[] = [
  {
    id: "neojan",
    slug: "neojan",
    name: "Neojan",
    badge: "Built & Owned Platform",
    tagline: "WORK SMARTER. GROW FASTER.",
    description:
      "A modern business platform designed to simplify operations. Unifies operational workflows, team tracking, inventory, and reporting into a single dashboard.",
    fullDescription:
      "Neojan was designed and built in-house by Dhruvi Software Solutions to help businesses streamline daily operations. By bringing inventory tracking, task routing, team permissions, and reports together, Neojan reduces manual data entry and provides clear visibility across your company.",
    category: "Business Operations Platform",
    architectureType: "Cloud Web Platform",
    targetAudience: [
      "Operations & Business Managers",
      "Logistics & Inventory Teams",
      "Multi-branch Businesses",
      "Service Providers & Agencies",
    ],
    keyCapabilities: [
      {
        title: "Automated Workflows",
        description:
          "Set up automatic notifications, approvals, and task assignments across departments.",
        icon: "Workflow",
      },
      {
        title: "Real-Time Reports",
        description:
          "Clear dashboards showing sales, inventory levels, order progress, and team performance.",
        icon: "BarChart3",
      },
      {
        title: "System Connections",
        description:
          "Connect with your existing accounting tools, inventory tools, and custom APIs.",
        icon: "Database",
      },
      {
        title: "Role-Based Security",
        description:
          "Manage access permissions safely for employees, managers, and administrators.",
        icon: "ShieldCheck",
      },
    ],
    modules: [
      { name: "Workflow Studio", detail: "Custom rules for task updates and team notifications." },
      { name: "Inventory & Assets", detail: "Track stock levels and equipment across locations." },
      { name: "Reports & Analytics", detail: "Generate PDF and CSV reports on business activity." },
      { name: "API Gateway", detail: "Connect external services and webhooks easily." },
    ],
    techStack: ["React / Next.js", "Node.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    status: "Live Platform",
    highlights: [
      "Designed and built completely in-house",
      "Centralizes scattered spreadsheets and manual processes",
      "Fast response times for search and filtering",
      "Regular updates and support",
    ],
    externalUrl: "https://www.neojan.com",
    schemaType: "SoftwareApplication",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-based / Cross-Platform",
  },
  {
    id: "talentgate",
    slug: "talentgate",
    name: "Talentgate",
    badge: "Launching Soon",
    tagline: "PEOPLE | OPPORTUNITIES | GROWTH",
    description:
      "A smart talent platform connecting candidates and opportunities. Helps recruiters and hiring teams organize applicant pipelines and interview scheduling.",
    fullDescription:
      "Talentgate is our upcoming recruitment platform built to make hiring simpler for growing teams. It features a drag-and-drop applicant tracking pipeline, automated interview scheduling, resume skill extraction, and candidate evaluation tools.",
    category: "HR & Recruitment Suite",
    architectureType: "SaaS Application",
    targetAudience: [
      "HR & Recruitment Teams",
      "Hiring Managers",
      "Growing Companies & Startups",
    ],
    keyCapabilities: [
      {
        title: "Visual Candidate Pipeline",
        description:
          "Drag-and-drop Kanban board to move candidates smoothly through interview stages.",
        icon: "Kanban",
      },
      {
        title: "Resume Parsing",
        description:
          "Extract key skills and experience automatically from uploaded candidate CVs.",
        icon: "Sparkles",
      },
      {
        title: "Collaborative Feedback",
        description:
          "Scorecards and team rating rubrics so interviewers can evaluate candidates fairly.",
        icon: "Users",
      },
      {
        title: "Candidate Updates",
        description:
          "Automated email notifications to keep candidates updated throughout the hiring process.",
        icon: "Mail",
      },
    ],
    modules: [
      { name: "Job Listings", detail: "Create and publish open roles with clean career pages." },
      { name: "Resume Indexing", detail: "Search candidates by skill, experience, and keywords." },
      { name: "Interview Tools", detail: "Schedule interviews and collect team scorecards." },
      { name: "Hiring Reports", detail: "Track application volume and hiring timelines." },
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    status: "Launching Soon",
    highlights: [
      "Built in-house by Dhruvi Software Solutions",
      "Designed for modern hiring teams and HR managers",
      "Clean, simple interface for recruiters and candidates",
      "Integrated calendar scheduling",
    ],
    schemaType: "SoftwareApplication",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-based / Cross-Platform",
  },
];
