'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface AnimationWrapperProps {
  children: ReactNode
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale'
  delay?: number
  duration?: number
  className?: string
}

export default function AnimationWrapper({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 0.8,
  className = '',
}: AnimationWrapperProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={animations[animation]}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
