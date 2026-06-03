import { createContact } from "@/actions/contact";
import ContactForm from "@/components/contact-form";

export default  function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="pb-4 font-bold">Contact Form</h1>
      <ContactForm action={createContact}/>
    </div>
  );
}
