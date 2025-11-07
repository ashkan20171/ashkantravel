import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="p-4 shadow flex justify-between items-center">
      <div className="text-xl font-bold text-teal-600">{t("brand")}</div>

      <div className="flex gap-4">
        <Link to="/" className="hover:text-teal-600">{t("home")}</Link>
        <Link to="/tours" className="hover:text-teal-600">{t("tours")}</Link>
      </div>

      <div className="flex gap-2">
        <button onClick={() => changeLang("fa")} className="text-sm hover:text-teal-600">FA</button>
        <button onClick={() => changeLang("en")} className="text-sm hover:text-teal-600">EN</button>
      </div>
    </nav>
  );
}
