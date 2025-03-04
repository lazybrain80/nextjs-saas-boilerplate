'use client'


import { useTranslations } from 'next-intl'
import React from 'react'
import {
  BoardHeader,
} from '@/design/features/user-board'
import { CachedItemProvider } from '@/hooks/client-cache'
import {
  inventoryMockData,
  InventoryTable
} from '@/design/features/ecommerce'

const EcommerceInventoryPage = () => {
  const t = useTranslations('EcommerceApp')

  return (
    <div className='flex-1 overflow-auto bg-slate-100 p-8 overflow-y-auto scrollbar-hide'>
      {/* Page Header */}
      <BoardHeader title={t('page_inventory_title')} />
      
      <CachedItemProvider items={inventoryMockData}>
        <InventoryTable className='bg-white rounded-2xl shadow-lg' />
      </CachedItemProvider>
    </div>
  )
}

export default EcommerceInventoryPage