import mongoose from "mongoose";

const TodosSchema = new mongoose.Schema(
  {
    title: String,
    completed: Boolean,
  },
  { timestamps: true },
);

export default mongoose.models.Todos || mongoose.model("Todos", TodosSchema);
