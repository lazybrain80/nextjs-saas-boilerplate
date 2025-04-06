'use client'

import Image from 'next/image'
import { cn } from '@/libs/utils'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Carousel,
  CarouselItem,
} from '@/design/components'
import * as Icons from '@/design/icons'

export const ProductsCarousel = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299.99,
      description: 'High-quality wireless headphones with noise cancellation',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    },
    {
      id: 2,
      name: 'Smart Watch Pro',
      price: 399.99,
      description: 'Advanced smartwatch with health monitoring features',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    },
    {
      id: 3,
      name: 'Ultra HD Camera',
      price: 899.99,
      description: 'Professional-grade camera with 4K video capability',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    },
    {
      id: 4,
      name: 'Portable Speaker',
      price: 149.99,
      description: 'Waterproof portable speaker with premium sound',
      image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab',
    },
    {
      id: 5,
      name: 'Gaming Console',
      price: 499.99,
      description: 'Next-gen gaming console with 4K graphics',
      image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128',
    },
    {
      id: 6,
      name: 'Wireless Earbuds',
      price: 199.99,
      description: 'True wireless earbuds with active noise cancellation',
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb',
    },
    {
      id: 7,
      name: 'Tablet Pro',
      price: 799.99,
      description: 'Premium tablet with stunning display and performance',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0',
    },
    {
      id: 8,
      name: 'Smart Home Hub',
      price: 129.99,
      description: 'Central hub for all your smart home devices',
      image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126',
    },
  ]

  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader className="border-b border-gray-300 bg-gray-100">
        <CardTitle>Products Carousel</CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel
          items={products}
          renderItemAction={({ index, item, isSnapPoint }) => (
            <CarouselItem className="w-64" key={`carousel-item-${index}`} isSnapPoint={isSnapPoint}>
              <Image
                src={item.image}
                alt={`${item.name} view ${index + 1}`}
                width={256}
                height={256}
                className={cn(
                  'w-64 h-64 object-cover',
                  'rounded-lg overflow-hidden',
                  'hover:cursor-pointer'
                )}
              />
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</span>
                  <button
                    className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 text-sm"
                    aria-label={`Add ${item.name} to cart`}
                  >
                    <Icons.ShoppingCart className="w-4 h-4" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </CarouselItem>
          )}
        />
      </CardContent>
    </Card>
  )
}
