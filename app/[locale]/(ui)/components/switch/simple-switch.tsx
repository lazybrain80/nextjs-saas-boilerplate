'use client'

import React, { useState } from 'react'
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
  Switch,
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
          <pre className="bg-slate-100 p-4 rounded-lg mt-4">
            {`import { Switch } from '@/design/components'
<Switch
  checked={true}
  onCheckedChange={(checked) => 
    console.log('Switch is now:', checked ? 'Checked' : 'Unchecked')
  }
/>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const SimpleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = (checked: boolean) => {
    setIsChecked(checked)
    console.log('Switch is now:', checked ? 'Checked' : 'Unchecked')
  }

  return (
    <Card className="rounded-2xl bg-white">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Switch example </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-4">
          <span className="text-sm font-medium">Switch is {isChecked ? 'ON' : 'OFF'}</span>
          <Switch checked={isChecked} onCheckedChange={handleChange} className="bg-gray-200" />
        </div>
        <div className="mt-6">
          <h4 className="text-lg font-semibold">Examples:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <code>{`<Switch checked={true} />`}</code> - A switch that is always ON.
            </li>
            <li>
              <code>{`<Switch checked={false} />`}</code> - A switch that is always OFF.
            </li>
            <li>
              <code>{`<Switch onCheckedChange={(checked) => console.log(checked)} />`}</code> - A
              switch with a custom change handler.
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
