import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu, Target, ShieldCheck, Code2, Rocket, Layers } from "lucide-react";
import { companyData } from "@/data/companyData";

export const metadata = {
  title: "About Us | Dhruvi Software Solutions",
  description:
    "Learn about Dhruvi Software Solutions, custom software application developers and creators of Neojan and Talentgate platforms.",
};

const brandPillars = [
  {
    icon: "/essence-innovate.png",
    title: "Innovate",
    description: "Turn complex ideas into practical, high-performance software.",
  },
  {
    icon: "/essence-collaborate.png",
    title: "Collaborate",
    description: "Work closely with client teams to deliver transparent milestone updates.",
  },
  {
    icon: "/essence-grow.png",
    title: "Grow",
    description: "Build scalable architectures engineered to support long-term expansion.",
  },
  {
    icon: "/essence-impact.png",
    title: "Make an Impact",
    description: "Create software that delivers measurable business value and speed.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-6 sm:py-12 bg-slate-50 min-h-screen space-y-12 sm:space-y-16">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        {/* Full-Width 2-Column Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono w-fit">
              <span>About Dhruvi Software Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              We Believe Software Should{" "}
              <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Solve Real Business Problems.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Dhruvi Software Solutions was established to build reliable software applications for growing businesses. We deliver custom software development, web & mobile applications, SaaS platforms, and software modernization, while also creating and operating our own software products.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
                <Code2 className="h-3.5 w-3.5 text-sky-600" /> Custom Development
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
                <Rocket className="h-3.5 w-3.5 text-indigo-600" /> In-House Products
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> 100% IP Ownership
              </span>
            </div>
          </div>

          {/* Right Column: Key Metrics & Company Highlights (Fills the blank space) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 text-white space-y-6 flex flex-col justify-between shadow-md">
            <div className="space-y-2">
              <span className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
                Company Overview
              </span>
              <h2 className="text-xl font-bold text-white">Built by Engineers Who Run Real Products</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Operating our own platforms (Neojan & Talentgate) gives us deep practical insight into code quality, speed, security, and maintenance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-6">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">2+</div>
                <div className="text-xs font-semibold text-slate-200">In-House Products</div>
                <div className="text-[11px] text-slate-400">Neojan & Talentgate</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">100%</div>
                <div className="text-xs font-semibold text-slate-200">IP Ownership</div>
                <div className="text-[11px] text-slate-400">Transferred to clients</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">10+</div>
                <div className="text-xs font-semibold text-slate-200">Software Services</div>
                <div className="text-[11px] text-slate-400">Web, Mobile & SaaS</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">7-Step</div>
                <div className="text-xs font-semibold text-slate-200">Proven Process</div>
                <div className="text-[11px] text-slate-400">Concept to launch</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Pillar Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="p-2.5 rounded-lg bg-sky-100 text-sky-700 border border-sky-200 w-fit">
              <Cpu className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Why We Build In-House Products</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We design, build, and run our own software platforms — such as <strong className="text-sky-700 font-semibold">Neojan</strong> (Business Operations) and <strong className="text-indigo-700 font-semibold">Talentgate</strong> (HR & Recruitment). Operating our own products helps us understand user needs, speed, ease of use, and long-term application maintenance.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="p-2.5 rounded-lg bg-indigo-100 text-indigo-700 border border-indigo-200 w-fit">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Why We Build Custom Client Software</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We apply the exact same quality control, clean code standards, and attention to detail to client projects. Whether developing a new SaaS web app, modernizing older systems, or building internal tools, we treat client software with genuine care.
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="space-y-8">
          <h2 className="text-2xl font-extrabold text-slate-900 text-center">Our Core Principles</h2>
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
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Ready to Start Your Software Project?</h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Let's discuss your software ideas, business automation requirements, or application development goals.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-md shadow-sky-600/20 group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
