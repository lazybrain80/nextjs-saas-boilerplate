'use client'

import Image from 'next/image'
import { cn } from '@/libs/utils'
import {
  Card,
  Carousel,
  CarouselItem
} from '@/design/components'

interface DetailFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}
const recommendedProducts = [
  {
    id: '_dr36ncu4r',
    name: 'Product 1',
    image: '/images/ecommerce/basketball.jpg',
  },
  {
    id: '_ob8nyat5x',
    name: 'Product 2',
    image: '/images/ecommerce/book.jpg',
  },
  {
    id: '_apogtaixe',
    name: 'Product 3',
    image: '/images/ecommerce/building_blocks.jpg',
  },
  {
    id: '_22bgpfff2',
    name: 'Product 4',
    image: '/images/ecommerce/dining_table.jpg',
  },
  {
    id: '_dhhbpbcqz',
    name: 'Product 5',
    image: '/images/ecommerce/face_cream.jpg',
  },
  {
    id: '_ae01ph2pk',
    name: 'Product 6',
    image: '/images/ecommerce/javascript_book.jpg',
  },
  {
    id: '_uiymy1ybc',
    name: 'Product 7',
    image: '/images/ecommerce/smartphone.jpg',
  }
]
export const DetailFooter = ({ className }: DetailFooterProps) => {
  return (
    <Card className={cn('p-6', className)}>
      {/* Recommended Products */}
      <div className="mt-2">
        <h2 className="text-2xl font-bold mb-6">Recommended Products</h2>
        <Carousel
          items={recommendedProducts || []}
          renderItemAction={({ index, item, isSnapPoint }) => (
            <CarouselItem
              className='w-96 h-96'
              key={`carousel-item-${index}`}
              isSnapPoint={isSnapPoint}
            >
              <Image
                src={item.image}
                alt={`${item.name} view ${index + 1}`}
                width={256}
                height={256}
                className={cn(
                  'w-96 h-96 object-cover',
                  'hover:cursor-pointer'
                )}
              />
            </CarouselItem>
          )}
        />
      </div>
    </Card>
  )
}