'use client'

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
import { BaseEcommerceProduct } from './common'

export const FilterHeader = () => {
  const { cachedItems, setCacheItems } = useCachedItems()

  const orderChange = (value: string) => {
    switch (value) {
      case 'Newest':
        setCacheItems([...(cachedItems as BaseEcommerceProduct[])
                            .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())])
        break
      case 'HighLow':
        setCacheItems([...(cachedItems as BaseEcommerceProduct[])
                            .sort((a, b) => b.price - a.price)])
        break
      case 'LowHigh':
        setCacheItems([...(cachedItems as BaseEcommerceProduct[])
                            .sort((a, b) => a.price - b.price)])
        break
      case 'Discount':
        setCacheItems([...(cachedItems as BaseEcommerceProduct[])
                            .sort((a, b) => (b.discount ?? 0) - (a.discount ?? 0))])
        break
    }
  }

  return (
    <Card className='rounded-2xl shadow-lg h-[8%] bg-white flex items-center space-x-4 p-4 mb-8 justify-between'>
      <div className='h-[50%] flex items-center space-x-4'>
        <div className='w-full'>Filter By:</div>
        <Separator orientation='vertical' />
        {/** Order by */}
        <Select onValueChange={orderChange}>
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
        <Separator orientation='vertical' />
        <span>Category</span>
        <Separator orientation='vertical' />
        <span>Color</span>
      </div>
      <div>
        <Button className='bg-blue-500 text-white rounded-3xl px-4'>
          Reset Filters
        </Button>
      </div>
    </Card>
  )
}