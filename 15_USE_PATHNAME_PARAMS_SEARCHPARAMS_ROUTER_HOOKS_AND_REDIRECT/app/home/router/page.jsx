"use client";
import { useRouter } from "next/navigation";
import React from "react";

const RouterHook = () => {
  const router = useRouter();
  return (
    <div className=" pt-4 display flex items center justify-center">
      <div className=" pt-flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-gray-100 p-6 shadow-md">
        <button
          onClick={() => router.back()}
          className="rounded-xl bg-blue-500 px-5 py-2 font-medium text-white transition-all duration-200 hover:scale-105 hover:bg-blue-600 active:scale-95"
        >
          ⬅ Backward
        </button>

        <button
          onClick={() => router.forward()}
          className="rounded-xl bg-green-500 px-5 py-2 font-medium text-white transition-all duration-200 hover:scale-105 hover:bg-green-600 active:scale-95"
        >
          ➡ Forward
        </button>

        <button
          className="rounded-xl bg-purple-500 px-5 py-2 font-medium text-white transition-all duration-200 hover:scale-105 hover:bg-purple-600 active:scale-95"
          onClick={() => router.push("/home/dashboard")}
        >
          📌 Push
        </button>

        <button
          className="rounded-xl bg-orange-500 px-5 py-2 font-medium text-white transition-all duration-200 hover:scale-105 hover:bg-orange-600 active:scale-95"
          onClick={() => router.replace("/home/users")}
        >
          🔄 Replace
        </button>

        
        <button
          className="rounded-xl bg-pink-500 px-5 py-2 font-medium text-white transition-all duration-200 hover:scale-105 hover:bg-orange-600 active:scale-95"
          onClick={() => router.refresh()}
        >
          🔄 Refresh
        </button>
      </div>
    </div>
  );
};

export default RouterHook;
