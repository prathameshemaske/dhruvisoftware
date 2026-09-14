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
  };
  metrics: Array<{ value: string; label: string; subtext: string }>;
  philosophy: Array<{ title: string; description: string; icon: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

export const companyData: CompanyInfo = {
  name: "Dhruvi Software Solutions",
  tagline: "Building a Brighter Digital Tomorrow",
  shortDescription:
    "We build custom software applications and SaaS platforms for growing businesses. We also create and run our own software products like Neojan and Talentgate.",
  longDescription:
    "Dhruvi Software Solutions builds reliable software products and custom applications for businesses. In addition to delivering custom web apps, mobile apps, SaaS platforms, and system modernizations, we also design and operate our own software products (Neojan and Talentgate). This practical experience helps us write clean code, design clear user interfaces, and build scalable systems.",
  foundingYear: 2021,
  location: "Maharashtra, India",
  email: "Coming soon..!",
  phone: "Available upon request",
  address: "Maharashtra, India",
  socialLinks: {
    linkedin: "",
    twitter: "",
  },
  metrics: [
    { value: "2+", label: "In-House Products", subtext: "Neojan & Talentgate" },
    { value: "100%", label: "Code & IP Ownership", subtext: "Given directly to clients" },
    { value: "10+", label: "Software Services", subtext: "Web, Mobile, SaaS & Cloud" },
    { value: "7-Step", label: "Clear Process", subtext: "From concept to launch" },
  ],
  philosophy: [
    {
      title: "We Understand Real Products",
      description:
        "Because we build and maintain our own products (Neojan and Talentgate), we know what it takes to build software that real people use every day.",
      icon: "Cpu",
    },
    {
      title: "Focused on Your Business Needs",
      description:
        "We build features that solve your actual business challenges rather than adding unnecessary tech complexity.",
      icon: "Target",
    },
    {
      title: "High Standards for Every Project",
      description:
        "We use the same code quality, security checks, and testing procedures for client projects as we do for our own products.",
      icon: "ShieldCheck",
    },
    {
      title: "Full Ownership & Clear Communication",
      description:
        "You get 100% ownership of your source code, design files, and database schemas from day one.",
      icon: "Key",
    },
  ],
  faqs: [
    {
      question: "What makes Dhruvi Software Solutions different?",
      answer:
        "We build and run our own software products alongside client projects. This means we treat every client project like a real product — focusing on user experience, reliability, clean code, and long-term maintainability.",
    },
    {
      question: "How do you handle custom software projects?",
      answer:
        "We work closely with you through a simple 7-step process: requirements gathering, design, milestone-based development, testing, and deployment. You receive regular progress updates and full access to the project code.",
    },
    {
      question: "Can you help update older or legacy business systems?",
      answer:
        "Yes. We can modernize legacy software step by step — updating outdated codebases, improving database speed, and connecting old systems to modern web and mobile apps without disturbing daily operations.",
    },
    {
      question: "Who owns the code and IP for custom projects?",
      answer:
        "You own 100% of the code, intellectual property, designs, and documentation. We transfer full source code repositories and credentials to you.",
    },
  ],
};
