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
import Image from "next/image";
import InputText from "../components/input/input";
import TextArea from "../components/input/textArea";

export default function UploadVideoModal({ openModal, closeModal }) {
  const [open, setOpen] = useState(openModal);
  const [token, setToken] = useState(null);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [descriptionVideo, setDescriptionVideo] = useState("");

  const closeModalHandler = (e) => {
    closeModal(e);
    setOpen(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token, // Token dari cookies
        },
        credentials: "include", // Sertakan cookies di request
        body: JSON.stringify({}),
      });
      const result = await response.json();
      console.log(result);

      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setToken(Cookies.get("token"));
  }, []);

  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

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
            className=" w-[683px] relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-2xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <form action="" onSubmit={onSubmit} className="w-full">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center w-full sm:mt-0 sm:text-left">
                    <div className="flex justify-between items-center">
                      <DialogTitle as="h3" className="text-xl font-bold">
                        Upload Video Anda
                      </DialogTitle>
                      <Image
                        src={"/img/admin/cancel.svg"}
                        alt="Logo"
                        width={32}
                        height={32}
                        onClick={(e) => closeModalHandler(e)}
                        className="cursor-pointer"
                      />
                    </div>
                    <div className="mt-2">
                      <InputText
                        label={"Link video youtube"}
                        placeholder={"Masukkan link video youtube"}
                        id={"youtubeUrl"}
                        onChange={(e) => setYoutubeUrl(e.target.value)}
                        value={youtubeUrl}
                      />
                      <TextArea
                        label={"Deskripsi video"}
                        placeholder={
                          "Masukkan deskripsi video singkat yang menjelaskan video anda"
                        }
                        id={"descriptionVideo"}
                        onChange={(e) => setDescriptionVideo(e.target.value)}
                        value={descriptionVideo}
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
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
