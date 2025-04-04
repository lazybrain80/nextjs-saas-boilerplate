'use client'

import React from 'react'
import {
  BoardHeader,
} from '@/design/features/user-board'
import { BasicAlert } from './basic-alert'
import { DescAlert } from './desc-alert'
import { AlertDialogExample } from './alert-dialog'

const AlertPage = () => {

  return (
    <div className='flex-1 overflow-auto bg-slate-100 p-8 space-y-6'>
      {/* Page Header */}
      <BoardHeader title={'Alert'} />
      {/* Alert examples */}
      <BasicAlert />
      <DescAlert />
      <AlertDialogExample />
    </div>
  )
}

export default AlertPage