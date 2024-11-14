"use client";

import { useState } from "react";
import Heading1 from "../components/heading1";
import FormWastePrice from "./components/form";
import TableWastePrice from "./components/table";

export default function WastePricePage() {
  const [isDataUpdated, setIsDataUpdated] = useState(false);

  const handleFormSubmit = () => {
    setIsDataUpdated((prev) => !prev);
  };
  return (
    <div>
      <FormWastePrice onFormSubmit={handleFormSubmit}/>
      <br />
      <br />

      <Heading1 text={"Daftar harga sampah"} className="mb-7" />
      <TableWastePrice isDataUpdated={isDataUpdated}/>
    </div>
  );
}
