import Label from "../label";

export default function InputSelect({ options, id, label }) {
  return (
    <div className="flex justify-between items-center">
      <Label className="shrink-0" text={label} id={id} />
      <select
        name={id}
        id={id}
        className="w-[70%] outline-none border border-black bg-white rounded-lg py-3 px-4 text-xl font-bold"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
