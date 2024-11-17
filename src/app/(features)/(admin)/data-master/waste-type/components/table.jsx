"use client";

import { useState, useEffect } from "react";
import Color from "../../../const/color";
import TdDataMaster from "../../components/table/td";
import Cookies from "js-cookie";
import { API_BASE_URL } from "@/app/const/const";
import EditModal from "./editModal";

export default function TableWasteType({ isDataUpdated, wasteCategories }) {
  const [token, setToken] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wasteType, setWasteType] = useState([]);
  const [wasteCategorySelected, setWasteCategorySelected] = useState(null);
  const [wasteTypeSelected, setWasteTypeSelected] = useState(null);
  const [wasteTypeSelectedId, setWasteTypeSelectedId] = useState(null);

  const fetchData = async () => {
    try {
      const tokenValue = Cookies.get("token");
      setToken(tokenValue);

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

  const openModal = (event, categoryId, type, id) => {
    if (event?.preventDefault) event.preventDefault();

    setWasteCategorySelected(categoryId);
    setWasteTypeSelected(type);
    setWasteTypeSelectedId(id);
    setIsModalOpen((prev) => !prev);
  };

  const deleteData = async (id, e) => {
    e.preventDefault();

    try {
      if (!token) {
        throw new Error("Token is missing.");
      }

      const userRole = Cookies.get("user-role");

      const response = await fetch(
        `http://localhost:5000/api/waste-type/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: token, // Token dari cookies
            Cookie: `user-role=${encodeURIComponent(userRole)}`,
          },
          credentials: "include", // Sertakan cookies di request
        }
      );

      console.log(response);

      if (!response.ok) {
        throw new Error(`Failed to delete waste type: ${response.status}`);
      }

      fetchData(); // Panggil ulang data setelah delete berhasil
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isDataUpdated]);

  // useEffect to observe changes in wasteType
  useEffect(() => {
    console.log("Updated wasteType:", wasteType);
  }, [wasteType]);

  return (
    <>
      <EditModal
        openModal={isModalOpen}
        closeModal={(e) => setIsModalOpen(false)}
        type={wasteTypeSelected}
        id={wasteTypeSelectedId}
        categoryId={wasteCategorySelected}
        wasteCategories={wasteCategories}
        fetchData={fetchData}
      />
      <table className="border-collapse table-auto rounded-ss-lg w-full">
        <thead className="text-white text-left">
          <tr style={{ backgroundColor: Color.primary }}>
            <th className="py-[10px] px-3 border border-black">
              Kategori Sampah
            </th>
            <th className="py-[10px] px-3 border border-black">Jenis Sampah</th>
            <th className="py-[10px] px-3 border border-black">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {wasteType.map((item, index) => (
            <tr key={index}>
              <TdDataMaster>{item.waste_category}</TdDataMaster>
              <TdDataMaster>{item.type}</TdDataMaster>
              <TdDataMaster>
                <div className="flex gap-4">
                  <a
                    href=""
                    className="text-blue-500 underline "
                    onClick={(e) => {
                      const wasteCategory = wasteCategories.find(
                        (category) => category.label === item.waste_category
                      );
                      const wasteCategoryId = wasteCategory
                        ? wasteCategory.value
                        : null; // Ambil ID atau null jika tidak ditemukan
                      openModal(e, wasteCategoryId, item.type, item.id);
                    }}
                  >
                    Edit
                  </a>
                  <a
                    href=""
                    className="text-red-500 underline "
                    onClick={(e) => deleteData(item.id, e)}
                  >
                    Hapus
                  </a>
                </div>
              </TdDataMaster>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
