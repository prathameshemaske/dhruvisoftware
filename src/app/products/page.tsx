import React from "react";
import Link from "next/link";
import { productsData } from "@/data/productsData";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { NeojanDashboardMockup, TalentgateDashboardMockup } from "@/components/UiMockups";

export const metadata = {
  title: "Proprietary Software Platforms | Neojan & Talentgate",
  description:
    "Explore our owned software platforms: Neojan (Enterprise Operations SaaS) and Talentgate (AI Recruitment Management Suite). Built and operated by Dhruvi Software Solutions.",
};

export default function ProductsPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
            <span>Built & Owned by Dhruvi Software Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Proprietary Software Platforms
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We don't just write code for hire — we build, launch, and operate platforms of our own. Neojan and Talentgate are living proof of our technical mastery, product UX design, and continuous engineering discipline.
          </p>
        </div>

        {/* Products List */}
        <div className="space-y-16">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-sky-50 text-sky-700 border border-sky-200">
                      {product.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{product.category}</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                    {product.name}
                  </h2>
                  <p className="text-sm sm:text-base font-semibold text-sky-700">
                    {product.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{product.fullDescription}</p>

                  <div className="space-y-2">
                    <h4 className="text-xs font-mono text-sky-700 uppercase tracking-wider font-semibold">Key Capabilities</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.keyCapabilities.map((cap, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                          <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                          <span>{cap.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-md shadow-sky-600/20 group"
                    >
                      <span>Dedicated {product.name} Page & Specs</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  {product.id === "neojan" ? <NeojanDashboardMockup /> : <TalentgateDashboardMockup />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
