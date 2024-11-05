import Heading1 from "../components/heading1";
import FormWastePrice from "./components/form";
import TableWastePrice from "./components/table";

export default function WastePricePage() {
  return (
    <div>
      <FormWastePrice />
      <br />
      <br />

      <Heading1 text={"Daftar harga sampah"} className="mb-7" />
      <TableWastePrice />
    </div>
  );
}
