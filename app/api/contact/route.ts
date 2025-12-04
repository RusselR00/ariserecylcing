import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        // Validate required fields
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Create contact entry
        const contact = {
            id: crypto.randomUUID(),
            name,
            email,
            phone,
            message,
            createdAt: new Date().toISOString(),
        };

        // Read existing contacts
        const filePath = path.join(process.cwd(), 'data', 'contacts.json');
        let contacts = [];

        try {
            const fileContent = await fs.readFile(filePath, 'utf-8');
            contacts = JSON.parse(fileContent);
        } catch (error) {
            // File doesn't exist or is empty, start with empty array
            contacts = [];
        }

        // Add new contact
        contacts.push(contact);

        // Write back to file
        await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));

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
