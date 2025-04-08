import { useState } from "react";
import { useTranslation } from "react-i18next";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FaRegMessage } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";import { FaLocationDot } from "react-icons/fa6";




function Contact() {
  // const containerStyle = {
  //   width: "100%",
  //   height: "400px", 
  // };

  // const center = {
  //   lat: 41.2995, // Toshkent koordinatalari
  //   lng: 69.2401,
  // };

  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email || !phone || !message) {
      setError(t("fillAllFields"));
      return;
    }
    setError("");
    alert("Form yuborildi!");
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 pt-15 mt-20 shadow-md rounded-lg">
      <h3 className="text-3xl font-mono mb-6 text-gray-800">{t("contact")}</h3>

      {/* {error && <p className="text-red-500 mb-4">{error}</p>} */}

      <div className="flex flex-wrap gap-8 justify-between">
       
        <div className="flex-1 min-w-[300px] space-y-4">
          <input
            type="email"
            placeholder={t("email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder={t("phone")}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-400 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder={t("message")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-400 p-3 w-full rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            onClick={handleSubmit}
            className="bg-red-600 text-white px-6 py-3 rounded-md w-60 hover:bg-blue-700 transition"
          >
            {t("send")}
          </button>
        </div>

      
        <div className="flex-1 min-w-[300px] w-full md:w-1/2">
         <iframe
           src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d2947.822822772753!2d64.4599722!3d39.7474444!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d39.7474444!2d64.4599722!5e1!3m2!1sru!2s!4v1743691768899!5m2!1sru!2s"
           className="w-full h-[300px] md:h-[450px] border-0"
           allowFullScreen=""
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade"
         />
       </div>

        <div className="flex flex-col md:flex-row text-xl md:text-2xl gap-6 md:gap-10 mt-10 justify-between w-full">
          <div className="flex gap-3 items-center">
            <FaRegMessage className="text-red-500" />
             <p>Email: sleepnest@gmail.com</p>
           </div>
  
         <div className="flex flex-col md:flex-row  gap-3 items-center">
           <FaPhoneAlt className="text-red-500" />
           <p>Тел: +998 94 033 72 12</p>
           <p>+998 91 777 73 68</p>
         </div>
  
         <div className="flex gap-3 items-center">
           <FaLocationDot className="text-red-500" />
           <p>Bukhara, st. Alpomysh 80.</p>
         </div>
       </div>

      </div>
      
    </div>
  );
}

export default Contact;
