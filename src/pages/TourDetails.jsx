import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import tours from "../data/tours";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function TourDetails() {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const isFA = i18n.language === "fa";

  const tour = tours.find((t) => t.id == id);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-teal-600 text-center mb-6">
        {isFA ? tour.title_fa : tour.title_en}
      </h1>

      {/* گالری عکس */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {tour.images.map((img, index) => (
          <img key={index} src={img} className="rounded-lg object-cover h-48 w-full" />
        ))}
      </div>

      {/* توضیحات */}
      <p className="text-gray-600 leading-7 mb-6">
        {isFA ? tour.description_fa : tour.description_en}
      </p>

      {/* مشخصات */}
      <div className="border p-4 rounded-lg mb-6">
        <p><strong>{isFA ? "مدت سفر:" : "Duration:"}</strong> {tour.duration}</p>
        <p><strong>{isFA ? "قیمت:" : "Price:"}</strong> {tour.price}</p>
      </div>

      {/* نقشه */}
      <MapContainer center={tour.location} zoom={10} className="h-72 w-full rounded-lg shadow">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={tour.location}>
          <Popup>{isFA ? tour.title_fa : tour.title_en}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
