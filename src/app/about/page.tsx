import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu, Target } from "lucide-react";
import { companyData } from "@/data/companyData";

export const metadata = {
  title: "About Us | Dhruvi Software Solutions",
  description:
    "Learn about Dhruvi Software Solutions, custom software application developers and creators of Neojan and Talentgate platforms.",
};

export default function AboutPage() {
  return (
    <div className="py-6 sm:py-12 bg-slate-50 min-h-screen space-y-12 sm:space-y-16">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono">
            <span>About Dhruvi Software Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            We Believe Software Should Solve Real Business Problems.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Dhruvi Software Solutions was established to build reliable software applications for growing businesses. We deliver custom software development, web & mobile applications, SaaS platforms, and software modernization, while also creating and operating our own software products.
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
              Our brand mark signifies forward motion, clarity, and quality software.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center space-y-3">
              <span className="text-xs font-mono text-slate-500 uppercase">Primary Light Logo</span>
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
              <span className="text-xs font-mono text-slate-400 uppercase">Primary Dark Logo</span>
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

        {/* Philosophy Pillars */}
        <div className="space-y-8">
          <h2 className="text-2xl font-extrabold text-slate-900 text-center">Our Principles</h2>
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
