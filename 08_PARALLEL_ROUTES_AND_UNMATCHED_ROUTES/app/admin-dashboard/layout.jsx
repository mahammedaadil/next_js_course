import React from "react";

const AdminLayout = ({ children, statistics, team }) => {
  return (
    <div>
      {statistics}
      {children}
      {team}
    </div>
  );
};

export default AdminLayout;
