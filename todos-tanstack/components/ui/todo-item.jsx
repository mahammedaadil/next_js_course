"use client";

import React from "react";
import { Checkbox } from "./checkbox";
import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { Button } from "./button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, toggleTodo } from "@/actions/todo-action";
import { toast } from "sonner";

const TodoItems = ({ todos }) => {
  const queryClient = useQueryClient();

  const { mutate: remove } = useMutation({
    mutationFn: (id) => deleteTodo(id),
    onSuccess: () => {
      toast.success("Successfully Deleted Todo");
      queryClient.invalidateQueries({ queryKey: ["todos-app"] });
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const { mutate: toggle } = useMutation({
    mutationFn: ({ id, completed }) => toggleTodo(id, completed),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos-app"] });
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return (
    <div className="flex items-center justify-between rounded-xl border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center gap-3">
        <Checkbox
          checked={todos.completed}
          onCheckedChange={(checked) =>
            toggle({ id: todos._id, completed: checked })
          }
          id={`todo-${todos._id}`}
        />

        <label
          htmlFor={`todo-${todos._id}`}
          className={cn(
            "cursor-pointer text-sm font-medium transition-colors",
            todos.completed && "text-muted-foreground line-through",
          )}
        >
          {todos.title}
        </label>
      </div>

      <Button
        className={
          "rounded-md p-2 text-red-500 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950"
        }
        onClick={()=>remove(todos._id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default TodoItems;
