import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  // چک تکراری بودن ایمیل
  const exist = await User.findOne({ email });
  if (exist) return res.json({ error: "این ایمیل قبلاً ثبت شده است" });

  // رمزنگاری
  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({ email, password: hashedPassword });
  res.json({ message: "ثبت‌نام با موفقیت انجام شد ✅" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.json({ error: "کاربر یافت نشد ❌" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.json({ error: "رمز عبور اشتباه است ❌" });

  const token = jwt.sign({ id: user._id }, "ASHKAN_SECRET", { expiresIn: "7d" });

  res.json({ token, email });
});

export default router;
