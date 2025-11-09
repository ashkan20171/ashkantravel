import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import tourRoutes from "./routes/tours.js";
import bookingRoutes from "./routes/bookings.js";


const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/ashkan_travel")
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.log("Mongo Error:", err));

app.use("/api/tours", tourRoutes);
app.use("/api/bookings", bookingRoutes);


app.listen(5000, () => console.log("Server running on port 5000 🚀"));
