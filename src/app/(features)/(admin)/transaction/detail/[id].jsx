import { useSearchParams } from "next/navigation";

export default function DetailTransaction() {
  const params = useSearchParams();

  return <div>Detail Transaction {params.get("id")}</div>;
}
