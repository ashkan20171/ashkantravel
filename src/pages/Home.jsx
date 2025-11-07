import React from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-teal-600">{t("welcome_title")}</h1>
      <p className="mt-4 text-gray-600">{t("welcome_text")}</p>
    </div>
  );
}
