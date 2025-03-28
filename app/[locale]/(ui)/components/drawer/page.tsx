'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { DrawerExamples } from './simple-drawer'

const DrawerExamplesPage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Drawer'} />
      {/* Drawer examples */}
      <DrawerExamples />
    </div>
  )
}

export default DrawerExamplesPage
