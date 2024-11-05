import Link from "next/link";
import Color from "../const/color";
export default function SidebarItemAdmin({
  className = "",
  href,
  text,
  iconUrl,
  isActive = false,
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-4 py-2 px-3 rounded-lg font-bold text-lg w-[248px] ${className}`}
      style={
        isActive
          ? { backgroundColor: Color.lightGreen, color: Color.primary }
          : { backgroundColor: "transparent", color: Color.lightGreen }
      }
    >
      <img src={iconUrl} alt="icon" width={24} height={24} />
      {text}
    </Link>
  );
}
