import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { token } = await request.json();

    const cookieStore = await cookies(); // ✅ wait for the cookies API to resolve

    cookieStore.set("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax", // or "none" if cross-site
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day
    });

    return NextResponse.json({ message: "Cookie set successfully" });
}
