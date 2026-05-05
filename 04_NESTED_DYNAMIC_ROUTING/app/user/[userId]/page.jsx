const userIdPage = async ({ params }) => {
  const { userId } = await params;
  return (
    <div>
      <h1>userId Is:{userId}</h1>
    </div>
  );
};

export default userIdPage;
