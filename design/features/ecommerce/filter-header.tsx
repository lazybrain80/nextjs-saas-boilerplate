'use client'

import { Card, Separator, Button } from '@/design/components'
import { FilterOrderby, FilterCategory, useFilter } from './filter'
import { ProductCategory } from './common'

export const FilterHeader = () => {
  const { setOrder, setCategory } = useFilter()

  const resetFilters = () => {
    setOrder('Newest')
    setCategory(ProductCategory.All)
  }

  return (
    <Card className="rounded-2xl shadow-lg h-[8%] bg-white flex items-center space-x-4 p-4 mb-8 justify-between">
      <div className="w-1/5 h-[50%] flex items-center space-x-4">
        <div className="w-full">Filter By:</div>
        <Separator orientation="vertical" />
        {/** Order by */}
        <FilterOrderby />
        <Separator orientation="vertical" />
        {/** Category */}
        <FilterCategory />
      </div>
      <div>
        <Button className="bg-blue-500 text-white rounded-3xl px-4" onClick={resetFilters}>
          Reset Filters
        </Button>
      </div>
    </Card>
  )
}
