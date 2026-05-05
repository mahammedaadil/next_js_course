import React from "react";

const dashboardLayout = ({ children }) => {
  return (
    <div>
      <header>head</header>
      <h1>{children}</h1>
      <footer>foot</footer>
    </div>
  );
};

export default dashboardLayout;
