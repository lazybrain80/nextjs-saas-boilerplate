'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/libs/utils'
import { useTranslations } from 'next-intl'
import {
  Dialog,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  Button,
  Input,
  Textarea,
} from '@/design/components/ui'
import * as Icons from '@/design/icons'

interface newEventDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onCloseAction: () => void
}

export const NewEventDialog = ({ className, open, onCloseAction, ...props }: newEventDialogProps) => {
  return (
    <div className={cn(className)}>
      <Dialog open={open} {...props}>
        <DialogContent
          enableClose={false}
        >
          <DialogHeader>
            <div className='flex items-center justify-between'>
              <DialogTitle>New Event</DialogTitle>
              <DialogClose onClick={() => onCloseAction()}>
                <Icons.Close />
              </DialogClose>
            </div>
          </DialogHeader>
          <Input placeholder="Event Name" />
          <Textarea placeholder="Event Description" />
          <DialogFooter>
            <Button>Save</Button>
            <Button onClick={() => onCloseAction()}>Cancel</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}