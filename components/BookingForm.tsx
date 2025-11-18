'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'

interface BookingFormData {
  name: string
  email: string
  phone: string
  date: string
  store: string
  message: string
}

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>()

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log('Form submitted:', data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const stores = [
    'London - Knightsbridge',
    'London - Mayfair',
    'London - Chelsea',
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block label-text mb-3">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-6 py-4 border border-primary/20 bg-transparent focus:border-accent focus:outline-none elegant-transition"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block label-text mb-3">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className="w-full px-6 py-4 border border-primary/20 bg-transparent focus:border-accent focus:outline-none elegant-transition"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block label-text mb-3">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className="w-full px-6 py-4 border border-primary/20 bg-transparent focus:border-accent focus:outline-none elegant-transition"
            placeholder="+44"
          />
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block label-text mb-3">
            Preferred Appointment Date *
          </label>
          <input
            id="date"
            type="date"
            {...register('date', { required: 'Date is required' })}
            className="w-full px-6 py-4 border border-primary/20 bg-transparent focus:border-accent focus:outline-none elegant-transition"
          />
          {errors.date && (
            <p className="mt-2 text-sm text-red-600">{errors.date.message}</p>
          )}
        </div>

        {/* Store */}
        <div>
          <label htmlFor="store" className="block label-text mb-3">
            Preferred Location *
          </label>
          <div className="relative">
            <select
              id="store"
              {...register('store', { required: 'Please select a location' })}
              className="w-full px-6 py-4 border border-primary/20 bg-white/70 backdrop-blur-sm focus:border-accent focus:bg-white/90 focus:outline-none elegant-transition appearance-none cursor-pointer"
              style={{
                backgroundImage: 'none',
              }}
            >
              <option value="" className="text-primary/60">Select a boutique</option>
              {stores.map((store) => (
                <option key={store} value={store} className="text-primary bg-white">
                  {store}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
              <svg
                className="w-4 h-4 text-primary/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {errors.store && (
            <p className="mt-2 text-sm text-red-600">{errors.store.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block label-text mb-3">
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            {...register('message')}
            className="w-full px-6 py-4 border border-primary/20 bg-transparent focus:border-accent focus:outline-none elegant-transition resize-none"
            placeholder="Tell us about your dream dress..."
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-5 bg-accent text-white hover:bg-primary hover:text-white label-text elegant-transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Request Appointment'}
          </button>
        </div>
      </form>

      {/* Success Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-6"
            onClick={() => setIsSubmitted(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-12 max-w-md w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="heading-sm mb-4">Thank You</h3>
              <p className="body-md text-primary/70 mb-8">
                Your appointment request has been received. We will contact you shortly to confirm
                your booking.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-white label-text elegant-transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
