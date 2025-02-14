'use client'

import { cn } from '@/libs/utils'
import {
  Card,
  Button,
  Progress,
} from '@/design/components/ui'
import * as Icons from '@/design/icons'

interface ProjectProps {
  name: string
  team: string
  progress: number
  isPublic: boolean
  description: string
  lastUpdated: string
  lastMessage: string
}

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  info: ProjectProps
}

export const ProjectCard = ({ className, info, ...props }: ProjectCardProps) => {
  const { name, team, progress, isPublic, description, lastUpdated, lastMessage } = info
  return (
    <Card className={cn(className)}>
      <div className='flex items-center'>
        <div className='text-xl font-bold'>{name}</div>
        <div className='ml-4 text-lg text-gray-500'>{team}</div>
        <Button
          className={cn('h-6 ml-4 rounded-full',
            isPublic ? 'border bg-white text-slate-700 border-slate-700' : 'bg-red-500 text-white hover:bg-red-300'
          )}
          variant={isPublic ? 'default' : 'secondary'}
          size='sm'
        >
          {isPublic ? 'Public' : 'Private'}
        </Button>
        <Progress className='w-1/4 ml-auto' value={progress} color='bg-green-500' />
      </div>
      <div className='mt-2 text-gray-700'>{description}</div>
      <div className='flex items-center mt-2'>
        <Icons.Dot className='mr-1 text-slate-500' />
        <span className='text-sm text-gray-500' >{lastUpdated}</span>
        <div className='ml-2 text-sm text-gray-500'>{lastMessage}</div>
      </div>
    </Card>
  )
}