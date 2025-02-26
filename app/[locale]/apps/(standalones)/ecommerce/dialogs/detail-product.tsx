'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { cn } from '@/utils/cn'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
import { BaseEcommerceProduct, ProductCategory } from '../common'
import { OptionsFactory } from './option-factory'

interface DetailProductDialogProps {
  open: boolean
  product?: BaseEcommerceProduct
  closeAction: () => void
}

export const DetailProductDialog = ({ open, closeAction, product }: DetailProductDialogProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  interface ImageErrorEvent extends React.SyntheticEvent<HTMLImageElement, Event> {
    target: HTMLImageElement;
  }

  const handleImageError = (e: ImageErrorEvent) => {
    e.target.src = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff';
  };

  const dialogOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setSelectedImage(0)
    }
  }

  return(
    <Dialog open={open} onOpenChange={dialogOpenChange}>
      <DialogContent
        enableClose={false}
        className='max-w-4xl h-[90%] overflow-y-auto scrollbar-hide'
      >
        <DialogClose
          className='absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100'
          onClick={closeAction}
        >
          <Icons.Close />
        </DialogClose>
        <VisuallyHidden>
          <DialogHeader />
          <DialogTitle />
        </VisuallyHidden>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Image Gallery */}
          <div className='space-y-4'>
            <div className='relative overflow-hidden rounded-lg'>
              <Image
                src={product?.images[selectedImage] || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff'}
                alt={product?.title || 'Product image'}
                width={256}
                height={256}
                className='w-full h-[500px] object-cover transform transition-transform duration-300 hover:scale-105'
                onError={handleImageError}
              />
            </div>
            <Carousel
              items={product?.images as string[] || []}
              renderItemAction={({ index, item, isSnapPoint }) => (
                <CarouselItem
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
                    onError={handleImageError}
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
            <p className='text-2xl font-bold'>${product?.price}</p>
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
                onClick={closeAction}
              >
                Add to Wishlist
              </Button>
              <Button
                className='w-full rounded-2xl bg-blue-500 text-white'
                onClick={closeAction}
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
        <Separator />
      </DialogContent>
    </Dialog>
  )
}