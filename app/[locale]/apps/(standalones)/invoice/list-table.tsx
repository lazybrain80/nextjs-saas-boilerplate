'use client'

import { cn } from '@/libs/utils'
import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Button,
  Input,
} from '@/design/components/ui'

import * as Icons from '@/design/icons'
import { Invoice, orderStatus } from './common'
import { ViewInvoiceDialog } from './dialogs'

interface InvoiceListTableProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  invoices: Invoice[]
}

const InvoiceStatus = ({ status }: { status: string }) => {
  return (
    <span
      className={cn(
        'px-4 py-1 text-sm leading-5 font-semibold rounded-2xl',
        {
          'bg-green-100 text-green-800': status === orderStatus.Pending,
          'bg-yellow-100 text-yellow-800': status === orderStatus.Shipped,
          'bg-blue-100 text-blue-800': status === orderStatus.Completed,
          'bg-purple-100 text-purple-800': status === orderStatus.Delivered,
          'bg-red-100 text-red-800': status === orderStatus.Canceled,
          'bg-orange-100 text-orange-800': status === orderStatus.Refunded,
          'bg-teal-100 text-teal-800': status === orderStatus.Paid,
        }
      )}
    >
      {status}
    </span>
  )
}

export const InvoiceListTable = ({ className, invoices, ...props }: InvoiceListTableProps) => {
  const t = useTranslations('InvoiceApp')

  return (
    <div className={cn(className)}>
      <div className='p-6 border-b'>
        <div className='flex justify-between items-center'>
          <h3 className='text-lg font-semibold'>{('Invoice list')}</h3>
          <Button
            className='bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 rounded-3xl'
            onClick={() => console.log('Add invoice')}
          >
            Add Invoice
          </Button>
        </div>
      </div>
      <div className='overflow-x-auto'>
        <Table className='w-full'>
          <TableHeader className='bg-gray-50'>
            <TableRow>
              <TableHead className='px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase'>
                <Input className='w-6 h-6' type='checkbox' />
              </TableHead>
              <TableHead className='px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase'>{('Bill from')}</TableHead>
              <TableHead className='px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase'>{('Bill to')}</TableHead>
              <TableHead className='px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase'>{('Total cost')}</TableHead>
              <TableHead className='px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase'>{('Status')}</TableHead>
              <TableHead className='px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase'>{('Actions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='divide-y divide-gray-200'>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className='px-6 py-4'>
                  <Input className='w-6 h-6' type='checkbox' />
                </TableCell>
                <TableCell className='px-6 py-4'>
                  {invoice.billFrom?.name}
                </TableCell>
                <TableCell className='px-6 py-4'>
                  {invoice.billTo?.name}
                </TableCell>
                <TableCell className='px-6 py-4'>
                    {invoice.orderItems.reduce((total, item) => total + item.quantity * item.price, 0)}
                </TableCell>
                <TableCell className='px-6 py-4'>
                  <InvoiceStatus status={invoice.orderStatus} />
                </TableCell>
                <TableCell className='px-6 py-4'>
                  <ViewInvoiceDialog invoice={invoice} />
                  
                  <Button className='bg-white text-gray-600 hover:text-gray-800 hover:bg-slate-300'>
                    <Icons.Edit2 size={18} />
                  </Button>
                  <Button className='bg-white text-red-600 hover:text-red-800 hover:bg-slate-300'>
                    <Icons.Trash2 size={18} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}