import { EcommerceAppDetailPage } from './detail-page'

const EcommerceAppDetail = async ({
  params,
}: {
  params: Promise<{ slug: string, locale: string }>
}) => {
  const { slug } = await params
  return (
      <EcommerceAppDetailPage product={slug}  />
    )
}

export default EcommerceAppDetail