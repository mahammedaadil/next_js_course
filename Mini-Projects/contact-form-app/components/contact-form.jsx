"use client";

import Form from "next/form";

export default function ContactForm({ action }) {
  return (
    <Form action={action} className="space-y-4 flex flex-col">
      <input
        type="text"
        name="name"
        className="border p-2"
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        className="border p-2"
        placeholder="Email"
      />

      <textarea name="message" className="border p-2" placeholder="Message" />

      <button className="bg-black text-white px-4 py-12">Submit</button>
    </Form>
  );
}
