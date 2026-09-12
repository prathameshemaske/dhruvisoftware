import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Workflow } from "lucide-react";
import { NeojanDashboardMockup } from "@/components/UiMockups";
import { JsonLd } from "@/components/JsonLd";
import { productsData } from "@/data/productsData";

const neojanData = productsData.find((p) => p.id === "neojan")!;

export const metadata = {
  title: "Neojan | Enterprise Operations & Workflow Intelligence Platform",
  description:
    "Neojan is an enterprise operations platform built and operated by Dhruvi Software Solutions. Unify workflows, real-time analytics, and data pipelines.",
};

const neojanSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Neojan",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web-based",
  url: "https://www.neojan.com",
  description: neojanData.fullDescription,
  author: {
    "@type": "Organization",
    name: "Dhruvi Software Solutions",
    url: "https://dhruvisoftwaresolutions.com",
  },
};

export default function NeojanPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen space-y-16">
      <JsonLd data={neojanSchema} />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        {/* Breadcrumb */}
        <nav className="text-xs font-mono text-slate-500 flex items-center space-x-2">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-sky-600">Products</Link>
          <span>/</span>
          <span className="text-sky-700 font-semibold">Neojan</span>
        </nav>

        {/* Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono">
              <span>Live Platform · www.neojan.com</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Neojan — Enterprise Operations & Workflow Intelligence
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              {neojanData.description}
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.neojan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-md shadow-sky-600/20 group"
              >
                <span>Visit Neojan Platform (www.neojan.com)</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <NeojanDashboardMockup />
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="space-y-8 pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Core Platform Capabilities</h2>
            <p className="text-xs sm:text-sm text-slate-600">Engineered with high concurrency, microservice event queues, and real-time analytical persistence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {neojanData.keyCapabilities.map((cap, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="p-2.5 rounded-lg bg-sky-100 text-sky-700 border border-sky-200 w-fit">
                  <Workflow className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{cap.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modules Breakdown */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-slate-900">Included Neojan Modules</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {neojanData.modules.map((mod, i) => (
              <div key={i} className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <div className="font-semibold text-sm text-sky-700">{mod.name}</div>
                <div className="text-xs text-slate-600">{mod.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
