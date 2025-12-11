import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from '@/lib/auth';
import { promises as fs } from 'fs';
import path from 'path';

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

        // Read contacts from JSON file
        const filePath = path.join(process.cwd(), 'data', 'contacts.json');

        try {
            const fileContent = await fs.readFile(filePath, 'utf-8');
            const contacts = JSON.parse(fileContent);

            // Sort by date (newest first)
            contacts.sort((a: any, b: any) =>
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );

            return NextResponse.json(
                { contacts },
                { status: 200 }
            );
        } catch (error) {
            // File doesn't exist or is empty
            return NextResponse.json(
                { contacts: [] },
                { status: 200 }
            );
        }
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

        // Read contacts from JSON file
        const filePath = path.join(process.cwd(), 'data', 'contacts.json');

        try {
            const fileContent = await fs.readFile(filePath, 'utf-8');
            let contacts = JSON.parse(fileContent);

            // Find and update the contact
            const contactIndex = contacts.findIndex((c: any) => c.id === id);

            if (contactIndex === -1) {
                return NextResponse.json(
                    { error: 'Contact not found' },
                    { status: 404 }
                );
            }

            // Update fields
            if (status !== undefined) {
                contacts[contactIndex].status = status;
            }
            if (comments !== undefined) {
                contacts[contactIndex].comments = comments;
            }

            // Write back to file
            await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));

            return NextResponse.json(
                { success: true, contact: contacts[contactIndex] },
                { status: 200 }
            );
        } catch (error) {
            return NextResponse.json(
                { error: 'Failed to read or update contacts' },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('Error updating contact:', error);
        return NextResponse.json(
            { error: 'Failed to update contact' },
            { status: 500 }
        );
    }
}
