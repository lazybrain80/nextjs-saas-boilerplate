'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import { BoardHeader } from '@/design/features/user-board'
import { ProfileHeader } from './profile-header'
import {
  Card
} from '@/design/components/ui'
import {
  IntroductionCard
} from './cards'

const ProfilePage = () => {
  const t = useTranslations('ProfilePage')
  return (
    <div className='flex-1 overflow-auto bg-slate-100 p-8'>
      {/* Page Header */}
      <BoardHeader title={'Profile'} />
      {/* Profile Header */}
      <ProfileHeader
        className='rounded-2xl'
      />
      {/* Profile Content */}
      <div className='grid grid-flow-col grid-cols-3 gap-6 my-6'>
        <div className='col-span-1'>
          <div className='grid grid-flow-row gap-6'>
            <IntroductionCard className='bg-white rounded-2xl shadow-lg p-4' />
            
            <Card className='bg-white rounded-2xl shadow-lg p-4'>
              <h2 className='text-lg font-semibold mb-4'>{'introduction'}</h2>
              <p>{'2'}</p>
            </Card>
          </div>
        </div>
        <div className='col-span-2'>
          <div className='grid grid-flow-col grid-cols-3 gap-6 mb-6'>
            <Card className='bg-white rounded-2xl shadow-lg p-4'>
              <h2 className='text-lg font-semibold mb-4'>{'introduction'}</h2>
              <p>{'4'}</p>
            </Card>
            <Card className='bg-white rounded-2xl shadow-lg p-4'>
              <h2 className='text-lg font-semibold mb-4'>{'introduction'}</h2>
              <p>{'5'}</p>
            </Card>
            <Card className='bg-white rounded-2xl shadow-lg p-4'>
              <h2 className='text-lg font-semibold mb-4'>{'introduction'}</h2>
              <p>{'6'}</p>
            </Card>
          </div>
          <Card className='bg-white rounded-2xl shadow-lg p-4'>
            <h2 className='text-lg font-semibold mb-4'>{'introduction'}</h2>
            <p>{'3'}</p>
          </Card>
        </div>
      </div>

    </div>
  )
}

export default ProfilePage