"use client";

import { useEffect, useState } from "react";
import FormContainer from "../../components/formContainer";
import Heading1 from "../../components/heading1";
import InputSubmit from "../../components/input/inputSubmit";
import InputText from "../../components/input/inputText";
import { API_BASE_URL } from "@/app/const/const";
import Cookies from "js-cookie";

export default function FormUnitOfMeasurement({ onCreated }) {
  const [token, setToken] = useState(null);
  const [unitOfMeasurement, setUnitOfMeasurement] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/uom/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token, // Token dari cookies
        },
        credentials: "include", // Sertakan cookies di request
        body: JSON.stringify({
          unit: unitOfMeasurement,
          isDeleted: false,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Mengambil pesan error dari backend
        throw new Error(
          errorData.error || "Failed to create unit of measurement"
        );
      }

      const responseData = await response.json();

      // Reset form setelah submit berhasil
      setUnitOfMeasurement("");

      onCreated();
    } catch (error) {
      throw new Error("Failed to create unit of measurement", error);
    }
  };

  useEffect(() => {
    const tokenValue = Cookies.get("token");
    setToken(tokenValue);
  }, []);

  return (
    <FormContainer onSubmit={onSubmit}>
      <Heading1 text={"Daftarkan jenis sampah kamu"} />
      <div className="flex flex-col gap-6">
        <InputText
          id={"unit-of-measurement"}
          label={"Satuan Sampah"}
          placeholder={"Masukan satuan sampah (contoh: Kilogram)"}
          value={unitOfMeasurement}
          onChange={(e) => setUnitOfMeasurement(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <InputSubmit text={"Simpan"} />
      </div>
    </FormContainer>
  );
}
