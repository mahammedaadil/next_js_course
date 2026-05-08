export async function POST(request) {
  const body = await request.json();
  const { userId, name, phone } = body;
  return Response.json({
    success: true,
    message: "User Created Successfully",
    user: {
      userId,
      name,
      phone,
    },
  });
}
