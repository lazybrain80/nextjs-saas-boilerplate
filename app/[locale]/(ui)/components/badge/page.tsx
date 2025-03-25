'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { BasicBadges } from './basic-badge'
import { IconBadges } from './icon-badge'

const BadgePage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Badge'} />
      {/* Badge examples */}
      <BasicBadges />
      <IconBadges />
    </div>
  )
}

export default BadgePage
