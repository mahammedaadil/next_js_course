import React from "react";

const aboutIdPage = async ({ params }) => {
  const { aboutId } = await params;
  return (
    <div>
      <h1>aboutId Page :{aboutId}</h1>
    </div>
  );
};

export default aboutIdPage;
