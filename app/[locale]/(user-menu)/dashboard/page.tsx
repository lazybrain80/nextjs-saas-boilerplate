'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import {
  LineChart,
  Line,
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
  CardContent
} from '@/design/components/ui'
import { ShowProperty } from './property-dialog'
import { UserAccountNav } from '@/design/features/user-menu'

const DashboardPage = () => {
  const t = useTranslations('DashboardPage')
  const [showAddPropertyModal, setShowAddPropertyModal] = useState(false)
  
  const mockSalesData = [
    { month: 'Jan', sales: 65 },
    { month: 'Feb', sales: 59 },
    { month: 'Mar', sales: 80 },
    { month: 'Apr', sales: 81 },
    { month: 'May', sales: 56 },
    { month: 'Jun', sales: 55 }
  ]
  const propertyTypeData = [
    { name: 'Residential', value: 45 },
    { name: 'Commercial', value: 25 },
    { name: 'Industrial', value: 15 },
    { name: 'Land', value: 15 }
  ]

  const properties = [
    {
      id: 1,
      name: 'Luxury Villa',
      location: 'Beverly Hills',
      price: '$2,500,000',
      status: 'Listed',
      image: '/images/dashboard/photo_0.jpeg'
    },
    {
      id: 2,
      name: 'Modern Apartment',
      location: 'Manhattan',
      price: '$1,200,000',
      status: 'Pending',
      image: '/images/dashboard/photo_1.jpeg'
    }
  ]

  return (
    <div className='flex-1 overflow-auto'>
      {/* Header */}
      <header className="bg-white shadow-sm flex items-center justify-between p-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <UserAccountNav />
        </div>
      </header>
      <div className='p-8'>
        {/* Overview Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          {[
            { title: t('total_properties'), value: '156', icon: Icons.Building },
            { title: t('properties_sold'), value: '43', icon: Icons.DollarSign },
            { title: t('total_revenue'), value: '$2.4M', icon: Icons.PieChart },
            { title: t('conversion_rate'), value: '68%', icon: Icons.Users }
          ].map((card, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-2xl font-bold mt-2'>{card.value}</p>
                  </div>
                  <card.icon size={24} className='text-blue-600' />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Charts Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
          <div className='bg-white p-6 rounded-lg shadow'>
            <h3 className='text-lg font-semibold mb-4'>{t('sales_performance')}</h3>
            <ResponsiveContainer width='100%' height={300}>
              <LineChart data={mockSalesData}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='month' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type='monotone' dataKey='sales' stroke='#3B82F6' />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className='bg-white p-6 rounded-lg shadow'>
            <h3 className='text-lg font-semibold mb-4'>{t('property_types')}</h3>
            <ResponsiveContainer width='100%' height={300}>
              <PieChart>
                <Pie
                  data={propertyTypeData}
                  dataKey='value'
                  nameKey='name'
                  cx='50%'
                  cy='50%'
                  outerRadius={100}
                  fill='#3B82F6'
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Properties Table */}
        <div className='bg-white rounded-lg shadow'>
          <div className='p-6 border-b'>
            <div className='flex justify-between items-center'>
              <h3 className='text-lg font-semibold'>{t('property_listings')}</h3>
              <button
                onClick={() => setShowAddPropertyModal(true)}
                className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
              >
                Add Property
              </button>
            </div>
          </div>
          <div className='overflow-x-auto'>
            <Table className='w-full'>
              <TableHeader className='bg-gray-50'>
                <TableRow>
                  <TableHead className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>{t('property')}</TableHead>
                  <TableHead className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>{t('location')}</TableHead>
                  <TableHead className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>{t('price')}</TableHead>
                  <TableHead className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>{t('status')}</TableHead>
                  <TableHead className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>{t('actions')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className='divide-y divide-gray-200'>
                {properties.map((property) => (
                  <TableRow key={property.id}>
                    <TableCell className='px-6 py-4'>
                      <div className='flex items-center'>
                        <Image
                          src={property.image}
                          alt={property.name}
                          width={24}
                          height={24}
                          className='h-10 w-10 rounded-full object-cover'
                        />
                        <span className='ml-3'>{property.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className='px-6 py-4'>{property.location}</TableCell>
                    <TableCell className='px-6 py-4'>{property.price}</TableCell>
                    <TableCell className='px-6 py-4'>
                      <span className={`px-2 py-1 rounded-full text-xs ${property.status === 'Listed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {property.status}
                      </span>
                    </TableCell>
                    <TableCell className='px-6 py-4'>
                      <div className='flex space-x-3'>
                        <ShowProperty property={property} />
                        <Button className='bg-white text-gray-600 hover:text-gray-800 hover:bg-slate-300'>
                          <Icons.Edit2 size={18} />
                        </Button>
                        <Button className='bg-white text-red-600 hover:text-red-800 hover:bg-slate-300'>
                          <Icons.Trash2 size={18} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
