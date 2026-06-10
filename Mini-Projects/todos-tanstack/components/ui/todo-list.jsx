"use client";

import { useQuery } from "@tanstack/react-query";
import TodoItem from "./todo-item";
import { fetchTodos } from "@/actions/todo-action";
import { Loader2 } from "lucide-react";
import { error } from "next/dist/build/output/log";

const TodoList = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["todos-app"],
    queryFn: () => fetchTodos(),
  });

  if (isPending) {
    return (
      <div>
        <Loader2 />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center p-8">
        Failed To Load Todos.{error}
      </div>
    );
  }

  if (!data && data.length == 0) {
    return (
      <div>
        <h1>No Todos To Show</h1>
      </div>
    );
  }
  return (
    <div className="text-center p-8 text-muted-foreground">
      {data.map((d) => (
        <TodoItem key={d._id} todos={d} id={d._id} />
      ))}
    </div>
  );
};

export default TodoList;
