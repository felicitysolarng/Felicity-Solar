// File: /app/api/logout/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
    const cookieStore = await cookies();
    const getToken = cookieStore.get("token");
    console.log(`Token is => ${getToken}`);
    cookieStore.set('token', '', {
        maxAge: 0,
    });

    return NextResponse.json({ message: 'Logged out successfully', status: 200 });
}
