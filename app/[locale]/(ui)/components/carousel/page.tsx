'use client'

import React from 'react'

import { BoardHeader } from '@/design/features/user-board'
import { SimpleCarousel } from './simple-carousel'
import { ProductsCarousel } from './products-carousel'

const CarouselPage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Carousel'} />
      {/* Carousel examples */}
      <SimpleCarousel />
      <ProductsCarousel />
    </div>
  )
}

export default CarouselPage
