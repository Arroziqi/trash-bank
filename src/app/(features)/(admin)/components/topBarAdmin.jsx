import Image from "next/image";
import Color from "../const/color";

export default function TopBarAdmin() {
  return (
    <div
      className="h-[141px] w-full fixed py-[27px] px-[128px] pt-[66px]"
      style={{ backgroundColor: Color.light }}
    >
      <div className="flex gap-3 items-center justify-end">
        <Image src="/img/icons/bell.svg" alt="Logo" width={26} height={26} />
        <Image src="/img/icons/person.svg" alt="Logo" width={48} height={48} />
      </div>
    </div>
  );
}
