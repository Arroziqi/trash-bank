"use client";

import { useRouter } from "next/compat/router";
import SidebarItemAdmin from "./sidebarItemAdmin";
import SidebarMenuDropdown from "./sidebarMenuDropdown";

export default function SidebarMenuAdmin({}) {
  const router = useRouter();

  // const isActive = (path) => router.pathname === path;
  // console.log(isActive("/dashboard"));

  return (
    <>
      <ul className="flex flex-col gap-4">
        <li>
          <SidebarItemAdmin
            className=""
            href={"/dashboard"}
            text={"Dashboard"}
            iconUrl={"/img/admin/home.svg"}
            isActive={true}
            // isActive={isActive("/dashboard")}
          />
        </li>
        <li>
          <SidebarMenuDropdown />
        </li>
        <li>
          <SidebarItemAdmin
            className=""
            href={"/transaction"}
            text={"Transaksi"}
            iconUrl={"/img/admin/transaction.svg"}
          />
        </li>
        <li>
          <SidebarItemAdmin
            className=""
            href={"/content-management"}
            text={"Kelola Konten"}
            iconUrl={"/img/admin/content-management.svg"}
          />
        </li>
      </ul>
    </>
  );
}
