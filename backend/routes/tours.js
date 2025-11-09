import express from "express";
import Tour from "../models/Tour.js";

const router = express.Router();

// گرفتن همه تورها
router.get("/", async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// افزودن تور جدید
router.post("/", async (req, res) => {
  try {
    const tour = new Tour(req.body);
    await tour.save();
    res.status(201).json(tour);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
