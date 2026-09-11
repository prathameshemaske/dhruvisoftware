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
  schemaType: "SoftwareApplication";
  applicationCategory: string;
  operatingSystem: string;
}

export const productsData: ProductItem[] = [
  {
    id: "neojan",
    slug: "neojan",
    name: "Neojan",
    badge: "Built & Owned by Dhruvi Software Solutions",
    tagline: "Enterprise Operations & Business Workflow Intelligence Platform",
    description:
      "A high-performance business operating platform engineered to unify fragmented operational workflows, internal data pipelines, inventory tracking, and enterprise analytics into a real-time command center.",
    fullDescription:
      "Neojan was designed and built in-house by Dhruvi Software Solutions to eliminate manual process friction, spreadsheet dependency, and disconnected business tools. Built on a modular microservices architecture, Neojan empowers mid-market companies and growing enterprises to automate routine administrative tasks, monitor key operational KPIs in real time, and scale multi-departmental operations with multi-tenant security.",
    category: "Enterprise Operations SaaS",
    architectureType: "Cloud-Native Multi-Tenant Architecture",
    targetAudience: [
      "Mid-market & Enterprise Operations Teams",
      "Logistics & Supply Chain Managers",
      "Financial & Administrative Controllers",
      "Multi-branch Businesses & Service Providers",
    ],
    keyCapabilities: [
      {
        title: "Automated Workflow Engine",
        description:
          "Custom visual rules engine to trigger automated approvals, notifications, data transformations, and cross-departmental tasks.",
        icon: "Workflow",
      },
      {
        title: "Real-Time Operational Analytics",
        description:
          "Interactive executive dashboards providing instant metrics on throughput, operational bottlenecks, revenue leaks, and resource utilization.",
        icon: "BarChart3",
      },
      {
        title: "Unified Data Pipeline",
        description:
          "Seamless bi-directional integration with ERPs, CRMs, accounting software, and external webhooks.",
        icon: "Database",
      },
      {
        title: "Enterprise Role Security",
        description:
          "Granular role-based access control (RBAC), SSO authentication, audit logging, and field-level data encryption.",
        icon: "ShieldCheck",
      },
    ],
    modules: [
      { name: "Workflow Control Studio", detail: "Visual rule builder for automated task routing and trigger alerts." },
      { name: "Resource & Asset Hub", detail: "Real-time tracking of operational assets, inventory, and field teams." },
      { name: "Analytics & KPI Center", detail: "Dynamic charting, custom CSV/PDF report generation, and anomaly detection." },
      { name: "Integration Gateway", detail: "RESTful & GraphQL API management with webhook listeners." },
    ],
    techStack: ["React / Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS"],
    status: "Active Production SaaS",
    highlights: [
      "Built entirely in-house using modern product engineering practices",
      "Reduces manual administrative effort by up to 65%",
      "Sub-second query response times for enterprise datasets",
      "Continuous weekly deployment cycle",
    ],
    schemaType: "SoftwareApplication",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-based / Cross-Platform",
  },
  {
    id: "talentgate",
    slug: "talentgate",
    name: "Talentgate",
    badge: "Built & Owned by Dhruvi Software Solutions",
    tagline: "Next-Generation AI Recruitment & Talent Acquisition Management Suite",
    description:
      "An end-to-end recruitment platform that streamlines candidate sourcing, automated resume parsing, collaborative interview evaluation, and hiring pipeline analytics.",
    fullDescription:
      "Talentgate is our proprietary HR tech platform engineered specifically to solve hiring bottlenecks for growing technology teams and modern HR departments. By replacing slow, fragmented hiring tools with an intuitive Kanban pipeline, automated interview scheduling, AI-assisted resume skill matching, and candidate communication hub, Talentgate enables organizations to hire top-tier talent faster and with greater precision.",
    category: "HR & Recruitment SaaS",
    architectureType: "High-Concurrency SaaS Platform",
    targetAudience: [
      "HR & Talent Acquisition Teams",
      "Recruitment Agencies & Executive Search Firms",
      "Fast-Growing Tech Startups & Enterprises",
      "Engineering Managers & Hiring Committees",
    ],
    keyCapabilities: [
      {
        title: "Smart Candidate Kanban",
        description:
          "Visual drag-and-drop hiring stages with automated stage triggers, candidate scorecards, and team feedback collection.",
        icon: "Kanban",
      },
      {
        title: "AI Resume Parsing & Matching",
        description:
          "Instant parsing of candidate resumes with intelligent skill extraction and job-description match scoring.",
        icon: "Sparkles",
      },
      {
        title: "Collaborative Evaluation",
        description:
          "Structured interview scorecards, customizable rating rubrics, and centralized feedback feeds for hiring panels.",
        icon: "Users",
      },
      {
        title: "Automated Candidate Communication",
        description:
          "Email template triggers, interview calendar sync, and automated status updates to eliminate candidate ghosting.",
        icon: "Mail",
      },
    ],
    modules: [
      { name: "Job Posting & Distribution", detail: "Multi-channel job posting and branded career portal generator." },
      { name: "Resume Parsing & Indexing", detail: "Automated document scanning, skill indexing, and search filters." },
      { name: "Interview & Assessment Suite", detail: "Calendar scheduling integration, scorecards, and evaluation matrices." },
      { name: "Recruitment Analytics", detail: "Time-to-hire, source effectiveness, and bottleneck identification charts." },
    ],
    techStack: ["Next.js", "TypeScript", "Python / AI Engine", "PostgreSQL", "Tailwind CSS", "Vercel / AWS"],
    status: "Active Production SaaS",
    highlights: [
      "Engineered from the ground up by Dhruvi Software Solutions",
      "Accelerates time-to-hire by 45%",
      "Structured evaluation rubrics eliminate hiring bias",
      "Seamless calendar and video platform integrations",
    ],
    schemaType: "SoftwareApplication",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-based / Cross-Platform",
  },
];
