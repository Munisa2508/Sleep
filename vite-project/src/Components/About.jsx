import { useTranslation } from "react-i18next";
import Rasm from "../assets/about.png";

function About() {
  const { t } = useTranslation(); 

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex flex-col flex-1">
          <h2 className="text-3xl sm:text-4xl font-mono pt-6 md:pt-15">
            {t("title")}
          </h2>

          <div className="mt-4 flex flex-col space-y-4">
            <p className="text-base sm:text-lg">{t("description1")}</p>
            <p className="text-base sm:text-lg">{t("description2")}</p>
            <p className="text-base sm:text-lg">{t("description3")}</p>
            <p className="text-base sm:text-lg">{t("description4")}</p>
          </div>
        </div>

        <div className="flex justify-center shadow-md bg-gray-100 rounded-lg mt-20 mx-auto max-w-[800px] w-full">
          <img
            src={Rasm}
            alt="Eco Product"
            className="w-[300px] sm:w-96 md:w-[450px] lg:w-[600px] max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
