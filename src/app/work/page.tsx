import React from "react";
import { caseStudiesData } from "@/data/caseStudiesData";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Case Studies & Featured Projects | Dhruvi Software Solutions",
  description:
    "Explore our case studies: workflow automation, SaaS recruitment platform engineering, and legacy dashboard modernization.",
};

export default function WorkPage() {
  return (
    <div className="py-6 sm:py-12 bg-slate-50 min-h-screen space-y-12 sm:space-y-16">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono">
            <span>Our Featured Work</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured Case Studies & Projects
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Discover how we design, build, and modernize custom software solutions to solve practical business challenges.
          </p>
        </div>

        {/* Detailed Case Study Cards */}
        <div className="space-y-12">
          {caseStudiesData.map((cs) => (
            <div key={cs.id} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-sky-50 text-sky-700 border border-sky-200 font-semibold">
                    {cs.category}
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 mt-2">{cs.title}</h2>
                  <p className="text-xs font-mono text-slate-500 mt-1">Client Domain: {cs.industry}</p>
                </div>
                <div className="flex items-center space-x-4">
                  {cs.results.map((res, i) => (
                    <div key={i} className="text-center px-3 py-1.5 rounded bg-slate-50 border border-slate-200">
                      <div className="font-extrabold text-base text-sky-700 font-mono">{res.metric}</div>
                      <div className="text-[10px] text-slate-500">{res.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-sky-700 uppercase tracking-wider font-semibold">The Operational Challenge</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{cs.challenge}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-sky-700 uppercase tracking-wider font-semibold">The Engineering Solution</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{cs.solution}</p>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono text-sky-700 uppercase tracking-wider font-semibold">Architectural Blueprint Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cs.architectureDetails.map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
