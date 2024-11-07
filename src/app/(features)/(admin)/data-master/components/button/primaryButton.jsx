"use client";

import Color from "../../../const/color";

export default function PrimaryButton({
  text,
  className = "",
  onClick = () => {},
}) {
  return (
    <button
      onClick={onClick}
      className={`text-white py-3 px-14 rounded-lg font-bold text-xl ${className}`}
      style={{ backgroundColor: Color.primary }}
    >
      {text}
    </button>
  );
}
