import Image from "next/image";

export default function UserAvatar({ width = 56, height = 56 }) {
  return (
    <Image
      className="rounded-full"
      src="/img/avatar/user-avatar.png"
      alt="User Avatar"
      width={width}
      height={height}
    />
  );
}
