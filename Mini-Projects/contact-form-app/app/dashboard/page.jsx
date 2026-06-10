import { dbConnect } from "@/lib/db";
import Contact from "@/lib/models/Contact";
import React from "react";
import StatusButton from "@/components/status-button";

const Dashboard = async () => {
  await dbConnect();
  const Contacts = await Contact.find();

  return (
    <div>
      <h1 className=" pb-2 font-bold text-red-900">Contact Data</h1>
      {Contacts.map((contact) => (
        <div key={contact._id} className="flex gap-6 pb-4">
          <h1 className="text-blue-300">Name:{contact.name}</h1>
          <p className="text-red-300">Email:{contact.email}</p>
          <p className="text-yellow-300">Message:{contact.message}</p>

          {contact.status === "resolved" ? (
            <p className="font-bold text-green-900">resolved</p>
          ) : (
            <StatusButton id={contact._id.toString()} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
