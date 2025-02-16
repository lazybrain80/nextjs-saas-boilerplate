'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/libs/utils'
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
} from '@/design/components/ui'
import * as Icons from '@/design/icons'
import { Note } from '../common'


interface deleteNoteDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  folderId : number
  noteId: number
  deleteNoteAction: (folderId : number, noteId: number) => void
}

export const DeleteNoteDialog = ({ className, folderId, noteId, deleteNoteAction, ...props }: deleteNoteDialogProps) => {

  const handleDelete = () => {
    deleteNoteAction(folderId, noteId)
  }

  return (
    <div className={cn(className)}>
      <Dialog {...props}>
        <DialogTrigger asChild>
          <Button className='bg-slate-100 hover:bg-slate-300 text-red-500 hover:text-red-600 font-bold rounded-lg'>
            <Icons.Trash2 />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{'New'}</DialogTitle>
            <DialogClose />
          </DialogHeader>
          <div className='py-4'>
            <p>Are you sure you want to delete this note?</p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                className='bg-slate-100 hover:bg-slate-300 text-red-500 hover:text-red-600 font-bold py-2 px-4 rounded-lg'
                onClick={handleDelete}
              >
                <Icons.Save className='mr-2' /> {'Delete'}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}