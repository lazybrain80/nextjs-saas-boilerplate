'use client'

import React from 'react'
import {
  BoardHeader,
} from '@/design/features/user-board'

const AlertPage = () => {

  return (
    <div className='flex-1 overflow-auto bg-slate-100 p-8 space-y-6'>
      {/* Page Header */}
      <BoardHeader title={'Scroll Area'} />
      {/* Scroll Area examples */}

    </div>
  )
}

export default AlertPage