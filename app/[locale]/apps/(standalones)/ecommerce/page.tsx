'use client'

import { useEffect } from 'react'
import { useTranslations } from 'next-intl'
import React from 'react'
import {
  BoardHeader,
} from '@/design/features/user-board'
import { CachedItemProvider } from '@/hooks/client-cache'
import { FilterHeader } from './filter-header'
import { DisplayProducts } from './display-products'
import { ecommerceProductMockData } from './common'
import { ShoppingCart } from './shopping-cart'

const EcommerceAppPage = () => {
  const t = useTranslations('EcommerceApp')

  // Initialize localStorage
  useEffect(() => {
    // localStorage.clear()
  }, [])

  return (
    <div className='flex-1 overflow-auto bg-slate-100 p-8 overflow-y-auto scrollbar-hide'>
      {/* Page Header */}
      <BoardHeader title={t('page_title')} />
      
      <CachedItemProvider items={ecommerceProductMockData}>
        <FilterHeader />
        <DisplayProducts
          className='rounded-2xl shadow-lg bg-gray-100'
        />
      </CachedItemProvider>
      <ShoppingCart />
    </div>
  )
}

export default EcommerceAppPage