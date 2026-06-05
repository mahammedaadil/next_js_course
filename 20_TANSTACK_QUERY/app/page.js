"use client";
import { useQuery } from "@tanstack/react-query";
export default function Home() {
  //normal way too much boilerplate code

  // const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fetchApi = async () => {
  //   try {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setError(error);
  //   }
  // };

  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/set-state-in-effect
  //   fetchApi();
  // }, []);

  //less broiler plate with tanstack
  const { data, isLoading, error } = useQuery({
    queryKey: ["data"],
    queryFn:()=> fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json(),
    ),
  });

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  if (error) {
    return <div>Error.....</div>;
  }

  return (
    <div>
      {data.map((d) => (
        <ol key={d.id}>
          <li>{d.title}</li>
        </ol>
      ))}
    </div>
  );
}
