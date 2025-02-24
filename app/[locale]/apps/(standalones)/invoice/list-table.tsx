'use client'

import { useState } from 'react'
import { cn } from '@/libs/utils'
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
import { Invoice, InvoiceStatus, useInvoices } from './common'
import {
  ViewInvoiceDialog,
  EditInvoiceDialog,
  NewInvoiceDialog,
} from './dialogs'

interface InvoiceListTableProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const InvoiceListTable = ({ className, ...props }: InvoiceListTableProps) => {
  const t = useTranslations('InvoiceApp')
  const { invoices, setInvoices, addInvoice, updateInvoice, deleteInvoice } = useInvoices()

  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([])

  const handleCheckboxChange = (invoiceId: string, checked: Boolean) => {
    if (checked) {
      setSelectedInvoices([...selectedInvoices, invoiceId])
    } else {
      setSelectedInvoices(selectedInvoices.filter((id) => id !== invoiceId))
    }
  }

  const deleteSelectedInvoices = () => {
    setInvoices(invoices.filter((invoice) => !selectedInvoices.includes(invoice.id)))
    setSelectedInvoices([])
  }

  const handleAllCheckboxChange = (checked: Boolean) => {
    if (checked) {
      setSelectedInvoices(invoices.map((inv) => inv.id))
    } else {
      setSelectedInvoices([])
    }
  }

  const handleUpdateInvoice = (updatedInvoice: Invoice) => {
    updateInvoice(updatedInvoice)
  }

  const handleNewInvoice = (newInvoice: Invoice) => {
    addInvoice(newInvoice)
  }

  return (
    <div className={cn(className)}>
      <div className='p-6 border-b'>
        <div className='flex justify-between items-center'>
          <h3 className='text-lg font-semibold'>{t('invoice_list')}</h3>
          <div className='flex items-center'>
            {selectedInvoices.length > 0 && (
              <Button
                className='bg-red-600 text-white px-4 py-2 hover:bg-red-700 rounded-3xl mr-4'
                onClick={deleteSelectedInvoices}
              >
                {t('delete_selected')}
              </Button>
            )}
            <NewInvoiceDialog
              onInvoiceChange={(invoice) => handleNewInvoice(invoice)}
            />
          </div>
        </div>
      </div>
      <div className='overflow-x-auto'>
        <Table className='w-full'>
          <TableHeader className='bg-gray-50'>
            <TableRow>
              <TableHead className='px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase'>
                <Input
                  className='w-6 h-6'
                  type='checkbox'
                  onChange={e => handleAllCheckboxChange(e.target.checked)}
                />
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
                  <Input
                    className='w-6 h-6'
                    type='checkbox'
                    checked={selectedInvoices.includes(invoice.id)}
                    onChange={(e) => handleCheckboxChange(invoice.id, e.target.checked)}
                  />
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
                  <EditInvoiceDialog invoice={invoice} onInvoiceChange={handleUpdateInvoice}/>
                  
                  {/* Delete invoice */}
                  <Button
                    className='bg-white text-red-600 hover:text-red-800 hover:bg-slate-300'
                    onClick={() => deleteInvoice(invoice.id)}
                  >
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