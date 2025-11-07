import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login({ email }));
    navigate("/");
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 shadow rounded bg-white">
      <h2 className="text-xl font-bold text-teal-600 text-center mb-4">ورود</h2>
      <input className="border p-2 w-full mb-3" placeholder="ایمیل" onChange={(e)=> setEmail(e.target.value)} />
      <input className="border p-2 w-full mb-3" type="password" placeholder="رمز عبور" onChange={(e)=> setPassword(e.target.value)} />
      <button onClick={handleLogin} className="bg-teal-600 text-white w-full py-2 rounded mt-2">ورود</button>
    </div>
  );
}
