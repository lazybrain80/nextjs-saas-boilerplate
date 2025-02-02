'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useAuthClient } from '@/auth/provider'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie
} from 'recharts'
import * as Icons from '@/design/icons'
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription
} from '@/design/components/ui'
import { LocaleSwitcher } from '@/design/components'
import { UserAccountNav } from '@/design/features/user-board'
import { UserMetaData } from '@/types'

const DashboardPage = () => {
  const t = useTranslations('DashboardPage')
  const data = [
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

  const authClient = useAuthClient()  
  const { user_metadata } = authClient?.supaUser || {}
  const user = user_metadata as UserMetaData

  return (
    <div className='flex-1 overflow-auto bg-slate-100'>
      <div className='p-8'>
        {/* Header */}
        <Card key={'dashboard-header'} className='rounded-2xl shadow-sm  mb-8'>
          <CardContent className="bg-white flex items-center justify-between p-4">
            <div>
              <h1 className="ml-4 text-2xl font-semibold text-gray-800">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4 mr-4">
              <LocaleSwitcher />
              <UserAccountNav />
            </div>
          </CardContent>
        </Card>
        {/* Overview Cards */}
        <div className='grid grid-cols-6 gap-6 mb-6'>
          <Card key={0} className='col-span-1 rounded-2xl shadow-sm'>
            <CardHeader>
              <CardTitle
                className='m-2'
              >
                <Icons.DollarSignCircle
                  className='h-8 w-8'
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='ml-2'>
                <span className='text-xl font-bold mr-1'>34534</span>
                <span className='text-sm text-gray-500'>+12%</span>
              </div>
              <div className='ml-2'>Sales</div>
            </CardContent>
          </Card>
          <Card key={1} className='col-span-1 rounded-2xl shadow-sm'>
            <CardHeader>
              <CardTitle
                className='m-2'
              >
                <Icons.CircleCheckBig
                  className='h-8 w-8'
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='ml-2'>
                <span className='text-xl font-bold mr-1'>2341</span>
                <span className='text-sm text-gray-500'>+23%</span>
              </div>
              <div className='ml-2'>Refunds</div>
            </CardContent>
          </Card>
          <Card key={2} className='col-span-1 rounded-2xl shadow-sm'>
            <CardHeader>
              <CardTitle
                className='m-2'
              >
                <Icons.Crown
                  className='h-8 w-8'
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='ml-2'>
                <span className='text-xl font-bold mr-1'>445.8</span>
                <span className='text-sm text-gray-500'>-2%</span>
              </div>
              <div className='ml-2'>Earnings</div>
            </CardContent>
          </Card>
          <Card key={3} className='col-span-3 rounded-2xl shadow-sm'>
            <CardHeader
              className='mt-2 ml-6'
            >
              <CardTitle
                className='text-2xl'
              >
                {`Welcome "${user.preferred_username}"`}
              </CardTitle>
              <CardDescription>{'Check all the statastics'}</CardDescription>
            </CardHeader>
            <CardContent
              className='ml-6'
            >
              <Button
                className='bg-blue-500 rounded-full w-52 mt-2'
              >
                Visit Now
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className='grid grid-flow-col grid-rows-6 grid-cols-4 gap-6'>
          <Card key={0} className='row-span-3 col-span-1 rounded-2xl shadow-sm'>
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
                  data={data}
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
          <Card key={1} className='row-span-3 rounded-2xl shadow-sm'>
            <CardHeader>
              <CardTitle>{'1'}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-2xl font-bold mt-2'>{'ddddd'}</p>
                </div>
                <Icons.Add size={24} className='text-blue-600' />
              </div>
            </CardContent>
          </Card>
          <Card key={2} className='row-span-6 col-span-2 rounded-2xl shadow-sm'>
            <CardHeader>
              <CardTitle>{'2'}</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width='100%' height={250}>
                <BarChart
                  width={200}
                  height={300}
                  data={data}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="creditcard" stackId="a" fill="#8884d8" />
                  <Bar dataKey="paypal" stackId="a" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card key={3} className='row-span-3 col-span-1 rounded-2xl shadow-sm'>
            <CardHeader>
              <CardTitle>{'3'}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-2xl font-bold mt-2'>{'ddddd'}</p>
                </div>
                <Icons.Add size={24} className='text-blue-600' />
              </div>
            </CardContent>
          </Card>
          <Card key={4} className='row-span-3 col-span-1 rounded-2xl shadow-sm'>
            <CardHeader>
              <CardTitle>{'4'}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-2xl font-bold mt-2'>{'ddddd'}</p>
                </div>
                <Icons.Add size={24} className='text-blue-600' />
              </div>
            </CardContent>
          </Card>
        </div>
      
      </div>
    </div>
  )
}

export default DashboardPage
