import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <header>Header User</header>
      {children}
      <footer>Footer User</footer>
    </div>
  );
};

export default layout;
