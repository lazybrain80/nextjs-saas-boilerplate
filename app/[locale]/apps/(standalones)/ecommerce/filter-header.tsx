'use client'

import {
  Card,
  Separator,
  Button,
} from '@/design/components/ui'

export const FilterHeader = () => {
  return (
    <Card className='rounded-2xl shadow-lg h-[8%] bg-white flex items-center space-x-4 p-4 mb-8 justify-between'>
      <div className='flex items-center space-x-4'>
        <span>Filter By:</span>
        <Separator orientation='vertical' />
        <span>Category</span>
        <Separator orientation='vertical' />
        <span>Price</span>
        <Separator orientation='vertical' />
        <span>Color</span>
      </div>
      <Button className='bg-blue-500 text-white rounded-3xl px-4'>
        Reset Filters
      </Button>
    </Card>
  )
}