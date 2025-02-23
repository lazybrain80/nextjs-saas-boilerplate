'use client'

import { useTranslations } from 'next-intl'
import React from 'react'
import {
  BoardHeader,
} from '@/design/features/user-board'

import { invoiceMockData, InvoiceProvider } from './common'
import { InvoiceListTable } from './list-table'
import { InvoiceOverviewHeader } from './overview-header'

const InvoiceAppPage = () => {
  const t = useTranslations('InvoiceApp')
  return (
    <div className='flex-1 overflow-auto bg-slate-100 p-8 space-y-6'>
      {/* Page Header */}
      <BoardHeader title={t('page_title')} />
      <InvoiceProvider invoices={invoiceMockData}>
        {/* Invoice overview Header */}
        <InvoiceOverviewHeader />
        {/* Invoice list table */}
        <InvoiceListTable
          className='bg-white rounded-2xl shadow-lg'
        />
      </InvoiceProvider>
    </div>
  )
}

export default InvoiceAppPage