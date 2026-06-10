"use server";

import { dbConnect } from "@/lib/db";
import { todoSchema } from "@/schemas/todo-schema";
import Todos from "@/lib/models/Todo";

//create todo
export async function addTodo(data) {
  await dbConnect();

  const validatedFields = todoSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: "invalid fields " };
  }

  try {
    const newTodo = await Todos.create(validatedFields.data);
    return JSON.parse(JSON.stringify(newTodo));
  } catch (error) {
    console.error("failed to create todo", error);
    return { error: "failed to create todo" };
  }
}

//get todos
export async function fetchTodos() {
  try {
    await dbConnect();
    const newTodos = await Todos.find({}).sort({ createdAt: -1 });

    return JSON.parse(JSON.stringify(newTodos));
  } catch (error) {
    console.error("failed to fetch todos", error);
    return { error: "failed to fetch todos" };
  }
}

//toggle todo
export async function toggleTodo(id, completed) {
  console.log(id, completed);

  await dbConnect();
  try {
    const updatedTodo = await Todos.findByIdAndUpdate(
      id,
      { completed },
      { new: true },
    );
    return JSON.parse(JSON.stringify(updatedTodo));
  } catch (error) {
    console.error("failed to toggle todo", error);
    return { error: "failed to toggle todo" };
  }
}

//delete todo
export async function deleteTodo(id) {
  try {
    const deleteTodo = await Todos.findByIdAndDelete(id);
    return JSON.parse(JSON.stringify(deleteTodo));
  } catch (error) {
    console.error("failed to delete todo", error);
    return { error: "failed to delete todo" };
  }
}
