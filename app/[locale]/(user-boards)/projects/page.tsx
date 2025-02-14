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
import { ProjectCard } from './project-card'

const ProjectList = [
  {
    name: 'Mission 1',
    team: 'Jedi Team Alpha',
    progress: 50,
    isPublic: true,
    description: 'Secure the Galactic Senate',
    lastUpdated: '2 days ago',
    lastMessage: 'from Master Yoda'
  },
  {
    name: 'Mission 2',
    team: 'Jedi Team Beta',
    progress: 75,
    isPublic: false,
    description: 'Rescue the hostages on Naboo',
    lastUpdated: '3 days ago',
    lastMessage: 'from Obi-Wan Kenobi'
  },
  {
    name: 'Mission 3',
    team: 'Jedi Team Gamma',
    progress: 25,
    isPublic: true,
    description: 'Investigate Sith activity on Tatooine',
    lastUpdated: '5 days ago',
    lastMessage: 'from Anakin Skywalker'
  },
  {
    name: 'Mission 4',
    team: 'Jedi Team Delta',
    progress: 100,
    isPublic: false,
    description: 'Defend the Wookiee homeworld of Kashyyyk',
    lastUpdated: '1 week ago',
    lastMessage: 'from Mace Windu'
  },
  {
    name: 'Mission 5',
    team: 'Jedi Team Epsilon',
    progress: 0,
    isPublic: true,
    description: 'Escort the diplomats to Coruscant',
    lastUpdated: '2 weeks ago',
    lastMessage: 'from Ahsoka Tano'
  }
]

const TeamsPage = () => {
  const t = useTranslations('ProfilePage')
  return (
    <div className='flex-1 overflow-auto bg-slate-100 p-8'>
      {/* Page Header */}
      <BoardHeader title={'Projects'} />
      {/* Profile Header */}
      <ProfileHeader
        className='rounded-2xl'
      />
      <div className='flex items-center justify-between  mt-6'>
        <div className='flex items-center space-x-2'>
          <span
            className='text-3xl font-bold text-slate-900'
          >
            {'Projects'}
          </span>
          <span
            className='text-sm bg-slate-500 text-white w-8 h-6 rounded-full flex items-center justify-center'
          >
            {5}
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
      {/* Project Content */}
      <div className='grid grid-cols-1 gap-3 my-6'>
        {ProjectList.map((project, index) => (
          <ProjectCard
            key={index}
            className='bg-white rounded-2xl shadow-lg p-4'
            info={{...project}}
          />
        ))}
      </div>

    </div>
  )
}

export default TeamsPage