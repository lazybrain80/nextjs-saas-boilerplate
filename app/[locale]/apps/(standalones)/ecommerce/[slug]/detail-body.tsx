'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/libs/utils'
import {
  Card,
  Button,
  Separator,
  Carousel,
  CarouselItem,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/design/components/ui'
import * as Icons from '@/design/icons'
import {
  BaseEcommerceProduct,
  OptionsFactory,
  MoreDetailProduct,
  ecommerceProductMockData
} from '../common'

interface DetailBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  product_id: string
}

export const DetailBody = ({ className, product_id }: DetailBodyProps) => {
  const [product, setProduct] = useState<BaseEcommerceProduct>()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [reviewsExpanded, setReviewsExpanded] = useState(false)

  useEffect(() => {
    // fetch product by product_id
    ecommerceProductMockData.forEach((p) => {
      if (p.id === product_id) {
        setProduct(p as BaseEcommerceProduct)
      }
    });
  } , [product_id])

  return (
    <Card className={cn(
      'overflow-y-auto scrollbar-hide',
      reviewsExpanded ? 'h-[100%]' : 'h-[75%]',
      className
    )}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-6'>
        {/* Image Gallery */}
        <div className='space-y-4'>
          <div className='relative overflow-hidden rounded-lg'>
            {product && (<Image
              src={product?.images[selectedImage] || ''}
              alt={product?.title || 'Product image'}
              width={256}
              height={256}
              className='w-full h-[500px] object-cover transform transition-transform duration-300 hover:scale-105'
            />)}
          </div>
          <Carousel
            items={product?.images as string[] || []}
            renderItemAction={({ index, item, isSnapPoint }) => (
              <CarouselItem
                className='w-24 h-24'
                key={`carousel-item-${index}`}
                isSnapPoint={isSnapPoint}
              >
                <Image
                  src={item as string}
                  alt={`${product?.title} view ${index + 1}`}
                  width={256}
                  height={256}
                  className={cn(
                    'w-24 h-24 object-cover',
                    `rounded-lg overflow-hidden ${selectedImage === index ? 'ring-2 ring-blue-500' : ''}`,
                    'hover:cursor-pointer'
                  )}
                  onClick={() => setSelectedImage(index)}
                />
              </CarouselItem>
            )}
          />
        </div>
        {/* Product Details */}
        <div className='space-y-6'>
          <h1 className='text-3xl font-bold'>{product?.title}</h1>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center'>
              {[...Array(5)].map((_, i) => (
                i < Math.floor(product?.avgRating ?? 0) ?
                  <Icons.Star key={i} fill='yellow' className='h-5 w-5 text-yellow-400' /> :
                  <Icons.Star key={i} className='h-5 w-5 text-yellow-400' />
              ))}
            </div>
          </div>
          <p className='text-gray-600'>{product?.description}</p>
          {product?.discount && product.discount > 0
            ? (<div>
                <span className="text-2xl font-bold">${(product.price * (1 - product.discount)).toFixed(2)}</span>
                <span className="ml-1 text-sm text-gray-500 line-through">${product.price}</span>
              </div>)
            : (
              <span className="text-2xl font-bold">${product?.price}</span>
          )}
          {/* more info */}
          {product && <MoreDetailProduct product={product} />}
          <Separator />
          {/* Quantity */}
          <div className='flex items-center'>
            <div className='font-semibold mr-5'>{`Quantity: `}</div>
            <div className='border rounded-l-full rounded-r-full'>
              <Button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className={cn(
                  'px-3 py-1 border-r hover:bg-gray-200 rounded-l-full',
                  'w-8 h-8 bg-white text-black'
                )}
              >
                -
              </Button>
              <input
                type='number'
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className='w-16 text-center m-0'
              />
              <Button
                onClick={() => setQuantity(quantity + 1)}
                className={cn(
                  'px-3 py-1 border-l hover:bg-gray-200 rounded-r-full',
                  'w-8 h-8 bg-white text-black'
                )}
              >
                +
              </Button>
            </div>
          </div>
          {/* Options */}
          {product?.category && (
            <OptionsFactory
              category={product.category}
            />
          )}
          {/* Actions */}
          <div className='flex items-center space-x-4'>
            <Button
              className='w-full rounded-2xl bg-white text-blue-500 border border-blue-500'
            >
              Add to Wishlist
            </Button>
            <Button
              className='w-full rounded-2xl bg-blue-500 text-white'
            >
              Add to cart
            </Button>
          </div>
          {/* Reviews */}
          {product?.reviews && product.reviews.length > 0
            ?(
              <div className='space-y-4 w-full'>
                <Accordion type='single' collapsible>
                  <AccordionItem key={`accordion-key-${product.id}`} value={`accordion-value-${product.id}`}>
                    <AccordionTrigger
                      className='w-full p-4 bg-gray-50 border-t rounded-lg'
                      onClick={() => setReviewsExpanded(!reviewsExpanded)}
                    >
                      <div className='flex items-center justify-between'>
                        <h2 className='text-xl font-bold'>{`${product?.reviews.length} Reviews`}</h2>
                      </div>
                    </AccordionTrigger>
                    {product.reviews.map((review, index) => (
                      <AccordionContent key={`review-${index}`}>
                        <div className='rounded-2xl bg-slate-100 p-6 m-2'>
                          <div className='flex items-center'>
                            {[...Array(5)].map((_, i) => (
                              i < Math.floor(review.rating ?? 0) ?
                                <Icons.Star key={i} fill='yellow' className='h-5 w-5 text-yellow-400' /> :
                                <Icons.Star key={i} className='h-5 w-5 text-yellow-400' />
                            ))}
                          </div>
                          
                          <div className='text-xl text-bold text-black my-2'>
                            {review.user}
                          </div>
                          <p className='text-gray-600'>{review.comment}</p>
                        </div>
                      </AccordionContent>
                  ))}
                  </AccordionItem>
                </Accordion>
              </div>
            )
            :(
              <p className='text-gray-600'>No reviews yet</p>
            )
          }
        </div>
      </div>
    </Card>
  )
}