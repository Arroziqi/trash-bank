import Heading1 from "../components/heading1";
import FormWasteType from "./components/form";
import TableWasteType from "./components/table";

export default function WasteTypePage() {
  return (
    <div>
      <FormWasteType />
      <br />
      <br />
      <Heading1 text={"Daftar Jenis Sampah"} className="mb-7" />
      <TableWasteType />
    </div>
  );
}
