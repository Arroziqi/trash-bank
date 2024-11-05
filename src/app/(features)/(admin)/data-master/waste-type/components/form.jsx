import FormContainer from "../../components/formContainer";
import Heading1 from "../../components/heading1";
import InputSelect from "../../components/input/inputSelect";
import InputSubmit from "../../components/input/inputSubmit";
import InputText from "../../components/input/inputText";

export default function FormWasteType() {
  return (
    <FormContainer>
      <Heading1 text={"Daftarkan jenis sampah kamu"} />
      <div className="flex flex-col gap-6">
        <InputSelect
          label={"Kategori Sampah"}
          id={"waste-category"}
          options={[
            { value: "1", label: "Jenis Sampah 1" },
            { value: "2", label: "Jenis Sampah 2" },
            { value: "3", label: "Jenis Sampah 3" },
            { value: "4", label: "Jenis Sampah 4" },
          ]}
        />
        <InputText
          id={"waste-category"}
          label={"Jenis Sampah"}
          placeholder={"Masukan jenis sampah (contoh: botol plastik)"}
        />
      </div>
      <div className="flex justify-end">
        <InputSubmit text={"Simpan"} />
      </div>
    </FormContainer>
  );
}
