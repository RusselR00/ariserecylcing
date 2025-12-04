
import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const uploadFile = async (filePath: string) => {
    const filename = path.basename(filePath);
    const file = fs.readFileSync(filePath);

    console.log(`Uploading ${filename}...`);

    try {
        const blob = await put(filename, file, {
            access: 'public',
            token: process.env.BLOB_READ_WRITE_TOKEN,
        });

        console.log(`Uploaded ${filename} to ${blob.url}`);
        return blob.url;
    } catch (error) {
        console.error(`Error uploading ${filename}:`, error);
    }
};

const main = async () => {
    const assetsDir = path.join(process.cwd(), 'public', 'assets');
    const filesToUpload = [
        'Herosectionnew1.mp4',
        // Add other large files here if needed
    ];

    for (const file of filesToUpload) {
        const filePath = path.join(assetsDir, file);
        if (fs.existsSync(filePath)) {
            await uploadFile(filePath);
        } else {
            console.warn(`File not found: ${filePath}`);
        }
    }
};

main();
