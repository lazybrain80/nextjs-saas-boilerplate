'use client'

import { useState } from 'react'
import { cn } from '@/utils/cn'
import * as Icons from '@/design/icons'
import {
  Drawer,
  Button
} from '@/design/components/ui'

export const ShoppingCart = () => {
  const [showCart, setShowCart] = useState<boolean>(false)
  const [shoppingList, setShoppingList] = useState<any[]>([])
  const closeCart = () => {
    setShowCart(false)
  }

  const openCart = () => {
    const storedCart = JSON.parse(localStorage.getItem('shoppingCart')|| '[]')
    setShoppingList(storedCart)
    setShowCart(true)
  }

  const clearCart = () => {
    localStorage.setItem('shoppingCart', JSON.stringify([]))
    setShoppingList([])
  }

  return (
  <>
    <Button
      aria-label='Add new item'
      className={cn(
        'h-18 w-18 fixed bottom-8 right-8 p-4 rounded-full text-white shadow-lg',
        'bg-indigo-500 hover:bg-indigo-600',
        'transition-all active:scale-95 duration-300 hover:scale-110  hover:shadow-xl',
        'focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2'
      )}
      onClick={openCart}
    >
      <Icons.ShoppingCart className="h-6 w-6" />
    </Button>
    <Drawer open={showCart} side='right' closeAction={closeCart}>
      {shoppingList.length > 0
        ?(<>
          {shoppingList.map((item, index) => (
            <div key={index}>
              <span>{item.id}</span>
              <span>{item.quantity}</span>
            </div>
          ))}
          <Button
            onClick={clearCart}
          >
            Cart Clear
          </Button>
        </>)
        :(<div>
          this is empty cart
        </div>)
      }
    </Drawer>
  </>
)}