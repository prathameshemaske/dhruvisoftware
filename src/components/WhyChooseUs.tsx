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
            <span>Why Work With Us</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            We Treat Every Project Like a Real Product
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Because we build and run our own software products (Neojan and Talentgate), we understand what makes software easy to use, reliable, and scalable. We bring that practical experience to every custom project we build for our clients.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all space-y-3">
            <div className="p-2.5 rounded-lg bg-sky-100 text-sky-700 border border-sky-200 w-fit">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Product-Quality Code</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We write clean, well-tested code for client applications using the exact same quality standards we use for our own software platforms.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all space-y-3">
            <div className="p-2.5 rounded-lg bg-indigo-100 text-indigo-700 border border-indigo-200 w-fit">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Focused on Your Goals</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We focus on understanding your business needs first so every screen, database rule, and feature directly solves a real problem.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all space-y-3">
            <div className="p-2.5 rounded-lg bg-purple-100 text-purple-700 border border-purple-200 w-fit">
              <Key className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">100% Full Ownership</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              You own all source code repositories, intellectual property, designs, and database schemas completely from day one.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all space-y-3">
            <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-700 border border-emerald-200 w-fit">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Reliable & Secure</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We design software for today while ensuring it can scale safely. User permissions, data security, and audit checks are standard.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all space-y-3">
            <div className="p-2.5 rounded-lg bg-sky-100 text-sky-700 border border-sky-200 w-fit">
              <Layers className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Clear & Open Progress</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              You stay involved with clear updates, regular reviews, and direct access to staging environments throughout development.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all space-y-3">
            <div className="p-2.5 rounded-lg bg-indigo-100 text-indigo-700 border border-indigo-200 w-fit">
              <Users2 className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Long-Term Support</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We remain available after launch to provide server monitoring, bug fixes, updates, and feature additions as your business grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
