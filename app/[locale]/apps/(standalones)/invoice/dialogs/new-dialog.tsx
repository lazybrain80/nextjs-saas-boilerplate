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
  DialogFooter,
  Button,
  Separator,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Input,
} from '@/design/components/ui'
import { Invoice, orderStatus, SelectInvoiceStatus } from '../common'
import { generateId } from '@/utils/id-generator'

const taxRate = 0.15

const emptyInvoice: Invoice = {
  id: '',
  orderStatus: orderStatus.Pending,
  orderDate: '',
  billFrom: {
    name: '',
    address: '',
  },
  billTo: {
    name: '',
    address: '',
  },
  orderItems: []
}

interface NewInvoiceDialogProps {
  onInvoiceChange?: (invoice: Invoice) => void
}

export const NewInvoiceDialog = ({ onInvoiceChange } : NewInvoiceDialogProps) => {
  const locale = useLocale()
  const [tax, setTax] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [newInvoice, setNewInvoice] = useState<Invoice>(emptyInvoice)
  const [message, setMessage] = useState('')

  useEffect(() => {
    //initialize new invoice
    setNewInvoice(emptyInvoice)
  }, [])

  useEffect(() => {
    const total = newInvoice.orderItems?.reduce((acc, item) => acc + item.price * item.quantity, 0)
    setTotalCost(total)
    setTax(total * taxRate)
  }, [newInvoice])

  const handleDialogOpenChange = (isOpen: Boolean) => {
    if (isOpen) {
      setMessage('')
      setNewInvoice(emptyInvoice)
    }
  }

  const handleInvoiceChange = (invoice: Invoice) => {
    invoice.id = generateId()
    onInvoiceChange?.(invoice)
    setMessage('Invoice successfully updated!')
  }

  return(
    <Dialog onOpenChange={(isOpen) => handleDialogOpenChange(isOpen)}>
      <DialogTrigger asChild>
        <Button
          className='bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 rounded-3xl'>
          New Invoice
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-4xl h-[90%] overflow-y-auto scrollbar-hide'>
        <DialogHeader>
          <DialogTitle>{'Invoice detail'}</DialogTitle>
          <DialogDescription>{'Check invoice detail'}</DialogDescription>
          <DialogClose />
        </DialogHeader>
        <div className='flex items-center justify-between'>
          <div className='space-y-2'>
            <div>{`#ID: ${newInvoice.id}`}</div>
          </div>
          <div className='w-1/3 space-y-2'>
            <div>{'Order Status'}</div>
            <SelectInvoiceStatus
              status={newInvoice.orderStatus}
              onStatusChange={(status) => setNewInvoice({
                ...newInvoice,
                orderStatus: status
              })}
            />
          </div>
        </div>
        <Separator />

        {/** Bill info */}
        <div className='flex items-center justify-between scroll-'>
          {/** Bill from */}
          <div className='w-1/2 mr-2'>
            <div className='text-lg font-bold my-2'>{'Bill from'}</div>
            <div className='space-y-4'>
              <label className='block text-sm font-medium text-gray-700'>{'Name'}</label>
              <Input
                className='rounded-xl'
                value={newInvoice.billFrom?.name}
                onChange={(e) => setNewInvoice({
                  ...newInvoice,
                  billFrom: {
                    ...newInvoice.billFrom,
                    name: e.target.value
                  }
                })}
              />
            </div>
            <div className='mt-4 space-y-4'>
              <label className='block text-sm font-medium text-gray-700'>{'Address'}</label>
              <Input
                className='rounded-xl'
                value={newInvoice.billFrom?.address}
                onChange={(e) => setNewInvoice({
                  ...newInvoice,
                  billFrom: {
                    ...newInvoice.billFrom,
                    address: e.target.value
                  }
                })}
              />
            </div>
          </div>
          {/** Bill to */}
          <div className='w-1/2 ml-2'>
            <div className='text-lg font-bold my-2'>{'Bill to'}</div>
            <div className='space-y-4'>
              <label className='block text-sm font-medium text-gray-700'>{'Name'}</label>
              <Input
                className='rounded-xl'
                value={newInvoice.billTo?.name}
                onChange={(e) => setNewInvoice({
                  ...newInvoice,
                  billTo: {
                    ...newInvoice.billTo,
                    name: e.target.value
                  }
                })}
              />
            </div>
            <div className='mt-4 space-y-4'>
              <label className='block text-sm font-medium text-gray-700'>{'Address'}</label>
              <Input
                className='rounded-xl'
                value={newInvoice.billTo?.address}
                onChange={(e) => setNewInvoice({
                  ...newInvoice,
                  billTo: {
                    ...newInvoice.billTo,
                    address: e.target.value
                  }
                })}
              />
            </div>
          </div>
        </div>

        {/** order items */}
        <div className='flex items-center justify-between'>
          <div className='text-lg font-bold my-2'>{'Order items'}</div>
          <Button
            className='bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 rounded-3xl'
            onClick={() => setNewInvoice({
              ...newInvoice,
              orderItems: [
                ...newInvoice.orderItems,
                {
                  id: Math.random().toString(),
                  name: '',
                  price: 0,
                  quantity: 0
                }
              ]
            })}
          >
            {'Add item'}
          </Button>
        </div>
        <Separator />
        <div className='w-full mt-2 border border-slate-300 rounded-3xl'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase'>{('Item name')}</TableHead>
                <TableHead className='px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase'>{('Price')}</TableHead>
                <TableHead className='px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase'>{('Qunatity')}</TableHead>
                <TableHead className='px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase'>{('Total')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='divide-y divide-gray-200'>
              {newInvoice.orderItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className='px-6 py-4'>
                    <Input value={item.name} onChange={(e) => setNewInvoice({
                      ...newInvoice,
                      orderItems: newInvoice.orderItems.map((orderItem) => {
                        if (orderItem.id === item.id) {
                          return {
                            ...orderItem,
                            name: e.target.value
                          }
                        }
                        return orderItem
                      })
                    })} />
                  </TableCell>
                  <TableCell className='px-6 py-4'>
                    <Input value={item.price} onChange={(e) => setNewInvoice({
                      ...newInvoice,
                      orderItems: newInvoice.orderItems.map((orderItem) => {
                        if (orderItem.id === item.id) {
                          return {
                            ...orderItem,
                            price: Number(e.target.value)
                          }
                        }
                        return orderItem
                      })
                    })} />
                  </TableCell>
                  <TableCell className='px-6 py-4'>
                    <Input value={item.quantity} onChange={(e) => setNewInvoice({
                      ...newInvoice,
                      orderItems: newInvoice.orderItems.map((orderItem) => {
                        if (orderItem.id === item.id) {
                          return {
                            ...orderItem,
                            quantity: Number(e.target.value)
                          }
                        }
                        return orderItem
                      })
                    })} />
                  </TableCell>
                  <TableCell className='px-6 py-4'>{item.price * item.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/** Tax and cost */}
        <div className='w-full mt-2 border border-indigo-700 bg-indigo-50 rounded-3xl'>
          <div className='flex items-center justify-between p-4'>
            <div>{`Tax (${taxRate * 100}%):`}</div>
            <div>{tax}</div>
          </div>
          <div className='flex items-center justify-between p-4'>
            <div>{'Total cost:'}</div>
            <div>{totalCost}</div>
          </div>
          <div className='flex items-center justify-between p-4'>
            <div>{'Grand cost:'}</div>
            <div>{totalCost + tax}</div>
          </div>
        </div>
        <DialogFooter>
          <div className='flex items-center justify-between w-full'>
            {message && <div className="text-green-500 mt-2">{message}</div>}
            <Button
              className='bg-indigo-700 text-white ml-auto'
              onClick={() => handleInvoiceChange(newInvoice)}
            >
              {('Save')}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}