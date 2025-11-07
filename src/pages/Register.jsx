import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const registerUser = () => {
    alert("ثبت‌نام با موفقیت انجام شد ✅");
    navigate("/login");
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 shadow rounded bg-white">
      <h2 className="text-xl font-bold text-teal-600 text-center mb-4">ثبت‌نام</h2>
      <input className="border p-2 w-full mb-3" placeholder="ایمیل" onChange={(e)=> setEmail(e.target.value)} />
      <button onClick={registerUser} className="bg-teal-600 text-white w-full py-2 rounded mt-2">ثبت‌نام</button>
    </div>
  );
}
