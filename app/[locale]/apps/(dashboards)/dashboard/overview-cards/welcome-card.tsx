'use client'

import { useAuthClient } from '@/auth/provider'
import { UserMetaData } from '@/types'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  Button
} from '@/design/components'
import { cn } from '@/libs/utils'

export const WelcomeCard = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const authClient = useAuthClient()
  const { user_metadata } = authClient?.supaUser || {}
  const user = user_metadata as UserMetaData

  return (
    <Card className={cn(className)}>
      <CardHeader
        className='mt-2 ml-6'
      >
        <CardTitle
          className='text-2xl'
        >
          {`Welcome "${user.preferred_username}"`}
        </CardTitle>
        <CardDescription>{'Check all the statastics'}</CardDescription>
      </CardHeader>
      <CardContent
        className='ml-6'
      >
        <Button
          className='bg-blue-500 rounded-full w-52 mt-2'
        >
          Visit Now
        </Button>
      </CardContent>
    </Card>
  )
}