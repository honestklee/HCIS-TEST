"use client";

import AppShell from "../../components/layout/AppShell";

export default function DisbursementManagementPage() {
  return (
    <AppShell activeKey="disbursement-management" searchPlaceholder="Search transactions, reference IDs...">
      <main className="flex-1 flex flex-col min-w-0">
        {/* Main Content Canvas */}
        <div className="p-margin-page max-w-container-max mx-auto w-full space-y-stack-gap">
          {/* Header Section */}
          <div className="flex justify-between items-end">
            <div>
              <h1 className="font-h1 text-h1 text-primary">Bulk Disbursement</h1>
              <p className="text-body-base text-on-surface-variant mt-1">Manage enterprise-wide payroll transfers and bank integrations.</p>
            </div>
            <div className="flex gap-3">
              <a href="/coming-soon" className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-outline-variant bg-surface-container-lowest text-label-md font-semibold text-on-surface-variant hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-[20px]">download</span>
                Export CSV for Bank
              </a>
              <a href="/coming-soon" className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-on-primary text-label-md font-semibold hover:opacity-90 active:scale-95 transition-all shadow-sm">
                <span className="material-symbols-outlined text-[20px]">send</span>
                Initiate Transfer
              </a>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-gap">
            {/* Transfer Summary Card (Bento Focus) */}
            <div className="lg:col-span-4 bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-label-md font-semibold text-on-surface-variant">Transfer Summary</span>
                  <span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Current Cycle</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-label-sm text-on-surface-variant">Total Amount</p>
                    <h2 className="text-h1 font-h1 text-primary">IDR 2,450,000,000</h2>
                  </div>
                  <div className="flex items-center gap-4 py-4 border-t border-b border-outline-variant/10">
                    <div className="flex-1">
                      <p className="text-label-sm text-on-surface-variant">Recipients</p>
                      <p className="text-h3 font-h3">1,240</p>
                    </div>
                    <div className="flex-1 border-l border-outline-variant/10 pl-4">
                      <p className="text-label-sm text-on-surface-variant">Processing</p>
                      <p className="text-h3 font-h3 text-tertiary-container">12</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex justify-between text-label-sm mb-2">
                  <span>Success Rate</span>
                  <span className="font-bold text-on-tertiary-fixed-variant">98.5%</span>
                </div>
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-on-tertiary-container w-[98.5%]"></div>
                </div>
              </div>
            </div>

            {/* Bank Integration Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Bank Card 1 */}
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-5 shadow-sm relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-3xl">account_balance</span>
                    </div>
                    <div>
                      <h3 className="font-label-md font-bold text-on-surface">Bank Mandiri</h3>
                      <p className="text-label-sm text-on-surface-variant">Host-to-Host (API)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-green-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-100">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="text-[11px] font-bold">CONNECTED</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[11px] text-on-surface-variant uppercase font-bold tracking-tight">Balance</p>
                    <p className="text-label-md font-semibold">IDR 5.2B</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-on-surface-variant uppercase font-bold tracking-tight">Last Sync</p>
                    <p className="text-label-md font-semibold">2 mins ago</p>
                  </div>
                </div>
              </div>

              {/* Bank Card 2 */}
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-5 shadow-sm relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary-container/20 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary text-3xl">account_balance</span>
                    </div>
                    <div>
                      <h3 className="font-label-md font-bold text-on-surface">Bank BCA</h3>
                      <p className="text-label-sm text-on-surface-variant">Virtual Account</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-green-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-100">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="text-[11px] font-bold">CONNECTED</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[11px] text-on-surface-variant uppercase font-bold tracking-tight">Balance</p>
                    <p className="text-label-md font-semibold">IDR 1.8B</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-on-surface-variant uppercase font-bold tracking-tight">Last Sync</p>
                    <p className="text-label-md font-semibold">15 mins ago</p>
                  </div>
                </div>
              </div>

              {/* Bank Card 3 (Offline/Warning) */}
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-5 shadow-sm relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-error-container/20 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-error text-3xl">account_balance</span>
                    </div>
                    <div>
                      <h3 className="font-label-md font-bold text-on-surface">Bank BNI</h3>
                      <p className="text-label-sm text-on-surface-variant">Manual Upload</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-error-container/30 text-error px-2.5 py-1 rounded-full border border-error-container">
                    <span className="w-2 h-2 rounded-full bg-error"></span>
                    <span className="text-[11px] font-bold">RE-AUTH REQ</span>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="w-full py-2 bg-surface-container-low text-label-sm font-bold text-primary rounded-lg border border-outline-variant/30 hover:bg-surface-container transition-colors">
                    Authenticate Connection
                  </button>
                </div>
              </div>

              {/* Connect New Card */}
              <div className="bg-surface-container-low border-2 border-dashed border-outline-variant rounded-xl p-5 flex flex-col items-center justify-center group cursor-pointer hover:bg-surface-container-high transition-all">
                <div className="w-10 h-10 rounded-full bg-outline-variant/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-on-surface-variant">add</span>
                </div>
                <p className="text-label-md font-bold text-on-surface-variant mt-2">Add New Bank</p>
              </div>
            </div>
          </div>

          {/* Transfer History Table */}
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-outline-variant/10 flex justify-between items-center">
              <h3 className="text-h3 font-h3 text-on-surface">Transfer History</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 rounded-lg border border-outline-variant text-[12px] font-bold text-on-surface-variant hover:bg-surface-container-low flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">filter_list</span>
                  Filter
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container-low border-b border-outline-variant/20">
                  <tr>
                    <th className="px-6 py-3 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Reference No</th>
                    <th className="px-6 py-3 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Bank</th>
                    <th className="px-6 py-3 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">Amount</th>
                    <th className="px-6 py-3 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-center">Status</th>
                    <th className="px-6 py-3 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {/* Row 1 */}
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-6 py-4 font-data-tabular text-data-tabular">24 Oct 2023</td>
                    <td className="px-6 py-4 font-data-tabular text-data-tabular font-medium">TRX-99201-BMA</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">account_balance</span>
                        <span className="font-data-tabular text-data-tabular">Mandiri</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-data-tabular text-data-tabular text-right font-bold">IDR 1,200,000,000</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-green-100 text-green-800">
                          SUCCESS
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-6 py-4 font-data-tabular text-data-tabular">23 Oct 2023</td>
                    <td className="px-6 py-4 font-data-tabular text-data-tabular font-medium">TRX-99185-BCA</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">account_balance</span>
                        <span className="font-data-tabular text-data-tabular">BCA</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-data-tabular text-data-tabular text-right font-bold">IDR 850,500,000</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800">
                          PENDING
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-6 py-4 font-data-tabular text-data-tabular">22 Oct 2023</td>
                    <td className="px-6 py-4 font-data-tabular text-data-tabular font-medium">TRX-98922-BMA</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">account_balance</span>
                        <span className="font-data-tabular text-data-tabular">Mandiri</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-data-tabular text-data-tabular text-right font-bold">IDR 45,000,000</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-100 text-red-800">
                          FAILED
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-6 py-4 font-data-tabular text-data-tabular">20 Oct 2023</td>
                    <td className="px-6 py-4 font-data-tabular text-data-tabular font-medium">TRX-98701-BNI</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">account_balance</span>
                        <span className="font-data-tabular text-data-tabular">BNI</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-data-tabular text-data-tabular text-right font-bold">IDR 354,500,000</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-green-100 text-green-800">
                          SUCCESS
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-outline-variant/10 flex items-center justify-between">
              <p className="text-label-sm text-on-surface-variant">Showing 1-4 of 150 transactions</p>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg border border-outline-variant/30 hover:bg-surface-container transition-colors disabled:opacity-40" disabled>
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="p-2 rounded-lg border border-outline-variant/30 hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AppShell>
  );
}
