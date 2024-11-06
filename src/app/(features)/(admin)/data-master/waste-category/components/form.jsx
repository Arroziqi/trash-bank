"use client";

import FormContainer from "../../components/formContainer";
import Heading1 from "../../components/heading1";
import InputSubmit from "../../components/input/inputSubmit";
import InputText from "../../components/input/inputText";

export default function FormWasteCategory() {
  return (
    <FormContainer>
      <Heading1 text={"Daftarkan kategori sampah kamu"} />
      <div className="flex flex-col gap-6">
        <InputText
          id={"waste-category"}
          label={"Kategori Sampah"}
          placeholder={"Masukan kategori sampah (contoh: plastik)"}
        />
      </div>
      <div className="flex justify-end">
        <InputSubmit text={"Simpan"} />
      </div>
    </FormContainer>
  );
}
