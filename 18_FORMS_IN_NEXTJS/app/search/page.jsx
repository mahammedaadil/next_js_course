
const SearchPage = async ({ searchParams: params }) => {
  const { query } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${query}`);
  const data = await res.json();
  return (
    <div>
      <h1>title:{data.title}</h1>
      <h1>body:{data.body}</h1>

    </div>
  );
};

export default SearchPage;
