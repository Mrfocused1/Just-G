'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/justgeenfitness' },
    { name: 'Pinterest', href: 'https://pinterest.com/justcream' },
    { name: 'YouTube', href: 'https://youtube.com/@justgeenfitness' },
  ]

  return (
    <footer className="bg-secondary border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-16">
        {/* Desktop: 3-column grid | Mobile: centered compact stack */}
        <div className="hidden md:grid grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <img
                src="/logo.svg"
                alt="Just Cream Logo"
                className="h-10 mb-2 hover:opacity-80 elegant-transition"
              />
            </Link>
            <p className="body-sm text-primary/70">
              Luxury Body Care<br />
              By Just Geen
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="label-text mb-6">Navigate</h3>
            <ul className="flex flex-col space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Shop', href: '/collections' },
                { label: 'About', href: '/bespoke' },
                { label: 'Contact', href: '/contact' },
              ].map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={item.href}
                    className="body-sm text-primary/70 hover:text-accent elegant-transition"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="label-text mb-6">Follow Us</h3>
            <ul className="flex flex-col space-y-2">
              {socialLinks.map((social, index) => (
                <motion.li
                  key={social.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span className="body-sm text-primary/70 cursor-default elegant-transition">
                    {social.name}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile: Compact centered layout */}
        <div className="md:hidden text-center mb-6">
          <Link href="/" className="inline-block">
            <img
              src="/logo.svg"
              alt="Just Cream Logo"
              className="h-8 mb-3 hover:opacity-80 elegant-transition"
            />
          </Link>
          <p className="body-sm text-primary/70 mb-4">
            Luxury Body Care<br />
            By Just Geen
          </p>
          <ul className="flex flex-wrap justify-center gap-4 mb-4">
            {[
              { label: 'Home', href: '/' },
              { label: 'Shop', href: '/collections' },
              { label: 'About', href: '/bespoke' },
              { label: 'Contact', href: '/contact' },
            ].map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link
                  href={item.href}
                  className="text-xs text-primary/70 hover:text-accent elegant-transition"
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 lg:pt-6 border-t border-accent/20 text-center">
          <p className="text-xs text-primary/60">
            © {new Date().getFullYear()} Just Cream. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
