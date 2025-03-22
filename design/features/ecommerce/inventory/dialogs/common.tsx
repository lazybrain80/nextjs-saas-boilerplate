'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/utils/cn'
import { Editor } from '@tiptap/react'
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  TextEditor,
  ChipsInput,
  RadioGroup,
  RadioGroupItem,
  Slider,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  FileImporter
} from '@/design/components'
import * as Icons from '@/design/icons'
import { ProductCategory } from '../../common'
import { useInventory } from '../provider'


export interface ProductVariation {
  id: string
  name: string
  vars: string[]
}

export const discountTypes = {
  NO_DISCOUNT: 'NO_DISCOUNT',
  PERCENTAGE: 'PERCENTAGE',
  FIXED: 'FIXED'
}

export type DiscountType = keyof typeof discountTypes

export const taxTypes = {
  TAX_FREE: 'NO_DISCOUNT',
  TAX_GOODS: 'TAXABLE_GOODS'
}

export type TaxType = keyof typeof taxTypes

export const inventoryStatus = {
  PUBLISHED: 'PUBLISHED',
  DRAFT: 'DRAFT',
  ARCHIVED: 'ARCHIVED',
  SCHEDULED: 'SCHEDULED',
  INACTIVE: 'INACTIVE'
}

export const statusColors = {
  PUBLISHED: 'text-green-500',
  DRAFT: 'text-blue-500',
  ARCHIVED: 'text-red-500',
  SCHEDULED: 'text-yellow-500',
  INACTIVE: 'text-gray-500'
}

export type InventoryStatus = keyof typeof inventoryStatus

export const GeneralInformation = () => {
  const { inventoryItem, setTitle, setDescription } = useInventory()
  const [editor, setEditor] = useState<Editor | null>(null)

  const descChange = (count: number) => {
    setDescription(editor?.getText() || '')
  }

  return (
    <Card className='rounded-3xl'>
      <CardHeader>
        <CardTitle className='text-lg font-bold'>
          {'General Information'}
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='space-y-6'>
          <div className='space-y-2'>
            <div className='text-sm font-bold'>{'Product Name'}</div>
            <Input
              defaultValue={inventoryItem?.title}
              onChange={(e) => setTitle(e.target.value)} 
            />
          </div>
          <div className='space-y-2'>
            <div className='text-sm font-bold'>{'Description'}</div>
            <TextEditor
              onCreate={(editor) => {
                editor.commands.setContent(inventoryItem?.description || '')
                setEditor(editor)
              }}
              
              onTextCountChange={descChange}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export const ProductVariations = () => {
  const { inventoryItem, setVariartions } = useInventory()


  return (
    <Card className='rounded-3xl'>
      <CardHeader>
        <CardTitle className='flex items-center justify-between'>
          {'Variation'}
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-2'>
        <div className='space-y-2'>
          <div>{'Add Product Variation'}</div>
          {/* Variation */}
          {(inventoryItem?.variations ?? []).map((variation) => (
            <div key={variation.id} className='space-y-2'>
              <div className='flex items-center justify-between'> 
                <span className='text-sm text-slate-700'>{'Name'}</span>
                <Button
                  className='w-4 h-4 p-0 bg-red-400 text-white hover:bg-red-700 rounded-3xl'
                  onClick={() => {
                    setVariartions(inventoryItem?.variations.filter((v: ProductVariation) => v.id !== variation.id) || [])
                  }}
                >
                  <Icons.Close />
                </Button>
              </div>
              <Input
                className='text-sm font-bold'
                defaultValue={variation.name}
                value={variation.name}
                onChange={(e) => {
                  const newName = e.target.value
                    setVariartions((inventoryItem?.variations ?? []).map((v: ProductVariation) => {
                    if (v.id === variation.id) {
                      return {
                      ...v,
                      name: newName
                      }
                    }
                    return v
                    }))
                }}
              />
              <span className='text-sm text-slate-700'>{'Options'}</span>
              <div className='space-x-2'>
                <ChipsInput
                  initialChips={variation.vars}
                  onChipAdd={(chip) => {
                    setVariartions((inventoryItem?.variations ?? []).map((v: ProductVariation) => {
                      if (v.id === variation.id) {
                        return {
                          ...v,
                          vars: [...v.vars, chip]
                        }
                      }
                      return v
                    }))
                  }}
                  onChipRemove={(chip) => {
                    setVariartions((inventoryItem?.variations ?? []).map((v: ProductVariation) => {
                      if (v.id === variation.id) {
                        return {
                          ...v,
                          vars: v.vars.filter((v) => v !== chip)
                        }
                      }
                      return v
                    }))
                  }}
                />
              </div>
            </div>
          ))}
          <Button
            className='bg-blue-500 text-white hover:bg-blue-700 rounded-3xl'
            onClick={() => {
                setVariartions([
                  ...(inventoryItem?.variations || []),
                  {
                    id: String((inventoryItem?.variations.length || 0) + 1),
                    name: '',
                    vars: []
                  }
                ])
            }}
          >
            <Icons.Add className='h-6 w-6' />
            {'Add another variation'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export const ProductPricing = () => {
  
  const {
    inventoryItem,
    setPrice,
    setDiscount,
    setDiscountType,
    setTaxRate,
    setTaxType
  } = useInventory()

  return(
  <Card className='rounded-3xl'>
    <CardHeader>
      <CardTitle className='flex items-center justify-between'>
        {'Pricing'}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className='space-y-2 mb-4'>
        {/** Basic Price */}
        <div className='flex items-center'> 
          <span className='text-sm text-slate-700'>{'Basic Price'}</span>
          <Icons.Asterisk className='h-4 w-4 text-red-500' />
        </div>
        
        <Input
          type='number'
          className='text-sm'
          defaultValue={inventoryItem?.price}
          onChange={(e) => {
            setPrice(Number(e.target.value))
          }}
        />
      </div>
      {/** Discount */}
      <div className='space-y-2 mb-4'>
        <div className='flex items-center'> 
          <span className='text-sm text-slate-700'>{'Discount Type'}</span>
          <Icons.Asterisk className='h-4 w-4 text-red-500' />
        </div>
        <RadioGroup
          defaultValue={discountTypes.NO_DISCOUNT}
          onValueChange={(value) => {
            setDiscountType(value as DiscountType)
          }}
          aria-label="View density"
        >
          <div className='flex items-center space-x-6'>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value={discountTypes.NO_DISCOUNT} />
              <span>{'No Discount'}</span>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value={discountTypes.PERCENTAGE} />
              <span>{'Percentage'}</span>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value={discountTypes.FIXED} />
              <span>{'Fixed'}</span>
            </div>
          </div>
        </RadioGroup>
        {/** Discount by Percentage */}
        {inventoryItem?.discountType === 'PERCENTAGE' && (
          <div className='space-y-2'>
            <div className='flex items-center'> 
              <span className='text-sm text-slate-700'>{'Percentage'}</span>
              <Icons.Asterisk className='h-4 w-4 text-red-500' />
            </div>
            <div className='flex items-center space-x-4'>
              <Input
                type='number'
                className='text-sm'
                onChange={(e) => {
                  setDiscount(Number(e.target.value))
                }}
              />
              <span className='text-sm text-slate-700'>{'%'}</span>
              <Slider
                defaultValue={[0]}
                min={0}
                max={100}
                step={1}
                className='text-sm'
                value={[inventoryItem?.discount ?? 0]}
                onValueChange={(value) => {
                  setDiscount(value[0])
                }}
              />
            </div>
          </div>
        )}
        {/** Discount by fixed price */}
        {inventoryItem?.discountType === 'FIXED' && (
          <div className='space-y-2'>
            <div className='flex items-center'> 
              <span className='text-sm text-slate-700'>{'Fixed Amount'}</span>
              <Icons.Asterisk className='h-4 w-4 text-red-500' />
            </div>
            <Input
              type='number'
              className='text-sm'
              onChange={(e) => {
                setPrice(Number(e.target.value))
              }}
            />
          </div>
        )}
      </div>
      {/** TAX */}
      <div className='flex items-center'>
        {/** TAX type */}
        <div className='w-1/2 space-y-2 rounded-3xl mr-4'>
          <div className='flex items-center'> 
            <span className='text-sm text-slate-700'>{'Tax type'}</span>
            <Icons.Asterisk className='h-4 w-4 text-red-500' />
          </div>
          <Select onValueChange={(value) => setTaxType(value as TaxType)}>
            <SelectTrigger>
              <SelectValue placeholder='Select year...' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={taxTypes.TAX_FREE}> Free </SelectItem>
              <SelectItem value={taxTypes.TAX_GOODS}> Taxable Goods </SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/** TAX rate */}
        <div className='w-1/2 space-y-2'>
          <div className='flex items-center'>
            <span className='text-sm text-slate-700'>{'Tax Rate'}</span>
            <Icons.Asterisk className='h-4 w-4 text-red-500' />
          </div>
          <div className='flex items-center space-x-4'>
            <Input
              type='number'
              className='text-sm'
              onChange={(e) => {
                setTaxRate(Number(e.target.value))
              }}
            />
            <span className='text-sm text-slate-700'>{'%'}</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
  )
}

export const ProductStatus = () => {
  const { inventoryItem, setStatus } = useInventory()

  return(
    <Card className='rounded-3xl'>
      <CardHeader>
        <CardTitle className='flex items-center justify-between'>
          <span>{'Status'}</span>
          <Icons.Circle className={cn(
            'h-4 w-4',
            statusColors[inventoryItem?.status as InventoryStatus]
          )} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Select
          defaultValue={inventoryItem?.status}
          onValueChange={(value) => setStatus(value as InventoryStatus)}>
          <SelectTrigger className='rounded-2xl'>
            <SelectValue placeholder='Select year...' />
          </SelectTrigger>
          <SelectContent className='rounded-2xl'>
            <SelectItem value={inventoryStatus.ARCHIVED}> {'Archived'} </SelectItem>
            <SelectItem value={inventoryStatus.DRAFT}> {'Draft'} </SelectItem>
            <SelectItem value={inventoryStatus.INACTIVE}> {'Inactive'} </SelectItem>
            <SelectItem value={inventoryStatus.PUBLISHED}> {'Published'} </SelectItem>
            <SelectItem value={inventoryStatus.SCHEDULED}> {'Scheduled'} </SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  )
}

export const ProductDetails = () => {
  const { inventoryItem, setCategory, setTags } = useInventory()

  return(
    <Card className='rounded-3xl'>
      <CardHeader>
        <CardTitle className='flex items-center justify-between'>
          {'Product Details'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex items-center space-x-4'>
          <span className='text-sm text-slate-700'>{'Category'}</span>
          <Select
            defaultValue={inventoryItem?.category}
            onValueChange={(value) => {
              const category = Object.values(ProductCategory).find((c) => c === value);
              if (category) {
                setCategory(category);
              }
            }}
          >
            <SelectTrigger className='rounded-2xl'>
              <SelectValue placeholder='Select year...' />
            </SelectTrigger>
            <SelectContent className='rounded-2xl'>
              {Object.values(ProductCategory).map((c) => (
                <SelectItem key={c} value={c}> {c} </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className='space-y-2'>
          <span className='text-sm text-slate-700'>{'Tags'}</span>
          <ChipsInput
            initialChips={inventoryItem?.tags || []}
            onChipAdd={(chip) => {
              if (inventoryItem?.tags?.length) {
                setTags([...inventoryItem.tags, chip])
              } else {
                setTags([chip])
              }
            }}
            onChipRemove={(chip) => {
              if(inventoryItem) {
                setTags( [...inventoryItem.tags.filter((t) => t !== chip)])
              }
            }}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export const ProductThumbnails = () => {
  const { inventoryItem, setThumbnails } = useInventory()

  return(
    <Card className='rounded-3xl'>
      <CardHeader>
        <CardTitle className='flex items-center justify-between'>
          {'Thumbnail'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <FileImporter onFileDropedAction={(file) => {
          setThumbnails([...(inventoryItem?.thumbnails || []), file.name])
          }} 
        />
        <div className='space-y-2'>
          {(inventoryItem?.thumbnails ?? []).map((thumb) => (
            <div key={thumb} className='flex items-center space-x-2'>
              <Image
                src='/images/ecommerce/file_icon.svg'
                alt='thumbnail'
                width={24}
                height={24}
              />
              <span>{thumb}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
