'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { SimpleSwitch } from './simple-switch'

const SwitchExamplePage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Switch'} />
      {/* Switch examples */}
      <SimpleSwitch />
    </div>
  )
}

export default SwitchExamplePage
