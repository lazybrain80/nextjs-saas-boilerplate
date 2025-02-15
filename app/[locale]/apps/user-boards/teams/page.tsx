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
} from '@/design/components/ui'
import * as Icons from '@/design/icons'
import { MemberCard } from './member-card'

const MemberList = [
  {
    name: 'Master Yoda',
    tagid: '@master_yoda',
    avatar_url: '/images/avatars/avatar_jedi_yoda.svg',
    followed: Math.random() < 0.5
  },
  {
    name: 'Luke Skywalker',
    tagid: '@luke_skywalker',
    avatar_url: '/images/avatars/avatar_luke_skywalker.svg',
    followed: Math.random() < 0.5
  },
  {
    name: 'Darth Vader',
    tagid: '@darth_vader',
    avatar_url: '/images/avatars/avatar_vader.svg',
    followed: Math.random() < 0.5
  },
  {
    name: 'Princess Leia',
    tagid: '@princess_leia',
    avatar_url: '/images/avatars/avatar_princess_leia.svg',
    followed: Math.random() < 0.5
  },
  {
    name: 'Han Solo',
    tagid: '@han_solo',
    avatar_url: '/images/avatars/avatar_han_solo.svg',
    followed: Math.random() < 0.5
  }
]

const TeamsPage = () => {
  const t = useTranslations('ProfilePage')
  return (
    <div className='flex-1 overflow-auto bg-slate-100 p-8'>
      {/* Page Header */}
      <BoardHeader title={'Teams'} />
      {/* Profile Header */}
      <ProfileHeader
        className='rounded-2xl'
      />
      <div className='flex items-center justify-between  mt-6'>
        <div className='flex items-center space-x-2'>
          <span
            className='text-3xl font-bold text-slate-900'
          >
            {'Teams'}
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
      <div className='grid grid-flow-col grid-cols-4 grid-rows-2 gap-3 my-6'>
        {MemberList.map((member, index) => (
          <MemberCard
            key={index}
            className='col-span-1 row-sp bg-white rounded-2xl shadow-lg p-4'
            info={{
              name: member.name,
              tagid: member.tagid,
              avatar_url: member.avatar_url,
              followed: member.followed
            }}
          />
        ))}
      </div>

    </div>
  )
}

export default TeamsPage