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
} from '@/design/components'
import * as Icons from '@/design/icons'
import { Invoice, SelectInvoiceStatus } from '../common'

const taxRate = 0.15

interface EditInvoiceDialogProps {
  invoice: Invoice
  onInvoiceChange?: (invoice: Invoice) => void
}

export const EditInvoiceDialog = ({ invoice, onInvoiceChange }: EditInvoiceDialogProps) => {
  const locale = useLocale()
  const [tax, setTax] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [currentInvoice, setCurrentInvoice] = useState<Invoice>({} as Invoice)
  const [isLoading, setIsLoading] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    setCurrentInvoice(invoice)
    setIsLoading(false)
  }, [invoice])

  useEffect(() => {
    const total = currentInvoice.orderItems?.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    )
    setTotalCost(total)
    setTax(total * taxRate)
  }, [currentInvoice])

  const handleDialogOpenChange = (isOpen: Boolean) => {
    if (isOpen) {
      setMessage('')
    }
  }

  const handleInvoiceChange = (invoice: Invoice) => {
    onInvoiceChange?.(invoice)
    setMessage('Invoice successfully updated!')
  }

  return (
    <Dialog onOpenChange={isOpen => handleDialogOpenChange(isOpen)}>
      <DialogTrigger asChild>
        <Button className="bg-white text-gray-600 hover:text-gray-800 hover:bg-slate-300">
          <Icons.Edit2 size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90%] overflow-y-auto scrollbar-hide">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <span>Loading...</span>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>{'Invoice detail'}</DialogTitle>
              <DialogDescription>{'Check invoice detail'}</DialogDescription>
              <DialogClose />
            </DialogHeader>
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div>{`#ID: ${currentInvoice.id}`}</div>
                <div className="text-xs text-slate-500 border border-slate-700 rounded-3xl p-1 px-4">
                  {new Date(currentInvoice.orderDate).toLocaleDateString(locale, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </div>
              <div className="w-1/3 space-y-2">
                <div>{'Order Status'}</div>
                <SelectInvoiceStatus
                  status={currentInvoice.orderStatus}
                  onStatusChange={status =>
                    setCurrentInvoice({
                      ...currentInvoice,
                      orderStatus: status,
                    })
                  }
                />
              </div>
            </div>
            <Separator />

            {/** Bill info */}
            <div className="flex items-center justify-between">
              {/** Bill from */}
              <div className="w-1/2 mr-2">
                <div className="text-lg font-bold my-2">{'Bill from'}</div>
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">{'Name'}</label>
                  <Input
                    className="rounded-xl"
                    value={currentInvoice.billFrom.name}
                    onChange={e =>
                      setCurrentInvoice({
                        ...currentInvoice,
                        billFrom: {
                          ...currentInvoice.billFrom,
                          name: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="mt-4 space-y-4">
                  <label className="block text-sm font-medium text-gray-700">{'Address'}</label>
                  <Input
                    className="rounded-xl"
                    value={currentInvoice.billFrom.address}
                    onChange={e =>
                      setCurrentInvoice({
                        ...currentInvoice,
                        billFrom: {
                          ...currentInvoice.billFrom,
                          address: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>
              {/** Bill to */}
              <div className="w-1/2 ml-2">
                <div className="text-lg font-bold my-2">{'Bill to'}</div>
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">{'Name'}</label>
                  <Input
                    className="rounded-xl"
                    value={currentInvoice.billTo.name}
                    onChange={e =>
                      setCurrentInvoice({
                        ...currentInvoice,
                        billTo: {
                          ...currentInvoice.billTo,
                          name: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="mt-4 space-y-4">
                  <label className="block text-sm font-medium text-gray-700">{'Address'}</label>
                  <Input
                    className="rounded-xl"
                    value={currentInvoice.billTo.address}
                    onChange={e =>
                      setCurrentInvoice({
                        ...currentInvoice,
                        billTo: {
                          ...currentInvoice.billTo,
                          address: e.target.value,
                        },
                      })
                    }
                  />
                </div>
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
                  {currentInvoice.orderItems.map(item => (
                    <TableRow key={item.id}>
                      <TableCell className="px-6 py-4">
                        <Input
                          value={item.name}
                          onChange={e =>
                            setCurrentInvoice({
                              ...currentInvoice,
                              orderItems: currentInvoice.orderItems.map(orderItem => {
                                if (orderItem.id === item.id) {
                                  return {
                                    ...orderItem,
                                    name: e.target.value,
                                  }
                                }
                                return orderItem
                              }),
                            })
                          }
                        />
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        <Input
                          value={item.price}
                          onChange={e =>
                            setCurrentInvoice({
                              ...currentInvoice,
                              orderItems: currentInvoice.orderItems.map(orderItem => {
                                if (orderItem.id === item.id) {
                                  return {
                                    ...orderItem,
                                    price: Number(e.target.value),
                                  }
                                }
                                return orderItem
                              }),
                            })
                          }
                        />
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        <Input
                          value={item.quantity}
                          onChange={e =>
                            setCurrentInvoice({
                              ...currentInvoice,
                              orderItems: currentInvoice.orderItems.map(orderItem => {
                                if (orderItem.id === item.id) {
                                  return {
                                    ...orderItem,
                                    quantity: Number(e.target.value),
                                  }
                                }
                                return orderItem
                              }),
                            })
                          }
                        />
                      </TableCell>
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
            <DialogFooter>
              <div className="flex items-center justify-between w-full">
                {message && <div className="text-green-500 mt-2">{message}</div>}
                <Button
                  className="bg-indigo-700 text-white ml-auto"
                  onClick={() => handleInvoiceChange(currentInvoice)}
                >
                  {'Save'}
                </Button>
              </div>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
