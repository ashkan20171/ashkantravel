import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../store/languageSlice";
import { logout } from "../store/userSlice";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.value);
  const user = useSelector((state) => state.user.user);

  const changeLang = (lang) => {
    dispatch(setLanguage(lang));
    i18n.changeLanguage(lang);
    document.body.dir = lang === "fa" ? "rtl" : "ltr";
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

      {/* بخش راست: زبان + وضعیت کاربر */}
      <div className="flex items-center gap-3">

        {/* دکمه زبان */}
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

        {/* نمایش وضعیت کاربر */}
        {user ? (
          <button
            onClick={() => dispatch(logout())}
            className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            خروج
          </button>
        ) : (
          <Link
            to="/login"
            className="text-sm bg-teal-600 text-white px-3 py-1 rounded hover:bg-teal-700"
          >
            ورود
          </Link>
        )}
      </div>
    </nav>
  );
}
