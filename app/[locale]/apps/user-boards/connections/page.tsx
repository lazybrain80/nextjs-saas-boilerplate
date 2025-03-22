'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import {
  BoardHeader,
  ProfileHeader
} from '@/design/features/user-board'
import {
  Input,
  Button
} from '@/design/components'
import * as Icons from '@/design/icons'
import { ConnectionCard } from './connection-card'

const ConnectionList = [
  {
    imageUrl: '/images/connections/image_0.jpg',
    title: 'John Doe',
    createdAt: 'Joined 2 days ago'
  },
  {
    imageUrl: '/images/connections/image_0.jpg',
    title: 'Jane Doe',
    createdAt: 'Joined 2 days ago'
  },
  {
    imageUrl: '/images/connections/image_0.jpg',
    title: 'John Doe',
    createdAt: 'Joined 2 days ago'
  },
  {
    imageUrl: '/images/connections/image_0.jpg',
    title: 'Jane Doe',
    createdAt: 'Joined 2 days ago'
  },
  {
    imageUrl: '/images/connections/image_0.jpg',
    title: 'John Doe',
    createdAt: 'Joined 2 days ago'
  },
  {
    imageUrl: '/images/connections/image_0.jpg',
    title: 'Jane Doe',
    createdAt: 'Joined 2 days ago'
  },
  {
    imageUrl: '/images/connections/image_0.jpg',
    title: 'John Doe',
    createdAt: 'Joined 2 days ago'
  },
  {
    imageUrl: '/images/connections/image_0.jpg',
    title: 'Jane Doe',
    createdAt: 'Joined 2 days ago'
  },
  {
    imageUrl: '/images/connections/image_0.jpg',
    title: 'John Doe',
    createdAt: 'Joined 2 days ago'
  },
  {
    imageUrl: '/images/connections/image_0.jpg',
    title: 'Jane Doe',
    createdAt: 'Joined 2 days ago'
  }
]

const TeamsPage = () => {
  const t = useTranslations('ProfilePage')
  return (
    <div className='flex-1 overflow-auto bg-slate-100 p-8'>
      {/* Page Header */}
      <BoardHeader title={'Connections'} />
      {/* Profile Header */}
      <ProfileHeader
        className='rounded-2xl'
      />
      <div className='flex items-center justify-between  mt-6'>
        <div className='flex items-center space-x-2'>
          <span
            className='text-3xl font-bold text-slate-900'
          >
            {'Connections'}
          </span>
          <span
            className='text-sm bg-slate-500 text-white w-8 h-6 rounded-full flex items-center justify-center'
          >
            {15}
          </span>
        </div>
        <div className='flex items-center space-x-2'>
          <Input
            type='text'
            placeholder={('search')}
            className='border rounded-full'
          />
          <Button className='p-2 rounded-full bg-slate-100 hover:bg-slate-300'>
            <Icons.Search className='w-5 h-5 text-slate-500' />
          </Button>
        </div>
      </div>
      {/* Profile Content */}
      <div className='grid grid-flow-col grid-cols-4 grid-rows-2 gap-6 my-6'>
        {ConnectionList.map((connection, index) => (
          <ConnectionCard
            key={index}
            className='col-span-1 rouunded-3xl shadow-xl'
            info={connection}
          />
        ))}
      </div>

    </div>
  )
}

export default TeamsPage