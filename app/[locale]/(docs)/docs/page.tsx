
import { MdxDoc } from '@/design/features/docs'

type DocparamsType = Promise<{ locale: string }>
type DocPageProps = Readonly<{
  params: DocparamsType
}>

export default async function DocumentsPage({
  params,
}: DocPageProps) {
  const { locale } = await params
  
  return (
    <MdxDoc locale={locale} filePath={'index'} />
  )
}