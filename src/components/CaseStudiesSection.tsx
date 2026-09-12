import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudiesData } from "@/data/caseStudiesData";

export function CaseStudiesSection() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono">
            <span>Case Studies</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects & Solutions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Examples of how we build custom software applications and SaaS platforms to solve real operational challenges.
          </p>
        </div>

        {/* Case Studies Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((cs) => (
            <div
              key={cs.id}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between hover:border-sky-400 hover:shadow-md transition-all duration-300 group shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-sky-100 text-sky-800 border border-sky-200">
                    {cs.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{cs.industry}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                  {cs.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">{cs.summary}</p>

                {/* Measurable Results */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-b border-slate-200 py-3">
                  {cs.results.map((res, i) => (
                    <div key={i} className="text-center">
                      <div className="font-extrabold text-sm sm:text-base text-sky-700 font-mono">{res.metric}</div>
                      <div className="text-[10px] text-slate-500 line-clamp-1">{res.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4">
                <Link
                  href={`/work`}
                  className="inline-flex items-center text-xs font-semibold text-sky-600 hover:text-sky-700 group/link"
                >
                  <span>Read Full Technical Case Study</span>
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
