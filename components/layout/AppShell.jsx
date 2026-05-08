import Sidebar from "../dashboard/Sidebar";
import Topbar from "../dashboard/Topbar";

export default function AppShell({ activeKey, searchPlaceholder, children }) {
  return (
    <div className="flex bg-background min-h-screen">
      <Sidebar activeKey={activeKey} />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar searchPlaceholder={searchPlaceholder} />
        {children}
      </div>
    </div>
  );
}
