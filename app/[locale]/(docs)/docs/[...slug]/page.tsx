import { MdxDoc } from '@/design/features/docs'
import { MdxDocContent } from '@/types'
import path from 'path'

export default async function DocumentsPage({
  params,
}: {
  params: Promise<{ slug: string, locale: string }>
}) {
  const { slug, locale } = await params

  let urlPath = path.join(`api/docs`, ...slug)
  const mdx : MdxDocContent = await fetch(
    `http://localhost:3000/${urlPath}?locale=${locale}`
  ).then((res) => res.json())

  return (
    <MdxDoc mdxContent={mdx.content} />
  )
}
