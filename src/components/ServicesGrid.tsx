"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Cloud,
  Code2,
  Cpu,
  Globe,
  Layout,
  Network,
  RefreshCw,
  Rocket,
  Server,
  ShieldAlert,
  Smartphone,
} from "lucide-react";
import { servicesData } from "@/data/servicesData";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="h-5 w-5" />,
  Cloud: <Cloud className="h-5 w-5" />,
  Globe: <Globe className="h-5 w-5" />,
  Smartphone: <Smartphone className="h-5 w-5" />,
  Rocket: <Rocket className="h-5 w-5" />,
  Cpu: <Cpu className="h-5 w-5" />,
  Building2: <Building2 className="h-5 w-5" />,
  Network: <Network className="h-5 w-5" />,
  Server: <Server className="h-5 w-5" />,
  RefreshCw: <RefreshCw className="h-5 w-5" />,
  Layout: <Layout className="h-5 w-5" />,
  ShieldAlert: <ShieldAlert className="h-5 w-5" />,
};

export function ServicesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono">
            <span>Our Software Engineering Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Software Engineered Specifically For Your Business
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We design, engineer, launch, modernize, integrate, and maintain custom business applications for startups, SMEs, and enterprises globally.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md hover:border-sky-400 transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-sky-50 w-fit text-sky-600 border border-sky-100 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  {iconMap[service.icon] || <Code2 className="h-5 w-5" />}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{service.shortDesc}</p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-xs font-semibold text-sky-600 hover:text-sky-700 group/link"
                >
                  <span>Explore {service.title}</span>
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
