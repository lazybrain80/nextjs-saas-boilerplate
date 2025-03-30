'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { SimpleGradientText } from './simple-gradient-text'

const GradientTextExamplesPage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Gradient Text'} />
      {/* Gradient Text examples */}
      <SimpleGradientText />
    </div>
  )
}

export default GradientTextExamplesPage
