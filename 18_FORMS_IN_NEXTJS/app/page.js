import Form from "next/form";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <Form action="/search">
      <input name="query" placeholder="search for query"/>
      <button type="submit">Search</button>
     </Form>
    </div>
  );
}
