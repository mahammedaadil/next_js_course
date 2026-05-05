const postIdPage = async ({ params }) => {
  const { postId } = await params;
  return (
    <div>
      <h1>postId Is:{postId}</h1>
    </div>
  );
};

export default postIdPage;
