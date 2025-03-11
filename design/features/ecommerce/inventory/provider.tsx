'use client'

import { createContext, useContext, useState, useMemo, useLayoutEffect } from 'react'
import { InventoryProduct, ProductVariation } from './mock-data'
import { ProductCategory } from '../common'

interface InventoryContextType {
  inventoryItem?: InventoryProduct

  setCategory: (category: ProductCategory) => void
  setTitle: (title: string) => void
  setDescription: (description: string) => void
  setPrice: (price: number) => void
  setDiscount: (discount: number) => void
  setDiscountType: (discountType: string) => void
  setTaxRate: (taxRate: number) => void
  setTaxType: (taxType: string) => void
  setImages: (images: string[]) => void
  setStockCount: (stockCount: number) => void
  setVariartions: (variations: ProductVariation[]) => void
  setStatus: (status: string) => void
  setTags: (tags: string[]) => void
  setThumbnails: (thumbnails: string[]) => void
  clearInventory: () => void
}

const InventoryContext = createContext<InventoryContextType | undefined>(undefined)

interface InventoryProviderProps {
  children: React.ReactNode
  product?: InventoryProduct
}

export const InventoryProvider: React.FC<InventoryProviderProps> = ({ 
  children,
  product = {} as InventoryProduct
}: InventoryProviderProps) => {
  const [inventoryItem, setInventoryItem] = useState<InventoryProduct>({} as InventoryProduct)
  const emptyProduct = {
    id: '',
    createdAt: new Date(),
    category: ProductCategory.Book,
    title: '',
    description: '',
    price: 0,
    discount: 0,
    discountType: 'NO_DISCOUNT',
    taxRate: 0,
    taxType: '',
    status: 'DRAFT',
    images: [],
    stockCount: 0,
    variations: [],
    tags: [],
    thumbnails: [],
  } as InventoryProduct

  useLayoutEffect(() => {
    if(product) {
      setInventoryItem(product)
      return
    }
    setInventoryItem(emptyProduct)
  }, [])
  
  const setCategory = (category: ProductCategory) => {
    setInventoryItem({ ...inventoryItem, category })
  }

  const setTitle = (title: string) => {
    setInventoryItem({ ...inventoryItem, title })
  }

  const setDescription = (description: string) => {
    setInventoryItem({ ...inventoryItem, description })
  }

  const setPrice = (price: number) => {
    setInventoryItem({...inventoryItem, price})
  }

  const setDiscount = (discount: number) => {
    setInventoryItem({...inventoryItem, discount})
  }

  const setDiscountType = (discountType: string) => {
    setInventoryItem({...inventoryItem, discountType})
  }

  const setTaxRate = (taxRate: number) => {
    setInventoryItem({...inventoryItem, taxRate})
  }

  const setTaxType = (taxType: string) => {
    setInventoryItem({...inventoryItem, taxType})
  }

  const setImages = (images: string[]) => {
    setInventoryItem({...inventoryItem, images})
  }

  const setStockCount = (stockCount: number) => {
    setInventoryItem({...inventoryItem, stockCount})
  }

  const setVariartions = (variations: ProductVariation[]) => {
    setInventoryItem({ ...inventoryItem, variations })
  }
  
  const setStatus = (status: string) => {
    setInventoryItem({ ...inventoryItem, status })
  }

  const setTags = (tags: string[]) => {
    setInventoryItem({ ...inventoryItem, tags })
  }

  const setThumbnails = (thumbnails: string[]) => {
    setInventoryItem({ ...inventoryItem, thumbnails })
  }

  const clearInventory = () => {
    setInventoryItem(emptyProduct)
  }

  const contextValue = useMemo(() => ({
    inventoryItem,
    setCategory,
    setTitle,
    setDescription,
    setPrice,
    setDiscount,
    setDiscountType,
    setTaxRate,
    setTaxType,
    setImages,
    setStockCount,
    setVariartions,
    setStatus,
    setTags,
    setThumbnails,
    clearInventory,
  }), [inventoryItem])
  

  return (
    <InventoryContext.Provider value={contextValue}>
      {children}
    </InventoryContext.Provider>
  )
}

export const useInventory = () => {
  const context = useContext(InventoryContext)
  if (!context) {
    throw new Error('useInventory must be used within an InventoryProvider')
  }
  return context
}

