import mongoose from "mongoose";

const PostsSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    userId: Number,
  },
  { timestamps: true },
);

export default mongoose.models.Posts || mongoose.model("Posts", PostsSchema);
