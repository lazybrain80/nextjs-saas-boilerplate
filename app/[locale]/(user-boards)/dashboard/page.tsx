'use client'

import { useTranslations } from 'next-intl'
import * as Icons from '@/design/icons'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@/design/components/ui'

import { BoardHeader } from '@/design/features/user-board'
import {
  SalesPerformanceChart,
  PropertyTypesChart
} from './chart-cards'
import { PropertyTable } from './property-table'

const DashboardPage = () => {
  const t = useTranslations('DashboardPage')
  
  return (
    <div className='flex-1 overflow-auto bg-slate-100'>
      <div className='p-8'>
        {/* Header */}
        <BoardHeader title={'Dashboard'} />
        {/* Overview Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          {[
            { title: t('total_properties'), value: '156', icon: Icons.Building },
            { title: t('properties_sold'), value: '43', icon: Icons.DollarSign },
            { title: t('total_revenue'), value: '$2.4M', icon: Icons.PieChart },
            { title: t('conversion_rate'), value: '68%', icon: Icons.Users }
          ].map((card, index) => (
            <Card key={index} className='rounded-2xl shadow-lg'>
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
          <SalesPerformanceChart className='bg-white p-6 rounded-2xl shadow-lg' />
          <PropertyTypesChart className='bg-white p-6 rounded-2xl shadow-lg' />
        </div>

        {/* Properties Table */}
        <PropertyTable className='bg-white rounded-2xl shadow-lg' />

      </div>
    </div>
  )
}

export default DashboardPage
