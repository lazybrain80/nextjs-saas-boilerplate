'use client'

import { cn } from '@/libs/utils'
import { useTranslations } from 'next-intl'
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
  CardHeader,
  CardTitle,
  CardContent
} from '@/design/components/ui'

export const SalesPerformanceChart = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const t = useTranslations('DashboardPage')
  const mockSalesData = [
    { month: 'Jan', sales: 65 },
    { month: 'Feb', sales: 59 },
    { month: 'Mar', sales: 80 },
    { month: 'Apr', sales: 81 },
    { month: 'May', sales: 56 },
    { month: 'Jun', sales: 55 }
  ]
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle className='text-lg font-semibold mb-4'>{t('sales_performance')}</CardTitle>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  )
}