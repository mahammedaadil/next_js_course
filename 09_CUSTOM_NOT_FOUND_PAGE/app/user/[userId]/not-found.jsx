import React from "react";
import Link from "next/link";

const NotFoundUser = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-800">
      <img
        src={"/not-found.svg"}
        height={400}
        width={400}
        alt="Not-Found-Img"
      />
      <h1 className="text-5xl font-extrabold text-indigo-500 mt-4">
        Not Found-404
      </h1>
      <Link
        href={"/"}
        className="px-4 py-2 border rounded-md bg-indigo-500 border-none mt-6"
      >
        Go To Home
      </Link>
    </div>
  );
};

export default NotFoundUser;
