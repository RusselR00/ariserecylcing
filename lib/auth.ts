import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const SECRET_KEY = new TextEncoder().encode(
    process.env.SESSION_SECRET || 'your-secret-key-change-this-in-production'
);

export async function createSession(email: string) {
    const token = await new SignJWT({ email })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('24h')
        .sign(SECRET_KEY);

    (await cookies()).set('session', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
    });

    return token;
}

export async function verifySession() {
    const cookieStore = await cookies();
    const token = cookieStore.get('session')?.value;

    if (!token) {
        return null;
    }

    try {
        const verified = await jwtVerify(token, SECRET_KEY);
        return verified.payload as { email: string };
    } catch (err) {
        return null;
    }
}

export async function deleteSession() {
    (await cookies()).delete('session');
}

export function verifyPassword(inputPassword: string) {
    const adminPassword = process.env.ADMIN_PASSWORD;
    const adminEmail = process.env.ADMIN_EMAIL;

    return {
        isValid: inputPassword === adminPassword,
        email: adminEmail || 'admin@arisetrading.com'
    };
}
