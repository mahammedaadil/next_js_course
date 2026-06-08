"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "./button";
import { Input } from "./input";
import { useState } from "react";
import { addTodo } from "@/actions/todo-action";
import { toast } from "sonner";
import { Plus } from "lucide-react";

const TodoForm = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");

  const mutatation = useMutation({
    mutationFn: (data) => addTodo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos-app"] });
      toast.success("todo created successfully");
    },
    onError: () => {
      toast.error("failed to create todo");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await mutatation.mutate({ title });
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        type={"text"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={mutatation.isPending}
      />

      <Button>
        {mutatation.isPending ? "Adding...." : "Add"}
        <Plus />
      </Button>
    </form>
  );
};

export default TodoForm;
