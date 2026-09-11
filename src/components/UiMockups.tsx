"use client";

import React, { useState } from "react";
import {
  Activity,
  BarChart3,
  CheckCircle2,
  Clock,
  Cpu,
  Database,
  FileText,
  Globe,
  Kanban,
  Layers,
  LayoutDashboard,
  Lock,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

export function NeojanDashboardMockup() {
  const [activeTab, setActiveTab] = useState<"overview" | "workflows" | "analytics">("overview");

  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden text-slate-800 text-xs sm:text-sm font-sans">
      {/* Window Controls & Header */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100 px-4 py-3">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-amber-400"></div>
          <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
          <span className="ml-2 text-xs font-mono text-slate-600">neojan-v2.4.cloud · Enterprise Command Center</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 border border-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping mr-1.5"></span>
            System Live
          </span>
          <span className="text-xs font-mono text-slate-500 hidden sm:inline">Uptime 99.98%</span>
        </div>
      </div>

      {/* Internal Navigation Bar */}
      <div className="flex border-b border-slate-200 bg-slate-50/50 px-4">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex items-center space-x-2 px-4 py-2.5 font-medium border-b-2 transition-all ${
            activeTab === "overview"
              ? "border-sky-600 text-sky-700 bg-sky-50/50"
              : "border-transparent text-slate-600 hover:text-slate-900"
          }`}
        >
          <LayoutDashboard className="h-4 w-4" />
          <span>Operations Overview</span>
        </button>
        <button
          onClick={() => setActiveTab("workflows")}
          className={`flex items-center space-x-2 px-4 py-2.5 font-medium border-b-2 transition-all ${
            activeTab === "workflows"
              ? "border-sky-600 text-sky-700 bg-sky-50/50"
              : "border-transparent text-slate-600 hover:text-slate-900"
          }`}
        >
          <Workflow className="h-4 w-4" />
          <span>Workflow Engine</span>
        </button>
        <button
          onClick={() => setActiveTab("analytics")}
          className={`flex items-center space-x-2 px-4 py-2.5 font-medium border-b-2 transition-all ${
            activeTab === "analytics"
              ? "border-sky-600 text-sky-700 bg-sky-50/50"
              : "border-transparent text-slate-600 hover:text-slate-900"
          }`}
        >
          <BarChart3 className="h-4 w-4" />
          <span>Real-Time KPIs</span>
        </button>
      </div>

      {/* Main Visual Workspace */}
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        {activeTab === "overview" && (
          <>
            {/* KPI Metric Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                  <span>Automated Tasks Today</span>
                  <Zap className="h-4 w-4 text-sky-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900">48,290</div>
                <div className="text-xs text-emerald-600 mt-1 flex items-center font-medium">
                  ↑ 14% vs yesterday
                </div>
              </div>
              <div className="p-3 sm:p-4 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                  <span>API Response Time</span>
                  <Activity className="h-4 w-4 text-emerald-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900">42 ms</div>
                <div className="text-xs text-emerald-600 mt-1 font-medium">Sub-second latency</div>
              </div>
              <div className="p-3 sm:p-4 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                  <span>Active Connected Microservices</span>
                  <Layers className="h-4 w-4 text-indigo-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900">18 / 18</div>
                <div className="text-xs text-slate-500 mt-1">All services healthy</div>
              </div>
              <div className="p-3 sm:p-4 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                  <span>Tenant Data Security</span>
                  <ShieldCheck className="h-4 w-4 text-purple-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900">AES-256</div>
                <div className="text-xs text-purple-600 mt-1 font-medium">Encrypted at rest</div>
              </div>
            </div>

            {/* Live Activity & Workflow Status Table */}
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                  <Workflow className="h-4 w-4 text-sky-600" />
                  Active Operational Data Pipelines
                </h4>
                <span className="text-xs text-slate-500 font-mono">Live feed</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500">
                      <th className="pb-2">Pipeline Name</th>
                      <th className="pb-2">Source → Target</th>
                      <th className="pb-2">Throughput</th>
                      <th className="pb-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="py-2.5 font-medium text-sky-700">Inventory Sync Gateway</td>
                      <td className="py-2.5 text-slate-500">PostgreSQL → Warehouse Node</td>
                      <td className="py-2.5">1,240 msg/sec</td>
                      <td className="py-2.5">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-medium text-sky-700">Billing & Invoice Webhook</td>
                      <td className="py-2.5 text-slate-500">Stripe API → Financial Ledger</td>
                      <td className="py-2.5">380 msg/sec</td>
                      <td className="py-2.5">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-medium text-sky-700">Multi-Branch Order Router</td>
                      <td className="py-2.5 text-slate-500">Web Portal → Regional Dispatch</td>
                      <td className="py-2.5">890 msg/sec</td>
                      <td className="py-2.5">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                          Active
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {activeTab === "workflows" && (
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded bg-sky-100 text-sky-700 border border-sky-200">
                  <Workflow className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Automated Order Verification & Dispatch Rule</div>
                  <div className="text-xs text-slate-500">Trigger: Order Placed → Condition: Credit Check & Inventory → Action: Auto Dispatch</div>
                </div>
              </div>
              <span className="px-2.5 py-1 text-xs rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono font-medium">
                Rule Active
              </span>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded bg-indigo-100 text-indigo-700 border border-indigo-200">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Cross-Branch ERP Ledger Synchronization</div>
                  <div className="text-xs text-slate-500">Trigger: Batch Cron (Every 15 min) → Action: Reconcile DB Schema & Push Audit Logs</div>
                </div>
              </div>
              <span className="px-2.5 py-1 text-xs rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono font-medium">
                Rule Active
              </span>
            </div>
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-600">
              <span>Operational Efficiency & Throughput (24-Hour Curve)</span>
              <span className="font-mono text-sky-700 font-semibold">Peak Performance +99.4%</span>
            </div>
            {/* Visual Bar Graph */}
            <div className="flex items-end space-x-2 h-32 pt-4">
              {[40, 65, 50, 80, 95, 75, 88, 92, 100, 85, 90, 96].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                  <div
                    className="w-full rounded-t bg-gradient-to-t from-sky-400 to-sky-600 group-hover:to-emerald-500 transition-all"
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="text-[9px] font-mono text-slate-400">{i * 2}h</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function TalentgateDashboardMockup() {
  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden text-slate-800 text-xs sm:text-sm font-sans">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100 px-4 py-3">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-amber-400"></div>
          <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
          <span className="ml-2 text-xs font-mono text-slate-600">talentgate-app.com · Candidate Kanban Suite</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 border border-indigo-200">
            <Sparkles className="h-3 w-3 mr-1 text-indigo-600" />
            AI Resume Match Enabled
          </span>
        </div>
      </div>

      {/* Kanban Board View */}
      <div className="p-4 sm:p-6 overflow-x-auto">
        <div className="flex space-x-4 min-w-[650px]">
          {/* Column 1: Applications */}
          <div className="flex-1 rounded-lg bg-slate-50 border border-slate-200 p-3 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-slate-500" />
                Applications
              </span>
              <span className="px-2 py-0.5 rounded-full bg-slate-200 text-xs font-mono text-slate-700">14</span>
            </div>
            <div className="p-3 rounded bg-white border border-slate-200 shadow-sm hover:border-indigo-400 transition-all space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-slate-900">Alex Chen</div>
                  <div className="text-[11px] text-slate-500">Senior Full-Stack Engineer</div>
                </div>
                <span className="px-1.5 py-0.5 text-[10px] rounded bg-emerald-50 text-emerald-700 font-mono font-medium border border-emerald-200">94% Match</span>
              </div>
              <div className="text-[11px] text-slate-600 flex items-center gap-1">
                <FileText className="h-3 w-3 text-indigo-600" /> React, Node.js, PostgreSQL, AWS
              </div>
            </div>
            <div className="p-3 rounded bg-white border border-slate-200 shadow-sm hover:border-indigo-400 transition-all space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-slate-900">Sarah Jenkins</div>
                  <div className="text-[11px] text-slate-500">DevOps Specialist</div>
                </div>
                <span className="px-1.5 py-0.5 text-[10px] rounded bg-emerald-50 text-emerald-700 font-mono font-medium border border-emerald-200">89% Match</span>
              </div>
              <div className="text-[11px] text-slate-600 flex items-center gap-1">
                <FileText className="h-3 w-3 text-indigo-600" /> Docker, Kubernetes, Terraform
              </div>
            </div>
          </div>

          {/* Column 2: Tech Interview */}
          <div className="flex-1 rounded-lg bg-slate-50 border border-slate-200 p-3 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="font-semibold text-indigo-700 flex items-center gap-1.5">
                <Kanban className="h-3.5 w-3.5 text-indigo-600" />
                Technical Interview
              </span>
              <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-xs font-mono text-indigo-800 border border-indigo-200">6</span>
            </div>
            <div className="p-3 rounded bg-white border border-indigo-200 shadow-sm space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-slate-900">Marcus Vance</div>
                  <div className="text-[11px] text-slate-500">Lead System Architect</div>
                </div>
                <span className="px-1.5 py-0.5 text-[10px] rounded bg-emerald-50 text-emerald-700 font-mono font-medium border border-emerald-200">98% Match</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-indigo-700 bg-indigo-50 p-1.5 rounded border border-indigo-100 font-medium">
                <span>Scorecard: 4.9 / 5.0</span>
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              </div>
            </div>
          </div>

          {/* Column 3: Offer Accepted */}
          <div className="flex-1 rounded-lg bg-slate-50 border border-slate-200 p-3 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="font-semibold text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                Offer Accepted
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-xs font-mono text-emerald-800 border border-emerald-200">4</span>
            </div>
            <div className="p-3 rounded bg-white border border-emerald-200 shadow-sm space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-slate-900">Priya Sharma</div>
                  <div className="text-[11px] text-slate-500">Principal UX Architect</div>
                </div>
                <span className="px-1.5 py-0.5 text-[10px] rounded bg-emerald-100 text-emerald-800 font-mono font-medium">Hired</span>
              </div>
              <div className="text-[11px] text-emerald-700 flex items-center gap-1 font-medium">
                <Clock className="h-3 w-3" /> Time-to-hire: 12 Days (40% faster)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CustomSoftwareArchitectureDiagram() {
  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-lg text-slate-800 font-sans">
      <div className="text-center mb-6">
        <span className="text-xs font-mono text-sky-600 tracking-wider uppercase font-semibold">System Blueprint</span>
        <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-1">High-Availability Product Architecture</h4>
        <p className="text-xs text-slate-600 mt-0.5">Engineered for zero downtime, low latency, and modular scaling.</p>
      </div>

      {/* Node Flow Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        {/* Layer 1: Clients */}
        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-center space-y-2">
          <div className="inline-flex p-2.5 rounded-lg bg-sky-100 text-sky-700 border border-sky-200">
            <Globe className="h-5 w-5" />
          </div>
          <div className="font-semibold text-slate-900 text-xs">Client Applications</div>
          <div className="text-[11px] text-slate-500">Web App (Next.js), Mobile App (iOS/Android), PWA</div>
        </div>

        {/* Layer 2: API Gateway */}
        <div className="p-4 rounded-lg bg-slate-50 border border-sky-200 text-center space-y-2 relative">
          <div className="inline-flex p-2.5 rounded-lg bg-indigo-100 text-indigo-700 border border-indigo-200">
            <Lock className="h-5 w-5" />
          </div>
          <div className="font-semibold text-sky-700 text-xs">Secure API Gateway</div>
          <div className="text-[11px] text-slate-500">JWT Auth, Rate Limiting, CORS, Load Balancer</div>
        </div>

        {/* Layer 3: Microservices */}
        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-center space-y-2">
          <div className="inline-flex p-2.5 rounded-lg bg-purple-100 text-purple-700 border border-purple-200">
            <Cpu className="h-5 w-5" />
          </div>
          <div className="font-semibold text-slate-900 text-xs">Microservice Workers</div>
          <div className="text-[11px] text-slate-500">Workflow Engine, AI Parsing, Notifications, Rules</div>
        </div>

        {/* Layer 4: Databases & Cloud */}
        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-center space-y-2">
          <div className="inline-flex p-2.5 rounded-lg bg-emerald-100 text-emerald-700 border border-emerald-200">
            <Database className="h-5 w-5" />
          </div>
          <div className="font-semibold text-emerald-700 text-xs">Cloud Persistence</div>
          <div className="text-[11px] text-slate-500">PostgreSQL Replicas, Redis Cache, S3 Object Storage</div>
        </div>
      </div>
    </div>
  );
}
