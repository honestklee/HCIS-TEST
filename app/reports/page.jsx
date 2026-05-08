"use client";

import { useState } from "react";
import AppShell from "../../components/layout/AppShell";

export default function ReportsPage() {
  const [selectedTab, setSelectedTab] = useState("payroll");
  const [viewMode, setViewMode] = useState("list");

  return (
    <AppShell activeKey="reports" searchPlaceholder="Search reports, files, or schedules...">
      <div className="p-margin-page max-w-container-max mx-auto w-full flex flex-col gap-gutter">
        {/* Header Section */}
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-1">
            <h2 className="font-h1 text-h1 text-primary">Enterprise Reports Center</h2>
            <p className="font-body-base text-on-surface-variant">Generate, schedule, and manage institutional HCIS data exports.</p>
          </div>
          <div className="flex gap-3">
            <a href="/coming-soon" className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-all shadow-sm">
              <span className="material-symbols-outlined">schedule_send</span>
              Schedule New
            </a>
            <a href="/coming-soon" className="flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:opacity-90 transition-all shadow-md">
              <span className="material-symbols-outlined">add</span>
              Create Report
            </a>
          </div>
        </div>

        {/* Bento Filter & Quick Stats */}
        <div className="grid grid-cols-12 gap-stack-gap">
          {/* Interactive Filters */}
          <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">tune</span>
                Report Filters
              </h3>
              <button className="text-primary font-label-sm text-label-sm hover:underline">Clear All Filters</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant">Date Range</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">calendar_today</span>
                  <select className="w-full pl-10 bg-surface-container-low border-none rounded-lg font-body-sm text-body-sm py-2.5 focus:ring-primary/20">
                    <option>Current Month (May 2024)</option>
                    <option>Previous Month (April 2024)</option>
                    <option>Current Quarter (Q2 2024)</option>
                    <option>Custom Range...</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant">Department</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">corporate_fare</span>
                  <select className="w-full pl-10 bg-surface-container-low border-none rounded-lg font-body-sm text-body-sm py-2.5 focus:ring-primary/20">
                    <option>All Departments</option>
                    <option>Retail Banking</option>
                    <option>Corporate Treasury</option>
                    <option>IT Operations</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant">Report Type</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">description</span>
                  <select className="w-full pl-10 bg-surface-container-low border-none rounded-lg font-body-sm text-body-sm py-2.5 focus:ring-primary/20">
                    <option>All Types</option>
                    <option>Summary Table</option>
                    <option>Detailed Transaction</option>
                    <option>Regulatory Export</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="col-span-12 lg:col-span-4 bg-primary p-6 rounded-xl shadow-md text-on-primary flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <p className="font-label-sm text-label-sm opacity-80 uppercase tracking-widest mb-1">Reports Generated Today</p>
              <h4 className="text-4xl font-black">24</h4>
            </div>
            <div className="relative z-10 flex items-center justify-between mt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-primary bg-secondary-container flex items-center justify-center">
                  <span className="text-[10px] text-on-secondary-container font-bold">PDF</span>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-primary bg-tertiary-container flex items-center justify-center">
                  <span className="text-[10px] text-on-tertiary-container font-bold">XLS</span>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-primary bg-surface-container-high flex items-center justify-center">
                  <span className="text-[10px] text-on-surface-variant font-bold">+4</span>
                </div>
              </div>
              <span className="font-label-sm text-label-sm bg-on-primary/10 px-2 py-1 rounded">Active Processing: 3</span>
            </div>
            {/* Decorative Circle */}
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-on-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Categories Tabs */}
        <div className="flex border-b border-outline-variant/30">
          <button 
            className={`px-6 py-3 border-b-2 font-bold font-label-md flex items-center gap-2 transition-colors ${
              selectedTab === "payroll" 
                ? "border-primary text-primary" 
                : "text-on-surface-variant hover:text-on-surface"
            }`}
            onClick={() => setSelectedTab("payroll")}
          >
            <span className="material-symbols-outlined text-[20px]">payments</span>
            Payroll
          </button>
          <button 
            className={`px-6 py-3 font-label-md flex items-center gap-2 transition-colors ${
              selectedTab === "tax" 
                ? "border-primary text-primary" 
                : "text-on-surface-variant hover:text-on-surface"
            }`}
            onClick={() => setSelectedTab("tax")}
          >
            <span className="material-symbols-outlined text-[20px]">account_balance</span>
            Tax (PPh21)
          </button>
          <button 
            className={`px-6 py-3 font-label-md flex items-center gap-2 transition-colors ${
              selectedTab === "attendance" 
                ? "border-primary text-primary" 
                : "text-on-surface-variant hover:text-on-surface"
            }`}
            onClick={() => setSelectedTab("attendance")}
          >
            <span className="material-symbols-outlined text-[20px]">event_available</span>
            Attendance
          </button>
          <button 
            className={`px-6 py-3 font-label-md flex items-center gap-2 transition-colors ${
              selectedTab === "compliance" 
                ? "border-primary text-primary" 
                : "text-on-surface-variant hover:text-on-surface"
            }`}
            onClick={() => setSelectedTab("compliance")}
          >
            <span className="material-symbols-outlined text-[20px]">verified_user</span>
            Compliance
          </button>
        </div>

        {/* Main Reports List & Recent Grid */}
        <div className="grid grid-cols-12 gap-gutter">
          {/* Available Reports Table */}
          <div className="col-span-12 xl:col-span-8 flex flex-col gap-4">
            <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 overflow-hidden">
              <div className="p-5 border-b border-outline-variant/10 flex justify-between items-center">
                <h3 className="font-h3 text-h3 text-on-surface">Available Reports</h3>
                <div className="flex items-center gap-2 bg-surface-container-low p-1 rounded-lg">
                  <button 
                    className={`p-1.5 rounded ${
                      viewMode === "list" ? "bg-surface-container-lowest shadow-sm" : "hover:bg-surface-container-lowest transition-all"
                    }`}
                    onClick={() => setViewMode("list")}
                  >
                    <span className="material-symbols-outlined text-[18px]">list</span>
                  </button>
                  <button 
                    className={`p-1.5 rounded ${
                      viewMode === "grid" ? "bg-surface-container-lowest shadow-sm" : "hover:bg-surface-container-lowest transition-all"
                    }`}
                    onClick={() => setViewMode("grid")}
                  >
                    <span className="material-symbols-outlined text-[18px]">grid_view</span>
                  </button>
                </div>
              </div>
              <table className="w-full text-left">
                <thead className="bg-surface-container-low/50">
                  <tr>
                    <th className="px-6 py-3 font-label-sm text-label-sm text-outline uppercase tracking-wider">Report Name</th>
                    <th className="px-6 py-3 font-label-sm text-label-sm text-outline uppercase tracking-wider">Frequency</th>
                    <th className="px-6 py-3 font-label-sm text-label-sm text-outline uppercase tracking-wider">Last Run</th>
                    <th className="px-6 py-3 font-label-sm text-label-sm text-outline uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  <tr className="hover:bg-surface-container-low/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-bold text-on-surface">Monthly Payroll Summary</span>
                        <span className="font-body-sm text-body-sm text-outline">Consolidated view of gross/net pay per dept.</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-0.5 rounded bg-secondary-container/50 text-on-secondary-container font-label-sm text-label-sm">Monthly</span>
                    </td>
                    <td className="px-6 py-4 font-data-tabular text-data-tabular text-on-surface-variant">May 01, 2024</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-primary-container/10 text-primary rounded-full" title="Generate">
                          <span className="material-symbols-outlined">play_arrow</span>
                        </button>
                        <button className="p-2 hover:bg-primary-container/10 text-primary rounded-full" title="Schedule">
                          <span className="material-symbols-outlined">event_repeat</span>
                        </button>
                        <button className="p-2 hover:bg-primary-container/10 text-primary rounded-full" title="Export PDF">
                          <span className="material-symbols-outlined">picture_as_pdf</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-bold text-on-surface">Overtime Analysis Report</span>
                        <span className="font-body-sm text-body-sm text-outline">Detailed breakdown of extra hours and costs.</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">On-Demand</span>
                    </td>
                    <td className="px-6 py-4 font-data-tabular text-data-tabular text-on-surface-variant">Apr 28, 2024</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-primary-container/10 text-primary rounded-full">
                          <span className="material-symbols-outlined">play_arrow</span>
                        </button>
                        <button className="p-2 hover:bg-primary-container/10 text-primary rounded-full">
                          <span className="material-symbols-outlined">event_repeat</span>
                        </button>
                        <button className="p-2 hover:bg-primary-container/10 text-primary rounded-full">
                          <span className="material-symbols-outlined">table_view</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-bold text-on-surface">Bonus & Incentives Audit</span>
                        <span className="font-body-sm text-body-sm text-outline">Audit trail for variable compensation payments.</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Quarterly</span>
                    </td>
                    <td className="px-6 py-4 font-data-tabular text-data-tabular text-on-surface-variant">Mar 31, 2024</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-primary-container/10 text-primary rounded-full">
                          <span className="material-symbols-outlined">play_arrow</span>
                        </button>
                        <button className="p-2 hover:bg-primary-container/10 text-primary rounded-full">
                          <span className="material-symbols-outlined">event_repeat</span>
                        </button>
                        <button className="p-2 hover:bg-primary-container/10 text-primary rounded-full">
                          <span className="material-symbols-outlined">csv</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-bold text-on-surface">Payroll Discrepancy Log</span>
                        <span className="font-body-sm text-body-sm text-outline">Identifies variances between cycles.</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">On-Demand</span>
                    </td>
                    <td className="px-6 py-4 font-data-tabular text-data-tabular text-on-surface-variant">May 12, 2024</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-primary-container/10 text-primary rounded-full">
                          <span className="material-symbols-outlined">play_arrow</span>
                        </button>
                        <button className="p-2 hover:bg-primary-container/10 text-primary rounded-full">
                          <span className="material-symbols-outlined">event_repeat</span>
                        </button>
                        <button className="p-2 hover:bg-primary-container/10 text-primary rounded-full">
                          <span className="material-symbols-outlined">table_view</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="p-4 border-t border-outline-variant/10 flex justify-center">
                <button className="text-primary font-label-md text-label-md hover:underline flex items-center gap-1">
                  Load More Reports
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
              </div>
            </div>
          </div>

          {/* Recent Generated Reports Section */}
          <div className="col-span-12 xl:col-span-4 flex flex-col gap-stack-gap">
            <div className="bg-surface-container-low/50 rounded-xl p-6 border border-outline-variant/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider">Recent Runs</h3>
                <button className="text-outline hover:text-primary transition-all">
                  <span className="material-symbols-outlined">refresh</span>
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {/* Status: Ready */}
                <div className="bg-surface-container-lowest p-4 rounded-lg shadow-sm flex flex-col gap-3 group relative overflow-hidden">
                  <div className="flex justify-between items-start relative z-10">
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md font-bold">Tax Summary Q1 2024</span>
                      <span className="font-label-sm text-[11px] text-outline">Requested 2h ago by System</span>
                    </div>
                    <span className="px-3 py-1 rounded-full font-label-sm text-label-sm inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Ready
                    </span>
                  </div>
                  <div className="flex items-center gap-2 relative z-10">
                    <button className="flex-1 py-1.5 bg-primary text-on-primary rounded text-label-sm font-label-sm flex items-center justify-center gap-1">
                      <span className="material-symbols-outlined text-sm">download</span>
                      Download
                    </button>
                    <button className="p-1.5 bg-surface-container-low text-on-surface-variant rounded">
                      <span className="material-symbols-outlined text-sm">more_vert</span>
                    </button>
                  </div>
                </div>

                {/* Status: Processing */}
                <div className="bg-surface-container-lowest p-4 rounded-lg shadow-sm flex flex-col gap-3 group">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md font-bold">Attendance Detailed - May</span>
                      <span className="font-label-sm text-[11px] text-outline">Started 5m ago • 72%</span>
                    </div>
                    <span className="px-3 py-1 rounded-full font-label-sm text-label-sm inline-flex items-center gap-1.5 bg-blue-100 text-blue-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      Processing
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{width: "72%"}}></div>
                  </div>
                </div>

                {/* Status: Failed */}
                <div className="bg-surface-container-lowest p-4 rounded-lg shadow-sm flex flex-col gap-3 group">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md font-bold">BPJS Ketenagakerjaan Log</span>
                      <span className="font-label-sm text-[11px] text-outline">Failed due to API timeout</span>
                    </div>
                    <span className="px-3 py-1 rounded-full font-label-sm text-label-sm inline-flex items-center gap-1.5 bg-red-100 text-red-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                      Failed
                    </span>
                  </div>
                  <button className="w-full py-1.5 border border-outline-variant text-on-surface-variant rounded text-label-sm font-label-sm flex items-center justify-center gap-1 hover:bg-surface-container-low">
                    <span className="material-symbols-outlined text-sm">replay</span>
                    Retry Generation
                  </button>
                </div>
              </div>
              <button className="w-full mt-6 py-2.5 border-2 border-dashed border-outline-variant rounded-lg font-label-sm text-label-sm text-outline hover:text-primary hover:border-primary transition-all">
                View Run History
              </button>
            </div>

            {/* Visual Section / Analytics Placeholder */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/20 shadow-sm">
              <div className="h-32 w-full relative">
                <img 
                  alt="Data Visualization" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYTGFZjKJyRsPLHaXZvv3l4kkXo5lBKn_JOhowcuIvI24yHRmP6oc9Ydr7455Rz2qb3p1OETcaOLualLOCvpscC_KUzgvyneWGRgggO1KTpWx1cC4xiqiN3kDXwOmDTRyNP4A38pA8yzkBc3V38WZEstCrQ5S7PgC_6oclriaA6KMAJnW9YfBP9jsofL9_pBGfo4mSts_7tldH123j3nLmcvBh_lZFHjSRGTOVVUXVcBKvMDQme3_BVF6hQ8oN_R5mj3iLjYykUbM"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
              </div>
              <div className="p-4 flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-primary font-bold">New Insights Available</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Payroll costs increased by 4.2% this cycle compared to April. View detailed cost drivers.</p>
                <a className="mt-2 text-primary font-bold text-label-sm flex items-center gap-1 group" href="#">
                  Analyze Drivers
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Export Options (Floating Action Bar Alternative) */}
      <div className="fixed bottom-8 right-8 flex gap-2">
        <div className="flex items-center gap-1 bg-surface-container-lowest border border-outline-variant rounded-full shadow-lg p-1.5">
          <button className="w-10 h-10 rounded-full hover:bg-surface-container-low flex items-center justify-center text-on-surface-variant" title="Export PDF">
            <span className="material-symbols-outlined">picture_as_pdf</span>
          </button>
          <button className="w-10 h-10 rounded-full hover:bg-surface-container-low flex items-center justify-center text-on-surface-variant" title="Export Excel">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>table_view</span>
          </button>
          <button className="w-10 h-10 rounded-full hover:bg-surface-container-low flex items-center justify-center text-on-surface-variant" title="Export CSV">
            <span className="material-symbols-outlined">csv</span>
          </button>
          <div className="h-6 w-px bg-outline-variant/30 mx-1"></div>
          <button className="bg-primary text-on-primary px-5 py-2 rounded-full font-label-md text-label-md flex items-center gap-2 hover:opacity-90 transition-all shadow-md">
            <span className="material-symbols-outlined text-sm">share</span>
            Export All
          </button>
        </div>
      </div>
    </AppShell>
  );
}
