import { createUser } from "@/actions/user";

 export default function Home() {

  return (
    <form action={createUser}>
      <input name="user" />
      <button type="submit">Create User</button>            
    </form>
  );
}
