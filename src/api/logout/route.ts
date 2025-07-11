// File: /app/api/logout/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
    const cookieStore = cookies();
    (await cookieStore).set('token', '', {
        expires: new Date(0),
        path: '/auth/login',
    });

    return NextResponse.json({ message: 'Logged out' });
}
