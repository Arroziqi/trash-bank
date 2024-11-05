import SidebarItemAdmin from "./sidebarItemAdmin";

export default function SidebarMenuDropdown({ isActive = false }) {
  return (
    <div className="flex flex-col gap-1">
      <SidebarItemAdmin
        href={""}
        text={"Konfigurasi Data"}
        iconUrl={"/img/admin/config.svg"}
        isDropdown={true}
        isActive={isActive}
      />
      <div className="flex flex-col gap-1 ps-[49px] pe-[24px]">
        <SidebarItemAdmin
          href={"/data-master/waste-category"}
          text={"Kategori Sampah"}
        />
        <SidebarItemAdmin
          href={"/data-master/waste-type"}
          text={"Jenis Sampah"}
        />
        <SidebarItemAdmin
          href={"/data-master/unit-of-measurement"}
          text={"Unit Pengukuran"}
        />
        <SidebarItemAdmin
          href={"/data-master/waste-price"}
          text={"Harga Sampah"}
        />
      </div>
    </div>
  );
}
