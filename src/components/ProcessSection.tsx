"use client";

import React, { useState } from "react";
import { CheckCircle2, Code2, Compass, Cpu, Flag, Layout, Rocket, ShieldCheck } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Discover",
    icon: <Compass className="h-5 w-5" />,
    summary: "Clear analysis of your business goals, user needs, and technical requirements.",
    details: [
      "Operational workflow & requirement discussions",
      "Existing system & tool review",
      "Project timeline & goal alignment",
    ],
  },
  {
    step: "02",
    title: "Define",
    icon: <Flag className="h-5 w-5" />,
    summary: "Converting your business requirements into a clear scope, system architecture, and development plan.",
    details: [
      "Feature list & acceptance criteria",
      "System & database architecture planning",
      "Milestone schedule & release roadmap",
    ],
  },
  {
    step: "03",
    title: "Design",
    icon: <Layout className="h-5 w-5" />,
    summary: "Creating intuitive user interface screens, wireframes, and clickable design prototypes.",
    details: [
      "Screen layouts & user flow maps",
      "Figma visual design system",
      "Interactive click-through prototype review",
    ],
  },
  {
    step: "04",
    title: "Engineer",
    icon: <Code2 className="h-5 w-5" />,
    summary: "Writing clean, reliable code using modern Next.js, Node.js, TypeScript, and React frameworks.",
    details: [
      "Regular milestone development sprints",
      "Continuous code reviews & repository updates",
      "Staging preview links for client review",
    ],
  },
  {
    step: "05",
    title: "Test",
    icon: <ShieldCheck className="h-5 w-5" />,
    summary: "Thorough quality assurance and testing to ensure application security, speed, and reliability.",
    details: [
      "Functional feature & integration testing",
      "Security & access permission checks",
      "Performance & device responsiveness testing",
    ],
  },
  {
    step: "06",
    title: "Launch",
    icon: <Rocket className="h-5 w-5" />,
    summary: "Smooth deployment to cloud hosting environments with live monitoring.",
    details: [
      "Production cloud server configuration",
      "Data verification & domain setup",
      "Live logging & uptime monitoring setup",
    ],
  },
  {
    step: "07",
    title: "Evolve",
    icon: <Cpu className="h-5 w-5" />,
    summary: "Ongoing maintenance, feature additions, user feedback updates, and support.",
    details: [
      "Post-launch feedback review",
      "Future feature enhancements",
      "Ongoing maintenance & technical support",
    ],
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono">
            <span>Our 7-Step Process</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Build Software
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A clear, transparent process to guide your project from initial idea to launch and beyond.
          </p>
        </div>

        {/* Desktop/Tablet Step Selector Tabs */}
        <div className="hidden md:flex justify-between items-center border-b border-slate-200 pb-4 overflow-x-auto">
          {processSteps.map((item, idx) => (
            <button
              key={item.step}
              onClick={() => setActiveStep(idx)}
              className={`flex flex-col items-center space-y-2 px-3 py-2 rounded-lg transition-all ${
                activeStep === idx
                  ? "text-sky-600 font-bold scale-105"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <span
                className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all ${
                  activeStep === idx
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                    : "bg-slate-100 border border-slate-200 text-slate-600"
                }`}
              >
                {item.step}
              </span>
              <span className="text-xs">{item.title}</span>
            </button>
          ))}
        </div>

        {/* Step Detail Card */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-extrabold font-mono text-sky-600">
                  {processSteps[activeStep].step}
                </span>
                <div className="p-2.5 rounded-lg bg-sky-100 text-sky-700 border border-sky-200">
                  {processSteps[activeStep].icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{processSteps[activeStep].title} Phase</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{processSteps[activeStep].summary}</p>
            </div>

            <div className="lg:col-span-8 bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-xs font-mono text-sky-600 uppercase tracking-wider font-semibold">Phase Deliverables & Activities</h4>
              <div className="space-y-3">
                {processSteps[activeStep].details.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
