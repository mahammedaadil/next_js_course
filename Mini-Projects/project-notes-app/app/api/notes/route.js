import { connectDb } from "@/lib/db";
import { Note } from "@/lib/models/Note";

export async function GET(req) {
  try {
    await connectDb();

    const notes = await Note.find().sort({
      createdAt: -1,
    });

    return Response.json(notes);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDb();

    const { title, content } = await req.json();

    if (!title || !content) {
      return Response.json(
        { error: "Title and Content are required" },
        { status: 400 },
      );
    }

    const note = await Note.create({
      title,
      content,
    });

    return Response.json(note, {
      status: 201,
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
