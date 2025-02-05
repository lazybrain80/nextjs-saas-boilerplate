'use client'

import { useTranslations } from 'next-intl'
import { BoardHeader } from '@/design/features/user-board'

import {
  ProductRadarChart,
  BestSellingChart,
  PaymentsChart,
  ProductsChart,
  TotalOrdersChart
} from './chart-cards'
import {
  SalesCard,
  RefundsCard,
  EarningsCard,
  WelcomeCard
} from './overview-cards'

const DashboardPage2 = () => {
  const t = useTranslations('DashboardPage')

  return (
    <div className='flex-1 overflow-auto bg-slate-100'>
      <div className='p-8'>
        {/* Header */}
        <BoardHeader title={'Dashboard2'} />
        {/* Overview Cards */}
        <div className='grid grid-cols-6 gap-6 mb-6'>
          <SalesCard className='col-span-1 rounded-2xl shadow-lg bg-[url(/images/dashboard/blue-wave.png)]' />
          <RefundsCard className='col-span-1 rounded-2xl shadow-lg bg-[url(/images/dashboard/blue-wave.png)]' />
          <EarningsCard className='col-span-1 rounded-2xl shadow-lg bg-[url(/images/dashboard/blue-wave.png)]' />
          <WelcomeCard className='col-span-3 rounded-2xl shadow-lg bg-[url(/images/dashboard/work-user.png)] bg-cover bg-right bg-no-repeat' />
        </div>
        {/* Chart Cards */}
        <div className='grid grid-flow-col grid-rows-6 grid-cols-4 gap-6'>
          <PaymentsChart className='row-span-3 col-span-1 rounded-2xl shadow-lg' />
          <ProductsChart className='row-span-3 rounded-2xl shadow-lg' />
          <TotalOrdersChart className='row-span-6 col-span-2 rounded-2xl shadow-lg' />
          <ProductRadarChart className='row-span-3 col-span-1 rounded-2xl shadow-lg'/>
          <BestSellingChart className='row-span-3 col-span-1 rounded-2xl shadow-lg' />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage2
