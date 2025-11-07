import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../store/languageSlice";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.value);

  const changeLang = (lang) => {
    dispatch(setLanguage(lang)); // ذخیره در Redux
    i18n.changeLanguage(lang); // تغییر واقعی زبان سایت
    document.body.dir = lang === "fa" ? "rtl" : "ltr"; // اصلاح جهت صفحه
  };

  return (
    <nav className="p-4 shadow flex justify-between items-center bg-white">
      {/* برند */}
      <div className="text-xl font-bold text-teal-600">{t("brand")}</div>

      {/* لینک‌ها */}
      <div className="flex gap-4">
        <Link to="/" className="hover:text-teal-600">{t("home")}</Link>
        <Link to="/tours" className="hover:text-teal-600">{t("tours")}</Link>
      </div>

      {/* دکمه‌های زبان */}
      <div className="flex gap-2">
        <button
          onClick={() => changeLang("fa")}
          className={`text-sm px-2 py-1 rounded ${language === "fa" ? "bg-teal-600 text-white" : "hover:text-teal-600"}`}
        >
          FA
        </button>

        <button
          onClick={() => changeLang("en")}
          className={`text-sm px-2 py-1 rounded ${language === "en" ? "bg-teal-600 text-white" : "hover:text-teal-600"}`}
        >
          EN
        </button>
      </div>
    </nav>
  );
}
