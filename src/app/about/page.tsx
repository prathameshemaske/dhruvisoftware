import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu, Target } from "lucide-react";
import { companyData } from "@/data/companyData";

export const metadata = {
  title: "About Us | Product Engineering Philosophy",
  description:
    "Learn why Dhruvi Software Solutions is a product engineering company, not merely a coding vendor. Builders of Neojan and Talentgate platforms.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono">
            <span>Our Engineering Story & Mindset</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            We Believe Software Should Solve Real Business Problems, Not Just Exist as a Project.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Dhruvi Software Solutions was founded on a clear realization: traditional software development agencies sell billable coding hours, while ambitious businesses need strategic product engineering partners.
          </p>
        </div>

        {/* Official Brand Identity Showcase */}
        <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="text-xs font-mono text-sky-600 uppercase tracking-wider font-semibold">
              Official Brand Identity
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Ideas. Solutions. A Brighter Tomorrow.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Our brand mark signifies forward motion, engineering precision, and software excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center space-y-3">
              <span className="text-xs font-mono text-slate-500 uppercase">Primary Light Brand Logo</span>
              <Image
                src="/logo-primary-clean.png"
                alt="Dhruvi Software Primary Logo"
                width={400}
                height={160}
                loading="lazy"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase">Primary Dark Brand Logo</span>
              <Image
                src="/logo-dark-clean.png"
                alt="Dhruvi Software Dark Logo"
                width={400}
                height={160}
                loading="lazy"
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Dual Pillar Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-200 pt-12">
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="p-2.5 rounded-lg bg-sky-100 text-sky-700 border border-sky-200 w-fit">
              <Cpu className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Why We Build Our Own Products</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We design, build, and operate proprietary software platforms — such as <strong className="text-sky-700 font-semibold">Neojan</strong> (Enterprise Operations SaaS) and <strong className="text-indigo-700 font-semibold">Talentgate</strong> (AI Recruitment Suite). Operating our own products forces us to master real-world database scaling, UX friction reduction, multi-tenant security, and zero-downtime releases.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="p-2.5 rounded-lg bg-indigo-100 text-indigo-700 border border-indigo-200 w-fit">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Why We Build For Other Businesses</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We apply the exact same product-grade quality control, continuous deployment, and architectural discipline to our client engagements. Whether building a SaaS MVP, modernizing a legacy system, or engineering internal automation tools, we treat client software with product ownership.
            </p>
          </div>
        </div>

        {/* Philosophy Pillars */}
        <div className="space-y-8">
          <h2 className="text-2xl font-extrabold text-slate-900 text-center">Our Core Engineering Principles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.philosophy.map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="text-xs font-mono text-sky-700 font-bold">Principle 0{idx + 1}</div>
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-sky-200 shadow-lg text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Ready to Partner With a Real Product Engineering Firm?</h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Let's discuss your software concept, business automation requirements, or product roadmap.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-md shadow-sky-600/20 group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
