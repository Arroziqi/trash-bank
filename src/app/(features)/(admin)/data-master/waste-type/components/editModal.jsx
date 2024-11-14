"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { API_BASE_URL } from "@/app/const/const";
import Cookies from "js-cookie";

export default function EditModal({
  openModal,
  closeModal,
  data = "",
  id = "",
  categoryId = "",
  wasteCategories = [],
  fetchData,
}) {
  const [open, setOpen] = useState(openModal);
  const [newWasteType, setNewWasteType] = useState(data);
  const [wasteTypeId, setWasteTypeId] = useState(id);
  const [wasteCategoryId, setWasteCategoryId] = useState(categoryId);

  const closeModalHandler = (e) => {
    closeModal(e);
    setOpen(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const tokenValue = Cookies.get("token");
      const response = await fetch(`http://localhost:5000/api/waste-type/update/${wasteTypeId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: tokenValue,
        },
        credentials: "include",
        body: JSON.stringify({
          type: newWasteType,
          waste_category_id: wasteCategoryId,
          isDeleted: false,
        }),
      });

      if (!response.ok) throw new Error("Failed to update waste type");

      const data = await response.json();
      console.log("Waste type updated successfully:", data);

      fetchData(); // Refresh list after updating
      setIsModalOpen(false); // Close modal after updating
    } catch (error) {
      console.error("Error updating waste type:", error);
    }
  };

  useEffect(() => {
    setToken(Cookies.get("token"));
  }, []);

  useEffect(() => {
    setOpen(openModal);
    setNewCategoryName(category);
    setCategoryId(id);
  }, [openModal, category, id]);

  return (
    <Dialog open={open} onClose={closeModalHandler} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <form action="" onSubmit={onSubmit}>
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center w-full sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold text-gray-900"
                    >
                      Edit Kategori Sampah
                    </DialogTitle>
                    <div className="mt-2">
                      <input
                        type="text"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        className="w-full outline-none border border-[#276561] py-[10px] px-6 rounded-lg font-bold"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={(e) => {
                    onSubmit(e);
                    closeModalHandler(e);
                  }}
                  className="inline-flex w-full justify-center rounded-md bg-[#236152] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#236151de] sm:ml-3 sm:w-auto"
                >
                  Simpan
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={(e) => {
                    closeModalHandler(e);
                  }}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Batal
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
