"use client";

import PrimaryButton from "../data-master/components/button/primaryButton";
import Heading1 from "../data-master/components/heading1";
import TableSession from "./components/table";

export default function TransactionPage() {
  return (
    <div>
      <Heading1 text={"Riwayat sesi transaksi"} className="mb-9" />
      <div className="flex justify-end mb-8">
        <PrimaryButton text={"Tambah Sesi"} />
      </div>
      <TableSession />
    </div>
  );
}
