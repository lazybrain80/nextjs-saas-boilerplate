'use client'

import { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'
import {
  Dialog,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Button,
  Separator,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/design/components'
import * as Icons from '@/design/icons'
import { Invoice, InvoiceStatus } from '../common'

const taxRate = 0.15

export const ViewInvoiceDialog = ({ invoice }: { invoice: Invoice }) => {
  const locale = useLocale()
  const [tax, setTax] = useState(0)
  const [totalCost, setTotalCost] = useState(0)

  useEffect(() => {
    const total = invoice.orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    setTotalCost(total)
    setTax(total * taxRate)
  }, [invoice])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white text-blue-600 hover:text-blue-800 hover:bg-slate-300">
          <Icons.Eye size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90%] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle>{'Invoice detail'}</DialogTitle>
          <DialogDescription>{'Check invoice detail'}</DialogDescription>
          <DialogClose />
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div>
            <div>{`#ID: ${invoice.id}`}</div>
            <div className="text-xs text-slate-500 border border-slate-700 rounded-3xl p-1 px-4 mt-2">
              {new Date(invoice.orderDate).toLocaleDateString(locale, {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
          </div>
          <InvoiceStatus status={invoice.orderStatus} />
        </div>
        <Separator />

        {/** Bill info */}
        <div className="flex items-center justify-between">
          {/** Bill from */}
          <div className="border border-slate-300 rounded-3xl p-4 w-1/2 mr-2">
            <div className="text-lg font-bold my-2">{'Bill from'}</div>
            <div>{invoice.billFrom.name}</div>
            <div>{invoice.billFrom.address}</div>
          </div>
          {/** Bill to */}
          <div className="border border-slate-300 rounded-3xl p-4 w-1/2 ml-2">
            <div className="text-lg font-bold my-2">{'Bill to'}</div>
            <div>{invoice.billTo.name}</div>
            <div>{invoice.billTo.address}</div>
          </div>
        </div>

        {/** order items */}
        <div className="w-full mt-2 border border-slate-300 rounded-3xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase">
                  {'Item name'}
                </TableHead>
                <TableHead className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase">
                  {'Price'}
                </TableHead>
                <TableHead className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase">
                  {'Qunatity'}
                </TableHead>
                <TableHead className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase">
                  {'Total'}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-200">
              {invoice.orderItems.map(item => (
                <TableRow key={item.id}>
                  <TableCell className="px-6 py-4">{item.name}</TableCell>
                  <TableCell className="px-6 py-4">{item.price}</TableCell>
                  <TableCell className="px-6 py-4">{item.quantity}</TableCell>
                  <TableCell className="px-6 py-4">{item.price * item.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/** Tax and cost */}
        <div className="w-full mt-2 border border-indigo-700 bg-indigo-50 rounded-3xl">
          <div className="flex items-center justify-between p-4">
            <div>{`Tax (${taxRate * 100}%):`}</div>
            <div>{tax}</div>
          </div>
          <div className="flex items-center justify-between p-4">
            <div>{'Total cost:'}</div>
            <div>{totalCost}</div>
          </div>
          <div className="flex items-center justify-between p-4">
            <div>{'Grand cost:'}</div>
            <div>{totalCost + tax}</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
