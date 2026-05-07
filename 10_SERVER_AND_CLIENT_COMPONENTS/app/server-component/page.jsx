import React from "react";

const ServerComponent = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);

  return (
    <div className="bg-white text-black">
      {data.map((item, index) => (
        <ol key={index}>
          <li>{item.title}</li>
        </ol>
      ))}
    </div>
  );
};

export default ServerComponent;
