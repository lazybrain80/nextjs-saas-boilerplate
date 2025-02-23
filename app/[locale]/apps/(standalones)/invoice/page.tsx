'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import React from 'react'
import {
  BoardHeader,
} from '@/design/features/user-board'
import {
  Card,
} from '@/design/components/ui'
import * as Icons from '@/design/icons'
import { invoiceMockData, orderStatus, Invoice } from './common'
import { InvoiceListTable } from './list-table'

const InvoiceAppPage = () => {
  const t = useTranslations('InvoiceApp')
  const [totalInvoices, setTotalInvoices] = useState(0)
  const [pendingInvoices, setPendingInvoices] = useState(0)
  const [shippedInvoices, setShippedInvoices] = useState(0)
  const [completedInvoices, setCompletedInvoices] = useState(0)
  const [invoices, setInvoices] = useState(invoiceMockData)

  const handleSetInvoices: React.Dispatch<React.SetStateAction<Invoice[]>> = (newInvoices) => {
    setInvoices(newInvoices)
  }

  useEffect(() => {
    let pending = 0, shipped = 0, completed = 0
    invoices.forEach((invoice) => {
      switch (invoice.orderStatus) {
        case orderStatus.Pending:
          pending++
          break
        case orderStatus.Shipped:
          shipped++
          break
        case orderStatus.Completed:
          completed++
          break
      }
    })
    setTotalInvoices(invoices.length)
    setPendingInvoices(pending)
    setShippedInvoices(shipped)
    setCompletedInvoices(completed)
  }, [invoices])

  return (
    <div className='flex-1 overflow-auto bg-slate-100 p-8 space-y-6'>
      {/* Page Header */}
      <BoardHeader title={t('page_title')} />
      {/* Invoice overview Header */}
      <Card className='rounded-2xl shadow-lg h-[15%] bg-white flex items-center justify-center space-x-4 p-4'>
          <div className='flex items-center space-x-6 p-6 w-1/4 h-full bg-blue-100 rounded-3xl'>
            <Icons.ListTodo
              className='w-16 h-16 text-white bg-blue-300 rounded-full p-2'
            />
            <div>
              <div className='text-lg font-bold'>{'Total'}</div>
              <div className='text-2xl text-gray-500'>{`${totalInvoices} Invoices`}</div>
            </div>
          </div>
          <div className='flex items-center space-x-6 p-6 w-1/4 h-full bg-green-100 rounded-3xl'>
            <Icons.Package className='w-16 h-16 text-white bg-green-300 rounded-full p-2' />
            <div>
              <div className='text-lg font-bold'>{'Pending'}</div>
              <div className='text-2xl text-gray-500'>{`${pendingInvoices} Invoices`}</div>
            </div>
          </div>
          <div className='flex items-center space-x-6 p-6 w-1/4 h-full bg-yellow-100 rounded-3xl'>
            <Icons.Ship className='w-16 h-16 text-white bg-yellow-300 rounded-full p-2' />
            <div>
              <div className='text-lg font-bold'>{'Shipped'}</div>
              <div className='text-2xl text-gray-500'>{`${shippedInvoices} Invoices`}</div>
            </div>
          </div>
          <div className='flex items-center space-x-6 p-6 w-1/4 h-full bg-pink-100 rounded-3xl'>
            <Icons.CircleCheckBig className='w-16 h-16 text-white bg-pink-300 rounded-full p-2' />
            <div>
              <div className='text-lg font-bold'>{'Completed'}</div>
              <div className='text-2xl text-gray-500'>{`${completedInvoices} Invoices`}</div>
            </div>
          </div>
      </Card>
      {/* Invoice list table */}
      <InvoiceListTable
        className='bg-white rounded-2xl shadow-lg'
        invoices={invoices}
        setInvoices={handleSetInvoices}
      />
    </div>
  )
}

export default InvoiceAppPage