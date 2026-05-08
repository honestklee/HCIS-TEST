"use client";

import { useState } from "react";
import {
  BankOutlined,
  UploadOutlined,
  SyncOutlined,
  CheckCircleFilled,
  CalendarOutlined,
  QuestionCircleOutlined,
  VerifiedOutlined,
  DashboardOutlined,
  IdcardOutlined,
  DollarOutlined,
  CreditCardOutlined,
  BarChartOutlined,
  SearchOutlined,
  NotificationOutlined,
  SettingOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Select, Upload } from "antd";
import AppShell from "../../../components/layout/AppShell";

const { Option } = Select;
const { TextArea } = Input;

const requestHistory = [
  {
    id: "#REQ-90122",
    type: "Bank Account Update",
    status: "Pending",
    statusClass: "bg-secondary-container text-on-secondary-fixed-variant",
    date: "Oct 24, 2023 · 09:15 AM",
    icon: <SyncOutlined spin />,
  },
  {
    id: "#REQ-88431",
    type: "Emergency Contact",
    status: "Approved",
    statusClass: "bg-green-100 text-green-700",
    date: "Sep 15, 2023 · 02:40 PM",
    icon: <CheckCircleFilled />,
  },
  {
    id: "#REQ-82109",
    type: "Home Address Change",
    status: "Approved",
    statusClass: "bg-green-100 text-green-700",
    date: "Jul 02, 2023 · 11:20 AM",
    icon: <CheckCircleFilled />,
  },
];

export default function UpdateProfilePage() {
  const [activeTab, setActiveTab] = useState("bank");

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
  };

  const uploadProps = {
    name: "file",
    multiple: false,
    beforeUpload: (file) => {
      const isValidType = file.type === "application/pdf" || file.type.startsWith("image/");
      if (!isValidType) {
        alert("You can only upload PDF, JPG, or PNG files!");
        return false;
      }
      const isLt5M = file.size / 1024 / 1024 < 5;
      if (!isLt5M) {
        alert("File must be smaller than 5MB!");
        return false;
      }
      return false; // Prevent auto upload
    },
  };

  return (
    <AppShell activeKey="profile" searchPlaceholder="Search for employees, documents...">
      <main className="flex-1 overflow-y-auto p-8 max-w-[1440px] mx-auto w-full">
        {/* Breadcrumb & Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-on-surface-variant font-label-sm mb-2">
            <span>Employee Self-Service</span>
            <RightOutlined className="text-[16px]" />
            <span className="text-primary font-semibold">Profile Update</span>
          </div>
          <h2 className="font-h1 text-h1 text-on-surface">Update Profile Information</h2>
          <p className="text-on-surface-variant font-body-sm mt-1">Submit changes for your personal, financial, or document data. Requests require HR approval.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Form Section */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Tabs */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
              <div className="flex border-b border-outline-variant/30">
                <button
                  className={`flex-1 py-4 px-6 font-label-md transition-colors ${
                    activeTab === "personal"
                      ? "tab-active text-primary border-b-2 border-primary font-semibold bg-surface-container-lowest"
                      : "text-on-surface-variant hover:bg-surface-container-low"
                  }`}
                  onClick={() => setActiveTab("personal")}
                >
                  Personal Info
                </button>
                <button
                  className={`flex-1 py-4 px-6 font-label-md transition-colors ${
                    activeTab === "bank"
                      ? "tab-active text-primary border-b-2 border-primary font-semibold bg-surface-container-lowest"
                      : "text-on-surface-variant hover:bg-surface-container-low"
                  }`}
                  onClick={() => setActiveTab("bank")}
                >
                  Bank Account
                </button>
                <button
                  className={`flex-1 py-4 px-6 font-label-md transition-colors ${
                    activeTab === "documents"
                      ? "tab-active text-primary border-b-2 border-primary font-semibold bg-surface-container-lowest"
                      : "text-on-surface-variant hover:bg-surface-container-low"
                  }`}
                  onClick={() => setActiveTab("documents")}
                >
                  Documents
                </button>
              </div>

              <div className="p-8">
                {activeTab === "bank" && (
                  <>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center text-primary">
                        <BankOutlined />
                      </div>
                      <div>
                        <h3 className="font-h3 text-h3 text-on-surface">Bank Details</h3>
                        <p className="text-on-surface-variant font-body-sm">Manage your primary account for salary disbursement.</p>
                      </div>
                    </div>

                    <Form 
                        onFinish={handleSubmit} 
                        layout="vertical" 
                        className="space-y-6"
                        initialValues={{
                          bankName: "mandiri",
                          accountNumber: "1240009876543",
                          accountHolderName: "BUDI SANTOSO"
                        }}
                      >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Form.Item label="Bank Name" name="bankName">
                          <Select className="w-full">
                            <Option value="mandiri">Bank Mandiri</Option>
                            <Option value="bca">Bank Central Asia (BCA)</Option>
                            <Option value="bni">Bank Negara Indonesia (BNI)</Option>
                            <Option value="bri">Bank Rakyat Indonesia (BRI)</Option>
                          </Select>
                        </Form.Item>

                        <Form.Item label="Account Number" name="accountNumber">
                          <Input />
                        </Form.Item>

                        <Form.Item
                          label="Account Holder Name"
                          name="accountHolderName"
                          className="md:col-span-2"
                        >
                          <Input />
                        </Form.Item>

                        <Form.Item label="Branch Office" name="branchOffice">
                          <Input placeholder="e.g. Jakarta Thamrin" />
                        </Form.Item>

                        <Form.Item label="Swift/BIC Code (Optional)" name="swiftCode">
                          <Input placeholder="e.g. BMRIIDJA" />
                        </Form.Item>
                      </div>

                      <div className="pt-6 border-t border-outline-variant/30">
                        <h4 className="font-label-md text-on-surface mb-4">Supporting Document</h4>
                        <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-surface-container-low transition-colors cursor-pointer group">
                          <Upload.Dragger {...uploadProps} className="border-none bg-transparent">
                            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                              <UploadOutlined className="text-primary text-[24px]" />
                            </div>
                            <p className="font-label-md text-on-surface">Click to upload or drag and drop</p>
                            <p className="text-body-sm text-on-surface-variant mt-1">PDF, JPG, or PNG (Max. 5MB)</p>
                            <p className="text-[11px] text-primary font-semibold mt-2 uppercase tracking-wider">Required for bank changes: Copy of Passbook or M-Banking Statement</p>
                          </Upload.Dragger>
                        </div>
                      </div>

                      <div className="flex items-center justify-end gap-3 pt-4">
                        <Button className="px-6 py-2 border border-outline text-on-surface font-label-md rounded-lg hover:bg-surface-container-low">
                          Discard Changes
                        </Button>
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="px-6 py-2 bg-primary text-on-primary font-label-md rounded-lg shadow-sm hover:brightness-110 active:scale-95 transition-all"
                        >
                          Submit Request
                        </Button>
                      </div>
                    </Form>
                  </>
                )}

                {activeTab === "personal" && (
                  <div className="text-center py-12">
                    <UserOutlined className="text-6xl text-on-surface-variant mb-4" />
                    <h3 className="font-h3 text-h3 text-on-surface mb-2">Personal Information</h3>
                    <p className="text-on-surface-variant font-body-sm">Personal info form will be implemented here.</p>
                  </div>
                )}

                {activeTab === "documents" && (
                  <div className="text-center py-12">
                    <UploadOutlined className="text-6xl text-on-surface-variant mb-4" />
                    <h3 className="font-h3 text-h3 text-on-surface mb-2">Documents</h3>
                    <p className="text-on-surface-variant font-body-sm">Document upload section will be implemented here.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Side Panel: Request History */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-label-md text-on-surface">Request History</h3>
                <button className="text-primary font-label-sm hover:underline">View All</button>
              </div>
              <div className="space-y-8 relative before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant/30">
                {requestHistory.map((item, index) => (
                  <div key={index} className="relative pl-10">
                    <div className={`absolute left-0 top-1 w-[24px] h-[24px] rounded-full flex items-center justify-center text-[14px] ${
                      item.status === "Pending" ? "bg-primary text-on-primary" : "bg-surface-container-high text-on-surface-variant"
                    }`}>
                      {item.icon}
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <p className="font-label-md text-on-surface leading-none">{item.type}</p>
                        <span className={`px-2 py-1 text-[10px] font-bold rounded-full uppercase ${item.statusClass}`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-body-sm text-on-surface-variant">Request ID: {item.id}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <CalendarOutlined className="text-[14px] text-on-surface-variant" />
                        <span className="text-[12px] text-on-surface-variant">{item.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Help Widget */}
            <div className="bg-primary-container rounded-xl p-6 text-on-primary">
              <div className="flex items-center gap-3 mb-3">
                <QuestionCircleOutlined />
                <h4 className="font-label-md">Need Assistance?</h4>
              </div>
              <p className="text-body-sm opacity-90 mb-4">Contact your HR business partner for questions regarding profile updates and approval timelines.</p>
              <Button className="w-full py-2 bg-on-primary text-primary font-label-md rounded-lg hover:bg-surface-bright transition-colors">
                Contact HR Support
              </Button>
            </div>

            {/* Profile Quick View Card */}
            <div className="bg-surface-container rounded-xl p-4 flex items-center gap-4 border border-outline-variant/30">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center border-2 border-white shadow-sm">
                  <UserOutlined className="text-2xl text-primary" />
                </div>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <p className="font-label-md text-on-surface">Budi Santoso</p>
                <p className="text-body-sm text-on-surface-variant">EMP-2023-4412</p>
                <div className="flex items-center gap-1 mt-1">
                  <VerifiedOutlined className="text-[14px] text-primary" />
                  <span className="text-[11px] font-semibold text-primary uppercase">Full-Time Staff</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .tab-active {
          border-bottom: 2px solid #002752;
          color: #002752;
          font-weight: 600;
        }
      `}</style>
    </AppShell>
  );
}
