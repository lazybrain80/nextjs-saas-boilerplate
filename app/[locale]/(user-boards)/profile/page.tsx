'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import { BoardHeader } from '@/design/features/user-board'
import { ProfileHeader } from './profile-header'
import {
  Card,
  CardContent,
  CardHeader
} from '@/design/components/ui'
import {
  IntroductionCard,
  TeamsCard,
  InputCard
} from './cards'
import * as Icons from '@/design/icons'


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
            <TeamsCard className='bg-white rounded-2xl shadow-lg p-4' />
          </div>
        </div>
        <div className='col-span-2'>
          <div className='grid grid-flow-col grid-cols-3 gap-6 mb-6'>
            <Card className='bg-white rounded-2xl shadow-lg p-4'>
              <div className='flex items-center py-2'>
                <div className='bg-blue-100 rounded-2xl h-12 w-12 flex items-center justify-center'>
                  <Icons.ListTodo className='text-blue-300' />
                </div>
                <div className='ml-4'>
                  <div className='text-xl font-bold'>{'3737'}</div>
                  <div className='text-slate-500'>{'Tasks Done'}</div>
                </div>
              </div>
            </Card>
            <Card className='bg-white rounded-2xl shadow-lg p-4'>
              <div className='flex items-center py-2'>
                <div className='bg-green-100 rounded-2xl h-12 w-12 flex items-center justify-center'>
                  <Icons.BookCheck className='text-green-300' />
                </div>
                <div className='ml-4'>
                  <div className='text-xl font-bold'>{'342'}</div>
                  <div className='text-slate-500'>{'Projects'}</div>
                </div>
              </div>
            </Card>
            <Card className='bg-white rounded-2xl shadow-lg p-4'>
              <div className='flex items-center py-2'>
                <div className='bg-red-100 rounded-2xl h-12 w-12 flex items-center justify-center'>
                  <Icons.Skull className='text-red-300' />
                </div>
                <div className='ml-4'>
                  <div className='text-xl font-bold'>{'487,423'}</div>
                  <div className='text-slate-500'>{'Kills'}</div>
                </div>
              </div>
            </Card>
          </div>
          <InputCard className='bg-white rounded-2xl shadow-lg p-4' />
        </div>
      </div>

    </div>
  )
}

export default ProfilePage