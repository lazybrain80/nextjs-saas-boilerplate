'use client'

import React, { useState } from 'react'
import { cn } from '@/utils/cn'
import * as Icons from '@/design/icons'

interface FileImporterProps {
  className?: string
  onFileDropedAction: (file: File) => void
  children?: React.ReactNode
}

export const FileImporter = ({ className, onFileDropedAction, children }: FileImporterProps) => {
  const [file, setFile] = useState<File | null>(null)

  const fileInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
      onFileDropedAction(e.target.files[0])
    }
  }

  return (
    <div className={cn('p-6 space-y-4', className)}>
      <div className='border-2 border-dashed border-gray-300 p-10 text-center'>
        <Icons.Inbox className='mx-auto h-12 w-12 text-gray-400' />
        <input type='file' id='file-upload' className='hidden' onChange={fileInputChanged} />
        <label htmlFor='file-upload' className='cursor-pointer'>
          <p className='mt-2 text-sm text-gray-600'>Drag and drop your files here or <span className='text-blue-600 underline'>click to browse</span></p>
        </label>
        {file && <p className='text-green-500'>File uploaded: {file.name}</p>}
      </div>
      {children
        ? <div>{children}</div>
        : null
      }
    </div>
  );
}
