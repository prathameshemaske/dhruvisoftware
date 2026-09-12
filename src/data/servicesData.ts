export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  benefits: string[];
  deliverables: string[];
  process: string[];
  technologies: string[];
  seoKeywords: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "custom-software-development",
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortDesc: "Software applications built specifically around your business rules and daily workflows.",
    fullDesc:
      "Ready-made software doesn't always fit your exact business operations. We build custom software platforms tailored to your business logic, employee tools, and operational needs. From automated workflows to management dashboards, we help you turn routine work into clear, efficient digital systems.",
    icon: "Code2",
    benefits: [
      "100% built around your actual business processes",
      "No recurring per-user software license fees",
      "Full ownership of source code and data",
      "Modular foundation designed to grow with your business",
    ],
    deliverables: [
      "Custom Web & Desktop Business Apps",
      "Internal Workflow Automation Tools",
      "Centralized Management Dashboards",
      "Automated Reports & Data Exports",
    ],
    process: [
      "Requirement Gathering & Business Mapping",
      "Database & System Design",
      "Development & Testing Sprints",
      "Quality Assurance & Security Checks",
      "Deployment & Ongoing Support",
    ],
    technologies: ["Node.js", "TypeScript", "React", "Next.js", "PostgreSQL", "Python", "Tailwind CSS"],
    seoKeywords: [
      "custom software development company",
      "custom software development company India",
      "business software development",
      "tailored business application engineering",
    ],
  },
  {
    id: "saas-development",
    slug: "saas-development",
    title: "SaaS Product Development",
    shortDesc: "Turn software ideas into reliable, multi-user cloud applications with subscription capabilities.",
    fullDesc:
      "Because we build and run our own SaaS platforms (Neojan and Talentgate), we understand what it takes to launch and scale a web application. We help startups and businesses design, develop, and launch cloud-based software built for real users, smooth onboarding, and reliable growth.",
    icon: "Cloud",
    benefits: [
      "Secure user account and company workspace isolation",
      "Automated subscription payments and billing",
      "Fast page loads and clean responsive interfaces",
      "Automated deployment setup for easy feature updates",
    ],
    deliverables: [
      "Multi-User Web Applications",
      "Admin Control Panels & Workspace Portals",
      "Payment & Billing Gateway Integrations",
      "Usage Reports & System Activity Logs",
    ],
    process: [
      "Product Scoping & Feature Planning",
      "User Interface & Wireframe Design",
      "Backend & API Development",
      "Payment & Auth Integration",
      "Product Launch & Monitoring",
    ],
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "Stripe API"],
    seoKeywords: [
      "SaaS development company",
      "SaaS product development services",
      "multi tenant SaaS architecture",
      "SaaS application development",
    ],
  },
  {
    id: "web-application-development",
    slug: "web-application-development",
    title: "Web Application Development",
    shortDesc: "Fast, responsive web applications built with modern frontend and backend tools.",
    fullDesc:
      "We design and build responsive web applications that work smoothly on all modern web browsers. Whether you need a customer portal, an internal team dashboard, or a web platform to manage orders, we focus on fast page loads, clear user interfaces, and secure data handling.",
    icon: "Globe",
    benefits: [
      "Fast page loading speeds across devices",
      "Fully responsive on mobile, tablet, and desktop",
      "SEO-friendly pages and modern web design",
      "Built-in security and data protection",
    ],
    deliverables: [
      "Customer & Client Web Portals",
      "Business Admin Dashboards",
      "E-Commerce & Service Marketplaces",
      "Web Management Systems",
    ],
    process: [
      "User Journey & Design Layouts",
      "Frontend & Component Setup",
      "Backend Integration & APIs",
      "Cross-Browser & Mobile Testing",
      "Launch & Speed Optimization",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Node.js"],
    seoKeywords: [
      "web application development company",
      "custom web app development",
      "Next.js app engineering",
      "high performance web applications",
    ],
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDesc: "iOS and Android mobile applications connected to secure cloud backends.",
    fullDesc:
      "Deliver easy-to-use mobile apps to your users on iOS and Android. We build mobile applications with clean touch navigation, push notifications, offline support, and secure user logins connected directly to your central backend data.",
    icon: "Smartphone",
    benefits: [
      "Single codebase efficiency for both iOS and Android",
      "Native device integration (Camera, GPS, Notifications)",
      "Offline caching so apps work smoothly on poor network",
      "Guidance through App Store and Google Play publication",
    ],
    deliverables: [
      "iOS & Android Mobile Applications",
      "Mobile Backend API Services",
      "Push Notification Systems",
      "App Store & Play Store Submissions",
    ],
    process: [
      "Mobile Screen Wireframing & Design",
      "App Development & API Connection",
      "Device & Resolution Testing",
      "App Store Publishing & Setup",
    ],
    technologies: ["React Native", "TypeScript", "iOS", "Android", "Firebase", "Node.js"],
    seoKeywords: [
      "mobile app development company",
      "iOS and Android app development",
      "React Native development services",
      "cross platform mobile development",
    ],
  },
  {
    id: "mvp-development",
    slug: "mvp-development",
    title: "MVP Development",
    shortDesc: "Turn early product ideas into working software to validate your market quickly.",
    fullDesc:
      "Building a Minimum Viable Product (MVP) should be focused and clear. We build essential, production-ready MVPs in a matter of weeks so you can test core features with real users, gather early feedback, and validate your business concept without over-spending.",
    icon: "Rocket",
    benefits: [
      "Quick turn-around time for early testing",
      "Clean codebase ready to expand as you grow",
      "Focus on essential high-value features",
      "Clear milestone pricing and scope",
    ],
    deliverables: [
      "Working Core Application MVP",
      "Clickable UI Prototype",
      "Cloud Setup & Database",
      "Product Roadmap for Future Phases",
    ],
    process: [
      "Core Feature Scoping",
      "UI Wireframing & Design",
      "Agile Development Sprints",
      "Testing & Feedback Review",
      "Public Launch",
    ],
    technologies: ["Next.js", "React Native", "Node.js", "Tailwind CSS", "PostgreSQL"],
    seoKeywords: [
      "MVP development company",
      "SaaS MVP development",
      "startup software MVP builder",
      "rapid product prototyping",
    ],
  },
  {
    id: "product-engineering",
    slug: "product-engineering",
    title: "Product Engineering",
    shortDesc: "Full product lifecycle development — design, engineering, launch, and long-term improvements.",
    fullDesc:
      "Building a successful product takes careful planning from initial concept through continuous updates. We partner with companies to manage application design, backend architecture, automated testing, cloud infrastructure, and ongoing feature releases.",
    icon: "Cpu",
    benefits: [
      "End-to-end technical management and development",
      "Regular sprint updates and predictable timelines",
      "Reliable architecture built to handle increasing usage",
      "Clear documentation and easy handoffs",
    ],
    deliverables: [
      "Complete Technical Architecture",
      "Automated Testing & Deployment Setup",
      "API & System Documentation",
      "Ongoing Development Sprints",
    ],
    process: [
      "Discovery & System Planning",
      "Interface Design & Component Library",
      "Development & Continuous Testing",
      "Performance Benchmarking",
      "Ongoing Feature Iterations",
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "Docker", "PostgreSQL"],
    seoKeywords: [
      "product engineering company",
      "digital product engineering services",
      "software product development studio",
      "full lifecycle product development",
    ],
  },
  {
    id: "enterprise-software-development",
    slug: "enterprise-software-development",
    title: "Enterprise Software Development",
    shortDesc: "Secure, reliable software for company operations, multi-department teams, and business systems.",
    fullDesc:
      "Growing companies require software that supports team permissions, handles daily workloads reliably, and connects with existing business tools. We build secure enterprise applications with role-based access, audit trails, and stable backend systems.",
    icon: "Building2",
    benefits: [
      "Role-based access control and security permissions",
      "Reliable data handling for daily operational work",
      "Connects with existing databases, CRMs, or ERPs",
      "Clear team documentation and ongoing support",
    ],
    deliverables: [
      "Custom Enterprise Operations Tools",
      "Corporate Intranets & Portals",
      "Data Management Dashboards",
      "User Permission & Access Systems",
    ],
    process: [
      "Business Workflow Assessment",
      "Security & Access Control Setup",
      "Module-by-Module Development",
      "Testing & Team Acceptance",
      "Guided Rollout & Training",
    ],
    technologies: ["Node.js", "React", "Next.js", "PostgreSQL", "Tailwind CSS"],
    seoKeywords: [
      "enterprise software development company",
      "custom enterprise applications",
      "scalable business software engineering",
      "enterprise digital transformation",
    ],
  },
  {
    id: "api-integration",
    slug: "api-integration",
    title: "API & System Integration",
    shortDesc: "Connect separate business tools, databases, and payment gateways so data flows automatically.",
    fullDesc:
      "Disconnected software tools lead to duplicate data entry and manual errors. Our integration team builds secure APIs and connectors that let your internal software, payment processors, accounting packages, and third-party tools exchange data automatically in real time.",
    icon: "Network",
    benefits: [
      "Eliminates duplicate manual data entry",
      "Keeps data synchronized across platforms automatically",
      "Clear API documentation and setup",
      "Reliable error-checking and data logging",
    ],
    deliverables: [
      "Custom RESTful APIs & Webhooks",
      "Third-Party Software Connectors",
      "Payment & Billing Gateway Integrations",
      "Automated Data Synchronization Services",
    ],
    process: [
      "API & System Audit",
      "Data Mapping & Rules Definition",
      "Connector Development & Testing",
      "Error Handling Setup",
      "Deployment & Activity Monitoring",
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "REST APIs", "Webhooks"],
    seoKeywords: [
      "API integration services",
      "system integration development company",
      "custom API development",
      "microservices API development",
    ],
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps Services",
    shortDesc: "Cloud setup, server management, and automated deployment pipelines for reliable hosting.",
    fullDesc:
      "Modern applications need stable, secure cloud servers to remain fast and accessible. We configure and manage cloud hosting environments on AWS, Google Cloud, or DigitalOcean, establishing automated deployment pipelines so updates can be released smoothly.",
    icon: "Server",
    benefits: [
      "Automated deployment processes for updates",
      "Server setups that scale smoothly during traffic spikes",
      "Cost-conscious server resource management",
      "System health and server uptime monitoring",
    ],
    deliverables: [
      "Cloud Infrastructure Configuration",
      "Automated Deployment Pipelines (CI/CD)",
      "Docker Containerization",
      "Logging & Server Alerting",
    ],
    process: [
      "Server Requirement Review",
      "Cloud Environment Setup",
      "Deployment Pipeline Setup",
      "Security & Backup Configuration",
      "Continuous Monitoring",
    ],
    technologies: ["AWS", "Google Cloud", "Docker", "GitHub Actions", "Nginx"],
    seoKeywords: [
      "cloud devops company",
      "cloud engineering services",
      "AWS devops automation",
      "Docker Kubernetes consulting",
    ],
  },
  {
    id: "software-modernization",
    slug: "software-modernization",
    title: "Software Modernization",
    shortDesc: "Update older software codebases, slow databases, and legacy screens into modern web apps.",
    fullDesc:
      "Older software systems can become slow, hard to maintain, and difficult for employees to use. We help upgrade existing applications step-by-step — updating outdated code, improving response speeds, and designing clean modern web interfaces without interrupting daily operations.",
    icon: "RefreshCw",
    benefits: [
      "No interruption to daily business activities during updates",
      "Faster application loading speeds and modern design",
      "Removal of outdated tech security risks",
      "Easier maintenance and feature additions in the future",
    ],
    deliverables: [
      "Existing Codebase Audit & Upgrade Plan",
      "Step-by-Step UI & Backend Modernization",
      "Database Optimization & Data Migration",
      "Responsive Web & Mobile Interfaces",
    ],
    process: [
      "System Audit & Requirement Review",
      "Step-by-Step Migration Plan",
      "Incremental Feature Upgrades",
      "Parallel Testing & Verification",
      "Final Switchover",
    ],
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL"],
    seoKeywords: [
      "software modernization services",
      "legacy software modernization company",
      "application modernization company",
      "refactoring legacy codebases",
    ],
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Product Design",
    shortDesc: "Clean, intuitive user interfaces and screen layouts designed for simple operation.",
    fullDesc:
      "Good software starts with clear interface design. Our UI/UX designers create intuitive, easy-to-navigate screens for web and mobile apps so users can complete tasks quickly without confusion or lengthy training.",
    icon: "Layout",
    benefits: [
      "Saves user time with simple, intuitive navigation",
      "Higher user adoption for internal and client tools",
      "Consistent UI designs across web and mobile screens",
      "Clear design handoffs for faster development",
    ],
    deliverables: [
      "User Journeys & Screen Layouts",
      "Interactive Figma Design Prototypes",
      "UI Design System & Color Standards",
      "Responsive Mobile & Desktop Screens",
    ],
    process: [
      "User Need & Screen Flow Review",
      "Wireframe & Layout Design",
      "Visual UI & Prototype Creation",
      "Feedback Review & Testing",
      "Developer Design Handoff",
    ],
    technologies: ["Figma", "Tailwind CSS", "Design Systems"],
    seoKeywords: [
      "UI UX design company for software",
      "SaaS UI UX design studio",
      "product design services",
      "custom enterprise UI UX design",
    ],
  },
  {
    id: "maintenance-support",
    slug: "maintenance-support",
    title: "Maintenance & Support",
    shortDesc: "Reliable bug fixes, security updates, cloud monitoring, and feature improvements.",
    fullDesc:
      "Software requires ongoing care after launch. Our maintenance and support services keep your web and mobile applications secure, updated, and running smoothly with bug fixes, performance checks, and feature enhancements.",
    icon: "ShieldAlert",
    benefits: [
      "Prompt support response for technical questions and issues",
      "Regular security patches and dependency updates",
      "Ongoing performance checks and database cleanups",
      "Flexible monthly support options",
    ],
    deliverables: [
      "System Health & Server Uptime Monitoring",
      "Scheduled Security & Software Updates",
      "Bug Fixes & Technical Support",
      "Continuous Minor Feature Additions",
    ],
    process: [
      "System Onboarding & Health Check",
      "Support Channel Setup",
      "Regular Updates & Backups",
      "Monthly Review & Status Summary",
    ],
    technologies: ["AWS", "GitHub Actions", "Docker", "PostgreSQL"],
    seoKeywords: [
      "software maintenance and support services",
      "application maintenance company",
      "SaaS software maintenance partner",
      "SLA technical support software",
    ],
  },
];
