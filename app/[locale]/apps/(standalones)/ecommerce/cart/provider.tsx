
'use client'

import { createContext, useContext, useState, useMemo, useLayoutEffect } from 'react'
import { ShoppingCartItem } from '../common'

interface CartContextType {
  cartItems: ShoppingCartItem[]
  totalPrice: number
  updateItems: (newCartItems: ShoppingCartItem[]) => void
  deleteItem: (cartItemId: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ShoppingCartItem[]>([])
  const [totalPrice, setTotalPrice] = useState<number>(0)

  useLayoutEffect(() => {
    const cart = JSON.parse(localStorage.getItem('shoppingCart')|| '[]')
    if (cart) {
      setCartItems(cart)
      const totalPrice: number = cart.reduce((acc: number, item: ShoppingCartItem): number => {
        return acc + (item.price * item.quantity) - (item.price * item.quantity * item.discount)
      }, 0)
      setTotalPrice(parseFloat(totalPrice.toFixed(2)))
    }
  }, [])

  const updateItems = (newCartItems: ShoppingCartItem[]) => {
    localStorage.setItem('shoppingCart', JSON.stringify(newCartItems))
    setCartItems(newCartItems)
    const totalPrice: number = newCartItems.reduce((acc: number, item: ShoppingCartItem): number => {
      return acc + (item.price * item.quantity) - (item.price * item.quantity * item.discount)
    }, 0)
    setTotalPrice(parseFloat(totalPrice.toFixed(2)))
  }

  const deleteItem = (cartItemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== cartItemId))
  }

  const clearCart = () => {
    localStorage.setItem('shoppingCart', JSON.stringify([]))
    setCartItems([])
  }

  const contextValue = useMemo(() => ({
    cartItems,
    totalPrice,
    updateItems,
    deleteItem,
    clearCart
  }), [cartItems, totalPrice])

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
