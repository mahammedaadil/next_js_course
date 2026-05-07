"use client";

import React, { useState } from "react";

const ClientComponent = () => {
  const [count, setCount] = useState(0);

  const HandleCountTen = () => {
    alert("10 reached");
    return;
  };
  return (
    <div className=" flex flex items-center justify-center pt-6 gap-2 ">
      {count === 10 ? (
        <HandleCountTen />
      ) : (
        <>
          <h1 className="font-extrabold text-2xl">
            CURRENT COUNTER VALUE: {count}
          </h1>
          <button
            className=" bg-indigo-500 border-black-600 rounded hover:bg-yellow-200 text-black-500 text-lg"
            onClick={() => setCount((count) => count + 1)}
          >
            Increase
          </button>{" "}
        </>
      )}
    </div>
  );
};

export default ClientComponent;
