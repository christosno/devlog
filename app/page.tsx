import Link from "next/link";
import prisma from "../lib/db";

export default async function Home() {
  // todo: Need to change this
  // is just for testing
  const user = await prisma.user.findMany({
    where: {
      email: "chrn@gm.com",
    },
  });
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {user?.length > 0 ? (
        <Link
          className="border border-gray-600 bg-gray-800 text-white py-2 px-4 rounded no-underline"
          href={`posts/${user[0].id}`}
        >
          🚀 GO TO YOUR POSTS
        </Link>
      ) : (
        <p className="border border-gray-600 bg-gray-800 text-white py-2 px-4 rounded no-underline">
          NO BLOGS
        </p>
      )}
    </div>
  );
}
