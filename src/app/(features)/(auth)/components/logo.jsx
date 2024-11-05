import Color from "../const/theme";

export default function Logo() {
  return (
    <h1
      className={`font-extrabold text-[32px]`}
      style={{ color: Color.primary }}
    >
      BANK <br />
      SAMPAH
    </h1>
  );
}
