'use client'

import { createContext, useContext, useState, useMemo } from 'react'
import { ProductCategory } from '../common'

interface FilterContextType {
  order: string
  category: ProductCategory
  setOrder: (newOrder: string) => void
  setCategory: (newCategory: ProductCategory) => void
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [order, setOrder] = useState<string>('Newest')
  const [category, setCategory] = useState<ProductCategory>(ProductCategory.All)

  const contextValue = useMemo(
    () => ({
      order,
      category,
      setOrder,
      setCategory,
    }),
    [order, category]
  )

  return <FilterContext.Provider value={contextValue}>{children}</FilterContext.Provider>
}

export const useFilter = () => {
  const context = useContext(FilterContext)
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider')
  }
  return context
}
