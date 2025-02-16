'use client'

import { useState } from 'react'
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
import { set } from 'zod'

interface newNoteDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  appendNoteAction: (newNote: Note) => void
}

export const NewNoteDialog = ({ className, appendNoteAction, ...props }: newNoteDialogProps) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const resetDialog = () => {
    setTitle('')
    setContent('')
  }

  const handleSave = () => {
    const newNote: Note = {
      id: Math.floor(Math.random() * 1000),
      title,
      content,
      lastModified: new Date().toLocaleString()
    }
    resetDialog()
    appendNoteAction(newNote)
  }

  return (
    <div className={cn(className)}>
      <Dialog {...props}>
        <DialogTrigger asChild>
          <Button className='text-white bg-sky-500 hover:bg-sky-600 font-bold py-2 px-4 rounded-lg shadow-lg'>
            <Icons.Add className='mr-2' size={18} /> Add Note
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{'New'}</DialogTitle>
            <DialogClose />
          </DialogHeader>
          <Input
            className='w-full'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            className='w-full'
            placeholder='Content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button onClick={handleSave} className='text-white bg-sky-500 hover:bg-sky-600 font-bold py-2 px-4 rounded-lg'>
                <Icons.Save className='mr-2' /> {'Save'}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}