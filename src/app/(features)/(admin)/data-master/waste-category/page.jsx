"use client";
import Heading1 from "../components/heading1";
import FormWasteCategory from "./components/form";
import TableWasteCategory from "./components/table";

export default function WasteCategoryPage() {
  return (
    <div>
      <FormWasteCategory />
      <br />
      <br />

      <Heading1 text={"Daftar Kategori Sampah"} className="mb-7" />
      <TableWasteCategory />
    </div>
  );
}
