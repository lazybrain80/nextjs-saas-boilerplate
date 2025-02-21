'use client'

import Image from 'next/image'
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  Button
} from '@/design/components/ui'
import * as Icons from '@/design/icons'
import { Invoice } from '../common'

export const ViewInvoiceDialog = ( {invoice} : {invoice: Invoice}) => {
  return(
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white text-blue-600 hover:text-blue-800 hover:bg-slate-300">
          <Icons.Eye size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{invoice.billFrom.name}</DialogTitle>
          <DialogClose />
        </DialogHeader>
        {invoice.billFrom.name}
      </DialogContent>

    </Dialog>
    
  )
}