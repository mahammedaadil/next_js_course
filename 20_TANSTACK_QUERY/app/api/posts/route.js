import { connectDb } from "@/lib/db";
import Posts from "@/lib/models/Posts";

//post posts
export async function POST(req) {
  try {
    await connectDb();

    const { title, body, userId } = await req.json();

    if (!title || !body || !userId) {
      return Response.json(
        { error: "Title and Content are required" },
        { status: 400 },
      );
    }

    const posts = await Posts.create({
      title,
      body,
      userId,
    });

    return Response.json(posts, {
      status: 201,
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await connectDb();

    const posts = await Posts.find();

    if (!posts.length === 0) {
      return Response.json(
        { error: "there is no posts to show" },
        { status: 400 },
      );
    }
    return Response.json(posts, {
      status: 201,
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
