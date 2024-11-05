export default function InputText({ type, placeholder }) {
  return (
    <input
      className="text-[32px] font-bold leading-10 px-[31px] py-[15px] rounded-[10px] outline-none text-black w-full"
      type={type}
      placeholder={placeholder}
    />
  );
}
