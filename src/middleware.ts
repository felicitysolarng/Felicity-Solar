import { NextRequest, NextResponse } from "next/server";



const protectedRoutes = ["/admin"];
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const token = request.cookies.get('token')?.value;

    console.log(`Middleware triggered for ${pathname}, token: ${token}`);

    if (protectedRoutes.some(route => pathname.startsWith(route)) && !token) {
        const loginUrl = new URL("/auth/login", request.url);
        return NextResponse.redirect(loginUrl)
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"]
};