'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { SimpleToggle } from './simple-toggle'
const ToggleExamplePage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Toggle'} />
      {/* Toggle examples */}
      <SimpleToggle />
    </div>
  )
}

export default ToggleExamplePage
