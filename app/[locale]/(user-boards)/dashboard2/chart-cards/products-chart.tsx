'use client'

import React from 'react'
import { cn } from '@/libs/utils'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/design/components/ui'

const pieData = [
  { name: "Group A", value: 600, color: "#1E90FF" }, // DodgerBlue
  { name: "Group B", value: 300, color: "#00BFFF" }, // DeepSkyBlue
  { name: "Group C", value: 300, color: "#87CEFA" }, // LightSkyBlue
  { name: "Group D", value: 100, color: "#4682B4" }, // SteelBlue
]

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

export const ProductsChart = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn(
      className
    )}>
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
  )
}
