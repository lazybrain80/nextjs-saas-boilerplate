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
} from '@/design/components/ui'
import * as Icons from '@/design/icons'
import { BaseEcommerceProduct } from '../common'

interface DetailProductDialogProps {
  open: boolean
  product?: BaseEcommerceProduct
  closeAction: () => void
}

export const DetailProductDialog = ({ open, closeAction, product }: DetailProductDialogProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  interface ImageErrorEvent extends React.SyntheticEvent<HTMLImageElement, Event> {
    target: HTMLImageElement;
  }

  const handleImageError = (e: ImageErrorEvent) => {
    e.target.src = "https://images.unsplash.com/photo-1542291026-7eec264c27ff";
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={product?.images[selectedImage] || "https://images.unsplash.com/photo-1542291026-7eec264c27ff"}
                alt={product?.title || "Product image"}
                width={256}
                height={256}
                className="w-full h-[500px] object-cover transform transition-transform duration-300 hover:scale-105"
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
                      `rounded-lg overflow-hidden ${selectedImage === index ? "ring-2 ring-blue-500" : ""}`,
                      'hover:cursor-pointer'
                    )}
                    onClick={() => setSelectedImage(index)}
                    onError={handleImageError}
                  />
                </CarouselItem>
              )}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}