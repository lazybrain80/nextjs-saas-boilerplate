'use client'

import React from 'react'
import { cn } from '@/libs/utils'
import { useAuthClient } from '@/auth/provider'
import { UserMetaData } from '@/types'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/design/components/ui'
import * as Icons from '@/design/icons'

const ordersData = [
  {
    name: "Mon",
    pre: 1000,
    current: 1400,
    amt: 2400,
  },
  {
    name: "Tue",
    pre: 3000,
    current: 1398,
    amt: 2210,
  },
  {
    name: "Wed",
    pre: 2000,
    current: 3800,
    amt: 2290,
  },
  {
    name: "Thu",
    pre: 5280,
    current: 3908,
    amt: 2000,
  },
  {
    name: "Fri",
    pre: 2890,
    current: 4800,
    amt: 2181,
  },
  {
    name: "Sat",
    pre: 4100,
    current: 5200,
    amt: 2500,
  },
  {
    name: "Sun",
    pre: 7490,
    current: 8300,
    amt: 2100,
  },
]

export const TotalOrdersChart = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {

  const authClient = useAuthClient()
  const { user_metadata } = authClient?.supaUser || {}
  const user = user_metadata as UserMetaData

  return (
    <Card className={cn(
      className
    )}>
      <CardContent>
        <div className='mx-4 mt-10 border-b border-gray-200 bg-[url(/images/dashboard/work-user2.png)] bg-cover bg-no-repeat bg-right-top'>
          <div className=''>
            <CardTitle>{`Congratulations " ${user.preferred_username} "`}</CardTitle>
            <CardDescription>{'You have done 38% more sales'}</CardDescription>
          </div>
          <div className='flex items-center mt-6'>
            <div className='rounded-full bg-green-100 p-2 mr-4'>
              <Icons.ShoppingCart
                className='h-8 w-8 text-green-500'
              />
            </div>
            <div>
              <CardTitle>{'4 orders'}</CardTitle>
              <CardDescription>{'On hold'}</CardDescription>
            </div>
          </div>
          <div className='flex items-center mt-6'>
            <div className='rounded-full bg-blue-100 p-2 mr-4'>
              <Icons.CircleCheckBig
                className='h-8 w-8 text-blue-500'
              />
            </div>
            <div>
              <CardTitle>{'4 orders'}</CardTitle>
              <CardDescription>{'On hold'}</CardDescription>
            </div>
          </div>
          <div className='flex items-center mt-6 mb-6'>
            <div className='rounded-full bg-yellow-100 p-2 mr-4'>
              <Icons.CircleCheckBig
                className='h-8 w-8 text-yellow-500'
              />
            </div>
            <div>
              <CardTitle>{'12 orders'}</CardTitle>
              <CardDescription>{'Delivered'}</CardDescription>
            </div>
          </div>
        </div>
        <div className='mx-4 mt-10'>
          <div className='flex items-center justify-between'>
            <div>
              <CardTitle
                className='text-2xl'
              >{'Total Orders'}</CardTitle>
              <CardDescription>{'Weekly order updates'}</CardDescription>
            </div>
            <div>
              <div>
                <span className='px-4 text-2xl font-bold'>{'9,445'}</span>
              </div>
              <div className='rounded-full border border-blue-500 bg-blue-100'>
                <span className='px-4 text-blue-700'>{'+15.78%'}</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width={"100%"} height={400} className={'mt-14'}>
            <LineChart data={ordersData} margin={{ top: 20 }} accessibilityLayer>
            <CartesianGrid stroke='#c0c0c0'/>
            <XAxis dataKey="name" stroke='#c0c0c0'/>
            <YAxis tickFormatter={(value) => `${value / 1000}k`} stroke='#c0c0c0'/>
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#1E90FF" // DodgerBlue
              dot={false}
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="pre"
              stroke="#00BFFF" // DeepSkyBlue
              dot={false}
              strokeWidth={3}
            />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
      </CardContent>
    </Card>
  )
}
