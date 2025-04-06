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
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Button,
} from '@/design/components'
import * as Icons from '@/design/icons'

const SampleCodeDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Icons.Code className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Carousel Sample Code</DialogTitle>
          <pre className="bg-slate-100 p-4 rounded-lg">
            {`
import {   
  Carousel,
  CarouselItem,
} from '@/design/components'

<Carousel
  items={images}
  renderItemAction={({ index, item, isSnapPoint }) => (
    <CarouselItem
      className="w-64 h-64"
      key={'carousel-item-\${index}'}
      isSnapPoint={isSnapPoint}
    >
      <Image
        src={item as string}
        alt={'\${item} view \${index + 1}'}
        width={256}
        height={256}
        className={cn(
          'w-64 h-64 object-cover',
          'rounded-lg overflow-hidden',
          'hover:cursor-pointer'
        )}
      />
    </CarouselItem>
  )}
/>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const SimpleCarousel = () => {
  const images = [
    '/images/ecommerce/book.jpg',
    '/images/ecommerce/sofa.jpg',
    '/images/ecommerce/smartphone.jpg',
    '/images/ecommerce/tshirt.jpg',
    '/images/ecommerce/face_cream.jpg',
    '/images/ecommerce/book.jpg',
    '/images/ecommerce/sofa.jpg',
    '/images/ecommerce/smartphone.jpg',
    '/images/ecommerce/tshirt.jpg',
    '/images/ecommerce/face_cream.jpg',
    '/images/ecommerce/book.jpg',
    '/images/ecommerce/sofa.jpg',
    '/images/ecommerce/smartphone.jpg',
    '/images/ecommerce/tshirt.jpg',
    '/images/ecommerce/face_cream.jpg',
    '/images/ecommerce/book.jpg',
    '/images/ecommerce/sofa.jpg',
    '/images/ecommerce/smartphone.jpg',
    '/images/ecommerce/tshirt.jpg',
    '/images/ecommerce/face_cream.jpg',
    '/images/ecommerce/book.jpg',
    '/images/ecommerce/sofa.jpg',
    '/images/ecommerce/smartphone.jpg',
    '/images/ecommerce/tshirt.jpg',
    '/images/ecommerce/face_cream.jpg',
    '/images/ecommerce/book.jpg',
    '/images/ecommerce/sofa.jpg',
    '/images/ecommerce/smartphone.jpg',
    '/images/ecommerce/tshirt.jpg',
    '/images/ecommerce/face_cream.jpg',
  ]
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader className="border-b border-gray-300 bg-gray-100">
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Simple Carousel </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel
          items={images}
          renderItemAction={({ index, item, isSnapPoint }) => (
            <CarouselItem
              className="w-64 h-64"
              key={`carousel-item-${index}`}
              isSnapPoint={isSnapPoint}
            >
              <Image
                src={item as string}
                alt={`${item} view ${index + 1}`}
                width={256}
                height={256}
                className={cn(
                  'w-64 h-64 object-cover',
                  'rounded-lg overflow-hidden',
                  'hover:cursor-pointer'
                )}
              />
            </CarouselItem>
          )}
        />
      </CardContent>
    </Card>
  )
}
