// File: /app/api/logout/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
    const cookieStore = await cookies();

    cookieStore.set('token', '', {
        maxAge: 0,
        domain: '.felicitysolar.ng',
    });

    return NextResponse.json({ message: 'Logged out successfully', status: 200 });
}
