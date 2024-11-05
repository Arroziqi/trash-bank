import FormContainer from "../../components/formContainer";
import Heading1 from "../../components/heading1";
import InputSubmit from "../../components/input/inputSubmit";
import InputText from "../../components/input/inputText";

export default function FormUnitOfMeasurement() {
  return (
    <FormContainer>
      <Heading1 text={"Daftarkan jenis sampah kamu"} />
      <div className="flex flex-col gap-6">
        <InputText
          id={"unit-of-measurement"}
          label={"Satuan Sampah"}
          placeholder={"Masukan satuan sampah (contoh: Kilogram)"}
        />
      </div>
      <div className="flex justify-end">
        <InputSubmit text={"Simpan"} />
      </div>
    </FormContainer>
  );
}
