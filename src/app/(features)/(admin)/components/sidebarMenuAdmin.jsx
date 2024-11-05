import DashboardPage from "../dashboard/page";
import SidebarItemAdmin from "./sidebarItemAdmin";

export default function SidebarMenuAdmin({}) {
  return (
    <>
      <ul className="flex flex-col gap-4">
        <li>
          <SidebarItemAdmin
            className=""
            href={""}
            text={"Dashboard"}
            iconUrl={"/img/admin/home.svg"}
            isActive={true}
          />
        </li>
        <li>
          <SidebarItemAdmin
            className=""
            href={""}
            text={"Konfigurasi Data"}
            iconUrl={"/img/admin/config.svg"}
          />
        </li>
        <li>
          <SidebarItemAdmin
            className=""
            href={""}
            text={"Transaksi"}
            iconUrl={"/img/admin/transaction.svg"}
          />
        </li>
        <li>
          <SidebarItemAdmin
            className=""
            href={""}
            text={"Kelola Konten"}
            iconUrl={"/img/admin/content-management.svg"}
          />
        </li>
      </ul>
    </>
  );
}
