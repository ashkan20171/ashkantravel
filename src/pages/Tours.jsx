import React from "react";
import { useTranslation } from "react-i18next";
import tours from "../data/tours";
import TourCard from "../components/TourCard";

export default function Tours() {
  const { t } = useTranslation();

  return (
    <div className="p-8">
      <h1 className="text-3xl text-center font-bold text-teal-600 mb-8">
        {t("tours")}
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
}
