import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: Number,
  duration: Number,
  image: String,
});

export default mongoose.model("Tour", tourSchema);
