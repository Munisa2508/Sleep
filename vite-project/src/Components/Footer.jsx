import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    } else {
      alert("Please enter a valid email");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto pt-50 px-6 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-20">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img className="h-20 w-40 md:w-60 lg:w-80" src={Logo} alt="Logo" />
          <p className="text-lg mt-4 max-w-md">{t("p")}</p>
        </div>

        <ul className="flex flex-col items-center md:items-start gap-2 text-base md:text-lg lg:text-xl font-mono">
          <h3 className="text-gray-700 text-lg md:text-2xl lg:text-3xl font-bold">{t("h3")}</h3>
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/contact", label: "Contact" },
            { path: "/collection", label: "Collection" },
          ].map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-700 px-4 py-2 rounded-lg"
                    : "px-4 py-2"
                }
              >
                {t(label)}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="text-center md:text-left">
          <h3 className="text-gray-700 text-xl md:text-2xl font-bold">{t("kontakt")}</h3>
          <ul className="mt-2 text-lg md:text-lg">
            {["li", "li1", "li2", "li3"].map((item, index) => (
              <li key={index} className="mt-1">{t(item)}</li>
            ))}
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-gray-700 text-xl md:text-2xl font-bold">{t("pochta")}</h3>
          <div className="flex flex-col items-center md:items-start">
            <input
              className="border border-gray-700 w-full md:w-60 lg:w-72 h-10 rounded-xl pl-3 mt-3"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="border border-red-500 bg-red-500 text-white h-10 w-24 rounded-xl mt-3 hover:bg-red-600"
              onClick={handleSubscribe}
            >
              {t("btn")}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black shadow-lg text-white w-full h-20 mt-5 pt-2 justify-center rounded-xl flex justify-center items-center">
         <p>{t("f")}</p>  
      </div>

    </div>
    
  );
};

export default Footer;
