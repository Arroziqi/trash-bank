"use client";

export default function PrimaryLink({
  text,
  className = "",
  onClick = () => {},
  href,
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-blue-500 underline ${className}`}
    >
      {text}
    </a>
  );
}
