"use client";

import {
  DownOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  SettingOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { useUser } from "../../contexts/UserContext";

export default function Topbar({ searchPlaceholder = "Search employee, ID, or report..." }) {
  const { logout } = useUser();

  async function handleLogout() {
    await logout();
  }

  return (
    <header className="sticky top-0 w-full z-40 bg-surface-container-lowest/90 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center h-16 px-6 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-full max-w-md">
            <SearchOutlined className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-body-sm" />
            <input
              className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 font-body-sm focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder={searchPlaceholder}
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="hover:bg-surface-container-low rounded-full p-2 transition-all">
            <BellOutlined className="text-primary" />
          </button>
          <button className="hover:bg-surface-container-low rounded-full p-2 transition-all">
            <SettingOutlined className="text-primary" />
          </button>
          <button className="hover:bg-surface-container-low rounded-full p-2 transition-all">
            <QuestionCircleOutlined className="text-primary" />
          </button>
          <div className="h-6 w-px bg-outline-variant/30 mx-2" />
          <button className="flex items-center gap-2 px-4 py-1.5 bg-primary text-on-primary rounded-full font-label-sm">
            <span>Role Switcher</span>
            <DownOutlined className="text-[12px]" />
          </button>
          <button
            className="flex items-center gap-2 px-4 py-1.5 border border-outline-variant rounded-full font-label-sm text-on-surface hover:bg-surface-container-low"
            onClick={handleLogout}
            type="button"
          >
            <LogoutOutlined />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
