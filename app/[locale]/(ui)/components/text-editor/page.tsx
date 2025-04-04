'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { SimpleTextEditor } from './simple-text-editor'
const TextEditorExamplePage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Text Editor'} />
      {/* Text Editor examples */}
      <SimpleTextEditor />
    </div>
  )
}

export default TextEditorExamplePage
