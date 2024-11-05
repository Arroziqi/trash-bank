import SidebarAdmin from "./components/sidebarAdmin";
import TopBarAdmin from "./components/topBarAdmin";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen min-w-full">
      <TopBarAdmin />
      <div className="w-full">
        <SidebarAdmin />
        {children}
      </div>
    </div>
  );
}
