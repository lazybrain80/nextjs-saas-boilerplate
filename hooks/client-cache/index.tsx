'use client'

import { createContext, useContext, useState, useMemo, useLayoutEffect } from 'react'

export interface CacheItemBase {
  id: string
}

interface CacheItemProviderProp {
  children: React.ReactNode,
  items: CacheItemBase[]
}

interface CacheItemContextType {
  items: CacheItemBase[];
  setCacheItems: (items: CacheItemBase[]) => void
  addCacheItem: (newItem: CacheItemBase) => void
  addCacheItems: (items: CacheItemBase[]) => void
  deleteCacheItem: (itemId: string) => void;
  updateCacheItem: (updatedItem: CacheItemBase) => void
}

const CacheItemContext = createContext<CacheItemContextType | undefined>(undefined)

export const CachedItemProvider: React.FC<CacheItemProviderProp> = ({ children, items }) => {
  const [cachedItems, setCachedItems] = useState<CacheItemBase[]>([])

  useLayoutEffect(() => {
    setCachedItems(items)
  }, [items])

  const setCacheItems = (items: CacheItemBase[]) => {
    setCachedItems(items)
  }

  const addCacheItem = (newItem: CacheItemBase) => {
    setCachedItems(prevItems  => [...prevItems, newItem])
  }

  const addCacheItems = (newItems: CacheItemBase[]) => {
    setCachedItems(prevItems => [...prevItems, ...newItems])
  }

  const deleteCacheItem = (itemId: string) => {
    setCachedItems(prevItems => prevItems.filter((item) => item.id !== itemId))
  }

  const updateCacheItem = (updatedItem: CacheItemBase) => {
    setCachedItems(prevItems => prevItems.map((item) => item.id === updatedItem.id ? updatedItem : item))
  }

  const contextValue = useMemo(() => ({
    items: cachedItems,
    setCacheItems,
    addCacheItem,
    addCacheItems,
    deleteCacheItem,
    updateCacheItem,
  }), [cachedItems])

  return (
    <CacheItemContext.Provider value={contextValue}>
      {children}
    </CacheItemContext.Provider>
  )
}

export const useCachedItems = () => {
  const context = useContext(CacheItemContext)
  if (context === undefined) {
    throw new Error('useInvoice must be used within a InvoiceProvider')
  }
  return context
}
