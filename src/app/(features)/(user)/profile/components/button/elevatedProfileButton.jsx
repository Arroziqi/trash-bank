export default function ElevatedProfileButton({
  text,
  className = "bg-blue-600 hover:bg-blue-700 text-white",
}) {
  return (
    <button className={`rounded-lg py-3 px-5 text-[16px] ${className}`}>
      {text}
    </button>
  );
}
