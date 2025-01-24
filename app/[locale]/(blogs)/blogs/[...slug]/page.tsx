import { MdxDoc } from '@/design/features/docs'
import path from 'path'

export default async function BlogsPage({
  params,
}: {
  params: Promise<{ slug: string, locale: string }>
}) {
  const { slug, locale } = await params

  return (
    <MdxDoc locale={locale} filePath={path.join(...slug)} />
  )
}
