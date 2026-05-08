"use client";

import {
  BankOutlined,
  PlusCircleFilled,
  StopOutlined,
  DownloadOutlined,
  CalendarOutlined,
  ShareAltOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { Select } from "antd";
import AppShell from "../../../components/layout/AppShell";
import { Card, CardContent, CardHeader } from "../../../components/ui/card";

const { Option } = Select;

const months = [
  { value: "2023-10", label: "October 2023" },
  { value: "2023-09", label: "September 2023" },
  { value: "2023-08", label: "August 2023" },
  { value: "2023-07", label: "July 2023" },
  { value: "2023-06", label: "June 2023" },
  { value: "2023-05", label: "May 2023" },
  { value: "2023-04", label: "April 2023" },
  { value: "2023-03", label: "March 2023" },
  { value: "2023-02", label: "February 2023" },
  { value: "2023-01", label: "January 2023" },
  { value: "2022-12", label: "December 2022" },
  { value: "2022-11", label: "November 2022" },
];

export default function ESlipGajiPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AppShell activeKey="e-slip-gaji" searchPlaceholder="Search employee or document...">
      <main className="flex-1 min-w-0 overflow-y-auto">
        {/* Page Header with Actions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 p-8 max-w-[1440px] mx-auto w-full no-print">
          <div>
            <nav className="flex items-center gap-2 text-on-surface-variant mb-2">
              <span className="font-label-sm text-label-sm">Payroll</span>
              <span className="text-[16px]">›</span>
              <span className="font-label-sm text-label-sm">Payslip History</span>
            </nav>
            <h2 className="font-h1 text-h1 text-primary">E-Slip Gaji</h2>
            <div className="mt-4">
              <Select
                defaultValue="2023-10"
                style={{ width: 200 }}
                size="large"
                className="font-label-md"
              >
                {months.map((month) => (
                  <Option key={month.value} value={month.value}>
                    {month.label}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-primary text-primary font-label-md text-label-md hover:bg-primary/5 active:scale-[0.98] transition-all">
              <ShareAltOutlined />
              Share
            </button>
            <button 
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:brightness-110 active:scale-[0.98] transition-all"
              onClick={handlePrint}
            >
              <DownloadOutlined />
              Download PDF
            </button>
          </div>
        </div>

        {/* Payslip Canvas (Printable Area) */}
        <div className="print-area bg-surface-container-lowest shadow-sm rounded-xl border border-outline-variant/20 overflow-hidden max-w-[800px] mx-auto mb-8">
          {/* Branding Header */}
          <div className="p-8 bg-primary text-on-primary flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white flex items-center justify-center rounded-lg shadow-inner">
                <BankOutlined className="text-primary text-[40px]" />
              </div>
              <div>
                <h3 className="font-h2 text-h2 font-black leading-tight">Bank Mandiri</h3>
                <p className="font-label-sm text-label-sm opacity-80 uppercase tracking-tighter">Human Capital Information System</p>
                <p className="text-[10px] mt-1 opacity-70">PT Bank Mandiri (Persero) Tbk. Head Office Jakarta.</p>
              </div>
            </div>
            <div className="text-right md:pt-2">
              <div className="inline-block px-3 py-1 bg-white/10 rounded-full mb-2">
                <span className="font-label-md text-label-md font-bold tracking-widest">PRIVATE & CONFIDENTIAL</span>
              </div>
              <h4 className="font-h3 text-h3">SLIP GAJI</h4>
              <p className="font-label-md text-label-md opacity-80">Period: October 2023</p>
            </div>
          </div>

          {/* Employee Information Grid */}
          <div className="px-8 py-6 bg-surface-container-low border-b border-outline-variant/30 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <span className="text-on-surface-variant font-label-sm text-label-sm uppercase">Employee Name</span>
                <span className="font-label-md text-label-md font-bold">Aditya Pratama Putra</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-on-surface-variant font-label-sm text-label-sm uppercase">Employee ID (NIK)</span>
                <span className="font-label-md text-label-md">1092837465</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-on-surface-variant font-label-sm text-label-sm uppercase">Department</span>
                <span className="font-label-md text-label-md">Digital Banking - Product Tech</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <span className="text-on-surface-variant font-label-sm text-label-sm uppercase">Position</span>
                <span className="font-label-md text-label-md">Senior Product UI/UX Designer</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-on-surface-variant font-label-sm text-label-sm uppercase">Grade/Level</span>
                <span className="font-label-md text-label-md">Band 4 - Manager</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-on-surface-variant font-label-sm text-label-sm uppercase">Tax Status</span>
                <span className="font-label-md text-label-md">K/1 (Married, 1 Child)</span>
              </div>
            </div>
          </div>

          {/* Financial Breakdown */}
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Earnings Section */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-primary/20">
                  <PlusCircleFilled className="text-primary text-[20px]" />
                  <h4 className="font-label-md text-label-md font-bold text-primary uppercase tracking-wider">Earnings (Penerimaan)</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-body-sm font-data-tabular">
                    <span>Basic Salary</span>
                    <span className="font-semibold">IDR 24,500,000</span>
                  </div>
                  <div className="flex justify-between items-center text-body-sm font-data-tabular">
                    <span>Position Allowance</span>
                    <span className="font-semibold">IDR 4,250,000</span>
                  </div>
                  <div className="flex justify-between items-center text-body-sm font-data-tabular">
                    <span>Transport & Meal</span>
                    <span className="font-semibold">IDR 2,100,000</span>
                  </div>
                  <div className="flex justify-between items-center text-body-sm font-data-tabular">
                    <span>Communication Subsidy</span>
                    <span className="font-semibold">IDR 500,000</span>
                  </div>
                  <div className="flex justify-between items-center text-body-sm font-data-tabular">
                    <span>Performance Bonus (Q3)</span>
                    <span className="font-semibold">IDR 8,500,000</span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-dashed border-outline-variant flex justify-between items-center">
                    <span className="font-label-md text-label-md font-bold">Gross Earnings</span>
                    <span className="font-label-md text-label-md font-bold text-primary">IDR 39,850,000</span>
                  </div>
                </div>
              </div>

              {/* Deductions Section */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-error/20">
                  <StopOutlined className="text-error text-[20px]" />
                  <h4 className="font-label-md text-label-md font-bold text-error uppercase tracking-wider">Deductions (Potongan)</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-body-sm font-data-tabular">
                    <span>Income Tax (PPh 21)</span>
                    <span className="font-semibold">IDR 3,124,500</span>
                  </div>
                  <div className="flex justify-between items-center text-body-sm font-data-tabular">
                    <span>BPJS Ketenagakerjaan (JHT)</span>
                    <span className="font-semibold">IDR 490,000</span>
                  </div>
                  <div className="flex justify-between items-center text-body-sm font-data-tabular">
                    <span>BPJS Kesehatan</span>
                    <span className="font-semibold">IDR 120,000</span>
                  </div>
                  <div className="flex justify-between items-center text-body-sm font-data-tabular">
                    <span>Pension Contribution</span>
                    <span className="font-semibold">IDR 245,000</span>
                  </div>
                  <div className="flex justify-between items-center text-body-sm font-data-tabular">
                    <span>Cooperative Fee</span>
                    <span className="font-semibold">IDR 50,000</span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-dashed border-outline-variant flex justify-between items-center">
                    <span className="font-label-md text-label-md font-bold">Total Deductions</span>
                    <span className="font-label-md text-label-md font-bold text-error">IDR 4,029,500</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Net Pay Highlight */}
            <div className="mt-12 p-6 bg-secondary-container rounded-xl border border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h5 className="text-primary font-label-sm text-label-sm uppercase font-bold">Net Take Home Pay</h5>
                <p className="text-[10px] text-on-secondary-container">Transfer date: October 25, 2023 to Mandiri Account ****1092</p>
              </div>
              <div className="text-center md:text-right">
                <span className="font-h1 text-h1 text-primary tracking-tight">IDR 35,820,500</span>
                <p className="text-body-sm font-label-md italic text-on-secondary-container">"Thirty-Five Million Eight Hundred Twenty Thousand Five Hundred Rupiah"</p>
              </div>
            </div>

            {/* Footer/Verification */}
            <div className="mt-12 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h6 className="font-label-sm text-label-sm font-bold uppercase mb-2">Important Notes:</h6>
                <ul className="text-[11px] text-on-surface-variant space-y-1 list-disc pl-4">
                  <li>This is an electronically generated document. No physical signature is required.</li>
                  <li>For any discrepancies, please contact HC Helpdesk within 3 working days.</li>
                  <li>Bank Mandiri does not request your personal PIN or OTP for any HCIS transactions.</li>
                </ul>
              </div>
              <div className="flex items-center gap-4 p-4 border border-outline-variant/20 rounded-lg">
                <div className="w-20 h-20 bg-white p-1 border border-outline-variant/50">
                  {/* Simplified QR Placeholder using grid for professional look */}
                  <div className="grid grid-cols-4 grid-rows-4 gap-1 w-full h-full opacity-60">
                    <div className="bg-black"></div><div className="bg-black"></div><div></div><div className="bg-black"></div>
                    <div className="bg-black"></div><div></div><div className="bg-black"></div><div></div>
                    <div></div><div className="bg-black"></div><div className="bg-black"></div><div className="bg-black"></div>
                    <div className="bg-black"></div><div></div><div className="bg-black"></div><div className="bg-black"></div>
                  </div>
                </div>
                <div className="text-[10px]">
                  <p className="font-bold text-on-surface">Digital Verification</p>
                  <p className="text-on-surface-variant mt-1">Scan to verify authenticity of this document via Mandiri HCIS Portal.</p>
                  <p className="font-mono mt-1 text-primary">REF: MND-PAY-20231025-AX90</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid Details (Not on Print) */}
        <div className="max-w-[800px] mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-6 no-print">
          <Card className="p-6">
            <CardHeader className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <ArrowUpOutlined />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <h4 className="font-label-md text-label-md font-bold mb-1">Growth vs Prev Month</h4>
              <p className="text-h3 font-h3 text-emerald-600">+12.4%</p>
              <p className="text-[11px] text-on-surface-variant mt-2">Driven by Q3 performance bonus recognition.</p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <CalendarOutlined />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <h4 className="font-label-md text-label-md font-bold mb-1">Leave Balance</h4>
              <p className="text-h3 font-h3 text-blue-600">14 Days</p>
              <p className="text-[11px] text-on-surface-variant mt-2">Expires on Dec 31, 2023. Plan your vacation soon.</p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim flex items-center justify-center text-tertiary-container">
                <BankOutlined />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <h4 className="font-label-md text-label-md font-bold mb-1">Tax Year-to-Date</h4>
              <p className="text-h3 font-h3 text-tertiary-container">IDR 28.4M</p>
              <p className="text-[11px] text-on-surface-variant mt-2">Accumulated PPh21 withheld for FY 2023.</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <style>{`
        @media print {
          .no-print { 
            display: none !important; 
          }
          .print-area { 
            margin: 0; 
            box-shadow: none; 
            border: none; 
          }
        }
      `}</style>
    </AppShell>
  );
}
