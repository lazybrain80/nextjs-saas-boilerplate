'use client'

import React from 'react'
import { cn } from '@/libs/utils'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/design/components/ui'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
]

export const ProductRadarChart = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>{'Product category'}</CardTitle>
        <CardDescription>{'Visual comparison of product categories based on various subjects.'}</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width='100%' height={300}>
          <RadarChart
            cx={160}
            cy={130}
            outerRadius={105}
            width={340}
            height={300}
            data={data}
            style={{ backgroundColor: '#fff' }}
        >
          <PolarGrid stroke='#c0c0c0' />
          <PolarAngleAxis dataKey='subject' fill='#c0c0c0' stroke='#c0c0c0' />
          <Radar
            name='Mike'
            dataKey='A'
            stroke='#1E90FF'
            fill='#1E90FF'
          />
        </RadarChart>
        </ResponsiveContainer>
        <div className='flex items-center'>
          <span className='m-auto'>category analisys for one month </span>
        </div>
      </CardContent>
    </Card>
  )
}
