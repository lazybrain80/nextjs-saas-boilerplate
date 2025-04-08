'use client'

import { useEffect, useState, useRef } from 'react'
import { Select, SelectContent, SelectItem, SelectValue, SelectTrigger } from '@/design/components'
import { useCachedItems } from '@/hooks/client-cache'
import { BaseEcommerceProduct, ProductCategory } from '../common'
import { useFilter } from './provider'

const filterMap: { [key: string]: (a: BaseEcommerceProduct, b: BaseEcommerceProduct) => number } = {
  Newest: (a: BaseEcommerceProduct, b: BaseEcommerceProduct) => {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  },
  HighLow: (a: BaseEcommerceProduct, b: BaseEcommerceProduct) => {
    return a.price - b.price
  },
  LowHigh: (a: BaseEcommerceProduct, b: BaseEcommerceProduct) => {
    return b.price - a.price
  },
  Discount: (a: BaseEcommerceProduct, b: BaseEcommerceProduct) => {
    return (b.discount ?? 0) - (a.discount ?? 0)
  },
}

interface FilterOrderbyProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultOrder?: string
}

export const FilterOrderby = ({ defaultOrder = 'Newest' }: FilterOrderbyProps) => {
  const { order, setOrder } = useFilter()
  const { cachedItems, setCacheItems } = useCachedItems()

  useEffect(() => {
    setOrder(order)
    setCacheItems([...(cachedItems as BaseEcommerceProduct[]).sort(filterMap[order])])
  }, [order])

  const orderChange = (value: string) => {
    setOrder(value)
  }

  return (
    <div className="w-full">
      <Select defaultValue={defaultOrder} onValueChange={orderChange} value={order}>
        <SelectTrigger>
          <SelectValue placeholder="OrderBy..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Newest"> Newest </SelectItem>
          <SelectItem value="HighLow"> HighLow </SelectItem>
          <SelectItem value="LowHigh"> LowHigh </SelectItem>
          <SelectItem value="Discount"> Discount </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

interface FilterCategoryProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultCategory?: ProductCategory
}

export const FilterCategory = ({ defaultCategory = ProductCategory.All }: FilterCategoryProps) => {
  const { category, setCategory } = useFilter()
  const triggered = useRef<boolean>(false)
  const { cachedItems, setCacheItems } = useCachedItems()
  const [originalItems, setOriginalItems] = useState<BaseEcommerceProduct[]>(
    cachedItems as BaseEcommerceProduct[]
  )

  useEffect(() => {
    const hasBeenTriggered = triggered.current

    if (!hasBeenTriggered && originalItems.length === 0) {
      if (cachedItems.length > 0) {
        // backup original items just once
        setOriginalItems(cachedItems as BaseEcommerceProduct[])
        triggered.current = true
      }
    }
  }, [cachedItems, originalItems])

  useEffect(() => {
    const filtered = originalItems.filter(item => {
      if (category === ProductCategory.All) return true
      return item.category === category
    })
    setCacheItems(filtered)
  }, [category])

  const orderChange = (value: string) => {
    setCategory(value as ProductCategory)
  }
  return (
    <div className="w-full">
      <Select defaultValue={defaultCategory} onValueChange={orderChange} value={category}>
        <SelectTrigger>
          <SelectValue placeholder="Category..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={ProductCategory.All}> All </SelectItem>
          <SelectItem value={ProductCategory.Book}> Book </SelectItem>
          <SelectItem value={ProductCategory.Furniture}> Furniture </SelectItem>
          <SelectItem value={ProductCategory.Electronics}> Electronics </SelectItem>
          <SelectItem value={ProductCategory.Clothing}> Clothing </SelectItem>
          <SelectItem value={ProductCategory.Beauty}> Beauty </SelectItem>
          <SelectItem value={ProductCategory.Toy}> Toy </SelectItem>
          <SelectItem value={ProductCategory.Sports}> Sports </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
