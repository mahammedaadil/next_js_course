"use server";

export async function createUser(formData) {
  const user = formData.get("user");
  console.log("user created", user);
}
