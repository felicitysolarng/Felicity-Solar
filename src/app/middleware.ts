// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");

  if (isAdminRoute) {
    const token = request.cookies.get("auth-token")?.value;
    const isAdmin = request.cookies.get("is-admin")?.value;

    console.log(request.cookies.getAll());

    console.log(`Token: ${token}, Is Admin: ${isAdmin}`);

    // Block access if no token or not an admin
    if (!token || isAdmin !== "true") {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
