import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  
  const { slug } = await params;
  let filePath = path.join(process.cwd(), `contents/docs`, ...slug);
  
  try {
    // Check if the slug is a directory
    const stat = await fs.stat(filePath);
    if (stat.isDirectory()) {
      filePath = path.join(filePath, 'index.mdx');
    }
  } catch (error) {
    filePath = `${filePath}.mdx`;
  }

  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    return NextResponse.json({ content: fileContents });
  } catch (error) {
    return NextResponse.json({ error: 'the content is not found' }, { status: 404 });
  }
}