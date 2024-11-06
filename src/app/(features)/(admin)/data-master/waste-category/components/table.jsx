"use client";

import { useEffect, useState } from "react";
import Color from "../../../const/color";
import Cookies from "js-cookie";
import { API_BASE_URL } from "@/app/const/const";

export default function TableWasteCategory({ isDataUpdated }) {
  const [wasteCategory, setWasteCategory] = useState([]);
  const [token, setToken] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/waste-category/getAll", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch waste category data");
      }
      const data = await response.json();
      setWasteCategory(data.data);
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

      const response = await fetch(
        `${API_BASE_URL}/waste-category/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: token, // Token dari cookies
          },
          credentials: "include", // Sertakan cookies di request
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete waste category: ${response.status}`);
      }

      fetchData(); // Panggil ulang data setelah delete berhasil
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const tokenValue = Cookies.get("token");
    setToken(tokenValue);
  }, []);

  useEffect(() => {
    fetchData();
  }, [isDataUpdated]);

  return (
    <table className="border-collapse table-auto rounded-ss-lg w-full">
      <thead className="text-white text-left">
        <tr style={{ backgroundColor: Color.primary }}>
          <th className="py-[10px] px-3 border border-black">
            Kategori Sampah
          </th>
          <th className="py-[10px] px-3 border border-black">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {wasteCategory.map((wasteCategory) => (
          <tr key={wasteCategory.id}>
            <td className="py-[10px] px-3 border border-black">
              {wasteCategory.category}
            </td>
            <td className="py-[10px] px-3 border border-black">
              <div className="flex gap-4">
                <a href="" className="text-blue-500 underline ">
                  Edit
                </a>
                <a
                  href=""
                  onClick={(e) => deleteData(wasteCategory.id, e)}
                  className="text-red-500 underline "
                >
                  Hapus
                </a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
