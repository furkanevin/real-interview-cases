import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import AuthButton from "@/components/AuthButton";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <main className="flex min-h-screen items-center justify-center  bg-gray-200 text-gray-900">
      <div className="bg-white text-center space-y-4">
        <h1 className="text-8xl font-semibold">
          Hoş geldin {session?.user?.name}
        </h1>
        <AuthButton />
      </div>
    </main>
  );
}
