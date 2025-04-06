'use client'

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Button,
} from '@/design/components'
import * as Icons from '@/design/icons'

const SampleCodeDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Icons.Code className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Icon Badges Sample Code</DialogTitle>
          <pre className="bg-slate-100 p-4 rounded-lg">
            {`
import { Badge } from '@/design/components'
import * as Icons from '@/design/icons'

<Badge icon={<Icons.Add />} variant="default">
  Plus Badge
</Badge>
<Badge icon={<Icons.BadgeCheck />} variant="secondary">
  Check Badge
</Badge>
<Badge icon={<Icons.BadgeInfo />} variant="destructive">
  Destructive Badge
</Badge>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const IconBadges = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Icon Badges </div>
            <SampleCodeDialog />
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
