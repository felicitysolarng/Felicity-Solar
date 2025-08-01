// /app/api/set-cookie/route.ts
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { token } = await req.json();

    (await cookies()).set('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        path: '/',
        maxAge: 60 * 60 * 24, // 1 day
    });

    return NextResponse.json({ message: 'cookie set' });
}
