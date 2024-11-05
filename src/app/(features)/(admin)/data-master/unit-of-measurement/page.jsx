import Heading1 from "../components/heading1";
import FormUnitOfMeasurement from "./components/form";
import TableUnitOfMeasurement from "./components/table";

export default function UnitOfMeasurementPage() {
  return (
    <div className="">
      <FormUnitOfMeasurement />
      <br />
      <br />
      <Heading1 text={"Daftar Satuan Sampah"} className="mb-7" />
      <TableUnitOfMeasurement />
    </div>
  );
}
