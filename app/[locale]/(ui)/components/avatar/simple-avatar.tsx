'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/design/components'
import { CustomUserAvatar, UserAvatarProps } from './custom-avatar'

export const SimpleAvatar = ({ user }: UserAvatarProps) => {
  return (
    <Card className="rounded-2xl bg-white">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Avatar Basic example </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-8">
          <div>
            <div className="border p-4">
              <div className="font-semibold mb-2">Round Rect Avatars</div>
              <div className="flex items-center justify-center space-x-4">
                <CustomUserAvatar user={user} size="h-20 w-20" shape="round-rect" />
                <CustomUserAvatar user={user} size="h-16 w-16" shape="round-rect" />
                <CustomUserAvatar
                  user={{ ...user, avatar_url: '' }}
                  size="h-12 w-12"
                  shape="round-rect"
                />
                <CustomUserAvatar
                  user={{ ...user, name: 'Anonymous' }}
                  size="h-8 w-8"
                  shape="round-rect"
                />
                <CustomUserAvatar
                  user={{ ...user, name: 'Anonymous' }}
                  size="h-6 w-6"
                  shape="round-rect"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="border p-4">
              <div className="font-semibold mb-2">Circle Avatars</div>
              <div className="flex items-center justify-center space-x-4">
                <CustomUserAvatar user={user} size="h-20 w-20" shape="circle" />
                <CustomUserAvatar user={user} size="h-16 w-16" shape="circle" />
                <CustomUserAvatar
                  user={{ ...user, avatar_url: '' }}
                  size="h-12 w-12"
                  shape="circle"
                />
                <CustomUserAvatar
                  user={{ ...user, name: 'Anonymous' }}
                  size="h-8 w-8"
                  shape="circle"
                />
                <CustomUserAvatar
                  user={{ ...user, name: 'Anonymous' }}
                  size="h-6 w-6"
                  shape="circle"
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
