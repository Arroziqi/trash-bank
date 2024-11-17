"use client";

import { useState, useEffect } from "react";
import FormContainer from "../../components/formContainer";
import Heading1 from "../../components/heading1";
import InputSelect from "../../components/input/inputSelect";
import InputSubmit from "../../components/input/inputSubmit";
import InputText from "../../components/input/inputText";
import Cookies from "js-cookie";

export default function FormWasteType({
  onFormSubmit,
  setOptionsWasteCategories,
}) {
  const [token, setToken] = useState(null);
  const [wasteCategories, setWasteCategories] = useState([]);
  const [options, setOptions] = useState([]);
  const [newWasteType, setNewWasteType] = useState("");
  const [wasteCategoryId, setWasteCategoryId] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("/api/waste-category/getAll", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch waste category data");
      }
      const data = await response.json();
      setWasteCategories(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    try {
      const response = await fetch(
        "http://localhost:5000/api/waste-type/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token, // Use token directly in header
          },
          body: JSON.stringify({
            waste_category_id: wasteCategoryId,
            type: newWasteType,
          }),
          credentials: "include", // Ensures cookies (including token and user-role) are sent with the request
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create waste type");
      }

      const data = await response.json();
      console.log("Waste type created successfully:", data);

      setNewWasteType("");
      onFormSubmit();
    } catch (error) {
      console.error("Error creating waste type:", error);
      // Handle error (e.g., show an error message)
    }
  };

  useEffect(() => {
    const newOptions = wasteCategories.map((category) => ({
      value: category.id.toString(),
      label: category.category,
    }));
    setOptions(newOptions);
    setOptionsWasteCategories(newOptions);
  }, [wasteCategories, setOptionsWasteCategories]);

  useEffect(() => {
    fetchData();
    const tokenValue = Cookies.get("token");
    setToken(tokenValue);
  }, []);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Heading1 text={"Daftarkan jenis sampah kamu"} />
      <div className="flex flex-col gap-6">
        <InputSelect
          label={"Kategori Sampah"}
          id={"waste-category"}
          options={options}
          onChange={setWasteCategoryId}
        />
        <InputText
          id={"waste-category"}
          label={"Jenis Sampah"}
          placeholder={"Masukan jenis sampah (contoh: botol plastik)"}
          onChange={(e) => {
            setNewWasteType(e.target.value);
          }}
        />
      </div>
      <div className="flex justify-end">
        <InputSubmit text={"Simpan"} />
      </div>
    </FormContainer>
  );
}
