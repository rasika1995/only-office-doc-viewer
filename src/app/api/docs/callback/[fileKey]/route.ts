// app/api/docs/callback/[fileKey]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest, { params }: { params: { fileKey: string } }) {
  const { fileKey } = params;
  const body = await req.json();
  const { status, documentBase64 } = body; // Expecting a Base64 encoded document

  console.log("Body", body);

  // Only proceed if the document status indicates it's ready for saving
  if (status === 2) {
    if (!documentBase64) {
      return NextResponse.json({ error: 'No document provided' }, { status: 400 });
    }

    try {
      const filePath = path.join(process.cwd(), 'public', `${fileKey}.docx`); // Adjust extension as needed

      // Decode the Base64 string and save it to a file
      const buffer = Buffer.from(documentBase64, 'base64');
      fs.writeFileSync(filePath, buffer);

      return NextResponse.json({ message: 'File updated successfully' });
    } catch (error) {
      console.error('Error saving updated file:', error);
      return NextResponse.json({ error: 'Failed to save updated file' }, { status: 500 });
    }
  }

  // Return acknowledgment for other statuses
  return NextResponse.json({ message: 'Status acknowledged' });
}
