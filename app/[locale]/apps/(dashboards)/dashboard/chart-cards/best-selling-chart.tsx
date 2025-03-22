'use client'

import React from 'react'
import { cn } from '@/libs/utils'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  Progress,
} from '@/design/components'

const bestSellingData = [
  {
    name: 'MaterialPro',
    price: '$23,568',
    quantity: '484,432',
    growth: '+10.12%',
    progress: 80,
  },
  {
    name: 'Flexy Admin',
    price: '$23,568',
    quantity: '123,432',
    growth: '+13.12%',
    progress: 30,
  },
]

export const BestSellingChart = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn(
      className,
      'bg-[url(/images/dashboard/laptop-desk.png)] bg-contain bg-no-repeat',
      'bg-blue-500 bg-opacity-90'
    )}>
      <CardHeader>
        <CardTitle
          className='text-white font-bold text-2xl'
        >
          {'Best selling products'}
        </CardTitle>
        <CardDescription
          className='text-white'
        >
          {'Overview 2025'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Card
          className='mt-28'
        >
          {bestSellingData.map((item, index) => (
            <CardContent
              key={index}
              className={cn(
                index > 0 && 'border-t border-gray-200',
                index === 0 && 'border-t border-transparent'
              )}
            >
              <div className='flex items-center justify-between mt-4'>
                <div>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>{item.price}</CardDescription>
                </div>
                <div>
                  <div>
                    <span className='px-4 font-bold'>{item.quantity}</span>
                  </div>
                  <div className='rounded-full border border-blue-500 bg-blue-100'>
                    <span className='px-4 text-blue-700'>{item.growth}</span>
                  </div>
                </div>
              </div>
              <Progress
                className='mt-4 h-1'
                value={item.progress}
                color='bg-blue-500'
              />
            </CardContent>
          ))}
        </Card>
      </CardContent>
    </Card>
  )
}
