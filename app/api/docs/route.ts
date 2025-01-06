import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  
  const filePath = path.join(process.cwd(), `contents/docs`, 'index.mdx');
  console.log(filePath);
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    return NextResponse.json({ content: fileContents });
  } catch (error) {
    return NextResponse.json({ error: 'the content is not found' }, { status: 404 });
  }
}