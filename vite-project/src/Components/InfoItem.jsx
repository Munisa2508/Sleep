import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Qish from "../assets/Qish.jpg";
import Qish1 from "../assets/Qish7.jpg"
import Qish2 from "../assets/Qish9.jpg"
import Qish3 from '../assets/Qish2.jpg'


import Kuz from "../assets/Kuz.jpg";
import Kuz2 from "../assets/Kuz2.jpg";
import Kuz3 from '../assets/Kuz3.jpg';
import Kuz4 from '../assets/Kuz4.jpg';

import Yoz1 from "../assets/Yoz1.jpg";
import Yoz2  from "../assets/Yoz2.jpg";
import Yoz3  from '../assets/Yoz3.jpg';
import Yoz4  from '../assets/Yoz4.jpg';
const data = {
  1: {
    title: "Squares", // I18n bilan ishlash
    image: Qish, 
    category: "Qish kolleksiyasi",
    info: [
      ["Material", "100% paxta flanel"],
      ["Yostiq kiyimi", "50x70 sm (2 dona)"],
      ["Choyshab", "260-280 sm (1 dona)"],
      ["Ko‘rpa-to‘shak", "180x220 sm (2 dona)"],
      ["Hajmi", "Maxsus o‘lcham"],
      ["Ishlab chiqaruvchi", "Ekologik Toza Uyqu Mahsulotlari"]
    ],
  },


  2: {
    title: "Ikat", // I18n bilan ishlash
    image: Qish1, 
    category: "Qish kolleksiyasi",
    info: [
      ["Material", "100% paxta flanel"],
      ["Yostiq kiyimi", "50x70 sm (2 dona)"],
      ["Choyshab", "260-280 sm (1 dona)"],
      ["Ko‘rpa-to‘shak", "180x220 sm (2 dona)"],
      ["Hajmi", "Maxsus o‘lcham"],
      ["Ishlab chiqaruvchi", "Ekologik Toza Uyqu Mahsulotlari"]
    ],
  },

  3: {
    title: "Circles", // I18n bilan ishlash
    image: Qish2, 
    category: "Qish kolleksiyasi",
    info: [
      ["Material", "100% paxta flanel"],
      ["Yostiq kiyimi", "50x70 sm (2 dona)"],
      ["Choyshab", "260-280 sm (1 dona)"],
      ["Ko‘rpa-to‘shak", "180x220 sm (2 dona)"],
      ["Hajmi", "Maxsus o‘lcham"],
      ["Ishlab chiqaruvchi", "Ekologik Toza Uyqu Mahsulotlari"]
    ],
  },


  4: {
    title: "Blue", // I18n bilan ishlash
    image: Qish3, 
    category: "Qish kolleksiyasi",
    info: [
      ["Material", "100% paxta flanel"],
      ["Yostiq kiyimi", "50x70 sm (2 dona)"],
      ["Choyshab", "260-280 sm (1 dona)"],
      ["Ko‘rpa-to‘shak", "180x220 sm (2 dona)"],
      ["Hajmi", "Maxsus o‘lcham"],
      ["Ishlab chiqaruvchi", "Ekologik Toza Uyqu Mahsulotlari"]
    ],
  },


  5: {
    title: "Safari", // I18n bilan ishlash
    image: Kuz, 
    category: "Kuz kolleksiyasi",
    info: [
      ["Material", "100% paxta flanel"],
      ["Yostiq kiyimi", "50x70 sm (2 dona)"],
      ["Choyshab", "260-280 sm (1 dona)"],
      ["Ko‘rpa-to‘shak", "180x220 sm (2 dona)"],
      ["Hajmi", "Maxsus o‘lcham"],
      ["Ishlab chiqaruvchi", "Ekologik Toza Uyqu Mahsulotlari"]
    ],
  },


  6: {
    title: "Multicolor", // I18n bilan ishlash
    image: Kuz2, 
    category: "Kuz kolleksiyasi",
    info: [
      ["Material", "100% paxta flanel"],
      ["Yostiq kiyimi", "50x70 sm (2 dona)"],
      ["Choyshab", "260-280 sm (1 dona)"],
      ["Ko‘rpa-to‘shak", "180x220 sm (2 dona)"],
      ["Hajmi", "Maxsus o‘lcham"],
      ["Ishlab chiqaruvchi", "Ekologik Toza Uyqu Mahsulotlari"]
    ],
  },

  7: {
    title: "Patern", // I18n bilan ishlash
    image: Kuz3, 
    category: "Kuz kolleksiyasi",
    info: [
      ["Material", "100% paxta flanel"],
      ["Yostiq kiyimi", "50x70 sm (2 dona)"],
      ["Choyshab", "260-280 sm (1 dona)"],
      ["Ko‘rpa-to‘shak", "180x220 sm (2 dona)"],
      ["Hajmi", "Maxsus o‘lcham"],
      ["Ishlab chiqaruvchi", "Ekologik Toza Uyqu Mahsulotlari"]
    ],
  },


  8: {
    title: "AB", // I18n bilan ishlash
    image: Kuz4, 
    category: "Kuz kolleksiyasi",
    info: [
      ["Material", "100% paxta flanel"],
      ["Yostiq kiyimi", "50x70 sm (2 dona)"],
      ["Choyshab", "260-280 sm (1 dona)"],
      ["Ko‘rpa-to‘shak", "180x220 sm (2 dona)"],
      ["Hajmi", "Maxsus o‘lcham"],
      ["Ishlab chiqaruvchi", "Ekologik Toza Uyqu Mahsulotlari"]
    ],
  },

  
  9: {
    title: "Style", // I18n bilan ishlash
    image: Yoz1, 
    category: "Yoz kolleksiyasi",
    info: [
      ["Material", "100% paxta flanel"],
      ["Yostiq kiyimi", "50x70 sm (2 dona)"],
      ["Choyshab", "260-280 sm (1 dona)"],
      ["Ko‘rpa-to‘shak", "180x220 sm (2 dona)"],
      ["Hajmi", "Maxsus o‘lcham"],
      ["Ishlab chiqaruvchi", "Ekologik Toza Uyqu Mahsulotlari"]
    ],
  },


  10: {
    title: "Dan", // I18n bilan ishlash
    image: Yoz2, 
    category: "Yoz kolleksiyasi",
    info: [
      ["Material", "100% paxta flanel"],
      ["Yostiq kiyimi", "50x70 sm (2 dona)"],
      ["Choyshab", "260-280 sm (1 dona)"],
      ["Ko‘rpa-to‘shak", "180x220 sm (2 dona)"],
      ["Hajmi", "Maxsus o‘lcham"],
      ["Ishlab chiqaruvchi", "Ekologik Toza Uyqu Mahsulotlari"]
    ],
  },

  11: {
    title: "Rivera", // I18n bilan ishlash
    image: Yoz3, 
    category: "Yoz kolleksiyasi",
    info: [
      ["Material", "100% paxta flanel"],
      ["Yostiq kiyimi", "50x70 sm (2 dona)"],
      ["Choyshab", "260-280 sm (1 dona)"],
      ["Ko‘rpa-to‘shak", "180x220 sm (2 dona)"],
      ["Hajmi", "Maxsus o‘lcham"],
      ["Ishlab chiqaruvchi", "Ekologik Toza Uyqu Mahsulotlari"]
    ],
  },


  12: {
    title: "Corn", 
    image: Yoz4, 
    category: "Yoz kolleksiyasi",
    info: [
      ["Material", "100% paxta flanel"],
      ["Yostiq kiyimi", "50x70 sm (2 dona)"],
      ["Choyshab", "260-280 sm (1 dona)"],
      ["Ko‘rpa-to‘shak", "180x220 sm (2 dona)"],
      ["Hajmi", "Maxsus o‘lcham"],
      ["Ishlab chiqaruvchi", "Ekologik Toza Uyqu Mahsulotlari"]
    ],
  },
};

const InfoItem = () => {
  const { t } = useTranslation(); 
  const { id } = useParams();
  const item = data[parseInt(id)];

  if (!item) return <div className="text-center text-xl mt-10">{t('notFound')}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Top section: Image + Table */}
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={item.image}
          alt={item.title}
          className="w-full md:w-[400px] rounded-3xl object-cover"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">{t(item.title)}</h2>
          <table className="w-full border border-gray-300">
            <tbody>
              {item.info.map(([key, value], idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-2 font-medium border-r border-gray-300">{t(key)}</td>
                  <td className="p-2">{t(value)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-red-600">
            {t('category')}: <span className="font-medium">{t(item.category)}</span>
          </p>
        </div>
      </div>

      {/* Comments section */}
      <div className="mt-16 grid md:grid-cols-2 gap-8">
        {/* Left: comments list */}
        <div>
          <h3 className="text-xl font-semibold mb-2">{t('comments')}</h3>
          <p className="text-gray-500">{t('noComments')}</p>
        </div>

        {/* Right: leave a comment */}
        <div>
          <h3 className="text-xl font-semibold mb-4">{t('leaveComment')}</h3>
          <form className="space-y-4">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <label className="font-medium">{t('rating')}:</label>
              <div className="text-xl text-gray-400">★ ★ ★ ★ ★</div>
            </div>

            <input
              type="text"
              placeholder={t('name')}
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              placeholder={t('email')}
              className="w-full border p-2 rounded"
            />
            <textarea
              placeholder={t('comment')}
              rows={4}
              className="w-full border p-2 rounded"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600"
            >
              {t('submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InfoItem;
