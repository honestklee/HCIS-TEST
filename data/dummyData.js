// Centralized dummy data for HCIS application

// Employee Master Data
export const employees = [
  {
    id: "19880123004",
    name: "Budi Santoso",
    email: "budi.santoso@mandiri.co.id",
    department: "Information Technology",
    role: "Senior Developer",
    grade: "Grade 12",
    status: "Active",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbQPTJvkkUatgEAKpprzKfKFQ_yh9TFSo5u6AmQq_oAlXANMQmvVMSurdAaLvMgFdaYKlRX3xaGvcOT6-pmGx168qSL8BE8jz-dNapL-kswbB7a8_pmCbBhPCMHEi35VyfSs_nzAGTHn5FoQ9bSZRnkgs4sqj6zkuYa2y-rynHmblHyNCm-bsXRGvUWgQGNjpwfEQqSZWoy6AemLcRiTQl3WPazbllVfuMe9r_1Wwn0HtSt3upgPUkbrBf4E7gh1TxvIA18BSKgeA"
  },
  {
    id: "19920512088",
    name: "Siti Aminah",
    email: "siti.aminah@mandiri.co.id",
    department: "Human Capital",
    role: "Payroll Specialist",
    grade: "Grade 10",
    status: "Active",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK_Ero1LKqn9L1T9yRGEtdhQZgXFEkSA9Ofl6gAKn_I8jjgdL67JpdDyDT7OXvAZda4cgdfQV_ktekpqUCoavzbSzCMgVLb3mc-R1wD0a2IcelxK5zd5t1IkFnlJoJdT_Cp4npyamCZfup_L8zTdjQEaXzRQ9XM_mUzgmBtS3-sXaWs1qH-1fvnYfmNH5mVMw734L0V4wEoxIoV5zlmXHCKus_xSQILaNjQY7aGk4Q2dk954KCygHNIDQHQgjpv5h2ZhLVnSoGH9M"
  },
  {
    id: "19851104012",
    name: "Randi Kurniawan",
    email: "randi.k@mandiri.co.id",
    department: "Retail Banking",
    role: "Branch Manager",
    grade: "Grade 14",
    status: "Inactive",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqvC3vDD0rvbhIwhcBERe7ubfvrl7Ftu5j2ZA7cqFp8f3Rz09f5WUIHywBVQB9Pu-mBeLxMmpi0AaGBR3oF913Qid9T_x1d3Y7NzFiLLGX1qkQJmI8vw9RXst7U42fegQYpwYy9sbBJR5g7tpfLapfbk99SxpNhSVAkKmYdOCEPFA989q-7uqxdzGPRD4-k0OOa4SD3PVhElk83r-WAylMvlonY7lkqToVb91qhwonyXvVYiRDm3g2XWnNTPFnXCzE4grpfCNM4ts"
  },
  {
    id: "19950228055",
    name: "Dewi Lestari",
    email: "dewi.lestari@mandiri.co.id",
    department: "Risk Management",
    role: "Risk Analyst",
    grade: "Grade 11",
    status: "Active",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGc1lEOV0c6Da0vWzrIdaAHT3vxtYxKCTklNm2RewxeRLr6R1ByuZppUeXfHwXooLra-6aKMUwQGzgXw92Qqosk8JL9oXlloUWW8lUY9maMxllATvEZQrUORdjjm6qUfeUSwTYT_5IMHlE-Hj1xSDrBTWWXfl_BstNObYYJFKhjtB8FQIAiCpaD_PudGW39BfhhF89sbbNhAUu0Lrqsd-YDMSofYR7RwROhG8URzqhh6drJQnAKaZHfOuIx8jhsf1LR6t7zxV5vS0"
  }
];

// Dashboard Statistics
export const dashboardStats = [
  { title: "Total Payroll (IDR)", value: "4.28B", badge: "+4.2%", badgeClass: "text-on-tertiary-fixed-variant bg-tertiary-fixed" },
  { title: "Active Employees", value: "1,482", badge: "+12", badgeClass: "text-on-tertiary-fixed-variant bg-tertiary-fixed" },
  { title: "Overtime Hours", value: "1,240h", badge: "+18%", badgeClass: "text-error bg-error-container/50" },
  { title: "Tax & BPJS Compliance", value: "100%", badge: "Paid", badgeClass: "text-on-tertiary-fixed-variant bg-secondary-fixed" },
];

// Recent Payroll Batches
export const recentBatches = [
  { id: "#PB-202310-001", subtitle: "Created by Admin", entity: "Corporate Banking Div.", paymentDate: "Oct 25, 2023", amount: "IDR 1,240,000,000", status: "Processing", statusClass: "bg-secondary-container text-on-secondary-container" },
  { id: "#PB-202310-002", subtitle: "System Generated", entity: "Retail & Branch Ops.", paymentDate: "Oct 26, 2023", amount: "IDR 2,100,500,000", status: "Draft", statusClass: "bg-surface-container-highest text-on-surface-variant" },
  { id: "#PB-202309-001", subtitle: "Archived Batch", entity: "General HQ - All Dept.", paymentDate: "Sep 25, 2023", amount: "IDR 4,050,000,000", status: "Completed", statusClass: "bg-tertiary-fixed/30 text-on-tertiary-fixed-variant" },
];

// Payroll Processing Batches
export const payrollBatches = [
  {
    id: "#PB-202310-001",
    subtitle: "Created by Admin",
    entity: "Corporate Banking Div.",
    paymentDate: "Oct 25, 2023",
    amount: "IDR 1,240,000,000",
    status: "Processing",
    statusClass: "bg-secondary-container text-on-secondary-container",
  },
  {
    id: "#PB-202310-002",
    subtitle: "System Generated",
    entity: "Retail & Branch Ops.",
    paymentDate: "Oct 26, 2023",
    amount: "IDR 2,100,500,000",
    status: "Draft",
    statusClass: "bg-surface-container-highest text-on-surface-variant",
  },
  {
    id: "#PB-202309-001",
    subtitle: "Archived Batch",
    entity: "General HQ - All Dept.",
    paymentDate: "Sep 25, 2023",
    amount: "IDR 4,050,000,000",
    status: "Completed",
    statusClass: "bg-tertiary-fixed/30 text-on-tertiary-fixed-variant",
  },
];

// Disbursement Management Transfers
export const transferRows = [
  { date: "24 Oct 2023", ref: "TRX-99201-BMA", bank: "Mandiri", amount: "IDR 1,200,000,000", status: "Success", statusClass: "bg-emerald-100 text-emerald-700" },
  { date: "23 Oct 2023", ref: "TRX-99185-BCA", bank: "BCA", amount: "IDR 850,500,000", status: "Pending", statusClass: "bg-amber-100 text-amber-700" },
  { date: "22 Oct 2023", ref: "TRX-98922-BMA", bank: "Mandiri", amount: "IDR 45,000,000", status: "Failed", statusClass: "bg-red-100 text-red-700" },
  { date: "21 Oct 2023", ref: "TRX-98810-CNI", bank: "CIMB Niaga", amount: "IDR 320,000,000", status: "Success", statusClass: "bg-emerald-100 text-emerald-700" },
];

// Reports Data
export const reportsData = [
  { name: "Monthly Payroll Summary", desc: "Consolidated view of gross/net pay per dept.", freq: "Monthly", lastRun: "May 01, 2024" },
  { name: "Overtime Analysis Report", desc: "Detailed breakdown of extra hours and costs.", freq: "On-Demand", lastRun: "Apr 28, 2024" },
  { name: "Bonus & Incentives Audit", desc: "Audit trail for variable compensation payments.", freq: "Quarterly", lastRun: "Mar 31, 2024" },
  { name: "Tax Compliance Report", desc: "Monthly tax withholding and compliance status.", freq: "Monthly", lastRun: "May 01, 2024" },
  { name: "BPJS Contributions Report", desc: "Employee social security contributions tracking.", freq: "Monthly", lastRun: "May 01, 2024" },
  { name: "Employee Attendance Summary", desc: "Daily attendance and leave balance overview.", freq: "Weekly", lastRun: "Apr 30, 2024" },
];

// Navigation Items for Sidebar
export const navItems = [
  { key: "dashboard", label: "Dashboard", href: "/dashboard" },
  { key: "employee-master-data", label: "Employee Master Data", href: "/employee-master-data" },
  { key: "payroll-processing", label: "Payroll Processing", href: "/payroll-processing" },
  { key: "disbursement-management", label: "Disbursement", href: "/disbursement-management" },
  { key: "reports", label: "Reports", href: "/reports" },
  { key: "profile", label: "Profile", href: "/profile" },
];

// User Profile Data
export const userProfile = {
  name: "Aditya Pratama",
  role: "HR Administrator",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHgUdUXNOkO4MkbN3V5P9Ec1ePcXvK-17-nnea6Oyk163DPtGtNsG93y4Vjiw7FeFFIKWLjGCXpJqfhy85wR8Cdynuu-tXj_DpGPfTeIS8OV5kt78I_PEMoEi0Llm4LzbgO9KUX4UjxURJNrqxNI6i86pS4fCEqfd12pgLVTaTuUR4RW4nlNNWYig8M9WXqSpDA5eiPjotx-pMMSi4m7M8qQ2rqvW9ltgwt0jGjOP_f-tJK0AjK1nKGjW4qWQqm4IZhiTwlrMm4A4"
};
