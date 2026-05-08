"use client";

import { useUser } from "../../contexts/UserContext";
import AppShell from "../../components/layout/AppShell";

export default function ProfilePage() {
  const { user } = useUser();

  return (
    <AppShell activeKey="profile" searchPlaceholder="Search profile setting or employee services...">
      <div className="p-8 max-w-[1440px] mx-auto w-full grid grid-cols-12 gap-6">
        {/* Greeting Section */}
        <section className="col-span-12">
          <h1 className="text-[30px] font-semibold text-primary leading-[38px]">Welcome, {user?.id || user?.sub || user?.name || 'User'}</h1>
          <p className="text-base text-on-surface-variant">Here is your financial and HR summary for today.</p>
        </section>

        {/* Latest Payday Card */}
        <section className="col-span-12 lg:col-span-8">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-[80px]">description</span>
            </div>
            <div className="relative z-10">
              <p className="text-sm text-on-surface-variant uppercase tracking-wider mb-1">Latest Payday</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-[30px] font-semibold text-primary">Rp 18.250.000</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-on-surface-variant">
                  <span className="material-symbols-outlined">calendar_today</span>
                  <span className="text-sm">25 Oct 2023</span>
                </div>
                <div className="px-2 py-0.5 bg-secondary-container/50 text-on-secondary-container rounded-full text-sm">
                  Processed
                </div>
              </div>
            </div>

            {/* Income Trend Sparkline (Simulated) */}
            <div className="mt-6 pt-6 border-t border-outline-variant/20">
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm text-on-surface-variant">Income Trend (6mo)</span>
                <span className="text-sm text-primary font-bold">+2.4%</span>
              </div>
              <div className="h-12 w-full flex items-end gap-1">
                <div className="flex-1 bg-primary/20 h-3/5 rounded-t-sm" />
                <div className="flex-1 bg-primary/20 h-4/5 rounded-t-sm" />
                <div className="flex-1 bg-primary/20 h-3/4 rounded-t-sm" />
                <div className="flex-1 bg-primary/20 h-4/5 rounded-t-sm" />
                <div className="flex-1 bg-primary/20 h-5/6 rounded-t-sm" />
                <div className="flex-1 bg-primary h-full rounded-t-sm" />
              </div>
            </div>
          </div>
        </section>

        {/* Leave Balance Overview */}
        <section className="col-span-12 lg:col-span-4">
          <div className="bg-primary-container p-6 rounded-xl shadow-sm text-on-primary-container">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-white">Leave Balance</h3>
              <span className="material-symbols-outlined text-on-primary-container">info</span>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <span className="text-[32px] font-bold text-white">12</span>
                <span className="text-on-primary-container opacity-80 ml-1">Days remaining</span>
              </div>
              <div className="w-24 bg-white/10 h-2 rounded-full overflow-hidden">
                <div className="bg-white h-full w-[60%]" />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions Grid */}
        <section className="col-span-12 lg:col-span-8">
          <h3 className="text-[20px] font-semibold mb-4 text-primary">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="/profile/e-slip-gaji" className="flex flex-col items-center justify-center p-5 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 hover:bg-surface-container-low transition-all active:scale-[0.98]">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-primary">description</span>
              </div>
              <span className="text-sm text-on-surface text-center">View Payslip</span>
            </a>
            <a href="/profile/update-profile" className="flex flex-col items-center justify-center p-5 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 hover:bg-surface-container-low transition-all active:scale-[0.98]">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-primary">edit</span>
              </div>
              <span className="text-sm text-on-surface text-center">Update Profile</span>
            </a>
            <a href="/coming-soon" className="flex flex-col items-center justify-center p-5 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 hover:bg-surface-container-low transition-all active:scale-[0.98]">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-primary">calendar_today</span>
              </div>
              <span className="text-sm text-on-surface text-center">Request Leave</span>
            </a>
            <a href="/coming-soon" className="flex flex-col items-center justify-center p-5 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 hover:bg-surface-container-low transition-all active:scale-[0.98]">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-primary">more_horiz</span>
              </div>
              <span className="text-sm text-on-surface text-center">Other Services</span>
            </a>
          </div>
        </section>

        {/* Upcoming Holidays */}
        <section className="col-span-12 lg:col-span-4">
          <h3 className="text-[20px] font-semibold mb-4 text-primary">Upcoming Holidays</h3>
          <div className="space-y-3">
            <div className="flex items-center p-4 bg-surface-container-lowest rounded-lg border border-outline-variant/10 shadow-sm">
              <div className="w-10 h-10 rounded bg-tertiary-fixed flex flex-col items-center justify-center mr-4">
                <span className="text-[10px] font-bold text-on-tertiary-fixed-variant leading-none">NOV</span>
                <span className="text-lg font-black text-on-tertiary-fixed-variant leading-none">12</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-on-surface">Deepavali</p>
                <p className="text-sm text-on-surface-variant">Sunday (Public Holiday)</p>
              </div>
              <span className="material-symbols-outlined text-outline-variant">arrow_forward</span>
            </div>
          </div>
        </section>
      </div>

      {/* FAB (Clock In) */}
      <button className="fixed right-8 bottom-8 w-14 h-14 bg-primary text-on-primary rounded-2xl shadow-lg flex items-center justify-center active:scale-95 transition-transform">
        <span className="material-symbols-outlined text-[28px]">schedule</span>
      </button>
    </AppShell>
  );
}
