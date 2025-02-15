'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import {
  BoardHeader,
} from '@/design/features/user-board'



const NotesPage = () => {
  const t = useTranslations('ProfilePage')
  return (
    <div className='flex-1 overflow-auto bg-slate-100 p-8'>
      {/* Page Header */}
      <BoardHeader title={'Notes'} />
      {/* Profile Header */}
      

    </div>
  )
}

export default NotesPage