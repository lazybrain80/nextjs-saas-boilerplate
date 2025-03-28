'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { SimpleChipInput } from './simple-chips-input'
import { StyledChipInput } from './styled-chips-input'

const AlertPage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Chips Input'} />
      {/* Chips Input examples */}
      <SimpleChipInput />
      <StyledChipInput />
    </div>
  )
}

export default AlertPage
