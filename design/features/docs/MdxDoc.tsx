export interface MdxDocProps {
  locale: string
  path: string
}

export default async function MdxDoc({locale, path}: MdxDocProps) {
  const { default: MdxContent, metadata } = await import(`@/contents/docs/${locale}/${path}.mdx`)
  
  return (
    <div className='relative py-6 lg:gap-10 lg:py-10'>
      <div className='space-y-4'>
        <h1 className='font-heading inline-block text-4xl lg:text-5xl'>{metadata?.title}</h1>
        <h2>{metadata?.shortTitle}</h2>
        <p className='text-xl text-muted-foreground'>{metadata?.description}</p>
      </div>
      <hr className='my-4'/>
      <div className='prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white'>
        <MdxContent />
      </div>
    </div>
  )
}