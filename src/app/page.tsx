import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { OwnedProductsSection } from "@/components/ProductCard";
import { ServicesGrid } from "@/components/ServicesGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessSection } from "@/components/ProcessSection";
import { TechStack } from "@/components/TechStack";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { ProjectPlannerForm } from "@/components/ProjectPlannerForm";
import { CustomSoftwareArchitectureDiagram } from "@/components/UiMockups";
import { productsData } from "@/data/productsData";

export default function HomePage() {
  return (
    <div className="space-y-0 bg-slate-50 text-slate-900">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Positioning & Capability Strip */}
      <div className="border-y border-slate-200 bg-white py-4 font-mono text-xs text-slate-600 overflow-x-auto shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between whitespace-nowrap gap-6">
          <span className="text-sky-700 font-semibold flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-600 animate-ping"></span>
            PROPRIETARY PLATFORMS & CUSTOM ENGINEERING
          </span>
          <span>Our Owned Products (Neojan & Talentgate)</span>
          <span>·</span>
          <span>Custom Software Development</span>
          <span>·</span>
          <span>SaaS Product Engineering</span>
          <span>·</span>
          <span>Legacy Modernization</span>
        </div>
      </div>

      {/* 3. Owned Products Pillar (Neojan & Talentgate) */}
      <OwnedProductsSection products={productsData} />

      {/* 4. Why Choose Us ("We Build Products, Not Just Projects") */}
      <WhyChooseUs />

      {/* 5. Custom Engineering Services Grid */}
      <ServicesGrid />

      {/* 6. System Architecture Visual Showcase */}
      <section className="py-16 sm:py-20 bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CustomSoftwareArchitectureDiagram />
        </div>
      </section>

      {/* 7. How We Work (7-Step Process) */}
      <ProcessSection />

      {/* 8. Categorized Production Tech Stack */}
      <TechStack />

      {/* 9. Case Studies & Proof */}
      <CaseStudiesSection />

      {/* 10. Direct Project Planner & Consultation Form */}
      <ProjectPlannerForm />
    </div>
  );
}
