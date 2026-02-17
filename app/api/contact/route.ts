import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request: NextRequest) {
    console.log('POST /api/contact started');
    try {
        const body = await request.json();
        const { name, email, phone, message, type } = body;

        // Validate required fields
        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: 'Name, email, and phone are required' },
                { status: 400 }
            );
        }

        if (type !== 'callback' && !message) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        // Add to Firestore with timeout
        console.log('Attempting to save to Firestore...', { type: type || 'contact' });

        const savePromise = addDoc(collection(db, 'contacts'), {
            name,
            email,
            phone,
            message: message || 'Requesting a Call Back',
            type: type || 'contact',
            createdAt: serverTimestamp(),
        });

        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Firestore operation timed out')), 10000)
        );

        await Promise.race([savePromise, timeoutPromise]);

        console.log('Firestore save successful');

        return NextResponse.json(
            { success: true, message: 'Contact form submitted successfully' },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Error in /api/contact:', error.message || error);

        const errorMessage = error.message === 'Firestore operation timed out'
            ? 'Connection to database timed out. Please try again.'
            : 'Failed to submit contact form. Please try again.';

        return NextResponse.json(
            { error: errorMessage, details: error.message },
            { status: 500 }
        );
    }
}
