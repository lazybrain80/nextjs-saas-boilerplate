'use client'

import {
  Alert,
  AlertTitle,
  AlertDescription,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
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
          <DialogTitle>Alert Description Sample Code</DialogTitle>
          <pre className="bg-slate-100 p-4 rounded-lg">
            {`
import {
  Alert,
  AlertTitle,
  AlertDescription
} from '@/design/components'

<Alert>
  <AlertTitle>Info Alert</AlertTitle>
  <AlertDescription>Info alert description.</AlertDescription>
</Alert>
<Alert variant='success'> {/* success, warning, error */}
  <AlertTitle>Success Alert</AlertTitle>
  <AlertDescription>Success alert description.</AlertDescription>
</Alert>
<Alert type={'outline'}>
  <AlertTitle>Info Alert</AlertTitle>
  <AlertDescription>Info alert description.</AlertDescription>
</Alert>
<Alert variant='success' type={'outline'}>
  <AlertTitle>Success Alert</AlertTitle>
  <AlertDescription>Success alert description.</AlertDescription>
</Alert>
                `}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const DescAlert = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Description Alert </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-flow-col grid-cols-2 gap-6 my-6">
          {/* Alert filled */}
          <Card className="border border-slate-500 col-span-1 rounded-2xl bg-white">
            <CardHeader>
              <CardTitle>Alert filled</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Alert>
                <AlertTitle>Info Alert</AlertTitle>
                <AlertDescription>Info alert description.</AlertDescription>
              </Alert>
              <Alert variant="success">
                <AlertTitle>Success Alert</AlertTitle>
                <AlertDescription>Success alert description.</AlertDescription>
              </Alert>
              <Alert variant="warning">
                <AlertTitle>Warning Alert</AlertTitle>
                <AlertDescription>Warning alert description.</AlertDescription>
              </Alert>
              <Alert variant="error">
                <AlertTitle>Error Alert</AlertTitle>
                <AlertDescription>Warning alert description.</AlertDescription>
              </Alert>
            </CardContent>
          </Card>
          {/* Alert outlined */}
          <Card className="border border-slate-500 col-span-1 rounded-2xl bg-white">
            <CardHeader>
              <CardTitle>Alert outlined</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Alert type={'outline'}>
                <AlertTitle>Info Alert</AlertTitle>
                <AlertDescription>Info Alert description.</AlertDescription>
              </Alert>
              <Alert variant="success" type={'outline'}>
                <AlertTitle>Success Alert</AlertTitle>
                <AlertDescription>Success alert description.</AlertDescription>
              </Alert>
              <Alert variant="warning" type={'outline'}>
                <AlertTitle>Warning Alert</AlertTitle>
                <AlertDescription>Warning alert description.</AlertDescription>
              </Alert>
              <Alert variant="error" type={'outline'}>
                <AlertTitle>Error Alert</AlertTitle>
                <AlertDescription>Warning alert description.</AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}
