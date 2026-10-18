import { withAuth } from "next-auth/middleware";

// /admin altındaki sayfalar sadece giriş yapmış kullanıcılara açıktır;
// giriş yapmamış kullanıcı NextAuth giriş sayfasına yönlendirilir.
// Rol (admin/user) kontrolü sayfanın içinde yapılır ki yetkisi olmayan
// kullanıcı tekrar giriş sayfasına değil, "yetkiniz yok" mesajına düşsün.
export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
});

export const config = {
  matcher: ["/admin/:path*"],
};
