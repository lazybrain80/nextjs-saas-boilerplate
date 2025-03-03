'use client'

import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/libs/utils'
import { useCachedItems } from '@/hooks/client-cache'
import {
  Card,
  Button,
  Transition
} from '@/design/components/ui'
import { BaseEcommerceProduct } from './common'
import * as Icons from '@/design/icons'
import { DetailProductDialog } from './dialogs'

interface DisplayProductsProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const DisplayProducts = ({ className }: DisplayProductsProps) => {
  const { cachedItems } = useCachedItems()

  return (
    <Card className={cn('', className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-2">
        {(cachedItems as BaseEcommerceProduct[]).map(product => (
          <div
            key={product.id}
            className={cn('bg-white rounded-lg',
              'shadow-sm hover:shadow-lg transition-shadow duration-200',
              'hover:scale-105 transition-transform duration-200',
              'hover:cursor-pointer'
            )}
          >
            <Link href={`/apps/ecommerce/${product.id}`}>
              <Transition
                className="relative pb-[100%] group"
                durationIn={Math.random() * 5}
              >
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  loading="lazy"
                  width={256}
                  height={256}
                />
                <Button
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <Icons.Heart className="h-5 w-5 text-gray-600" />
                </Button>
              </Transition>
            </Link>
            <div className="p-4">
              <Link href={`/apps/ecommerce/${product.id}`}>
                <h3 className="font-medium text-gray-900 mb-1">{product.title}</h3>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    i < Math.floor(product.avgRating) ?
                      <Icons.Star key={i} fill='yellow' className="h-5 w-5 text-yellow-400" /> :
                      <Icons.Star key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                  <span className="ml-1 text-sm text-gray-600">({product.avgRating})</span>
                </div>
              </Link>
              <div className="flex items-center justify-between">
                {product?.discount && product.discount > 0 ? (
                  <div>
                    <span className="text-lg font-bold">${(product.price * (1 - product.discount)).toFixed(2)}</span>
                    <span className="ml-1 text-sm text-gray-500 line-through">${product.price}</span>
                  </div>
                ) : (
                  <span className="text-lg font-bold">${product.price}</span>
                )}
                <DetailProductDialog product={product} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}