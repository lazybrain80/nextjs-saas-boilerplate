import { EcommerceAppDetailPage } from './detail-page'
import { CartProvider } from '@/design/features/ecommerce/cart'

const EcommerceAppDetail = async ({
  params,
}: {
  params: Promise<{ slug: string, locale: string }>
}) => {
  const { slug } = await params
  return (
    <CartProvider>
      <EcommerceAppDetailPage product={slug}  />
    </CartProvider>
  )
}

export default EcommerceAppDetail