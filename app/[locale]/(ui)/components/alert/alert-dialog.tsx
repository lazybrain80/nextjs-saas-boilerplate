'use client'

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
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
} from '@/design/components/ui'
import * as Icons from '@/design/icons'


const SampleCodeDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Icons.Code className='w-5 h-5' />
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-5xl'>
        <DialogHeader>
          <DialogTitle>Alert Basic Sample Code</DialogTitle>
            <pre className='bg-slate-100 p-4 rounded-lg'>
                {`
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '@/design/components/ui'

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button>Very dangerous action</Button>
  </AlertDialogTrigger>
  <AlertDialogContent className='max-w-3xl'>
    <AlertDialogHeader>
      <AlertDialogTitle>
        Are you absolutely sure?
      </AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. 
        This will permanently delete your account and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <div className='flex justify-end space-x-4'>
      <AlertDialogCancel asChild>
        <Button>Cancel</Button>
      </AlertDialogCancel>
      <AlertDialogAction asChild>
        <Button>Yes, Do it</Button>
      </AlertDialogAction>
    </div>
  </AlertDialogContent>
</AlertDialog>
                `}
            </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const AlertDialogExample = () => {
  return (
    <Card className='rounded-2xl bg-white'>
      <CardHeader>
        <CardTitle>
          <div className='flex items-center justify-between'>
            <div> Alert Dialog </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className='px-6 bg-red-700 hover:bg-red-900 text-red-100'>Very dangerous action</Button>
          </AlertDialogTrigger>
          <AlertDialogContent className='max-w-3xl'>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialogDescription>
            </AlertDialogHeader>
            <div className='flex justify-end space-x-4'>
              <AlertDialogCancel asChild>
                <Button className='px-6 hover:bg-slate-300'>Cancel</Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button className='px-6 bg-red-700 hover:bg-red-900 text-red-100'>Yes, Do it</Button>
              </AlertDialogAction>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      </CardContent>
    </Card>
  )
}