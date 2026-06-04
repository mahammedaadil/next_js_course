export async function generateMetadata({ params }) {
  const { userId } = await params;
  return {
    title: `User Page ${userId}`,
  };
}

const UserIdPage = () => {
  return <div>UserIdPage</div>;
};

export default UserIdPage;
