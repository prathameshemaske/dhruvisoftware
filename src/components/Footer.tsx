import React from "react";
import Link from "next/link";
import { Cpu, Mail, MapPin, Phone, ArrowRight, Share2, Globe } from "lucide-react";
import { companyData } from "@/data/companyData";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-xs sm:text-sm font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Pillar */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1px]">
                <div className="h-full w-full rounded-[11px] bg-slate-950 flex items-center justify-center">
                  <Cpu className="h-5 w-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                Dhruvi <span className="text-cyan-400">Software</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              We build software products that solve real business problems — including our own platforms (Neojan & Talentgate) and custom software engineered for ambitious businesses worldwide.
            </p>
            <div className="pt-2 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>{companyData.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:text-cyan-300 transition-colors">
                  {companyData.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cyan-400 shrink-0" />
                <a href={`tel:${companyData.phone}`} className="hover:text-cyan-300 transition-colors">
                  {companyData.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Column 1: Products & Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Our Owned Products</h4>
            <ul className="space-y-2 text-slate-300 text-xs">
              <li>
                <Link href="/products/neojan" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span>Neojan Platform</span>
                  <span className="text-[10px] px-1 py-0.2 rounded bg-cyan-950 text-cyan-400 font-mono">Operations</span>
                </Link>
              </li>
              <li>
                <Link href="/products/talentgate" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span>Talentgate Suite</span>
                  <span className="text-[10px] px-1 py-0.2 rounded bg-indigo-950 text-indigo-400 font-mono">Recruitment</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-cyan-300 transition-colors">
                  Products Overview
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Engineering Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Engineering Services</h4>
            <ul className="space-y-2 text-slate-300 text-xs">
              <li>
                <Link href="/services/custom-software-development" className="hover:text-cyan-300 transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services/saas-development" className="hover:text-cyan-300 transition-colors">
                  SaaS Product Development
                </Link>
              </li>
              <li>
                <Link href="/services/web-application-development" className="hover:text-cyan-300 transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="hover:text-cyan-300 transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/product-engineering" className="hover:text-cyan-300 transition-colors">
                  Product Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/software-modernization" className="hover:text-cyan-300 transition-colors">
                  Legacy Modernization
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-300 transition-colors text-cyan-400 font-semibold">
                  All 12 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Company & Insights</h4>
            <ul className="space-y-2 text-slate-300 text-xs">
              <li>
                <Link href="/about" className="hover:text-cyan-300 transition-colors">
                  About Philosophy
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-cyan-300 transition-colors">
                  Case Studies & Proof
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-cyan-300 transition-colors">
                  Engineering Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-300 transition-colors">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()} Dhruvi Software Solutions. All rights reserved. Built with product engineering discipline.
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={companyData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href={companyData.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>X (Twitter)</span>
            </a>
            <a
              href={companyData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
