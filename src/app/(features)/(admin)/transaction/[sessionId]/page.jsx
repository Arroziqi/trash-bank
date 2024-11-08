"use client";

import * as React from "react";
import FormAddTransactioin from "./components/form";
import Heading1 from "../../data-master/components/heading1";
import ButtonSort from "./components/button/buttonSort";
import TableTransaction from "./components/table";

export default function Page({ params }) {
  const { sessionId } = React.use(params);
  const [isDataUpdated, setIsDataUpdated] = React.useState(false);

  const handleFormSubmit = () => {
    setIsDataUpdated((prev) => !prev);
  };

  return (
    <div>
      <FormAddTransactioin onAdded={handleFormSubmit} />
      <br />
      <br />
      <div className="flex justify-between mb-5">
        <Heading1 text={"Daftar transaksi sesi  17-10-2024"} />
        <ButtonSort text={"Urutkan"} onClick={() => console.log(sessionId)} />
      </div>
      <TableTransaction isDataUpdated={isDataUpdated} sessionId={sessionId} />
    </div>
  );
}
