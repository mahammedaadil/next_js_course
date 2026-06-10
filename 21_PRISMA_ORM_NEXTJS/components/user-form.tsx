"use client"

import { createUser } from "@/actions/users";
import Form from "next/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const UserForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <div className="w-full max-w-md space-y-6 rounded-xl border bg-background p-8 shadow-lg">
        <h1 className="text-center text-3xl font-bold">User Form</h1>

        <Form
          action={async (formData) => {
            await createUser(formData);
          }}
          className="space-y-4"
        >
          <Input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="h-11"
          />

          <Input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="h-11"
          />

          <Button className="w-full h-11">Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default UserForm;
