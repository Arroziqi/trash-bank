import Color from "../const/color";
import LogoAdmin from "./logoAdmin";
import SidebarItemAdmin from "./sidebarItemAdmin";
import SidebarMenuAdmin from "./sidebarMenuAdmin";

export default function SidebarAdmin({ className = "" }) {
  return (
    <nav
      className={`px-6 py-16 fixed left-0 top-0 bottom-0 rounded-e-2xl ${className}`}
      style={{ backgroundColor: Color.primary }}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-[128px]">
          <LogoAdmin />
          <SidebarMenuAdmin />
        </div>
        <ul className="flex flex-col gap-4 ">
          <li>
            <SidebarItemAdmin
              className=""
              href={""}
              text={"Pengaturan"}
              iconUrl={"/img/admin/setting.svg"}
            />
          </li>
          <li>
            <SidebarItemAdmin
              className=""
              href={""}
              text={"Keluar"}
              iconUrl={"/img/admin/logout.svg"}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
