import { redirect } from "next/navigation";

export default function Home() {
  const isLoggedIn=true;
  if(!isLoggedIn){
    redirect("home/complaints")
  }
  return (
    <div>
      Hello Checking Redirect Method
    </div>
  );
}
