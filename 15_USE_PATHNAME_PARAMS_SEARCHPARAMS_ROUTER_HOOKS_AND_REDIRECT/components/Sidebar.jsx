"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const navItems = [
    { name: "Home", href: "/home" },
    { name: "Router Hook", href: "/home/router" },
    { name: "Dashboard", href: "/home/dashboard" },
    { name: "Users", href: "/home/users" },
    { name: "Complaints", href: "/home/complaints" },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white p-4">
      <h2 className="text-1xl font-bold mb-4">UsPathname & useSearchParams & useRouter Hooks & Redirect Learning</h2>
      <nav className="space-y-4">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link
              href={item.href}
              key={index}
              className={`flex p-2 rounded-md transition ${
                isActive
                  ? "bg-white text-black font-semibold"
                  : "hover:bg-gray-700"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
