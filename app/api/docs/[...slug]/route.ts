import { promises as fs } from 'fs';
import path from 'path';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  const searchParams = req.nextUrl.searchParams
  const locale = searchParams.get('locale') || 'en';

  const { slug } = await params;
  let filePath = path.join(process.cwd(), `contents/docs`, locale ,...slug);
  
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