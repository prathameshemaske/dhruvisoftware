import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cloud,
  Globe,
  Smartphone,
  Rocket,
  Cpu,
  Building2,
  Network,
  Server,
  RefreshCw,
  Layout,
  ShieldAlert,
} from "lucide-react";
import { servicesData } from "@/data/servicesData";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Technical Engineering Services`,
    description: service.shortDesc,
    keywords: service.seoKeywords,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Icon selector
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2": return <Code2 className="h-8 w-8 text-sky-600" />;
      case "Cloud": return <Cloud className="h-8 w-8 text-sky-600" />;
      case "Globe": return <Globe className="h-8 w-8 text-sky-600" />;
      case "Smartphone": return <Smartphone className="h-8 w-8 text-sky-600" />;
      case "Rocket": return <Rocket className="h-8 w-8 text-sky-600" />;
      case "Cpu": return <Cpu className="h-8 w-8 text-sky-600" />;
      case "Building2": return <Building2 className="h-8 w-8 text-sky-600" />;
      case "Network": return <Network className="h-8 w-8 text-sky-600" />;
      case "Server": return <Server className="h-8 w-8 text-sky-600" />;
      case "RefreshCw": return <RefreshCw className="h-8 w-8 text-sky-600" />;
      case "Layout": return <Layout className="h-8 w-8 text-sky-600" />;
      case "ShieldAlert": return <ShieldAlert className="h-8 w-8 text-sky-600" />;
      default: return <Code2 className="h-8 w-8 text-sky-600" />;
    }
  };

  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-sky-600">Services</Link>
          <span>/</span>
          <span className="text-sky-700 font-semibold">{service.title}</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-3xl space-y-6">
          <div className="p-3 rounded-xl bg-sky-100/70 border border-sky-200 w-fit">
            {getIcon(service.icon)}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {service.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {service.fullDesc}
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-md shadow-sky-600/20 group"
            >
              <span>Discuss Your Requirement</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Benefits & Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-200">
          {/* Key Architectural Benefits */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Key Engineering Benefits</h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              {service.benefits.map((b, idx) => (
                <li key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expected Technical Deliverables */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Concrete Deliverables</h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              {service.deliverables.map((d, idx) => (
                <li key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process & Technologies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Execution Methodology */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Engineering Process</h3>
            <ol className="space-y-3 text-xs sm:text-sm text-slate-600 font-mono">
              {service.process.map((step, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <span className="h-6 w-6 rounded-full bg-sky-100 text-sky-700 border border-sky-200 flex items-center justify-center text-xs font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <span className="font-sans text-slate-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Production Tech Ecosystem */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Technologies We Deploy</h3>
            <div className="flex flex-wrap gap-2 pt-2">
              {service.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-sky-200 shadow-lg text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Need {service.title} for Your Organization?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Schedule a technical consultation with our engineering team to map out your project scope and architecture.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-md shadow-sky-600/20"
            >
              <span>Get Started</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
