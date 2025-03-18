'use client'

import {
  Alert,
  AlertTitle,
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@/design/components/ui'

export const BasicAlert = () => {
  return (
    <Card className='rounded-2xl bg-white'>
      <CardHeader>
        <CardTitle>Basic Alert</CardTitle>
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