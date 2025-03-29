'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { BottomDropdownMenu } from './bottom-dropdown-menu'
import { LeftDropdownMenu } from './left-dropdown-menu'
import { RightDropdownMenu } from './right-dropdown-menu'
import { TopDropdownMenu } from './top-dropdown-menu'

const DropdownMenuExamplesPage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Dropdown Menu'} />
      {/* Dropdown Menu examples */}
      <BottomDropdownMenu />
      <LeftDropdownMenu />
      <RightDropdownMenu />
      <TopDropdownMenu />
    </div>
  )
}

export default DropdownMenuExamplesPage
