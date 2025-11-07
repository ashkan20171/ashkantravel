import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function TourCard({ tour }) {
  const { i18n } = useTranslation();
  const isFA = i18n.language === "fa";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow hover:shadow-xl transition p-3 cursor-pointer"
    >
      <img
        src={tour.image}
        alt={tour.title_fa}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h3 className="text-lg font-bold text-teal-700 mt-3">
        {isFA ? tour.title_fa : tour.title_en}
      </h3>

      <p className="text-gray-500 text-sm mt-1">{tour.duration}</p>

      <p className="text-teal-600 font-semibold mt-2">{tour.price}</p>

      <Link
        to={`/tour/${tour.id}`}
        className="mt-3 block bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg text-center transition"
      >
        {isFA ? "مشاهده جزئیات" : "View Details"}
      </Link>
    </motion.div>
  );
}
