"use client";

export default function DangerLink({
  text,
  className = "",
  onClick = () => {},
  href,
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-red-500 underline ${className}`}
    >
      {text}
    </a>
  );
}
