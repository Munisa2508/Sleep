import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi"; 

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLangDropdown = () => {
    setIsLangOpen(!isLangOpen);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img className="h-20 w-42" src={Logo} alt="Logo" />

        {/* Menyu (Desktop) */}
        <ul className="hidden md:flex gap-5 text-3xl font-mono">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-700 px-4 py-2 rounded-lg" : "px-4 py-2"
              }
            >
              {t("Home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-orange-700 px-4 py-2 rounded-lg" : "px-4 py-2"
              }
            >
              {t("About")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-orange-700 px-4 py-2 rounded-lg" : "px-4 py-2"
              }
            >
              {t("Contact")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/collection"
              className={({ isActive }) =>
                isActive ? "text-orange-700 px-4 py-2 rounded-lg" : "px-4 py-2"
              }
            >
              {t("Collection")}
            </NavLink>
          </li>
        </ul>

        {/* Til tanlash (Desktop) */}
        <div className="relative hidden md:block">
          <button className="bg-gray-300 px-4 py-2 rounded-md" onClick={toggleLangDropdown}>
            {i18n.language === "uz" ? "O'zbek" : i18n.language === "ru" ? "Русский" : "English"}
          </button>

          {isLangOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-32">
              <ul className="text-left">
                <li>
                  <button onClick={() => handleLanguageChange("uz")} className="block px-4 py-2 w-full hover:bg-gray-200">
                    O'zbek
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLanguageChange("ru")} className="block px-4 py-2 w-full hover:bg-gray-200">
                    Русский
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLanguageChange("en")} className="block px-4 py-2 w-full hover:bg-gray-200">
                    English
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobil menyu tugmasi */}
        <button className="md:hidden text-3xl" onClick={toggleMenu}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobil menyu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white shadow-lg p-4 rounded-lg">
          <ul className="flex flex-col gap-3 text-xl font-mono">
            <li>
              <NavLink
                to="/"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "text-orange-700 px-4 py-2 rounded-lg" : "px-4 py-2"
                }
              >
                {t("home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "text-orange-700 px-4 py-2 rounded-lg" : "px-4 py-2"
                }
              >
                {t("about")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "text-orange-700 px-4 py-2 rounded-lg" : "px-4 py-2"
                }
              >
                {t("contact")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collection"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "text-orange-700 px-4 py-2 rounded-lg" : "px-4 py-2"
                }
              >
                {t("collection")}
              </NavLink>
            </li>
          </ul>

          {/* Til tanlash (Mobil) */}
          <div className="mt-4">
            <button className="bg-gray-300 px-4 py-2 rounded-md w-full" onClick={toggleLangDropdown}>
              {i18n.language === "uz" ? "O'zbek" : i18n.language === "ru" ? "Русский" : "English"}
            </button>

            {isLangOpen && (
              <div className="mt-2 bg-white shadow-lg rounded-md w-full">
                <ul className="text-left">
                  <li>
                    <button onClick={() => handleLanguageChange("uz")} className="block px-4 py-2 w-full hover:bg-gray-200">
                      O'zbek
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleLanguageChange("ru")} className="block px-4 py-2 w-full hover:bg-gray-200">
                      Русский
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleLanguageChange("en")} className="block px-4 py-2 w-full hover:bg-gray-200">
                      English
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      
    </nav>
  );
}

export default Navbar;
