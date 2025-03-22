'use client'
import { CustomUserAvatar, UserAvatarProps } from './custom-avatar'

export const SimpleProfile = ({ user }: UserAvatarProps) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <CustomUserAvatar user={user} size="h-20 w-20" shape="circle" />
      <div>
        <div className="text-lg font-semibold">{user.name}</div>
        <div className="text-sm text-gray-500">User Profile</div>
      </div>
    </div>
  )
}
