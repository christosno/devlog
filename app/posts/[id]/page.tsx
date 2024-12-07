import prisma from "@/lib/db";

export default async function Posts({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await prisma.user.findMany({
    where: {
      id: id,
    },
    include: {
      posts: true,
    },
  });

  const userPosts = user[0]?.posts || [];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {userPosts.map((post) => (
        <div
          key={post.id}
          className="post bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-lg font-bold">{post.title}</h2>
          <p className="text-sm text-gray-700 mt-2">{post.content}</p>
        </div>
      ))}
    </div>
  );
}
