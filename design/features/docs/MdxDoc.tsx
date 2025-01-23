import path from 'path'
import { promises as fs } from 'fs'
export interface MdxDocProps {
  locale: string
  filePath: string
}

export default async function MdxDoc({locale, filePath}: MdxDocProps) {
  let mdxPath = filePath
  const checkPath = path.join(process.cwd(), `contents/docs`, locale , filePath)
    
  try {
    // Check if mdxPath is a directory
    const stat = await fs.stat(checkPath)
    if (stat.isDirectory()) {
      mdxPath = path.join(mdxPath, 'index')
    }
  } catch (error) {
    mdxPath = filePath
  }

  const { default: MdxContent, metadata } = await import(`@/contents/docs/${locale}/${mdxPath}.mdx`)
  
  return (
    <div className='relative py-6 lg:gap-10 lg:py-10'>
      <div className='space-y-4'>
        <h1 className='font-heading inline-block text-4xl lg:text-5xl'>{metadata?.title}</h1>
        <h2>{metadata?.shortTitle}</h2>
        <p className='text-xl text-muted-foreground'>{metadata?.description}</p>
      </div>
      <hr className='my-4'/>
      <div className='max-w-full prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white'>
        <MdxContent />
      </div>
    </div>
  )
}