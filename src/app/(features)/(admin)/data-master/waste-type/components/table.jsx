import Color from "../../../const/color";

export default function TableWasteType() {
  return (
    <table className="border-collapse table-auto rounded-ss-lg w-full">
      <thead className="text-white text-left">
        <tr style={{ backgroundColor: Color.primary }}>
          <th className="py-[10px] px-3 border border-black">
            Kategori Sampah
          </th>
          <th className="py-[10px] px-3 border border-black">Jenis Sampah</th>
          <th className="py-[10px] px-3 border border-black">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-[10px] px-3 border border-black">Plastik</td>
          <td className="py-[10px] px-3 border border-black">Botol Plastik</td>
          <td className="py-[10px] px-3 border border-black">
            <div className="flex gap-4">
              <a href="" className="text-blue-500 underline ">
                Edit
              </a>
              <a href="" className="text-red-500 underline ">
                Hapus
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
