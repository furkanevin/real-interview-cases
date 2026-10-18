import type { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

export type Role = "admin" | "user";

// ADMIN_EMAILS="a@example.com,b@example.com" → bu e-postalar admin rolü alır
const adminEmails = (process.env.ADMIN_EMAILS ?? "")
  .split(",")
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean);

export const getRole = (email?: string | null): Role =>
  email && adminEmails.includes(email.toLowerCase()) ? "admin" : "user";

export const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // rol bilgisi JWT içine yazılır, middleware ve sayfalar buradan okur
    async jwt({ token }) {
      token.role = getRole(token.email);
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = (token.role as Role) ?? "user";
      }
      return session;
    },
  },
};
