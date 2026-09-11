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
    shortDesc: "Business-specific software platforms engineered around your exact workflows, rules, and operational requirements.",
    fullDesc:
      "Off-the-shelf software forces your business to compromise on operational workflows. Our custom software development service engineers tailored digital platforms designed specifically around your business logic, data models, compliance needs, and growth strategy. From automated backend workflows to intuitive employee tools, we turn complex operational challenges into competitive digital assets.",
    icon: "Code2",
    benefits: [
      "100% alignment with proprietary business workflows",
      "Zero recurring per-user licensing fees",
      "Full ownership of source code, data, and IP",
      "Modular architecture built for long-term scalability",
    ],
    deliverables: [
      "Custom Web & Desktop Business Applications",
      "Internal Workflow Automation Tools",
      "Centralized Administrative Dashboards",
      "Automated Reporting & Data Export Engines",
    ],
    process: [
      "Workflow & Requirement Mapping",
      "Database Schema & Architecture Design",
      "Iterative Engineering Sprints",
      "Security Auditing & Rigorous Quality Assurance",
      "Deployment & Post-Launch Optimizations",
    ],
    technologies: ["Node.js", "TypeScript", "React", "Next.js", "PostgreSQL", "Python", "Docker", "AWS"],
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
    shortDesc: "From product architecture and multi-tenant isolation to scalable cloud infrastructure and subscription management.",
    fullDesc:
      "As a software firm that builds and operates its own SaaS platforms (Neojan and Talentgate), we bring genuine product engineering expertise to your SaaS product lifecycle. We help startups and enterprises convert software concepts into high-converting, resilient, multi-tenant SaaS products built for user growth, low churn, and rapid feature iteration.",
    icon: "Cloud",
    benefits: [
      "Multi-tenant database and data isolation patterns",
      "Automated tenant onboarding and subscription gateways",
      "Sub-second page loads and optimized API endpoints",
      "Continuous deployment pipelines for zero-downtime releases",
    ],
    deliverables: [
      "Multi-Tenant SaaS Web Applications",
      "Tenant Management & Admin Portals",
      "Subscription & Billing Gateway Integrations (Stripe / Razorpay)",
      "Usage Analytics & Event Logging Modules",
    ],
    process: [
      "Product Discovery & Feature Scoping",
      "Multi-Tenant Tenant Isolation Planning",
      "UX/UI Prototype & Design System",
      "Cloud Infrastructure Setup (IaC)",
      "SaaS Launch & Growth Optimization",
    ],
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Stripe API", "AWS Lambda"],
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
    shortDesc: "High-performance, progressive, accessible web applications built with modern frontend and backend technology stacks.",
    fullDesc:
      "We design and build fast, responsive, and secure web applications that deliver desktop-class user experiences in modern web browsers. Whether you are building a customer-facing portal, an enterprise intranet, or an interactive data management system, our web applications leverage modern server rendering, responsive micro-layouts, and secure REST/GraphQL backend architecture.",
    icon: "Globe",
    benefits: [
      "Lightning-fast load times and high Lighthouse performance",
      "Full mobile and tablet responsiveness",
      "SEO-friendly server-side rendering (SSR)",
      "Robust security (CSRF, XSS, rate limiting)",
    ],
    deliverables: [
      "Customer-Facing Web Portals",
      "Progressive Web Apps (PWA)",
      "Enterprise Intranets & Dashboard Hubs",
      "E-Commerce & Service Marketplaces",
    ],
    process: [
      "User Journey & Interface Mapping",
      "Component Architecture Setup",
      "Frontend & API Integration",
      "Cross-Browser & Device Testing",
      "Performance & Core Web Vitals Optimization",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "REST APIs", "Node.js"],
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
    shortDesc: "Native and cross-platform iOS and Android mobile applications seamlessly connected to scalable cloud backend APIs.",
    fullDesc:
      "Deliver native-quality mobile experiences to your users on iOS and Android. We craft mobile applications with clean touch controls, offline sync capabilities, real-time push notifications, and secure authentication, ensuring seamless synchronization with your core backend ecosystem.",
    icon: "Smartphone",
    benefits: [
      "Single codebase efficiency for iOS and Android",
      "Native device integration (Camera, GPS, Biometrics)",
      "Offline data synchronization and local caching",
      "App Store and Google Play deployment management",
    ],
    deliverables: [
      "Cross-Platform iOS & Android Mobile Apps",
      "Mobile Backend API Services",
      "Push Notification & Messaging Engines",
      "App Store Optimization & Submissions",
    ],
    process: [
      "Mobile UX Screen Mapping",
      "Cross-Platform Component Build",
      "API & Offline Sync Development",
      "Device Matrix Testing",
      "App Store Deployment & Monitoring",
    ],
    technologies: ["React Native", "Flutter", "TypeScript", "iOS", "Android", "Firebase", "Node.js"],
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
    shortDesc: "Rapidly convert product concepts into scalable, technically sound Minimum Viable Products for market validation.",
    fullDesc:
      "Launching an MVP shouldn't mean cutting corners on software architecture. We build focused, production-grade MVPs in 6 to 10 weeks, giving founders and enterprise innovation teams the essential features needed to validate product demand, secure investor backing, and gather real user feedback without incurring catastrophic technical debt.",
    icon: "Rocket",
    benefits: [
      "Fast time-to-market (6-10 weeks average)",
      "Production-ready codebase built for future expansion",
      "Focus on core value proposition features",
      "Transparent fixed-milestone pricing",
    ],
    deliverables: [
      "Functional Core MVP Application",
      "Interactive Product Prototype",
      "Scalable Cloud Infrastructure Blueprint",
      "Product Roadmap & Phase 2 Recommendations",
    ],
    process: [
      "Value Proposition & Feature Scoping",
      "Rapid Wireframing & UX Design",
      "Agile Sprint Execution",
      "User Acceptance & Alpha Testing",
      "Public Beta Deployment",
    ],
    technologies: ["Next.js", "React Native", "Node.js", "Tailwind CSS", "PostgreSQL", "Supabase / AWS"],
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
    shortDesc: "End-to-end product lifecycle engineering — from architecture and user experience to DevOps, scaling, and feature continuous delivery.",
    fullDesc:
      "Product engineering requires a holistic approach that balances business strategy, user experience, system resilience, and continuous evolution. We act as your long-term product engineering partner, managing architecture design, automated testing, cloud infrastructure, performance tuning, and ongoing product enhancements.",
    icon: "Cpu",
    benefits: [
      "Full lifecycle technical leadership and execution",
      "Reduced time-to-market for continuous feature releases",
      "Zero single points of failure in cloud architecture",
      "Agile sprint cadences aligned with business milestones",
    ],
    deliverables: [
      "Complete Technical Product Architecture",
      "Automated CI/CD Build Pipelines",
      "Comprehensive API & System Documentation",
      "Continuous Engineering Sprint Cadences",
    ],
    process: [
      "Technical Discovery & Architectural Blueprint",
      "Design System & UI Component Engineering",
      "Continuous Integration & Test-Driven Build",
      "Performance Benchmarking & Load Testing",
      "Iterative Product Roadmap Evolution",
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "Docker", "Kubernetes", "PostgreSQL", "AWS"],
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
    shortDesc: "Secure, scalable, high-concurrency software engineered for enterprise organizational workflows and compliance standards.",
    fullDesc:
      "Large-scale enterprises require software platforms that enforce strict security policies, support high transactional volumes, and integrate seamlessly with legacy corporate systems. We engineer robust enterprise applications equipped with SSO, audit trails, role-based governance, and fault-tolerant cloud infrastructure.",
    icon: "Building2",
    benefits: [
      "Enterprise security compliance & RBAC access controls",
      "High transaction throughput and zero-downtime reliability",
      "Seamless integration with legacy ERPs, CRMs, and databases",
      "Comprehensive SLA support and system monitoring",
    ],
    deliverables: [
      "Enterprise Resource Planning (ERP) Modules",
      "Custom Corporate Intranets & Portals",
      "High-Security Data Processing Engines",
      "Compliance & Audit Logging Subsystems",
    ],
    process: [
      "Enterprise Architecture Assessment",
      "Security & Compliance Strategy Formulation",
      "Incremental Module Development",
      "Integration & Penetration Testing",
      "Managed Enterprise Rollout & Training",
    ],
    technologies: [".NET", "Node.js", "Java", "React", "PostgreSQL", "SQL Server", "Docker", "Azure / AWS"],
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
    shortDesc: "Connect disparate software platforms, databases, third-party APIs, and business applications into unified data pipelines.",
    fullDesc:
      "Data silos slow down modern businesses. Our integration engineering team builds secure RESTful and GraphQL APIs, webhook event bridges, and ETL pipelines that allow your internal software platforms, payment gateways, CRMs, ERPs, and third-party tools to communicate automatically in real time.",
    icon: "Network",
    benefits: [
      "Elimination of manual data re-entry between systems",
      "Real-time data synchronization across cloud platforms",
      "Standardized API documentation & versioning",
      "High fault tolerance with automated queue retry mechanisms",
    ],
    deliverables: [
      "Custom RESTful & GraphQL Microservice APIs",
      "Third-Party SaaS API Connectors",
      "Real-Time Webhook Listener Engines",
      "Automated ETL & Database Sync Services",
    ],
    process: [
      "API & Schema Audit",
      "Data Flow & Mapping Specification",
      "Connector & Gateway Engineering",
      "Payload Validation & Load Testing",
      "Production Deployment & Log Monitoring",
    ],
    technologies: ["Node.js", "Python", "GraphQL", "PostgreSQL", "Redis", "Kafka", "RabbitMQ", "AWS API Gateway"],
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
    shortDesc: "Automated infrastructure, containerization, CI/CD pipelines, and cloud architecture built for 99.9% availability.",
    fullDesc:
      "Modern software requires resilient, automated cloud infrastructure. We design, provision, and maintain secure cloud environments on AWS, Google Cloud, and Azure. Through Infrastructure as Code (IaC), automated CI/CD deployment pipelines, and active 24/7 monitoring, we keep your applications fast, reliable, and cost-optimized.",
    icon: "Server",
    benefits: [
      "Automated one-click deployment pipelines",
      "Auto-scaling infrastructure to handle traffic spikes",
      "Up to 35% reduction in cloud server overhead costs",
      "Proactive 24/7 automated uptime and error monitoring",
    ],
    deliverables: [
      "Cloud Infrastructure Blueprints (Terraform / Docker)",
      "Automated CI/CD Pipelines (GitHub Actions / GitLab CI)",
      "Container Orchestration (Kubernetes / ECS)",
      "Centralized Logging & Real-Time Alerting Hubs",
    ],
    process: [
      "Cloud Infrastructure Audit",
      "Infrastructure-as-Code Setup",
      "CI/CD Pipeline Configuration",
      "Security Hardening & Backup Policies",
      "24/7 Uptime & Performance Monitoring",
    ],
    technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Nginx"],
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
    shortDesc: "Transform legacy codebase monoliths, outdated architectures, and slow databases into cloud-native digital platforms.",
    fullDesc:
      "Legacy software systems slow down growth, expose organizations to security vulnerabilities, and drain maintenance budgets. We modernize legacy applications through strategic refactoring, UI modernizing, database migration, and cloud-native re-architecting — preserving core business logic while upgrading speed, security, and developer agility.",
    icon: "RefreshCw",
    benefits: [
      "Zero disruption to ongoing daily business operations",
      "Significant boost in application speed and user satisfaction",
      "Elimination of obsolete tech stack security risks",
      "Reduced maintenance costs and easier recruitment for modern tech",
    ],
    deliverables: [
      "Legacy Application Code Audit & Tech Debt Assessment",
      "Incremental Microservice / Frontend Refactoring Plan",
      "Database Schema Migration & Cloud Transfer",
      "Modern Mobile-First Web UI Transformation",
    ],
    process: [
      "System Audit & Logic Extraction",
      "De-risked Migration Roadmap Creation",
      "Incremental Strangler Fig Refactoring",
      "Data Integrity & Parallel Testing",
      "Seamless Legacy Cutover",
    ],
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "AWS"],
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
    shortDesc: "User-centric design systems, wireframes, visual prototypes, and micro-interactions created for high adoption and engagement.",
    fullDesc:
      "Great software engineering starts with exceptional user product design. Our UI/UX designers collaborate directly with software engineers to turn complex business workflows into clear, intuitive, human-centered interfaces. We design cohesive design systems, click-through prototypes, and micro-interactions that make business software a joy to use.",
    icon: "Layout",
    benefits: [
      "Reduced user onboarding time and support tickets",
      "High adoption rates for internal and customer-facing tools",
      "Reusable design token libraries for faster engineering",
      "Strict compliance with WCAG AA accessibility standards",
    ],
    deliverables: [
      "User Journey Maps & Wireframes",
      "Interactive High-Fidelity Figma Prototypes",
      "Comprehensive UI Component Design Systems",
      "Mobile & Desktop Responsive Screen Suites",
    ],
    process: [
      "User Research & Workflow Mapping",
      "Information Architecture & Wireframing",
      "Visual UI Design & Component System Creation",
      "Interactive Prototyping & Usability Testing",
      "Engineering Design Handoff & Quality Audits",
    ],
    technologies: ["Figma", "Design Systems", "Tailwind CSS", "Framer Motion", "Storybook", "User Testing"],
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
    shortDesc: "Proactive cloud monitoring, security patch management, bug fixes, and continuous software evolution.",
    fullDesc:
      "Software isn't finished when it launches — it evolves. Our long-term maintenance and support services ensure your software applications remain secure, high-performing, and aligned with market changes. We provide SLA-backed bug resolution, cloud monitoring, dependency upgrades, and ongoing feature enhancements.",
    icon: "ShieldAlert",
    benefits: [
      "SLA-backed response times for urgent technical issues",
      "Proactive security updates and patch management",
      "Continuous performance optimization and database tuning",
      "Flexible monthly engineering hour allocations",
    ],
    deliverables: [
      "24/7 System Health & Uptime Monitoring",
      "Scheduled Security Audits & Dependency Upgrades",
      "SLA Bug Fixes & Hotfixes",
      "Continuous Minor Feature Enhancements",
    ],
    process: [
      "System Handover & Monitoring Setup",
      "SLA Terms & Support Channels Configuration",
      "Continuous Patching & Backups",
      "Monthly Health Reports & Optimization Reviews",
    ],
    technologies: ["AWS", "GitHub Actions", "Docker", "PostgreSQL", "Datadog", "Sentry"],
    seoKeywords: [
      "software maintenance and support services",
      "application maintenance company",
      "SaaS software maintenance partner",
      "SLA technical support software",
    ],
  },
];
