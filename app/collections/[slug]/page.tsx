'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import AnimationWrapper from '@/components/AnimationWrapper'
import { useCart } from '@/contexts/CartContext'
import { motion } from 'framer-motion'

// All products data
const allProducts = [
  { slug: 'ufu', title: 'Ufu', price: '£105.00', type: 'Apparel', image: 'https://www.erenti.co.uk/cdn/shop/files/8.png?v=1743681088&width=800', description: 'Elegant apparel piece from the Tones of Authority collection.' },
  { slug: 'tajiri', title: 'TAJIRI', price: '£105.00', type: 'Apparel', image: 'https://www.erenti.co.uk/cdn/shop/files/31.png?v=1743681088&width=800', description: 'Sophisticated apparel from the Tones of Authority collection.' },
  { slug: 'enzi', title: 'ENZI', price: '£105.00', type: 'Apparel', image: 'https://www.erenti.co.uk/cdn/shop/files/15.png?v=1743681088&width=800', description: 'Refined apparel piece from the Tones of Authority collection.' },
  { slug: 'nkosi', title: 'NKOSI', price: '£105.00', type: 'Apparel', image: 'https://www.erenti.co.uk/cdn/shop/files/1.png?v=1743681088&width=800', description: 'Timeless apparel from the Tones of Authority collection.' },
  { slug: 'simba', title: 'Simba', price: '£325.00', type: 'Kaftan', image: 'https://www.erenti.co.uk/cdn/shop/files/3CB3CC6C-5CD9-4F2C-B39B-40487564E282.jpg?v=1743681088&width=800', description: 'Luxurious kaftan crafted to order with premium materials.' },
  { slug: 'tien', title: 'Tien', price: '£250.00', type: 'Kaftan', image: 'https://www.erenti.co.uk/cdn/shop/files/247F4C32-5C60-4108-A28A-6353731A1DB9.heic?v=1743681088&width=800', description: 'Elegant kaftan from the Tones of Authority collection.' },
  { slug: 'lesotho', title: 'Lesotho', price: '£195.00', type: 'Two Piece', image: 'https://www.erenti.co.uk/cdn/shop/files/Lesotho_3.png?v=1743681088&width=800', description: 'Contemporary two-piece set celebrating refined style.' },
  { slug: 'mtemi', title: 'Mtemi', price: '£195.00', type: 'Two Piece', image: 'https://www.erenti.co.uk/cdn/shop/files/Mtemi_2.png?v=1743681088&width=800', description: 'Sophisticated two-piece ensemble from the collection.' },
  { slug: 'ere', title: 'Ere', price: '£195.00', type: 'Kaftan', image: 'https://www.erenti.co.uk/cdn/shop/files/image_417da2e9-012c-40e7-8353-152880dd244d.heic?v=1743681088&width=800', description: 'Timeless kaftan design with exceptional craftsmanship.' },
  { slug: 'mahe', title: 'Mahe', price: '£175.00', type: 'Apparel', image: 'https://www.erenti.co.uk/cdn/shop/products/085A9824.jpg?v=1634560462&width=800', description: 'Premium apparel piece from the Tones of Authority collection.' },
  { slug: 'carpe', title: 'Carpe', price: '£150.00', type: 'Apparel', image: 'https://www.erenti.co.uk/cdn/shop/files/8.png?v=1743681088&width=800', description: 'Elegant apparel celebrating timeless sophistication.' },
  { slug: 'tepa', title: 'Tepa', price: '£150.00', type: 'Kaftan', image: 'https://www.erenti.co.uk/cdn/shop/files/15.png?v=1743681088&width=800', description: 'Refined kaftan from the Tones of Authority collection.' },
]

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState('')
  const [addedToCart, setAddedToCart] = useState(false)

  const product = allProducts.find(p => p.slug === params.slug)

  if (!product) {
    return (
      <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="heading-xl mb-8">Product Not Found</h1>
          <button
            onClick={() => router.push('/collections')}
            className="px-8 py-4 bg-primary text-white hover:bg-accent hover:text-primary elegant-transition"
          >
            Back to Shop
          </button>
        </div>
      </main>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }

    addToCart({
      slug: product.slug,
      title: product.title,
      price: product.price,
      image: product.image,
      type: product.type,
      size: selectedSize,
    })

    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 3000)
  }

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <AnimationWrapper animation="slideRight">
            <div className="relative aspect-[3/4] bg-secondary overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>
          </AnimationWrapper>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <AnimationWrapper animation="fadeUp">
              <p className="label-text text-accent mb-3">{product.type} Collection</p>
              <h1 className="heading-xl mb-6">{product.title}</h1>
              <p className="text-3xl font-light mb-8">{product.price}</p>
              <p className="body-lg text-primary/80 mb-12">{product.description}</p>

              {/* Made to Order Notice */}
              <div className="bg-secondary p-6 mb-8">
                <p className="body-md text-primary/70">
                  <strong>Made to Order</strong><br />
                  Each piece is meticulously crafted exclusively for you. Please allow 10–12 days for completion.
                </p>
              </div>

              {/* Size Selector */}
              <div className="mb-8">
                <label className="label-text block mb-4">Select Size</label>
                <div className="grid grid-cols-6 gap-3">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 border-2 elegant-transition ${
                        selectedSize === size
                          ? 'border-accent bg-accent text-white'
                          : 'border-primary/20 hover:border-accent'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full py-5 bg-primary text-white hover:bg-accent hover:text-primary label-text text-lg elegant-transition mb-4"
              >
                {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
              </button>

              {/* Continue Shopping */}
              <button
                onClick={() => router.push('/collections')}
                className="w-full py-5 border-2 border-primary text-primary hover:bg-primary hover:text-white label-text text-lg elegant-transition"
              >
                Continue Shopping
              </button>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </main>
  )
}
