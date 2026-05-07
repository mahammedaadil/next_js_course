const catchAll = async ({ params }) => {
  const { slug } = await params;
  console.log(slug);

  return (
    <div>
      <h1>Catch-All:</h1>
      <ul>
        {slug.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default catchAll;
