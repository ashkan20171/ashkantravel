import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TourDetails() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/tours`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((t) => t._id === id);
        setTour(found);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, tourId: id }),
      });
      const data = await res.json();
      setMessage(data.message || "رزرو انجام شد ✅");
    } catch (err) {
      setMessage("خطا در رزرو ❌");
    }
  };

  if (!tour) return <p className="text-center mt-10 text-gray-500">در حال بارگذاری...</p>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <img src={tour.image} alt={tour.title} className="w-full rounded-lg shadow mb-6" />
      <h1 className="text-3xl font-bold text-teal-700 mb-2">{tour.title}</h1>
      <p className="text-gray-700 mb-4">{tour.description}</p>
      <p className="text-lg text-gray-800 font-semibold mb-6">
        قیمت: {tour.price.toLocaleString()} تومان
      </p>

      <h2 className="text-2xl font-bold text-teal-700 mb-4">فرم رزرو</h2>
      <form onSubmit={handleBooking} className="grid gap-4 max-w-md">
        <input
          type="text"
          name="name"
          placeholder="نام"
          value={form.name}
          onChange={handleChange}
          className="p-3 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="ایمیل"
          value={form.email}
          onChange={handleChange}
          className="p-3 border rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="شماره تماس"
          value={form.phone}
          onChange={handleChange}
          className="p-3 border rounded"
        />
        <button
          type="submit"
          className="bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition"
        >
          رزرو تور
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-teal-700 font-semibold">{message}</p>
      )}
    </div>
  );
}
