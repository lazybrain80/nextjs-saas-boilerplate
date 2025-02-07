'use client'

import { useTranslations } from 'next-intl'
import { cn } from '@/libs/utils'
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@/design/components/ui'

export const PropertyTypesChart = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const t = useTranslations('DashboardPage')

  const propertyTypeData = [
    { name: 'Residential', value: 45 },
    { name: 'Commercial', value: 25 },
    { name: 'Industrial', value: 15 },
    { name: 'Land', value: 15 }
  ]

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle className='text-lg font-semibold mb-4'>{t('property_types')}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width='100%' height={250}>
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
      </CardContent>
    </Card>
  )
}