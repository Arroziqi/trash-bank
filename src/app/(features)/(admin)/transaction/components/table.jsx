import Color from "../../const/color";
import DangerLink from "../../data-master/components/link/dangerLink";
import PrimaryLink from "../../data-master/components/link/primaryLink";
import TdDataMaster from "../../data-master/components/table/td";
import ThDataMaster from "../../data-master/components/table/th";

export default function TableSession() {
  return (
    <table className="border-collapse table-auto rounded-ss-lg w-full">
      <thead className="text-white text-left">
        <tr style={{ backgroundColor: Color.primary }}>
          <ThDataMaster text={"Tanggal"} />
          <ThDataMaster text={"Total Berat Setoran"} />
          <ThDataMaster text={"Total Pengeluaran"} />
          <ThDataMaster text={"Aksi"} />
        </tr>
      </thead>
      <tbody>
        <tr>
          <TdDataMaster>10-01-2023</TdDataMaster>
          <TdDataMaster>10 Kg</TdDataMaster>
          <TdDataMaster>Rp. 100.000</TdDataMaster>
          <TdDataMaster>
            <div className="flex gap-4">
              <PrimaryLink text={"Lihat"} href={"/transaction/3"} />
              <PrimaryLink text={"Edit"} />
              <DangerLink text={"Hapus"} />
            </div>
          </TdDataMaster>
        </tr>
      </tbody>
    </table>
  );
}
