'use client'

import { cn } from '@/libs/utils'
import {
  Card,
  Button,
  UserAvatar
} from '@/design/components'

interface MemberProps {
  name: string
  tagid: string
  avatar_url: string
  followed: boolean
}

interface MemberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  info: MemberProps
}

export const MemberCard = ({ className, info, ...props }: MemberCardProps) => {
  const { name, tagid, avatar_url, followed } = info
  return (
    <Card className={cn(className)}>
      <div className='flex items-center'>
        <UserAvatar
          className='h-16 w-16'
          user={{
            name,
            avatar_url
          }}
        />
        <div
          className=''
        >
          <div className='ml-4 text-xl font-bold'>{name}</div>
          <div className='ml-4 text-lg text-gray-500'>{tagid}</div>
        </div>
        <Button
          className={cn('w-1/3 ml-auto rounded-full',
            followed ? 'bg-gray-500 text-white' : 'bg-cyan-500 text-white hover:bg-cyan-300'
          )}
          variant={followed ? 'default' : 'secondary'}
          size='sm'
        >
          {followed ? 'Followed' : 'Follow'}
        </Button>
      </div>
    </Card>
  )
}