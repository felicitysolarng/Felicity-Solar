// File: /app/api/logout/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
    const cookieStore = await cookies();
    const getToken = cookieStore.get("token");
    console.log(`Token name is => ${getToken?.name} and value is =>${getToken?.value}`);
    cookieStore.set('token', '', {
        maxAge: 0,
        domain: '.felicitysolar.ng',
    });

    return NextResponse.json({ message: 'Logged out successfully', status: 200 });
}
