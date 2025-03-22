'use client'

import React, { useEffect, useState } from 'react'
import { BoardHeader, BoardPage } from '@/design/features/user-board'
import { UserMetaData } from '@/types'
import { Card, CardHeader, CardTitle, CardContent } from '@/design/components'

import { SimpleAvatar } from './simple-avatar'
import { SimpleProfile } from './simple-profile'

const AvatarPage = () => {
  const [user, setUser] = useState<UserMetaData | null>(null)

  useEffect(() => {
    fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(data => {
        const userData = data.results[0]
        setUser({
          name: `${userData.name.first} ${userData.name.last}`,
          avatar_url: userData.picture.large,
        })
      })
  }, [])

  return (
    <BoardPage>
      {/* Page Header */}
      <BoardHeader title={'Avatar'} />
      {/* Avatar examples */}
      <Card className="rounded-2xl bg-white">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center justify-between">
              <div> Avatar example </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {user && (
            <div className="space-y-4">
              {/* Profile example */}
              <SimpleProfile user={user} />
            </div>
          )}
        </CardContent>
      </Card>

      {user && (
        <div className="space-y-4">
          <SimpleAvatar user={user} />
        </div>
      )}
    </BoardPage>
  )
}

export default AvatarPage
