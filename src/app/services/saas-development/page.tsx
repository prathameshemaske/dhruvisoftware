import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cloud, ShieldCheck } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { servicesData } from "@/data/servicesData";

const service = servicesData.find((s) => s.id === "saas-development")!;

export const metadata = {
  title: "SaaS Product Development Company | Dhruvi Software Solutions",
  description:
    "SaaS product development company. We engineer multi-tenant SaaS platforms, subscription billing systems, and cloud infrastructure for growing tech products.",
  keywords: service.seoKeywords,
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "SaaS Product Development",
  provider: {
    "@type": "Organization",
    name: "Dhruvi Software Solutions",
    url: "https://dhruvisoftware.com",
  },
  description: service.fullDesc,
  areaServed: "Global",
};

export default function SaaSDevelopmentPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen space-y-16">
      <JsonLd data={serviceSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav className="text-xs font-mono text-slate-500 flex items-center space-x-2">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-sky-600">Services</Link>
          <span>/</span>
          <span className="text-sky-700 font-semibold">SaaS Product Development</span>
        </nav>

        {/* Hero Banner */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono">
            <span>SaaS Architecture & Engineering</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            SaaS Product Development Services
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            {service.fullDesc}
          </p>
          <div className="pt-2">
            <Link
              href="/contact?service=saas-development"
              className="inline-flex items-center px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-md shadow-sky-600/20 group"
            >
              <span>Build Your SaaS Product</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Benefits & Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-200">
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Cloud className="h-5 w-5 text-sky-600" />
              SaaS Architectural Advantages
            </h2>
            <div className="space-y-3">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-indigo-600" />
              SaaS Platform Deliverables
            </h2>
            <div className="space-y-3">
              {service.deliverables.map((d, i) => (
                <div key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
