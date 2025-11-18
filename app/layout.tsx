import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CartProvider } from '@/contexts/CartContext'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Just Cream — Luxury Body Care',
  description: 'Championship-grade luxury body care designed for athletes and champions. Discover Just Cream collection crafted with premium ingredients.',
  openGraph: {
    title: 'Just Cream — Luxury Body Care',
    description: 'Championship-grade luxury body care for champions',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans antialiased bg-background text-primary">
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
