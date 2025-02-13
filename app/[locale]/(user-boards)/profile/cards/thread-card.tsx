'use client'

import { cn } from '@/libs/utils'
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Button,
  Input
} from '@/design/components/ui'
import {
  UserAvatar
} from '@/design/components'
import * as Icons from '@/design/icons'


export const ThreadCard = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const cardData = {
    name: 'Jedi Master',
    avatar_url: '/images/avatars/avatar_3.svg',
    created_at: '2h ago',
    content: 'Hello there!'
  }
  const { name, avatar_url, created_at, content } = cardData
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <div className='flex items-center'>
          <UserAvatar
            className='h-16 w-16'
            user={{
              name,
              avatar_url
            }}
          />
          <span className='ml-4 text-xl font-bold'>{name}</span>
          <Icons.Dot className='ml-2 text-slate-500' />
          <span className='text-slate-500'>{created_at}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className='text-xl'>{content}</div>
      </CardContent>
      <CardFooter
        className='p-4 border-t border-slate-200'
      >
        <div className='flex space-x-4 items-center w-full'>
          <UserAvatar
            className='h-8 w-8'
            user={{
              name,
              avatar_url
            }}
          />
          <Input
            className='w-full'
            placeholder='Write a comment...'
          />
          <Button
            className='rounded-2xl bg-blue-500 text-white'
          >
            Comment
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}