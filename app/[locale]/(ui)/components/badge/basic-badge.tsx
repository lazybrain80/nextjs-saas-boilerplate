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
          <DialogTitle>Badge Basic Sample Code</DialogTitle>
          <pre className="bg-slate-100 p-4 rounded-lg">
            {`
import { Badge } from '@/design/components'

<Badge variant="default">Default Badge</Badge>
<Badge variant="secondary">Secondary Badge</Badge>
<Badge variant="destructive">Destructive Badge</Badge>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const BasicBadges = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Basic Badges </div>
            <SampleCodeDialog />
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
