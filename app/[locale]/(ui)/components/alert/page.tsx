'use client'

import React from 'react'
import {
  BoardHeader,
} from '@/design/features/user-board'
import {
  Alert,
  AlertTitle,
  AlertDescription,
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@/design/components/ui'

const AlertPage = () => {

  return (
    <div className='flex-1 overflow-auto bg-slate-100 p-8 space-y-6'>
      {/* Page Header */}
      <BoardHeader title={'Alert'} />
      {/* Alert examples */}
      <Card
        className='rounded-2xl bg-white'
      >
        <CardHeader>
          <CardTitle>Alert filled</CardTitle>
        </CardHeader>
        <CardContent className='space-y-2'>
          <Alert>
            <AlertTitle>Alert Title</AlertTitle>
            <AlertDescription>Alert description.</AlertDescription>
          </Alert>
          <Alert variant='success'>
            <AlertTitle>Success Alert</AlertTitle>
            <AlertDescription>Success alert description.</AlertDescription>
          </Alert>
          <Alert variant='warning'>
            <AlertTitle>Warning Alert</AlertTitle>
            <AlertDescription>Warning alert description.</AlertDescription>
          </Alert>
          <Alert variant='error'>
            <AlertTitle>Error Alert</AlertTitle>
            <AlertDescription>Warning alert description.</AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card
        className='rounded-2xl bg-white'
      >
        <CardHeader>
          <CardTitle>Alert outlined</CardTitle>
        </CardHeader>
        <CardContent className='space-y-2'>
          <Alert type={'outline'}>
            <AlertTitle>Alert Title</AlertTitle>
            <AlertDescription>Alert description.</AlertDescription>
          </Alert>
          <Alert variant='success' type={'outline'}>
            <AlertTitle>Success Alert</AlertTitle>
            <AlertDescription>Success alert description.</AlertDescription>
          </Alert>
          <Alert variant='warning' type={'outline'}>
            <AlertTitle>Warning Alert</AlertTitle>
            <AlertDescription>Warning alert description.</AlertDescription>
          </Alert>
          <Alert variant='error' type={'outline'}>
            <AlertTitle>Error Alert</AlertTitle>
            <AlertDescription>Warning alert description.</AlertDescription>
          </Alert>
        </CardContent>
      </Card>
      
    </div>
  )
}

export default AlertPage