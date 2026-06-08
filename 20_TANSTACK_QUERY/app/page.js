import PostForm from "@/components/post-form";
import { connectDb } from "@/lib/db";
import React from "react";

const Home = async () => {
  await connectDb();
  return (
    <div>
      <PostForm />
    </div>
  );
};

export default Home;
