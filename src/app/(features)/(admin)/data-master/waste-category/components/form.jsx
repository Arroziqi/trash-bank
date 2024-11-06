"use client";

import { useEffect, useState } from "react";
import FormContainer from "../../components/formContainer";
import Heading1 from "../../components/heading1";
import InputSubmit from "../../components/input/inputSubmit";
import InputText from "../../components/input/inputText";
import { API_BASE_URL } from "@/app/const/const";
import Cookies from "js-cookie";

export default function FormWasteCategory({ onCreated }) {
  const [token, setToken] = useState(null);
  const [wasteCategory, setWasteCategory] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/waste-category/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token, // Token dari cookies
        },
        credentials: "include", // Sertakan cookies di request
        body: JSON.stringify({
          category: wasteCategory,
          isDeleted: false,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Mengambil pesan error dari backend
        throw new Error(errorData.error || "Failed to create waste category");
      }

      const responseData = await response.json();

      // Reset form setelah submit berhasil
      setWasteCategory("");

      onCreated();
    } catch (error) {
      throw new Error("Failed to create category", error);
    }
  };

  useEffect(() => {
    const tokenValue = Cookies.get("token");
    setToken(tokenValue);
  }, []);

  return (
    <FormContainer onSubmit={onSubmit}>
      <Heading1 text={"Daftarkan kategori sampah kamu"} />
      <div className="flex flex-col gap-6">
        <InputText
          id={"waste-category"}
          label={"Kategori Sampah"}
          placeholder={"Masukan kategori sampah (contoh: plastik)"}
          value={wasteCategory}
          onChange={(e) => setWasteCategory(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <InputSubmit text={"Simpan"} />
      </div>
    </FormContainer>
  );
}
