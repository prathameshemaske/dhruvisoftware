import React from "react";
import { ServicesGrid } from "@/components/ServicesGrid";

export const metadata = {
  title: "Software Development Services | Product Engineering & Custom Solutions",
  description:
    "Explore our 12 custom software engineering services: Custom Software Development, SaaS Platforms, Web & Mobile Apps, Cloud & DevOps, Legacy Modernization, and API Integrations.",
};

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono">
            <span>Engineering Expertise</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Software Development Services
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From product architecture and custom web/mobile apps to complex enterprise systems and legacy software modernization, we deliver end-to-end software engineering for ambitious companies.
          </p>
        </div>

        <ServicesGrid />
      </div>
    </div>
  );
}
