'use client'

import { Card, CardHeader, CardTitle, CardContent, Button } from '@/design/components'
import { Notifications, useNotification } from './notification'

interface NotificationExampleProps {
  title: string
}

const NotificationExample = ({ title }: NotificationExampleProps) => {
  const notification = useNotification()
  return (
    <div className="flex items-center justify-center space-x-4">
      <label className="w-48 text-sm font-semibold text-gray-700">{title}</label>
      <Button
        onClick={() => {
          notification.success('Success toast added')
        }}
      >
        Success
      </Button>
      <Button
        onClick={() => {
          notification.error('error toast added')
        }}
      >
        Error
      </Button>
    </div>
  )
}

export const CustomToast = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Custom toast example </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Notifications position={'bottom-right'}>
            <NotificationExample title={'Bottom-right toast'} />
          </Notifications>
          <Notifications position={'bottom-left'}>
            <NotificationExample title={'Bottom-left toast'} />
          </Notifications>
          <Notifications position={'top-right'}>
            <NotificationExample title={'Top-right toast'} />
          </Notifications>
          <Notifications position={'top-left'}>
            <NotificationExample title={'Top-left toast'} />
          </Notifications>
        </div>
      </CardContent>
    </Card>
  )
}
