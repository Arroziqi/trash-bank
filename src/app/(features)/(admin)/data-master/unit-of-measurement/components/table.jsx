"use client";

import { useEffect, useState } from "react";
import Color from "../../../const/color";
import Cookies from "js-cookie";
import { API_BASE_URL } from "@/app/const/const";
import EditModal from "./editModal";

export default function TableUnitOfMeasurement({ isDataUpdated }) {
  const [unitOfMeasurement, setUnitOfMeasurement] = useState([]);
  const [token, setToken] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [unitOfMeasurementSelected, setUnitOfMeasurementSelected] =
    useState(null);
  const [unitOfMeasurementSelectedId, setUnitOfMeasurementSelectedId] =
    useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/uom/get`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token, // Token dari cookies
        },
        credentials: "include", // Sertakan cookies di request
      });
      if (!response.ok) {
        throw new Error("Failed to fetch unit of measurement data");
      }
      const data = await response.json();
      console.log(data);

      setUnitOfMeasurement(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteData = async (id, e) => {
    e.preventDefault();

    if (!id) {
      console.error("ID is required to delete data.");
      return;
    }

    try {
      if (!token) {
        throw new Error("Token is missing.");
      }

      const response = await fetch(`${API_BASE_URL}/uom/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token, // Token dari cookies
        },
        credentials: "include", // Sertakan cookies di request
      });

      if (!response.ok) {
        throw new Error(
          `Failed to delete unit of measurement: ${response.status}`
        );
      }

      fetchData(); // Panggil ulang data setelah delete berhasil
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const openModal = (event, unitOfMeasurement, id) => {
    if (event?.preventDefault) event.preventDefault();

    setUnitOfMeasurementSelected(unitOfMeasurement);
    setUnitOfMeasurementSelectedId(id);
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    const tokenValue = Cookies.get("token");
    setToken(tokenValue);
  }, []);

  useEffect(() => {
    if (!token) {
      return;
    }
    fetchData();
  }, [isDataUpdated, token]);

  return (
    <>
      <EditModal
        openModal={isModalOpen}
        closeModal={(event) => openModal(event)}
        unitOfMeasurement={unitOfMeasurementSelected}
        id={unitOfMeasurementSelectedId}
        fetchData={fetchData}
      />
      <table className="border-collapse table-auto rounded-ss-lg w-full">
        <thead className="text-white text-left">
          <tr style={{ backgroundColor: Color.primary }}>
            <th className="py-[10px] px-3 border border-black">
              Satuan Sampah
            </th>
            <th className="py-[10px] px-3 border border-black">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {unitOfMeasurement.map((data) => (
            <tr key={data.id}>
              <td className="py-[10px] px-3 border border-black">{data.unit}</td>
              <td className="py-[10px] px-3 border border-black">
                <div className="flex gap-4">
                  <a
                    href=""
                    className="text-blue-500 underline "
                    onClick={(event) => openModal(event, data.unit, data.id)}
                  >
                    Edit
                  </a>
                  <a
                    href=""
                    className="text-red-500 underline "
                    onClick={(event) => deleteData(data.id, event)}
                  >
                    Hapus
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
