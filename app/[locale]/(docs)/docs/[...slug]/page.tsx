import { MdxDoc } from '@/design/features/docs'
import path from 'path'

export default async function DocumentsPage({
  params,
}: {
  params: Promise<{ slug: string, locale: string }>
}) {
  const { slug, locale } = await params

  return (
    <MdxDoc locale={locale} path={path.join(...slug)} />
  )
}
