"use client";

import { useState, useEffect } from "react";
import FormContainer from "../../../data-master/components/formContainer";
import { API_BASE_URL } from "@/app/const/const";
import Cookies from "js-cookie";
import Heading1 from "../../../data-master/components/heading1";
import InputSubmit from "../../../data-master/components/input/inputSubmit";
import InputText from "../../../data-master/components/input/inputText";
import Divider from "../../../components/divider";

export default function FormAddTransactioin({ onAdded }) {
  const [token, setToken] = useState(null);
  const [formData, setFormData] = useState({});
  return (
    <FormContainer onSubmit={() => {}}>
      <Heading1 text={"Form Tambah Transaksi"} />
      <div className="flex flex-col gap-6">
        <InputText
          id={""}
          label={"Nama Nasabah"}
          placeholder={"Masukan nama nasabah"}
        />
        <Divider />
        <div
          className="flex flex-col gap-6 shrink-0"
          style={{ maxHeight: "414px", overflowY: "auto" }}
        >
          <InputText
            id={""}
            label={"Nama Nasabah"}
            placeholder={"Masukan nama nasabah"}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <InputSubmit text={"Simpan"} />
      </div>
    </FormContainer>
  );
}
