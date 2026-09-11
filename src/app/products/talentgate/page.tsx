import React from "react";
import Link from "next/link";
import { ArrowRight, Kanban, Sparkles } from "lucide-react";
import { TalentgateDashboardMockup } from "@/components/UiMockups";
import { JsonLd } from "@/components/JsonLd";
import { productsData } from "@/data/productsData";

const talentgateData = productsData.find((p) => p.id === "talentgate")!;

export const metadata = {
  title: "Talentgate | AI-Powered Recruitment Management Suite",
  description:
    "Talentgate is a proprietary HR tech SaaS platform built and operated by Dhruvi Software Solutions. Streamline applicant tracking, AI resume parsing, and interview pipelines.",
};

const talentgateSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Talentgate",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web-based",
  description: talentgateData.fullDescription,
  author: {
    "@type": "Organization",
    name: "Dhruvi Software Solutions",
    url: "https://dhruvisoftware.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

export default function TalentgatePage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen space-y-16">
      <JsonLd data={talentgateSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav className="text-xs font-mono text-slate-500 flex items-center space-x-2">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-sky-600">Products</Link>
          <span>/</span>
          <span className="text-indigo-700 font-semibold">Talentgate</span>
        </nav>

        {/* Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono">
              <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
              <span>Proprietary SaaS Platform</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Talentgate — AI Recruitment & Talent Management Suite
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              {talentgateData.description}
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <Link
                href="/contact?product=talentgate"
                className="inline-flex items-center px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-600/20 group"
              >
                <span>Request Talentgate Platform Demo</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <TalentgateDashboardMockup />
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="space-y-8 pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Core Platform Capabilities</h2>
            <p className="text-xs sm:text-sm text-slate-600">Streamlining applicant screening, interview evaluation, and hiring pipeline analytics.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {talentgateData.keyCapabilities.map((cap, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="p-2.5 rounded-lg bg-indigo-100 text-indigo-700 border border-indigo-200 w-fit">
                  <Kanban className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{cap.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modules Breakdown */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-slate-900">Included Talentgate Modules</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {talentgateData.modules.map((mod, i) => (
              <div key={i} className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <div className="font-semibold text-sm text-indigo-700">{mod.name}</div>
                <div className="text-xs text-slate-600">{mod.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
