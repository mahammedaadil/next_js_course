import TodoForm from "@/components/ui/todo-form";
import TodoList from "@/components/ui/todo-list";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 px-4 font-sans dark:from-zinc-900 dark:to-black">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="mb-6 text-center text-3xl font-bold tracking-tight">
          To-Do App
        </h2>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}
