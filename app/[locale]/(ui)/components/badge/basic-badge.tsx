'use client'

import { Card, CardHeader, CardTitle, CardContent, Badge } from '@/design/components'

export const BasicBadges = () => {
  return (
    <Card className="rounded-2xl bg-white">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Basic Badges </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-4">
          <Badge variant="default">Default Badge</Badge>
          <Badge variant="secondary">Secondary Badge</Badge>
          <Badge variant="destructive">Destructive Badge</Badge>
          <Badge variant="outline">Outline Badge</Badge>
          <Badge variant="success">Success Badge</Badge>
          <Badge variant="danger">Danger Badge</Badge>
          <Badge variant="info">Info Badge</Badge>
        </div>
      </CardContent>
    </Card>
  )
}
