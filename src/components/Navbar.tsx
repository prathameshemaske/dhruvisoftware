"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Code2,
  Cpu,
  Menu,
  Sparkles,
  Workflow,
  X,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { servicesData } from "@/data/servicesData";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs ${
        scrolled ? "py-2.5" : "py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/brand-symbol.png"
              alt="Dhruvi Software Solutions"
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 leading-none group-hover:text-sky-600 transition-colors">
                Dhruvi <span className="text-sky-600 font-black">SOFTWARE</span>
              </span>
              <span className="text-[9px] font-mono text-slate-500 tracking-wider uppercase mt-1">
                IDEAS. SOLUTIONS. A BRIGHTER TOMORROW.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith("/products")
                    ? "text-sky-600 bg-sky-50"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180 text-sky-600" : ""}`} />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50">
                  <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-xl backdrop-blur-xl space-y-2">
                    <div className="px-3 py-1.5 text-[10px] font-mono text-sky-600 uppercase tracking-wider font-semibold">
                      Our Software Platforms
                    </div>
                    
                    {/* Neojan External Redirect Link */}
                    <a
                      href="https://www.neojan.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <img
                        src="/neojan-icon.png"
                        alt="Neojan Icon"
                        className="h-8 w-8 rounded-lg object-contain border border-slate-200 shrink-0"
                      />
                      <div>
                        <div className="font-semibold text-sm text-slate-900 group-hover:text-sky-600 flex items-center gap-1.5">
                          Neojan
                          <ExternalLink className="h-3 w-3 text-sky-600" />
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1">Work Smarter. Grow Faster.</p>
                      </div>
                    </a>

                    {/* Talentgate Launching Soon Link */}
                    <Link
                      href="/products/talentgate"
                      className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <img
                        src="/talentgate-icon.png"
                        alt="Talentgate Icon"
                        className="h-8 w-8 rounded-lg object-contain border border-slate-200 shrink-0"
                      />
                      <div>
                        <div className="font-semibold text-sm text-slate-900 group-hover:text-amber-700 flex items-center gap-1.5">
                          Talentgate
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-50 text-amber-800 font-mono border border-amber-200">Launching Soon</span>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1">People · Opportunities · Growth</p>
                      </div>
                    </Link>

                    <div className="border-t border-slate-100 pt-2 px-3">
                      <Link
                        href="/products"
                        className="flex items-center justify-between text-xs font-semibold text-sky-600 hover:text-sky-700 py-1"
                      >
                        <span>View Products Overview</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith("/services")
                    ? "text-sky-600 bg-sky-50"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180 text-sky-600" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full -left-20 w-[540px] pt-2 z-50">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xl backdrop-blur-xl">
                    <div className="px-2 pb-2 text-[10px] font-mono text-sky-600 uppercase tracking-wider border-b border-slate-100 mb-3 font-semibold">
                      Custom Software & Engineering Solutions
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {servicesData.slice(0, 8).map((srv) => (
                        <Link
                          key={srv.id}
                          href={`/services/${srv.slug}`}
                          className="flex items-start space-x-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          <div className="p-1.5 rounded bg-slate-100 text-sky-600 border border-slate-200 group-hover:border-sky-300">
                            <Code2 className="h-3.5 w-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-900 group-hover:text-sky-600">
                              {srv.title}
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">{srv.shortDesc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-slate-100 mt-3 pt-2 flex items-center justify-between px-2">
                      <span className="text-xs text-slate-500">Need a custom technical roadmap?</span>
                      <Link
                        href="/services"
                        className="text-xs font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1"
                      >
                        Explore All 12 Services <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/about"
                  ? "text-sky-600 bg-sky-50"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/work"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname.startsWith("/work")
                  ? "text-sky-600 bg-sky-50"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              Case Studies
            </Link>

            <Link
              href="/insights"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname.startsWith("/insights")
                  ? "text-sky-600 bg-sky-50"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              Insights
            </Link>
          </nav>

          {/* Primary CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="relative group inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 transition-all shadow-md shadow-sky-600/20 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Start a Project
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[64px] bottom-0 bg-white z-50 p-5 shadow-2xl space-y-4 overflow-y-auto">
          <div className="space-y-1">
            <div className="text-xs font-mono text-sky-600 uppercase tracking-wider px-3 py-1 font-semibold">
              Proprietary Platforms
            </div>
            <a
              href="https://www.neojan.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-sky-600 hover:bg-sky-50 flex items-center justify-between"
            >
              <div className="flex items-center gap-1.5">
                <span>Neojan</span>
                <span className="text-xs font-normal text-slate-500">— Enterprise Operations</span>
              </div>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <Link
              href="/products/talentgate"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm text-slate-800 hover:bg-slate-100 flex items-center justify-between font-medium"
            >
              <span>Talentgate</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 font-mono border border-amber-200 font-semibold">Launching Soon</span>
            </Link>
          </div>

          <div className="border-t border-slate-100 pt-3 space-y-1">
            <div className="text-xs font-mono text-sky-600 uppercase tracking-wider px-3 py-1 font-semibold">
              Core Engineering Services
            </div>
            <Link
              href="/services/custom-software-development"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Custom Software Development
            </Link>
            <Link
              href="/services/saas-development"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md"
            >
              SaaS Development
            </Link>
            <Link
              href="/services/web-application-development"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Web Application Development
            </Link>
            <Link
              href="/services/mobile-app-development"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Mobile App Development
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs font-semibold text-sky-600 hover:underline"
            >
              View All 12 Services →
            </Link>
          </div>

          <div className="border-t border-slate-100 pt-3 space-y-1.5">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-800 hover:bg-slate-50 rounded-md font-medium"
            >
              About Us
            </Link>
            <Link
              href="/work"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-800 hover:bg-slate-50 rounded-md font-medium"
            >
              Case Studies
            </Link>
            <Link
              href="/insights"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-800 hover:bg-slate-50 rounded-md font-medium"
            >
              Insights & Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-sm font-bold text-center text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm mt-2"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
