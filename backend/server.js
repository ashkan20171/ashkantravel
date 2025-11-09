import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// اتصال به دیتابیس
connectDB();

// ثبت روت‌ها
app.use("/auth", authRoutes);

// روشن کردن سرور
app.listen(5000, () => console.log("✅ Server running at http://localhost:5000"));
