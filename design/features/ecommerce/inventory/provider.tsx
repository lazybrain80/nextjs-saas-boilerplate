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
  setImages: (images: string[]) => void
  setStockCount: (stockCount: number) => void
  setVariartions: (variations: ProductVariation[]) => void

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

  useLayoutEffect(() => {
    setInventoryItem(product)
  }, [])
  
  const setCategory = (category: ProductCategory) => {
    setInventoryItem(inventoryItem ? { ...inventoryItem, category } : { category } as InventoryProduct)
  }

  const setTitle = (title: string) => {
    setInventoryItem(inventoryItem ? { ...inventoryItem, title } : { title } as InventoryProduct)
  }

  const setDescription = (description: string) => {
    setInventoryItem({ ...inventoryItem, description })
  }

  const setPrice = (price: number) => {
    setInventoryItem(inventoryItem ? { ...inventoryItem, price } : { price } as InventoryProduct)
  }

  const setDiscount = (discount: number) => {
    setInventoryItem(inventoryItem ? { ...inventoryItem, discount } : { discount } as InventoryProduct)
  }

  const setImages = (images: string[]) => {
    setInventoryItem(inventoryItem ? { ...inventoryItem, images } : { images } as InventoryProduct)
  }

  const setStockCount = (stockCount: number) => {
    setInventoryItem(inventoryItem ? { ...inventoryItem, stockCount } : { stockCount } as InventoryProduct)
  }

  const setVariartions = (variations: ProductVariation[]) => {
    setInventoryItem({ ...inventoryItem, variations })
  }

  const clearInventory = () => {
    setInventoryItem({} as InventoryProduct)
  }

  const contextValue = useMemo(() => ({
    inventoryItem,
    setCategory,
    setTitle,
    setDescription,
    setPrice,
    setDiscount,
    setImages,
    setStockCount,
    setVariartions,
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

