import { NextResponse } from 'next/server';
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
