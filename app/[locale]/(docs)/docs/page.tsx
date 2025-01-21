
import { MdxDoc } from '@/design/features/docs'

export default async function DocumentsPage({
  params,
}: Readonly<{
  params: { locale: string }
}>) {
  const { locale } = await params
  
  return (
    <MdxDoc locale={locale} path={'index'} />
  )
}