import {
  DownloadOutlined,
  UserAddOutlined,
  RightOutlined,
  DownOutlined,
  MoreOutlined,
  RiseOutlined,
  StarOutlined,
  SafetyOutlined,
  FileOutlined,
  HistoryOutlined,
  LeftOutlined,
  RightOutlined as ChevronRightIcon
} from "@ant-design/icons";
import AppShell from "../../components/layout/AppShell";
import { employees } from "../../data/dummyData";

export default function EmployeeMasterDataPage() {
  return (
    <AppShell activeKey="employee-master-data" searchPlaceholder="Search employee, NIK, or position...">
      {/* Page Content */}
      <div className="p-8 max-w-[1440px] mx-auto w-full">
        {/* Breadcrumbs & Header */}
        <div className="mb-8 flex justify-between items-end">
          <div>
            <nav className="flex items-center gap-2 text-on-surface-variant text-sm mb-2">
              <span>Organization</span>
              <RightOutlined className="text-[16px]" />
              <span className="text-primary font-semibold">Employee Database</span>
            </nav>
            <h2 className="text-[30px] font-semibold text-on-surface leading-[38px]">Employee Database</h2>
            <p className="text-on-surface-variant text-sm leading-6">Manage employee records, organizational mapping, and personal data.</p>
          </div>
          <div className="flex gap-3">
            <a href="/coming-soon" className="flex items-center gap-2 px-4 py-2 border border-outline-variant bg-surface-container-lowest text-on-surface rounded-lg hover:bg-surface-container-low transition-colors text-sm font-medium">
              <DownloadOutlined />
              <span>Export</span>
            </a>
            <a href="/coming-soon" className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium shadow-sm">
              <UserAddOutlined />
              <span>Add Employee</span>
            </a>
          </div>
        </div>

        {/* Dashboard Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/20">
            <p className="text-on-surface-variant text-xs uppercase tracking-wider mb-1">Total Employees</p>
            <div className="flex items-end gap-2">
              <span className="text-[24px] font-semibold text-on-surface leading-[32px]">1,284</span>
              <span className="text-emerald-600 text-sm mb-1">+12 this month</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/20">
            <p className="text-on-surface-variant text-xs uppercase tracking-wider mb-1">Active</p>
            <div className="flex items-end gap-2">
              <span className="text-[24px] font-semibold text-on-surface leading-[32px]">1,240</span>
              <div className="w-16 h-2 bg-surface-container rounded-full mb-2 overflow-hidden">
                <div className="h-full bg-emerald-500 w-[96%]"></div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/20">
            <p className="text-on-surface-variant text-xs uppercase tracking-wider mb-1">New Hires (Q3)</p>
            <div className="flex items-end gap-2">
              <span className="text-[24px] font-semibold text-on-surface leading-[32px]">42</span>
              <RiseOutlined className="text-primary mb-1" />
            </div>
          </div>
          <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/20">
            <p className="text-on-surface-variant text-xs uppercase tracking-wider mb-1">Pending Sync</p>
            <div className="flex items-end gap-2">
              <span className="text-[24px] font-semibold text-on-surface leading-[32px]">3</span>
              <span className="bg-error-container text-on-error-container text-[10px] px-1.5 py-0.5 rounded-full mb-2 font-bold">URGENT</span>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 mb-6 overflow-hidden">
          <div className="p-4 flex flex-wrap gap-4 items-center justify-between border-b border-outline-variant/10">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <label className="text-sm text-on-surface-variant">Department</label>
                <select className="bg-surface-container-low border border-outline-variant rounded-lg px-3 py-1.5 text-sm focus:ring-primary">
                  <option>All Departments</option>
                  <option>Human Capital</option>
                  <option>Information Technology</option>
                  <option>Retail Banking</option>
                  <option>Risk Management</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm text-on-surface-variant">Status</label>
                <select className="bg-surface-container-low border border-outline-variant rounded-lg px-3 py-1.5 text-sm focus:ring-primary">
                  <option>All Statuses</option>
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>On Leave</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm text-on-surface-variant">Grade</label>
                <select className="bg-surface-container-low border border-outline-variant rounded-lg px-3 py-1.5 text-sm focus:ring-primary">
                  <option>All Grades</option>
                  <option>Grade 10</option>
                  <option>Grade 11</option>
                  <option>Grade 12</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="text-primary text-sm font-medium hover:underline">Clear Filters</button>
            </div>
          </div>

          {/* High Density Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low/50 border-b border-outline-variant/30">
                  <th className="px-6 py-4 text-xs text-on-surface-variant uppercase tracking-wider">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
                      Employee
                      <DownOutlined className="text-[16px]" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-xs text-on-surface-variant uppercase tracking-wider">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
                      NIK
                      <DownOutlined className="text-[16px]" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-xs text-on-surface-variant uppercase tracking-wider">Department</th>
                  <th className="px-6 py-4 text-xs text-on-surface-variant uppercase tracking-wider">Role & Grade</th>
                  <th className="px-6 py-4 text-xs text-on-surface-variant uppercase tracking-wider text-center">Status</th>
                  <th className="px-6 py-4 text-xs text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {employees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-surface-container-low/30 transition-colors">
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-3">
                        <img 
                          alt="Employee Photo" 
                          className="w-9 h-9 rounded-full object-cover" 
                          src={employee.avatar}
                        />
                        <div className="flex flex-col">
                          <span className="text-sm text-on-surface font-semibold">{employee.name}</span>
                          <span className="text-[12px] text-on-surface-variant">{employee.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-sm text-on-surface">{employee.id}</td>
                    <td className="px-6 py-3 text-sm text-on-surface-variant">{employee.department}</td>
                    <td className="px-6 py-3">
                      <div className="flex flex-col">
                        <span className="text-sm text-on-surface">{employee.role}</span>
                        <span className="text-sm text-primary">{employee.grade}</span>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-center">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        employee.status === 'Active' 
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : 'bg-surface-dim text-on-surface-variant border border-outline-variant'
                      }`}>
                        {employee.status}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-right">
                      <button className="p-1.5 hover:bg-surface-container rounded-lg text-on-surface-variant">
                        <MoreOutlined />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 flex items-center justify-between border-t border-outline-variant/10 bg-surface-container-low/20">
            <div className="flex items-center gap-4">
              <span className="text-sm text-on-surface-variant">Showing 1 to 10 of 1,284 entries</span>
              <select className="bg-surface-container-lowest border border-outline-variant rounded px-2 py-1 text-[12px] focus:ring-primary">
                <option>10 per page</option>
                <option>25 per page</option>
                <option>50 per page</option>
              </select>
            </div>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-low text-on-surface-variant">
                <LeftOutlined className="text-[18px]" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-on-primary text-sm font-medium shadow-sm">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-low text-on-surface-variant text-sm">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-low text-on-surface-variant text-sm">3</button>
              <span className="px-2 text-on-surface-variant">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-low text-on-surface-variant text-sm">129</button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-low text-on-surface-variant">
                <ChevronRightIcon className="text-[18px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Contextual Help / Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-primary-container p-6 rounded-xl text-on-primary-container relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-[20px] font-semibold mb-2 flex items-center gap-2">
                <StarOutlined />
                Smart Verification
              </h3>
              <p className="text-sm opacity-90 mb-4 max-w-[80%]">The HCIS system has detected 3 employees with missing tax ID documents. Complete these profiles to ensure payroll processing remains uninterrupted.</p>
              <button className="px-4 py-2 bg-on-primary-container text-primary-container rounded-lg text-sm font-bold">Review Now</button>
            </div>
            <SafetyOutlined className="absolute -right-4 -bottom-4 text-[120px] opacity-10 group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-[20px] font-semibold text-on-surface mb-2">Export Data Queue</h3>
              <p className="text-sm text-on-surface-variant mb-4">Download latest organization structure and salary mapping reports.</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                <div className="flex items-center gap-3">
                  <FileOutlined className="text-primary" />
                  <span className="text-sm text-on-surface">AnnualTax_Summary_2023.xlsx</span>
                </div>
                <span className="text-emerald-600 text-[12px] font-semibold">Completed</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                <div className="flex items-center gap-3">
                  <HistoryOutlined className="text-on-surface-variant" />
                  <span className="text-sm text-on-surface">HC_Master_Database_Full.csv</span>
                </div>
                <span className="text-on-surface-variant text-[12px]">Last updated 2h ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
