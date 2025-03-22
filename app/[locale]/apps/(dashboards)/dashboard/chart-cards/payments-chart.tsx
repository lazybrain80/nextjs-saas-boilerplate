'use client'

import React from 'react'
import { cn } from '@/libs/utils'
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/design/components'
import * as Icons from '@/design/icons'

const paymentData = [
  {
    name: 'M',
    paypal: 4000,
    creditcard: 2400,
    amt: 2400,
  },
  {
    name: 'T',
    paypal: 3000,
    creditcard: 1398,
    amt: 2210,
  },
  {
    name: 'W',
    paypal: 2000,
    creditcard: 9800,
    amt: 2290,
  },
  {
    name: 'T',
    paypal: 2780,
    creditcard: 3908,
    amt: 2000,
  },
  {
    name: 'F',
    paypal: 1890,
    creditcard: 4800,
    amt: 2181,
  },
  {
    name: 'S',
    paypal: 2390,
    creditcard: 3800,
    amt: 2500,
  },
  {
    name: 'S',
    paypal: 3490,
    creditcard: 4300,
    amt: 2100,
  },
]

export const PaymentsChart = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn(
      className
    )}>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <div>
            <CardTitle>{'Payments'}</CardTitle>
            <CardDescription>{'Last 7 days'}</CardDescription>
          </div>
          <div>
            <div>
              <span className='px-4 font-bold'>{'484,432'}</span>
            </div>
            <div className='rounded-full border border-blue-500 bg-blue-100'>
              <span className='px-4 text-blue-700'>{'+10.12%'}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer className='mb-4' width='100%' height={250}>
          <BarChart
            width={200}
            height={300}
            barGap={10}
            barCategoryGap={5}
            data={paymentData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            <Bar
              barSize={8}
              dataKey="creditcard"
              stackId="a"
              fill={'DodgerBlue'}
              radius={[0, 0, 10, 10]}
            />
            <Bar
              barSize={8}
              dataKey="paypal"
              stackId="a"
              fill={'lightgray'}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
        <div className='flex justify-between mx-2 my-1'>
          <div className='flex space-x-2'>
            <Icons.Circle
              className='size-4 m-auto text-gray-500'
            />
            <span className='text-gray-500'>Paypal</span>
          </div>
          <span>52%</span>
        </div>
        <div className='flex justify-between mx-2 my-1'>
          <div className='flex space-x-2'>
            <Icons.Circle
              className='size-4 m-auto text-blue-500'
            />
            <span className=' text-blue-500'>Credit card</span>
          </div>
          <span>48%</span>
        </div>
      </CardContent>
    </Card>
  )
}
