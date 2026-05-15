"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const HomePage = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "analytics";
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6">
      {/* Tabs */}
      <div className="flex items-center gap-3 rounded-xl bg-gray-100 p-2 shadow-sm">
        <Link
          href={"/home?tab=analytics"}
          className={`rounded-lg px-5 py-2 text-sm font-medium transition-all duration-200 ${
            tab === "analytics"
              ? "bg-black text-white shadow-md"
              : "text-gray-600 hover:bg-white hover:text-black"
          }`}
        >
          Analytics
        </Link>

        <Link
          href={"/home?tab=sales"}
          className={`rounded-lg px-5 py-2 text-sm font-medium transition-all duration-200 ${
            tab === "sales"
              ? "bg-black text-white shadow-md"
              : "text-gray-600 hover:bg-white hover:text-black"
          }`}
        >
          Sales
        </Link>

        <Link
          href={"/home?tab=customers"}
          className={`rounded-lg px-5 py-2 text-sm font-medium transition-all duration-200 ${
            tab === "customers"
              ? "bg-black text-white shadow-md"
              : "text-gray-600 hover:bg-white hover:text-black"
          }`}
        >
          Customers
        </Link>
      </div>

      {/* Content */}
      <div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
        {tab === "analytics" && (
          <p className="text-lg font-semibold text-gray-800">
            📊 Showing Analytics Data
          </p>
        )}

        {tab === "sales" && (
          <p className="text-lg font-semibold text-gray-800">
            💰 Showing Sales Data
          </p>
        )}

        {tab === "customers" && (
          <p className="text-lg font-semibold text-gray-800">
            👥 Showing Customers Data
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
