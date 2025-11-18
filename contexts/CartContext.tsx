'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface CartItem {
  slug: string
  title: string
  price: string
  image: string
  type: string
  quantity: number
  size?: string
}

interface CartContextType {
  items: CartItem[]
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (slug: string) => void
  updateQuantity: (slug: string, quantity: number) => void
  clearCart: () => void
  itemCount: number
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('erenti-cart')
    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('erenti-cart', JSON.stringify(items))
  }, [items])

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existingItem = prev.find(i => i.slug === item.slug && i.size === item.size)
      if (existingItem) {
        return prev.map(i =>
          i.slug === item.slug && i.size === item.size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (slug: string) => {
    setItems(prev => prev.filter(item => item.slug !== slug))
  }

  const updateQuantity = (slug: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(slug)
      return
    }
    setItems(prev =>
      prev.map(item => (item.slug === slug ? { ...item, quantity } : item))
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  const total = items.reduce((sum, item) => {
    const priceNum = parseFloat(item.price.replace(/[£,]/g, ''))
    return sum + priceNum * item.quantity
  }, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        itemCount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
