import React from "react";

const TodoApp = async () => {
  const res = await fetch("http://localhost:3000/api/todos");
  const data = await res.json();

  return (
    <div>
      {data.data.map((item) => (
        <ul key={item.id}>
          <li>Title :{item.title}</li>
          <li>Status:{item.completed ? "Completed" : "Pending"}</li>
        </ul>
      ))}
    </div>
  );
};

export default TodoApp;
