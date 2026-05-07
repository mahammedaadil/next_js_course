import React from "react";
import NotFound from "@/app/user/[userId]/not-found";
import { notFound } from "next/navigation";

const UserPage = async ({ params }) => {
  const { userId } = await params;

  if (userId > 10) {
    notFound();
  }
  return (
    <div>
      <h1>UserPage:{userId}</h1>
    </div>
  );
};

export default UserPage;
