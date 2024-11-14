"use client";

import { useState, useEffect } from "react";
import FormContainer from "../../components/formContainer";
import Heading1 from "../../components/heading1";
import InputSelect from "../../components/input/inputSelect";
import InputSubmit from "../../components/input/inputSubmit";
import InputText from "../../components/input/inputText";
import Cookies from "js-cookie";
import { API_BASE_URL } from "@/app/const/const";

export default function FormWastePrice({ onFormSubmit }) {
  const [wasteType, setWasteType] = useState([]);
  const [wasteUnit, setWasteUnit] = useState([]);
  const [wastePrice, setWastePrice] = useState("");
  const [wasteTypeId, setWasteTypeId] = useState("");
  const [wasteUnitId, setWasteUnitId] = useState("");
  const [wasteTypeOptions, setWasteTypeOptions] = useState([]);
  const [wasteUnitOptions, setWasteUnitOptions] = useState([]);

  const fetchWasteType = async () => {
    try {
      const tokenValue = Cookies.get("token");

      const response = await fetch("http://localhost:5000/api/waste-type/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: tokenValue, // Authorization token
        },
        credentials: "include", // Ensures cookies (e.g., token and user-role) are sent with the request
      });

      if (!response.ok) {
        throw new Error("Failed to fetch waste types");
      }

      const data = await response.json();

      setWasteType(data.data);
    } catch (error) {
      console.error("Error fetching waste types:", error);
    }
  };

  const fetchWasteUnit = async () => {
    try {
      const tokenValue = Cookies.get("token");

      const response = await fetch(`${API_BASE_URL}/uom/get`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: tokenValue, // Token dari cookies
        },
        credentials: "include", // Sertakan cookies di request
      });
      if (!response.ok) {
        throw new Error("Failed to fetch unit of measurement data");
      }
      const data = await response.json();

      setWasteUnit(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const tokenValue = Cookies.get("token"); // Retrieve token from cookies

      // Calculate end_date as 30 days after start_date
      const startDate = new Date();
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + 30); // Add 30 days to the start date

      const response = await fetch("http://localhost:5000/api/pricelist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: tokenValue,
        },
        credentials: "include", // Sends cookies like `user-role`
        body: JSON.stringify({
          waste_type_id: parseInt(wasteTypeId),
          uom_id: parseInt(wasteUnitId),
          price: parseInt(wastePrice),
          isActive: true,
          start_date: startDate.toString(), // Set the current date for start_date
          end_date: endDate.toString(), // Set end_date to 30 days after start_date
        }),
      });

      if (!response.ok) throw new Error("Failed to create price list");

      const data = await response.json();
      console.log("Price list created successfully:", data);

      // Optionally reset form fields after successful submission
      setWastePrice("");
      setWasteTypeId("");
      setWasteUnitId("");
    } catch (error) {
      console.error("Error creating price list:", error);
    }
  };

  useEffect(() => {
    fetchWasteType();
    fetchWasteUnit();
  }, []);

  useEffect(() => {
    setWasteTypeOptions(
      wasteType.map((item) => ({
        value: item.id,
        label: item.type,
      }))
    );
    setWasteUnitOptions(
      wasteUnit.map((item) => ({
        value: item.id,
        label: item.unit,
      }))
    );
    console.log("Updated wasteType:", wasteType);
    console.log("Updated wasteUnit:", wasteUnit);
  }, [wasteType, wasteUnit]);

  return (
    <FormContainer onSubmit={onSubmit}>
      <Heading1 text={"Daftarkan harga sampah kamu"} />
      <div className="flex flex-col gap-6">
        <InputSelect
          label={"Jenis Sampah"}
          id={"waste-category"}
          options={wasteTypeOptions}
          onChange={setWasteTypeId}
        />
        <InputSelect
          id={"waste-category"}
          label={"Satuan Sampah"}
          options={wasteUnitOptions}
          onChange={setWasteUnitId}
        />
        <InputText
          id={"waste-category"}
          label={"Harga Sampah (Satuan)"}
          placeholder={"Masukan harga sampah (contoh: Rp10.000)"}
          onChange={(e) => setWastePrice(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <InputSubmit text={"Simpan"} />
      </div>
    </FormContainer>
  );
}
