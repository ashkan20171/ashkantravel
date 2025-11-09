import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// افزودن رزرو جدید
router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "رزرو با موفقیت انجام شد ✅", booking });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// دریافت همه رزروها (برای پنل ادمین)
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("tourId");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
