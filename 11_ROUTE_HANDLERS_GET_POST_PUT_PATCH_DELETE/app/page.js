"use client";

import { useState } from "react";

export default function Home() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/post-todo", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userId: id,
        name: name,
        phone: number,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setMessage(
        "user created successfully: " +
          " NAME:" +
          data.user.name +
          " ID:" +
          data.user.userId +
          " CONTACT:" +
          data.user.phone,
      );
    } else {
      setMessage("Failed To Create");
    }
  };

  return (
    <div>
      <h1>User Form</h1>

      <form onSubmit={handleSubmit}>
        <span>Id:</span>
        <input
          value={id}
          type="number"
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter Id"
        />

        <br />

        <span>Name:</span>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />

        <br />

        <span>Contact Number:</span>
        <input
          value={number}
          type="text"
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter Contact"
        />

        <br />

        <button type="submit">Submit</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
