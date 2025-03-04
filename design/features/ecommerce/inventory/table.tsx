'use client'

import { cn } from '@/libs/utils'
import Image from 'next/image'
import { useCachedItems } from '@/hooks/client-cache'
import {
  Card,
  CardFooter,
  Input,
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  Button,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/design/components/ui'
import * as Icons from '@/design/icons'
import { InventoryProduct } from './mock-data'
import { useEffect, useState } from 'react'

interface InventoryTableProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const InventoryTable = ({ className }: InventoryTableProps) => {
  const { cachedItems } = useCachedItems()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    const totalPages = Math.ceil((cachedItems?.length || 0) / itemsPerPage)
    setTotalPages(totalPages)
  }, [cachedItems, itemsPerPage])

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
  }

  const handleItemsPerPageChange = (value: string) => {
    const itemsPerPage = Number(value)
    setItemsPerPage(itemsPerPage)
    setCurrentPage(1)
  }

  const paginatedItems = cachedItems?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const generatePageNumbers = () => {
    const pageNumbers = []
    const maxVisibleButtons = 3

    if (totalPages <= maxVisibleButtons) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    pageNumbers.push(1, 2)

    let middleStart = Math.max(3, currentPage - 2)
    let middleEnd = Math.min(totalPages - 2, currentPage + 2)

    if (currentPage > totalPages - 4) {
      middleStart = totalPages - 6
      middleEnd = totalPages - 2
    }

    if (currentPage < 5) {
      middleStart = 3
      middleEnd = 7
    }

    if (middleStart > 3) {
      pageNumbers.push("...")
    }

    for (let i = middleStart; i <= middleEnd; i++) {
      pageNumbers.push(i)
    }

    if (middleEnd < totalPages - 2) {
      pageNumbers.push("...")
    }

    pageNumbers.push(totalPages - 1, totalPages)

    return pageNumbers
  }

  return (
    <Card className={cn('p-4', className)}>
      <div className='flex items-center space-x-2 px-2 mb-4'>
        <div className='w-96 border border-slate-500 rounded-full flex items-center space-x-2 px-2'>
          <Icons.Search className='w-6 h-6 text-slate-600' />
          <Input
            className='w-80 border-none'
            placeholder='Search product'
          />
        </div>
        
      </div>
      <div className='overflow-x-auto'>
        <Table className='w-full'>
          <TableHeader className='bg-slate-50'>
            <TableRow>
              <TableHead className='px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase'>
                <Input
                  className='w-4 h-4'
                  type='checkbox'
                />
              </TableHead>
              <TableHead className='px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase'>
                Product
              </TableHead>
              <TableHead className='px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase'>
                Date
              </TableHead>
              <TableHead className='px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase'>
                Stock
              </TableHead>
              <TableHead className='px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase'>
                Price
              </TableHead>
              <TableHead className='px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase'>
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='divide-y divide-gray-200'>
            {paginatedItems && (paginatedItems as InventoryProduct[]).map((product) => (
              <TableRow key={product.id}>
                <TableHead className='px-6 py-3 text-left text-sm font-medium text-gray-900'>
                  <Input
                    className='w-4 h-4'
                    type='checkbox'
                  />
                </TableHead>
                <TableHead className='px-6 py-3 text-left text-sm font-medium text-gray-900'>
                  <div className='flex items-center space-x-2'>
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      width={32}
                      height={32}
                      className='rounded-lg'
                    />
                    <div>
                      <h3 className='font-medium text-gray-900'>{product.title}</h3>
                      <span className='text-sm text-gray-500'>{product.category}</span>
                    </div>
                  </div>
                </TableHead>
                <TableHead className='px-6 py-3 text-left text-sm font-medium text-gray-900'>
                  {product.createdAt.toLocaleDateString()}
                </TableHead>
                <TableHead className='px-6 py-3 text-left text-sm font-medium text-gray-900'>
                  {product.stockCount}
                </TableHead>
                <TableHead className='px-6 py-3 text-left text-sm font-medium text-gray-900'>
                  {product.price}
                </TableHead>
                <TableHead className='px-6 py-3 text-left text-sm font-medium text-gray-900'>
                  <div className='flex space-x-2'>
                    <Icons.Add className='w-6 h-6 text-gray-600' />
                    <Icons.Edit className='w-6 h-6 text-gray-600' />
                  </div>
                </TableHead>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className=' bg-slate-50 flex justify-between items-center p-2 border-t border-slate-200'>
          <div className='w-48 flex items-center space-x-2'>
            <span className='w-26 text-xs text-black'>Rows per page:</span>
            <div className='w-16'>
              <Select
                name='itemsPerPage'
                value={itemsPerPage.toString()}
                onValueChange={(value) => handleItemsPerPageChange(value)}
              >
                <SelectTrigger>{itemsPerPage}</SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='flex space-x-2'>
            <Button
              className='w-10 h-10 bg-white text-black hover:bg-slate-300'
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <Icons.ChevronLeft  />
            </Button>
            {generatePageNumbers().map((pageNum, index) => (
              <Button
                key={index}
                onClick={() =>
                  typeof pageNum === "number" && setCurrentPage(pageNum)
                }
                className={cn('px-4 py-2 rounded-md shadow-sm',
                  `${currentPage === pageNum
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-gray-50 text-black"
                  }`)}
              >
                {pageNum}
              </Button>
            ))}
            <Button
              className='w-10 h-10 bg-white text-black hover:bg-slate-300'
              disabled={currentPage * itemsPerPage >= (cachedItems?.length || 0)}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <Icons.ChevronRight  />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}