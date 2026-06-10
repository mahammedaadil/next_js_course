"use client";

import { useEffect, useState } from "react";
import { getAllUsers } from "@/actions/users";


type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function getAvatarColor(id: string) {
  const colors = [
    "bg-violet-500",
    "bg-sky-500",
    "bg-emerald-500",
    "bg-amber-500",
    "bg-rose-500",
    "bg-indigo-500",
  ];
  const index = id.charCodeAt(0) % colors.length;
  return colors[index];
}

function UserCard({ user }: { user: User }) {
  const joined = new Date(user.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-zinc-100 bg-white px-5 py-4 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 dark:border-zinc-800 dark:bg-zinc-900">
      {/* Avatar */}
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${getAvatarColor(user.id)}`}
      >
        {getInitials(user.name)}
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {user.name}
        </p>
        <p className="truncate text-xs text-zinc-400 dark:text-zinc-500">
          {user.email}
        </p>
      </div>

      {/* Joined date */}
      <div className="shrink-0 text-right">
        <p className="text-xs text-zinc-400 dark:text-zinc-500">Joined</p>
        <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
          {joined}
        </p>
      </div>
    </div>
  );
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllUsers()
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-3 w-full max-w-md mx-auto">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-[68px] rounded-2xl bg-zinc-100 animate-pulse dark:bg-zinc-800"
          />
        ))}
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 py-16 text-zinc-400">
        <p className="text-sm font-medium">No users yet</p>
        <p className="text-xs">Add your first user to see them here.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider dark:text-zinc-400">
          Users
        </h2>
        <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
          {users.length}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

