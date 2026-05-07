const optCatchAll = async ({ params }) => {
  const { slug } = await params;
  console.log(slug);

  return (
    <div>
      <h1>Opt-Catch-All:</h1>
      <ul>
        {slug.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default optCatchAll;
