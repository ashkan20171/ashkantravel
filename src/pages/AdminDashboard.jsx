import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-teal-600 mb-6">پنل مدیریت</h1>

      <div className="flex flex-col gap-4">
        <Link to="/admin/tours" className="p-4 shadow rounded hover:bg-gray-100">
          مدیریت تورها
        </Link>
        <Link to="/admin/bookings" className="p-4 shadow rounded hover:bg-gray-100">
          مشاهده رزروها
        </Link>
      </div>
    </div>
  );
}
