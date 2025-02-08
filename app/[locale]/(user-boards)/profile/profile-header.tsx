'use client'

import { cn } from '@/libs/utils'
import Image from 'next/image'
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from '@/design/components/ui'

export const ProfileHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {

  return (
  <Card className={cn(className)}>
    <CardHeader
      className='relative h-56 bg-[url(/images/profile/header-bg.png)] bg-cover bg-no-repeat'
    >
      <Image
        src='/images/profile/user-avatar-0.svg'
        width={100}
        height={100}
        className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-32 h-32 rounded-full border-4 border-white'
        alt='Profile Picture'
      />
    </CardHeader>
    <CardContent
      className='h-48 bg-white rounded-2xl shadow-xl p-4'
    >
      

      
    </CardContent>
  </Card>
  )
}