import Color from "../../../const/color";
import DangerLink from "../../../data-master/components/link/dangerLink";
import PrimaryLink from "../../../data-master/components/link/primaryLink";
import TdDataMaster from "../../../data-master/components/table/td";
import ThDataMaster from "../../../data-master/components/table/th";

export default function TableTransaction({ isDataUpdated }) {
  return (
    <>
      <table className="border-collapse table-auto rounded-ss-lg w-full">
        <thead className="text-white text-left">
          <tr style={{ backgroundColor: Color.primary }}>
            <ThDataMaster text={"Nama Nasabah"} />
            <ThDataMaster text={"Jenis Sampah"} />
            <ThDataMaster text={"Berat Sampah"} />
            <ThDataMaster text={"Total Harga Sampah"} />
            <ThDataMaster text={"Aksi"} />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TdDataMaster>EUIS</TdDataMaster>
            
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
    </>
  );
}
