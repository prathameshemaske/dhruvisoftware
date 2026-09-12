import React from "react";
import { Cpu, Key, ShieldCheck, Target, Layers, Users2 } from "lucide-react";
import { companyData } from "@/data/companyData";

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono">
            <span>Our Core Technical Differentiator</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            We Build Products, Not Just Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Because we build, operate, and scale our own software products (Neojan and Talentgate), we understand real user adoption, system scalability, technical debt, and continuous delivery. We bring that exact product mindset to your custom software.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all space-y-3">
            <div className="p-2.5 rounded-lg bg-sky-100 text-sky-700 border border-sky-200 w-fit">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Product-Grade Architecture</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We apply the exact same modular microservice patterns, database optimization, and cloud CI/CD pipelines to client projects as we do to our own SaaS platforms.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all space-y-3">
            <div className="p-2.5 rounded-lg bg-indigo-100 text-indigo-700 border border-indigo-200 w-fit">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Business-First Engineering</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We understand the business problem before writing code. Every feature, database schema, and interface design is tied directly to your operational ROI.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all space-y-3">
            <div className="p-2.5 rounded-lg bg-purple-100 text-purple-700 border border-purple-200 w-fit">
              <Key className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">100% Code & IP Ownership</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Clients retain full ownership of all source code repositories, IP, design assets, and database schemas upon milestone approvals.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all space-y-3">
            <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-700 border border-emerald-200 w-fit">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Scalable & Secure Foundation</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We engineer for today's requirements without locking out tomorrow's growth. System security, role-based access, and audit logging are built-in defaults.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all space-y-3">
            <div className="p-2.5 rounded-lg bg-sky-100 text-sky-700 border border-sky-200 w-fit">
              <Layers className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Transparent Agile Process</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No black-box development. Weekly sprint reviews, staging environment deployments, and continuous access to task boards keep you fully informed.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all space-y-3">
            <div className="p-2.5 rounded-lg bg-indigo-100 text-indigo-700 border border-indigo-200 w-fit">
              <Users2 className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Long-Term Technical Partnership</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We stay involved beyond launch, supporting continuous cloud deployment, feature enhancements, and system monitoring as your product scales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
