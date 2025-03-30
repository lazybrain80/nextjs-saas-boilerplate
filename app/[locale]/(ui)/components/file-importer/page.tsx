'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { SimpleFileImporter } from './simple-file-importer'

const AlertPage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'File Importer'} />
      {/* File Importer examples */}
      <SimpleFileImporter />
    </div>
  )
}

export default AlertPage
