'use client'

import Image from 'next/image'
import { cn } from '@/libs/utils'
import {
  Card,
  CardHeader,
  CardFooter,
  Button,
  CardContent,
} from '@/design/components/ui'
import * as Icons from '@/design/icons'

interface ConnectionProps {
  imageUrl: string
  title: string
  createdAt: string
}

interface ConnectionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  info: ConnectionProps
}

export const ConnectionCard = ({ className, info, ...props }: ConnectionCardProps) => {
  const { imageUrl, title, createdAt } = info
  return (
    <Card className={cn(className, 'rounded-3xl')}>
      <CardHeader
        className={cn('w-full h-50 p-0')}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={100}
          height={100}
          className='w-full h-full'
        />
      </CardHeader>
      <CardFooter
        className='flex items-center justify-between p-6'
      >
        <div>
          <div className='text-xl font-bold'>{title}</div>
          <div className='mt-1 text-gray-700'>{createdAt}</div>
        </div>
        
        <Button
          className={cn('h-6 mt-2 rounded-full bg-green-500 text-white hover:bg-green-300')}
          variant='secondary'
          size='sm'
        >
          Connect
        </Button>
      </CardFooter>
    </Card>
  )
}