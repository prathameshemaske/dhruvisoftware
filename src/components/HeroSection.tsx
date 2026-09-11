"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { NeojanDashboardMockup } from "@/components/UiMockups";

export function HeroSection() {
  return (
    <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50">
      {/* Background Soft Accent Light Halos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-sky-300/20 blur-[130px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-200/20 blur-[110px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Category Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono">
              <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse"></span>
              <span>Product Engineering Studio & SaaS Platform Builders</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              We Build Software That{" "}
              <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Moves Businesses Forward.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We build our own software platforms — like <strong className="text-sky-700 font-semibold">Neojan</strong> and <strong className="text-indigo-700 font-semibold">Talentgate</strong> — and engineer custom digital solutions for ambitious businesses that want to launch, scale, automate, and transform.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 transition-all shadow-md shadow-sky-600/20 group"
              >
                <span>Start a Project</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-sky-400 transition-all shadow-sm"
              >
                <Sparkles className="mr-2 h-4 w-4 text-sky-600" />
                <span>Explore Our Products</span>
              </Link>
            </div>

            {/* Key Assurance Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200 text-xs text-slate-600 font-medium">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0" />
                <span>Proprietary SaaS Platforms</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0" />
                <span>100% Code & IP Ownership</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0" />
                <span>Product Lifecycle Mastery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive UI Mockup Showcase */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Soft Halo */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-400 to-indigo-400 opacity-20 blur-md"></div>

              {/* Mockup Container */}
              <div className="relative rounded-2xl border border-slate-200 bg-white p-2 sm:p-3 shadow-xl">
                <NeojanDashboardMockup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
