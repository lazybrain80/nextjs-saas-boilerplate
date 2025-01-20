import { promises as fs } from 'fs';
import path from 'path';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const locale = searchParams.get('locale') || 'en';
  const filePath = path.join(process.cwd(), `contents/docs`, locale, 'index.mdx');

  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    return NextResponse.json({ content: fileContents });
  } catch (error) {
    return NextResponse.json({ error: 'the content is not found' }, { status: 404 });
  }
}