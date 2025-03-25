'use client'

import { Card, CardHeader, CardTitle, CardContent, Badge } from '@/design/components'
import * as Icons from '@/design/icons'

export const IconBadges = () => {
  return (
    <Card className="rounded-2xl bg-white">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Icon Badges </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-4">
          <Badge icon={<Icons.Add />} variant="default">
            Plus Badge
          </Badge>
          <Badge icon={<Icons.BadgeCheck />} variant="secondary">
            Check Badge
          </Badge>
          <Badge icon={<Icons.BadgeInfo />} variant="destructive">
            Destructive Badge
          </Badge>
          <Badge icon={<Icons.Billing />} variant="outline">
            Outline Badge
          </Badge>
          <Badge icon={<Icons.Check />} variant="success">
            Success Badge
          </Badge>
          <Badge icon={<Icons.Crown />} variant="danger">
            Danger Badge
          </Badge>
          <Badge icon={<Icons.Mail />} variant="info">
            Info Badge
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
