import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from '@/lib/auth';
import { db } from '@/lib/firebase';
import { collection, getDocs, doc, updateDoc, query, orderBy } from 'firebase/firestore';

export async function GET() {
    try {
        // Verify admin session
        const session = await verifySession();

        if (!session) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        // Fetch contacts from Firestore
        const contactsQuery = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(contactsQuery);

        const contacts = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            // Convert Firestore timestamp to ISO string for the frontend
            createdAt: doc.data().createdAt?.toDate().toISOString() || new Date().toISOString()
        }));

        return NextResponse.json(
            { contacts },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching contacts:', error);
        return NextResponse.json(
            { error: 'Failed to fetch contacts' },
            { status: 500 }
        );
    }
}

export async function PUT(request: NextRequest) {
    try {
        // Verify admin session
        const session = await verifySession();

        if (!session) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { id, status, comments } = body;

        if (!id) {
            return NextResponse.json(
                { error: 'Contact ID is required' },
                { status: 400 }
            );
        }

        // Update document in Firestore
        const contactRef = doc(db, 'contacts', id);
        const updateData: any = {};

        if (status !== undefined) updateData.status = status;
        if (comments !== undefined) updateData.comments = comments;

        await updateDoc(contactRef, updateData);

        return NextResponse.json(
            { success: true },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error updating contact:', error);
        return NextResponse.json(
            { error: 'Failed to update contact' },
            { status: 500 }
        );
    }
}
