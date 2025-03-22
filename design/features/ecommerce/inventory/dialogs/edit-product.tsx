'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Button,
} from '@/design/components'
import * as Icons from '@/design/icons'
import { useInventory } from '../provider'
import { useCachedItems } from '@/hooks/client-cache'
import {
  GeneralInformation,
  ProductVariations,
  ProductPricing,
  ProductStatus,
  ProductDetails,
  ProductThumbnails,
} from './common'

export const EditInventoryProductDialog = () => {

  const { inventoryItem } = useInventory()
  const { updateCacheItem } = useCachedItems()

  const [open, setOpen] = useState(false)
  
  const saveInventory = () => {
    if (inventoryItem) {
      updateCacheItem(inventoryItem)
      setOpen(false)
    }
  }

  const cancelInventory = () => {
    setOpen(false)
  }

  const openChangeAction = (open: boolean) => {
    setOpen(open)
  }

  return (
    <Dialog open={open} onOpenChange={openChangeAction} >
      <DialogTrigger asChild>
        <Button className='bg-white text-black hover:bg-slate-300 rounded-3xl space-x-2'>
          <Icons.Edit className='w-6 h-6 text-gray-600' />
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-7xl h-[90%] bg-slate-100 overflow-y-auto scrollbar-hide'>
        <DialogHeader>
          <DialogTitle>{'Edit Product'}</DialogTitle>
        </DialogHeader>
        <div className='grid grid-cols-3 gap-4 p-6'>
          {/* Left side */}
          <div className='col-span-2 space-y-4'>
            <GeneralInformation />
            <ProductVariations />
            <ProductPricing />
          </div>
          {/* Right side */}
          <div className='col-span-1 space-y-4'>
            <ProductStatus />
            <ProductDetails />
            <ProductThumbnails />
            
          </div>
        </div>
        <div className='flex justify-end space-x-4'>
          <Button
            className='w-48 bg-blue-500 text-white hover:bg-blue-700 rounded-3xl'
            onClick={saveInventory}
          >
            {'Save'}
          </Button>
          <Button
            className='w-48 bg-blue-500 text-white hover:bg-blue-700 rounded-3xl'
            onClick={cancelInventory}
          >
            {'cancel'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
