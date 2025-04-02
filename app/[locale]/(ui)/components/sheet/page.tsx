'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { SimpleSheet } from './simple-sheet'
const SheetExamplePage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Sheet'} />
      {/* Sheet examples */}
      <SimpleSheet />
    </div>
  )
}

export default SheetExamplePage
