import {
  BankOutlined,
  CheckCircleFilled,
  DollarOutlined,
  PlusOutlined,
  TeamOutlined,
  UserAddOutlined,
  WalletOutlined,
  FieldTimeOutlined,
  FilterOutlined,
  FileTextOutlined,
  VerifiedOutlined,
} from "@ant-design/icons";
import AppShell from "../../components/layout/AppShell";
import { dashboardStats, recentBatches } from "../../data/dummyData";

// Add icons to stats data
const stats = dashboardStats.map((stat, index) => {
  const icons = [<DollarOutlined />, <TeamOutlined />, <FieldTimeOutlined />, <BankOutlined />];
  return { ...stat, icon: icons[index] };
});

export default function DashboardPage() {
  return (
    <AppShell activeKey="dashboard">
      <div className="flex-1 flex flex-col min-w-0">
        <main className="p-8 max-w-[1440px] mx-auto w-full space-y-6">
          {/* Page Header */}
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-[30px] font-semibold text-on-surface leading-[38px]">Dashboard Overview</h2>
              <p className="text-base text-on-surface-variant">
                Welcome back, here is the summary of Mandiri payroll status for October 2023.
              </p>
            </div>
            <div className="flex gap-3">
              <a href="/coming-soon" className="px-4 py-2 border border-outline-variant text-on-surface font-label-md rounded-lg hover:bg-surface-container-low transition-colors">
                Download Report
              </a>
              <a href="/coming-soon" className="px-4 py-2 bg-primary text-on-primary font-label-md rounded-lg shadow-sm hover:brightness-110 transition-all">
                Run Payroll Cycle
              </a>
            </div>
          </div>

          {/* Analytics Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Payroll */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-secondary-container/50 rounded-lg">
                  <DollarOutlined className="text-primary" />
                </div>
                <span className="text-sm text-on-tertiary-fixed-variant bg-tertiary-fixed px-2 py-0.5 rounded-full">+4.2%</span>
              </div>
              <p className="text-sm text-on-surface-variant">Total Payroll (IDR)</p>
              <h3 className="text-[24px] font-semibold text-on-surface mt-1">4.28B</h3>
              <div className="mt-4 h-12 flex items-end gap-1">
                <div className="w-full bg-primary/20 h-6 rounded-sm"></div>
                <div className="w-full bg-primary/20 h-9 rounded-sm"></div>
                <div className="w-full bg-primary h-12 rounded-sm"></div>
                <div className="w-full bg-primary/20 h-8 rounded-sm"></div>
                <div className="w-full bg-primary/20 h-10 rounded-sm"></div>
              </div>
            </div>

            {/* Active Employees */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-secondary-container/50 rounded-lg">
                  <TeamOutlined className="text-primary" />
                </div>
                <span className="text-sm text-on-tertiary-fixed-variant bg-tertiary-fixed px-2 py-0.5 rounded-full">+12</span>
              </div>
              <p className="text-sm text-on-surface-variant">Active Employees</p>
              <h3 className="text-[24px] font-semibold text-on-surface mt-1">1,482</h3>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img alt="Avatar" className="h-6 w-6 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2VJlKd4Irtwx8FAC_RutYBnqqba75PJjYVBfyojSIDsMYfV_9biQchNLGUmsGFARVD54-ZsOX3a99-nEd-gcVF9-FzdAWzY1ER7CMEZiUBskGyMIQtToIVgFXB78lWfxOqMOn4MUQxHPGXjk7SGp9kipyfAT95-tK-VtKZgWrX9HHlZlFOXOTywZH8E9_4tS4IvmWxVUYfm0f0FxbA5GSv2A7THBu2qHjctGNBPJv9G2CrU80U6Z5ioAiW9L_1XSON4CorYJ63Dg"/>
                  <img alt="Avatar" className="h-6 w-6 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3tHIST9dtPVio7wabQhOgPirzcbdFuSJtDdvNI683zy2WBWz8LT_LVbLqbYOR2PbtbyK8VAz1__sXHtMAnVN2Dbqo5HCBxnPdj3h_K7VALH-XifQQG1cORmcroNiAObZFV8jH61zPHdtytxZY6DG2rfTF-vTFH3mgeKYPezceDeir-3C2m6c2FYZwlHRkRidtXqTmB0VwCtMyhKljgTKo5UOf1UgCtrMI2q3HnGVAENNiEJLhXtFkHiOxB--HnKZOUn55XBdkAnc"/>
                </div>
                <span className="text-[11px] text-on-surface-variant font-medium">Recently Joined</span>
              </div>
            </div>

            {/* Total Overtime */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-secondary-container/50 rounded-lg">
                  <FieldTimeOutlined className="text-primary" />
                </div>
                <span className="text-sm text-error bg-error-container/50 px-2 py-0.5 rounded-full">+18%</span>
              </div>
              <p className="text-sm text-on-surface-variant">Overtime Hours</p>
              <h3 className="text-[24px] font-semibold text-on-surface mt-1">1,240h</h3>
              <div className="mt-4 bg-surface-container h-1.5 rounded-full overflow-hidden">
                <div className="bg-error w-[75%] h-full rounded-full"></div>
              </div>
            </div>

            {/* BPJS/Tax Stats */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-secondary-container/50 rounded-lg">
                  <BankOutlined className="text-primary" />
                </div>
                <span className="text-sm text-on-tertiary-fixed-variant bg-secondary-fixed px-2 py-0.5 rounded-full">Paid</span>
              </div>
              <p className="text-sm text-on-surface-variant">Tax & BPJS Compliance</p>
              <h3 className="text-[24px] font-semibold text-on-surface mt-1">100%</h3>
              <div className="mt-4 flex items-center gap-2 text-on-tertiary-fixed-variant">
                <CheckCircleFilled />
                <span className="text-sm">All filings submitted</span>
              </div>
            </div>
          </div>

          {/* Visualization Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Payroll Trends Statistics Chart */}
            <div className="lg:col-span-2 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-[20px] font-semibold text-on-surface">Payroll Trends</h4>
                <select className="bg-surface-container-low border-none rounded-lg text-sm font-label-md px-3 py-1.5">
                  <option>Last 6 Months</option>
                  <option>Last 12 Months</option>
                </select>
              </div>
              
              {/* Statistics Summary */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">Average</p>
                  <p className="text-lg font-semibold text-primary">Rp 17.2M</p>
                  <p className="text-xs text-emerald-600">+12.4%</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">Total</p>
                  <p className="text-lg font-semibold text-primary">Rp 103.5M</p>
                  <p className="text-xs text-on-surface-variant">6 months</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">Peak</p>
                  <p className="text-lg font-semibold text-primary">Rp 18.5M</p>
                  <p className="text-xs text-on-surface-variant">October</p>
                </div>
              </div>

              {/* Enhanced Bar Chart */}
              <div className="h-48 w-full relative">
                <div className="absolute inset-0 flex items-end justify-between gap-2 px-2">
                  <div className="flex-1 flex flex-col items-center gap-1 group cursor-pointer">
                    <div className="w-full bg-surface-container-high h-[60%] rounded-t-md hover:bg-primary/40 transition-all group-hover:scale-105 relative">
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-surface-container-low px-2 py-1 rounded text-xs text-on-surface opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Rp 15.8M
                      </div>
                    </div>
                    <span className="text-xs text-on-surface-variant">May</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1 group cursor-pointer">
                    <div className="w-full bg-surface-container-high h-[75%] rounded-t-md hover:bg-primary/40 transition-all group-hover:scale-105 relative">
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-surface-container-low px-2 py-1 rounded text-xs text-on-surface opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Rp 16.2M
                      </div>
                    </div>
                    <span className="text-xs text-on-surface-variant">Jun</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1 group cursor-pointer">
                    <div className="w-full bg-surface-container-high h-[85%] rounded-t-md hover:bg-primary/40 transition-all group-hover:scale-105 relative">
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-surface-container-low px-2 py-1 rounded text-xs text-on-surface opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Rp 17.5M
                      </div>
                    </div>
                    <span className="text-xs text-on-surface-variant">Jul</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1 group cursor-pointer">
                    <div className="w-full bg-surface-container-high h-[70%] rounded-t-md hover:bg-primary/40 transition-all group-hover:scale-105 relative">
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-surface-container-low px-2 py-1 rounded text-xs text-on-surface opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Rp 16.8M
                      </div>
                    </div>
                    <span className="text-xs text-on-surface-variant">Aug</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1 group cursor-pointer">
                    <div className="w-full bg-surface-container-high h-[90%] rounded-t-md hover:bg-primary/40 transition-all group-hover:scale-105 relative">
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-surface-container-low px-2 py-1 rounded text-xs text-on-surface opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Rp 18.2M
                      </div>
                    </div>
                    <span className="text-xs text-on-surface-variant">Sep</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1 group cursor-pointer">
                    <div className="w-full bg-primary h-full rounded-t-md hover:bg-primary/90 transition-all group-hover:scale-105 relative">
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-surface-container-low px-2 py-1 rounded text-xs text-on-surface opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold">
                        Rp 19.0M
                      </div>
                    </div>
                    <span className="text-xs text-primary font-bold">Oct</span>
                  </div>
                </div>
                
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full w-8 flex flex-col justify-between text-xs text-on-surface-variant">
                  <span>20M</span>
                  <span>15M</span>
                  <span>10M</span>
                  <span>5M</span>
                  <span>0</span>
                </div>
              </div>

              {/* Legend */}
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-surface-container-high rounded"></div>
                  <span className="text-xs text-on-surface-variant">Monthly Payroll</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded"></div>
                  <span className="text-xs text-on-surface-variant">Current Month</span>
                </div>
              </div>
            </div>

            {/* Attendance Distribution Pie Chart */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
              <h4 className="text-[20px] font-semibold text-on-surface mb-6">Attendance Distribution</h4>
              <div className="flex flex-col items-center justify-center">
                {/* Simulated Pie Chart with SVG */}
                <div className="relative w-48 h-48 mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" fill="transparent" r="40" stroke="#002752" strokeDasharray="251.2" strokeDashoffset="50.2" strokeWidth="20"></circle>
                    <circle cx="50" cy="50" fill="transparent" r="40" stroke="#a8c8ff" strokeDasharray="251.2" strokeDashoffset="200.9" strokeWidth="20"></circle>
                    <circle cx="50" cy="50" fill="transparent" r="40" stroke="#ee9162" strokeDasharray="251.2" strokeDashoffset="240.2" strokeWidth="20"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[24px] font-semibold text-on-surface">94%</span>
                    <span className="text-sm text-on-surface-variant">Present</span>
                  </div>
                </div>
                <div className="w-full space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <span className="text-sm text-on-surface">Present</span>
                    </div>
                    <span className="text-sm">1,393</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary-fixed-dim"></div>
                      <span className="text-sm text-on-surface">Leaves</span>
                    </div>
                    <span className="text-sm">72</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-on-tertiary-container"></div>
                      <span className="text-sm text-on-surface">Late</span>
                    </div>
                    <span className="text-sm">17</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity & Featured Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Activity Feed */}
            <div className="lg:col-span-8 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-[20px] font-semibold text-on-surface">Recent Activity</h4>
                <button className="text-primary text-sm hover:underline">View All</button>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <FileTextOutlined className="text-primary" />
                    </div>
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-surface-container"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-on-surface">
                      <span className="font-bold">System</span> uploaded October Overtime Report
                    </p>
                    <p className="text-sm text-on-surface-variant">2 hours ago • Automated Task</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center">
                      <VerifiedOutlined className="text-on-tertiary-fixed-variant" />
                    </div>
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-surface-container"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-on-surface">
                      <span className="font-bold">Hendra W.</span> approved Disbursement Batch #1092
                    </p>
                    <p className="text-sm text-on-surface-variant">4 hours ago • Jakarta Office</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-on-secondary-container/10 flex items-center justify-center">
                    <UserAddOutlined className="text-on-secondary-container" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-on-surface">
                      <span className="font-bold">12 New Employees</span> added to Master Data
                    </p>
                    <p className="text-sm text-on-surface-variant">Yesterday, 16:45 • HR Operations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Task/Quick Link */}
            <div className="lg:col-span-4 bg-primary rounded-xl shadow-sm border border-primary overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <WalletOutlined className="text-[120px] text-on-primary" />
              </div>
              <div className="p-8 h-full flex flex-col justify-between relative z-10">
                <div>
                  <span className="text-sm text-on-primary-container bg-primary-container px-3 py-1 rounded-full">Next Deadline</span>
                  <h4 className="text-[24px] font-semibold text-on-primary mt-4">Payroll Closing</h4>
                  <p className="text-sm text-on-primary/70 mt-2">
                    The current payroll cycle will close in 3 days. Please ensure all overtime and claims are approved.
                  </p>
                </div>
                <div className="mt-8">
                  <button className="w-full bg-on-primary text-primary text-sm py-3 rounded-lg hover:bg-surface-container-low transition-colors">
                    Start Pre-Check Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Payroll Batches Table */}
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-outline-variant/10 flex justify-between items-center">
              <h3 className="text-[20px] font-semibold text-on-surface">Recent Payroll Batches</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 rounded-lg border border-outline-variant text-[12px] font-bold text-on-surface-variant hover:bg-surface-container-low flex items-center gap-2">
                  <FilterOutlined className="text-[16px]" />
                  Filter
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container-low border-b border-outline-variant/20">
                  <tr>
                    <th className="px-6 py-3 text-sm text-on-surface-variant uppercase tracking-wider">Batch ID</th>
                    <th className="px-6 py-3 text-sm text-on-surface-variant uppercase tracking-wider">Entity / Department</th>
                    <th className="px-6 py-3 text-sm text-on-surface-variant uppercase tracking-wider">Payment Date</th>
                    <th className="px-6 py-3 text-sm text-on-surface-variant uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-sm text-on-surface-variant uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-sm text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {recentBatches.map((batch) => (
                    <tr className="hover:bg-surface-container-low transition-colors" key={batch.id}>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex flex-col">
                          <span className="text-sm text-primary">{batch.id}</span>
                          <span className="text-xs text-on-surface-variant">{batch.subtitle}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">{batch.entity}</td>
                      <td className="px-6 py-4 text-sm">{batch.paymentDate}</td>
                      <td className="px-6 py-4 text-sm font-bold">{batch.amount}</td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold ${batch.statusClass}`}>
                            {batch.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-primary hover:underline">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-outline-variant/10 flex items-center justify-between">
              <span className="text-sm text-on-surface-variant">Showing 3 of 42 batches</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-low">Previous</button>
                <button className="px-3 py-1 border border-outline-variant rounded bg-primary text-on-primary">1</button>
                <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-low">2</button>
                <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-low">Next</button>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Contextual FAB (Only on Dashboard) */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-50">
        <PlusOutlined />
      </button>
    </AppShell>
  );
}
