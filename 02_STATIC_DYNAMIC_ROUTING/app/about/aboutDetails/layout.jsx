import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <header>Header aboutDetails</header>
      {children}
      <footer>Footer aboutDetails</footer>
    </div>
  );
};

export default layout;
