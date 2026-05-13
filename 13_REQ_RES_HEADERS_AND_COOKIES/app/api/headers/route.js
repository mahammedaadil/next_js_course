import { headers, cookies } from "next/headers";

//Older Way
// export async function GET(request) {
//   const reqHeaders = new Headers(request.headers);

//   console.log(reqHeaders.get("cookie"));

//   return new Response("Hello Fucking World");
// }

export async function GET(request) {
  //Modern Way To Set Headers
  // const reqHeaders = await headers();
  // console.log(reqHeaders.get("cookie"));

  //Old-Way TO Get Cookie
  // const cookieStore = request.cookies.get("aadil");
  // console.log(cookieStore);

  //Modern Way To Get Set Cookies

  const cookieStore = await cookies();
  const aadil = cookieStore.get("aadil");
  console.log(aadil);

  //Getting Setting Cookies
  const setSurname = cookieStore.set("surname", "patel");
  const getSurname = cookieStore.get("surname");
  console.log(getSurname);

  //deleting Cookies
  cookieStore.delete("surname");
  cookieStore.delete("aadil");

  return new Response("<h1>Hello Aadil</h1>", {
    headers: {
      "content-type": "text/html",
      "set-cookie": "aadil=200",
    },
  });
}
