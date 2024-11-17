"use client";

import { useEffect, useState } from "react";
import Color from "../../../const/color";
import Cookies from "js-cookie";
import Td from "../../../content-management/components/table/td";
import EditModal from "./editModal";

export default function TableWastePrice({
  isDataUpdated,
  wasteTypes,
  wasteUnits,
}) {
  const [pricelist, setPricelist] = useState([]);
  const [wasteTypeSelectedId, setWasteTypeSelectedId] = useState(null);
  const [wasteUnitSelectedId, setWasteUnitSelectedId] = useState(null);
  const [priceSelectedId, setPriceSelectedId] = useState(null);
  const [price, setPrice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async () => {
    try {
      // Ambil nilai token dan user-role dari cookie
      const token = Cookies.get("token"); // Pastikan key ini sesuai dengan cookie di browser
      const userRole = Cookies.get("user-role");

      // Pastikan token dan user-role tersedia
      if (!token || !userRole) {
        throw new Error("Token atau user-role tidak ditemukan di cookie");
      }

      // Kirim permintaan ke API
      const response = await fetch("http://localhost:5000/api/pricelist/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
          Cookie: `user-role=${encodeURIComponent(userRole)}`,
        },
        credentials: "include", // Pastikan cookie terkirim dalam permintaan
      });

      // Periksa apakah respons berhasil
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parsing data JSON
      const data = await response.json();

      setPricelist(data.data);
    } catch (error) {
      console.error("Error fetching price list:", error);
      throw error;
    }
  };

  const deleteData = async (wasteId, unitId, e) => {
    e.preventDefault();

    try {
      const userRole = Cookies.get("user-role");
      const token = Cookies.get("token");

      const response = await fetch(
        `http://localhost:5000/api/pricelist/delete/${wasteId}/${unitId}`,
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

      if (!response.ok) {
        throw new Error(`Failed to delete waste category: ${response.status}`);
      }

      fetchData(); // Panggil ulang data setelah delete berhasil
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const openModal = (e, typeId, unitId, price, id) => {
    e.preventDefault();

    setWasteTypeSelectedId(typeId);
    setWasteUnitSelectedId(unitId);
    setPrice(price);
    setPriceSelectedId(id);
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    console.log(wasteTypes, wasteUnits);
  }, [wasteTypes, wasteUnits]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [isDataUpdated]);

  return (
    <>
      <EditModal
        openModal={isModalOpen}
        closeModal={(e) => setIsModalOpen(false)}
        price={price}
        id={priceSelectedId}
        typeId={wasteTypeSelectedId}
        unitId={wasteUnitSelectedId}
        wasteTypes={wasteTypes}
        wasteUnits={wasteUnits}
        fetchData={fetchData}
      />
      <table className="border-collapse table-auto rounded-ss-lg w-full">
        <thead className="text-white text-left">
          <tr style={{ backgroundColor: Color.primary }}>
            <th className="py-[10px] px-3 border border-black">Jenis Sampah</th>
            <th className="py-[10px] px-3 border border-black">
              Satuan Sampah
            </th>
            <th className="py-[10px] px-3 border border-black">
              {"Harga Sampah (Satuan)"}
            </th>
            <th className="py-[10px] px-3 border border-black">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {pricelist.map((item, index) => (
            <tr key={index}>
              <Td>
                {wasteTypes.find((type) => type.id === item.waste_type_id)
                  ?.type || "Unknown"}
              </Td>
              <Td>
                {wasteUnits.find((unit) => unit.id === item.uom_id)?.unit ||
                  "Unknown"}
              </Td>
              <Td>{item.price}</Td>
              <Td>
                <div className="flex gap-4">
                  <a
                    href=""
                    className="text-blue-500 underline "
                    onClick={(e) =>
                      openModal(
                        e,
                        item.waste_type_id,
                        item.uom_id,
                        item.price,
                        item.id
                      )
                    }
                  >
                    Edit
                  </a>
                  <a
                    href=""
                    className="text-red-500 underline "
                    onClick={(e) =>
                      deleteData(item.waste_type_id, item.uom_id, e)
                    }
                  >
                    Hapus
                  </a>
                </div>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
