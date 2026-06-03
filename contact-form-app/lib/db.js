import mongoose from "mongoose";

export async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connection done successfully");
  } catch (error) {
    throw new Error(error);
  }
}
