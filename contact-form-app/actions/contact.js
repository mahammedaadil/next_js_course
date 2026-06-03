"use server";

import { dbConnect } from "@/lib/db";
import Contact from "@/lib/models/Contact";
import { redirect } from "next/navigation";

export async function createContact(formData) {
  await dbConnect();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  await Contact.create({
    name,
    email,
    message,
  });
  redirect("/dashboard");
}
