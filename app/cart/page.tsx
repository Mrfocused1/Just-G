'use client'

import { useRouter } from 'next/navigation'
import AnimationWrapper from '@/components/AnimationWrapper'
import { useCart } from '@/contexts/CartContext'
import Link from 'next/link'

export default function CartPage() {
  const router = useRouter()
  const { items, removeFromCart, updateQuantity, total, itemCount } = useCart()

  if (items.length === 0) {
    return (
      <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimationWrapper>
            <div className="text-center py-20">
              <h1 className="heading-xl mb-8">Your Cart is Empty</h1>
              <p className="body-lg text-primary/70 mb-12">
                Discover our curated collections of luxury menswear
              </p>
              <Link
                href="/collections"
                className="inline-block px-12 py-6 bg-primary text-white hover:bg-accent hover:text-primary label-text elegant-transition text-lg"
              >
                Continue Shopping
              </Link>
            </div>
          </AnimationWrapper>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimationWrapper>
          <h1 className="heading-xl mb-12">Shopping Cart</h1>
        </AnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {items.map((item, index) => (
                <AnimationWrapper key={`${item.slug}-${item.size}`} delay={index * 0.1}>
                  <div className="bg-secondary p-6 flex gap-6">
                    {/* Product Image */}
                    <div className="w-32 h-40 flex-shrink-0 bg-white overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="label-text text-accent text-xs mb-1">{item.type}</p>
                          <h3 className="heading-sm text-lg mb-1">{item.title}</h3>
                          {item.size && (
                            <p className="body-sm text-primary/60">Size: {item.size}</p>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.slug)}
                          className="text-primary/40 hover:text-red-600 elegant-transition"
                          aria-label="Remove item"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      <div className="flex justify-between items-center">
                        {/* Quantity Selector */}
                        <div className="flex items-center border border-primary/20">
                          <button
                            onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                            className="px-4 py-2 hover:bg-primary/5 elegant-transition"
                          >
                            −
                          </button>
                          <span className="px-4 py-2 border-x border-primary/20 min-w-[60px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                            className="px-4 py-2 hover:bg-primary/5 elegant-transition"
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <p className="text-xl font-medium">{item.price}</p>
                      </div>
                    </div>
                  </div>
                </AnimationWrapper>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <AnimationWrapper delay={0.3}>
              <div className="bg-secondary p-8 sticky top-32">
                <h2 className="heading-md mb-8">Order Summary</h2>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between body-md">
                    <span>Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})</span>
                    <span>£{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between body-md text-primary/60">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="border-t border-primary/20 pt-4 flex justify-between text-xl font-medium">
                    <span>Total</span>
                    <span>£{total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => router.push('/checkout')}
                  className="w-full py-5 bg-primary text-white hover:bg-accent hover:text-primary label-text text-lg elegant-transition mb-4"
                >
                  Proceed to Checkout
                </button>

                <Link
                  href="/collections"
                  className="block w-full py-5 border-2 border-primary text-primary hover:bg-primary hover:text-white label-text text-lg elegant-transition text-center"
                >
                  Continue Shopping
                </Link>

                {/* Made to Order Notice */}
                <div className="mt-8 p-4 border border-accent/30 bg-accent/5">
                  <p className="body-sm text-primary/70">
                    <strong>Made to Order</strong><br />
                    Please allow 10–12 days for completion of your bespoke pieces.
                  </p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </main>
  )
}
