import mongoose from "mongoose";

export async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected");
    return;
  }

  const mongoUri = process.env.MONGO_URL as string;
  if (!mongoUri) {
    throw new Error("MONGO_URL is not defined");
  }

  await mongoose.connect(mongoUri);
  console.log("Connected to MongoDB");
}
