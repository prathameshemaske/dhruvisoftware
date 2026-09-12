"use client";

import React, { useState } from "react";
import { CheckCircle2, Clock, Mail, Send, Sparkles } from "lucide-react";
import { companyData } from "@/data/companyData";

export function ProjectPlannerForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialFormState = {
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "Custom Software Development",
    budget: "$10,000 - $25,000",
    timeline: "1 - 2 Months",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleResetForm = () => {
    setFormData(initialFormState);
    setFormSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error("Failed to post inquiry:", err);
    } finally {
      setLoading(false);
      setFormSubmitted(true);
    }
  };

  return (
    <section id="project-planner" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono">
            <span>Start Your Project</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Have a Project or Software Need?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Tell us about what you want to build, update, or automate. Our team will review your message and reply with practical recommendations and clear next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info & SLA Assurances */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900">Why Start a Conversation With Us?</h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Direct Technical Leadership Access</strong>
                    <span>You'll speak directly with senior product architects, not high-pressure sales reps.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Rapid SLA Technical Response</strong>
                    <span>We evaluate project feasibility, tech stack recommendations, and scope frameworks promptly.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Strict NDA & IP Privacy</strong>
                    <span>Your product concept, business workflow, and data privacy are protected from Day 1.</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 space-y-3 font-mono text-xs text-slate-600">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-sky-600" />
                  <span>{companyData.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-500">
                  <Clock className="h-4 w-4 text-sky-600" />
                  <span>Mon - Fri: Technical Team Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-Step Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="h-16 w-16 rounded-full bg-sky-50 text-sky-600 border border-sky-200 mx-auto flex items-center justify-center">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold">
                    We Will Serve You ASAP — Currently in Development Phase
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Project Inquiry Received!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-sky-700">{formData.name}</strong>. We will serve you ASAP! Currently, we are in the Development phase, and our team will review your inquiry promptly.
                  </p>
                  <button
                    onClick={handleResetForm}
                    className="mt-4 px-6 py-2.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-700 font-semibold">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-700 font-semibold">Company / Organization</label>
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-700 font-semibold">Work Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-700 font-semibold">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 font-semibold">Project Type *</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                    >
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="SaaS Product Engineering">SaaS Product Engineering</option>
                      <option value="Web Application Development">Web Application Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="MVP Development">MVP Development</option>
                      <option value="Enterprise Software Platform">Enterprise Software Platform</option>
                      <option value="Legacy Software Modernization">Legacy Software Modernization</option>
                      <option value="API & System Integration">API & System Integration</option>
                    </select>
                  </div>

                  {/* Description */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 font-semibold">Project Overview & Objectives *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Briefly describe what software you want to build, the business problem you need to solve, or key required capabilities..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 transition-all shadow-md shadow-sky-600/20 flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <span className="flex items-center space-x-2">
                        <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Evaluating Technical Scope...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Submit Project Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
