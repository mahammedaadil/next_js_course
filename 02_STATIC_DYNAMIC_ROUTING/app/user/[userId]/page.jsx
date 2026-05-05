import React from "react";

const userPage = async ({ params }) => {
  const { userId } = await params;
  return <div>userPage {userId} </div>;
};

export default userPage;
