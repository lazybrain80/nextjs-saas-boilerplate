'use client'

import { useState } from 'react'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import * as Icons from '@/design/icons'
import {
  Drawer,
  Button,
  Separator,
  Transition
} from '@/design/components'
import { ShoppingCartItem } from '../common'
import { useCart } from './provider'


const ShoppingCartHeader = () => {
  const { clearCart } = useCart()
  return (
    <div className={cn(
      'flex items-center justify-between p-2 space-x-4',
    )}>
      <span className='text-black text-2xl font-bold'>
        Shopping Cart
      </span>
      <Button
        className={cn(
          'w-12 h-12 bg-indigo-500 hover:bg-indigo-700 text-white',
          'rounded-full shadow-lg'
        )}
        aria-label='Clear Cart'
        onClick={clearCart}
      >
        <Icons.Trash />
      </Button>
    </div>
  )
}

const ShoppingCartBody = () => {
  const { cartItems, updateItems } = useCart()

  const updateCart = (newCart: ShoppingCartItem[] ) => {
    updateItems(newCart)
  }

  const plusProduct = (id: string) => {
    const newCart = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    updateCart(newCart)
  }

  const minusProduct = (id: string) => {
    const newCart = cartItems.map((item) => {
      if (item.quantity - 1 === 0) {
        return item
      }
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    updateCart(newCart)
  }
  
  return (
    <div className={cn(
      'flex flex-col p-2 space-y-2',
      'overflow-y-auto'
    )}>
      {cartItems.length > 0
        ?(<>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                'flex items-center my-2'
              )}
            >
              <Image
                className='w-24 h-24 rounded-xl'
                src={item.image}
                alt={item.title}
                width={48}
                height={48}
              />
              <div className='w-1/2 ml-4 space-y-4'>
                <div>
                  <div className='font-bold'>{item.title}</div>
                  <div className='text-sm'>{item.category}</div>
                </div>
                <div className='flex items-center justify-between'>
                  {item.discount > 0
                    ?(
                      <div className='w-28'>${(item.price * (1 - item.discount)).toFixed(2)}</div>
                    )
                    :(
                      <div className='w-28'>${item.price}</div>
                    )
                  }
                  <div className='flex items-center space-x-2'>
                    <Button
                      className='w-6 h-6'
                      onClick={() => minusProduct(item.id)}
                    >
                      -
                    </Button>
                    <span> {item.quantity} </span>
                    <Button
                      className='w-6 h-6'
                      onClick={() => plusProduct(item.id)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>)
        :(
        <Transition
          className='flex-col items-center justify-center p-4 space-y-4'
          direction='down'
        >
          <Image
            className='w-full'
            src='/images/ecommerce/shopping-cart.png'
            alt='Empty Cart'
            width={128}
            height={128}
          />
          <div className='w-full text-gray-500 text-2xl text-center font-bold'>
            Your cart is empty
          </div>
        </Transition>)
      }
    </div>
  )
}

const ShoppingCartFooter = () => {
  const { totalPrice } = useCart()
  return (
    <div className={cn(
      'flex items-center justify-between p-4'
    )}>
      <div className='text-black'>Total</div>
      <div className='text-black'>${totalPrice}</div>
    </div>
  )
}


export const ShoppingCart = () => {
  const [showCart, setShowCart] = useState<boolean>(false)
  const closeCart = () => {
    setShowCart(false)
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
      onClick={() => setShowCart(true)}
    >
      <Icons.ShoppingCart className='h-6 w-6' />
    </Button>
    <Drawer open={showCart} side='right' closeAction={closeCart}>
        <ShoppingCartHeader />
        <ShoppingCartBody />
        <Separator />
        <ShoppingCartFooter />
    </Drawer>
  </>
)}