'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/utils/cn'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Button,
  Separator,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  TextEditor,
  ChipsInput,
} from '@/design/components/ui'
import * as Icons from '@/design/icons'
import { InventoryProduct } from '../mock-data'
import { Editor } from '@tiptap/react'


interface ProductVariation {
  id: string
  name: string
  vars: string[]
}


export const NewInventoryProductDialog = () => {
  const [editor, setEditor] = useState<Editor | null>(null)
  const [totalText, setTotalText] = useState<number>(0)
  const [variations, setVariations] = useState<ProductVariation[]>([
    {
      id: '1',
      name: 'Color',
      vars: ['Red', 'Green', 'Blue']
    },
    {
      id: '2',
      name: 'Size',
      vars: ['S', 'M', 'L']
    }
  ])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-blue-500 text-white hover:bg-blue-700 rounded-3xl space-x-2'>
          <Icons.PackagePlus className='h-6 w-6' />
          <span>{'New Product'}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-7xl h-[90%] bg-slate-100 overflow-y-auto scrollbar-hide'>
        <DialogHeader>
          <DialogTitle>{'New Product'}</DialogTitle>
        </DialogHeader>
        <div className='grid grid-cols-3 gap-4 p-6'>
          {/* Left side */}
          <div className='col-span-2 space-y-4'>
            <Card className='rounded-3xl'>
              <CardHeader>
                <CardTitle className='text-lg font-bold'>
                  {'General Information'}
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='space-y-2'>
                  <div className='text-sm font-bold'>{'Product Name'}</div>
                  <Input />
                </div>
                <div className='space-y-2'>
                  <div className='text-sm font-bold'>{'Description'}</div>
                  <TextEditor
                    onCreate={(editor) => setEditor(editor)}
                    onTextCountChange={(count) => setTotalText(count)}
                  />
                </div>
              </CardContent>
            </Card>
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
                  {variations.map((variation) => (
                    <div key={variation.id} className='space-y-2'>
                      <span className='text-sm text-slate-700'>{'Name'}</span>
                      <Input
                        className='text-sm font-bold'
                        value={variation.name}
                        onChange={(e) => {
                          const newName = e.target.value;
                          setVariations((prev) => prev.map((v) => {
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
                            setVariations((prev) => prev.map((v) => {
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
                            setVariations((prev) => prev.map((v) => {
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
                      setVariations((prev) => [
                        ...prev,
                        {
                          id: String(prev.length + 1),
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
            <Card className='rounded-3xl'>
              <CardHeader>
                <CardTitle className='flex items-center justify-between'>
                  {'Pricing'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>{'Body'}</div>
              </CardContent>
            </Card>
          </div>
          {/* Right side */}
          <div className='col-span-1 space-y-4'>
            <Card className='rounded-3xl'>
              <CardHeader>
                <CardTitle className='flex items-center justify-between'>
                  {'Status'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>{'Body'}</div>
              </CardContent>
            </Card>
            <Card className='rounded-3xl'>
              <CardHeader>
                <CardTitle className='flex items-center justify-between'>
                  {'Thumbnail'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>{'Body'}</div>
              </CardContent>
            </Card>
            <Card className='rounded-3xl'>
              <CardHeader>
                <CardTitle className='flex items-center justify-between'>
                  {'Product Details'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>{'Body'}</div>
              </CardContent>
            </Card>

          </div>
          
        </div>
      </DialogContent>
    </Dialog>
  )
}
