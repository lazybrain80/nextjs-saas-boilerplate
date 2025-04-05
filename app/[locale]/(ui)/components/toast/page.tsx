'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { SimpleToast } from './simple-toast'
import { SimpleNotifications } from './notification-toast'
const ToastExamplePage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Toast'} />
      {/* Toast examples */}
      <SimpleToast />
      <SimpleNotifications />
    </div>
  )
}

export default ToastExamplePage
