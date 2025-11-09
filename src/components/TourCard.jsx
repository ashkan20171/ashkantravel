import React from "react";
import { Link } from "react-router-dom";

export default function TourCard({ tour }) {
  return (
    <div className="border rounded-xl shadow hover:shadow-lg p-4 bg-white">
      <img
        src={tour.image}
        alt={tour.title}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-xl font-bold text-teal-600 mt-3">{tour.title}</h2>
      <p className="text-gray-600 mt-1">{tour.duration} روزه</p>
      <p className="text-gray-800 font-semibold mt-2">
        {tour.price.toLocaleString()} تومان
      </p>
      <Link
        to={`/tour/${tour._id}`}
        className="block mt-4 bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
      >
        مشاهده جزئیات
      </Link>
    </div>
  );
}
