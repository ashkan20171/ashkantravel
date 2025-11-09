import React, { useEffect, useState } from "react";
import TourCard from "../components/TourCard";

export default function Tours() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/tours")
      .then((res) => res.json())
      .then((data) => setTours(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-teal-600 mb-8">تورها</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {tours.length > 0 ? (
          tours.map((tour) => <TourCard key={tour._id} tour={tour} />)
        ) : (
          <p className="text-gray-500">در حال بارگذاری تورها...</p>
        )}
      </div>
    </div>
  );
}
