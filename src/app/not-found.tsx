import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Home, Layers, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <div className="inline-flex p-4 rounded-2xl bg-sky-50 text-sky-600 border border-sky-200">
          <Compass className="h-10 w-10 animate-spin-slow" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-mono text-sky-700 font-bold uppercase tracking-wider">404 Error</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">This Page Went Off The Roadmap.</h1>
          <p className="text-xs sm:text-sm text-slate-600">
            The URL you requested does not exist or has been moved. Navigate back to our core platform pillars:
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-4 text-left">
          <Link
            href="/"
            className="p-3 rounded-lg bg-white border border-slate-200 hover:border-sky-400 shadow-sm text-xs font-semibold text-slate-900 flex items-center gap-2 group"
          >
            <Home className="h-4 w-4 text-sky-600" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/products"
            className="p-3 rounded-lg bg-white border border-slate-200 hover:border-sky-400 shadow-sm text-xs font-semibold text-slate-900 flex items-center gap-2 group"
          >
            <Sparkles className="h-4 w-4 text-indigo-600" />
            <span>Explore Products</span>
          </Link>
          <Link
            href="/services"
            className="p-3 rounded-lg bg-white border border-slate-200 hover:border-sky-400 shadow-sm text-xs font-semibold text-slate-900 flex items-center gap-2 group"
          >
            <Layers className="h-4 w-4 text-sky-600" />
            <span>Engineering Services</span>
          </Link>
          <Link
            href="/contact"
            className="p-3 rounded-lg bg-white border border-slate-200 hover:border-sky-400 shadow-sm text-xs font-semibold text-sky-700 flex items-center gap-2 group"
          >
            <span>Start a Project</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
