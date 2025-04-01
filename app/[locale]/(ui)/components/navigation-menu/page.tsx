'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { SimpleNavMenu } from './simple-nav-menu'
const NavigationMenuExamplePage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Navigation Menu'} />
      {/* Navigation Menu examples */}
      <SimpleNavMenu />
    </div>
  )
}

export default NavigationMenuExamplePage
