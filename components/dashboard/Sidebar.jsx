"use client";

import { useUser } from "../../contexts/UserContext";
import Link from "next/link";
import { navItems } from "../../data/dummyData";

// Add Material Symbols icons to navigation items
const navigationItems = navItems.map((item, index) => {
  const icons = [
    <span className="material-symbols-outlined">dashboard</span>,
    <span className="material-symbols-outlined">badge</span>,
    <span className="material-symbols-outlined">payments</span>,
    <span className="material-symbols-outlined">account_balance_wallet</span>,
    <span className="material-symbols-outlined">analytics</span>,
    <span className="material-symbols-outlined">person</span>
  ];
  return { ...item, icon: icons[index] };
});

export default function Sidebar({ activeKey = "dashboard" }) {
  const { user } = useUser();

  return (
    <aside className="h-screen sticky left-0 top-0 overflow-y-auto transition-all duration-300 w-[260px] flex flex-col border-r border-outline-variant/30 bg-surface-container-lowest shadow-sm z-50">
      <div className="p-6">
        <h1 className="font-h3 font-bold text-primary">Mandiri HCIS</h1>
        <p className="font-label-sm text-on-surface-variant/70">Enterprise Payroll</p>
      </div>
      <nav className="flex-1 mt-4">
        {navigationItems.map((item) => (
          <Link
            className={`flex items-center gap-3 py-3 px-4 transition-colors ${
              item.key === activeKey
                ? "text-primary border-l-[3px] border-primary bg-secondary-container/30 font-semibold"
                : "text-on-surface-variant hover:bg-surface-container"
            }`}
            href={item.href}
            key={item.label}
          >
            <span>{item.icon}</span>
            <span className="font-label-md">{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-outline-variant/20">
        <Link href="/profile">
          <div className="flex items-center gap-3 p-2 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-primary-container flex items-center justify-center text-on-primary-container">
              <span className="material-symbols-outlined">person</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-md font-bold">{user?.id || user?.sub || user?.name || 'Admin User'}</span>
              <span className="text-[10px] text-on-surface-variant">{user?.role || 'HCM Manager'}</span>
            </div>
          </div>
        </Link>
      </div>
    </aside>
  );
}
