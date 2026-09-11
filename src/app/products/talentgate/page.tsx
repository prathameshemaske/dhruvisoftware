import React from "react";
import Link from "next/link";
import { ArrowRight, Kanban, Sparkles } from "lucide-react";
import { TalentgateDashboardMockup } from "@/components/UiMockups";
import { JsonLd } from "@/components/JsonLd";
import { productsData } from "@/data/productsData";

const talentgateData = productsData.find((p) => p.id === "talentgate")!;

export const metadata = {
  title: "Talentgate | AI-Powered Recruitment Management Suite (Launching Soon)",
  description:
    "Talentgate is an AI recruitment platform currently in development by Dhruvi Software Solutions. Streamline candidate tracking and hiring pipelines. Launching soon.",
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
    url: "https://dhruvisoftwaresolutions.com",
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
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              <span>Launching Soon · In Active Engineering</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Talentgate — AI Recruitment & Talent Suite
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              {talentgateData.description}
            </p>
            <div className="p-4 rounded-xl bg-white border border-amber-200 shadow-sm space-y-2">
              <div className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">Product Status: Launching Soon</div>
              <p className="text-xs text-slate-600">
                Talentgate is undergoing final quality assurance and security testing. Stay tuned for official public launch announcements.
              </p>
            </div>
            <div className="flex items-center space-x-4 pt-2">
              <Link
                href="/contact?product=talentgate"
                className="inline-flex items-center px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-md shadow-sky-600/20 group"
              >
                <span>Notify Me When Talentgate Launches</span>
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Upcoming Platform Capabilities</h2>
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
      </div>
    </div>
  );
}
