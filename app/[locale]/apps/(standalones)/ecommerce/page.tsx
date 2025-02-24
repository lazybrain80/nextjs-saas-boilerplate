'use client'

import { useState } from 'react'
import { cn } from '@/libs/utils'
import { useTranslations } from 'next-intl'
import React from 'react'
import {
  BoardHeader,
} from '@/design/features/user-board'
import {
  Card,
  Button,
} from '@/design/components/ui'
import * as Icons from '@/design/icons'
import { CachedItemProvider } from '@/hooks/client-cache'
import { FilterHeader } from './filter-header'

const InvoiceAppPage = () => {
  const t = useTranslations('EcommerceApp')

  return (
    <div className='flex-1 overflow-auto bg-slate-100 p-8'>
      {/* Page Header */}
      <BoardHeader title={t('page_title')} />
      
      <CachedItemProvider items={[]}>
        <FilterHeader />

        <Card className='rounded-2xl shadow-lg h-[90%] bg-gray-100 flex'>
        </Card>

      </CachedItemProvider>
      

    </div>
  )
}

export default InvoiceAppPage