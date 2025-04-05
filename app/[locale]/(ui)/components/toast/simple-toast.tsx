'use client'

import { useState, useCallback, useRef } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
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
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Sample Code</DialogTitle>
          <pre className="bg-slate-100 p-4 rounded-lg">
            {`
import { ChipsInput } from '@/design/components'

<ChipsInput
  placeholder="Add a chip..."
  initialChips={['Example Chip 1', 'Example Chip 2']}
  showFooter
/>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const useToast = () => {
  const [open, setOpen] = useState(false)
  const timerRef = useRef(0)

  const [message, setMessage] = useState({ title: '', description: '' })

  const showToast = useCallback((title: string, description: string) => {
    setMessage({ title, description })
    setOpen(false)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      setOpen(true)
    }, 100)
  }, [])

  const ToastComponent = (
    <>
      <Toast animation={'primary'} open={open} onOpenChange={setOpen}>
        <div className="flex flex-col items-start">
          <ToastTitle>{message.title}</ToastTitle>
          <ToastDescription>{message.description}</ToastDescription>
        </div>
        <ToastClose />
        <ToastAction altText="Undo">Undo</ToastAction>
      </Toast>
      <ToastViewport />
    </>
  )

  return { showToast, ToastComponent }
}

export const SimpleToast = () => {
  const { showToast, ToastComponent } = useToast()

  return (
    <ToastProvider swipeDirection={'right'} duration={3000}>
      <Card className="rounded-2xl bg-white">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center justify-between">
              <div> Toast example </div>
              <SampleCodeDialog />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center space-x-4">
            <Button onClick={() => showToast('Success!', 'Your action was successful.')}>
              Show Toast
            </Button>
          </div>
        </CardContent>
      </Card>
      {ToastComponent}
    </ToastProvider>
  )
}
