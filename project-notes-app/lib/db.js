import mongoose from "mongoose";

export async function connectDb() {
  try {
    await mongoose.connect("mongodb://localhost:27017/project-notes-app");
    console.log("DB is connected");
  } catch (error) {
    throw new error(error);
  }
}
