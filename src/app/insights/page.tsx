import React from "react";
import { insightsData } from "@/data/insightsData";
import { BookOpen, Clock } from "lucide-react";

export const metadata = {
  title: "Engineering Insights & Guides | Dhruvi Software Solutions",
  description:
    "Engineering insights, SaaS MVP blueprints, custom software strategy guides, and legacy software modernization frameworks.",
};

export default function InsightsPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen space-y-16">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono">
            <BookOpen className="h-3.5 w-3.5 text-sky-600" />
            <span>Technical Thought Leadership</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Engineering Insights & Software Strategy
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Practical guides and architectural insights on custom software ROI, SaaS MVP development, cloud multi-tenancy, and legacy modernization.
          </p>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.map((article) => (
            <div
              key={article.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-sky-300 transition-all space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span className="text-sky-700 font-semibold">{article.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-slate-900 hover:text-sky-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">{article.excerpt}</p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-[11px] text-slate-400 font-mono">By {article.author} · {article.publishedDate}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
