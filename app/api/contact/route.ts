import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, message, type } = body;

        // Validate required fields
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Add to Firestore
        await addDoc(collection(db, 'contacts'), {
            name,
            email,
            phone,
            message,
            type: type || 'contact',
            createdAt: serverTimestamp(),
        });

        return NextResponse.json(
            { success: true, message: 'Contact form submitted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error saving contact:', error);
        return NextResponse.json(
            { error: 'Failed to submit contact form' },
            { status: 500 }
        );
    }
}
