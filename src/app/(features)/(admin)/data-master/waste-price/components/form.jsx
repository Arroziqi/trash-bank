"use client";

import FormContainer from "../../components/formContainer";
import Heading1 from "../../components/heading1";
import InputSelect from "../../components/input/inputSelect";
import InputSubmit from "../../components/input/inputSubmit";
import InputText from "../../components/input/inputText";

export default function FormWastePrice() {
  return (
    <FormContainer>
      <Heading1 text={"Daftarkan harga sampah kamu"} />
      <div className="flex flex-col gap-6">
        <InputSelect
          label={"Jenis Sampah"}
          id={"waste-category"}
          options={[
            { value: "1", label: "Jenis Sampah 1" },
            { value: "2", label: "Jenis Sampah 2" },
            { value: "3", label: "Jenis Sampah 3" },
            { value: "4", label: "Jenis Sampah 4" },
          ]}
        />
        <InputSelect
          id={"waste-category"}
          label={"Satuan Sampah"}
          options={[
            { value: "1", label: "Satuan Sampah 1" },
            { value: "2", label: "Satuan Sampah 2" },
            { value: "3", label: "Satuan Sampah 3" },
            { value: "4", label: "Satuan Sampah 4" },
          ]}
        />
        <InputText
          id={"waste-category"}
          label={"Harga Sampah (Satuan)"}
          placeholder={"Masukan harga sampah (contoh: Rp10.000)"}
        />
      </div>
      <div className="flex justify-end">
        <InputSubmit text={"Simpan"} />
      </div>
    </FormContainer>
  );
}
