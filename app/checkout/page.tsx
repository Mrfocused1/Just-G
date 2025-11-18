'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import AnimationWrapper from '@/components/AnimationWrapper'
import { useCart } from '@/contexts/CartContext'

interface CheckoutFormData {
  email: string
  firstName: string
  lastName: string
  address: string
  city: string
  postcode: string
  country: string
  phone: string
}

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>()

  if (items.length === 0) {
    router.push('/cart')
    return null
  }

  const onSubmit = async (data: CheckoutFormData) => {
    setIsSubmitting(true)

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log('Order data:', { ...data, items, total })

    // Clear cart and redirect to success page
    clearCart()
    alert('Order placed successfully! (This is a demo - no actual payment was processed)')
    router.push('/collections')
  }

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimationWrapper>
          <h1 className="heading-xl mb-12">Checkout</h1>
        </AnimationWrapper>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* Contact Information */}
                <AnimationWrapper delay={0.1}>
                  <div className="bg-secondary p-8">
                    <h2 className="heading-md mb-6">Contact Information</h2>
                    <div>
                      <label htmlFor="email" className="block label-text mb-3">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register('email', { required: 'Email is required' })}
                        className="w-full px-6 py-4 border border-primary/20 bg-transparent focus:border-accent focus:outline-none elegant-transition"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                </AnimationWrapper>

                {/* Shipping Information */}
                <AnimationWrapper delay={0.2}>
                  <div className="bg-secondary p-8">
                    <h2 className="heading-md mb-6">Shipping Information</h2>
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block label-text mb-3">
                            First Name *
                          </label>
                          <input
                            id="firstName"
                            type="text"
                            {...register('firstName', { required: 'First name is required' })}
                            className="w-full px-6 py-4 border border-primary/20 bg-transparent focus:border-accent focus:outline-none elegant-transition"
                          />
                          {errors.firstName && (
                            <p className="mt-2 text-sm text-red-600">{errors.firstName.message}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block label-text mb-3">
                            Last Name *
                          </label>
                          <input
                            id="lastName"
                            type="text"
                            {...register('lastName', { required: 'Last name is required' })}
                            className="w-full px-6 py-4 border border-primary/20 bg-transparent focus:border-accent focus:outline-none elegant-transition"
                          />
                          {errors.lastName && (
                            <p className="mt-2 text-sm text-red-600">{errors.lastName.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="address" className="block label-text mb-3">
                          Address *
                        </label>
                        <input
                          id="address"
                          type="text"
                          {...register('address', { required: 'Address is required' })}
                          className="w-full px-6 py-4 border border-primary/20 bg-transparent focus:border-accent focus:outline-none elegant-transition"
                        />
                        {errors.address && (
                          <p className="mt-2 text-sm text-red-600">{errors.address.message}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="city" className="block label-text mb-3">
                            City *
                          </label>
                          <input
                            id="city"
                            type="text"
                            {...register('city', { required: 'City is required' })}
                            className="w-full px-6 py-4 border border-primary/20 bg-transparent focus:border-accent focus:outline-none elegant-transition"
                          />
                          {errors.city && (
                            <p className="mt-2 text-sm text-red-600">{errors.city.message}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="postcode" className="block label-text mb-3">
                            Postcode *
                          </label>
                          <input
                            id="postcode"
                            type="text"
                            {...register('postcode', { required: 'Postcode is required' })}
                            className="w-full px-6 py-4 border border-primary/20 bg-transparent focus:border-accent focus:outline-none elegant-transition"
                          />
                          {errors.postcode && (
                            <p className="mt-2 text-sm text-red-600">{errors.postcode.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="country" className="block label-text mb-3">
                          Country *
                        </label>
                        <input
                          id="country"
                          type="text"
                          {...register('country', { required: 'Country is required' })}
                          className="w-full px-6 py-4 border border-primary/20 bg-transparent focus:border-accent focus:outline-none elegant-transition"
                          defaultValue="United Kingdom"
                        />
                        {errors.country && (
                          <p className="mt-2 text-sm text-red-600">{errors.country.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block label-text mb-3">
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          {...register('phone', { required: 'Phone number is required' })}
                          className="w-full px-6 py-4 border border-primary/20 bg-transparent focus:border-accent focus:outline-none elegant-transition"
                        />
                        {errors.phone && (
                          <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimationWrapper>

                {/* Payment Information */}
                <AnimationWrapper delay={0.3}>
                  <div className="bg-secondary p-8">
                    <h2 className="heading-md mb-6">Payment Information</h2>
                    <div className="p-6 border-2 border-accent/30 bg-accent/5 text-center">
                      <p className="body-md text-primary/70">
                        <strong>Demo Mode</strong><br />
                        Payment processing will be integrated in the backend phase.
                      </p>
                    </div>
                  </div>
                </AnimationWrapper>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <AnimationWrapper delay={0.4}>
                <div className="bg-secondary p-8 sticky top-32">
                  <h2 className="heading-md mb-6">Order Summary</h2>

                  {/* Order Items */}
                  <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
                    {items.map(item => (
                      <div key={`${item.slug}-${item.size}`} className="flex gap-4">
                        <div className="w-16 h-20 bg-white flex-shrink-0 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-grow">
                          <p className="body-sm font-medium">{item.title}</p>
                          <p className="body-xs text-primary/60">Size: {item.size}</p>
                          <p className="body-xs text-primary/60">Qty: {item.quantity}</p>
                        </div>
                        <p className="body-sm font-medium">{item.price}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 pt-6 border-t border-primary/20">
                    <div className="flex justify-between body-md">
                      <span>Subtotal</span>
                      <span>£{total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between body-md text-primary/60">
                      <span>Shipping</span>
                      <span>TBD</span>
                    </div>
                    <div className="border-t border-primary/20 pt-3 flex justify-between text-xl font-medium">
                      <span>Total</span>
                      <span>£{total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-8 py-5 bg-primary text-white hover:bg-accent hover:text-primary label-text text-lg elegant-transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Processing...' : 'Place Order'}
                  </button>

                  <div className="mt-6 p-4 border border-accent/30 bg-accent/5">
                    <p className="body-xs text-primary/70">
                      <strong>Made to Order</strong><br />
                      Production time: 10–12 days
                    </p>
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}
