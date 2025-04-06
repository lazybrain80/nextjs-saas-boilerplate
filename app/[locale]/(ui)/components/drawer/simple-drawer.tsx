'use client'

import { useState } from 'react'
import { cn } from '@/utils/cn'
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
  Drawer,
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
import { Drawer } from '@/design/components'

<Drawer open={showDrawer} side={side} closeAction={closeDrawer}>
  <div>Drawer</div>
</Drawer>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

interface DrawerProps {
  side: 'left' | 'right' | 'top' | 'bottom'
}

const ConfigurableDrawer = ({ side }: DrawerProps) => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false)
  const closeDrawer = () => {
    setShowDrawer(false)
  }

  const buttonColor = {
    left: 'bg-blue-500',
    right: 'bg-green-500',
    top: 'bg-yellow-500',
    bottom: 'bg-red-500',
  }[side]

  return (
    <>
      <Button
        aria-label={`Open ${side} drawer`}
        className={cn('h-18 w-18 rounded-full text-white shadow-lg', buttonColor)}
        onClick={() => setShowDrawer(true)}
      >
        Open - {side.charAt(0).toUpperCase() + side.slice(1)} Drawer
      </Button>
      <Drawer open={showDrawer} side={side} closeAction={closeDrawer}>
        <div>{side.charAt(0).toUpperCase() + side.slice(1)} Drawer</div>
      </Drawer>
    </>
  )
}

export const DrawerExamples = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Drawer Examples </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-4">
          <ConfigurableDrawer side="left" />
          <ConfigurableDrawer side="right" />
          <ConfigurableDrawer side="top" />
          <ConfigurableDrawer side="bottom" />
        </div>
      </CardContent>
    </Card>
  )
}
