"use server";

import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

async function uploadFile(formData) {
  const file = formData.get('file');

  if (!file) {
    throw new Error('No file uploaded');
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = file.name;
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');

  try {
    await mkdir(uploadDir, { recursive: true });
  } catch (error) {
    console.error('Error creating directory:', error);
  }

  try {
     await writeFile(path.join(uploadDir, filename), buffer);
  } catch (error) {
    console.error('Error writing file:', error);
  }

  return { success: true, message: 'File uploaded successfully' };
}

export default uploadFile;