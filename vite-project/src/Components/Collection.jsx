import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Qish from "../assets/Qish.jpg";
import Qish1 from "../assets/Qish7.jpg";
import Qish2 from "../assets/Qish9.jpg";
import Qish3 from "../assets/Qish2.jpg";
import Kuz from "../assets/Kuz.jpg";
import Kuz2 from "../assets/Kuz2.jpg";
import Kuz3 from "../assets/Kuz3.jpg";
import Kuz4 from "../assets/Kuz4.jpg";
import Yoz1 from "../assets/Yoz1.jpg";
import Yoz2 from "../assets/Yoz2.jpg";

const products = [
  { id: 1, key: "kvadraty", image: Qish, category: "winter" },
  { id: 2, key: "ikat", image: Kuz, category: "autumn" },
  { id: 3, key: "krugi", image: Yoz1, category: "summer" },
  { id: 4, key: "golubaya", image: Qish2, category: "winter" },
  { id: 5, key: "bembi", image: Kuz3, category: "autumn" },
  { id: 6, key: "vizantiya", image: Yoz2, category: "summer" },
  { id: 7, key: "kvadraty", image: Qish1, category: "winter" },
  { id: 8, key: "ikat", image: Kuz2, category: "autumn" },
  { id: 9, key: "krugi", image: Yoz2, category: "summer" },
  { id: 10, key: "kvadraty", image: Qish3, category: "winter" },
  { id: 11, key: "ikat", image: Kuz4, category: "autumn" },
  { id: 12, key: "krugi", image: Yoz2, category: "summer" },
];

const categoryKeys = ["all", "winter", "autumn", "summer"];

export default function CollectionPage() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchSearch = t(`items.${product.key}`)
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 p-4">
        <input
          type="text"
          placeholder={t("search")}
          className="w-full p-2 border rounded mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="font-semibold mb-2">{t("collection")}</div>
        <ul className="grid grid-cols-2 gap-2">
          {categoryKeys.map((key) => (
            <li
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`cursor-pointer p-2 border rounded text-center ${
                selectedCategory === key
                  ? "text-red-500 font-bold border-red-500"
                  : "hover:bg-gray-100"
              }`}
            >
              {t(`categories.${key}`)}
            </li>
          ))}
        </ul>
      </div>

      {/* Products */}
      <div className="w-full md:w-3/4 p-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={t(`items.${item.key}`)}
                className="w-full h-52 object-cover"
              />
              <div className="p-2 text-center font-medium">
                {t(`items.${item.key}`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
