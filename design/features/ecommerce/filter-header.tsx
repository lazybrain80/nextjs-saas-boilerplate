'use client'

import { useEffect, useState, useRef, use } from 'react'
import {
  Card,
  Separator,
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from '@/design/components/ui'
import { useCachedItems } from '@/hooks/client-cache'
import { BaseEcommerceProduct, ProductCategory } from './common'

const filterMap: { [key: string]: (a: BaseEcommerceProduct, b: BaseEcommerceProduct) => number } = {
  'Newest': (a: BaseEcommerceProduct, b: BaseEcommerceProduct) => {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  },
  'HighLow': (a: BaseEcommerceProduct, b: BaseEcommerceProduct) => {
    return a.price - b.price
  },
  'LowHigh': (a: BaseEcommerceProduct, b: BaseEcommerceProduct) => {
    return b.price - a.price
  },
  'Discount': (a: BaseEcommerceProduct, b: BaseEcommerceProduct) => {
    return (b.discount ?? 0) - (a.discount ?? 0)
  }
}

interface FilterOrderbyProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultOrder?: string
}

const FilterOrderby = ({
  defaultOrder = 'Newest'
}: FilterOrderbyProps) => {

  const { cachedItems, setCacheItems } = useCachedItems()
  
  const orderChange = (value: string) => {
    setCacheItems([...(cachedItems as BaseEcommerceProduct[]).sort(filterMap[value])])
  }

  return (
    <div className='w-full'>
      <Select defaultValue={defaultOrder} onValueChange={orderChange}>
        <SelectTrigger>
          <SelectValue placeholder='OrderBy...' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='Newest'> Newest </SelectItem>
          <SelectItem value='HighLow'> HighLow </SelectItem>
          <SelectItem value='LowHigh'> LowHigh </SelectItem>
          <SelectItem value='Discount'> Discount </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

interface FilterCategoryProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultCategory?: ProductCategory
}

const FilterCategory = ({
  defaultCategory = ProductCategory.All
}: FilterCategoryProps) => {

  const triggered = useRef<boolean>(false)
  const { cachedItems, setCacheItems } = useCachedItems()
  const [originalItems, setOriginalItems] = useState<BaseEcommerceProduct[]>(cachedItems as BaseEcommerceProduct[])

  useEffect(() => {
    const hasBeenTriggered = triggered.current

    if (!hasBeenTriggered && originalItems.length === 0) {
      if (cachedItems.length > 0) {
        // backup original items just once
        setOriginalItems(cachedItems as BaseEcommerceProduct[])
        triggered.current = true
      }
    }
  }
  , [cachedItems, originalItems])
  
  const orderChange = (value: string) => {
    const filtered = originalItems.filter((item) => {
      if (value === ProductCategory.All) return true
      return item.category === value
    })
    setCacheItems(filtered)
  }
  return (
    <div className='w-full'>
      <Select
        defaultValue={defaultCategory}
        onValueChange={orderChange}
      >
        <SelectTrigger>
          <SelectValue placeholder='Category...' />
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

export const FilterHeader = () => {
  return (
    <Card className='rounded-2xl shadow-lg h-[8%] bg-white flex items-center space-x-4 p-4 mb-8 justify-between'>
      <div className='w-1/5 h-[50%] flex items-center space-x-4'>
        <div className='w-full'>Filter By:</div>
        <Separator orientation='vertical' />
        {/** Order by */}
        <FilterOrderby />
        <Separator orientation='vertical' />
        {/** Category */}
        <FilterCategory />
      </div>
      <div>
        <Button className='bg-blue-500 text-white rounded-3xl px-4'>
          Reset Filters
        </Button>
      </div>
    </Card>
  )
}