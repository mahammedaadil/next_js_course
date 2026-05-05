import React from "react";

const adminDashboardId = async ({ params }) => {
  const { dashId } = await params;
  return <div>adminDashboardId : {dashId}</div>;
};

export default adminDashboardId;
