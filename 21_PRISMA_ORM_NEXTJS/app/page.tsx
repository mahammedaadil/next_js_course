import UserList from "@/components/user-card";
import UserForm from "@/components/user-form";

export default async function Home() {

  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <UserForm />
     <UserList/>
    </div>
  );
}
