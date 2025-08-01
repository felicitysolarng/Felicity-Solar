// File: app/api/set-cookie/route.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { token } = await request.json();

    (await cookies()).set(
        "token",
        token,
        {
            httpOnly: true,
            secure: true,
            sameSite: "lax", // or "strict" if you're on the same domain
            path: "/",
            maxAge: 60 * 60 * 24, // 1 day
        }
    );

    return NextResponse.json({ message: "Cookie set successfully" });
}
