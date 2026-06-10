import mongoose from "mongoose";

export async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Db Connected ");
  } catch (error) {
    throw Error(error);
  }
}
