'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { SimpleHorizontalForm } from './simple-horizontal-form'

const HorizontalFormExamplePage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Horizontal Form'} />
      {/* Horizontal Form examples */}
      <SimpleHorizontalForm />
    </div>
  )
}

export default HorizontalFormExamplePage
