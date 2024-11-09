import Image from "next/image";
import Color from "../../const/color";
import Td from "../components/table/td";
import Th from "../components/table/th";
import Thead from "../components/table/thead";

export default function TableVideo() {
  return (
    <div>
      <table className="w-full table-fixed">
        <Thead />
        <tbody>
          <tr>
            <Td>
              <Image
                src="/img/admin/image.png"
                alt=""
                width={176}
                height={114}
              />
            </Td>
            <Td>Judul Video</Td>
            <Td>01 November 2024</Td>
            <Td>24 Penayangan</Td>
            <Td>
              <select
                name="order"
                id="order"
                className="w-full px-3 py-2 rounded-[4px]"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </Td>
            <Td>
              <div className="flex gap-4">
                <a href="" className="text-blue-500 underline">
                  Edit
                </a>
                <a href="" className="text-red-500 underline">
                  Hapus
                </a>
              </div>
            </Td>
          </tr>
          <tr>
            <Td>
              <Image
                src="/img/admin/image.png"
                alt=""
                width={176}
                height={114}
              />
            </Td>
            <Td>Judul Video</Td>
            <Td>01 November 2024</Td>
            <Td>24 Penayangan</Td>
            <Td>
              <select
                name="order"
                id="order"
                className="w-full px-3 py-2 rounded-[4px]"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </Td>
            <Td>
              <div className="flex gap-4">
                <a href="" className="text-blue-500 underline">
                  Edit
                </a>
                <a href="" className="text-red-500 underline">
                  Hapus
                </a>
              </div>
            </Td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
