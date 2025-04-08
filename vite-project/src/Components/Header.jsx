import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { TbTruckDelivery } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
import Fasl from "../assets/fasil.png";
import Bahor from "../assets/bahor.png";


import Home from "../assets/home.png";
import Qish from "../assets/Qish.jpg";
import Qish1 from "../assets/Qish7.jpg";
import Qish2 from "../assets/Qish9.jpg";
import Qish3 from '../assets/Qish2.jpg';
import Kuz from "../assets/Kuz.jpg";
import Kuz2 from "../assets/Kuz2.jpg";
import Kuz3 from '../assets/Kuz3.jpg';
import Kuz4 from '../assets/Kuz4.jpg';
import Yoz from '../assets/yoz.png'
import Yoz1 from "../assets/Yoz1.jpg";
import Yoz2  from "../assets/Yoz2.jpg";
import Yoz3  from '../assets/Yoz3.jpg';
import Yoz4  from '../assets/Yoz4.jpg';
import News from '../assets/News.png';
import New2 from "../assets/news2.png";
import New3 from "../assets/News3.png"




const Header = () => {
    const { t } = useTranslation(); 

    const navigate = useNavigate(); // navigate funksiyasini yaratish
    const handleButtonClick = () => {
      navigate("/collection"); // Bu /collection sahifasiga o'tadi
    };

    const [bgColor, setBgColor] = useState("#CCFF99");

    useEffect(() => {
      const colors = [ "#FFFF99", "#FFCCCC", "#FF9933"];
      let index = 0;
    
    const interval = setInterval(() => {
      setBgColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="max-w-screen-xl mx-auto px-2">
     <div className="flex flex-col md:flex-row justify-between items-center rounded-4xl mt-10 h-150 p-5" style={{ backgroundColor: bgColor }}>
       <img className="h-220 w-420 md:ml-[-180px] md:mt-15" src={Home} alt="Rasm" />

       <div className="flex flex-col gap-5 mt-5 text-brown-200 text-right pb-90 md:ml-[-340px]">
         <p className="text-4xl sm:text-4xl md: text-2xl">{t("eco")}</p>
         <p className="text-6xl sm:text-6xl md: text-xl">{t("cl")}</p>
         <p className="text-8xl sm:text-8xl md: text-xl">{t("pro")}</p>
       </div>
     </div>



     <div className="flex justify-center pt-10 gap-10 text-2xl md:flex flex-col  lg:flex-row lg:gap-20 xl:gap-30">
       <div className="flex items-center gap-2">
         <TbTruckDelivery className="text-red-500 text-4xl" />
         <p>{t("free")}</p>
       </div>

       <div className="flex items-center gap-2">
         <FaCheckCircle className="text-red-500 text-3xl" />
          <p>{t("return")}</p>
       </div>

        <div className="flex items-center gap-2">
          <FaHeadphones className="text-red-500 text-3xl" />
          <p>{t("online")}</p>
       </div>

        <div className="flex items-center gap-2">
          <IoWallet className="text-red-500 text-3xl" />
          <p>{t('pay')}</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start bg-[#3b3547] rounded-3xl shadow-[0_0_40px_#fca5a5] text-white px-6 lg:px-10 mt-10 lg:mt-30 h-auto lg:h-100">
  
        <div className="flex flex-col justify-start mt-6 lg:mt-25">
          <p className="text-6xl lg:text-8xl font-bold ">100%</p>
          <p className="text-base lg:text-xl mt-2 ml-6">{t("m")}</p>
        </div>

         <img src={Fasl} alt="Ko‘rpa rasm" className="h-[300px] lg:h-[450px] object-contain mt-6 lg:mt-0" />
  
        <div className="max-w-md text-center lg:text-right mt-6 lg:mt-25">
         <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-2">"{t("ecoTitle")}"</h2>
         <p className="text-sm text-white/80 mb-4">
            {t("ecoDesc")}
          </p>
           <button onClick={handleButtonClick} className="bg-white text-gray-800 px-6 py-3 rounded-xl text-sm hover:bg-gray-100 transition">
            {t("collection")}
          </button>
       </div>
     </div>



      <div className="mt-20 font-bold gap-4 flex flex-col text-center">
        <h2 className="text-5xl">{t("qish")}</h2>
        <p className="text-xl">{t("ecoTitle")}</p>
      </div>

      {/* images */}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        <div className="flex flex-col items-center">
          <Link to="/infoitem/1" className="w-full flex flex-col items-center">
            <img
               className="h-60 w-full max-w-[300px] rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
              src={Qish}
               alt=""
            />
            <p className="text-2xl mt-5 hover:text-red-600">{t("Squares")}</p>
          </Link>
        </div>

       <div className="flex flex-col items-center">
         <Link to="/infoitem/2" className="w-full flex flex-col items-center">
           <img
             className="h-60 w-full max-w-[300px] rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
             src={Qish1}
             alt=""
           />
           <p className="text-2xl mt-5 hover:text-red-600">{t("Ikat")}</p>
         </Link>
       </div>

       <div className="flex flex-col items-center">
         <Link to="/infoitem/3" className="w-full flex flex-col items-center">
           <img
             className="h-60 w-full max-w-[300px] rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
             src={Qish2}
             alt=""
           />
           <p className="text-2xl mt-5 hover:text-red-600">{t("Circles")}</p>
         </Link>
        </div>

       <div className="flex flex-col items-center">
         <Link to="/infoitem/4" className="w-full flex flex-col items-center">
           <img
             className="h-60 w-full max-w-[300px] rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
             src={Qish3}
              alt=""
            />
           <p className="text-2xl mt-5 hover:text-red-600">{t("Blue")}</p>
         </Link>
       </div>
      </div>



       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 justify-items-center">
          <div className="flex flex-col items-center">
            <Link to="/infoitem/4">
              <img
                className="h-60 w-90 rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
                src={Qish3}
                alt=""
              />
              <p className="text-2xl mt-5 hover:text-red-600">{t("Blue")}</p>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link to="/infoitem/3">
              <img
                className="h-60 w-90 rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
                src={Qish2}
                alt=""
              />
              <p className="text-2xl mt-5 hover:text-red-600">{t("Circles")}</p>
            </Link>
          </div>

         <div className="flex flex-col items-center">
           <Link to="/infoitem/2">
             <img
               className="h-60 w-90 rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
               src={Qish1}
               alt=""
             />
             <p className="text-2xl mt-5 hover:text-red-600">{t("Ikat")}</p>
           </Link>
         </div>

         <div className="flex flex-col items-center">
           <Link to="/infoitem/1">
             <img
               className="h-60 w-90 rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
               src={Qish}
               alt=""
             />
             <p className="text-2xl mt-5 hover:text-red-600">{t("Squares")}</p>
           </Link>
         </div>
       </div>



       <div className="flex flex-col lg:flex-row justify-between items-center bg-purple-500 rounded-3xl shadow-[0_0_80px_#fca5a5] text-white px-6 lg:px-10 mt-20 py-10 gap-10">
          {/* Chap tarafdagi foiz qismi */}
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-6xl lg:text-8xl font-bold">100%</p>
            <p className="text-lg lg:text-xl mt-2">{t("m")}</p>
          </div>

          {/* Rasm */}
          <img
            src={Bahor}
            alt="Ko‘rpa rasm"
            className="h-64 sm:h-80 lg:h-[450px] object-contain"
          />

         {/* O‘ng tarafdagi matn va tugma */}
         <div className="text-center lg:text-right max-w-md">
           <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-2">
             "{t("ecoTitle")}"
           </h2>
           <p className="text-sm text-white/80 mb-4">{t("ecoDesc")}</p>
           <button
             onClick={handleButtonClick}
             className="bg-white text-gray-800 px-6 py-3 rounded-xl text-sm hover:bg-gray-100 transition"
           >
             {t("collection")}
           </button>
         </div>
       </div>


     <div className="mt-20 font-bold gap-4 flex flex-col text-center">
        <h2 className="text-5xl">{t("kuz")}</h2>
        <p className="text-xl">{t("ecoTitle")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-20">
        <div className="flex flex-col ">
          <Link to="/infoitem/5" className="w-full flex flex-col ">
            <img
              className="h-60 w-full max-w-[300px] rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
              src={Kuz}
              alt=""
            />
            <p className="text-2xl mt-5 hover:text-red-600">{t("Safari")}</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link to="/infoitem/6" className="w-full flex flex-col ">
            <img
              className="h-60 w-full max-w-[300px] rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
              src={Kuz2}
              alt=""
            />
            <p className="text-2xl mt-5 hover:text-red-600">{t("Multicolor")}</p>
          </Link>
        </div>

       <div className="flex flex-col items-center">
         <Link to="/infoitem/7" className="w-full flex flex-col">
           <img
             className="h-60 w-full max-w-[300px] rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
             src={Kuz3}
             alt=""
           />
           <p className="text-2xl mt-5 hover:text-red-600">{t("Patern")}</p>
         </Link>
       </div>

       <div className="flex flex-col items-center">
         <Link to="/infoitem/8" className="w-full flex flex-col ">
           <img
             className="h-60 w-full max-w-[300px] rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
             src={Kuz4}
             alt=""
           />
            <p className="text-2xl mt-5 hover:text-red-600">{t("AB")}</p>
         </Link>
       </div>
     </div>


     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-20">
        <div className="flex flex-col items-center">
          <Link to="/infoitem/8" className="w-full flex flex-col ">
            <img
              className="h-60 w-full max-w-[300px] rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
              src={Kuz4}
              alt=""
            />
            <p className="text-2xl mt-5 hover:text-red-600">{t("AB")}</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link to="/infoitem/7" className="w-full flex flex-col">
            <img
              className="h-60 w-full max-w-[300px] rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
              src={Kuz3}
              alt=""
            />
            <p className="text-2xl mt-5 hover:text-red-600">{t("Patern")}</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link to="/infoitem/6" className="w-full flex flex-col">
            <img
              className="h-60 w-full max-w-[300px] rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
              src={Kuz2}
              alt=""
            />
            <p className="text-2xl mt-5 hover:text-red-600">{t("Multicolor")}</p>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Link to="/infoitem/5" className="w-full flex flex-col">
            <img
              className="h-60 w-full max-w-[300px] rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
              src={Kuz}
              alt=""
            />
            <p className="text-2xl mt-5 hover:text-red-600">{t("Safari")}</p>
          </Link>
        </div>
      </div>


      <div className="flex flex-col md:flex-row justify-between items-center bg-green-700 rounded-3xl shadow-[0_0_90px_#fca5a5] text-white px-[40px] mt-[120px] py-10 gap-10">
  
       {/* Chap taraf (foiz va matn) */}
       <div className="flex flex-col justify-start items-center md:items-start">
         <p className="text-6xl md:text-8xl font-bold">100%</p>
         <p className="text-lg md:text-xl mt-2 md:ml-6">{t("m")}</p>
       </div>

       {/* Rasm */}
       <img
         src={Yoz}
         alt="Ko‘rpa rasm"
         className="h-[300px] md:h-[450px] object-contain"
       />

       {/* O‘ng tarafdagi matn */}
        <div className="max-w-md text-center md:text-right">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            "{t("ecoTitle")}"
                </h2>
          <p className="text-sm text-white/80 mb-4">{t("ecoDesc")}</p>
          <button
            onClick={handleButtonClick}
            className="bg-white text-gray-800 px-6 py-3 rounded-xl text-sm hover:bg-gray-100 transition"
          >
            {t("collection")}
          </button>
        </div>
      </div>



      <div className="mt-20 font-bold gap-4 flex flex-col text-center">
        <h2 className="text-5xl">{t("yoz")}</h2>
        <p className="text-xl">{t("ecoTitle")}</p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-20">
        <div className="flex flex-col items-center">
          <Link to="/infoitem/9" className="w-full flex flex-col ">
            <img
              className="h-60 w-full max-w-[300px] rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
              src={Yoz1}
              alt=""
            />
            <p className="text-2xl mt-5 hover:text-red-600">{t("Style")}</p>
                </Link>
         </div>

         <div className="flex flex-col items-center">
           <Link to="/infoitem/10" className="w-full flex flex-col ">
             <img
               className="h-60 w-full max-w-[300px] rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
               src={Yoz2}
               alt=""
             />
             <p className="text-2xl mt-5 hover:text-red-600">{t("Dan")}</p>
           </Link>
         </div>

           <div className="flex flex-col items-center">
             <Link to="/infoitem/11" className="w-full flex flex-col">
               <img
                 className="h-60 w-full max-w-[300px] rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
                 src={Yoz3}
                 alt=""
               />
               <p className="text-2xl mt-5 hover:text-red-600">{t("Rivera")}</p>
             </Link>
           </div>

           <div className="flex flex-col items-center">
             <Link to="/infoitem/12" className="w-full flex flex-col">
               <img
                 className="h-60 w-full max-w-[300px] rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
                 src={Yoz4}
                 alt=""
               />
               <p className="text-2xl mt-5 hover:text-red-600">{t("Corn")}</p>
             </Link>
           </div>
        </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">
          <div className="flex flex-col items-center">
            <Link to="/infoitem/12">
              <img
                className="h-60 w-90 rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
                src={Yoz4}
                alt=""
              />
              <p className="text-2xl mt-5 hover:text-red-600">{t("Corn")}</p>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link to="/infoitem/11">
              <img
                className="h-60 w-90 rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
                src={Yoz3}
                alt=""
              />
              <p className="text-2xl mt-5 hover:text-red-600">{t("Rivera")}</p>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link to="/infoitem/10">
              <img
                className="h-60 w-90 rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
                src={Yoz2}
                alt=""
              />
              <p className="text-2xl mt-5 hover:text-red-600">{t("Dan")}</p>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link to="/infoitem/9">
              <img
                className="h-60 w-90 rounded-3xl transition duration-300 hover:scale-110 hover:z-10"
                src={Yoz1}
                alt=""
              />
              <p className="text-2xl mt-5 hover:text-red-600">{t("Style")}</p>
            </Link>
          </div>
        </div>



      <div className="mt-20 font-bold gap-4 flex flex-col text-center">
        <h2 className="text-5xl">{t("yangilik")}</h2>
        <p className="text-xl">{t("ecoTitle")}</p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        <img className="rounded-xl h-50 w-full" src={News} alt="" />
        <img className="rounded-xl h-50 w-full" src={New2} alt="" />
        <img className="rounded-xl h-50 w-full" src={New3} alt="" />
     </div>


    </div>



  
  )
}

export default Header;