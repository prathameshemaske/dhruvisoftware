"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, Sparkles, Workflow } from "lucide-react";
import { ProductItem } from "@/data/productsData";
import { NeojanDashboardMockup, TalentgateDashboardMockup } from "@/components/UiMockups";

interface ProductSectionProps {
  products: ProductItem[];
}

export function OwnedProductsSection({ products }: ProductSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<string>("neojan");

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
            <span>Our Proprietary Software Platforms</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Software Platforms Built & Engineered by Us
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We don't only build software for clients. We engineer software platforms of our own. Neojan is live and Talentgate is launching soon.
          </p>
        </div>

        {/* Product Selection Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-xl bg-white border border-slate-200 shadow-sm space-x-2">
            {products.map((prod) => (
              <button
                key={prod.id}
                onClick={() => setSelectedProduct(prod.id)}
                className={`flex items-center space-x-2.5 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  selectedProduct === prod.id
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/20"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {prod.id === "neojan" ? <Workflow className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
                <span>{prod.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                  prod.id === "neojan" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800 font-bold"
                }`}>
                  {prod.id === "neojan" ? "Live" : "Launching Soon"}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Product Feature Showcase */}
        {products.map((prod) => {
          if (prod.id !== selectedProduct) return null;

          return (
            <div
              key={prod.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Product Details */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${
                      prod.id === "neojan"
                        ? "bg-sky-50 text-sky-700 border-sky-200"
                        : "bg-amber-50 text-amber-800 border-amber-200 font-bold"
                    }`}>
                      {prod.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{prod.category}</span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <img
                      src={prod.id === "neojan" ? "/neojan-icon.png" : "/talentgate-icon.png"}
                      alt={`${prod.name} Logo`}
                      className="h-12 w-12 rounded-xl object-contain shadow-sm border border-slate-200 shrink-0 mt-1"
                    />
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                        {prod.name} — <span className="text-slate-600 text-base sm:text-lg font-medium">{prod.tagline}</span>
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">{prod.description}</p>

                  {/* Key Capability Bullets */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {prod.keyCapabilities.map((cap, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                        <div className="font-semibold text-xs text-sky-700 flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-sky-600 shrink-0" />
                          <span>{cap.title}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-normal">{cap.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="pt-2 space-y-2">
                    <span className="text-xs font-mono text-slate-500">Platform Technology Architecture:</span>
                    <div className="flex flex-wrap gap-2">
                      {prod.techStack.map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Product CTA */}
                  <div className="pt-4 flex items-center space-x-4">
                    {prod.externalUrl ? (
                      <a
                        href={prod.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-md shadow-sky-600/20 group"
                      >
                        <span>Visit Neojan Platform (www.neojan.com)</span>
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    ) : (
                      <Link
                        href={`/products/${prod.slug}`}
                        className="inline-flex items-center px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors shadow-sm group"
                      >
                        <span>Talentgate Launching Soon — Details</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right Interactive Mockup Visual */}
                <div className="lg:col-span-6">
                  {prod.id === "neojan" ? <NeojanDashboardMockup /> : <TalentgateDashboardMockup />}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
