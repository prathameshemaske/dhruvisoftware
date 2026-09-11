export interface CompanyInfo {
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  foundingYear: number;
  location: string;
  email: string;
  phone: string;
  address: string;
  socialLinks: {
    linkedin: string;
    twitter: string;
    github: string;
  };
  metrics: Array<{ value: string; label: string; subtext: string }>;
  philosophy: Array<{ title: string; description: string; icon: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

export const companyData: CompanyInfo = {
  name: "Dhruvi Software Solutions",
  tagline: "Software Products & Custom Product Engineering",
  shortDescription:
    "We build our own software platforms and engineer custom software applications for ambitious businesses looking to launch, scale, and automate.",
  longDescription:
    "Dhruvi Software Solutions is a modern product engineering and software development firm. Unlike traditional IT outsourcing agencies, we build and operate our own proprietary software products — including Neojan and Talentgate — while delivering end-to-end custom software development, SaaS platforms, enterprise systems, and application modernization for startups, SMEs, and enterprises globally.",
  foundingYear: 2021,
  location: "Mumbai, India",
  email: "contact@dhruvisoftwaresolutions.com",
  phone: "+91 98765 43210",
  address: "Innovation Tech Park, BKC, Mumbai, Maharashtra 400051, India",
  socialLinks: {
    linkedin: "https://linkedin.com/company/dhruvi-software-solutions",
    twitter: "https://twitter.com/dhruvisoftware",
    github: "https://github.com/prathameshemaske/dhruvisoftware",
  },
  metrics: [
    { value: "2+", label: "Proprietary SaaS Platforms", subtext: "Active in production" },
    { value: "99.9%", label: "System Uptime SLA", subtext: "Cloud infrastructure" },
    { value: "100%", label: "Code & Data Ownership", subtext: "Guaranteed to clients" },
    { value: "7-Step", label: "Product Lifecycle", subtext: "Engineering discipline" },
  ],
  philosophy: [
    {
      title: "We Build Products, Not Just Projects",
      description:
        "Because we engineer, launch, and operate our own platforms (Neojan and Talentgate), we understand real user friction, system architecture, technical debt, and continuous delivery.",
      icon: "Cpu",
    },
    {
      title: "Business-First Engineering",
      description:
        "We prioritize business outcomes over technology hype. Every line of code, cloud architecture choice, and database schema is tied to real workflow requirements.",
      icon: "Target",
    },
    {
      title: "Product-Quality Standards",
      description:
        "We apply the exact same product-grade quality control, security standards, and CI/CD pipelines to client projects as we do to our own SaaS platforms.",
      icon: "ShieldCheck",
    },
    {
      title: "Full Transparency & Ownership",
      description:
        "Clients retain 100% intellectual property, repository access, data control, and technical documentation from Day 1.",
      icon: "Key",
    },
  ],
  faqs: [
    {
      question: "What differentiates Dhruvi Software Solutions from typical IT agencies?",
      answer:
        "Most software vendors are pure coding houses that sell billable hours. Dhruvi Software Solutions is a product engineering company that builds and operates its own software platforms (Neojan & Talentgate). This gives us deep, hands-on mastery over the full product lifecycle — from UX architecture to cloud scaling and long-term maintenance.",
    },
    {
      question: "What engagement models do you offer for custom software development?",
      answer:
        "We offer dedicated product engineering teams, fixed-scope MVP milestone delivery, and long-term modernization/maintenance partnerships. Every project comes with a dedicated tech lead, transparent sprint updates, and clear repository access.",
    },
    {
      question: "Can you help modernize legacy business systems?",
      answer:
        "Yes. We specialize in refactoring monoliths, migrating legacy databases to scalable cloud infrastructures, integrating APIs with modern web/mobile frontends, and automating spreadsheet-heavy business workflows.",
    },
    {
      question: "Who owns the code and intellectual property of custom projects?",
      answer:
        "You own 100% of the code, IP, system assets, database schemas, and documentation. We deliver complete repository transfers upon milestone approvals.",
    },
  ],
};
