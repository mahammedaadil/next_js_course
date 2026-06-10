"use server";
import { prisma } from "@/lib/prisma";

export async function createUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

   return await prisma.user.create({
    data: {
      name,
      email,
    },
  });
}



export async function getAllUsers() {

console.log(prisma.user.findMany());

   return await prisma.user.findMany()
}
