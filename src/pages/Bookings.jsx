import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBooking } from "../store/bookingSlice";

export default function Bookings() {
  const bookings = useSelector((state) => state.booking.items);
  const dispatch = useDispatch();

  if (bookings.length === 0)
    return <p className="text-center mt-10">هنوز رزروی انجام نشده ❗</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold text-teal-600 mb-4">رزروهای شما</h1>

      {bookings.map((tour) => (
        <div key={tour.id} className="shadow p-4 rounded mb-3 flex justify-between">
          <span>{tour.title_fa}</span>
          <button
            onClick={() => dispatch(removeBooking(tour.id))}
            className="text-red-500 hover:text-red-700"
          >
            حذف
          </button>
        </div>
      ))}
    </div>
  );
}
