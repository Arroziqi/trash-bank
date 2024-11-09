import InputSubmit from "../../../data-master/components/input/inputSubmit";

export default function CreateArticlePage() {
  return (
    <form className="px-28 py-16">
      <div className="mb-9"></div>
      <div className="flex justify-end">
        <InputSubmit text={"Simpan"} />
      </div>
    </form>
  );
}
