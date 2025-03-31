'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { SimpleMenubar } from './simple-menubar'

const MenubarExamplePage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Menubar'} />
      {/* Menubar examples */}
      <SimpleMenubar />
    </div>
  )
}

export default MenubarExamplePage
