"use client";

import AppShell from "../../components/layout/AppShell";

export default function PayrollProcessingPage() {
  return (
    <AppShell activeKey="payroll-processing" searchPlaceholder="Search employee or batch ID...">
      <main className="flex-1 overflow-y-auto p-margin-page max-w-container-max mx-auto w-full">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-h1 text-h1 text-primary">Payroll Processing Center</h2>
            <p className="text-on-surface-variant mt-1">Manage monthly cycles and validate disbursement batches.</p>
          </div>
          <div className="flex gap-3">
            <a href="/coming-soon" className="px-6 py-2.5 bg-surface-container-lowest border border-outline-variant text-primary font-label-md rounded-lg hover:bg-surface-container-low transition-all">
              Export Report
            </a>
            <button className="px-6 py-2.5 bg-primary text-on-primary font-label-md rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>play_arrow</span>
              Run Payroll
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Monthly Payroll Cycle Stepper */}
          <div className="col-span-12 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
            <h3 className="font-label-md text-on-surface-variant mb-6 uppercase tracking-wider">Monthly Payroll Cycle: October 2023</h3>
            <div className="relative flex justify-between items-start">
              {/* Connector Line */}
              <div className="absolute top-5 left-0 w-full h-[2px] bg-outline-variant/20 -z-0"></div>
              <div className="absolute top-5 left-0 w-[66%] h-[2px] bg-primary -z-0 transition-all"></div>
              
              {/* Step 1: Generate */}
              <div className="flex flex-col items-center text-center relative z-10 w-1/4">
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined">check</span>
                </div>
                <span className="font-label-md text-primary">1. Generate</span>
                <span className="text-[11px] text-on-surface-variant mt-1">Completed Oct 15</span>
              </div>
              
              {/* Step 2: Validate */}
              <div className="flex flex-col items-center text-center relative z-10 w-1/4">
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined">check</span>
                </div>
                <span className="font-label-md text-primary">2. Validate</span>
                <span className="text-[11px] text-on-surface-variant mt-1">Completed Oct 18</span>
              </div>
              
              {/* Step 3: Approval */}
              <div className="flex flex-col items-center text-center relative z-10 w-1/4">
                <div className="w-10 h-10 rounded-full bg-primary ring-4 ring-primary/20 text-on-primary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined">pending</span>
                </div>
                <span className="font-label-md text-primary font-bold">3. Approval</span>
                <span className="text-[11px] text-primary mt-1">In Progress</span>
              </div>
              
              {/* Step 4: Publish */}
              <div className="flex flex-col items-center text-center relative z-10 w-1/4">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined">publish</span>
                </div>
                <span className="font-label-md text-on-surface-variant">4. Publish</span>
                <span className="text-[11px] text-on-surface-variant mt-1">Estimated Oct 25</span>
              </div>
            </div>
          </div>

          {/* Summary Card */}
          <div className="col-span-12 lg:col-span-4 bg-primary-container text-on-primary-container p-6 rounded-xl shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-on-primary-container/80 font-label-md mb-2">Total Period Disbursement</p>
              <h4 className="text-[32px] font-black leading-tight">IDR 4,280,500,000</h4>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-xs opacity-70">Employees</span>
                  <span className="font-bold">1,420</span>
                </div>
                <div className="w-[1px] h-8 bg-on-primary-container/20"></div>
                <div className="flex flex-col">
                  <span className="text-xs opacity-70">Avg. / Head</span>
                  <span className="font-bold">IDR 3.01M</span>
                </div>
              </div>
            </div>
            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[120px] opacity-10">payments</span>
          </div>

          {/* Validation Dashboard / Anomalies */}
          <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-h3 text-h3 text-on-surface">Validation Dashboard</h3>
              <span className="bg-error-container text-on-error-container text-xs font-bold px-3 py-1 rounded-full">12 Anomalies Found</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-error/5 border border-error/10 rounded-lg">
                <span className="material-symbols-outlined text-error">assignment_late</span>
                <div>
                  <p className="font-label-md text-on-surface">Missing Tax IDs (NPWP)</p>
                  <p className="text-xs text-on-surface-variant mt-1">8 employees have invalid or missing tax identifications.</p>
                  <button className="text-primary text-xs font-bold mt-2 hover:underline">Fix Now</button>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-tertiary-container/10 border border-tertiary-container/20 rounded-lg">
                <span className="material-symbols-outlined text-on-tertiary-fixed-variant">trending_up</span>
                <div>
                  <p className="font-label-md text-on-surface">Unusual Overtime</p>
                  <p className="text-xs text-on-surface-variant mt-1">4 employees reported overtime &gt; 60hrs/week.</p>
                  <button className="text-primary text-xs font-bold mt-2 hover:underline">Review Logs</button>
                </div>
              </div>
            </div>
          </div>

          {/* Payroll Batches Table */}
          <div className="col-span-12 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
            <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
              <h3 className="font-h3 text-h3 text-on-surface">Recent Payroll Batches</h3>
              <div className="flex gap-2">
                <button className="p-2 border border-outline-variant rounded-md hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-sm">filter_list</span>
                </button>
                <button className="p-2 border border-outline-variant rounded-md hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-sm">more_vert</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low/50">
                    <th className="px-6 py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Batch ID</th>
                    <th className="px-6 py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Entity / Department</th>
                    <th className="px-6 py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Payment Date</th>
                    <th className="px-6 py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {/* Row 1 */}
                  <tr className="hover:bg-surface-container-low/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-label-md text-primary">#PB-202310-001</span>
                        <span className="text-xs text-on-surface-variant">Created by Admin</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-body-sm">Corporate Banking Div.</td>
                    <td className="px-6 py-4 text-body-sm">Oct 25, 2023</td>
                    <td className="px-6 py-4 font-data-tabular">IDR 1,240,000,000</td>
                    <td className="px-6 py-4">
                      <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold">Processing</span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-primary hover:text-primary-container font-label-md">View Details</button>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-surface-container-low/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-label-md text-primary">#PB-202310-002</span>
                        <span className="text-xs text-on-surface-variant">System Generated</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-body-sm">Retail &amp; Branch Ops.</td>
                    <td className="px-6 py-4 text-body-sm">Oct 26, 2023</td>
                    <td className="px-6 py-4 font-data-tabular">IDR 2,100,500,000</td>
                    <td className="px-6 py-4">
                      <span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full text-xs font-bold">Draft</span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-primary hover:text-primary-container font-label-md">View Details</button>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-surface-container-low/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-label-md text-primary">#PB-202309-001</span>
                        <span className="text-xs text-on-surface-variant">Archived Batch</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-body-sm">General HQ - All Dept.</td>
                    <td className="px-6 py-4 text-body-sm">Sep 25, 2023</td>
                    <td className="px-6 py-4 font-data-tabular">IDR 4,050,000,000</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-on-tertiary-fixed-variant bg-tertiary-fixed/30 px-3 py-1 rounded-full w-fit">
                        <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                        <span className="text-xs font-bold">Completed</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-primary hover:text-primary-container font-label-md">View Details</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-surface-container-low/20 border-t border-outline-variant/10 flex justify-between items-center">
              <span className="text-body-sm text-on-surface-variant">Showing 3 of 42 batches</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-low transition-all">Previous</button>
                <button className="px-3 py-1 border border-outline-variant rounded bg-primary text-on-primary">1</button>
                <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-low transition-all">2</button>
                <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-low transition-all">Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button Contextual */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-[100]">
        <span className="material-symbols-outlined">support_agent</span>
      </button>
    </AppShell>
  );
}
