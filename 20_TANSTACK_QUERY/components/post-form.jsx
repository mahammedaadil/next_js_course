"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { name } from "next/dist/server/ci-info";
import { useState } from "react";

export default function PostForm() {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");

  //normal way too much boilerplate code

  // const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fetchApi = async () => {
  //   try {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setError(error);
  //   }
  // };

  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/set-state-in-effect
  //   fetchApi();
  // }, []);

  //less broiler plate with tanstack
  const { data, isLoading, error } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      fetch("http://localhost:3000/api/posts").then((res) => res.json()),
  });

  const addPost = async (newPost) => {
    const res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.json();
  };

  const mutation = useMutation({
    mutationFn: addPost,
    onSuccess: ({ title, body, userId }) => {
      setTitle("");
      setBody("");
      setUserId("");
      alert(
        `Success😜
        Title => ${title}
        Body => ${body}
        User ID => ${userId}`,
      );
    },
    onError: (error) => {
      alert("an error occured");
    },
  });

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  if (error) {
    return <div>Error.....</div>;
  }

  return (
    <div className="flex gap-4">
      {data.slice(0, 5).map((d) => (
        <ol key={d._id}>
          <li>UserID:{d.userId}</li>
          <li>Title:{d.title}</li>
          <li>Body:{d.body}</li>
        </ol>
      ))}
      
      <div className="max-w-md mx-auto mt-10 space-y-4 p-6 border rounded-xl shadow-md">
        <h2 className="flex items-center font-bold">Post Data</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />

        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Enter body"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />

        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter User ID"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />

        <button
          onClick={() =>
            mutation.mutate({
              title: title,
              body: body,
              userId: userId,
            })
          }
          className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700 active:scale-95"
        >
          Add Post
        </button>
      </div>
    </div>
  );
}
