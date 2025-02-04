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
  Pie,
  Cell,
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

type CustomLabelProps = {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  fill: string;
};

function calculateLuminance(color: string) {
  const rgb = parseInt(color.substring(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;

  return 0.299 * r + 0.587 * g + 0.114 * b;
}

function renderLabel(props: CustomLabelProps) {
  let { cx, cy, midAngle, innerRadius, outerRadius, percent, fill } = props;

  // Avoid rendering label on thin slices (< 5%);
  if (percent * 100 < 5) return null;

  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) / 2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const textColor = calculateLuminance(fill) > 128 ? "#000" : "#FFF";

  return (
    <text
      x={x}
      y={y}
      fill={textColor}
      className="pointer-events-none select-none text-sm font-medium"
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
}

const DashboardPage2 = () => {
  const t = useTranslations('DashboardPage')

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

  const pieData = [
    { name: "Group A", value: 600, color: "#1E90FF" }, // DodgerBlue
    { name: "Group B", value: 300, color: "#00BFFF" }, // DeepSkyBlue
    { name: "Group C", value: 300, color: "#87CEFA" }, // LightSkyBlue
    { name: "Group D", value: 100, color: "#4682B4" }, // SteelBlue
  ]

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

  const authClient = useAuthClient()
  const { user_metadata } = authClient?.supaUser || {}
  const user = user_metadata as UserMetaData

  return (
    <div className='flex-1 overflow-auto bg-slate-100'>
      <div className='p-8'>
        {/* Header */}
        <Card key={'dashboard-header'} className='rounded-2xl shadow-lg  mb-8'>
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
          <Card className='col-span-1 rounded-2xl shadow-lg bg-[url(/images/dashboard/blue-wave.png)]'>
            <CardHeader>
              <CardTitle
                className='m-2'
              >
                <Icons.DollarSignCircle
                  className='h-8 w-8 text-white'
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='ml-2'>
                <span className='text-xl text-white font-bold mr-1'>34534</span>
                <span className='text-sm text-white'>+12%</span>
              </div>
              <div className='ml-2 text-white'>Sales</div>
            </CardContent>
          </Card>
          <Card className='col-span-1 rounded-2xl shadow-lg bg-[url(/images/dashboard/blue-wave.png)]'>
            <CardHeader>
              <CardTitle
                className='m-2'
              >
                <Icons.CircleCheckBig
                  className='h-8 w-8 text-white'
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='ml-2'>
                <span className='text-xl text-white font-bold mr-1'>2341</span>
                <span className='text-sm text-white'>+23%</span>
              </div>
              <div className='ml-2 text-white'>Refunds</div>
            </CardContent>
          </Card>
          <Card className='col-span-1 rounded-2xl shadow-lg bg-[url(/images/dashboard/blue-wave.png)]'>
            <CardHeader>
              <CardTitle
                className='m-2'
              >
                <Icons.Crown
                  className='h-8 w-8 text-white'
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='ml-2'>
                <span className='text-xl text-white font-bold mr-1'>445.8</span>
                <span className='text-sm text-white'>-2%</span>
              </div>
              <div className='ml-2 text-white'>Earnings</div>
            </CardContent>
          </Card>
          <Card className='col-span-3 rounded-2xl shadow-lg bg-[url(/images/dashboard/work-user.png)] bg-cover bg-right bg-no-repeat'>
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
          <Card className='row-span-3 col-span-1 rounded-2xl shadow-lg'>
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
          <Card className='row-span-3 rounded-2xl shadow-lg'>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <div>
                  <CardTitle>{'Products'}</CardTitle>
                  <CardDescription>{'Last 15 days'}</CardDescription>
                </div>
                <div>
                  <div>
                    <span className='px-4 font-bold'>{'4,545'}</span>
                  </div>
                  <div className='rounded-full border border-blue-500 bg-blue-100'>
                    <span className='px-4 text-blue-700'>{'+5.78%'}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer className='mb-4' width='100%' height={250}>
                <PieChart width={800} height={200}>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    blendStroke
                    className="focus:outline-none"
                    startAngle={90}
                    animationDuration={600}
                    animationBegin={0}
                    animationEasing="ease-out"
                    label={renderLabel}
                    endAngle={-270}
                    labelLine={false}
                    innerRadius={70}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={5}
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        className='origin-center transition-transform duration-200 ease-out hover:scale-110 focus:outline-none outline-none'
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className='flex items-center mx-2 my-1'>
                <span className='m-auto'>$18k Profit more than month</span>
              </div>
            </CardContent>
          </Card>
          <Card className='row-span-6 col-span-2 rounded-2xl shadow-lg'>
            <CardContent>
              <div className='mx-4 mt-10 border-b border-gray-200 bg-[url(/images/dashboard/work-user2.png)] bg-cover bg-no-repeat bg-right-top'>
                <div className=''>
                  <CardTitle>{'Congratulations Mike'}</CardTitle>
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
          <Card key={3} className='row-span-3 col-span-1 rounded-2xl shadow-lg'>
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
          <Card key={4} className='row-span-3 col-span-1 rounded-2xl shadow-lg'>
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

export default DashboardPage2
