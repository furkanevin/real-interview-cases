import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  // Middleware zaten korur; burada ikinci bir kontrol yapılır (defense in depth)
  if (!session) {
    redirect("/api/auth/signin");
  }

  if (session.user.role !== "admin") {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4">
        <h1>Bu sayfaya erişim yetkiniz yok.</h1>
        <a href="/" className="underline text-blue-600">
          Ana sayfaya dön
        </a>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1>Gizli Sayfa — Hoş geldin {session?.user?.name}</h1>
      <a
        href="/api/auth/signout?callbackUrl=/"
        className="underline text-blue-600"
      >
        Çıkış Yap
      </a>
    </main>
  );
}
