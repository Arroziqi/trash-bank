import Image from "next/image";
import Td from "../components/table/td";
import Thead from "../components/table/thead";
import { useEffect, useState } from "react";
import { fetchArticles, updateArticle } from "./service/article.service";
import { convertDate } from "@/app/service/convertDate.service";

export default function TableArticle() {
  const [articles, setArticles] = useState(null);

  const fetchData = async () => {
    const response = await fetchArticles();
    setArticles(response);
  };

  const updateArticleData = async (id, data) => {
    const response = await updateArticle(id, data);
    console.log("response:", response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <table className="w-full table-fixed">
        <Thead />
        <tbody>
          {articles?.map((article) => (
            <tr key={article.id}>
              <Td>
                <Image
                  src="/img/admin/image.png"
                  alt=""
                  width={176}
                  height={114}
                />
              </Td>
              <Td>{article.title}</Td>
              <Td>{convertDate(article.created_date)}</Td>
              <Td>24 Penayangan</Td>
              <Td>
                <select
                  name="order"
                  id="order"
                  className="w-full px-3 py-2 rounded-[4px]"
                  value={article.article_order}
                  onChange={(e) => {
                    const updatedData = {
                      ...article, // Menggunakan data artikel sebelumnya
                      article_order: e.target.value, // Mengupdate hanya order
                    };
                    updateArticleData(article.id, updatedData); // Mengirim objek lengkap
                  }}
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
          ))}
        </tbody>
      </table>
    </div>
  );
}
