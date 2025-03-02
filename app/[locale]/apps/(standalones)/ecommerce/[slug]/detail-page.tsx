'use client'

import { useTranslations } from 'next-intl'
import React from 'react'
import {
  BoardHeader,
} from '@/design/features/user-board'
import { DetailBody } from './detail-body'
import { DetailFooter } from './detail-footer'

interface EcommerceAppDetailPageProps {
  product: string
}

export const EcommerceAppDetailPage = ({ product }: EcommerceAppDetailPageProps) => {
  const t = useTranslations('EcommerceApp')

  return (
    <div className='flex-1 overflow-auto bg-slate-100 p-8 space-y-6 overflow-y-auto scrollbar-hide'>
      {/* Page Header */}
      <BoardHeader title={t('page_detail_title')} />
      {/* Product detail body */}
      <DetailBody
        className='bg-white rounded-2xl shadow-lg'
        product_id={product}
      />
      {/* Product detail footer */}
      <DetailFooter className='bg-white rounded-2xl shadow-lg'/>
    </div>
  )
}
