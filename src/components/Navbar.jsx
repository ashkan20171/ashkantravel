import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 shadow flex justify-between items-center">
      <div className="text-xl font-bold text-teal-600">گردشگری اشکان</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-teal-600">خانه</Link>
        <Link to="/tours" className="hover:text-teal-600">تور ها</Link>
      </div>
    </nav>
  );
}
