import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error("MONGO_URI not defined in .env");
    }

    await mongoose.connect(mongoUri);
    console.log("✅ DB connected");
  } catch (error) {
    console.error("❌ DB connection error:", error.message);
    process.exit(1); // Stop the app if DB connection fails
  }
};
