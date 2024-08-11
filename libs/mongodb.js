import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    if(!process.env.MONGODB_URI) {
      throw new Error("Missing MONGODB_URI environment variable");
    }
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default connectDB;
