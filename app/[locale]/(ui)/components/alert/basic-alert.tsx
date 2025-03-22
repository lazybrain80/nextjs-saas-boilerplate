'use client'

import {
  Alert,
  AlertTitle,
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
          <Icons.Code className='w-5 h-5' />
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-3xl'>
        <DialogHeader>
          <DialogTitle>Alert Basic Sample Code</DialogTitle>
            <pre className='bg-slate-100 p-4 rounded-lg'>
                {`
import {
  Alert,
  AlertTitle
} from '@/design/components'

<Alert>
  <AlertTitle>Info Alert</AlertTitle>
</Alert>
<Alert variant='success'> {/* success, warning, error */}
  <AlertTitle>Success Alert</AlertTitle>
</Alert>
<Alert type={'outline'}>
  <AlertTitle>Info Alert</AlertTitle>
</Alert>
<Alert variant='success' type={'outline'}>
  <AlertTitle>Success Alert</AlertTitle>
</Alert>
                `}
            </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}


export const BasicAlert = () => {
  return (
    <Card className='rounded-2xl bg-white'>
      <CardHeader>
        <CardTitle>
          <div className='flex items-center justify-between'>
            <div> Basic Alert </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid grid-flow-col grid-cols-2 gap-6 my-6'>
          {/* Alert filled */}
          <Card className='border border-slate-500 col-span-1 rounded-2xl bg-white'>
            <CardHeader>
              <CardTitle>Alert filled</CardTitle>
            </CardHeader>
            <CardContent className='space-y-2'>
              <Alert>
                <AlertTitle>Info Alert</AlertTitle>
              </Alert>
              <Alert variant='success'>
                <AlertTitle>Success Alert</AlertTitle>
              </Alert>
              <Alert variant='warning'>
                <AlertTitle>Warning Alert</AlertTitle>
              </Alert>
              <Alert variant='error'>
                <AlertTitle>Error Alert</AlertTitle>
              </Alert>
            </CardContent>
          </Card>
          {/* Alert outlined */}
          <Card className='border border-slate-500 col-span-1 rounded-2xl bg-white'>
            <CardHeader>
              <CardTitle>Alert outlined</CardTitle>
            </CardHeader>
            <CardContent className='space-y-2'>
              <Alert type={'outline'}>
                <AlertTitle>Info Alert</AlertTitle>
              </Alert>
              <Alert variant='success' type={'outline'}>
                <AlertTitle>Success Alert</AlertTitle>
              </Alert>
              <Alert variant='warning' type={'outline'}>
                <AlertTitle>Warning Alert</AlertTitle>
              </Alert>
              <Alert variant='error' type={'outline'}>
                <AlertTitle>Error Alert</AlertTitle>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}