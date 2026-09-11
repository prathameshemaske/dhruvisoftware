"use client";

import React, { useState } from "react";
import { Cloud, Database, Globe, Server, Smartphone } from "lucide-react";

const techCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: <Globe className="h-4 w-4" />,
    items: [
      { name: "Next.js 14+", desc: "Server rendering, SSG & App Router" },
      { name: "React", desc: "Interactive UI component architectures" },
      { name: "TypeScript", desc: "Strict end-to-end type safety" },
      { name: "Tailwind CSS", desc: "Utility-first design systems" },
      { name: "Framer Motion", desc: "Fluid micro-animations & state transitions" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Microservices",
    icon: <Server className="h-4 w-4" />,
    items: [
      { name: "Node.js / Express", desc: "High-throughput asynchronous APIs" },
      { name: "Python / FastAPI", desc: "AI parsing, worker tasks & data processing" },
      { name: ".NET Core", desc: "Enterprise application logic & security" },
      { name: "GraphQL & REST", desc: "Structured data API endpoints" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    icon: <Smartphone className="h-4 w-4" />,
    items: [
      { name: "React Native", desc: "Cross-platform iOS and Android apps" },
      { name: "Flutter", desc: "High-performance native mobile UIs" },
      { name: "iOS (Swift)", desc: "Native Apple ecosystem engineering" },
      { name: "Android (Kotlin)", desc: "Native Android hardware integrations" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Caching",
    icon: <Database className="h-4 w-4" />,
    items: [
      { name: "PostgreSQL", desc: "Relational ACID persistence with read-replicas" },
      { name: "Redis", desc: "Sub-millisecond in-memory caching & pub/sub" },
      { name: "MongoDB", desc: "Document storage for unstructured payloads" },
      { name: "SQL Server", desc: "Enterprise relational database clusters" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: <Cloud className="h-4 w-4" />,
    items: [
      { name: "AWS", desc: "EC2, ECS, Lambda, RDS & S3 infrastructure" },
      { name: "Docker", desc: "Containerized application environments" },
      { name: "Kubernetes", desc: "Container orchestration & auto-scaling" },
      { name: "GitHub Actions", desc: "Automated CI/CD build & test pipelines" },
    ],
  },
];

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono">
            <span>Modern Production Technology Ecosystem</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Production-Grade Technologies We Use
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We only deploy proven, battle-tested technologies that we actively use in our own SaaS platforms and client products.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-xl bg-white border border-slate-200 shadow-sm space-x-1 sm:space-x-2 overflow-x-auto max-w-full">
            {techCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/20"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {cat.icon}
                <span>{cat.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Grid Display */}
        {techCategories.map((cat) => {
          if (cat.id !== activeCategory) return null;

          return (
            <div key={cat.id} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-slate-200 hover:border-sky-300 shadow-sm transition-all space-y-1.5"
                >
                  <div className="font-bold text-sm text-slate-900 flex items-center justify-between">
                    <span>{item.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 font-mono text-sky-700 border border-slate-200 font-medium">
                      Production Ready
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
