'use client'

import { useState } from 'react'
import { cn } from '@/utils/cn'
import {
  Button,
} from '@/design/components'
import { ProductCategory } from '.'

interface OptionsFactoryProps {
  category: ProductCategory
}


const OptionColor = () => {
  const [selectedColor, setSelectedColor] = useState('blue');
  return (
    <div className='flex items-center'>
      <div className='font-semibold mr-5'>{`Color: `}</div>
      <div className='flex space-x-2'>
        {['blue', 'red', 'green', 'yellow'].map((color) => (
          <Button
            key={color}
            onClick={() => setSelectedColor(color)}
            className={cn(
              'w-8 h-8 rounded-full',
              `bg-${color}-300 ${selectedColor === color ? 'ring-2 ring-blue-500' : ''}`
            )}
          />
        ))}
      </div>
    </div>
  )
}

const OptionSize = () => {
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const [selectedSize, setSelectedSize] = useState('M');
  return (
    <div className='flex items-center'>
      <div className='font-semibold mr-5'>{`Size: `}</div>
      <div className="flex space-x-2">
        {sizes.map((size) => (
          <Button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={cn(
              `px-4 py-2 border rounded ${selectedSize === size ? "bg-blue-500 text-white" : "bg-white text-black border-gray-300"}`,
              'hover:bg-blue-600 hover:text-white transition-colors'
            )}
          >
            {size}
          </Button>
        ))}
      </div>
    </div>
  )
}


export const OptionsFactory = ({ category }: OptionsFactoryProps) => {
  const renderAddtionalOptions = () => {
    switch (category) {
      case ProductCategory.Clothing:
        return(
          <>
            <OptionColor />
            <OptionSize />
          </>
        )
      case ProductCategory.Electronics:
        return(
          <OptionColor />
        )
      case ProductCategory.Furniture:
        return(
          <>
            <OptionColor />
            <OptionSize />
          </>
        )
      default:
        return null;
    }
  }

  return (
    <>
      {renderAddtionalOptions()}
    </>
  )
}