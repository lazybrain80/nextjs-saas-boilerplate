'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import { BoardHeader } from '@/design/features/user-board'
import { ProfileHeader } from './profile-header'

const ProfilePage = () => {
  const t = useTranslations('ProfilePage')
  return (
    <div className='flex-1 overflow-auto bg-slate-100 p-8'>
      {/* Header */}
      <BoardHeader title={'Profile'} />
      <div className='grid grid-cols-1 gap-6 mb-8'>
        <ProfileHeader
          className='rounded-2xl'
        />
      </div>
    </div>
  )
}

export default ProfilePage