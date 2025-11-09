import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ashkan_travel");
    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.log("❌ Database Connection Error:", err);
  }
};

export default connectDB;
