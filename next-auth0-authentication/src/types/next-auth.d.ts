import type { DefaultSession } from "next-auth";
import type { Role } from "@/lib/auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & { role: Role };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: Role;
  }
}
