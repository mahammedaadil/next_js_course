import { dbConnect } from "@/lib/db";
import Contact from "@/lib/models/Contact";
import React from "react";

const Dashboard = async () => {
    await dbConnect();
    const Contacts=await Contact.find()
    
  return (
    <div>
        <h1 className="font-bold pb-2">Contact Data</h1>
        {Contacts.map((contact)=>(
            
            <ul key={contact._id} className="flex gap-6 pb-4">
                <li>NAME:{contact.name}</li>
                <li>EMAIL:{contact.email}</li>
                <li>MESSAGE:{contact.message}</li>
                <li>STATUS:{contact.status}</li>
            </ul>
            
        ))}


    </div>
  )
};

export default Dashboard;
