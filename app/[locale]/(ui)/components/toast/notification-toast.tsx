'use client'

import { Card, CardHeader, CardTitle, CardContent, Button } from '@/design/components'
import { Notifications, useNotification } from './notification'

const NotificationExample = () => {
  const notification = useNotification()
  return (
    <div className="flex items-center justify-center space-x-4">
      <Button
        onClick={() => {
          notification.success('Notification added')
        }}
      >
        Show Notification
      </Button>
    </div>
  )
}

export const SimpleNotifications = () => {
  return (
    <Notifications position={'bottom-left'}>
      <Card className="rounded-2xl bg-white">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center justify-between">
              <div> Notifications example </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <NotificationExample />
        </CardContent>
      </Card>
    </Notifications>
  )
}
