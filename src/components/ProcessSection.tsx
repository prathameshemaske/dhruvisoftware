"use client";

import React, { useState } from "react";
import { CheckCircle2, Code2, Compass, Cpu, Flag, Layout, Rocket, ShieldCheck } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Discover",
    icon: <Compass className="h-5 w-5" />,
    summary: "Deep-dive analysis of business objectives, user workflows, data models, and technical requirements.",
    details: [
      "Stakeholder & operational workflow interviews",
      "Legacy system dependency mapping",
      "Technical risk assessment & timeline alignment",
    ],
  },
  {
    step: "02",
    title: "Define",
    icon: <Flag className="h-5 w-5" />,
    summary: "Translating business problems into detailed product scope, database architecture, and engineering roadmaps.",
    details: [
      "User story mapping & acceptance criteria",
      "Database schema & API endpoint specification",
      "Fixed milestone budget & release plan",
    ],
  },
  {
    step: "03",
    title: "Design",
    icon: <Layout className="h-5 w-5" />,
    summary: "Engineering intuitive UX flows, wireframes, accessible component design systems, and interactive prototypes.",
    details: [
      "User journey wireframes & screen suites",
      "Figma design system & reusable tokens",
      "Interactive click-through prototype review",
    ],
  },
  {
    step: "04",
    title: "Engineer",
    icon: <Code2 className="h-5 w-5" />,
    summary: "Building high-performance software using modern Next.js, Node.js, TypeScript, and clean code practices.",
    details: [
      "Agile 2-week sprint cadences",
      "Automated CI/CD build pipelines",
      "Continuous code review & repository updates",
    ],
  },
  {
    step: "05",
    title: "Test",
    icon: <ShieldCheck className="h-5 w-5" />,
    summary: "Rigorous quality assurance including functional, API payload, load, performance, and security testing.",
    details: [
      "End-to-end integration & unit testing",
      "OWASP security vulnerability auditing",
      "Core Web Vitals & database latency optimization",
    ],
  },
  {
    step: "06",
    title: "Launch",
    icon: <Rocket className="h-5 w-5" />,
    summary: "De-risked deployment to cloud production environments (AWS/Vercel/Azure) with 24/7 uptime monitoring.",
    details: [
      "Production cloud infrastructure provisioning",
      "Data migration & cutover verification",
      "Live logging & performance monitoring setup",
    ],
  },
  {
    step: "07",
    title: "Evolve",
    icon: <Cpu className="h-5 w-5" />,
    summary: "Continuous feature enhancement, cloud optimization, user feedback iteration, and long-term technical support.",
    details: [
      "Post-launch user analytics review",
      "Iterative Phase 2 feature releases",
      "SLA-backed technical support & maintenance",
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
            <span>Product Lifecycle Discipline</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Work: Our 7-Step Engineering Process
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A structured, transparent methodology refined through building our own platforms and delivering complex client applications.
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
