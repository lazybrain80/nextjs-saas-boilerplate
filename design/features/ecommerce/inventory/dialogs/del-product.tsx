'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  Button,
} from '@/design/components/ui'
import * as Icons from '@/design/icons'
import { useInventory } from '../provider'
import { useCachedItems } from '@/hooks/client-cache'

export const DeleteInventoryProductDialog = () => {

  const { inventoryItem } = useInventory()
  const { deleteCacheItem } = useCachedItems()

  const [open, setOpen] = useState(false)
  
  const delInventory = () => {
    if (inventoryItem) {
      deleteCacheItem(inventoryItem.id)
      setOpen(false)
    }
  }

  const openChangeAction = (open: boolean) => {
    setOpen(open)
  }

  return (
    <Dialog open={open} onOpenChange={openChangeAction} >
      <DialogTrigger asChild>
        <Button className='bg-white text-black hover:bg-slate-300 rounded-3xl space-x-2'>
          <Icons.Trash2 className='w-6 h-6 text-gray-600' />
        </Button>
      </DialogTrigger>
      <DialogContent className='bg-slate-100 overflow-y-auto scrollbar-hide'>
        <DialogHeader>
          <DialogTitle>{'Delete Product'}</DialogTitle>
        </DialogHeader>
        <div className='p-6'>
          <p>{'Are you sure you want to delete this product?'}</p>
        </div>
        <DialogFooter>
          <Button
            className='w-48 bg-red-500 text-white hover:bg-red-700 rounded-3xl'
            onClick={delInventory}
          >
            {'Delete'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
