import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  tourId: { type: mongoose.Schema.Types.ObjectId, ref: "Tour", required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Booking", bookingSchema);
